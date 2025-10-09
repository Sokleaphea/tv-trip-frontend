import React from "react";
import dt1 from "../assets/dt1.jpeg";
import kep1 from "../assets/kep1.jpeg";
import seahorse2 from "../assets/seahorse.jpeg"
import MenuCard from "./MenuCard";

const Menu = () => {
    return (
        <div className="md:m-10 mt-5 space-y-3">
            <MenuCard
                img={dt1}
                title="Doung Te Kampot"
                description="A spot for you to chill, have fun with water-based activities!"
                link=""
            />
            <MenuCard
                img={kep1}
                title="Kep Province"
                description="Enjoy the stunning view with clean white sand, surrounded by green hills"
                link=""
            />
            <MenuCard
                img={seahorse2}
                title="Sea Horse Monument"
                description="Seahorse Monument, a must-see landmark for every visitors"
                link=""
            />
        </div>
    )
}
export default Menu;