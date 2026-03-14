import React, { useState } from 'react'
import { ListTodo, Clock, CircleCheck, LoaderCircle } from 'lucide-react'
import { useTasks } from '../hooks/useTasks';

function TaskOverview({tasks, isLoading}) {

    const todo = tasks.filter(t => t.status === "To Do").length
    const progress = tasks.filter(t => t.status === "In Progress").length
    const done = tasks.filter(t => t.status === "Done").length

    const TasksOverview = [
        {
            status: "To Do",
            numbers: todo,
            icon: <ListTodo />,
            iconbgColor: 'bg-[#19a1e61a]'
        },
        {
            status: "In Progress",
            numbers: progress,
            icon: <Clock className='text-[#f59e0b]' />,
            iconbgColor: 'bg-[#f59f0a1a]'
        },
        {
            status: "Done",
            numbers: done,
            icon: <CircleCheck className='text-[#16a34a]' />,
            iconbgColor: 'bg-[#16a2491a]'
        }
    ]

    return (
        <div>
            <div className='grid grid-col-1 sm:grid-cols-3 gap-2'>
                {
                    TasksOverview.map((task, index) => (
                        <div key={task.status} className=' bg-[#14151a]/80 backdrop-blur-xl border border-[#2a2d36]/50 hover:bg-[#14151a]/90 hover:blur-none hover:border-[#2a2d36] transition-all duration-300 rounded-xl p-5'>
                            <div className='text-[#1a9fdb] flex items-start justify-between'>
                                <div className={`p-2.5 rounded-lg ${task.iconbgColor}`}>
                                    {task.icon}
                                </div>
                            </div>
                            <div className='ml-1'>
                                <p className='text-3xl font-bold'> {isLoading ? <LoaderCircle className='animate-spin '/> : task.numbers } </p>
                                <p className='text-sm text-muted-foreground font-medium mt-1'> {task.status} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TaskOverview