
import decorImg from "../../assets/images/decorImg.svg";
import socratus from "../../assets/images/welcomeImg1.png";
import court from "../../assets/images/welcomeImg2.png";
import peterIcon from "../../assets/images/peterParker.png";
import note from "../../assets/images/note-icon.svg";





export default function WelcomeSection() {
    return (
        <section className="h-max w-screen bg-[#161D27] flex justify-center py-36">
            <div className="w-[1360px] flex flex-row justify-center items-center gap-16">
                <div className="w-1/3 h-full flex flex-col justify-between">
                    <img src={socratus} />
                    <img src={court} />
                </div>

                <div className="w-2/3">
                    <div>
                        <h2 className="text-white text-5xl font-['Cormorant_Garamond'] leading-[59px] tracking-[.4px]">
                            Welcome to Attorney Law -<br />Lawyer & Law Firm Company
                        </h2>
                    </div>

                    <img src={decorImg} className="mt-3" />

                    <p className="my-10 text-[#D7D7D7] text-xl font-['Outfit'] leading-8 tracking-[.4px] font-thin">
                        Although we are located in Brooklyn, our maritime lawyers are proud to help the injured throughout the nation, including workers who were working in foreign waters at the time of the incident go up against the largest offshore companies and win.
                    </p>

                    <div className="flex flex-row items-center gap-5 mb-11">
                        <img src={peterIcon} />

                        <h3 className="text-white text-4xl font-['Cormorant_Garamond'] leading-[59px] tracking-[.4px]">
                            Peter Parker
                        </h3>
                    </div>

                    <div className="flex flex-row gap-8">
                        <div className="w-[315px] flex flex-row items-center gap-5 bg-[#3B434E] py-9 px-12">
                            <div>
                                <img src={note} />
                            </div>

                            <div className="flex flex-col text-[#D7D7D7] text-xl font-['Outfit'] leading-7 tracking-[.4px] font-normal">
                                <span>95%</span>
                                <span>Case Success</span>
                            </div>
                        </div>

                        <div className="w-[315px] flex flex-row items-center gap-5 bg-[#D1B06B] py-9 px-12">
                            <div className="bg-[#161D27] flex justify-center items-center font-['Outfit'] rounded-md">
                                <span className="text-white text-3xl leading-10 tracking-[.4px] px-[15px] py-[10px]">
                                    35+
                                </span>
                            </div>

                            <div className="flex flex-col text-[#1F2732] text-xl font-['Outfit'] leading-7 tracking-[.4px] font-normal">
                                <span>Years</span>
                                <span>Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
