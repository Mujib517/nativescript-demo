import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        
    <ActionBar title="Task Manager" class="action-bar">
    </ActionBar>

<Button dock="bottom" class="btn" text="Go To Tasks" [nsRouterLink]="['/tasks']"></Button>

    <StackLayout>
            <TabView #tabview dock="bottom">
            <StackLayout *tabItem="{title: 'Tab1'}">
                <Label text="This is Label in Tab 1"></Label>
            </StackLayout>
            <StackLayout *tabItem="{title: 'Tab2'}" (tap)="onTap()" [nsRouterLink]="['/tasks']">
                <Label text="This is Label in Tab 2"></Label>
            </StackLayout>
            <StackLayout *tabItem="{title: 'Tab3'}">
                <Label text="This is Label in Tab 3"></Label>
            </StackLayout>
            </TabView>

            
    </StackLayout>  


    `
})

export class HomeComponent {

    constructor(private router: Router) {

    }

    onTap() {
        console.log('htting');
        this.router.navigate(['/tasks']);
    }
}