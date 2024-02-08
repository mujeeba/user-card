import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
})
export class UserFormComponent {

  showUserList = false;
  numberOfUsers = new FormControl(0, Validators.required);


  @Output() setNumberOfRecordToFetch = new EventEmitter<number>();
  @Output() setShowUserList = new EventEmitter<boolean>();

  reset(){
    this.showUserList = false;
    this.numberOfUsers.enable();
    this.setShowUserList.emit(this.showUserList)
  }
  fetch(){
    this.showUserList = true;
    this.numberOfUsers.disable();
    this.setNumberOfRecordToFetch.emit(this.numberOfUsers.value as number)
    this.setShowUserList.emit(this.showUserList)
  }
}
