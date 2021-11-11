import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation';

const Appartments = () => {
    const [appartments, setAppartments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAppartments(data))
    },[])
    return (
        <div>
            <Navigation/>  
            <h1>appartmetns {appartments.length}</h1>
        </div>
    );
};

export default Appartments;