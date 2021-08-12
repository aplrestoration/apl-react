import React from 'react'
import { Button, Container } from 'react-bootstrap'
import '../index.css'

const Marketing = () => {
    return (
        <Container>
        <div className="d-flex justify-content-around text-center">
            <div className="marketing-block">
                <span className="marketing-title">5 stars</span>
                <h6>Average Rating</h6>
            </div>
            <div className="marketing-block">
                <span className="marketing-title">5 stars</span>
                <h6>Average Rating</h6>
            </div>
            <div className="marketing-block">
                <span className="marketing-title">5 stars</span>
                <h6>Average Rating</h6>
            </div>

        </div>
        <div className="d-flex flex-column align-items-center marketing-callout">
            <span className="callout-title">ready to fix your home</span>
            <h6>We're here to help, so you can rest assured.</h6>
            <Button className="custom-button-react rounded-0 fw-bold mt-2 px-5 py-3">Call for free quote</Button>
        </div>
        </Container>
    )
}

export default Marketing
