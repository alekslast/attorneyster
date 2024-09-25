// Images
import footerBridge from "../../assets/images/footerBridge.png";
import footerDecor from "../../assets/images/footerDecorImg.svg";
import siteLogo from "../../assets/images/siteLogo.svg";
import fb from "../../assets/images/fbWhite.svg";
import twitter from "../../assets/images/twitterWhite.svg";
import insta from "../../assets/images/instaWhite.svg";
import pinterest from "../../assets/images/pinterestWhite.svg";





export default function Footer() {
    return (
        <footer className="w-screen h-max flex flex-col justify-center items-center bg-[#161D27] pb-10">
            <div className="w-full h-full">
                <img src={footerBridge} className="w-full h-full" />
            </div>

            <div className="w-[1360px] flex flex-col justify-center items-center overflow-x-hidden">
                <div className="w-full flex flex-row justify-center items-center mt-[130px] mb-[95px]">
                    <img src={footerDecor} />
                    <img src={siteLogo} />
                    <img src={footerDecor} className="rotate-180" />
                </div>

                <div className="w-full flex flex-row gap-[100px]">
                    <div className="w-1/4">
                        <div>
                            <h4 className="py-5 text-white text-3xl font-['Cormorant_Garamond'] leading-10 tracking-[.4px] border-y border-y-[#3B434E]">
                                Quick Link
                            </h4>
                        </div>

                        <div className="flex flex-row mt-10">
                            <div className="flex flex-col text-lg text-[#D7D7D7] font-['Outfit'] font-thin leading-8 tracking-[.4px] me-10">
                                <a  href=""
                                    className="mb-4"
                                >
                                    Home
                                </a>

                                <a  href=""
                                    className="mb-4"
                                >
                                    Abount Us
                                </a>

                                <a  href=""
                                    className="mb-4"
                                >
                                    Pricing
                                </a>

                                <a  href=""
                                    className="mb-4"
                                >
                                    Testimonials
                                </a>

                                <a  href=""
                                    className="mb-4"
                                >
                                    Contact Us
                                </a>
                                
                            </div>

                            <div className="flex flex-col text-lg text-[#D7D7D7] font-['Outfit'] font-thin leading-8 tracking-[.4px]">
                                <a  href=""
                                    className="mb-4"
                                >
                                    Blog
                                </a>
                                <a  href=""
                                    className="mb-4"
                                >
                                    Blog Single
                                </a>
                                <a  href=""
                                    className="mb-4"
                                >
                                    Cases
                                </a>
                                <a  href=""
                                    className="mb-4"
                                >
                                    Case Single
                                </a>
                                <a  href=""
                                    className="mb-4"
                                >
                                    Practice Areas
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/4">
                        <div>
                            <h4 className="py-5 text-white text-3xl font-['Cormorant_Garamond'] leading-10 tracking-[.4px] border-y border-y-[#3B434E]">
                                Utility Pages
                            </h4>
                        </div>

                        <div className="flex flex-col mt-10 text-lg text-[#D7D7D7] font-['Outfit'] font-thin leading-8 tracking-[.4px]">
                            <a  href=""
                                className="mb-4"
                            >
                                Style guide
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Licenses
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Protected
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Changelog
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Error Page
                            </a>
                        </div>
                    </div>

                    <div className="w-1/4">
                        <div>
                            <h4 className="py-5 text-white text-3xl font-['Cormorant_Garamond'] leading-10 tracking-[.4px] border-y border-y-[#3B434E]">
                                Practice Area
                            </h4>
                        </div>

                        <div className="flex flex-col mt-10 text-lg text-[#D7D7D7] font-['Outfit'] font-thin leading-8 tracking-[.4px]">
                            <a  href=""
                                className="mb-4"
                            >
                                Business Law
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Construction Law
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Car Accident
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Criminal Law
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Family Law
                            </a>
                        </div>
                    </div>

                    <div className="w-1/4">
                        <div>
                            <h4 className="py-5 text-white text-3xl font-['Cormorant_Garamond'] leading-10 tracking-[.4px] border-y border-y-[#3B434E]">
                                Contact Us
                            </h4>
                        </div>

                        <div className="flex flex-col mt-10 text-lg text-[#D7D7D7] font-['Outfit'] font-thin leading-8 tracking-[.4px]">
                            <a  href=""
                                className="mb-4"
                            >
                                Home
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Abount Us
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Pricing
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Testimonials
                            </a>
                            <a  href=""
                                className="mb-4"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                </div>
            
                <div className="w-full flex flex-row justify-between items-center py-8 px-2 mt-[75px] border-y border-y-[#3B434E]">
                    <div className="font-['Outfit']">
                        <span className="text-white text-base font-thin">Copyright © Attorney Law | Designed by <span className="text-base text-[#D1B06B] font-normal">VictorFlow</span> - Powered by <span className="text-base text-[#D1B06B] font-normal">Webflow</span></span>   
                    </div>
                    
                    <div>
                        <div className="flex flex-row items-center gap-5">
                            <span className="text-lg text-[#D1B06B] font-['Outfit']">Follow:</span>
                            <a href="" target="_blank"><img src={fb} /></a>
                            <a href="" target="_blank"><img src={twitter} /></a>
                            <a href="" target="_blank"><img src={insta} /></a>
                            <a href="" target="_blank"><img src={pinterest} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
