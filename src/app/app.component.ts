import { Component } from '@angular/core';
import { User } from './user';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <app-user-form (setNumberOfRecordToFetch)="setNumberOfRecordToFetch($event)" (setShowUserList)="setShowUserList($event)"></app-user-form>
    <app-user-list *ngIf="showUserList" [numberOfUsers]="numberOfUsers"></app-user-list>
  </div>
  `,
  styles: []
})
export class AppComponent {
 
  showUserList: boolean = false;
  numberOfUsers: number = 0;


  setNumberOfRecordToFetch(noOfRec:number){
    this.numberOfUsers = noOfRec;
  }
  setShowUserList(showUserList:boolean){
    this.showUserList = showUserList;
  }

}
