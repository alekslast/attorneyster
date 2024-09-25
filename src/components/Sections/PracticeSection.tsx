// Custom components
import PracticeAreaCard from "../PracticeAreaCard";


// Constants
import { practiceCardInfo } from "../../lib/constants";


// Images
import decorImg from "../../assets/images/decorImg.svg";





export default function PracticeSection() {
    return (
        <section className="w-screen flex flex-row justify-center items-center bg-[#161D27] pt-[120px] pb-28">
            <div className="w-[1360px]">
                <div className="w-full flex flex-row justify-between mb-8">
                    <div className="w-1/2 flex flex-col">
                        <h2 className="text-white text-5xl leading-[58.5px] tracking-[.4px] font-['Cormorant_Garamond']">
                            Explore The perfect<br />Our Practice Areas
                        </h2>

                        <img src={decorImg} className="w-[95px] h-[45px] mt-3 mb-8" />
                    </div>

                    <p className="w-1/2 text-[#D7D7D7] text-xl leading-8 tracking-[.4px] font-['Outfit'] font-thin">
                        We are a group of civil litigation/trial attorneys who focus on providing a justice based on the issues relating to insurance defense, insurance coverage, bad faith, insurance fraud and criminal litigation.
                    </p>
                </div>

                <div className="columns-3 gap-8">
                    {practiceCardInfo.map(card => (
                        <PracticeAreaCard key={card.name} name={card.name} description={card.description} image={card.image} />
                    ))}
                </div>
            </div>
        </section>
    )
}
