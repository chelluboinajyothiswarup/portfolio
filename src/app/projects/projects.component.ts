import { Component } from '@angular/core';
import { Project } from 'src/models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'SMART TRAFFIC MONITORING SYSTEM',
      technologies: 'Python, Deep-Learning, YOLO algorithm,OpenCV',
      description: ['Developed a comprehensive vehicle detection and counting system for traffic videos, leveraging Python, Deep Learning, YOLO algorithm, Deep-SORT, and RoboFlow for accurate and efficient analysis.This model can recognise 10 different kinds of automobiles.',
      '90% of the time, vehicles were correctly identified in daylight and in night.'],
      link: 'https://github.com/chelluboinajyothiswarup/akhil-yolov8'
    },
    {
      title: 'PREDICTION OF RAINFALL',
      technologies: 'Python, Machine Learning, machine-learning algorithms',
      description: ['I have meticulously designed and implemented an ensemble machine learning model that combines multiple algorithms and data sources to make accurate predictions of rainfall patterns..','I have integrated it with a Flask-based website.','I worked on Random Forest,XGBoost,CatBoost algorithms to build and ensembled model.'],
      link: 'https://github.com/chelluboinajyothiswarup/PREDICTION-OF-RAINFALL'
    },
    {
      title: 'SALES PREDICTION',
      technologies: 'Python, Machine Learning',
      description: ['Developed a model to predict the Sales using Advertisement dataset which has attributes like T.V, Radio, Paper using Machine Learning and libraries like NumPy, Matplotlib, Pandas. Python, Decision Tree'],
      link: 'https://github.com/chelluboinajyothiswarup/PREDICTION-OF-SALES'
    },
    {
      title: 'LOAN RISK PREDICTION',
      technologies: 'Python, Machine Learning, machine-learning algorithms',
      description: ['Created a model by machine learning with an accuracy of 85% that takes into account factors including  principal, due dates, terms, and loan status to predict l defaulters using a variety of techniques.','the model was put into action, and the effectiveness of the dataset was evaluated.','Reduced false negatives by 30%, improving the model ability to identify potential defaulters accurately'],
      link: 'https://github.com/chelluboinajyothiswarup/Loan-Risk-Prediction'
    }
  ]
}
