import { render, screen } from "../../../test-utils/testing-library-utils";
import { server } from "../../../mocks/server";
import { http, HttpResponse } from "msw";
import { OrderEntry } from "../OrderEntry";
import { expect } from "vitest";

test('testing errors', async ()=> {
server.resetHandlers(
    http.get('http://localhost:3030/scoops', () =>{
        return new HttpResponse(null, {status:500})
    }),
http.get('http://localhost:3030/toppings', () => {
    return new HttpResponse(null, {status: 500})
}));
render(<OrderEntry />);
const noOrderAlerts = await screen.findAllByRole('alert');
expect(noOrderAlerts).toHaveLength(2);
})