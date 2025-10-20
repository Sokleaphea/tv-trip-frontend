import monkey from "../assets/monkey.gif"

const About = () => {
    return(
        <div>
            <div className="items-center flex flex-col justify-center">
                <div className="md:w-100 md:h-100 w-80 h-80">
                    <img src={monkey} alt="monkey" className="rounded-2xl w-full h-full" />
                </div>
                <div className="m-5 items-end flex justify-center">
                    <p className="text-[12px] text-center">Software Engineering student, year three — now officially qualified to GPT anything.</p>
                </div>
            </div>
        </div>
    )

}
export default About;