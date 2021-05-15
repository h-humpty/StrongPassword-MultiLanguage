import "./App.css";
import Nav from "./components/nav/Nav";
import PasswordGeneratorComponent from "./components/passwordGenerator/PasswordGeneratorComponent";

function App() {
  return (
    <div className='body'>
      <Nav />
      <PasswordGeneratorComponent />
    </div>
  );
}

export default App;
