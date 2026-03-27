export function IngredientSection() {
  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full shadow-lg">

      <div className="flex items-center gap-3 justify-center mb-6">
        <span className="bg-[#A2D135] text-black font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">
          3.
        </span>
        <h2 className="text-xl font-bold">Lisää raaka-aineet</h2>
      </div>

      <div className="flex flex-wrap items-center gap-3 justify-center">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Etsi tuotteita"
            className="rounded-full px-6 py-3 text-black outline-none w-64 border-2 border-transparent focus:border-[#A2D135] pl-10"
          />
        </div>

        <button className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
          Tuoreet salaatit
        </button>
        <button className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
          Hedelmät
        </button>
        <button className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
          Proteiinit
        </button>
        <button className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
          Ruokaisat komponentit
        </button>
        <button className="bg-[#A2D135] text-black font-bold px-6 py-2 rounded-full">
          Juustot &amp; lisukkeet
        </button>
      </div>

      <div className="flex gap-4 justify-center mt-4 text-sm text-gray-300">
        <span><strong className="text-[#A2D135]">G</strong> gluteeniton</span>
        <span><strong className="text-[#A2D135]">L</strong> laktoositon</span>
        <span><strong className="text-[#A2D135]">VL</strong> vähälaktoosinen</span>
        <span><strong className="text-[#A2D135]">V</strong> soveltuu vegaaniseen ruokavalioon</span>
      </div>

      <div className="mt-6 min-h-[100px] bg-zinc-700 rounded-2xl flex items-center justify-center text-gray-500">
        Ingredient items will appear here
      </div>
    </div>
  );
}