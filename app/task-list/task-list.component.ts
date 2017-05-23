import { Component } from '@angular/core';

import { TaskService } from './../shared/task.service';

@Component({
    moduleId: module.id,
    templateUrl: "./task-list.html"
})

export class TaskListComponent {

    tasks: any[];
    listLoaded: boolean = false;
    isLoading: boolean = false;

    constructor(private taskSvc: TaskService) { }

    ngOnInit() {
        this.isLoading = true;
        this.taskSvc.get()
            .subscribe(
            (response) => {
                this.tasks = response;
                this.listLoaded = true;
                this.isLoading = false;
            },
            (err) => console.log(err)
            );
    }
}