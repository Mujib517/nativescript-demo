import { Component } from '@angular/core';

@Component({
    template: `
        
    <ActionBar title="Task Manager" class="action-bar">
    </ActionBar>

    <StackLayout>
        <Label text="Home"></Label>

        <Button class="btn" text="Go To Tasks" [nsRouterLink]="['/tasks']"></Button>
    </StackLayout>
    `
})

export class HomeComponent { }