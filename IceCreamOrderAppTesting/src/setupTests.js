import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { beforeAll, afterEach,afterAll } from "vitest";

//establish api mocking before all tests
beforeAll(() => server.listen());

//Reset any request handlers that we may add during the tests, so they don't affect other tests
afterEach(() => server.resetHandlers());

//Clean up
afterAll(() => server.close());