
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-[#1f1f1f] text-white px-12 py-10">
      <div className="flex items-center justify-between">
        {/* Left logo */}
        <div className="w-28 h-28 rounded-full border-[4px] border-lime-400 flex flex-col items-center justify-center relative">
          <p className="text-[8px] uppercase tracking-wide text-gray-200 -mb-1">
            Fresh Food Factory
          </p>
          <h2 className="text-2xl font-extrabold tracking-widest">FRESSE</h2>
          <div className="absolute bottom-4 w-14 h-7 border-b-[5px] border-lime-500 rounded-b-full" />
        </div>

        {/* Center title */}
        <h1 className="text-4xl font-black tracking-wider uppercase" 
    style={{
      textShadow: "2px 0px 0px rgba(34, 197, 94, 0.8), -1px 0px 0px rgba(59, 130, 246, 0.8)"
    }}>
  BOWL-LASKURI
</h1>

        {/* Right menu icon */}
        <button className="p-2">
          <Menu size={42} strokeWidth={3} />
        </button>
      </div>
    </header>
  );
};

export default Header;