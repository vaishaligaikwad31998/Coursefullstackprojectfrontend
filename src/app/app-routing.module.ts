import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { CourselistComponent } from './courselist/courselist.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseeditComponent } from './courseedit/courseedit.component';
import { CoursedeleteComponent } from './coursedelete/coursedelete.component';
const routes: Routes = [

  {
    path:'course',component:CourselistComponent
  },
  {
    path:'addcourse',component:AddCourseComponent
  },
  {
    path:'courses/edit/:id',component:CourseeditComponent
  },
  { path: 'courses/delete/:id', component: CoursedeleteComponent }, 

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
