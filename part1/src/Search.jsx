import React from "react";
import {useState} from 'react'

function Search({onCheck}) {

 // const {onCheck} = props
  //console.log('props obj:', props);
  const[userInput, setUserInput] = useState('')
  const[, setText] = useState('')

 



  const handleSubmit = (e) => {
    e.preventDefault()
    onCheck(userInput)
    //console.log(onCheck(userInput))
    
}



  return(
    <div  onSubmit = {handleSubmit}>
      <a>#</a>
   <input
            
            value = {userInput}
            type = 'text'
            onChange = {(e) =>  setUserInput(e.currentTarget.value)} />
             <button className='Button' onClick={(e) => {if(userInput.length===6)handleSubmit(e); else alert('ош')}}><h4>ok</h4></button>
             <div></div>
             <textarea  type = 'text'
             onChange = {() => {if(userInput.length===6) setText(onCheck(userInput))}}
             > </textarea>
</div>

  )
}
export default Search