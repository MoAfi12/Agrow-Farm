
import videoBG from "../assets/images/Agrowfarm.mp4"
import a1 from "../assets/images/a1.jpg"
import a2 from "../assets/images/a2.jpg"
import a3 from "../assets/images/a3.jpg"
import image1 from "../assets/images/a4.jpg"
import image2 from "../assets/images/a5.jpg"
import image3 from "../assets/images/a6.jpg"
import SVG1 from "../assets/images/svg1.svg"
import SVG2 from "../assets/images/svg2.svg"
import "../main.css"
 import { FaCaretRight } from "react-icons/fa6";
 import banner1 from "../assets/images/banner1.jpg"
 import sawir1 from "../assets/images/a8.jpg"
 import sawir2 from "../assets/images/a7.jpg"
 import profile1 from "../assets/images/team1.jpg"
 import profile2 from "../assets/images/team2.jpg"
 import profile3 from "../assets/images/team3.jpg"


import {FaCheck} from 'react-icons/fa6'



const Home = ()=>{
    return(
        <>
        {/* hero section */}
        <div className="-my-16 w-full h-screen relative bg-black bg-opacity-50">
            <video className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 -z-10 " src={videoBG} autoPlay loop muted></video>
            <div className="flex justify-between items-center w-3/4 m-auto py-72 text-white">
              <div className="flex flex-col gap-2">
                  <h2 className="text-lg  font-semibold">WELCOME TO AGROWFARM</h2>
                  <h1 className="text-7xl font-bold">Pure Organic Products</h1>
                  <button className="bg-[#e89621] py-4 px-9 rounded-xl w-2/6 text-black text-xl my-6">Read More</button>
              </div>
              <div className="w-[60%]">
                 <p className="text-2xl">We are committed to supporting the agricultural community and helping you achieve success in your farming endeavors. Explore our website and take advantage of the services we offer. Together, let's cultivate a prosperous future for agriculture!</p>
              </div>
            </div>
        </div>

         {/* End hero section */} 
                          
                          {/* this section start there */}
            
        <div className="bg-white mt-40 mb-16 max-w-full font-Blinker">
            <div className="flex w-4/5 mx-auto gap-6 ">
            <div className=" w-1/2 mt-12">
                <h4 className="text-xl font-semibold text-[#e89621] uppercase">Our info </h4>
                <h1 className="text-[34px] font-bold text-[#212529]">Agriculture & Organic Product Form</h1>
                <p className="text-lg text-[#888888] my-3 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris</p>
                <div className="flex flex-col gap-3">
                    <h3 className="flex items-center gap-2"> <FaCheck className="bg-[#03562f] rounded-full text-white h-5 w-5 p-1"/> Fresh Vegetables</h3>
                    <h3 className="flex items-center gap-2 "> <FaCheck className="bg-[#03562f] rounded-full text-white h-5 w-5 p-1"/> Dairy Products</h3>
                    <h3 className="flex items-center gap-2"><FaCheck className="bg-[#03562f] rounded-full text-white h-5 w-5 p-1"/> Dairy Products</h3>
                </div>
                </div>
                <div className="flex  w-1/2 gap-6">
                    <div className="h-52">
                        <img className="rounded-lg h-auto" src={a1} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 my-6">
                        <img className="rounded-lg h-64" src={a2} alt="" />
                    <img className="rounded-lg my-5" src={a3} alt="" />
                    </div>
                    
                </div>
                
            </div>
        </div>

        {/* end this there */}

        {/* this section start there */}
        <div className="bg-[#f5f9f7] max-w-full mx-auto font-Blinker">
            <div className="flex flex-col justify-center items-center gap-3 py-24 pt-20">
                <h3 className="text-[#e89621] text-xl font-semibold tracking-wider">WHAT WE DO</h3>
                <h1 className="text-4xl mb-16 font-bold tracking-wide text-[#212529]">What We’re Offering</h1>
                <div className="flex gap-5">
                    <div className="image-one">
                   <img className="rounded-md w-full" src={image1} alt="" />
                   <h1 className="text-center rounded-lg bg-white shadow-lg w-fit mx-auto py-4 text-xl text-green-700 font-bold px-24 -mt-10 relative z-10 tracking-wider">Agriculture Leader</h1>
                   <p className="text-center mt-6 text-lg text-[#888888] tracking-wider">Venenatis eros et, sed commodo risus. <br /> Nullam sit amet laoreet elit.</p>
                    </div>
                    <div className="image-one">
                   <img className="rounded-md w-full" src={image2} alt="" />
                   <h1 className="text-center rounded-lg bg-white shadow-lg w-fit mx-auto py-4 text-xl text-green-700 font-bold px-24 -mt-10 relative z-10 tracking-wider">Quality Standar</h1>
                   <p className="text-center mt-6 text-lg text-[#888888] tracking-wider">Venenatis eros et, sed commodo risus. <br /> Nullam sit amet laoreet elit.</p>
                    </div>
                    <div className="image-one">
                   <img className="rounded-md w-full" src={image3} alt="" />
                   <h1 className="text-center rounded-lg bg-white shadow-lg w-fit mx-auto py-4 text-xl text-green-700 font-bold px-24 -mt-10 relative z-10 tracking-wider">Organic Services</h1>
                   <p className="text-center mt-6 text-lg text-[#888888] tracking-wider">Venenatis eros et, sed commodo risus. <br /> Nullam sit amet laoreet elit.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* end the section there */}

        <div className="mt-24 max-w-full">
            <div className="flex items-center gap-20 mx-auto w-[80%] pt-7">
                <div className="">
                    <img className="rounded" src={image3} alt="" />
                </div>
                <div className="flex-1">
                    <h3 className="text-[#e89621] text-2xl font-semibold tracking-wider mb-3">WHY US</h3>
                    <h1 className="text-4xl text-[#212529] font-bold tracking-wider mb-7">Growing Healthy Food</h1>
                    <p className="text-[#888888] mb-10">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet.</p>
                    <div className="flex gap-24 items-center">
                    <div className="flex items-center gap-5">
                        <div className="relative w-fit">
                            <img className="w-[80px]" src={SVG1} alt="" />
                            <h3 className="text-2xl text-[#212529] absolute top-6 font-semibold right-4">85<span className="text-xl font-extrabold">%</span></h3>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-[#212529] font-bold tracking-wide mb-3">Organic Solutions</h2>
                            <p className="text-[#888888]">Lorem ipsum feugiat <br /> dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="relative w-fit">
                            <img className="w-[80px]" src={SVG2} alt="" />
                            <h3 className="text-2xl text-[#212529] absolute top-6 font-semibold right-4">95<span className="text-xl font-extrabold">%</span></h3>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl text-[#212529] font-bold tracking-wide mb-3">Quality Agriculture</h2>
                            <p className="text-[#888888]">Lorem ipsum feugiat <br /> dolor sit amet.</p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
        {/* end section there */}

          {/* START THIS SECTION THERE */}
          <div className=" max-w-full relative bg-black bg-opacity-60 my-40 mb-28 font-Blinker">
            <img className="absolute left-0 right-0 top-0 -z-10 bg-cover h-full w-full" src={banner1} alt="" />
            <div className="flex items-center mx-auto gap-10 w-[80%] py-20">
                <div className="w-1/2 flex flex-col gap-4 relative">
                    <h2 className="text-[#e89621] text-2xl font-semibold tracking-widest">ROOT WITH NATURE</h2>
                    <h1 className="text-3xl font-semibold tracking-wider text-white">For Strong Economy, Develop <br /> Agriculture</h1>
                    <p className="text-[#d4d3cf] text-lg tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet elit consec tetur adipisi elit. Lorem ipsum dolor sit amet elit consec tetur adipisi elit. Iure voluptatibus explicabo officia.</p>
                    <button className=" border mt-9 border-white rounded-md bg-transparent w-[40%] text-center py-3 text-white font-semibold tracking-widest hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">Discover More</button>
                </div>
                <div className="w-1/2">
                <div className="loader hover:scale-105">
                    <FaCaretRight className="text-[#006837] hover:cursor-pointer  text-2xl bg-white rounded-full h-10 w-10 relative z-10" />
                </div>
                </div>
            </div>
          </div>

          {/* END THERE */}

          {/* THIS SECTION START HERE */}
        
        <div className="my-16 mt-1 font-Blinker">
            <div className="mx-auto w-[80%]">
                <div className="flex justify-between w-full items-center mb-16">
                    <div className="">
                        <h2 className="text-[#e89621] font-semibold tracking-widest text-lg">RECENT BLOGS</h2>
                        <h1 className="text-[#212529] text-4xl font-bold tracking-wider">Agricultural Communities News</h1>
                    </div>
                    <div className="">
                        <p className="text-[#888888]">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. <br /> Semper at tempufddfel. Lorem ipsum dolor amet.</p>
                    </div>
                </div>
                <div className="flex gap-7 justify-center">
                    <div className="w-[30%] ">
                        <img className="rounded-t-md" src={sawir1} alt="" />
                        <div className="bg-white shadow-xl py-4 px-5 rounded-b-md">
                            <p className="text-[#888888] mb-2">Organic Products</p>
                        <h2 className="text-[#212529] text-2xl mb-6 hover:text-[#006837] font-bold tracking-wider">Agriculture Matters to the <br /> Future</h2>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img className="rounded-full h-11 w-11 object-cover" src={profile1} alt="" />
                                <h4 className="text-[#888888] text-lg>">by <span className="text-[#212529] font-semibold tracking-wider">Lynda Stone</span> </h4>
                            </div>
                            <div className="">
                                <p>20 June, 2023</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="w-[30%]">
                        <img className="rounded-t-md" src={a3} alt="" />
                        <div className="bg-white shadow-xl py-4 px-5 rounded-b-md">
                            <p className="text-[#888888] mb-2">Organic Products</p>
                        <h2 className="text-[#212529] text-2xl mb-6 hover:text-[#006837] font-bold tracking-wider">Agriculture Matters to the <br /> Future</h2>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img className="rounded-full h-11 w-11 object-cover" src={profile2} alt="" />
                                <h4 className="text-[#888888] text-lg>">by <span className="text-[#212529] font-semibold tracking-wider">Lynda Stone</span> </h4>
                            </div>
                            <div className="">
                                <p>20 June, 2023</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="w-[30%]">
                        <img className="rounded-t-md" src={sawir2} alt="" />
                        <div className="bg-white shadow-xl py-4 px-5 rounded-b-md">
                            <p className="text-[#888888] mb-2">Organic Products</p>
                        <h2 className="text-[#212529] text-2xl mb-6 hover:text-[#006837] font-bold tracking-wider">Agriculture Matters to the <br /> Future</h2>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img className="rounded-full h-11 w-11 object-cover" src={profile3} alt="" />
                                <h4 className="text-[#888888] text-lg>">by <span className="text-[#212529] font-semibold tracking-wider">Lynda Stone</span> </h4>
                            </div>
                            <div className="">
                                <p>20 June, 2023</p>
                            </div>
                        </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
       {/* END THERE */}

      

        </>
    )
}

export default Home