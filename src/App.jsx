import Header from './components/Header'
import MainDetails from './components/MainDetails'
import ClientDetails from './components/ClientDetails'
import Dates from './components/Dates'
import Table from './components/Tables'
import Notes from './components/Notes'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  // for invoice
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [website, setWebsite] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl
      bg-white rounded shadow"> 
        {showInvoice ? (
            <div>
              <Header handlePrint={handlePrint}/>
              <MainDetails name={name} address={address}/>
              <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/> 
              <Table/>
              <Notes notes={notes}/>
              <Footer name={name} address={address} email={email} website={website}
              phone={phone} bankName={bankName} bankAccount={bankAccount}/>

              <button className='mt-5 bg-blue-500 text-white font-bold
              py-2 px-8 rounded shadow border-2 border-blue-500
              hover:bg-transparent hover:text-blue-500
              transition-all duration-300'
              onClick={() => setShowInvoice(false)}>
                Edit Information
              </button>
            </div> 
          ) : (
            
            <>
            {/* name, address, email, phone, bank name,
             bank account number, website, client name,
             client address, invoice number, invoice date,
             due date, notes */}
            <div className='flex flex-col justify-center'>

              <label htmlFor="name">Enter your name</label>
              <input type='text' name='name' id='name'
                placeholder='Enter Your name' autoComplete='off'
                value={name} onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="address">Enter your address</label>
              <input type='text' name='address' id='address'
                placeholder='Enter Your address' autoComplete='off'
                value={address} onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="email">Enter your email</label>
              <input type='email' name='email' id='email'
                placeholder='Enter Your email' autoComplete='off'
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="website">Enter your website</label>
              <input type='url' name='website' id='website'
                placeholder='Enter Your website' autoComplete='off'
                value={website} onChange={(e) => setWebsite(e.target.value)}
              />
              <label htmlFor="phone">Enter your phone</label>
              <input type='tel' name='phone' id='phonw'
                placeholder='Enter Your phone' autoComplete='off'
                value={phone} onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="bankName">Enter your bank name</label>
              <input type='text' name='bankName' id='bankName'
                placeholder='Enter Your bank name' autoComplete='off'
                value={bankName} onChange={(e) => setBankName(e.target.value)}
              />
              <label htmlFor="clientName">Enter client name</label>
              <input type='text' name='clientName' id='clientName'
                placeholder='Enter Your client name' autoComplete='off'
                value={clientName} onChange={(e) => setClientName(e.target.value)}
              />
              <label htmlFor="clientAddress">Enter client Address</label>
              <input type='text' name='clientAddress' id='clientAddress'
                placeholder='Enter Your client address' autoComplete='off'
                value={clientAddress} onChange={(e) => setClientAddress(e.target.value)}
              />
              <label htmlFor="invoiceNumber">Enter invoice Number</label>
              <input type='number' name='invoiceNumber' id='invoiceNumber'
                placeholder='Enter Your invoice Number' autoComplete='off'
                value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)}
              />
              <label htmlFor="invoiceDate">Enter invoice date</label>
              <input type='date' name='invoiceDate' id='invoiceDate'
                placeholder='Enter invoice date' autoComplete='off'
                value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)}
              />
              <label htmlFor="dueDate">Enter due date</label>
              <input type='date' name='dueDate' id='dueDate'
                placeholder='Enter due date' autoComplete='off'
                value={dueDate} onChange={(e) => setDueDate(e.target.value)}
              />
              <label htmlFor="notes">Enter notes</label>
              <textarea name='notes' id='notes' cols="30" rows="10"
                placeholder='Enter notes' autoComplete='off'
                value={notes} onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <button className='bg-blue-500 text-white font-bold
              py-2 px-8 rounded shadow border-2 border-blue-500
              hover:bg-transparent hover:text-blue-500
              transition-all duration-300'
              onClick={() => setShowInvoice(true)}>
                Preview Invoice
              </button>
            </div>
            </>
          )}
      </main>
    </>
  );
}

export default App;