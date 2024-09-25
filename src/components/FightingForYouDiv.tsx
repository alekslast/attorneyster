type TFightingForYouDiv = {
    icon: string,
    iconSpan: string,
    header: string,
    headerSpan: string
}

export default function FightingForYouDiv({
    icon,
    iconSpan,
    header,
    headerSpan,
} : TFightingForYouDiv) {

    return (
        <div className="w-1/3 h-[180px] flex flex-row justify-center items-center bg-[#FBFBFB]">
            <div className="flex flex-row items-center w-full gap-5 ps-[30px]">
                <div className="h-[120px] w-[120px] flex flex-col justify-center items-center border-2 border-[#D1B06B]">
                    <img src={icon} />

                    <span className="text-[#1F2732] text-3xl font-['Outfit'] leading-10 tracking-[.4px]">
                        {iconSpan}
                    </span>
                </div>

                <div className="">
                    <h3 className="text-[#1F2732] text-3xl font-['Cormorant_Garamond'] leading-[42px] tracking-[.4px]">
                        {header}
                    </h3>

                    <span className="text-[#909090] text-xl font-['Outfit'] leading-8 tracking-[.4px]">
                        {headerSpan.includes('Number Of Clients') ? <span>Number Of Clients<br />We've Served</span> : headerSpan}
                    </span>
                </div>
            </div>
        </div>
    )
}
