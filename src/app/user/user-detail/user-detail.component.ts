import { Component, Input } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  
})
export class UserDetailComponent {
  
  @Input()
  user!: User;
}
