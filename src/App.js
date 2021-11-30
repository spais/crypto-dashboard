import TokenTicker from "./components/Ticker/TokenTicker";

function App() {
  return (
    <div>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <TokenTicker />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
