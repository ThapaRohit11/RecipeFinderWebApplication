import React from 'react'
import AdminNav from './AdminNav'

function ManageRecipe() {
  return (
    <>
    <AdminNav/>
    <div className="h-[800px] bg-red-500 flex items-center justify-center">
        <h1 className='text-5xl font-bold text-white'>Manage Recipes</h1>
    </div>
    </>
  )
}

export default ManageRecipe