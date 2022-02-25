import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick= {() => {
          if (window.confirm("You sure?")) {
            console.log("yupppp sure")
          }
          else {
            continue
          }
        }}>

        press here to make decisions</button>
      </header>
    </div>
  );
}

export default App;
