// Constants
import { timelineInfo, progressBars } from "../../lib/constants";


// Images
import justice from "../../assets/images/aboutUsJustice.png";
import decorImg from "../../assets/images/decorImg.svg";



type TTimelineBlock = {
    header: string,
    text: string,
}



type TProgressBar = {
    name: string,
    percentage: string,
}





export default function AboutUs() {
    return (
        <section className="w-screen h-max py-[140px] flex flex-col justify-center items-center bg-[url('./assets/images/aboutUsBg.png')] bg-cover bg-center bg-no-repeat">
            <div className="w-[1360px] flex flex-row justify-center items-start gap-16 py-20 px-[60px] bg-[#1F2732]/[.85]">
                <div className="w-1/3">
                    <h2 className="text-white text-[42px] font-['Cormorant_Garamond'] leading-[58px] tracking-[.4px]">
                        We Are Top Lawyers And History
                    </h2>

                    <img src={decorImg} className="mt-4 mb-12" />

                    {timelineInfo.map((info, index) => (
                        <TimelineBlock key={index} header={info.header} text={info.text} />
                    ))}
                </div>

                <div className="w-1/3 flex flex-col justify-center items-center">
                    <img src={justice} />
                </div>

                <div className="w-1/3">
                    <h2 className="text-white text-[42px] font-['Cormorant_Garamond'] leading-[58px] tracking-[.4px]">
                        We Are Specialized And Exprerienced
                    </h2>

                    <img src={decorImg} className="mt-4 mb-12" />

                    <p className="text-lg text-[#D7D7D7] font-thin font-['Outfit'] leading-7 tracking-[.4px]">
                        Keep yourself up-to-date on your area of law. Be aware of new developments, as laws and rules often change based on the situation and new cases are being decided every day.
                    </p>

                    <div className="mt-10">
                        {progressBars.map((info) => (
                            <ProgressBar key={info.name} name={info.name} percentage={info.percentage} />
                        ))}
                    </div>

                    <button className="mt-3 py-5 px-[60px] text-xl text-[#1F2732] font-['Outfit'] leading-9 tracking-[.4px] bg-[#D1B06B]">
                        Free Consulting
                    </button>
                </div>
            </div>
        </section>
    )
}





function TimelineBlock({
    header,
    text
} : TTimelineBlock) {
    
    return (
        <div className="flex flex-col font-['Outfit'] leading-7 tracking-[.4px] mb-8">
            <span className="text-xl text-[#D1B06B] mb-3">
                {header}
            </span>

            <span className="text-lg text-[#D7D7D7] font-thin">
                {text}
            </span>
        </div>
    )
}





function ProgressBar({
    name,
    percentage
} : TProgressBar) {

    return (
        <div className="flex flex-col mb-10">
            <div className="flex flex-row justify-between">
                <span className="text-lg text-white font-['Outfit'] leading-8 tracking-[.4px] mb-3">
                    {name}
                </span>

                <span className="text-lg text-white font-['Outfit'] leading-8 tracking-[.4px]">
                    {percentage}
                </span>
            </div>

            <div className="w-full h-[5px] bg-white">
                <div className={`w-[${percentage}] h-[5px] bg-[#D1B06B]`} />
            </div>
        </div>
    )
}
