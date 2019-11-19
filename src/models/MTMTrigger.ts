export interface ITriggerItem
 {
    name: string;
    type: TriggerType;
    selector: string;
    body: string;
    lastEdited: Date;

    get(id:string): ITriggerItem;
    create(tag: ITriggerItem): ITriggerItem;
    delete(tag: ITriggerItem): boolean;
    update(tag: ITriggerItem): ITriggerItem;
}

export enum TriggerType {
    CLICK ='click',
    SELECTED_CLICK = 'selected_click',
    PAGE_LOAD = 'page_load'
}

export class MTMTriggerItem implements ITriggerItem {
    public name: string;
    public type: string;
    public selector: string;
    public body: string;
    public lastEdited: Date;
    public get(id:string) { return {} as ITriggerItem; }
    public create(tag: ITriggerItem) { return tag; }
    public delete(tag: ITriggerItem) { return true; }
    public update(tag: ITriggerItem) { return tag; }
    static getAll() { return Array<ITriggerItem>();}
}

export default MTMTriggerItem;
