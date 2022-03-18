import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ToDoListComponent } from './components/wrapper/subComponents/to-do-list/to-do-list.component';
import { DoneListComponent } from './components/wrapper/subComponents/done-list/done-list.component';
import { TaskInputComponent } from './components/wrapper/subComponents/task-input/task-input.component';
import { FilterComponent } from './components/wrapper/subComponents/filter/filter.component';
import { StatisticsComponent } from './components/wrapper/subComponents/statistics/statistics.component';
import { TaskListElementComponent } from './components/wrapper/subComponents/task-list-element/task-list-element.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    //components
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    ToDoListComponent,
    DoneListComponent,
    TaskInputComponent,
    FilterComponent,
    StatisticsComponent,
    TaskListElementComponent,
    WelcomeComponent,
  ],
  imports: [
    //requirements
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent], //the starting component
})
export class AppModule {}
