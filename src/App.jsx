import Hero from "./components/Hero";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="bg-gray-800">
      <NavBar />
      <Hero />
      <Main />
    </div>
  );
};

export default App;
