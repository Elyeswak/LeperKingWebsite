const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full text-white py-4 text-center bottom-0 border-t mx-auto border-gray-200 bg-purpleGray-dark">
      <p className="text-xl">
        Leper King <span>&copy;</span> {currentYear}
      </p>
    </footer>
  );
}
