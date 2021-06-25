
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
//stateless componnet 
const App = () => {

  const [tasks, setTasks] = useState([
    //fake api
    {
      id: 1,
      text: 'Doctors appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Go to the museum',
      day: 'Dec 5th at 22:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Attend Club Day',
      day: 'June 24 at 2:30pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'Learn react',
      day: 'Feb 15th at 15:30pm',
      reminder: true,
    },

  ])

  const addTask = (task) => {
    const id = Math.random(Math.floor() * 10000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  

  //DELETE TASK
  const deleteTask = (id) => {
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
      <Header />
      <AddTask onAdd={addTask} />
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
