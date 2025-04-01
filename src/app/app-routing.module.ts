import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { AboutComponent } from './about/about.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { LoginComponent } from './login/login.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateAccountComponent },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: '', component: HomePageComponent }, // Default child route
      { path: 'home', component: HomePageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'quizzes', component: QuizzesComponent },
  { path: 'quiz/:id', component: QuizPageComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
