import { NextResponse } from "next/server";
import { arr } from "../route";
export async function POST(request: Request) {
    try{
        const body = await request.json();
    const { code } = body;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === code) {
            return NextResponse.json({ state: arr[i].state });
        }
    }

    // If the code is not found, return an empty state or error message
    return NextResponse.json({ message: "Code not found", state: [] }, { status: 404 });
    }
    catch(err:any)
    {
        console.log(err);
        return NextResponse.json({ message: "Code not found", state: [] }, { status: 404 });
    }
}
export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { code, value, number } = body;

        let codeFound = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === code) {
                arr[i].state[parseInt(number, 10) - 1] = value; // Safely parse `number`
                codeFound = true;
                break;
            }
        }

        if (!codeFound) {
            return NextResponse.json({ message: 'Code not found' }, { status: 404 });
        }

        return NextResponse.json({
            message: 'Code updated successfully',
            arr,
        }, { status: 200 });

    } catch (error: any) {
        console.log(error);
        return NextResponse.json(
            { message: 'Failed to process request', error: error.message },
            { status: 500 }
        );
    }
}