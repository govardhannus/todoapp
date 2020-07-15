import React from 'react';
import './AddTodo.css'
import { addTodo } from '../Actions'
import { connect } from 'react-redux'

const Addtodo = ({dispatch}) => {
    let input
    return(
        <div className="container">
            <input className="form-control" placeholder='Enter Todo' ref ={ e => (input = e)}/>
            <button type="submit" className="btn" onClick= {e =>{
                e.preventDefault()
                dispatch(addTodo(input.value))
            }}> Submit </button>
        </div>
    )
}

export default connect()(Addtodo);