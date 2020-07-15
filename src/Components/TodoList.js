import React, { Component } from 'react';
import close from '../Images/close.png'
import './TodoList.css'
import { connect } from 'react-redux';
import { deleteTodo } from '../Actions';

function TodoList (props,dispatch) {
    return(
        <div>
                
            {
                 
                 props.todoList.map((todo,index) => 
                 <div className="container">
                    <p>{todo.text}</p>
                    <img src={close} onClick={() => props.deleteTodo(index)}
                     style={{ width: '10%', height:"10%" }}/>
                    
                    </div>
                 )
            } 
    
        </div>
    
            )
}

const mapStateToProps = state => {
    return {
      todoList: state.todoList
    }
  }

  const mapDispatchToProps = (dispatch) =>{
      return {
          deleteTodo: id => dispatch(deleteTodo(id))
      }
  }
    

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
