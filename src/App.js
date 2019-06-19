import React, { Component } from "react";
import Header from "./components/Header";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
// removeFriend = id => {
//   // Filter this.state.friends for friends with an id not equal to the id being removed
//   const friends = this.state.friends.filter(friend => friend.id !== id);
//   // Set this.state.friends equal to the new friends array
//   this.setState({ friends });
// };

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0,
    selected: []

    // lastClicked: null
  };

  shuffle = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var shuffledArray = array[i];
      array[i] = array[j];
      array[j] = shuffledArray;
    }
    this.setState({ friends: array });
    // console.log(array);
  };

  updateScore = () => {
    var currentScore = this.state.score + 1;
    if (currentScore >= this.state.highscore) {
      this.setState({
        highscore: currentScore,
        score: currentScore
      })
    }
    else {
      this.setState({
        score: currentScore
      })
    }
  }
  
  onClick = id => {
    this.shuffle(this.state.friends);
    this.updateScore();



    // console.log("click");

    // // const selected = this.state;

    // if (id === this.state.friend) {
    //   // this.state.selected.push(id),
    //   this.setState({
    //     shuffledArray: this.shuffle(this.state.friends),
    //     score: this.state.score + 1
    //   });
    // }
    // console.log(this.state.selected)
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore} />
        {this.state.friends.map(friend =>
          <FriendCard
            key={friend.id}
            id={friend.id}
            image={friend.image}
            onClick={this.onClick}
          />
        )}
      </Wrapper>
    );
  }
}

export default App;
