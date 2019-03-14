import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {}

    login(email: string): void {}

    signup(email: string): void {}

    logout(): void {}

    hasLoggedIn() { return true; }
}
