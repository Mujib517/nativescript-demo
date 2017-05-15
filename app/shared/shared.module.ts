import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { TaskService } from './task.service';

@NgModule({
    imports: [HttpModule],
    providers: [TaskService]
})

export class SharedModule { }