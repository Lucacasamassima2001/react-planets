import Header from "../components/Header/Header";
// import Planet from "../components/Planet";
import TabButton from "../components/TabButton";
import { planetsData } from "../planets";
import { useState } from "react";
import "animate.css";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState();
  function HandleClick(selectedPlanet) {
    setSelectedPlanet(selectedPlanet);
  }

  return (
    <div id="first-container">
      <Header></Header>
      <main>
        <section className="Planet-List animate__animated animate__flash">
          <ul>
            <TabButton onSelect={() => HandleClick([0])}>Mercury</TabButton>
            <TabButton onSelect={() => HandleClick([1])}>Venus</TabButton>
            <TabButton onSelect={() => HandleClick([2])}>Earth</TabButton>
            <TabButton onSelect={() => HandleClick([3])}>Mars</TabButton>
            <TabButton onSelect={() => HandleClick([4])}>Jupiter</TabButton>
            <TabButton onSelect={() => HandleClick([5])}>Saturn</TabButton>
            <TabButton onSelect={() => HandleClick([6])}>Uranus</TabButton>
            <TabButton onSelect={() => HandleClick([7])}>Neptune</TabButton>
            <TabButton onSelect={() => HandleClick([8])}>Pluto</TabButton>
            <TabButton onSelect={() => HandleClick([9])}>Ceres</TabButton>
          </ul>
        </section>
        <section>
          {!selectedPlanet ? (
            <p className="default-subtitle animate__animated animate__infinite animate__headShake">
              Explore the galaxy...
            </p>
          ) : (
            <div className="Planet-container animate__animated  animate__backInUp">
              <h1>{planetsData[selectedPlanet].name}</h1>
              <h2>{planetsData[selectedPlanet].title}</h2>
              <img
                src={planetsData[selectedPlanet].image}
                alt={planetsData[selectedPlanet].name}
              />
              <p>{planetsData[selectedPlanet].description}</p>
              <div className="specs">
                <div>
                  {"Distance from the sun: "}
                  {planetsData[selectedPlanet].distanceFromSun}
                </div>
                <div>
                  {"Diameter: "}
                  {planetsData[selectedPlanet].diameter}
                </div>
                <div>
                  {"Gravity: "}
                  {planetsData[selectedPlanet].gravity}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
