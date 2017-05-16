import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class TaskService {

    constructor(private http: Http) { }

    get(): Observable<any[]> {
        return this.http.get('https://api.github.com/users')
            .map(response => response.json());
    }

    getById(login): Observable<any> {
        return this.http.get('https://api.github.com/users/' + login)
            .map(response => response.json());
    }
}