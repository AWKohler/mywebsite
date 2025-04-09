import { Button } from "./button";

export function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[1000] origin-left flex w-full py-4 items-center justify-center">
      <div 
        className="bg-white/30 backdrop-blur-sm border border-gray-300/50 rounded-full max-w-[600px] gap-2 px-3 py-2 font-2xl flex font-tomato-sans"
      >

        <Button
            className="
                bg-gray-100/70 
                border 
                border-gray-300/50 
                rounded-full 
                text-black 
                transition-colors 
                duration-200 
                ease-in-out 
                hover:bg-gray-200
            "
            >
            Home
        </Button>

        <Button
            className="
                bg-gray-100/70 
                border 
                border-gray-300/50 
                rounded-full 
                text-black 
                transition-colors 
                duration-200 
                ease-in-out 
                hover:bg-gray-200
            "
            >
            Resume
        </Button>

        <Button
            className="
                bg-gray-100/70 
                border 
                border-gray-300/50 
                rounded-full 
                text-black 
                transition-colors 
                duration-200 
                ease-in-out 
                hover:bg-gray-200
            "
            >
            QR Code
        </Button>

        <Button
            className="
                bg-gray-100/70 
                border 
                border-gray-300/50 
                rounded-full 
                text-black 
                transition-colors 
                duration-200 
                ease-in-out 
                hover:bg-gray-200
            "
            >
            Botflow
        </Button>

        <Button
            className="
                bg-gray-100/70 
                border 
                border-gray-300/50 
                rounded-full 
                text-black 
                transition-colors 
                duration-200 
                ease-in-out 
                hover:bg-gray-200
            "
            >
            Github
        </Button>

        {/* <Button className="bg-gray-200/70 border border-white/50 rounded-full text-black">yay</Button> */}

      </div>
    </div>
  );
}