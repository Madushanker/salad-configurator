export function Footer() {
  return (
    <footer className="bg-[#A2D135] text-white p-10 mt-12 w-full flex flex-wrap justify-around items-start">
      <div className="mb-6 min-w-[220px]">
        <h2 className="text-5xl italic font-light mb-6">Fresh</h2>
      </div>

      <div className="mb-6 min-w-[220px]">
        <h3 className="text-3xl font-bold mb-4">Ota yhteyttä</h3>
        <p className="font-semibold">Pedersöre</p>
        <p>+358 6-781 2411</p>

        <p className="font-semibold mt-4">Seinäjoki</p>
        <p>+358 6-781 2470</p>

        <p className="mt-4">Asiakaspalvelu arkisin 7 – 15</p>

        <p className="mt-4">Kaikki yhteystiedot →</p>
        <p>Tietosuojaseloste →</p>
        <p>Tietosuojakäytäntö →</p>
      </div>

      <div className="mb-6 min-w-[220px]">
        <h3 className="text-3xl font-bold mb-4">Seuraa meitä</h3>
        <p>Fresh</p>
        <p>SalaattiMestari</p>
        <p>Hetki</p>
      </div>

      <div className="mb-6 min-w-[220px]">
        <p className="mb-4">Fresh Pro webkauppa ammattilaisille →</p>
        <h3 className="text-6xl italic font-light">Oiva</h3>
      </div>
    </footer>
  );
}