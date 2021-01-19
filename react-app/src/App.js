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
      { id: 'sdf', name: "Claire", age: 21},
      { id: 'xcvbn', name: "Ziyao", age: 20},
      { id: 'erty', name: "Wang", age: 19}
    ],
    showPersons: false
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      // persons: [
      //   { name: "Claire", age: 21},
      //   { name: event.target.value, age: 20},
      //   { name: "Wang", age: 19}
      // ]
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id)}
              />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is working</p>
        <button
          style={style}
          // onClick={() => this.switchNameHandler('Claireee')}>Switch Name
          onClick={this.togglePersonHandler}>Toggle Person
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
// passing method references between components: the bind() syntax is more efficient

// export default app;
export default App;
