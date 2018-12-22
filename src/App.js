import React, { Component } from 'react';
import NavBar from "./components/NavBar";
//import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
    images: images,
    top_score: 0,
    player_score: 0,
    click_history_flag: [],
    alert_msg: ''
  }
  componentDidMount() {
    this.setState({alert_msg: "Click an image to begin!"})
  }
  shuffleImages = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  selectImage = (id) => {
    if(this.state.click_history_flag.includes(id)){
      //bad memory, restart game
      this.setState({
        player_score : 0,
        top_score: this.state.top_score,
        click_history_flag: [],
        alert_msg: `You guessed incorrectly!`
      })
    }else{
      //good memory, update history, check if gussing # is reached all images cards # else increate player_score
      this.state.click_history_flag.push(id);

      var player_score = this.state.player_score + 1;
      if(player_score < this.state.images.length){
        //continue
        if(player_score > this.state.top_score){
          //new record
          this.setState({
            player_score : player_score,
            top_score: player_score,
            alert_msg: 'You guessed correctly!'
          })
        }else{
            this.setState({
              player_score : player_score,
              alert_msg: 'You guessed correctly!'
            })  
        }
      }else{
        //GOOD JOB no more cards left! Highest score
        this.setState({
          player_score : 0,
          top_score: this.state.images.length,
          click_flag: [],
          alert_msg: 'Congrats! You won! Click an image to begin again!',
          
        })
      }
    }
    //Suffle images
    var suffleed_images = this.shuffleImages(this.state.images);
    this.setState({
      images: suffleed_images
    })
  }
  render() {
    return (
      <div className="">
        <NavBar 
          top_score={this.state.top_score}
          player_score={this.state.player_score}
          alert_msg={this.state.alert_msg}
        />
        
        <div className="container">
          {this.state.images.map(image => {
            return(
              <ImageCard
                key = {image.id}
                id = {image.id}
                image_src = {image.image_src}
                selectImage = {this.selectImage}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
