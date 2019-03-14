import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ServerManagerService {

    private server = 'http://localhost:56619/api/';

    constructor( ) { }

    request(controller, method, param = '') {
        return this.server +
        controller + '/' +
        method +
        (param !== '' ? ('/' + param) : '');
    }

}



