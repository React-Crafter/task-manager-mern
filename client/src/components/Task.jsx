import React from 'react'

function Task({task}) {
    console.log(task)
    return (
      <div className='glass glass-hover rounded-lg p-4 cursor-grab active:cursor-grabbing transition-all duration-200'>
          <h4 className='font-medium text-foreground leading-tight'> {task.title} </h4>
          <p className='text-sm text-muted-foreground mt-1.5 line-clamp-2 mb-1.5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium reprehenderit eaque velit sed necessitatibus nemo quae inventore eos. Consectetur recusandae, officia quia eaque quod eum libero asperiores tempore cumque. </p>

          <div className='inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs bg-[#f59f0a33] text-[#f59f0a] border-[#f59f0a4d]'>
            {task.priority}
          </div>
      </div>
    )
}

export default Task