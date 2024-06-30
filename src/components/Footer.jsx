import React from 'react'

const Footer = ({name, phone, address, email, website, bankName, bankAccount}) => {
  return (
    <>
    <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Your name: </span>{name}</li>
            <li><span className="font-bold">Your email: </span>{email}</li>
            <li><span className="font-bold">Phone number: </span>{phone}</li>
            <li><span className="font-bold">Bank: </span>{bankName}</li>
            <li><span className="font-bold">Account holder: </span>Thomas Sankara</li>
            <li><span className="font-bold">Account number: </span>{bankAccount}</li>
            <li><span className="font-bold">Website: </span>{website}</li>
          </ul>
        </footer>
    </>
  )
}

export default Footer