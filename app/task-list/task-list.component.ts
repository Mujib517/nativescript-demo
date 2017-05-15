import { Component } from '@angular/core';

import { TaskService } from './../shared/task.service';

@Component({
    moduleId: module.id,
    templateUrl: "./task-list.html"
})

export class TaskListComponent {

    tasks: any[];

    constructor(private taskSvc: TaskService) {
        
        taskSvc.get().subscribe(
            (response) => this.tasks = response,
            (err) => console.log(err)
        );
    }
}