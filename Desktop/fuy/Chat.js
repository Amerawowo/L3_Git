export class Chat {
    #archived = false;

    constructor(name = "Chat", members = 0, active = true) {
        this.name = name;       
        this.members = members;   
        this.active = active;       
    }

    get info() {
        return { name: this.name, members: this.members, active: this.active, archived: this.#archived };
    }

    show() { console.log(this.info); }

    delete() { Object.setPrototypeOf(this, null); }

    copy() { return this; }

    #archive() { this.#archived = true; }

    static clone(obj) { return new Chat(obj.name, obj.members, obj.active); }
}
