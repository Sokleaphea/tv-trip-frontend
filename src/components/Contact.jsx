import frame3 from "../assets/frame3.png"

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8">
            <div className="w-full md:w-[400px] h-[250px] md:h-[300px]">
                <img src={frame3} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="m-4">
                <h1 className="text-[24px] md:text-[32px] font-bold mb-3">Contact Me</h1>
                <p className="mb-1"><strong>Email:</strong> sokleapheaphon@gmail.com</p>
                <p className="mb-1"><strong>Telegram:</strong> @p_sokleaphea</p>
                <p className="text-blue-500 hover:underline cursor-pointer mt-2">
                    <a 
                        href="https://portfolio-sokleapheaphon-beta.vercel.app/"
                        target="_blank"
                    >
                        View My Other Works →</a>
                </p>
            </div>
        </div>
    )
}
export default Contact;