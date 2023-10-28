import { Component } from '@angular/core';
import { Education } from 'src/models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "Sathyabama University",
      course:'CSE',
      duration: '2019-2023',
      score: '9.2/10'
    },
    {
      institute: "Sasi junior college",
      course:'MPC, BIEAP',
      duration: '2018-2019',
      score: '10/10'
    },
    {
      institute: "Swarnandhra International School",
      course:'Marticulation, CBSE',
      duration: '2019-2023',
      score: '10/10'
    }
  ]
}
