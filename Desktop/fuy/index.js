import { GroupChat } from "./GroupChat.js";

[ 
    new GroupChat("Study", 5, true, true),
    new GroupChat("Family", 10, true, false)
].forEach(chat => chat.show());
