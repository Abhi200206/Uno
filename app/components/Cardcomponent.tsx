import { useState } from "react"
import axios from "axios";
export function Cardcompoent({val,id,code,state}:{val:string,id:any,code:string,state:any})
{
    async function send()
    {
       
        try{
            let res=await axios.put(`http://localhost:3000/api/perform`,{
                code,
                value:val,
                number:id
            })
        }
        catch(err)
        {
            
        }
    }
    return (
        <div onClick={send} className="cursor-pointer w-[80px] h-[80px] border-[1px] text-center border-black rounded">
           <p className="text-2xl "> {state}</p>
        </div>
    )
}