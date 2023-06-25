import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";

import {IUser} from "../../interfaces";
import {UserService} from "../user.service";

export const userDetailsResolver: ResolveFn<IUser> = (route, state) => {
  const userService = inject(UserService);
  const {id} = route.params;
  return userService.getById(id)
};
