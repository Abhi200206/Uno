"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [code, setCode] = useState();
  const router=useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" ">
        <div onClick={()=>router.push('/game')} className="cursor-pointer border-[1px] border-black text-center p-2 rounded bg-black text-white hover:text-black hover:bg-white "><p>Create</p></div>
        <div className="text-2xl font-serif text-center my-8">
          <p>OR</p>
        </div>
        <div >
          <input onChange={(e:any)=>{
            setCode(e.target.value);
          }}   className="rounded border-[1px] border-black p-1 my-2" type="text" placeholder="Enter the code" />
          <div onClick={()=> router.push(`/newGame?code=${code}`)} className="cursor-pointer border-[1px] border-black text-center p-2 rounded bg-black text-white hover:text-black hover:bg-white "><p>Join</p></div>
        </div>
      </div>
    </div>
  );
}
