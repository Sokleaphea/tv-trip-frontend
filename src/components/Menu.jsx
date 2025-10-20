import React from "react";
import dt1 from "../assets/dt1.jpeg";
import kep1 from "../assets/kep1.jpeg";
import oumal1 from "../assets/oumal1.jpeg"
import oumal2 from "../assets/oumal2.jpeg"
import oumal3 from "../assets/oumal3.jpeg"
import kep2 from "../assets/kep2.jpeg"
import kep3 from "../assets/kep3.jpeg"
import kepWest from "../assets/kepWest.jpg"
import kepWest1 from "../assets/kepWest1.jpg"
import villa1 from "../assets/villa1.JPG"
import villa2 from "../assets/villa2.JPG"
import villa3 from "../assets/villa3.JPG"
import villa4 from "../assets/villa4.JPG"
import dt2 from "../assets/dt2.jpeg"
import dt3 from "../assets/dt3.jpg"
import vp from "../assets/vealpouch.jpeg"
import MenuCard from "./MenuCard";


const Menu = () => {
    return (
        <div className="mt-10 space-y-3 sm:space-y-6 px-4">
            <div className="font-bold text-[24px]">
                Day-1
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div>
                    <MenuCard
                        bgimg={oumal1}
                        title="Oumal Waterfall"
                        subtitle="(Option 1)"
                        description="A stunning view with glassy water"
                        extraContent= {
                            <div className="p-1 mt-5 space-y-3 border-2 border-gray-500 rounded-lg">
                                <div className="w-full h-32">
                                    <div className="flex flex-row gap-2 h-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
                                        <img src={oumal2} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start"/>
                                        <img src={oumal3} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start" />
                                    </div>
                                </div>
                            </div>
                        }
                        video={
                            <div
                                onClick={(e) => e.stopPropagation()} 
                                className="overflow-hidden z-10 mt-3 w-full h-48 border-2 border-white"   
                            >
                                <iframe 
                                    src="https://www.youtube.com/embed/ruSEwTq3cK4" 
                                    title="Oumal Waterfall"
                                    allowFullScreen
                                    className="w-full h-full rounded-lg pointer-events-auto"
                                ></iframe>
                            </div>
                        }
                    />
                </div>
                <MenuCard
                    bgimg={vp}
                    title="Veal Pouch"
                    subtitle="(Option 2)"
                    description="Explore the highest waterfall in Cambodia"
                    link=""
                    video={
                        <div
                            onClick={(e) => e.stopPropagation()} 
                            className="overflow-hidden z-10 mt-3 w-full h-48 border-2 border-white"   
                        >
                            <iframe 
                                src="https://www.youtube.com/embed/Dm2tQNjGIII"
                                title="Oumal Waterfall"
                                allowFullScreen
                                className="w-full h-full rounded-lg pointer-events-auto"
                            ></iframe>
                        </div>
                    }
                />
                <MenuCard
                    bgimg={kep1}
                    title="Kep Province"
                    description="Enjoy the stunning view with clean white sand, surrounded by green hills"
                    extraContent={
                         <div className="p-1 mt-5 space-y-3 border-2 border-gray-500 rounded-lg">
                            <div className="w-full h-32">
                                <div className="flex flex-row gap-2 h-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
                                    <img src={kep2} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start"/>
                                    <img src={kep3} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start" />
                                </div>
                            </div>
                        </div>
                    }
                    video={
                        <div
                            onClick={(e) => e.stopPropagation()} 
                            className="overflow-hidden z-10 mt-3 w-full h-48 border-2 border-white"   
                        >
                            <iframe 
                                src="https://www.youtube.com/embed/z_tQjBD7V5k" 
                                title="Oumal Waterfall"
                                allowFullScreen
                                className="w-full h-full rounded-lg pointer-events-auto"
                            ></iframe>
                        </div>
                    }
                />
                <MenuCard
                    bgimg={kepWest}
                    title="Kep West"
                    description="Enjoy the stunning view and frest air"
                    extraContent={
                         <div className="p-1 mt-5 space-y-3 border-2 border-gray-500 rounded-lg">
                            <div className="w-full h-32">
                                <div className="flex flex-row gap-2 h-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
                                    <img src={kepWest} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start"/>
                                    <img src={kepWest1} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start" />
                                </div>
                            </div>
                        </div>
                    }
                    // 
                    video={
                        <div className="mt-3 flex flex-row items-center justify-center rounded-full">
                            <div className="bg-[#007BFF] rounded-full p-1 hover:bg-[#0056B3]">
                                <a 
                                    href="https://www.tiktok.com/@villa.hill.kampot/video/7415219018920938760?q=villa%20hill%20kampot&t=1760171319899"
                                    target="_blank"
                                    className="m-2"
                                >
                                    Watch it here!
                                </a>
                            </div>
                        </div>
                    }
                />
            </div>
            <div className="font-bold text-[24px]">
                Day-2
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <MenuCard
                    bgimg={villa1}
                    title="Villa Hills"
                    description="A magic place surrounded by hills"
                    extraContent={
                        <div className="p-1 mt-5 space-y-3">
                            <div className="w-full h-32">
                                <div className="flex flex-row gap-2 h-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
                                    <img src={villa2} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start"/>
                                    <img src={villa3} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start" />
                                    <img src={villa4} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start" />
                                </div>
                            </div>
                        </div>
                    }
                    video={
                        <div className="mt-3 flex flex-row items-center justify-center rounded-full">
                            <div className="bg-[#007BFF] rounded-full p-1 hover:bg-[#0056B3]">
                                <a 
                                    href="https://www.tiktok.com/@villa.hill.kampot/video/7415219018920938760?q=villa%20hill%20kampot&t=1760171319899"
                                    target="_blank"
                                    className="m-2"
                                >
                                    Watch it here!
                                </a>
                            </div>
                        </div>
                    }
                />
                <MenuCard
                    bgimg={dt1}
                    title="Doung Te"
                    description="Chill and have fun with water-based activities" 
                    link=""
                    extraContent={
                        <div className="p-1 mt-5 space-y-3">
                            <div className="w-full h-32">
                                <div className="flex flex-row gap-2 h-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
                                    <img src={dt2} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start"/>
                                    <img src={dt3} className="flex-shrink-0 w-full h-full object-cover rounded-lg snap-start" />
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    )
}
export default Menu;