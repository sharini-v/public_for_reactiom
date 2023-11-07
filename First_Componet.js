import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import Form from './customer_form';

function FC() {

    return(
        <>
        
        <div className='container'>
            <div className='left_div'>
                <h1>Nearshore & Offshore Software Development Centers for companies in Western Europe & USA</h1>
                <p style={{fontSize: '18px', marginTop: '22px'}}>Whenever you are looking for a full-product development partner, a group of engineers, or a trusted party who will help you establish your own IT department in Poland – we got you covered.</p>
                <button className='scb' ><Link to='/csf'>Schedule a Call</Link><span style={{position: 'absolute'}}>&rarr;</span></button>
            </div>
            <div className='right_div'>
                <iframe></iframe>
            </div>  
        </div>

        <Routes>
        <Route path='/csf' element={<Form />} />
        </Routes>


        </>
    );
}

export default FC;