import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import AddChallenge from './AddChallenge/index.jsx';

class Challenge extends Component {
  state = {
    challenges: []
   }
  
  componentDidMount() {
    console.log('inside of challenge componentWillMount')
    this.fetchAllChallenges();
  }

  fetchAllChallenges = async () => {
    const id = localStorage.getItem('id');
    const { data } = await axios.get(`http://localhost:3396/api/usersChallenges/${id}`)
    this.setState({ challenges: data.rows });
  }

  render() {
    return (
      <div>
        {this.state.challenges.map(challenge => {
          return (
            <div key={challenge.id}>
              <li>content: {challenge.content} </li>
              <li>difficulty: {challenge.difficulty} </li>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Challenge;

{/* <Switch>
  <Route path='/addChallenge' component={AddChallenge} />
</ Switch>    */}