import React, { useEffect } from 'react'
import TaskOverview from '../components/TaskOverview'
import KanbanBoard from '../components/KanbanBoard';
import { useTasks } from '../hooks/useTasks'

function Dashboard() {

    const {tasks, isLoading, error, createTask} = useTasks();
    
    return (
        <div className='inter-font mt-25'>
            <div className='container mx-auto'>
                <div className='mb-8'>
                    <TaskOverview tasks={tasks} isLoading={isLoading}></TaskOverview>
                </div>

                <div>
                    <KanbanBoard tasks={tasks} isLoading={isLoading}></KanbanBoard>
                </div>
            </div>
        </div>
    )
}

export default Dashboard