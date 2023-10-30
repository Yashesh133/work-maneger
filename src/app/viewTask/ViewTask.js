"use client"
import userContext from '@/context/userContext'
import React, { useContext } from 'react'

const viewTask = () => {

  const contextData = useContext(userContext)
  console.log("contextData", contextData);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 m-5">
        <div className="flex items-center justify-center flex-col">
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">hello</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">description</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default viewTask