import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseServe } from "./course.serve";

@Component({
    templateUrl:"./course-list-component.html"
})

export class CourseListComponent implements OnInit {

    _courses: Course[]=[];

    _filteredCourse:Course[]=[];

    _filterBy!:string;


    constructor(private courseService: CourseServe){}

    ngOnInit():void{
        this._courses = this.courseService.retrieveALL();
        this._filteredCourse = this._courses;
    }

    set filter(value:string){
        this._filterBy = value;

        this._filteredCourse = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);
    }

    get filter(){
        return this._filterBy;
    }

}