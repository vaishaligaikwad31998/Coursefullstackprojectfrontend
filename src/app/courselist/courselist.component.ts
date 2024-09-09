import { Component, OnInit } from '@angular/core';
import { JavaapiServiceService } from '../javaapi-service.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  info: any;

  constructor(private service: JavaapiServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.info = data;
      console.log(this.info);
    });
  }
}