
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";

const Footer = ()=>{
    return(
        <>
        <div className="bg-[#141514] py-24 pb-16 px-32 my-11 mb-0">
            <div className=" w-[100%]">
            <div className="flex justify-between items-center mb-16"> 
                <div className="">
                     <h1 className="text-4xl font-bold tracking-wide text-white">Agrow<span className="text-[#e89621]">farm</span> </h1>
                </div>
               <div className="">
               <h1 className="flex items-center gap-3 text-white text-xl font-medium">Follows On : <FaFacebookF className="bg-white text-[#006837] rounded-full h-6 w-6 p-1 hover:bg-[#006837] hover:text-white hover:cursor-pointer" /> <FaLinkedinIn className="bg-white hover:cursor-pointer text-[#006837] rounded-full h-6 w-6 p-1 hover:bg-[#006837] hover:text-white"/><FaTwitter className="bg-white hover:cursor-pointer text-[#006837] rounded-full h-6 w-6 p-1 hover:bg-[#006837] hover:text-white" /><FaInstagram className="bg-white text-[#006837] rounded-full h-6 w-6 p-1 hover:bg-[#006837] hover:text-white hover:cursor-pointer"/></h1>  
               </div>

            </div>
            <div className="flex gap-24">
               <div className="">
                <h1 className="text-white mb-5 text-2xl font-medium tracking-wide">10009 Agrofam st, 5th <br />Avenue, 436 Honey <br /> London.</h1>
                <p className="text-[#888888]">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do eiusmod tempor</p>

               </div>
               <div className="flex gap-14 flex-col">
                <div className="">
                <h1 className="text-white text-xl font-medium tracking-wide">Phone</h1>
                <p className="text-[#e89621] text-lg font-medium tracking-wider hover:text-[#006837] ">+1(21) 112 7368</p>
                </div>
                <div className="">
                    <h1 className="text-white font-medium text-xl">E-mail</h1>
                    <h3 className="text-[#e89621] text-lg font-medium tracking-wider hover:text-[#006837]">Agrowfarm@mail.com</h3>
                </div>
               </div>
               <div className="flex-col flex gap-2 w-[20%]">
                <h1 className="text-white font-medium text-xl tracking-wide">Support</h1>
                <a className="text-[#888888] hover:text-[#e89621]" href="#">Privacy Policy</a>
                <a className="text-[#888888] hover:text-[#e89621]" href="#">Terms of Service</a>
                <a className="text-[#888888] hover:text-[#e89621]" href="#">Contact us</a>
                <a className="text-[#888888] hover:text-[#e89621]" href="#">faq</a>
               </div>
               <div className="">
                <h1 className="text-white font-medium text-xl tracking-wide mb-3">Subscribe here</h1>
                <div className="relative">
                    <input className="w-[100%] py-4 px-4 rounded-md border-none outline-none" type="text"  />
                    <FaPaperPlane className="bg-[#e89621] p-3 hover:cursor-pointer  text-white absolute right-0 top-0 h-full w-20" />
                </div>
                <p className="text-[#888888] mt-6">Subscribe to our mailing list and get updates to your email inbox.</p>
               </div>
            </div>
            <p className="text-white text-center mt-24 tracking-wide text-lg"> &copy; 2023 Agrowfarm. All rights reserved. Design by <span className="text-[#379b6c] hover:cursor-pointer font-medium">MOAFI</span> </p>
            </div>
        </div>
        </>
    ) 
}

export default Footer