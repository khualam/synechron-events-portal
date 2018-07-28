import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'syn-child',
    templateUrl: 'app/parent-child-communication/views/child.component.html'
})

export class ChildComponent{
 title: string = "Tata Motors Component";
@Input() receivedMessage: string; 

@Output()sendChildMessage : EventEmitter<string> = new EventEmitter<string>();

raiseEvent(){
    this.sendChildMessage.emit('This message is sent by child component');
}
}