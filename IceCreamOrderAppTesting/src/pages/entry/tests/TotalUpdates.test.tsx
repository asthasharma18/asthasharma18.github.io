import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event"
import { expect } from "vitest";
import { Options } from "../Options";
import React from "react";
import { OrderEntry } from "../OrderEntry";

describe('subtotal', () => {
test('update scoop total when scoops change', async()=>{

    const user = userEvent.setup();
    render(<Options optionType= "scoops"/>);
    //initial amount is zero
     const scoopsSubtotal = screen.getByText('Scoops total: $', {exact:false});
     expect(scoopsSubtotal).toHaveTextContent('0.00');

    //update vanilla scoop to 1, and check total amount
    const vanillaSpinButton = screen.getByRole('spinbutton', {name: 'Vanilla'});
    
    await user.clear(vanillaSpinButton);
    await user.type(vanillaSpinButton, "1");
    expect(scoopsSubtotal).toHaveTextContent("2.00");

    //update chocolate scoops and check subtotal
    const chocolateSpinButton = screen.getByRole('spinbutton', {name: 'Chocolate'});
    
    await user.clear(chocolateSpinButton);
    await user.type(chocolateSpinButton, "2");
    expect(scoopsSubtotal).toHaveTextContent("6.00");

});

test('update toppings total when toppings change', async ()=>{

    const user = userEvent.setup();
    render(<Options optionType= "toppings"/>);
    //initial amount is zero
     const toppingsSubtotal = screen.getByText('Toppings total: $', {exact:false});
     expect(toppingsSubtotal).toHaveTextContent('0.00');

    //check cherries, and check total amount
    const cherriesCheckBox = await screen.findByRole('checkbox', {name: 'Cherries'});
    
    await user.click(cherriesCheckBox);
    expect(cherriesCheckBox).toBeChecked();
    expect(toppingsSubtotal).toHaveTextContent("1.50");

    //check M&Ms scoops and check subtotal
    const MnmCheckBox = screen.getByRole('checkbox', {name: 'M&Ms'});
    
    await user.click(MnmCheckBox);
    expect(MnmCheckBox).toBeChecked();
    expect(toppingsSubtotal).toHaveTextContent("3.00");

    //uncheck cherries and check subtotal
    await user.click(cherriesCheckBox);
    expect(cherriesCheckBox).not.toBeChecked();
    expect(toppingsSubtotal).toHaveTextContent("1.50");

});
});

describe('Grand total', () => {

test('grand total updates correctly', async () => {

    const user = userEvent.setup();
    render(<OrderEntry/>);
    //initial is 0.00
    const grandTotal = screen.getByText('Grand total: $', {exact: false});
    expect(grandTotal).toHaveTextContent("0.00");

    //update scoops and check total
    const vanillaSpinButton = screen.getByRole('spinbutton', {name: 'Vanilla'});
    const chocolateSpinButton = screen.getByRole('spinbutton', {name: 'Chocolate'});
    await user.clear(vanillaSpinButton);
    await user.type(vanillaSpinButton, "1");    
    await user.clear(chocolateSpinButton);
    await user.type(chocolateSpinButton, "1");
    expect(grandTotal).toHaveTextContent("4.00");

    //update toppings and check total
    const cherriesCheckBox = await screen.findByRole('checkbox', {name: 'Cherries'});
    
    await user.click(cherriesCheckBox);
    expect(toppingsSubtotal).toHaveTextContent("6.50");

    //remove something and check total
    await user.clear(chocolateSpinButton);
    await user.type(chocolateSpinButton, "0");
    expect(toppingsSubtotal).toHaveTextContent("3.50");
})
})


