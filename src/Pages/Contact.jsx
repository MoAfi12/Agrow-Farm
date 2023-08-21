import banner1 from "../assets/images/banner1.jpg"
import { Link } from "react-router-dom"
import {FaAnglesRight} from 'react-icons/fa6'
import {FaPaperPlane } from "react-icons/fa6";
import {MdEmail } from "react-icons/md";
import {FaPhoneVolume} from "react-icons/fa6";

const Contact = ()=>{
    return(
        <>
        {/* START HERE  */}
       <div className=" max-w-full h-[40vh] relative bg-black bg-opacity-60  mb-28 font-Blinker">
            <img className="absolute left-0 right-0 object-cover -z-10 h-full w-full" src={banner1} alt="" />
            <div className="pt-40 flex justify-between items-center w-[80%] mx-auto">
                <div className="">
              <h1 className="text-4xl text-white mb-3 font-semibold tracking-wider">Contact Us</h1>
              <p className="text-[#888888] text-xl">Better Agriculture for Better Future</p>
              </div>
              <div className="flex gap-3">
                <Link className="flex items-center gap-2 text-[#e89621] text-xl" to="/">Home <FaAnglesRight className="text-white text-base" /></Link>
                <p className="text-white text-xl">Contact Us</p>
              </div>
                </div>
                </div>
                {/* END HERE */}

                <div className="max-w-full font-Blinker">
                    <div className="text-center">
                        <h3 className="text-[#e89621] text-lg font-semibold tracking-wider mb-4">SEND US A MESSAGE</h3>
                    <h1 className="text-[#212529] text-3xl font-bold tracking-wider mb-3">Keep In Touch With Us.</h1>
                    <p className="text-[#888888] mb-6">Progressively syndicate user-centric schemas without front-end synergy. Monotonectally envisioneer.</p>
                    </div>
                    
                    <div className="w-[55%] mx-auto flex flex-col items-center">
                        <textarea className="border  border-gray-300 resize-none outline-none bg-[#f5f9f7] px-6 text-[#212529] py-4 h-full text-lg focus-within:border-[#006837] w-full mb-5" name="" id=""></textarea>
                        <div className="flex  w-full justify-center gap-5 mb-10">
                            <input className="border bg-[#f5f9f7]  border-gray-300 px-3 py-2 rounded-sm flex-1 outline-none " type="text" placeholder="Name" />
                            <input className="border bg-[#f5f9f7] border-gray-300 px-3 py-2 rounded-sm flex-1 outline-none" type="number" placeholder="Your phone number" />
                            <input className="border bg-[#f5f9f7] border-gray-300 px-3 py-2 rounded-sm flex-1 outline-none" type="email" placeholder="Email" />
                        </div>
                        <button className="bg-[#006837] text-white px-10 py-2 rounded-md flex items-center gap-3">Submit Now <FaPaperPlane /></button>

                        <div className="flex mt-32 mb-20 gap-20 ">
                            <div className="flex flex-col items-center">
                            <FaPaperPlane className="text-[#006837] h-8 w-20 mb-4" />
                            <h1 className="text-[#212529] text-xl font-bold tracking-wider mb-3">Location</h1>
                            <p className="text-[#888888] text-lg">Agrowfarm, 343, #21 Honey 1st <br /> street, NY - 502049.</p>
                            </div>

                            <div className="flex flex-col items-center">
                            <FaPhoneVolume  className="text-[#006837] h-8 w-20 mb-4" />
                            <h1 className="text-[#212529] text-xl font-bold tracking-wider  mb-3">Phone Numbers</h1>
                            <p className="text-[#888888] text-lg"> 502049.+12 403-11-22-69 </p>
                            <p className="text-[#888888] text-lg"> +12 304-11-22-79</p>
                            </div>

                            <div className="flex flex-col items-center">
                            <MdEmail  className="text-[#006837] h-8 w-20 mb-4" />
                            <h1 className="text-[#212529] text-xl font-bold tracking-wider  mb-3">Emails</h1>
                            <p className="text-[#888888] text-lg">company@gmail.com</p>
                            <p className="text-[#888888] text-lg">support@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
        </>
    )
}

export default Contact