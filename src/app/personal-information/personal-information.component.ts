import { Component } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name','Chelluboina Jyothi Swarup'],
    ['DOB','19/12/2001'],
    ['Work Experience','Software Engineer'],
    ['Education','B.E(2023)'],
    ['Intrests','Cricket, Watching Anime']
  ];

  aboutMe: string[] = [
    'Hi, I am Fresher with 8 months of experience in software industry.',
    'I am working as Full stack Developer in Hyderabad.',
    'Worked as an intern as Software Engineer at NielsenIQ(worked on Angular and Automation testing in selenium).',
    'Delivered all product withing dealines. Alway eager to learn new technologies.'
  ];
}
