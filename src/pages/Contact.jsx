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
      <div className="min-h-screen flex flex-col items-center justify-start py-20 mx-auto max-w-6xl">
        <div className="flex flex-wrap lg:flex-nowrap gap-36 w-full items-start">
          <div className="flex-1 hidden lg:block">
            <img
              src="/logos/Leper.png"
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex-1 space-y-6 lg:text-left text-center lg:text-lg text-sm mx-auto mt-8">
            <h1 className="text-4xl lg:text-4xl  font-bold mb-6 lg:mb-12">Contact Us</h1>
            <p className="lg:text-2xl text-base text-white mb-4 lg:mb-6">
              You can contact us through these mediums.
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaFacebook className="text-blue-600 text-2xl" />
                <a
                  href="https://www.facebook.com/profile.php?id=61570832587150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-lg text-sm font-medium text-white hover:underline"
                >
                  Facebook
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaInstagram className="text-pink-600 text-2xl" />
                <a
                  href="https://www.instagram.com/leperking_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-lg text-sm font-medium text-white hover:underline"
                >
                  Instagram
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaEnvelope className="text-white text-2xl" />
                <a
                  href="mailto:leperking404@gmail.com"
                  className="lg:text-lg text-sm font-medium text-white hover:underline"
                >
                  leperking404@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <FaWhatsapp className="text-green-600 text-2xl" />
                <a
                  href="https://wa.me/+21652618182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-lg text-sm font-normal text-white hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}
