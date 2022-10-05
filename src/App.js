import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { ComponentToPrint } from './components/ComponentToPrint';

const App = () => {

    const componentRef = useRef();

    /**
     * @format https://lozanoimpresores.com/blog/consejos/formatos-de-papel-medidas-y-principales-usos/
     */
    const bodyStyle = {
        padding: '4rem', 
        width:'560px'
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className='print' style={bodyStyle}>
            <ReactToPrint
                copyStyles={true}
                bodyClass={'print'}
                documentTitle='Top Plip - Reçu'
                trigger={() => <button>Print</button>}
                content={() => componentRef.current} />
            <ComponentToPrint reference={componentRef} />
        </div>
        </div>
    )
}

export default App

