import image from '/king.png'
export default function Home() {
  const currentYear = new Date().getFullYear(); // Fetch the current year

  return (
    <div className="flex flex-col items-center justify-between">
      {/* Main Content */}
      <div className="flex flex-col items-center mt-10">
        {/* Image Card */}
        <div className="overflow-hidden max-w-md items-center justify-center">
          <img
            src={image}
            alt="Under Construction"
            className="w-full h-auto object-cover ml-8"
          />
          <div className="p-6 text-center">
            <p className="text-2xl font-medium text-white">
              This website is under construction...
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-4 text-center fixed bottom-0">
        <p>
          <span>&copy;</span> Leper King {currentYear}
        </p>
      </footer>
    </div>
  );
}
