import * as fs from "fs";

export default class BaseRenderer {
    render(): Buffer {
        console.log(process.cwd())
        const content: Buffer = new Buffer(fs.readFileSync("dist/public/jquery.js", { encoding: "utf-8", flag: 'r' }));
        return content;
    }
}