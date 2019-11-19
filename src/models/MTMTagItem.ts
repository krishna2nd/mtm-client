export interface ITagItem
 {
    name: string;
    type: string;
    triggers: string[];
    body: string;
    lastEdited: Date;

    get(id:string): ITagItem;
    create(tag: ITagItem): ITagItem;
    delete(tag: ITagItem): boolean;
    update(tag: ITagItem): ITagItem;
}

export class MTMTagItem implements ITagItem {
    get(id:string) { return {} as ITagItem; }
    create(tag: ITagItem) { return tag; }
    delete(tag: ITagItem) { return true; }
    update(tag: ITagItem) { return tag; }
    static getAll() { return Array<ITagItem>();}
}

export default MTMTagItem;
