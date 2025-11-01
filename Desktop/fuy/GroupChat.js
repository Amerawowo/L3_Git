import { Chat } from "./Chat.js";

export class GroupChat extends Chat {
    constructor(name, members, active, moderated = false) {
        super(name, members, active);
        this.moderated = moderated;
    }

    get info() { return { ...super.info, moderated: this.moderated }; }

    static clone(obj) {
        return new GroupChat(obj.name, obj.members, obj.active, obj.moderated);
    }
}
