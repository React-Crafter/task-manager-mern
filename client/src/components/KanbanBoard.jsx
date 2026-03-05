import React from 'react'

function kanbanBoard() {

    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-[#f2f2f2]'> Board </h2>
                <p className='text-sm font-bold mt-1 text-[#878792]'> Drag and drop tasks to move them </p>
            </div>
            <div className='flex gap-6 overflow-x-auto pb-6'>

                <div className='flex flex-col min-w-[320px] max-w-90 rounded-xl glass'>
                    <div className='p-4 border-b border-border/50'>
                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 rounded-full bg-[#19a1e6]'></div>
                            <h3 className='font-semibold text-foreground'> To Do </h3>
                            <span className='ml-auto text-sm text-[#878792] bg-[#22222a] px-2 py-0.5 rounded-full'>0</span>
                        </div>
                    </div>

                    <div className='flex-1 p-3 space-y-3 overflow-y-auto max-h-[calc(100vh-280px)] min-h-25 transition-colors duration-200 '>

                    </div>
                </div>

                <div className='flex flex-col min-w-[320px] max-w-90 h-87.5 rounded-xl glass'>
                    <div className='p-4 border-b border-border/50'>
                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 rounded-full bg-[#19a1e6]'></div>
                            <h3 className='font-semibold text-foreground'> To Do </h3>
                            <span className='ml-auto text-sm text-[#878792] bg-[#22222a] px-2 py-0.5 rounded-full'>0</span>
                        </div>
                    </div>
                    
                    <div className='flex-1 p-3 space-y-3 overflow-y-auto max-h-[calc(100vh-280px)] min-h-25 transition-colors duration-200 '>

                    </div>
                </div>

                <div className='flex flex-col min-w-[320px] max-w-90 rounded-xl glass'>
                    <div className='p-4 border-b border-border/50'>
                        <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 rounded-full bg-[#19a1e6]'></div>
                            <h3 className='font-semibold text-foreground'> To Do </h3>
                            <span className='ml-auto text-sm text-[#878792] bg-[#22222a] px-2 py-0.5 rounded-full'>0</span>
                        </div>
                    </div>
                    
                    <div className='flex-1 p-3 space-y-3 overflow-y-auto max-h-[calc(100vh-280px)] min-h-25 transition-colors duration-200 '>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default kanbanBoard