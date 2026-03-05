import React from 'react'
import TaskOverview from '../components/TaskOverview'
import KanbanBoard from '../components/kanbanBoard'

function Dashboard() {
    
    return (
        <div className='inter-font mt-25'>
            <div className='container mx-auto'>
                <div className='mb-8'>
                    <TaskOverview></TaskOverview>
                </div>

                <div>
                    <KanbanBoard></KanbanBoard>
                </div>
            </div>
        </div>
    )
}

export default Dashboard