import './App.css';

let name="Shivam verma";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis corporis voluptate illo, hic ipsa minima natus dolorum pariatur quidem accusamus perferendis nemo aliquid atque earum officia? Voluptate sit porro deserunt odit, dicta voluptatem?</p>
    </div>
    </>
  );
}

export default App;
