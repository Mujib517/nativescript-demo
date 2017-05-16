import { Component, Input } from '@angular/core';
import dialogs = require("ui/dialogs");

@Component({
    selector: 'task-component',
    moduleId: module.id,
    template: `
    <StackLayout orientation="horizontal" [nsRouterLink]="['/tasks/',task.login]">
         <Image class="img img-rounded" stretch="aspectFit" [src]="task.avatar_url"></Image>
         <Label [text]="task.login" class="text-center"></Label>
    </StackLayout>
    `
})

export class TaskComponent {
    @Input() task;
}
