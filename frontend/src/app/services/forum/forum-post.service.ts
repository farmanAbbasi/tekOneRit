import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CardContent } from '../../components/forum/forum.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ForumPostService {

  constructor(private httpclient: HttpClient) { }

  fetchPost(): Observable<CardContent> {
    return this.httpclient.get<CardContent>('http://localhost:3000/api/posts/');
  }

}
