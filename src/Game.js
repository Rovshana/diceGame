import React from "react";
import Dice1 from "./images/dice-1.png";
import Dice2 from "./images/dice-2.png";
import Dice3 from "./images/dice-3.png";
import Dice4 from "./images/dice-4.png";
import Dice5 from "./images/dice-5.png";
import Dice6 from "./images/dice-6.png";

import Style from "./Game.module.css";
const photos = {
  dice1: Dice1,
  dice2: Dice2,
  dice3: Dice3,
  dice4: Dice4,
  dice5: Dice5,
  dice6: Dice6,
};

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      firstDice: {
        image:photos.dice1
      },
      secondDice: {
        image:photos.dice1
      },
    };
    this.handleRandomAttack = this.handleRandomAttack.bind(this);
  }

  handleRandomAttack() {
    let randomDice1 = Math.ceil(Math.random() * 6);
    let randomDice2 = Math.ceil(Math.random() * 6);
    this.setState({
      firstDice: { power: randomDice1, image: photos[`dice${randomDice1}`] },
      secondDice: { power: randomDice2, image: photos[`dice${randomDice2}`] },
    });
  }

  render() {
    return (
      <div>
        <h1>
          {" "}
          You:
          {this.state.firstDice.power > this.state.secondDice.power
            ? "won"
            : "lost"}
        </h1>
        <h1>
          {" "}
          Computer:
          {this.state.firstDice.power < this.state.secondDice.power
            ? "won"
            : "lost"}
        </h1>

        <br />
        <div>
          <img src={this.state.firstDice.image} width="150" />

          <img
            src={this.state.secondDice.image}
            width="150"
            className={`${Style.imgClass}`}
          />
        </div>
        <br />
        <button onClick={this.handleRandomAttack}>Roll dice</button>
      </div>
    );
  }
}
export default Game;
