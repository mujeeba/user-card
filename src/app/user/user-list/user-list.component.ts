import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit {

  @Input()
  numberOfUsers!: number;

  // @Output() resetSearch = new EventEmitter<boolean>();

  userFetchSubscriptions!: Subscription;
  users: User[] = [];
  isLoading: boolean = false;

  constructor(private userServiceService: UserServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userFetchSubscriptions = this.userServiceService.getRandomUsers(this.numberOfUsers).subscribe((users) => {
      this.users = users;
      this.isLoading = false;
    });
  }

  userTrackBy(index: number, user: User) {
    return user.id;
  }
}
