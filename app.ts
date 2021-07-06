       
class HansonoDoc
{
    private notion;

    constructor() {
        const tokenFile : any = require("./lib/token/token.json");
        const token : string = tokenFile["token"];
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
    const response = hansonoDoc.access().databases.list();
    console.log(response);
})