import { render,  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { describe, it, expect } from 'vitest';


describe("app", ()=>{

    it("Should change hour", async ()=>{
        const user = userEvent.setup();

        const {findByTestId, findByText, ...e} = render(<App />);
        const text = await findByTestId("countDisplay");
        const button = await findByText(/increment/i);

        const originalTime = text.textContent;
        expect(text).toBeVisible();
        expect(button).toBeVisible();
        await user.click(button)

        expect(text).not.toHaveTextContent(originalTime)
    })
})