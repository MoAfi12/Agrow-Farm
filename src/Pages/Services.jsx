import { Link } from "react-router-dom"
import {FaAnglesRight} from 'react-icons/fa6'
import {FaCarrot} from 'react-icons/fa6'
import {FaArrowRight} from 'react-icons/fa6'
import {AiFillLike} from 'react-icons/ai'
import {HiMiniUserGroup} from 'react-icons/hi2'
import {FaHeadphonesAlt} from 'react-icons/fa'
import {FaAppleAlt} from 'react-icons/fa'
import {FaBong} from 'react-icons/fa'
import {FaWineBottle} from 'react-icons/fa6'
import {FaSeedling} from 'react-icons/fa6'
import banner1 from "../assets/images/banner1.jpg"
import sawir2 from "../assets/images/a6.jpg"
import {FaArrowRightLong} from 'react-icons/fa6'
import {GiFarmTractor} from 'react-icons/gi'
import a1 from "../assets/images/a1.jpg"
import a7 from "../assets/images/a7.jpg"
import a3 from "../assets/images/a3.jpg"
import sawir1 from "../assets/images/a8.jpg"



const Services = ()=>{
    return(
        <>
        {/* START HERE */}
           <div className=" max-w-full h-[40vh] relative bg-black bg-opacity-60  mb-28 font-Blinker">
            <img className="absolute left-0 right-0 object-cover -z-10 h-full w-full" src={banner1} alt="" />
            <div className="pt-40 flex justify-between items-center w-[80%] mx-auto">
                <div className="">
              <h1 className="text-4xl text-white mb-3 font-semibold tracking-wider">Services</h1>
              <p className="text-[#888888] text-xl">Better Agriculture for Better Future</p>
              </div>
              <div className="flex gap-3">
                <Link className="flex items-center gap-2 text-[#e89621] text-xl" to="/">Home <FaAnglesRight className="text-white text-base" /></Link>
                <p className="text-white text-xl">Services</p>
              </div>
                </div>
                </div>
                {/* END HERE */}

                 {/* START HERE */}
                <div className="my-32">
                    <div className="flex w-[70%] mx-auto font-Blinker">
                        <div className="flex-1">
                            <img className="rounded-sm" src={sawir2} alt="" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[#e89621] text-xl font-medium mb-3">WHAT WE OFFER</h3>
                            <h1 className="text-[#212529] text-3xl font-semibold tracking-wider mb-4">Providing High Quality Products</h1>
                            <p className="text-[#888888]">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet</p>
                            
                            <div className="flex gap-x-10">
                            <button className=" flex items-center gap-3 border mt-9 bg-[#006837] rounded-md bg-transparent w-[35%] text-cente px-7 py-3  text-white font-bold tracking-widest">Read More <FaArrowRightLong /></button>
                            <button className=" px-7 flex items-center gap-3 border mt-9 border-[#006837] rounded-md bg-transparent w-[35%] text-center py-3  text-[#006837] font-bold tracking-widest hover:bg-[#006837] hover:text-white transition-colors duration-500 ease-in-out">Contact Us<FaArrowRightLong /> </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END HERE */}

               {/* START HERE */}
                <div className="bg-[#f5f9f7] max-w-full font-Blinker my-20 mb-0">
                    <div className="flex w-[80%] gap-14 items-center mx-auto px-16 py-20">
                     <div className="flex-1">
                        <div className="flex items-center gap-9 mb-12">
                           <GiFarmTractor className="bg-[#006837] h-14 w-14 text-white p-2 rounded-md"/>
                           <div className="">
                              <h1 className="text-[#212529] text-2xl font-semibold tracking-wider">Agriculture Products</h1>
                              <p className="text-[#888888] text-base">Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam optio adipisicing.</p>
                           </div>
                        </div>

                        <div className="flex items-center gap-9 mb-12">
                           <FaCarrot className="bg-[#006837] h-14 w-14 text-white p-2 rounded-md"/>
                           <div className="">
                              <h1 className="text-[#212529] text-2xl font-semibold tracking-wider">Agriculture Products</h1>
                              <p className="text-[#888888] text-base" >Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam optio adipisicing.</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-9">
                           <FaWineBottle className="bg-[#006837] h-14 w-14 text-white p-2 rounded-md"/>
                           <div className="">
                              <h1 className="text-[#212529] text-2xl font-semibold tracking-wider">Agriculture Products</h1>
                              <p className="text-[#888888] text-base">Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam optio adipisicing.</p>
                           </div>
                        </div>


                     </div>
                     <div className="flex-1">
                     <div className="flex  gap-6 ">
                    <div className="h-52">
                        <img className="rounded-lg h-auto" src={a1} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 my-6">
                        <img className="rounded-lg h-52" src={a7} alt="" />
                    <img className="rounded-lg my-5" src={sawir1} alt="" />
                    </div>
                    
                </div>
                     </div>
                    </div>
                </div>
                {/* END HERE */}

                {/* START HERE */}
                <div className=" max-w-full h-[40vh]  relative bg-black bg-opacity-60  mb-20 font-Blinker">
            <img className="absolute left-0 right-0 object-cover -z-10 h-full w-full" src={banner1} alt="" />
                   <div className="flex justify-between w-[70%] mx-auto py-20 items-center gap-10">
                    <div className=" flex-1">
                        <h4 className="text-[#e89621] text-xl font-semibold tracking-wider mb-3">ROOT WITH NATURE</h4>
                        <h1 className="text-white font-bold tracking-wider text-3xl">For Strong Economy, Develop Agriculture</h1>
                        <button className=" flex items-center gap-3 border mt-9 hover:bg-white hover:text-black rounded-md bg-transparent text-cente px-7 py-3  text-white font-bold tracking-widest">Contact Now</button>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#ccc9c9] text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet elit consec tetur adipisi elit. Lorem ipsum dolor sit amet elit consec tetur adipisi elit. Iure voluptatibus explicabo officia</p>
                    </div>

                   </div>
                </div>
                {/* END HERE */}

                <div className="font-Blinker mb-28">
                    <div className="text-center mb-5">
                        <h3 className="text-[#e89621] text-xl mb-3">OUR SERVICES</h3>
                    <h1 className="text-[#212529] text-3xl mb-9">What We’re Doing</h1>
                    </div>
                    

                    <div className="grid grid-cols-4 gap-9 w-[70%] mx-auto ">
                        
                    <div className="bg-[#006837] rounded-sm px-10 py-4 ">
                        <FaCarrot className="text-[#e89621] text-4xl mb-4" />
                            <h1 className="text-xl font-bold tracking-wider  text-white mb-3">Fresh Vegetables</h1>
                            <h2 className="flex items-center text-white hover:cursor-pointer gap-1">Read More <FaArrowRight className="text-[#e89621]" /></h2>
                        </div>


                        <div className=" group/items hover:bg-[#006837] bg-[#f5f9f7] transition duration-500 ease-in-out rounded-sm px-10 py-4 ">
                        <GiFarmTractor className="group-hover/items:text-[#e89621] text-[#006837] text-4xl mb-4" />
                            <h1 className="text-xl font-bold tracking-wider text-[#212529] group-hover/items:text-white mb-3">Farm Products</h1>
                            <h2 className="flex items-center group-hover/items:text-white text-[#006837] hover:cursor-pointer gap-1">Read More <FaArrowRight className="group-hover/items:text-[#e89621] text-[#006837]" /></h2>
                        </div>


                        <div className=" group/items hover:bg-[#006837] bg-[#f5f9f7] transition duration-500 ease-in-out rounded-sm px-10 py-4 ">
                        <FaSeedling className="group-hover/items:text-[#e89621] text-[#006837] text-4xl mb-4" />
                            <h1 className="text-xl font-bold tracking-wider text-[#212529] group-hover/items:text-white mb-3">Organic Products</h1>
                            <h2 className="flex items-center group-hover/items:text-white text-[#006837] hover:cursor-pointer gap-1">Read More <FaArrowRight className="group-hover/items:text-[#e89621] text-[#006837]" /></h2>
                        </div>


                        <div className=" group/items hover:bg-[#006837] bg-[#f5f9f7] transition duration-500 ease-in-out rounded-sm px-10 py-4 ">
                        <FaBong className="group-hover/items:text-[#e89621] text-[#006837] text-4xl mb-4" />
                            <h1 className="text-xl font-bold tracking-wider text-[#212529] group-hover/items:text-white mb-3">Awesome Wheats</h1>
                            <h2 className="flex items-center group-hover/items:text-white text-[#006837] hover:cursor-pointer gap-1">Read More <FaArrowRight className="group-hover/items:text-[#e89621] text-[#006837]" /></h2>
                        </div>


                        <div className=" group/items hover:bg-[#006837] bg-[#f5f9f7] transition duration-500 ease-in-out rounded-sm px-10 py-4 ">
                        <FaAppleAlt className="group-hover/items:text-[#e89621] text-[#006837] text-4xl mb-4" />
                            <h1 className="text-xl font-bold tracking-wider text-[#212529] group-hover/items:text-white mb-3">Fresh Fruits</h1>
                            <h2 className="flex items-center group-hover/items:text-white text-[#006837] hover:cursor-pointer gap-1">Read More <FaArrowRight className="group-hover/items:text-[#e89621] text-[#006837]" /></h2>
                        </div>


                        <div className=" group/items hover:bg-[#006837] bg-[#f5f9f7] transition duration-500 ease-in-out rounded-sm px-10 py-4 ">
                        <FaHeadphonesAlt className="group-hover/items:text-[#e89621] text-[#006837] text-4xl mb-4" />
                            <h1 className="text-xl font-bold tracking-wider text-[#212529] group-hover/items:text-white mb-3">Excellent Service</h1>
                            <h2 className="flex items-center group-hover/items:text-white text-[#006837] hover:cursor-pointer gap-1">Read More <FaArrowRight className="group-hover/items:text-[#e89621] text-[#006837]" /></h2>
                        </div>


                        <div className=" group/items hover:bg-[#006837] bg-[#f5f9f7] transition duration-500 ease-in-out rounded-sm px-10 py-4 ">
                        <HiMiniUserGroup className="group-hover/items:text-[#e89621] text-[#006837] text-4xl mb-4" />
                            <h1 className="text-xl font-bold tracking-wider text-[#212529] group-hover/items:text-white mb-3">Qualified Staff</h1>
                            <h2 className="flex items-center group-hover/items:text-white text-[#006837] hover:cursor-pointer gap-1">Read More <FaArrowRight className="group-hover/items:text-[#e89621] text-[#006837]" /></h2>
                        </div>


                        <div className=" group/items hover:bg-[#006837] bg-[#f5f9f7] transition duration-500 ease-in-out rounded-sm px-10 py-4 ">
                        <AiFillLike className="group-hover/items:text-[#e89621] text-[#006837] text-4xl mb-4" />
                            <h1 className="text-xl font-bold tracking-wider text-[#212529] group-hover/items:text-white mb-3">Organic Solution</h1>
                            <h2 className="flex items-center group-hover/items:text-white text-[#006837] hover:cursor-pointer gap-1">Read More <FaArrowRight className="group-hover/items:text-[#e89621] text-[#006837]" /></h2>
                        </div>



                    </div>
                </div>
        </>
    )
}


export default Services