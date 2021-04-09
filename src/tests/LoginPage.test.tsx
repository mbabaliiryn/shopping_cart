import  LoginPage  from '../components/auth/LoginPage';
import * as ReactDOM from 'react-dom';
import React from 'react'

describe('Login component test', ()=>{
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<LoginPage />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(3);
        expect(inputs[0].name).toBe('Business Name');
        expect(inputs[1].name).toBe('Nin Number');
        expect(inputs[2].name).toBe('Password')
    })

})