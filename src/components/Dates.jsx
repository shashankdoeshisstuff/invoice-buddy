import React from 'react'

const Dates = ({invoiceNumber, invoiceDate, dueDate}) => {
  return (
    <>
    {/* Dates */}
    <article className="my-5 flex items-end justify-end">
        <ul>
            <li><span className="font-bold">Invoice number: </span>{invoiceNumber}</li>
            <li><span className="font-bold">Invoice date: </span>{invoiceDate}</li>
            <li><span className="font-bold">Due date: </span>{dueDate}</li>
        </ul>
    </article>
    {/* End of Dates */}
    </>
  )
}

export default Dates