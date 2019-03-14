import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerManagerService } from './server.manager.service';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: any;

  constructor(private http: HttpClient, private server: ServerManagerService) {}

  getPosts() {
    this.posts = this.http.get(this.server.request('Comunidade', 'Posts'));
  }
}
