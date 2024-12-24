import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center  text-white py-24">
      <h1 className="text-6xl font-bold mb-6">404 Page Not Found</h1>
      <p className="text-2xl mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-dustyRose-dark text-white text-lg font-medium py-2 px-6 rounded-md hover:bg-dustyRose-light transition duration-300"
      >
        Back Home
      </Link>
    </div>
  );
}
