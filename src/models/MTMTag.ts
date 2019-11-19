export interface ITag {
    name: string;
    type: string;
    triggers: string[];
    lastEdited: Date;
}

export interface Tag
 {
    get(id:string): Tag;
    create(tag: Tag): Tag;
    delete(tag: Tag): boolean;
    update(tag: Tag): Tag;
}

export class MTMTag implements Tag {
    get(id:string) { return {} as Tag; }
    create(tag: Tag) { return tag; }
    delete(tag: Tag) { return true; }
    update(tag: Tag) { return tag; }
    static getAll() { return Array<Tag>();}
}

export default MTMTag;
