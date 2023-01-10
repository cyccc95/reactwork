import './App.css';

function App() {
  let list = [1, 2, 3];

  return (
    <div>
      {list.map((n) => (
        <h1>{n}</h1>
      ))}
    </div>
  );
}

export default App;
