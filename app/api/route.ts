import { NextResponse } from "next/server";
interface Arr{
    id:string,
    players:{
        player1:string,
        player2:string
    },
    state?:any
}
export const arr: Arr[] = [];

export async function GET() {
    return NextResponse.json({ arr });
}
export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { code, playerid } = body;

       for(let i=0;i<arr.length;i++)
       {    
            if(arr[i].id==code)
            {
                arr[i].players.player2=playerid;
                break;
            }
       }
        return NextResponse.json({
            message: 'Code added successfully',
            arr,
        }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json(
            { message: 'Failed to process request', error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { code, playerid } = body;

        arr.push({
            id: code,
            players: {
                player1: playerid,
                player2: ""
            },
            state:["","","","","","","","",""]
        });
        return NextResponse.json({
            message: 'Code added successfully',
            arr,
        }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json(
            { message: 'Failed to process request', error: error.message },
            { status: 500 }
        );
    }
}
