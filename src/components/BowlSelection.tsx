const bowls = [
  { id: 1, name: "Neliö 250 ml", image: "/bowl-square.png" },
  { id: 2, name: "Neliö 500 ml", image: "/bowl-square.png" },
  { id: 3, name: "Ympyrä 250 ml", image: "/bowl-round.png" },
  { id: 4, name: "Ympyrä 500 ml", image: "/bowl-round.png" },
];

export default function BowlSelection() {
  return (
    <div className="bg-[#2f2f2f] text-white rounded-[2rem] p-6 w-full min-h-[500px]">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-7 h-7 rounded-full bg-white text-[#2f2f2f] flex items-center justify-center font-bold text-sm">
          1.
        </div>
        <h2 className="text-lg font-semibold">Valitse rasia</h2>
      </div>

      <div className="space-y-4">
        {bowls.map((bowl) => (
          <button
            key={bowl.id}
            className="w-full flex items-center gap-4 text-left hover:bg-[#3a3a3a] p-2 rounded-xl transition"
          >
            <div className="w-14 h-14 rounded-xl bg-[#c49a57] flex items-center justify-center text-xs text-black font-semibold">
              Bowl
            </div>

            <span className="text-sm">{bowl.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}