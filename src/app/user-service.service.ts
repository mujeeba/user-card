import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, RawUser, UserDetails } from './user';
import { forkJoin, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = "https://randomuser.me/api"

  constructor(private http: HttpClient) { }

  getRandomUsers(numberUsers: number) {
    let userRequest = this.http.get<UserDetails>(this.url).pipe(
      map(result => { return this.transformData(result.results[0]); })
    );
    let allUserReqest : Observable<User>[] = new Array(numberUsers).fill(userRequest);
    return forkJoin(allUserReqest);
  }

  private transformData(user: RawUser) {

    let tranformedUser: User = {
      id:user.id.value,
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
