export default function CenterBowl() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[400px] mt-4 lg:mt-0">
      {/* Top row */}
      <div className="flex gap-3 mb-6 items-center">
        <button className="bg-lime-400 text-black px-4 py-2 rounded-full font-medium">
          Salaatti
        </button>

        <button className="bg-lime-400 text-black px-4 py-2 rounded-full font-medium">
          Rahka
        </button>

        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black">
          🗑
        </button>

        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black">
          ↩
        </button>

        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black">
          💾
        </button>
      </div>

      {/* Bowl */}
      <div className="w-80 h-80 rounded-full border-[12px] border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner relative overflow-hidden">
        {/* Bowl background */}
        <div className="absolute inset-0 rounded-full bg-[#bc8d4b]" />

        {/* 3 lines = 6 slices */}
        {[0, 60, 120].map((angle) => (
          <div
            key={angle}
            className="absolute top-1/2 left-1/2 w-[2px] h-[280px] bg-white origin-center"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
            }}
          />
        ))}
      </div>

      {/* Bottom info */}
      <div className="w-80 flex justify-between text-sm text-black mt-4">
        <span>100 g / 1,99 €</span>
        <span>500 ml</span>
      </div>
    </div>
  );
}