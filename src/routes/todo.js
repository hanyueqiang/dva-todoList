import React from 'react'
import { connect } from 'dva'
import TodoList from '../components/todoList';
import { message } from 'antd'

const Todo = ({ dispatch, todolist }) => {
    function handleDelete(id) {
        message.success('删除失败!');
        // dispatch({
        //     type: 'products/delete',
        //     payload: id
        // })
    }
    function handleAdd(value) {
        debugger
        console.log(value)
    }
    return (
        <div style={{margin:20}}>
            <h2 style={{textAlign:'center'}}>todoList</h2>
            <TodoList onDelete={handleDelete} todolist={todolist} handleAdd={handleAdd}/>
        </div>
    )
}

export default connect(({ todolist }) => ({
    todolist
}))(Todo);