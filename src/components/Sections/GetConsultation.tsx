// Images
import decorImg from "../../assets/images/decorImg.svg";
import phone from "../../assets/images/phoneIconWhite.svg";





export default function GetConsultation() {
    return (
        <section className="h-max w-screen flex flex-row justify-center items-center py-[140px] bg-[#161D27]">
            <div className="w-[1360px] h-full flex flex-row justify-center items-center gap-[100px]">
                <div className="w-1/2">
                    <h2 className="capitalize text-white text-5xl font-['Cormorant_Garamond'] leading-[59px] tracking-[.4px]">
                        Our professional Expert law team is always ready to serve you
                    </h2>

                    <img src={decorImg} className="mt-5 mb-11" />

                    <p className="text-[#D7D7D7] text-xl font-['Outfit'] leading-8 tracking-[.4px] mb-9">
                        We&apos;re always available for new cases big or small. Send us an email and we&apos;ll get in touch shortly, or phone between 8:00 am and 7:00 pm Monday to Saturday.
                    </p>

                    <button className="py-6 px-[70px] text-[#1F2732] text-xl font-['Outfit'] bg-[#D1B06B]">
                        Contact Us
                    </button>
                </div>

                <div className="w-1/2 h-full bg-white p-10">
                    <div className="text-[#1F2732] border-[10px] border-[#D7D7D7] px-10 pt-12 pb-14">
                        <h3 className="text-[46px] font-['Cormorant_Garamond'] leading-[54px] tracking-[.4px]">
                            Get a Free Consultation
                        </h3>

                        <p className="mb-9 mt-4 text-[#909090] text-xl leading-8 tracking-[.4px]">
                            You can get free consultation and case evaluation from us via the following contact number
                        </p>

                        <div className="flex flex-row gap-4">
                            <div className="w-[70px] h-[70px] flex flex-col justify-center items-center bg-[#D1B06B]">
                                <img src={phone} />
                            </div>

                            <div className="flex flex-col font-['Outfit']">
                                <span className="text-lg">
                                    Call Us On:
                                </span>

                                <span className="text-3xl">
                                    911-987654321
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
