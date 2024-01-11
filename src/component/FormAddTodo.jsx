/* eslint-disable react/prop-types */
import { useState } from "react"

function FormAddTodo(props) {
  const {hdlAdd} = props
  
  const [input, setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()  
    let newJob = { todo: input, completed: false, user: 1 }
    hdlAdd(newJob)
    setInput(''); // Reset input
  }

  return (
    <form className="flex items-center mb-4" onSubmit={hdlSubmit}>
      <input
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add
      </button>
    </form>
  );
}

export default FormAddTodo