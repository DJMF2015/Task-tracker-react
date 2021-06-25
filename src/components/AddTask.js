import React from 'react'
import { useState} from 'react'

export const AddTask = () => {
const [text, setText] = useState('')//update
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
        alert('Please add task')
        return
    }

    onAdd({text, day, reminder})
        
        setText('')
        setDay('')
        setReminder(false)
}

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' 
                value={text} onChange={(evt) => setText(evt.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day'
                value={day} onChange={(evt) => setDay(evt.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                checked={reminder}
                 value={reminder} onChange={(evt) => setReminder(evt.currentTarget.checked)}/>
            </div>
            {/* currentTarget identifies current target or event as the evnt traverses DOM */}

            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}
