import { NgModule } from '@angular/core';
import { homeRouting } from "./home.routing"
import { HomeComponent } from './components/home.component';
import { CommonModule } from '@angular/common'

@NgModule({
    imports: [CommonModule,homeRouting],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
