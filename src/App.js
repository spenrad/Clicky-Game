import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";
import monkey from "./monkey.json";
import './App.css';

class App extends React.Component {

  state = {
    monkey,
    score : 0,
    topScore : 0,
    message: "Click a monkey!" 
  };

monkeyClick = (id) =>{
  const shuffMonkey = this.state.monkey
  console.log(id)
  this.setState({
    monkey: shuffMonkey.sort(() => Math.random() - 0.5),
    score : this.score,
    topScore : this.score,
    message: this.message
  })  

};

render() {
  var self = this;
  return (
    <Wrapper>
      <Navbar
      score= {this.state.score}
      topScore= {this.state.topScore}
      message = {this.state.message}></Navbar>
      <Header></Header>
      <div className="container">
        {self.state.monkey.map(function (monkey){
      return (<div 
        id={monkey.id}
        name={monkey.name}
        className="monkey"
        key={monkey.id}
        onClick= {() => self.monkeyClick(monkey.id)}
        style={{backgroundImage: `url(${monkey.image})`}} 
        ></div>)})}</div>
      <Footer></Footer>
    </Wrapper>
  );
}
}
export default App;
