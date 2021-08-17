import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>Dictionary App Project</strong>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/VampirePrin4jc/dictionary-search"
            rel="noreferrer"
          >
            <small>Coded by Katie Lotzer</small>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
