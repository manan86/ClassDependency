import { Module } from '@nestjs/common';
import {Userscontroller} from './users.controller';
import {UserStore} from './user.store';


@Module({
  controllers: [Userscontroller],
  providers: [{provide :UserStore, useClass : UserStore}],
})
export class AppModule {}
