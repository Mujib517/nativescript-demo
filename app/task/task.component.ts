import { Component, Input } from '@angular/core';
import dialogs = require("ui/dialogs");

@Component({
    selector: 'task-component',
    moduleId: module.id,
    template: `
    <StackLayout>
         <Label [text]="task.name" class="h3 text-center text-primary"></Label>
         <Label [text]="task.priority" class="text-danger"></Label>
         <Label [text]="task.category" class="text-muted text-right"></Label>
         <StackLayout>
            <Label text="Completed" class="pull-right h4"></Label>
            <Switch [checked]="task.isCompleted" class="switch pull-right"></Switch>
         </StackLayout>
    </StackLayout>
    `
})

export class TaskComponent {
    @Input() task;
}
