//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import grays from "./grays.json";
import "./App.css";

//State set to baseline
class App extends Component {
  state = {
    grays,
    clickedGrays: [],
    score: 0
  };

//when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const currentGray = event.target.alt;
    const graysAlreadyClicked =
      this.state.clickedGrays.indexOf(currentGray) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
    if (graysAlreadyClicked) {
      this.setState({
        grays: this.state.grays.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedGrays: [],
        score: 0
      });
        alert("You picked the same gray! Play again?");

//if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          grays: this.state.grays.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedGrays: this.state.clickedGrays.concat(
            currentGray
          ),
          score: this.state.score + 1
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              grays: this.state.grays.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedGrays: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Jumbotron
        score={this.state.score} />

        <div className="wrapper">
          {this.state.grays.map(grays => (
            <FriendCard
              imageClick={this.imageClick}
              id={grays.id}
              key={grays.id}
              image={grays.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;