import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentMessage:string ="hello from teh parent component"
  MessagefromChild:string='';
  onMessageReceived(message:string){
    this.MessagefromChild= message;
  }

}
