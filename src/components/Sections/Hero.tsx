// import bgImg from './assets/images/heroBg.png';

import Navbar from "../Navbar";
import siteLogo from "../../assets/images/siteLogo.svg";
import heroMainImg from "../../assets/images/heroMainImg.png";
import decorImg from "../../assets/images/decorImg.svg";





export default function Hero() {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }

    return (
        <section className='h-max w-screen bg-[url("./assets/images/heroBg.png")] bg-cover bg-center bg-no-repeat overflow-x-hidden'>
            <div className='h-full w-full bg-[#1F2732]/[.81] flex flex-col items-center'>
                <div className="w-[1360px] flex flex-row justify-between my-10">
                    <img src={siteLogo} />

                    <button onClick={handleClick}
                            className="text-white text-lg font-['Outfit'] bg-white/[.1] px-[70px] py-6 border border-white/[.25]"
                    >
                        Book A Consultation
                    </button>
                </div>

                <Navbar />

                <div className="w-[1360px] columns-2">
                    <div className="mt-28 hover:cursor-default">
                        <img src={decorImg} />

                        <h1 className="text-white text-6xl text-left font-['Cormorant_Garamond'] leading-[78px] tracking-[.4px] my-6">
                            We're Group Of Certified Law Professionals
                        </h1>

                        <p className="text-xl text-[#D1B06B] font-['Outfit'] font-thin">
                            we have helped countless maritime workers and their families go up against the largest offshore companies and win.
                        </p>

                        <button onClick={handleClick}
                                className="w-[270px] py-6 mt-7 text-[#1F2732] text-xl bg-[#D1B06B]"
                        >
                            Get In Touch
                        </button>
                    </div>

                    <div className="p-0 m-0">
                        <img src={heroMainImg} className="p-0 m-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}
