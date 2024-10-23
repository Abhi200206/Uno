export default function Gamecomp({ char, val, num, cb, state }: { char: any, val: any, num: any, cb: any, state: any }) {
    function handleClick() {
        if (state[num] == 'click') { 
            cb(num);  
        }
    }

    return (
        <div onClick={handleClick} className={`${char === 'X' ? 'bg-blue-500' : 'white'
            } ${char === '0' ? 'bg-red-500' : 'white'} p-2 w-[100px] h-[100px] rounded text-center items-center cursor-pointer border-[1px]`}
        >
            <p className="pt-2">{char}</p>
        </div>
    );
}
