//import  video from '../assets/videos/LeperKing_video.mp4'
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
      <div className="flex flex-col items-center py-24 sm:py-16">
        <p className="text-2xl text-white max-w-7xlxl text-center mb-10 sm:mb-5">
          We are a stoner rock band based in{" "}
          <span className="text-red-600">Tunisia</span>. Join us on our journey
          as we bring our unique sound to the world.
        </p>
        <div className="w-11/12 sm:max-w-4xl">
          <iframe
            height="450"
            className="w-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/HuKQPR3lXx8?si=jr12lf05kx_Ap_Gl`}
            title="Leper King Live Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
