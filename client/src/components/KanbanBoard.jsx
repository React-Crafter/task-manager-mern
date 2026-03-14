import React from 'react'
import Column from './Column';

function KanbanBoard({tasks, isLoading}) {

    const todos = tasks.filter(t => t.status === 'To Do');
    const inProgress = tasks.filter(t => t.status === 'In Progress');
    const done = tasks.filter(t => t.status === 'Done')
    
    const coloums = [
        {
            id: 'todos',
            bgColor: '#19a1e6',
            title: 'To Do',
            tasks: todos
        },
        {
            id: 'inProgress',
            bgColor: '#f59f0a',
            title: 'In Progress',
            tasks: inProgress
        },
        {
            id: 'done',
            bgColor:"#16a249",
            title: 'Done',
            tasks: done
        }
    ]

    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-[#f2f2f2]'> Board </h2>
                <p className='text-sm font-bold mt-1 text-[#878792]'> Drag and drop tasks to move them </p>
            </div>

            <div className='flex gap-6 overflow-x-auto pb-6'>
                {
                    coloums.map(col => (
                        <Column 
                            key= {col.id} 
                            title= {col.title}
                            tasks= {col.tasks}
                            bgColor= {col.bgColor}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default KanbanBoard