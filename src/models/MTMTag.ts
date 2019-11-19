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
    public name: string;
    public type: string;
    public triggers: string[];
    public body: string;
    public lastEdited: Date;
    public get(id:string) { return {} as ITagItem; }
    public create(tag: ITagItem) { return tag; }
    public delete(tag: ITagItem) { return true; }
    public update(tag: ITagItem) { return tag; }
    static getAll() { return Array<ITagItem>();}
}

export default MTMTagItem;
