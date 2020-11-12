import { getWeather } from "../src/server/server"

describe("Testing the WeatherbitAPI integration", () => {
    test("Testing the function exists", () => {
           expect(getWeather).toBeDefined();
    })
});
