import Footer from "../components/Footer";
import image from "/king.png";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 mb-auto">
        <div className="flex items-center justify-center py-8 sm:py-14 mb-8 mx-auto">
          <div className="flex flex-col items-center mt-10">
            <div className="overflow-hidden max-w-md items-center justify-center">
              <img
                src={image}
                alt="Under Construction"
                className="w-full h-64 sm:h-80 object-cover ml-2 sm:ml-6"
              />
              <div className="mt-10 mb-5">
                <Link 
                  to='/about'
                  className="bg-deepRed text-white text-xl sm:text-3xl font-semibold py-4 px-6 rounded-md hover:bg-deepRed-light transition duration-300"
                >
                  Watch Our Latest Performance
                </Link>
              </div>
              <div className="p-2 text-center mb-8">
                <p className="text-2xl font-medium text-white">
                  This website is under construction...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}