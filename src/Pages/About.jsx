import { Link } from "react-router-dom"
import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.jpg"
import {FaAnglesRight} from 'react-icons/fa6'
import {FaArrowRightLong} from 'react-icons/fa6'
import {FaPhone} from 'react-icons/fa6'
import a3 from "../assets/images/a3.jpg"
import a2 from "../assets/images/a2.jpg"
import team5 from "../assets/images/team5.jpg"
import team6 from "../assets/images/team6.jpg"
import team4 from "../assets/images/team4.jpg"
import team2 from "../assets/images/team6.jpg"
import team3 from "../assets/images/team3.jpg"
import team1 from "../assets/images/team1.jpg"

import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const About = ()=>{
    return(
        <>
        {/* START HERE */}
      <div className=" max-w-full h-[40vh] relative bg-black bg-opacity-60  mb-28 font-Blinker">
            <img className="absolute left-0 right-0 object-cover -z-10 h-full w-full" src={banner1} alt="" />
            <div className="pt-40 flex justify-between items-center w-[80%] mx-auto">
                <div className="">
              <h1 className="text-4xl text-white mb-3 font-semibold tracking-wider">About Us</h1>
              <p className="text-[#888888] text-xl">Better Agriculture for Better Future</p>
              </div>
              <div className="flex gap-3">
                <Link className="flex items-center gap-2 text-[#e89621] text-xl" to="/">Home <FaAnglesRight className="text-white text-base" /></Link>
                <p className="text-white text-xl">About Us</p>
              </div>
                </div>
                </div>
                {/* END HERE */}

                    {/* START HERE */}
                <div className="w-[80%] mx-auto my-10 -mt-10">
                    <img className="rounded-sm" src={banner2} alt="" />
                </div>
                {/* END THERE */}

                <div className="">
                    <div className="flex mx-auto items-center w-[80%] font-Blinker gap-10">
                        <div className="flex-1">
                            <h2 className="text-[#e89621] text-xl font-bold tracking-wider">About Us</h2>
                            <h1 className="text-[#212529] text-3xl font-semibold tracking-wider mt-6 mb-6">Agriculture & Organic Product Form</h1>
                            <div className="flex gap-5">
                            <button className=" flex items-center gap-3 border mt-9 bg-[#006837] rounded-md bg-transparent w-[35%] text-cente px-7 py-3  text-white font-bold tracking-widest">Discover More <FaArrowRightLong /></button>
                            <button className=" px-7 flex items-center gap-3 border mt-9 border-[#006837] rounded-md bg-transparent w-[35%] text-center py-3  text-[#006837] font-bold tracking-widest hover:bg-[#006837] hover:text-white transition-colors duration-500 ease-in-out">Discover More <FaArrowRightLong /> </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-[#888888]">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad.Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

                {/* Start Here this section */}

                <div className=" bg-[#f5f9f7] max-w-full font-Blinker my-20">
                    <div className="flex justify-between items-center  w-[90%] mx-auto py-16 px-24 gap-10">
                        <div className="flex-1">
                            <h2 className="text-[#e89621] text-xl font-medium">WHY CHOOSE US</h2>
                            <h1 className="text-4xl text-[#212529]">Growing Healthy Food</h1>
                            <button className=" flex items-center gap-3 border mt-9 bg-[#006837] rounded-md bg-transparent  text-cente px-7 py-3  text-white font-bold tracking-widest">  <FaPhone /> +00-123-456-78</button>
                        </div>
                        <div className="flex-1">
                            <img className="rounded-md" src={a3} alt="" />
                            <h3 className="text-[#212529] text-2xl mt-3 mb-2 ml-3">Our Mission</h3>
                            <p className="text-[#888888] ml-3">Nulla eu elementum quam. magna purus, nec. semper at vel, ipsum dolor et init.Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.</p>
                        </div>
                        <div className="flex-1">
                            <img className="rounded-md" src={a2} alt="" />
                            <h3 className="text-[#212529] text-2xl mt-3 mb-2 ml-3">Our Vision</h3>
                            <p className="text-[#888888] ml-3">Nulla eu elementum quam. magna purus, nec. semper at vel, ipsum dolor et init.Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.</p>
                        </div>
                    </div>
                </div>
                {/* END HERE */}

                {/* START HERE */}

                <div className=" max-w-full font-Blinker my-20 mb-12">
                    <div className="flex items-center gap-10 w-[70%] mx-auto">
                        <div className="flex-1">
                            <p className="text-[#888888] text-lg">OUR TEAM</p>
                            <h1 className="text-[#212529] text-3xl mb-4 font-semibold tracking-wider">Expert Farmers</h1>
                            <p>Aliquam blandit vel sapien eget aliquam. Phasellus eget volutpat libero. Suspendisse eleifend nibh quis dui placerat fermentum.n molestie nulla felis, vitae feugiat justo pulvinar et.</p>
                            <button className=" flex items-center gap-3 border mt-9 bg-[#006837] rounded-md bg-transparent text-cente px-7 py-3  text-white font-bold tracking-widest">Join Our Team <FaArrowRightLong /></button>
                        </div>
                        <div className="flex gap-7 flex-1">
                            <div className="">
                                <div className="overflow-hidden relative group/icons">
                                  <img className="rounded-md" src={team5} alt="" /> 
                                  <div className="flex gap-6 items-center justify-center absolute -bottom-10 left-20   group-hover/icons:bottom-16 group-hover/icons:transition-all duration-500 ease-in-out ">
                                  < FaTwitter className="bg-cyan-400 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer" />
                                  <FaFacebookF className="bg-blue-600 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer"/>
                                  </div>
                                
                                </div>
                                <div className="mt-2">
                                <h1 className="px-2 text-xl text-[#212529] font-semibold tracking-wider">Ayana Harries</h1>
                                <p className="px-2 text-base text-[#888888]">Description</p>
                                </div>
                            </div>

                            
                            <div className="">
                                <div className="overflow-hidden relative group/icons">
                                  <img className="rounded-md" src={team6} alt="" /> 
                                  <div className="flex gap-6 items-center justify-center absolute -bottom-10 left-20   group-hover/icons:bottom-16 group-hover/icons:transition-all duration-500 ease-in-out ">
                                  < FaTwitter className="bg-cyan-400 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer" />
                                  <FaFacebookF className="bg-blue-600 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer"/>
                                  </div>
                                  </div>
                
                                  <div className="mt-2">
                                <h1 className="px-2 text-xl text-[#212529] font-semibold tracking-wider">Scott Colon</h1>
                                <p className="px-2 text-base text-[#888888]">Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END THERE */}

                {/* Start here */}
            <div className=" flex justify-center mx-auto w-[70%] gap-10 mb-20 font-Blinker">
            <div className="">
                                <div className="overflow-hidden relative group/icons">
                                  <img className="rounded-md" src={team1} alt="" /> 
                                  <div className="flex gap-6 items-center justify-center absolute -bottom-10 left-20   group-hover/icons:bottom-16 group-hover/icons:transition-all duration-500 ease-in-out ">
                                  < FaTwitter className="bg-cyan-400 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer" />
                                  <FaFacebookF className="bg-blue-600 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer"/>
                                  </div>
                                  </div>
                
                                  <div className="mt-2">
                                <h1 className="px-2 text-xl text-[#212529] font-semibold tracking-wider">Elizabeth</h1>
                                <p className="px-2 text-base text-[#888888]">Description</p>
                                </div>
                            </div>

                            <div className="">
                                <div className="overflow-hidden relative group/icons">
                                  <img className="rounded-md" src={team2} alt="" /> 
                                  <div className="flex gap-6 items-center justify-center absolute -bottom-10 left-20   group-hover/icons:bottom-16 group-hover/icons:transition-all duration-500 ease-in-out ">
                                  < FaTwitter className="bg-cyan-400 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer" />
                                  <FaFacebookF className="bg-blue-600 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer"/>
                                  </div>
                                  </div>
                
                                  <div className="mt-2">
                                <h1 className="px-2 text-xl text-[#212529] font-semibold tracking-wider">Alexander</h1>
                                <p className="px-2 text-base text-[#888888]">Description</p>
                                </div>
                            </div>

                            <div className="">
                                <div className="overflow-hidden relative group/icons">
                                  <img className="rounded-md" src={team3} alt="" /> 
                                  <div className="flex gap-6 items-center justify-center absolute -bottom-10 left-20   group-hover/icons:bottom-16 group-hover/icons:transition-all duration-500 ease-in-out ">
                                  < FaTwitter className="bg-cyan-400 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer" />
                                  <FaFacebookF className="bg-blue-600 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer"/>
                                  </div>
                                  </div>
                
                                  <div className="mt-2">
                                <h1 className="px-2 text-xl text-[#212529] font-semibold tracking-wider">Martin Ker</h1>
                                <p className="px-2 text-base text-[#888888]">Description</p>
                                </div>
                            </div>

                            <div className="">
                                <div className="overflow-hidden relative group/icons">
                                  <img className="rounded-md" src={team4} alt="" /> 
                                  <div className="flex gap-6 items-center justify-center absolute -bottom-10 left-20   group-hover/icons:bottom-16 group-hover/icons:transition-all duration-500 ease-in-out ">
                                  < FaTwitter className="bg-cyan-400 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer" />
                                  <FaFacebookF className="bg-blue-600 text-white p-1 h-7 w-7 rounded-full hover:cursor-pointer"/>
                                  </div>
                                  </div>
                
                                  <div className="mt-2">
                                <h1 className="px-2 text-xl text-[#212529] font-semibold tracking-wider">John Doe</h1>
                                <p className="px-2 text-base text-[#888888]">Description</p>
                                </div>
                            </div>

    
            </div>
        </>
    )
}

export default About