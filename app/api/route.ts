import { NextResponse } from "next/server";
let id=0;
export function GET()
{
    ++id;
    let bool=true;
    if(id%2==0)
    {
        bool=false;
    }
    return NextResponse.json({id,bool});
}