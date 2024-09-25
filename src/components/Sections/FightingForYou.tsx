// Custom components
import FightingForYouDiv from "../FightingForYouDiv";


// Constants
import { fightingForYouConst } from "../../lib/constants";


// Images
import decorImg from "../../assets/images/decorImg2.svg";
import fightingDiv from "../../assets/images/fightingForYouImg.png";





export default function FightingForYou() {
    return (
        <section className="w-screen h-max flex flex-row justify-center items-center pt-[125px] pb-[80px]">
            <div className="w-[1360px] flex flex-col justify-center items-center">
                <h2 className="text-[#161D27] text-5xl text-center font-['Cormorant_Garamond'] leading-[54px] tracking-[.4px]">
                    Fighting To Get What<br/>You Deserve
                </h2>

                <img src={decorImg} className="mt-[11px] mb-10" />

                <p className="text-[#909090] text-xl font-['Outfit'] leading-8 tracking-[.4px] mb-[60px]">
                    Our board-certified family law attorneys work to achieve a fair and timely resolution of the legal issues in your case.
                </p>

                <div className="w-full flex flex-row gap-8">
                    
                    {fightingForYouConst.map((card => (
                        <FightingForYouDiv  key={card.header}
                                            icon={card.icon}
                                            iconSpan={card.iconSpan}
                                            header={card.header}
                                            headerSpan={card.headerSpan} />
                    )))}

                    <div className={`relative w-1/3 h-[180px]`}>
                        <img src={fightingDiv} className="absolute h-fit w-fit" />

                        <div className="w-1/2 flex flex-col ps-[50px] py-10">
                            <h3 className="relative text-white text-3xl font-['Outfit'] leading-10 tracking-[.4px] mb-3">
                                15,890+
                            </h3>

                            <span className="relative text-white text-xl font-['Outfit'] leading-6 tracking-[.4px]">
                                Criminal Defense
                            </span>

                            <span className="relative text-white text-xl font-['Outfit'] leading-6 tracking-[.4px]">
                                Case Served
                            </span>
                        </div>

                        <div className="w-1/2" />
                    </div>
                </div>
            </div>
        </section>
    )
}
