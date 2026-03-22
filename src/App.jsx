import "./App.css"
import { useState } from "react"
import QueueForm from "./components/QueueForm"
export default function App(){
  const [queue,setQueue] = useState([])

  const addToQueue = (customer)=>{

  }
  const updateStatus = (id,newStatus)=>{

  }
  const removeFromQueue = (id)=>{
//todo
  };


  return(
    <div className="app">
      <header>
      <h1>Queue managament system</h1>
      <p>Manage your customer efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>QueueForm</h1>
        <h1>QueueDisplay</h1>
      </main>
    </div> 
  )
}