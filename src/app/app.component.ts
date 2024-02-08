import { Component } from '@angular/core';
import { User } from './user';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-card *ngFor="let user of users | async;" class="user-card">
    <mat-card-header>
      <mat-card-title-group>
        <mat-card-title>{{user.name}}</mat-card-title>
        </mat-card-title-group>
        </mat-card-header>
        <mat-card-content class="user-content">
        <mat-grid-list cols="2" rowHeight="2:1">
        <mat-grid-tile><div class="user-details">
    <div>{{user.gender}}</div>
    <div>{{user.phone}}</div>
    <div>{{user.email}}</div>
    <div>{{user.address.street}}</div>
    <div>{{user.address.secoundary}}</div>
  </div></mat-grid-tile>
  <mat-grid-tile> <img mat-card-md-image src="{{user.picture}}"  alt=""></mat-grid-tile>
</mat-grid-list>
    </mat-card-content>
  </mat-card>
  `,
  styles: []
})
export class AppComponent {
  title = 'user-cards';
  users = this.userServiceService.getRandomUsers();
  constructor(private userServiceService: UserServiceService) { }

  // ngOnInit() {
  //   this.userServiceService.getRandomUsers().subscribe((users)=>this.users=users)
  // }

}
