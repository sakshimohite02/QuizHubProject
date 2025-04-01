import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  loginForm :FormGroup;


  constructor(private fb:FormBuilder,
    private http:HttpClient,private router:Router){
    this.loginForm = this.fb.group({
      Mobileoremail: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
           })
  }

  get mobileoremil(){
    return this.loginForm.get('Mobileoremail');
  }
  get userpassword(){
       return this.loginForm.get('password');
     }

  ngOnInit(): void {
  }

 

  login() {
    this.http.get<any>("http://localhost:3000/signupdata").subscribe(res => {
      const user = res.find((a: any) => {
        return a.Mobileoremail === this.loginForm.value.Mobileoremail && a.password === this.loginForm.value.password;
      });
  
      if (user) {
        alert("Login Success");
        localStorage.setItem('username', user.Firstname); // Store the user's name
        this.loginForm.reset();
        this.router.navigate(['/navbar']);
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  }
  

}
