import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app.routing";
import { SharedModule } from './shared/shared.module';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TaskComponent,
        TaskListComponent,
        TaskDetailComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
