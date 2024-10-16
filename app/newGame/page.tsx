"use client";
import axios from "axios";
import { useSearchParams } from 'next/navigation';
import { sendData } from '../game/page';
import { useEffect, useState } from 'react';
import { Unocard } from "../components/Unocard";
export default function Newgame() {
    const [code, setCode] = useState("");
    const params = useSearchParams();
    const [state,setState]=useState(["","","","","","","","",""]);
    const id: any = params.get('code');
    async function call() {
        let val = await sendData();
        let playerid = val[1];
        let data = await axios.put('http://localhost:3000/api', {
            code: id,
            playerid
        });
        setCode(id);
    }
    async function recall()
    {
        let res=await axios.post(`http://localhost:3000/api/perform`,{
            code
        });
        setState(res.data.state);
    }
    useEffect(()=>{
        let clr=setInterval(recall,1000);
        return ()=>clearInterval(clr);
    },[])

    useEffect(() => {
        call();
    }, []);
    return (
        <div>
            <div className="m-2 flex justify-between">
                <div>Uno</div>
                <div className="flex gap-2">
                    <p>Code:</p>
                    <div>{code}</div>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div>
                <Unocard state={state}  code={code} val="0"/>
                </div>
            </div>
        </div>
    )
}