import { Component } from '@angular/core';
import { JavaapiServiceService } from '../javaapi-service.service';
import { Route,Router} from '@angular/router';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  
newCourse={
  id:'',
  title:'',
  description:'',
  duration:''
}
constructor(private service: JavaapiServiceService ,private router: Router ){}
createCourse():void {
  this.service.addcourse(this.newCourse)
  .subscribe({
    next:(data) => {
      this.router.navigate(['/course'])
    },
    error:(err)=>{
      console.log(err);
    }
      })
}

}
