import React from 'react'
import Task from './Task'

function Column({title, tasks, bgColor}) {
    console.log(tasks)
    return (
        <div className='flex flex-col min-w-[320px] max-w-90 rounded-xl glass'>
            <div className='p-4 border-b border-border/50'>
                <div className='flex items-center gap-3'>
                    <div className={`w-3 h-3 rounded-full bg-[${bgColor}]`}></div>
                    <h3 className='font-semibold text-foreground'> {title} </h3>
                    <span className='ml-auto text-sm text-[#878792] bg-[#22222a] px-2 py-0.5 rounded-full'>0</span>
                </div>
            </div>

            <div className='flex-1 p-3 space-y-3 overflow-y-auto max-h-[calc(100vh-280px)] min-h-25 transition-colors duration-200 '>
                {
                    tasks.map(task => (
                        <Task key={task._id} task={task}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Column