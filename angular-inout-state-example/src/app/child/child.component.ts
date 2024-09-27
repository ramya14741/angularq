import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() messageFromParent:string='';
  @Output() MessagefromChild = new EventEmitter<string>();
  sendMessageToParent(){
    this.MessagefromChild.emit('Hello from the child component')
  }
}
