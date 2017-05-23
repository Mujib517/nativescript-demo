import { Component, ViewChild, ElementRef } from '@angular/core';
import { View } from "ui/core/view";
import { Router } from '@angular/router';

@Component({
    template: `
        
    <ActionBar title="Task Manager" class="action-bar">
    </ActionBar>

    <StackLayout>
            <TabView #tabview dock="bottom">
            <StackLayout *tabItem="{title: 'Tab1'}">
                <Label text="&#xf015;" class="icon"></Label>
            </StackLayout>
            <StackLayout *tabItem="{title: 'Tab2'}" (tap)="onTap()" [nsRouterLink]="['/tasks']">
                <Label text="This is Label in Tab 2"></Label>
            </StackLayout>
            <StackLayout *tabItem="{title: 'Tab3'}">
                <Label text="This is Label in Tab 3"></Label>
            </StackLayout>
            </TabView>
    </StackLayout>  

      <StackLayout>
            <Button dock="bottom" class="btn icon" text="&#xf015; Home"  [nsRouterLink]="['/tasks']"></Button>

            <Button #btn dock="bottom" class="btn icon" text="Animate" (tap)="animate()"></Button>
    </StackLayout>

    `
})

export class HomeComponent {

    @ViewChild("btn") container: ElementRef;


    constructor(private router: Router) { }

    animate() {
        let btn = <View>this.container.nativeElement;

        btn.animate({
            // scale: { x: 2, y: 2 },
            // translate: { x: 100, y: 100 },
            // opacity: 0.5,
            rotate: 360,
            duration: 3000,
            iterations:Number.POSITIVE_INFINITY
        });
    }
}