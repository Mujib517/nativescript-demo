import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskService {

    constructor(private http: Http) { }

    get(): Observable<any[]> {
        return this.http.get('http://localhost:3000/tasks')
            .map(response => response.json());
    }
}