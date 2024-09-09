import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavaapiServiceService {
  constructor(private http: HttpClient) { }
  

  getData(): Observable<any> {
    return this.http.get("http://localhost:8080/api/getAllcourses");
  }

  addcourse(course: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/addcourse", course);
  }

  updateCourse(course: any): Observable<any> {
    return this.http.put(`http://localhost:8080/api/updatecourse/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/deletecourse/${id}`);
  }

  getCourse(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/getcoursebyid/${id}`);
  }

}