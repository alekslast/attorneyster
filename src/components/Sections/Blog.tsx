// Constants
import { posts } from "../../lib/constants";


// Images
import decorImg from "../../assets/images/decorImg2.svg";
import blogMain from "../../assets/images/BlogImgs/blogImgMain.png";



type TPost = {
    image: string,
    domain: string,
    date: string,
    title: string,
    shortInfo: string,
}





export default function Blog() {
    return (
        <section className="w-screen h-max flex flex-row justify-center items-center pt-[140px] pb-[40px] bg-[#161D27]">
            <div className="w-[1360px] flex flex-col justify-center items-center">
                <h2 className="text-5xl text-white font-['Cormorant_Garamond'] leading-[54px] tracking-[.4px]">
                    Recent Blogs
                </h2>

                <img src={decorImg} className="mt-4 mb-[70px]" />

                <div className="flex flex-row items-center pb-[100px] mb-[100px] border-b border-b-[#4E555F]">
                    <div className="w-1/2">
                        <img src={blogMain} />
                    </div>

                    
                    <div className="w-1/2">
                        <div className="w-full pb-5 text-xl text-[#D1B06B] border-b border-b-[#4E555F]">
                            <span>Corporate Law<span className="px-5">|</span>Friday, February 4, 2022</span>
                        </div>

                        <div className="mt-6 mb-5">
                            <h3 className="mb-5 text-white text-3xl font-['Cormorant_Garamond'] leading-10 tracking-[.4px]">
                                The Difference between Information & Legal Advice
                            </h3>

                            <p className="text-[#D7D7D7] text-lg font-['Outfit'] font-thin leading-8 tracking-[.4px]">
                                Collaborative on low-hanging fruit to identify a ballpark value added activity to beta matrix economically test override the digital.
                            </p>
                        </div>

                        <a  href="#"
                            className="text-[#D1B06B] border-b border-b-[#D1B06B]"
                        >
                            View More
                        </a>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap">
                    {posts.map((post, index) => (
                        <Post key={index} date={post.date} domain={post.domain} image={post.image} shortInfo={post.shortInfo} title={post.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}





function Post({
    image,
    domain,
    date,
    title,
    shortInfo,
} : TPost) {

    return (
        <div className="w-1/3 mb-[100px]">
            <div className="mb-6">
                <img src={image} />
            </div>

            <div className="pe-4">
                <div className="w-full pb-5 text-xl text-[#D1B06B] border-b border-b-[#4E555F]">
                    <span>{domain}<span className="px-5">|</span>{date}</span>
                </div>

                <div className="mt-6 mb-5">
                    <h3 className="mb-5 text-white text-3xl font-['Cormorant_Garamond'] leading-10 tracking-[.4px]">
                        {title}
                    </h3>

                    <p className="text-[#D7D7D7] text-lg font-['Outfit'] font-thin leading-8 tracking-[.4px]">
                        {shortInfo}
                    </p>
                </div>

                <a  href="#"
                    className="text-[#D1B06B] border-b border-b-[#D1B06B]"
                >
                    View More
                </a>
            </div>
        </div>
    )
}
