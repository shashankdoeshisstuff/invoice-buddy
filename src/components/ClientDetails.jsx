import React from 'react'

const ClientDetails = ({clientName, clientAddress}) => {
  return (
    <>
    {/* Client details */}
    <section className="mt-5">
        <h2 className="text-xl uppercase">{clientName}</h2>
        <p>{clientAddress}</p>
    </section>
    {/* End of client details */}
    </>
  )
}

export default ClientDetails