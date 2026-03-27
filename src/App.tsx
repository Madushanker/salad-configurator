import CenterBowl from "./components/CenterBowl";
import {Footer} from "./components/Footer";
import BowlSelection from "./components/BowlSelection";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <main className="flex-1 p-6 space-y-6">

        <div className="bg-[#2f2f2f] p-6 rounded-3xl text-white">
          Top Controls (Search + Filters)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
           <BowlSelection />

           <CenterBowl />

           <div className="bg-[#2f2f2f] p-6 rounded-3xl text-white min-h-[500px]">
              Right Panel (Select Base)
           </div>
         </div>

        <div className="bg-[#2f2f2f] p-6 rounded-3xl text-white flex justify-between">
          <div>Selected Items</div>
          <div>Price / Weight</div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;