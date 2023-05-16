import React from 'react'
import {render, screen} from "@testing-library/react";
import Greet from "./greet";



describe('Greet', () => {
    it('renders greet', () => {
        render(<Greet/>)
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument()
    })
})

// describe('Nested', () => {
//     it('renders with a name', () => {
//         render (<Greet name="Kennis"/>)
//         const textElements = screen.getByText('Hello Kennis');
//         expect(textElements).toBeInTheDocument()
//     })
// })