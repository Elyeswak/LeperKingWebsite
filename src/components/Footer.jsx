const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full text-white py-4 text-center bg-purpleGray-dark shadow-2xl">
      <p className="text-xl">
        Leper King <span>&copy;</span> {currentYear}
      </p>
    </footer>
  );
}
