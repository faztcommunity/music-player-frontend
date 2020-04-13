import React, { Component } from 'react'
// styles
import './Player.css'
// components
import Button from '../Button';

export default class Player extends Component {

  oscillator () {
    let audioContext=new AudioContext();
    let osc=audioContext.createOscillator();
    osc.type="sine";
    osc.connect(audioContext.destination);
    osc.start(audioContext.currentTime);
  };

  render() {
    return (
      <div>
        <h1>Player</h1>
        <Button onclick={() => this.oscillator()} text='Play' />
      </div>
    )
  }
}