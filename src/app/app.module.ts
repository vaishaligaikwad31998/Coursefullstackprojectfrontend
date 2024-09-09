import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { CourselistComponent } from './courselist/courselist.component'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import { Router, RouterModule } from '@angular/router';
import { CourseeditComponent } from './courseedit/courseedit.component';
import { CoursedeleteComponent } from './coursedelete/coursedelete.component';


@NgModule({
  declarations: [
    AppComponent,
    CourselistComponent,
    AddCourseComponent,
    CourseeditComponent,
    CoursedeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
