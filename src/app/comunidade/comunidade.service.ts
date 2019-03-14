import { Injectable } from '@angular/core';
import { PostViewModel } from '../shared/entites/classes';
import { HttpClient } from '@angular/common/http';
import { ServerManagerService } from '../shared/services/server.manager.service';

@Injectable({
    providedIn: 'root'
})
export class ComunidadeService {

    private posts: PostViewModel[] = [];

    constructor(private http: HttpClient, private server: ServerManagerService) { }

    getPosts() {
        return this.http.get(this.server.request('Comunidade', 'Posts'));
    }

    novoPost(post) {
        return this.http.post(this.server.request('Comunidade', 'Post/Adicionar'), post);
    }

    novoComentario(comentario) {
        return this.http.post(this.server.request('Comunidade', 'Post/Comentar'), comentario);
    }

    desliked(post) {
        return this.http.post(this.server.request('Comunidade', 'Post/Deslike'), post);
    }

    liked(post) {
        return this.http.post(this.server.request('Comunidade', 'Post/Like'), post);
    }

}
