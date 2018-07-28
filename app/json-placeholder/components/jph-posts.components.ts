import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { JsonPlaceHolderService } from "../services/json-placeholder.service";

@Component({
    selector: 'jph-post',
    templateUrl: 'app/json-placeholder/views/jph-posts.component.html'
})

export class JphPostsComponent implements OnInit {
    constructor(private _jsonPlaceHoplderService: JsonPlaceHolderService) {
        
    }
    title:string=""
    posts:Post[];
    displayAllPosts(): void{
        this._jsonPlaceHoplderService.getAllPost().subscribe(
            data=>this.posts=data,
            err=>console.log(err),
            ()=>console.log('Service call complted')
        )
    }

    ngOnInit() { 
        this.displayAllPosts();
    }
}