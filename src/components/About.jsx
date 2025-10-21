import monkey from "../assets/monkey.gif"

const About = () => {
    return(
        <div>
            <div className="items-center flex flex-col justify-center">
                <div className="md:w-100 md:h-100 w-80 h-80">
                    <img src={monkey} alt="monkey" className="rounded-2xl w-full h-full" />
                </div>
                <div className="m-5 items-start flex flex-col justify-center">
                    <p className="text-[12px] md:text-[18px] text-center">This project was created to make trip planning more specific and enjoyable.</p>
                    <p className="text-[12px] md:text-[18px] text-center">There's no backend or anything just pure frontend, just make for fun:).</p>
                    <p className="text-[12px] md:text-[18px] text-center">Developed by a third-year software engineering student, who try to explore more about web development.</p>
                </div>
            </div>
        </div>
    )

}
export default About;