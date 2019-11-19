import MTMTagItem, { ITagItem } from "../../../models/MTMTagItem";
export default class MTMRenderer {
    public render(): string {

        const allTags: Array<ITagItem> = MTMTagItem.getAll();
        return "";
    }
}