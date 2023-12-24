import Header from "../components/Header/Header";
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
        <section className="Planet-List animate__animated animate__fadeIn">
          <ul>
            <TabButton onSelect={() => HandleClick([0])} {...planetsData[0]} />
            <TabButton onSelect={() => HandleClick([1])} {...planetsData[1]} />
            <TabButton onSelect={() => HandleClick([2])} {...planetsData[2]} />
            <TabButton onSelect={() => HandleClick([3])} {...planetsData[3]} />
            <TabButton onSelect={() => HandleClick([4])} {...planetsData[4]} />
            <TabButton onSelect={() => HandleClick([5])} {...planetsData[5]} />
            <TabButton onSelect={() => HandleClick([6])} {...planetsData[6]} />
            <TabButton onSelect={() => HandleClick([7])} {...planetsData[7]} />
            <TabButton onSelect={() => HandleClick([8])} {...planetsData[8]} />
            <TabButton onSelect={() => HandleClick([9])} {...planetsData[9]} />
          </ul>
        </section>
        <section>
          {!selectedPlanet ? (
            <p className="default-subtitle animate__animated animate__infinite animate__headShake">
              `One small step for man, one giant leap for mankind...`
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
