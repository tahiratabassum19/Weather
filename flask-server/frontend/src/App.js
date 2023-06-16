import React, {useState,useEffect} from 'react'

function App() {
  const [data1, setData]= useState([{}])
  useEffect(()=>{
    fetch("http://localhost:5000/members").then(
      res=> res.json()
    ).then(
      data1=>{
      setData(data1)
      console.log(data1) 
    
    }
    ) 

},[])
    
    
    
    
    
    
    
  return (


    
    <div>
    
    
    
    </div>
  )
}

export default App