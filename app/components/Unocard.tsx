import { useState } from "react";
import { Cardcompoent } from "./Cardcomponent";
export function Unocard({val,code,state}:{val:string,code:string,state:any})
{

    return (
        <div>
            <div className="flex">
                <Cardcompoent state={state[0]} code={code} id={"1"} val={val}/>
                <Cardcompoent state={state[1]} code={code} id={"2"} val={val}/>
                <Cardcompoent state={state[2]} code={code} id={"3"} val={val}/>
            </div>
            <div className="flex">
                <Cardcompoent state={state[3]} code={code} id={"4"} val={val}/>
                <Cardcompoent state={state[4]} code={code} id={"5"} val={val}/>
                <Cardcompoent state={state[5]} code={code} id={"6"} val={val}/>
            </div>
            <div className="flex">
                <Cardcompoent state={state[6]} code={code} id={"7"} val={val}/>
                <Cardcompoent state={state[7]} code={code} id={"8"} val={val}/>
                <Cardcompoent state={state[8]} code={code} id={"9"} val={val}/>
            </div>
        </div>
    )
}