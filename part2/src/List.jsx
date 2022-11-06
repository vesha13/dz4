import './App.css';
import React from "react"
import del from './del.png'
function List({todo, done}){
    const classChange = ["item-text"]
    if (todo.completed)
    {
        classChange.push("out");
    }
    return (
        <div className = 'List'>
        
            <div className = "item">
                <ul  className = {todo.complete ? classChange.join(' ') : classChange.join(' ')}>
                <div className='margin'>
                    {todo.date}    
                </div>
                
                <div className='margin' >
                    {todo.km}
                </div>
                </ul>
                
                    <img className="del" src={del} alt="N" onClick = {() => done(todo.id)}/>
            </div>
        </div>
    )
}

export default List