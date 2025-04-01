import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  quizId!: number;
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  userAnswers: any[] = []; // Stores answer objects with details
  score: number = 0;
  showResults: boolean = false;
  timer: number = 15;
  interval: any;
  selectedAnswer: string | null = null;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizId = +this.route.snapshot.paramMap.get('id')!;
    
    this.quizService.getQuestions(this.quizId).subscribe((data) => {
      this.questions = data;
      this.startTimer();
    });
  }

  startTimer(): void {
    this.selectedAnswer = null;
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.submitAnswer(null); // Auto-submit as incorrect when time runs out
      }
    }, 1000);
  }

  submitAnswer(answer: string | null): void {
    if (this.selectedAnswer) return;

    clearInterval(this.interval);
    this.selectedAnswer = answer;
    const currentQuestion = this.questions[this.currentQuestionIndex];

    const isCorrect = answer === currentQuestion.answer;
    if (isCorrect) this.score++;

    // Store answer details for review
    this.userAnswers.push({
      question: currentQuestion.question,
      selected: answer ? answer : "No Answer",
      correct: currentQuestion.answer,
      isCorrect: isCorrect
    });

    setTimeout(() => this.nextQuestion(), 1000); // Move to next question
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.timer = 15;
      this.startTimer();
    } else {
      this.showResults = true;
    }
  }

  getFeedbackMessage(): string {
    const percentage = (this.score / this.questions.length) * 100;
    if (percentage === 100) return "🌟 Perfect Score! You're a quiz master! 🏆";
    if (percentage >= 80) return "👏 Excellent work! Almost perfect!";
    if (percentage >= 50) return "👍 Good effort! Keep practicing!";
    return "💡 Don't give up! Try again and improve!";
  }
}
