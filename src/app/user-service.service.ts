import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranformedUser, User, UserDetails } from './user';
import { forkJoin, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = "https://randomuser.me/api"
  constructor(private http: HttpClient) { }

  getRandomUsers() {
    let userRequest = this.http.get<UserDetails>(this.url).pipe(
      map(result => { return this.transformData(result.results[0]); })
    );;
    return forkJoin([userRequest, userRequest, userRequest, userRequest]);
  }

  private transformData(user: User) {

    let tranformedUser: TranformedUser = {
      name: user.name.title.concat(" ", user.name.last, " ", user.name.first),
      email: user.email,
      gender: user.gender,
      phone: user.phone,
      picture: user.picture.medium,
      address: {
        street: user.location.street.number + " " + user.location.street.name,
        secoundary: user.location.city.concat(", ", user.location.state, ", ", user.location.country)
      }
    }
    return tranformedUser
  }

}
