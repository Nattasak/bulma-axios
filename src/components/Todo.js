import React, { Component } from 'react'
import Auxx from '../hoc/Auxx'
import axios from 'axios'
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [{
        userId: '',
        id: '',
        title: '',
        completed: false
      }]
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      const items = res.data.slice(0, 7).map(item => item);
      this.setState({ items });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onChangeHandler = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    let newItem = this.state.term;
    if(this.state.term !== '') {
      this.setState({
        term: '',
        items: [
          ...this.state.items,
          {
            title: newItem,
            completed: false
          }
        ]
      });
    } else {
      console.log('Plz. type some text');
    }
  }

  removeItemHandler = (obj) => {
    let items = this.state.items;
    items.splice(obj.target.id, 1);
    this.setState({
      items: [...items]
    });
  }

  render() {
    const items = this.state.items;

    return (
      <Auxx>
        <div className="container">
          <div className="TodoApp">
            <form onSubmit={this.onSubmitHandler}>
              <div className="field">
                <label className="label has-text-light">Task</label>
                <div className="field-body">
                  <div className="field">
                    <div className="control is-expanded">
                      <input value={this.state.term} onChange={this.onChangeHandler} className="input" type="text" placeholder="What do you need to do?" />
                    </div>
                    <div className="control">
                      <button className="button is-link">Save Item</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="columns is-mobile">
              <div className="column">
                <ul>
                  { items.map((item, index) =>
                    <li key={index} id={index}>
                      <span className="txt">{item.title}</span>
                      <a className="button is-danger" id={index} onClick={this.removeItemHandler}>
                        <span className="icon is-small" id={index}>
                          <i className="fa fa-times" id={index}></i>
                        </span>
                      </a>
                    </li>
                  ) }
                </ul>
              </div>

            </div>
          </div>
        </div>
      </Auxx>
    );
  }
}

export default Todo
