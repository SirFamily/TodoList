/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Dashboard from "./Dashboard"
import FormAddTodo from "./FormAddTodo"
import TodoContainer from "./TodoContainer"
import axios from "axios"

function TodoApp() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [trigger, setTrigger] = useState(false)
  const apiUrl = 'http://localhost:8080/todos'

  useEffect( ()=>{
    // setIsLoading(true)
    // fetch(apiUrl).then(res=>res.json())
    // .then(dat => {
    //   console.log(dat)
    //   setData(dat)
    //   setIsLoading(false)
    // })

    axios.get(apiUrl).then( res =>{
      console.log(res)
      setData(res.data)
      setIsLoading(false)
    })
  }, [trigger] )

  const hdlAdd = (newJob) => {
    axios.post(apiUrl,newJob).then(res =>{
      console.log(res)
      setTrigger(prv=>!prv)
    })
  }

  const hdlDel = (id) => {
    axios.delete(`${apiUrl}/${id}`).then(res => {
      console.log(res);
      setTrigger(prev => !prev); // Trigger a component refresh
    })}

    const hdlEdit = (id, updatedText) => {
      axios.put(`${apiUrl}/${id}`, { todo: updatedText }).then(res => {
        console.log(res);
        setTrigger(prev => !prev); // Trigger a component refresh
      })}

  if (isLoading) {
    return ( <h1>Loading...</h1> )
  }

  return (
    <div className="container mx-auto p-4">
      <Dashboard task={data.length}/>
      <FormAddTodo hdlAdd={hdlAdd}/>
      <TodoContainer todos={data} hdlDel={hdlDel} hdlEdit={hdlEdit}/>
    </div>
  )
}

export default TodoApp