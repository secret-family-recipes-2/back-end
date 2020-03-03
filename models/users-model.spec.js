const Users = require('./users-model.js');
const db = require("../data/dbConfig.js");

describe("users model", () => {
    describe("add", () => {
        it("should add a new user to the db", async () => {
            await Users.add({ username: "heather", password: "password3" });
            await Users.add({ username: "grey", password: "password4" });

            const users = await db("users");
            expect(users).toHaveLength(2);
        });

        beforeEach(async () => {
            await db("users").truncate();
        });
    });

    describe("find", () => {
        it("should find all the users", async () => {
            let users = await Users;
        });
    });
});