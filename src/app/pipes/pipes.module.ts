import { ProjectStatusPipe } from './project-status.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ProjectStatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectStatusPipe
  ],
  providers: [
    ProjectStatusPipe
  ]
})
export class PipesModule { }
