const fetch = require("node-fetch");
module.exports = { getUserInfo };
async function getUserInfo(accessToken) {
    const url = "https://www.googleapis.com/oauth2/v1/userinfo";
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error("Failed to fetch user info: " + response.statusText);
    }

    return await response.json();
}
