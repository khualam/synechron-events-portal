import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing'




//Custom Components
import { AppCpmonent } from './app.component';
import { NavBarComponent } from "./navigation/components/nav-bar.component"
import { NavBarFooterComponent } from "./navigation/components/nav-bar-footer.component"


//Custom modules
// import { HomeModule } from './home/home.module';
// import { EventsModule } from './events/events.module';
// import { JsonPlaceHolderModule } from './json-placeholder/jsonPlaceHolder.module';
// import { ParentChildModule } from './parent-child-communication/parentChild.module';



@NgModule({
    imports:[BrowserModule, routing],
    declarations:[AppCpmonent,NavBarFooterComponent,  NavBarComponent],
    exports:[],
    providers:[],
    bootstrap:[AppCpmonent]
})
export class AppModule {
    
}