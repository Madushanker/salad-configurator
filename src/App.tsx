import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 flex flex-col gap-8 mt-4">
        <p className="text-gray-400 text-center">Components will be assembled here</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;