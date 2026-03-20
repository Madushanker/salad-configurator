import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold">Salad Configurator</h1>
        <p className="mt-4">Main content will come here.</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;