import React from 'react';
import {Button, Container, Form} from 'semantic-ui-react';
import Footer from './Footer'

interface ReportForm {
    vehicleNumberPlate: string;
    shortages: string;
    payments: number;
    totalTransactionValue: string;
    arrivalTime: number;
    departureTime: number

}

export default function Report() {
    return (
        <div>
            <nav className="sticky-top">
                <input type="checkbox" id="check"/>
                <label className="checkbtn">
                    <i className="fas fa-bar"></i>
                </label>
                <ul>
                    <li><a href="/">Logout</a></li>
                </ul>
            </nav>
            <Container>

                <h1>Make a report</h1>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Vehicle Number plate '
                            placeholder='Enter Vehicle Number plate'
                        />
                        <Form.Input
                            fluid
                            label='Shortages'
                            placeholder='Enter Shortages'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Payments'
                            placeholder='Enter Payments'
                        />
                        <Form.Input
                            fluid
                            label='Total Transaction Value'
                            placeholder='Enter Total Transaction Vaue'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input
                            fluid
                            label='Vehicle departure time'
                            placeholder='Enter Vehicle departure time'
                        />
                        <Form.Input
                            fluid
                            label='Vehicle arrival time'
                            placeholder='Enter Vehicle arrival time'
                        />
                    </Form.Group>
                </Form>
                <Button type='submit'>Submit</Button>

            </Container>
            <Footer/>
        </div>

    )
}