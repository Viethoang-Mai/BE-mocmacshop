const { createClient } = require("redis");
module.exports = {
    client: null,
    connect: async function () {
        const REDIS_URL = process.env.REDIS_URL;

        this.client = await createClient({ url: REDIS_URL })
            .on("error", (err) => console.log("Redis Client Error", err))
            .connect();
    },
    get: async function (key) {
        return await this.client.get(key);
    },
    set: async function (key, value, time = null) {
        if (time) {
            return await this.client.set(key, value, { EX: time });
        }
        return await this.client.set(key, value);
    },
    delete: async function (key) {
        return await this.client.del(key);
    },
    close: async function () {
        await this.client.disconnect();
    },
};
