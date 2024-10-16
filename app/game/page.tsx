"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { Unocard } from "../components/Unocard";
import Loading from "../components/Loading";
export async function sendData() {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let code = "";
    for (let i = 0; i < 8; i++) {
        code += arr[Math.floor(Math.random() * 1000) % arr.length];
    }
    let playerid = "";
    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            playerid += Math.floor(Math.random() * 10);
        }
        else {
            playerid += arr[Math.floor(Math.random() * 1000) % arr.length];
        }
    }
    return [code, playerid];
}
export default function Game() {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(["","","","","","","","",""]);
    async function call() {
        let val = await sendData();
        let code = val[0];
        let playerid = val[1];
        let data = await axios.post('http://localhost:3000/api', {
            code,
            playerid
        });
        setCode(code);
        setLoading(false);
    }
    async function recall() {
       try{
        let res = await axios.post(`http://localhost:3000/api/perform`, {
            code
        });
        setState(res.data.state);
        console.log(state);
       }
       catch(err)
       {
        console.log("---------------------->"+err);
       }
    }
    useEffect(() => {
        let clr = setInterval(recall, 1000);
        return () => clearInterval(clr);
    }, [])
    useEffect(() => {
        call();
    }, []);
    return (
        <div>
            {loading ? <Loading /> :
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
                            <Unocard state={state} code={code} val="X" />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}