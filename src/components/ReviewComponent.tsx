// Images
import quoteIcon from "../assets/images/quoteIcon.svg";



type TReviewComponent = {
    image: string,
    jobTitle: string,
    name: string,
    review: string,
    odd: boolean,
}





export default function ReviewComponent({
    image,
    jobTitle,
    name,
    review,
    odd
} : TReviewComponent) {

    return (
        <div className={`flex ${odd ? 'flex-col' : 'flex-col-reverse'} gap-5 pt-[40px] pb-[65px]`}>
            <div className={`bg-[#2E3947] ${odd ? 'rounded-bl-[50px]' : 'rounded-tl-[50px]'} pt-[50px] pb-14 px-[55px]`}>
                <img src={quoteIcon} />

                <p className="mt-8 text-[#D7D7D7] text-xl font-['Outfit'] leading-8 tracking-[.4px]">
                    {review}
                </p>
            </div>

            <div className="flex flex-row gap-5">
                <div>
                    <img src={image} />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="text-white text-3xl font-['Cormorant_Garamond'] leading-10 traking-[.4px]">
                        {name}
                    </span>

                    <span className="text-[#D7D7D7] text-xl font-['Outfit'] font-thin leading-8 tracking-[.4px]">
                        {jobTitle}
                    </span>
                </div>
            </div>
        </div>
    )
}
