import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes: any[] = [];
  searchText: string = '';
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe((data) => {
      this.quizzes = data;
    });
  }

  filteredQuizzes() {
    return this.quizzes.filter(quiz =>
      quiz.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
