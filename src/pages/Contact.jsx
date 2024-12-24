import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <>
      <div className=" h-full flex flex-col items-center justify-start py-12 mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-2xl text-white mb-8 text-center max-w-2xl">
          You can contact us through these mediums.
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaFacebook className="text-blue-600 text-2xl" />
            <a
              href="https://www.facebook.com/profile.php?id=61570832587150"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-white hover:underline"
            >
              Facebook
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaInstagram className="text-pink-600 text-2xl" />
            <a
              href="https://www.instagram.com/leperking_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-white hover:underline"
            >
              Instagram
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-white text-2xl" />
            <a
              href="mailto:info@example.com"
              className="text-lg font-medium text-white hover:underline"
            >
              leperking404@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-green-600 text-2xl" />
            <a
              href="https://wa.me/+21652618182"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-normal text-white hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className=" w-full fixed bottom-0">
        <Footer></Footer>
      </div>
    </>
  );
}
