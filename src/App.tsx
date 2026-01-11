import AccentLine from "./components/App/AccentLine";
import NavBar from "./components/NavBar/NavBar";
import Router from "./Router";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm border-slate-700">
        <NavBar />
        <AccentLine />
      </header>
      <main className="bg-gray-950 text-white flex-1">
        <Router />
      </main>
      <footer className="border-t border-slate-700">
        <div className="bg-gray-900 py-2 text-center text-slate-400">
          <p>&copy; 2026 BaggIns. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
