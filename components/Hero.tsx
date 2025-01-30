import Image from "next/image";
import AnimatedLoginModal from "./ui/Login";

export default function Hero() {
  return (
    <div className="bg-[#0A0A0A] max-h-screen w-full overflow-hidden">
      <header className="top-0 left-0 w-full bg-[#0D0B14] shadow-md z-50 container mx-auto flex items-center justify-between px-4 sm:px-8 md:px-14 pt-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full" />
          <span className="text-xl font-bold text-white">Campus Cash</span>
        </div>
        {/* Login Button */}
        <AnimatedLoginModal />
      </header>

      <div className="container mx-auto py-5 relative px-6 sm:px-12 md:px-20">
        {/* Grid Layout for Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="max-w-4xl ml-auto mt-[-20px]"> {/* Move content up */}
            {/* Safe Money Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm pb-8">
              <span className="text-white">SMART SPENDING, STRESS-FREE LIVING!</span>
              <span className="ml-2">⚡</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 text-left">
              Master <span className="text-[#C1FF00]">your</span> <br />
              money <span className="text-[#C1FF00]">one expense</span> <br />
              <span className="text-gray-400">at a time.</span>
            </h1>

            {/* Description */}
            <div className="flex items-start space-x-4 text-gray-400 max-w-lg mb-20">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#C1FF00]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <p className="text-sm sm:text-md md:text-lg">
                Tired of losing track of where your pocket money goes? Campus Cash makes budgeting easy with real-time tracking, smart spending alerts, and hassle-free bill splitting.
              </p>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="flex justify-center items-center md:justify-end md:items-end mt-4 md:mt-[-30px]">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm"> {/* Smaller image */}
              <Image
                src="/mobile.png" // Path to your image in the public folder
                alt="Hero Section Image"
                width={140} // Reduced width
                height={250} // Reduced height
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
