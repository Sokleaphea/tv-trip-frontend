import frame from "../assets/frame.png"

const Banner = () => {
  return (
    <div className="w-full">
      <div className="w-full max-h-[100vh] sm:max-h-[80vh] overflow-hidden">
        <img
          src={frame}
          alt="frame"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default Banner;
