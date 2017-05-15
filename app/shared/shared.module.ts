import { NgModule } from '@angular/core';
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { TaskService } from './task.service';

@NgModule({
    imports: [NativeScriptHttpModule],
    providers: [TaskService]
})

export class SharedModule { }