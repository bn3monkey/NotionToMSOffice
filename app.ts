       
class HansonoDoc
{
    private notion;

    constructor() {
        const fs = require('fs')
        const tokenFile : any = fs.readFileSync("./lib/token/token.json");
        const tokenObject : JSON = JSON.parse(tokenFile)
        const token : string = tokenObject["token"];
        const { Client } = require('@notionhq/client');
        this.notion = new Client({auth : token});
    }

    get access() : any
    {
        return this.notion;
    }
}

const hansonoDoc = new HansonoDoc();

(async() => {
    const response = await hansonoDoc.access.databases.list();
    console.log(response);
    console.log(response);
})();