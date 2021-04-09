import React from 'react';
import {Button, Card, CardDeck, Col, Container, Row} from 'react-bootstrap';
import image1 from '../images/cooking-oil.jpeg';
import Footer from './Footer'


export default function AvailableStock() {
    const [stocks, setStocks] = React.useState<Array<{ title: string, last: string }>>([])

    React.useEffect(() => {
        setStocks([{title: 'Content 1', last: '@ days ago'},
            {title: 'Content 2', last: '2 days ago'},
            {title: 'Content 3', last: '10 days ago'},
        ])
    }, [])
    return (
        <div>
            <nav>
                <input type="checkbox" id="check"/>
                <label className="checkbtn">
                    <i className="fas fa-bar"></i>
                </label>
                <label className="logo"><a href="/">Rooms Application</a></label>
                <ul>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </nav>

            <Row>
                <Col><h1>Available Stock</h1></Col>

                <Col><Button type="submit" className="order-btn bg-danger d-flex flex-direction-end "><a href="/order">Order now</a></Button></Col>
            </Row>

            <Container>
                <CardDeck>

                    {
                        stocks.map((stock, index) =>
                            <Card key={index}>
                                <Card.Img variant="top" src={image1} className="buyer_card"/>
                                <Card.Body>
                                    <Card.Title>{stock.title}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{stock.last}</small>
                                </Card.Footer>
                            </Card>
                        )
                    }
                </CardDeck>
                <CardDeck className="mt-4">

                    {
                        stocks.map((stock, index) =>
                            <Card key={index}>
                                <Card.Img variant="top" src={image1} className="buyer_card"/>
                                <Card.Body>
                                    <Card.Title>{stock.title}</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{stock.last}</small>
                                </Card.Footer>
                            </Card>
                        )
                    }
                </CardDeck>
            </Container>
            <Footer/>
        </div>
    )
}

