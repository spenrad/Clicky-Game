import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";
import monkey from "./monkey.json";
import "./App.css";

class App extends React.Component {
  state = {
    monkey,
    score: 0,
    topScore: 0,
    message: "Click a monkey!",
    monkeyBin: [],
  };

  monkeyClick = (id) => {
    let monkeyBin = this.state.monkeyBin;

    if (monkeyBin.includes(id)) {
      this.setState({
        monkeyBin: [],
        monkey: monkey.sort(() => Math.random() - 0.5),
        topScore: Math.max(this.state.score, this.state.topScore),
        score: 0,
        message: "AHH AHH OOH (Wrong!)",
      });
    } else {
      monkeyBin.push(id);
      this.setState({
        score: monkeyBin.length,
        monkey: monkey.sort(() => Math.random() - 0.5),
        message: "OOOH OOH AHH (Correct!)",
      });
      
    }
    if (monkeyBin.length === 12) {
        this.setState({
          message: "OOOOOO AHHHHH AHHHH (You Win!)",
          topScore: 12,
          score: 0,
          monkeyBin: []
        })
      }
  };

  render() {
    var self = this;
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        ></Navbar>
        <Header></Header>
        <div className="container">
          {self.state.monkey.map(function (monkey) {
            return (
              <div
                id={monkey.id}
                name={monkey.name}
                className="monkey"
                key={monkey.id}
                onClick={() => self.monkeyClick(monkey.id)}
                style={{ backgroundImage: `url(${monkey.image})` }}
              ></div>
            );
          })}
        </div>
      </Wrapper>
    );
  }
}
export default App;
