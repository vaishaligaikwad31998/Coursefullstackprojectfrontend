import { Component, OnInit } from '@angular/core';
import { JavaapiServiceService } from '../javaapi-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courseedit',
  templateUrl: './courseedit.component.html',
  styleUrls: ['./courseedit.component.css']
})
export class CourseeditComponent implements OnInit {
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
      console.log(id);
    });
  }

  getCourse(id: number): void {
    this.service.getCourse(id).subscribe((data) => {
      this.course = data;
    });
  }

  updateCourse(): void {
    this.service.updateCourse(this.course).subscribe({
      next: (data) => {
        this.router.navigate(["/courses"])
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  
  }
