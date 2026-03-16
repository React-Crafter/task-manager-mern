import React, { useState, useEffect } from 'react'
import Column from './Column';
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    DragOverlay,
    useSensors
} from '@dnd-kit/core'

import { arrayMove } from '@dnd-kit/sortable'

function KanbanBoard({tasks, isLoading}) {

    const sensors = useSensors(
        useSensor(PointerSensor)
    )

    const [allTasks, setAllTasks] = useState(tasks)

    useEffect(() => {
        setAllTasks(tasks)
    }, [tasks])

    const todos = allTasks.filter(t => t.status === 'To Do')
    const inProgress = allTasks.filter(t => t.status === 'In Progress')
    const done = allTasks.filter(t => t.status === 'Done')
    
    const coloums = [
        {
            id: 'To Do',
            bgColor: '#19a1e6',
            title: 'To Do',
            tasks: todos
        },
        {
            id: 'In Progress',
            bgColor: '#f59f0a',
            title: 'In Progress',
            tasks: inProgress
        },
        {
            id: 'Done',
            bgColor:"#16a249",
            title: 'Done',
            tasks: done
        }
    ]

    const handleDragEnd = (event) => {

        const { active, over } = event

        if (!over) return

        const activeId = active.id
        const overId = over.id

        const activeTask = allTasks.find(t => t._id === activeId)
        const overTask = allTasks.find(t => t._id === overId)

        const activeColumn = activeTask?.status
        const overColumn = overTask ? overTask.status : overId

        // SAME COLUMN REORDER
        if (activeColumn === overColumn && overTask) {

            const columnTasks = allTasks.filter(t => t.status === activeColumn)

            const oldIndex = columnTasks.findIndex(t => t._id === activeId)
            const newIndex = columnTasks.findIndex(t => t._id === overId)

            if (oldIndex !== newIndex) {

                const reordered = arrayMove(columnTasks, oldIndex, newIndex)
                const otherTasks = allTasks.filter(t => t.status !== activeColumn)

                setAllTasks([...otherTasks, ...reordered])
            }

            return
        }

        // CROSS COLUMN MOVE
        if (activeColumn !== overColumn) {

            setAllTasks(prev =>
                prev.map(task =>
                    task._id === activeId
                    ? { ...task, status: overColumn }
                    : task
                )
            )

        }

    }

    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-[#f2f2f2]'> Board </h2>
                <p className='text-sm font-bold mt-1 text-[#878792]'> Drag and drop tasks to move them </p>
            </div>

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <div className='flex gap-6 overflow-x-auto pb-6'>
                    {
                        coloums.map(col => (
                            <Column 
                                key= {col.id} 
                                id= {col.id}
                                title= {col.title}
                                tasks= {col.tasks}
                                bgColor= {col.bgColor}
                            />
                        ))
                    }
                </div>
            </DndContext>
        </div>
    )
}

export default KanbanBoard