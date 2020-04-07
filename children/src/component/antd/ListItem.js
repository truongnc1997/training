import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: "1", content: "helloworld" },
        { id: "2", content: "helloworld 2" },
        { id: "5", content: "helloworld 5" }
      ],
      departments: [{ id: "1" }]
    };
  }

  //   deleteItem() {
  //     var index = this.state.todos.id;
  //     console.log(index);
  //   }
  render() {
    const { todos } = this.state;
    return (
      <ul className="list-item">
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.content}
            <button
              onClick={() => {
                var index = todo.id;
                todos.splice(index - 1, 1);
                this.setState({
                  todos: this.state.todos
                });
                console.log(index);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListItem;
