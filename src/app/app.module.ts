import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { DoneListComponent } from './components/done-list/done-list.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { FilterComponent } from './components/filter/filter.component';
import { StatisticsComponent } from './statistics/statistics.component';
@NgModule({
  declarations: [          //declared components
    AppComponent, HeaderComponent, FooterComponent, WrapperComponent, ToDoListComponent, DoneListComponent, TaskInputComponent, FilterComponent, StatisticsComponent
  ],
  imports: [                //declared requirements
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //the starting component
})
export class AppModule { }
