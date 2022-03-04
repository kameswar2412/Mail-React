import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Index from '../Index/index'
import Deleted from '../Deleted/delete'
import Spam from '../Spam/spam'

const RoutePage = () => {
    return ( 
        <>
        <Routes>
            <Route exact path="/" element={ <Index />} />
            <Route path='/Deleted' element={<Deleted />} />
            <Route path='/Spam' element={<Spam />} />

        </Routes>
        </>
     );
}
 
export default RoutePage;