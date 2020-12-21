import React from 'react'

const Todos = (props) => {
    return (
        <div>
            <form onSubmit={props.addTodos}>
            <input className="todoinput" type="text" value={props.task} onChange={props.onChangeHandler} />
            </form>
        </div>
    )
}
export default Todos;