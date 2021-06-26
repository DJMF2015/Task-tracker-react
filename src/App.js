
import { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
//stateless componnet 
const App = () => {
const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

useEffect(() => {
 const getTasks = async () => {
   const tasksFromServer = await fetchTasks()
   setTasks(tasksFromServer)
 }

  
  getTasks()
}, [])

//fetch tasks
const fetchTasks = async ()=>{
  const response = await fetch('http://locahost:5000/tasks')
  const data = await response.json()

   return data
}

  //ADD NEW TASK
    const addTask = async (task) => {
      //create new random Id with additional +1 increment
      // const id = Math.random(Math.floor() * 10000) + 1
      // const newTask = {id, ...task}
      // setTasks([...tasks, newTask])
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      const data = await response.json()
   
      //add data onto existing tasks
      setTasks([...tasks, data])
    }

    //DELETE TASK
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/${id}`, {
        method: 'DELETE',
      })
  
      setTasks(tasks.filter((task) => task.id !== id))
    }
  
  const toggleReminder = (id)=> {
   setTasks(
    tasks.map((task) => 
   task.id === id ? 
   {...task, reminder: !task.reminder} : task)
   )
  }
  
    return (
      <div className='container'>
        <Header onAdd={() => setShowAddTask
        (!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete=
            {deleteTask} onToggle={toggleReminder} />
        ) : (
          'No Tasks To Show'
        )}
      </div>
    )
  }
  
  export default App;
  //sudo npm install -g serve
  //serve -s build -p 8000 -not working
  //npm install json-server
  //npm run server then...
  //new tab - npm start (task) => {
