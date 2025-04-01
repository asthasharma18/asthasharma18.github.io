import { SummaryForm } from "../SummaryForm";
import { screen, render, fireEvent } from '@testing-library/react';
import { expect } from "vitest";
import userEvent from '@testing-library/user-event';


describe('Summary Form', ()=> {

test("checkbox flow", async () => {
    render (<SummaryForm />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole( 'checkbox', {name: /I agree to/i});
    const confirmButton = screen.getByRole('button', { name: /Confirm order/i});
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
    
    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();
})    

test("popover", async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();

    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditionText = screen.getByText(/Terms and Conditions/i);
    expect(termsAndConditionText).toBeInTheDocument();

    await user.hover(termsAndConditionText);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndConditionText);
    expect(popover).not.toBeInTheDocument();
})
}) 