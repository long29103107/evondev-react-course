import React from 'react'

const EmptyTable = ({title = 'No items found', description = 'The list is currently empty.'}) => {
  return (
    <>
      <div className="mt-10 text-center text-gray-500 py-10">
          <div className="text-2xl font-bold mb-3">{title}</div>
          <div className="text-gray-400">{description}</div>
        </div>
    </>
  )
}

export default EmptyTable