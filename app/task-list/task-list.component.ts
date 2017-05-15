import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: "./task-list.html"
})

export class TaskListComponent {

    tasks: any[];

    constructor() {

        this.tasks = [
            {
                "id": 1,
                "name": "Test",
                "category": "test",
                "priority": "Medium",
                "created": "2017-04-28T11:55:26.184Z",
                "isCompleted": false
            },
            {
                "id": 2,
                "name": "Test 2",
                "category": "Tes",
                "priority": "Medium",
                "created": "2017-04-28T11:55:32.205Z",
                "isCompleted": false
            }
            ,
            {
                "id": 3,
                "name": "Recharge",
                "category": "General",
                "priority": "Hight",
                "created": "2017-04-28T11:55:32.205Z",
                "isCompleted": true
            }
        ];
    }
}