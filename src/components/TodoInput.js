import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css"

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem } = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            className="form-control text-capitalize"
                            placeholder="add todo item"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={ item.length < 1 ? true : false } 
                        className={
                            editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3 text-uppercase"
                        }
                    >
                        {editItem ? 'edit todo' : 'add todo'}
                    </button>
                </form>
            </div>
        )
    }
}
