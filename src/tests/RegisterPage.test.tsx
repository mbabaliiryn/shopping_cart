import  RegisterPage  from '../components/auth/RegisterPage';
import * as ReactDOM from 'react-dom';
import React from 'react'

describe('Register component test', ()=>{
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<RegisterPage />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(9);
        expect(inputs[0].name).toBe('First Name');
        expect(inputs[1].name).toBe('Last Name');
        expect(inputs[2].name).toBe('Business Name');
        expect(inputs[3].name).toBe('Nin Number');
        expect(inputs[4].name).toBe('Telephone Number');
        expect(inputs[5].name).toBe('Location');
        expect(inputs[6].name).toBe('Email');
        expect(inputs[7].name).toBe('User Type');
        expect(inputs[8].name).toBe('Password');
        expect(inputs[9].name).toBe('Confirm Password')
    })

})