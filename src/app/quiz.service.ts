import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getQuizzes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/quizzes`);
  }

  getQuestions(quizId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/questions?quizId=${quizId}`);
  }
}
