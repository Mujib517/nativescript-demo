import { Component } from '@angular/core';

@Component({
    template: `
        
    <ActionBar title="Task Manager" class="action-bar">
    </ActionBar>

    <Button class="btn" text="Go To Tasks" [nsRouterLink]="['/tasks']"></Button>
    `
})

export class HomeComponent { }