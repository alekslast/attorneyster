type TExpertLinks = {
        url: string,
        icon: string,
}



type TExpertCard = {
    image: string,
    name: string,
    positionTitle: string,
    links?: TExpertLinks[]
}





export default function ExpertCard({
    image,
    name,
    positionTitle,
    links
} : TExpertCard) {
    return (
        <div className="">
            <div className="relative">
                <img src={image} />

                <div className="absolute bottom-0 w-full flex flex-row justify-center items-center">
                    <div className="w-max flex flex-row justify-center items-center gap-5 py-6 px-9 bg-white">
                        {links!.map(link => (
                            <ExpertLinkComponent key={link.url} url={link.url} icon={link.icon} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col justify-center items-center mt-5">
                <span className="text-[#161D27] text-3xl font-['Cormorant_Garamond'] leading-10 tracking-[.4px]">
                    {name}
                </span>

                <span className="text-[#D1B06B] text-xl font-['Outfit'] leading-8 tracking-[.4px]">
                    {positionTitle}
                </span>
            </div>
        </div>
    )
}





function ExpertLinkComponent({
    url,
    icon
} : TExpertLinks) {

    return (
        <a href={url} target="_blank">
            <img src={icon} />
        </a>
    )
}