import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from './../shared/task.service';

@Component({
    moduleId: module.id,
    templateUrl: './task-detail.html',
    styleUrls: ['./task-detail.css']
})

export class TaskDetailComponent implements OnInit {

    user: any;

    constructor(private taskSvc: TaskService, private route: ActivatedRoute) { }

    ngOnInit() {
        var id=this.route.snapshot.params.id;
        this.taskSvc.getById(id)
            .subscribe(
            (response) => this.user = response,
            (err) => console.log(err)
            );
    }
}