import  video from '../assets/videos/LeperKing_video.mp4'
import Footer from "../components/Footer";
export default function About() {
  return (
    <><div className="min-h-screen flex flex-col items-center py-24 sm:py-10">
      <p className="text-2xl text-white max-w-7xlxl text-center mb-10 sm:mb-5">
        We are a stoner rock band based in <span className='text-red-600'>Tunisia</span>. Join us on our journey as we bring our unique sound to the world.
      </p>
      <div className="w-11/12 sm:max-w-4xl">
        <video
          src={video}
          controls
          autoPlay
          className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div><Footer></Footer></>
  );
}
