import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
  @Input()
  post:IPost;
  postId:number;

  constructor() {
  }

  ngOnInit(): void {
  }

  getPost():void{
    this.postId=this.post.id
  }

  getComment():void {
    this.postId=this.post.id
  }
}
