import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";
import monkey from "./monkey.json";
import './App.css';

class App extends React.Component {

  state = {
    monkey: monkey
  };

render() {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <Header></Header>
      {this.state.monkey.map(function (monkey){
      return (<div 
        id={monkey.id}
        name={monkey.name}
        class="monkey"
        style={{backgroundImage: `url(${monkey.image})`}} 
        ></div>)})}
      <Footer></Footer> 
    </Wrapper>
  );
}
}
export default App;
