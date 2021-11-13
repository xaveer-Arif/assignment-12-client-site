import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Popular = () => {
    return (
        <div className = 'container text-start mb-3 mt-5'>
        <h1 className = 'text-center p-3 '>Popular At This Time</h1>
      <Row xs={1} md={3} className="g-4">

        <Col >
            <h5>CHOOSE YOURS</h5>
            <h1>Popular At Now</h1>
            <p>It was fantastic going on the sled to see the views on the mountains! And the action of it – I loved going fast!”

            </p>

        </Col>
        <Col >
            <img className = 'img-fluid' src="https://i.ibb.co/VmyJSxJ/c91bda68364257-5b5a0903d2730.jpg" alt="" />
        </Col>
        <Col >
            <img className = 'img-fluid' src="https://i.ibb.co/8sXp1sW/2e24f054701211-59661922ac643-1.jpg" alt="" />
        </Col>
        <Col >
            <img className = 'img-fluid' src="https://i.ibb.co/C9pdrVj/03-img-1.jpg" alt="" />
        </Col>
        <Col >
            <img className = 'img-fluid' src="https://i.ibb.co/G54phWj/5.jpg" alt="" />
        </Col>
        <Col >
            <img className = 'img-fluid' src="https://i.ibb.co/xJbrNmZ/72f48856069087-599edd7dadedc-1.jpg" alt="" />
        </Col>
        <Col >
        
        </Col>

</Row>
        
    </div>
    );
};

export default Popular;