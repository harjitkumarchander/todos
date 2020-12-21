import React, { useState } from 'react';
import Modal from 'react-modal';

const Todo = (props) => {
    const [ modalIsOpen , setModalIsOpen ] = useState(false)
    return (
        <li className="todolist">
            <span className="spantodolist" style={{color : "#fff", textDecoration : props.isCompleted ? "line-through" : 'none'}} 
            onClick={()=>props.updateTodo(props.id)}>{props.task}</span>
            <div className="todobtn">
            <button className="updatetodobtn" onClick={()=>setModalIsOpen(true)}><i className='far fa-edit'></i></button>
            <Modal className="todomodal" isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} ariaHideApp={false}>
                <h1>title</h1>
                <input type="text" value={props.task} onChange={props.changeInput} />
                <div>
                    <button>Submit</button>
                    <button onClick={()=>setModalIsOpen(false)} >Close</button>
                </div>
            </Modal>
            <button className="todolistbtn" onClick={()=>props.removeTodo(props.id)} >X</button>
            </div>
        </li>
    )
}
export default Todo;