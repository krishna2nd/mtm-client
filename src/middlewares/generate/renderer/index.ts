import MTMTag from "../../../models";
export default class MTMRenderer {
    public render(): string {
        return MTMTag.get();
    }
}