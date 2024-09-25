// Images
import decorImg from "../../assets/images/decorImg3.svg";

import homePartner from "../../assets/images/partner1.svg";
import vsPartner from "../../assets/images/partner2.svg";
import brandPartner from "../../assets/images/partner3.svg";
import natureHomePartner from "../../assets/images/partner4.svg";
import classicPartner from "../../assets/images/partner5.svg";





export default function Partners() {
    return (
        <section className="h-max w-screen flex flex-row justify-center items-center pb-32">
            <div className="w-[1360px] pt-20 border-t-2 border-t-[#D7D7D7]">
                <div className="flex flex-row justify-center items-center mb-12">
                    <img src={decorImg} />

                    <h2 className="text-[#161D27] text-[50px] font-['Cormorant_Garamond'] leading-[60px] tracking-[.4px] mx-10">
                        Meet The Partners
                    </h2>

                    <img src={decorImg} />
                </div>

                <div className="w-full flex flex-row justify-around">
                    <img src={homePartner} />
                    <img src={vsPartner} />
                    <img src={brandPartner} />
                    <img src={natureHomePartner} />
                    <img src={classicPartner} />
                </div>
            </div>
        </section>
    )
}
