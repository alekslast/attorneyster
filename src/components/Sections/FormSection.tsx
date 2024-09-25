// Images
// import sectionBg from "../../assets/images/formBg.png";





export default function FormSection() {
    return (
        <section className={`w-screen h-max flex flex-row justify-center items-center py-[140px] bg-[url("./assets/images/formSectionBg.png")] bg-cover bg-center bg-no-repeat`}>
            <div className="w-[1360px] h-full bg-[#1F2732]  p-[100px]">
                <form className="w-full h-full flex flex-col justify-center items-center text-white font-['Outfit']">
                    <div className="w-full flex flex-row gap-[50px]">
                        <div className="w-1/2 flex flex-col">
                            <label className="mb-2 text-xl leading-5 tracking-[.4px]">
                                Full name*
                            </label>
                            <input className="text-lg font-thin bg-transparent border-b border-b-[#3B434E] outline-none" />
                        </div>

                        <div className="w-1/2 flex flex-col">
                            <label className="mb-2 text-xl leading-5 tracking-[.4px]">
                                Email Address*
                            </label>
                            <input className="text-lg font-thin bg-transparent border-b border-b-[#3B434E] outline-none" />
                        </div>
                    </div>


                    <div className="w-full flex flex-row gap-[50px] my-10">
                        <div className="w-1/2 flex flex-col">
                            <label className="mb-2 text-xl leading-5 tracking-[.4px]">
                                Phone Number
                            </label>
                            <input className="text-lg font-thin bg-transparent border-b border-b-[#3B434E] outline-none" />
                        </div>

                        <div className="w-1/2 flex flex-col">
                            <label className="mb-2 text-xl leading-5 tracking-[.4px]">
                                Subject
                            </label>
                            <input className="text-lg font-thin bg-transparent border-b border-b-[#3B434E] outline-none" />
                        </div>
                    </div>


                    <div className="w-full flex flex-col">
                        <label className="mb-2 text-xl leading-5 tracking-[.4px]">
                            Your Message
                        </label>
                        <textarea className="text-lg font-thin bg-transparent border-b border-b-[#3B434E] outline-none" />
                    </div>

                    <button className="w-max text-xl font-bold bg-white text-[#3B434E] px-[30px] py-[20px] mt-[50px]">
                        Get An Appointment
                    </button>
                </form>
            </div>
        </section>
    )
}
