import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule } from '@angular/forms'; 
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    BlogSectionComponent,
    FooterComponent,
    AboutComponent,
    QuizzesComponent,
    LoginComponent,
    ResourceDetailComponent,
    QuizPageComponent,
    MainPageComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
