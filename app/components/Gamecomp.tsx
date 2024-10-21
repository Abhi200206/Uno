export default function Gamecomp({ char, val, num, cb, state }: { char: any, val: any, num: any, cb: any, state: any }) {
    // Function to handle the click event and update the state
    function handleClick() {
        if (state[num] == 'click') {  // Only allow setting if the cell is empty
              // Set the value (X or O)
            cb(num);  // Call the callback to update the state and sync across tabs
        }
    }

    return (
        <div onClick={handleClick} className="p-2 w-[100px] h-[100px] rounded text-center items-center cursor-pointer border-[1px]">
            <p className="pt-2">{char}</p>
        </div>
    );
}
