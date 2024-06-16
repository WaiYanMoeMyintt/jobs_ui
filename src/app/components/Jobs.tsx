import React from 'react'
import JobRow from './JobRow'
const Jobs = () => {
  return (
    <div className='bg-slate-200 py-4 rounded-xl '>
          <div className="px-6">
              <h2 className='text-xl font-bold '>Recent Jobs</h2>
          </div>
          <div className="flex flex-col gap-4 px-4 py-4">
               <JobRow />
               <JobRow />
               <JobRow />
          </div>
    </div>
  )
}

export default Jobs