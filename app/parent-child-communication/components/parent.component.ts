import { Component } from '@angular/core'
 
@Component({
    selector:'syn-parent',
    templateUrl:'app/parent-child-communication/views/parent.component.html'
}) 

export class ParentComponent{
    title: string = "Tata Org.";
    sendMessage: string = "This message is sent by Parent";

    receivedMessage: string; 
    receivedChildMessage(message:string){
        this.receivedMessage=message;
    }
}