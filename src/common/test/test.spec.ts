import { app, testFunction } from "../../app";
import supertest from "supertest";

describe("TEST CI/CD", () => {
        it("test case 1", async () => {
                const result = testFunction();

                expect(result).toBe("v1..0");
        });
});
