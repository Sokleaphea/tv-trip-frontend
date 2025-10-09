const MenuCard = ({img, title, description, link}) => {
    return (
        <div className="relative w-full h-32 rounded-2xl shadow-md overflow-hidden text-white">
            <img 
                src={img}
                alt={title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center bg-black/40">
                <div className="p-5">
                    <h1 className="font-bold text-[18px]">{title}</h1>
                    <p className="text-[15px] w-50">{description}</p>
                    <p className="">{link}</p>
                </div>
            </div>
        </div>
    )
}   
export default MenuCard;