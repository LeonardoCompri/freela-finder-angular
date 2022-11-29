import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        PipesModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}