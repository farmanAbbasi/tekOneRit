import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable()); // {1}
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();



    get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
    }
    private tokenAvailable(): boolean {
        return !!localStorage.getItem('currentUser');
    }
    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string) {

        if (username === 'demo' && password === 'demo') {
            return new Observable((observer) => {
                this.loggedIn.next(true);
                localStorage.setItem('currentUser', 'Demo User');
                this.getLoggedInName.emit('Demo User');
                observer.next('Demo User');
                observer.complete();
            });
        } else {
            return this.http.post<any>('http://' + window.location.hostname + ':3000/api/login', { username: username, password: password })
                .map(response => {
                    if (response && response.id_token) {
                        this.loggedIn.next(true);
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(response));
                        this.getLoggedInName.emit(response.first_name + ' ' + response.last_name);
                    }
                    return response;
                });
        }
    }

    logout() {
        // remove user from local storage to log user out
        this.loggedIn.next(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }
}
