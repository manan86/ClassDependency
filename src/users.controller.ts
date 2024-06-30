import {Controller, Get, Inject} from '@nestjs/common';
import {UserStore} from './user.store'

@Controller('/users')
export class Userscontroller{
    constructor(@Inject(UserStore) /* We can use either @Inject syntax or private store Syntax */
    private store: UserStore){
        console.log(this.store);
    }
}
