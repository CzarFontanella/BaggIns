import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <NavBar />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App
