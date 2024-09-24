import emailIcon from '../assets/images/email-icon.svg';
import phoneIcon from '../assets/images/phone-icon.svg';

export default function Navbar() {
    return (
        <nav className='max-w-[1360px] w-[90%] flex flex-row justify-between items-center border-y-[1px] border-y-[#4E555F] mb-5'>
            <ul className='h-[130px] flex flex-row justify-center items-center'>
                <li className='text-white text-xl font-["Outfit"] font-light pe-5 hover:text-[#D1B06B] hover:cursor-pointer transition-all duration-300 ease-in-out'>
                    Home
                </li>

                <li className='text-white text-xl font-["Outfit"] font-light px-5 hover:text-[#D1B06B] hover:cursor-pointer transition-all duration-300 ease-in-out'>
                    About Us
                </li>

                <li className='text-white text-xl font-["Outfit"] font-light px-5 hover:text-[#D1B06B] hover:cursor-pointer transition-all duration-300 ease-in-out'>
                    Pages
                </li>

                <li className='text-white text-xl font-["Outfit"] font-light ps-5 hover:text-[#D1B06B] hover:cursor-pointer transition-all duration-300 ease-in-out'>
                    Contact Us
                </li>
            </ul>

            <div className='flex flex-row gap-12'>
                <div className='flex flex-row gap-3 cursor-default'>
                    <div>
                        <div className='w-16 h-16 border-2 flex justify-center items-center border-[#CCAA60] rounded-full'>
                            <img src={phoneIcon} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#D1B06B] text-lg font-["Outfit"]'>Call Us On:</span>
                        <span className='text-white font-["Outfit"]'>911-987654321</span>
                    </div>
                </div>

                <div className='flex flex-row gap-3 cursor-default'>
                    <div>
                        <div className='w-16 h-16 border-2 flex justify-center items-center border-[#CCAA60] rounded-full'>
                            <img src={emailIcon} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[#D1B06B] text-lg font-["Outfit"]'>Email Us On:</span>
                        <span className='text-white font-["Outfit"]'>yourmail@mail.com</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
