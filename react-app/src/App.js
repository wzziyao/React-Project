import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";


// const app = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Claire", age: 21},
//       { name: "Ziyao", age: 20},
//       { name: "Wang", age: 19}
//     ],
//   });
//
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Claire", age: 21},
//         { name: "Ziyao", age: 20},
//         { name: "Wang", age: 22}
//       ]
//     });
//   };
//
//   return (
//     <div className="App">
//       <h1>Hi, I'm a react app</h1>
//       <p>This is working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}>My Hobbies: Traveling
//       </Person>
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       />
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      { name: "Claire", age: 21},
      { name: "Ziyao", age: 20},
      { name: "Wang", age: 19}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21},
        { name: "Ziyao", age: 20},
        { name: "Wang", age: 22}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Claire", age: 21},
        { name: event.target.value, age: 20},
        { name: "Wang", age: 19}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Claireee')}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Claire!')}>My Hobbies: Traveling
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
// passing method references between components: the bind() syntax is more efficient

// export default app;
export default App;
