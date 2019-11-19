//import MTMTagItem, { ITagItem } from "../../../models/MTMTag";
import BaseRenderer from "./base";
export default class MTMRenderer extends BaseRenderer {
    public render(): Buffer {
        const content: Buffer = super.render();
        //const allTags: Array<ITagItem> = MTMTagItem.getAll();
        return content;
    }
}