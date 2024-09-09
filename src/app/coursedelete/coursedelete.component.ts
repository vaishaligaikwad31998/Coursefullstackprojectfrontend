import { Component, OnInit } from '@angular/core';
import { JavaapiServiceService } from '../javaapi-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coursedelete',
  templateUrl: './coursedelete.component.html',
  styleUrls: ['./coursedelete.component.css']
})
export class CoursedeleteComponent implements OnInit {
  course = {
    id: 0,
    title: '',
    description: '',
    duration:''
  };

  constructor(
    private service: JavaapiServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      var id = Number(paramMap.get('id'));
      this.getCourse(id);
    });
  }

  getCourse(id: number): void {
    this.service.getCourse(id).subscribe((data) => {
      this.course = data;
    });
  }

  deleteCourse(id: number): void {
    this.service.deleteCourse(id).subscribe({
      next: () => {
        // Navigate back to the course list after deletion
        this.router.navigate(["/course"]);
        console.log('Course deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting course:', err);
      }
    });
  
  }
  cancel(): void {
    // Assuming you want to navigate back to the courses list without deleting
    this.router.navigate(["/course"]);
  }
}