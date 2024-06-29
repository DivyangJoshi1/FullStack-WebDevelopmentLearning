import logo from './logo.svg';
import './App.css';

let name="Divyang Joshi";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <div className="container">
        <h1>My name is {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam dolorem nihil natus molestias, cupiditate quibusdam ratione magni. Delectus, expedita sit.</p>
      </div>
    </nav>
    </>
  //  <div className="blank">Hey , I am Divyang Joshi</div>
  );
}

export default App;
