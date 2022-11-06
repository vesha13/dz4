//import logo from './logo.svg';
import './App.css';
import Search from './Search';
//import Application from './Search';
import React from 'react';

function App() {
  const hex =['0','1','2','3','4','5','6','7','8','9', 'a','b','c', 'd','e', 'f']
  //const[, SetColor]= useState('blue')



  const hex2rgb=(c)=> {
    var bigint = parseInt(c);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

  const onCheck = (userInput) => {
    const mas = userInput.split('')
    const mas2= mas.map(mas => hex.includes(mas))
    console.log(mas2)
    if (mas2.includes(false))
    return 'ошибка'
    else 
    return hex2rgb(userInput)
  }

  return (
    <div className="App"  onCheck ={{backgroundColor:  {onCheck}}} >
     <Search 
        />
       
    </div>
  );
}

export default App;
