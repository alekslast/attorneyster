

type TPracticeAreaCard = {
    name        :   string,
    description :   string,
    image       :   string
}





export default function PracticeAreaCard({
    name,
    description,
    image,
}: TPracticeAreaCard) {
    return (
        <div className="bg-[#1F2732] px-[50px] pt-[55px] pb-[70px] mb-8">
            <div className="border-b border-b-[#4E555F]">
                <h2 className="text-white text-4xl font-['Cormorant_Garamond'] leading-[56px] tracking-[.4px]">
                    {name}
                </h2>

                <p className="pt-[8px] pb-[28px] text-[#D7D7D7] text-xl font-['Outfit'] leading-8 tracking-[.4px] font-thin">
                    {description}
                </p>
            </div>

            <div className="flex flex-row justify-between mt-10">
                <img src={image} />

                <button className="py-[13px] px-[42px] text-white text-xl leading-8 tracking-[.4px] font-['Outfit'] bg-[#161D27]">
                    View More
                </button>
            </div>
        </div>
    )
}
