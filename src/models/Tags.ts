interface ITag {
    name: string;
    type: string;
    triggers: string[];
    lastEdited: Date;
}

interface Tag
 {
    get(): Array<Tag>;
    create(Tag): Tag;
    delete(Tag): boolean;
    update(Tag): Tag
}

class MTMTag implements Tag {
    get() { return Array<Tag>(); }
    create(tag: Tag) { return tag; }
    delete(tag: Tag) { return true; }
    update(tag: Tag) { return tag; }
}

export default MTMTag;