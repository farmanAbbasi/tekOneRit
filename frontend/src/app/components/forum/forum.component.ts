import { Component, OnInit } from '@angular/core';
import { CardContent } from './forum.model';
import { ForumPostService } from '../../services/forum/forum-post.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  contentarray: CardContent[] = [];
  likeicon = false;
  data: string;
  constructor(private forumpostservice: ForumPostService) { }

  ngOnInit() {
    this.forumpostservice.fetchPost().subscribe(val => this.contentarray.push(val));
    console.log(this.contentarray);
  }

  liked() {
    this.likeicon = !this.likeicon;
    console.log(this.likeicon);
  }

  onSelectButton(i) {
    this.data = i;
  }
  vote() {
    console.log('Increment count.' + this.data);
  }
}
