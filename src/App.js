import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas
const initialState = [
  { task: "Sacar la ropa" },
  { task: "Hacer la cama" },
  { task: "Leer un rato" },
];
class App extends Component {
  state = {
    task: "",
    initialState,
  };

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { task } = this.state;
    this.setState({
      initialState: [...this.state.initialState, {task: task}],
      task: ''
    });
  };

  handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.initialState.map((element, idx) => {
              return <li key={idx}>{element.task}</li>;
            })}
          </ul>
          <form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
