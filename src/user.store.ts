import { Injectable } from "@nestjs/common";

interface User{
    name : string;
    age : number;
    id : number;
}
@Injectable()
export class UserStore{
    private store = new Map<number, User>();

    addUser(user: User){
        this.store.set(user.id, user);
    }

    getUser(id: number){
        return this.store.get(id);
    }
}