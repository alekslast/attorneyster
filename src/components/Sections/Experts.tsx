// Constants
import { experts } from "../../lib/constants";
import ExpertCard from "../ExpertCard";


// Images
import decorImg from "../../assets/images/decorImg2.svg";





export default function Experts() {
    return (
        <section className="h-max w-screen flex flex-row justify-center items-center py-[125px]">
            <div className="w-[1360px] flex flex-col justify-center items-center">
                <h2 className="text-[#161D27] text-5xl text-center font-['Cormorant_Garamond'] leading-[54px] tracking-[.4px]">
                    Our Experienced Attorney Are Ready<br />To Answer Any Questions
                </h2>

                <img src={decorImg} className="mt-3 mb-[70px]" />

                <div className="flex flex-row gap-8">
                    {experts.map((expert, index) => (
                        <ExpertCard key={index}
                                    image={expert.image}
                                    name={expert.name}
                                    positionTitle={expert.position}
                                    links={expert.links} />
                    ))}
                </div>
            </div>
        </section>
    )
}
