import React, { useState } from 'react';
import List from './List';
import Adder from './Adder';
import './App.css';

function App() {
    const[goal, SetGoal]= useState([])
  


    const addTask = (userInput, userInput2) =>{
            const newItem = {
                id: goal.length,
                date:userInput,
                km: parseInt(userInput2),
                completed: false

            }
            
         //const goalList = goal.sort((a, b) => b.date - a.date) 
         const goalList2 =goal.map(goal => { if (goal.date === newItem.date){ newItem.km += goal.km } return goal })
         const goalList3 = goalList2.filter(goal => goal.date !== newItem.date)
            SetGoal([...goalList3, newItem].sort((a, b) => b.date - a.date))
            
    }




    const done = (id) => {
       const cur = goal.splice(id, 1)
       SetGoal([...goal.filter((todo) => todo !==cur)])
    }
    


  return (
    <div className = "App">
      <header className = 'head' >
      <div>Дата(ДД.ММ.ГГ)</div>
      <div>Пройдено км</div>
      <div>Действия</div>
      </header>
      
      <Adder
     addTask={addTask}
      />
      <ul className='List'>
      <div>Дата(ДД.ММ.ГГ)</div>
      <div>Пройдено км</div>
      <div>Действия</div>
      </ul>
      { goal.map((todo, id) =>{
      return (<List
      key ={id}
        todo = {todo}
        done = {done}
        />)
      })}
    </div>
  );
}

export default App;