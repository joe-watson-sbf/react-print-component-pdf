import React from 'react'
import { fakeTransaction } from '../helpers/utils'


export const ComponentToPrint = ({ reference }) => {

    const contentStyle = {
        textAlign: 'center', 
        width:'560px'
    }
    
    const headerStyle = {
        backgroundColor: "#203650",
        padding: "1rem",
        color: "aliceblue"
    }

    const footerStyle = {
        textAlign: 'left',
        margin: '0 2rem'
    }

    return (
        <div ref={reference} className='ctp' style={contentStyle}>
            <div className='en-tete' style={headerStyle}>
                <h1 style={{fontWeight: 300}}>Top Plip - Money Exchange</h1>
                <span>Reference Number</span>
                <h2>{fakeTransaction.available.transactionId}</h2>
                <div>
                    <h4>{new Date(fakeTransaction.available.save_date).toLocaleString().replace(',', ' - ')}</h4>
                </div>
            </div>
            <div className='content' style={{ textAlign: 'left', margin: '0 2rem' }}>
                <h3 style={{fontWeight: 300}}>Sender Details</h3>
                <hr />
                <p> <strong>Full name: </strong> {fakeTransaction.available.sender.full_name}</p>
                <p> <strong>Origin: </strong> {fakeTransaction.available.sender.country}</p>
                <p> <strong>Phone: </strong> {fakeTransaction.available.sender.phone_number ?? 'NO PHONE NUMBER'}</p>
                <br />
                <h3 style={{fontWeight: 300}}>Receiver Details</h3>
                <hr />
                <p> <strong>Full name: </strong> {fakeTransaction.available.receiver.full_name}</p>
                <p> <strong>Origin: </strong> {fakeTransaction.available.receiver.country}</p>
                <p> <strong>Phone: </strong> {fakeTransaction.available.receiver.phone_number ?? 'NO PHONE NUMBER'}</p>
            </div>
            <div className='pied' style={footerStyle}>
                <hr />
                <br/>
                <p> <strong>Payout Amount: </strong> $ {fakeTransaction.available.sender.amount} USD</p>
                <p> <strong>Fees: </strong> $ {fakeTransaction.available.details.fees} USD</p>
                <p> <strong>Total: </strong> $ {fakeTransaction.available.details.total_cost} USD</p>
            </div>
        </div>
    )
}
