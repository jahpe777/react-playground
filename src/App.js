import React from 'react';
import './App.css';
import Accordion from './state-drills/Accordion';
/*
import Tabs from './state/Tabs.js';
import Messages from './Messages';
import TheDate from './state/TheDate.js';
import Counter from './state/Counter.js';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun';
*/

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Accordion sections={sectionsProp} />
      </div>
    );
  }
}

export default App;
