import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  //State
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false,
  }
  //Handle methods
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false
    })
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
  }
  handleEdit = (id) => {
    //Odeber ze seznamu editovaný záznam
    const filteredList = this.state.items.filter(item => item.id !== id)
    //Získej editovaný záznam
    const selectedItem = this.state.items.find(item => item.id === id)
    
    this.setState({
      items: filteredList,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  }
  //JSX
  render() {          
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">
                todo input
              </h3>
              <TodoInput 
                item={this.state.item} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}  
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
    );
  }

}

export default App;
