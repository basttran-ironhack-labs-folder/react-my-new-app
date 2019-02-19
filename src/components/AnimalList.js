import React, { Component } from "react";
import "./AnimalList.css";

class AnimalList extends Component {
  constructor(props) {
    super(props);

    // initial state for ONLY when you need state
    this.state = {
      animalArray: ["Pangolin", "Dahu", "Platypus", "Giraffe"]
    };
  }

  addAnimal() {
    const newAnimal = prompt("Animal Name?");

    // update the array
    const animals = this.state.animalArray;
    animals.push(newAnimal);

    // setState({ animalArray: animals })
    this.setState({ animalArray: animals });
  }

  render() {
    const { animalArray } = this.state;
    return (
      <section className="AnimalList">
        <h2>Animal List Example</h2>

        <button onClick={() => this.addAnimal()}>Add an Animal</button>

        {animalArray.map(oneAnimal => {
          return (
            // add a UNIQUE key to the HTML tag you return in map()
            // (this helps React be more efficient when updating the DOM)
            <div key={oneAnimal} className="animal">
              <h3>{oneAnimal}</h3>
            </div>
          );
        })}
      </section>
    );
  }
}

export default AnimalList;
