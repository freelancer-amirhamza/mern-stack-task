import React from 'react'

const Loader = () => {
  return (
    <>
    <div className="border border-blue-300  rounded-md h-2/3 p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4 flex-col justify-center">
          <div className=" flex w-full items-center justify-center py-5">
            <div className="rounded-full bg-slate-700 items-center h-16 w-16"></div></div>
            <div className="flex-1 space-y-7 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-7">
                <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Loader