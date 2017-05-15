import { Component, Input } from '@angular/core';

@Component({
    selector: 'task-component',
    moduleId: module.id,
    template: `
    <StackLayout>
         <Label [text]="task.id" class="list-group-item"></Label>
         <Label [text]="task.name" class="list-group-item"></Label>
         <Label [text]="task.priority" class="list-group-item"></Label>
    </StackLayout>
    `
})

export class TaskComponent {
    @Input() task;
}
