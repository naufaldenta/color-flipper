import React, { useEffect, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
export default function Content() {
    const colors = ["#F0F8FF",
"#FAEBD7",
"#00FFFF",
"#7FFFD4",
"#F0FFFF",
"#F5F5DC",
"#FFE4C4",
"#000000",
"#FFEBCD",
"#0000FF",
"#8A2BE2",
"#A52A2A",
"#DEB887",
"#5F9EA0",
"#7FFF00",
"#D2691E",
"#FF7F50",
"#6495ED",
"#FFF8DC",
"#DC143C",
"#00FFFF",
"#00008B",
"#008B8B",
"#B8860B",
"#A9A9A9",
"#006400",
"#BDB76B",
"#8B008B",
"#556B2F",
"#FF8C00",
"#9932CC",
"#8B0000",
"#E9967A",
"#8FBC8F",
"#483D8B",
"#2F4F4F",
"#00CED1",
"#9400D3",
"#FF1493"
];
    const [backgroundColor, setBackgroundColor] = useState('');
    const[copied, setCopied] = useState(false);
    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * colors.length);
        setBackgroundColor(colors[randomNumber]);
    };

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
    }, [backgroundColor]);

    return (
        <>
            <div className="background flex flex-col items-center justify-center w-[100%] h-[100vh] rounded-[15px]">
                <span className="bg-black rounded-[10px] flex gap-10 items-center">
                    <h1 className="text-white text-[32px] p-4">Background Color:</h1>
                    <span className="flex gap-10">
                    <input
                        className="bg-transparent text-white border-none focus:outline-none"
                        type="text"
                        value={backgroundColor}
                        readOnly onChange={({target: {backgroundColor}}) => setBackgroundColor(backgroundColor)}
                    />
                    <CopyToClipboard text={backgroundColor} onCopy={() => setCopied(true)}>
               <button
                className="btn mx-[10px] rounded-lg text-white hover:bg-blue-600 duration-[0.3s] hover:border-blue-600 hover:scale-[1.01]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>
</button>
               </CopyToClipboard>
                    </span>
                   
                </span>
                <button
                    onClick={handleClick}
                    className="btn mt-10 px-[2.5rem] py-[14px] border-[2px] rounded-lg bg-blue-500 text-white hover:bg-blue-600 duration-[0.3s] hover:border-blue-600 hover:scale-[1.01]">
                    Flip Color
                </button>
               
            </div>
        </>
    );
}