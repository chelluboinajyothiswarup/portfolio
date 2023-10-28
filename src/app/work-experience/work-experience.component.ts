import { Component } from '@angular/core';
import { WorkExperience } from 'src/models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExp: WorkExperience[] = [
    {
      role: 'Full Stack Developer',
    company: 'ESN technologies',
    duration: 'July 2023 - present',
    description: ['Working on Angular, C sharp, powerBI and SQL Server']
    },
    {
      role: 'Software Engineer Intern',
    company: 'NielsenIQ',
    duration: 'Feb 2023 - May 2023',
    description: ['Developed Angular components and conducted unit testing with Jasmine.','Worked in selenium automation testing and manual testing.']
    },
    {
      role: 'Student Intern',
    company: 'HCL Technologies',
    duration: 'Jan 2022 - May 2022',
    // description: ['Developed a machine learning model with 95% accuracy forrainfall prediction','integrated it with a Flask-based website, providing users with accurate forecasts based on temperature, pressure, humidity, and wind gust directions']
    description:['Developed a machine learning model for prediction of rainfall.','integrated it with a Flask-based website']
    }
  ]
}
