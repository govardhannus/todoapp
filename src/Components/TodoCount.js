import React, { Component } from 'react';
import './TodoCount.css'
import { connect } from 'react-redux';

function TodoCount (props) {
    return(
        <div className="con">
        <p>You have {props.todoList.length} Todos </p>
           </div>
         )
}

const mapStateToProps = state => {
    return {
      todoList: state.todoList
    }
  }
    

export default connect(mapStateToProps)(TodoCount);
