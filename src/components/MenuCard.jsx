import { useState, useRef, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const MenuCard = ({ bgimg, title, subtitle, description, extraContent, icon, video }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
        }
    }, [isOpen]);

    return (
        <div
            className="relative w-full rounded-2xl shadow-md overflow-hidden text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            style={{ height: isOpen ? "500px" : "128px" }}
        >
            <img
                src={bgimg}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-start bg-black/40 p-5 pointer-events-auto">
                <div className="p-1 flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-start">
                        <span className="flex flex-row gap-4 items-center">
                            <h1 className="font-bold text-[18px]">{title}</h1>
                            <h2 className="text-[15px]">{subtitle}</h2>
                        </span>
                        <p className="text-[15px] h-15">{description}</p>
                    </div>
                    <div
                        className={`transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    >
                        <p>{icon || <IoIosArrowDropdown size="24px" />}</p>
                    </div>
                </div>

                {isOpen && (
                    <div ref={contentRef}>
                        <div>{extraContent}</div>
                        <div>{video}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuCard;
