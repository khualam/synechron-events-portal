import { NgModule } from '@angular/core';


import { ParentComponent } from "./components/parent.component";
import { ChildComponent } from "./components/child.component";
import { CommonModule } from '@angular/common'
import { parentChildRouting } from "./parentChild.routing"

@NgModule({
    imports: [CommonModule, parentChildRouting],
    exports: [ParentComponent],
    declarations: [ParentComponent, ChildComponent],
    providers: [],
})
export class ParentChildModule { }
