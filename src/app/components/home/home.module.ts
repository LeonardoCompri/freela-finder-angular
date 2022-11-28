import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { ProjectStatusPipe } from 'src/app/pipes/project-status.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        HomeComponent,
        ProjectStatusPipe
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FontAwesomeModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}