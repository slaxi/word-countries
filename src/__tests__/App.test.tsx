import { describe, expect } from "vitest";
import {render, screen} from '@testing-library/react'
import App from "../App";

describe('App componenent', () => {
    it('should display correct title', () => {
        render(<App />)
        const heading = screen.getByRole('heading', {level: 1})

        expect(heading).toHaveTextContent('World Countries')
    })
})