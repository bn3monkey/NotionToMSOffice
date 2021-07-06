const tokenFile = require('../token/token.json');
const token = tokenFile["token"];

const { Client } = require('@notionhq/client');
const notion = new Client({auth : token});

(async () => {
    const reponse = await notion.databases.list();
    console.log(response);
})();