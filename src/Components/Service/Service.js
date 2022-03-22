import React, { useEffect, useState } from 'react';
import Services from './Services/Services';
import  './Service.css'

const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <h2 className="text-center fw-blod bg-secondary bg-gradient">Our Services</h2>
            <hr />
            <div className="container ">
            {/* d-flex flex-wrap */}
                {
                    service.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
        </div>
        </div>
    );
};

export default Service;
