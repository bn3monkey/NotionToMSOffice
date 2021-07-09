class HansonoDoc
{
    private notion;

    constructor() {
        const fs = require('fs')
        const tokenFile : any = fs.readFileSync("./lib/token/token.json");
        const { Client } = require('@notionhq/client')
        const tokenObject : JSON = JSON.parse(tokenFile)
        const token : string = tokenObject["token"];
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

    if (!Office.context.requirements.isSetSupported('WordApi', '1.3')) {
        console.log('Sorry. The tutorial add-in uses Word.js APIs that are not available in your version of Office.');
    }

    console.log(response);

})();
