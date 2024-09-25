// Constants
import { reviews } from "../../lib/constants";


// Images
import decorImg from "../../assets/images/decorImg2.svg";
import ReviewComponent from "../ReviewComponent";





export default function Review() {
    return (
        <section className="h-max w-screen flex flex-col justify-center items-center bg-[#161D27] pt-[125px] pb-[140px]">
            <div className="w-[1360px] flex flex-col justify-center items-center">
                <h2 className="text-white text-5xl font-['Cormorant_Garamond'] leading-[54px] tracking-[.4px]">
                    Client Opinions &amp; Reviews
                </h2>

                <img src={decorImg} className="mt-4 mb-[60px]" />

                <div className="w-full flex flex-row gap-7">
                    {reviews.map((review, index) => (
                        <ReviewComponent    key={review.name}
                                            image={review.image}
                                            name={review.name}
                                            jobTitle={review.jobTitle}
                                            review={review.review}
                                            odd={index % 2 == 0} />
                    ))}
                </div>
            </div>
        </section>
    )
}
