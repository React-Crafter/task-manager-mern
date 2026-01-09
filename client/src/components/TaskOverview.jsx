import React, { useState } from 'react'
import { ListTodo, Clock, CircleCheck } from 'lucide-react'

function TaskOverview() {

    const [TaskOverview, setTaskOverview] = useState([
        {
            status: "To Do",
            numbers: 0,
            icon: <ListTodo/>,
            iconbgColor: 'bg-[#19a1e61a]'
        },
        {
            status: "In Progress",
            numbers: 0,
            icon: <Clock className='text-[#f59e0b]' />,
            iconbgColor: 'bg-[#f59f0a1a]'
        },
        {
            status: "Done",
            numbers: 0,
            icon: <CircleCheck className='text-[#16a34a]' />,
            iconbgColor: 'bg-[#16a2491a]'
        }
    ])

    return (
        <div>
            <div className='grid grid-col-1 sm:grid-cols-3 gap-2'>
                {
                    TaskOverview.map((task, index) => (
                        <div className='rounded-xl p-5 bg-[#121216cc] border border-[1px] border-[#16a2491a]'>
                            <div className='text-[#1a9fdb] flex items-start justify-between'>
                                <div className={`p-2.5 rounded-lg ${task.iconbgColor}`}>
                                    {task.icon}
                                </div>
                            </div>
                            <p className='text-3xl font-bold text-white'> {task.numbers} </p>
                            <p className='text-sm text-muted-foreground font-medium mt-1'> {task.status} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TaskOverview