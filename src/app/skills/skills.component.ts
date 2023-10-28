import { Component } from '@angular/core';
import { Skill } from 'src/models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name:'Python',
      level: 'Advanced',
      rating: 90
    },
    {
      name:'C',
      level: 'Intermediate',
      rating: 75
    },
    {
      name:'Core Java',
      level: 'Intermediate',
      rating: 70
    },
    {
      name:'HTML CSS TypeScript',
      level: 'Intermediate',
      rating: 70
    },
    {
      name:'Angular',
      level: 'Intermediate',
      rating: 65
    },
    {
      name:'Selenium',
      level: 'Intermediate',
      rating: 60
    }
    
  ]
}
