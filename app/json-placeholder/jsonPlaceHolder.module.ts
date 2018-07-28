import { NgModule } from '@angular/core';
import { JphPostsComponent } from "./components/jph-posts.components";
import { JsonPlaceHolderService } from "./services/json-placeholder.service";
import { CommonModule } from '@angular/common'
import { JsonPlaceHolderRouting } from "./jsonPlaceHolder.routing"

@NgModule({
    imports: [CommonModule, JsonPlaceHolderRouting],
    exports: [JphPostsComponent],
    declarations: [JphPostsComponent],
    providers: [JsonPlaceHolderService],
})
export class JsonPlaceHolderModule { }
