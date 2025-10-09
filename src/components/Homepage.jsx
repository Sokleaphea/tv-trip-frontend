import React from "react";
import kampot from "../assets/kampot.jpg"
import Menu from "../components/Menu"

const Homepage = () => {
    return (
        <div>
            <div>
                <div className="md:m-10 m-5">
                    {/* <div className="flex flex-col space-y-3 items-center max-w-[1000px] mx-auto">
                        <div className="font-bold text-[32px] text-center">
                            <h1>About the Tour</h1>
                        </div>
                        <p className="text-center max-w-l">
                            We planned a simple 2 days and 1 night trip for you to Kampot and Kep province and you will be able to explore the beauty of the two following provinces.
                        </p>
                        <div className="font-bold text-[32px]">
                            Day-1
                        </div>
                    </div> */}
                    <div>
                        <div className="space-y-3">
                            <div className="font-bold text-[24px]">
                                Day-1
                            </div>
                            <Menu/>
                            <div className="font-bold text-[24px]">
                                Day-2
                            </div>
                            <Menu/>
                        </div>
                    </div>
                    
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex gap-3 items-center">
                            <div className="w-80 h-80">
                                <img src={kampot} alt="kampot" className="w-full h-full object-cover block rounded-[100px]"/>
                            </div>
                            <div>
                                <h1 className="font-bold">
                                    Time: 9:30-11:00
                                </h1>
                                <p>Arrive at the destination</p>
                                <p>Check-in and prepare yourself for your first destination</p>
                                <p className="font-bold">Hotel:</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="w-80 h-80">
                                <img src={kampot} alt="kampot" className="w-full h-full object-cover block rounded-[100px]"/>
                            </div>
                            <div>
                                <h1 className="font-bold">
                                    Time: 9:30-11:00
                                </h1>
                                <p>Arrive at the destination</p>
                                <p>Check-in and prepare yourself for your first destination</p>
                                <p className="font-bold">Hotel:</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default Homepage;