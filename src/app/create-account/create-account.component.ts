import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  

  signupForm :FormGroup;

  constructor(
    private fb:FormBuilder,
    private usersevice:QuizService,
    private http:HttpClient,private router:Router,

    ){
      this.signupForm = this.fb.group({
        Firstname: new FormControl('',[Validators.required]),
        Surname: new FormControl('',[Validators.required] ),
        Mobileoremail: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required, Validators.minLength(6)]),
        
             
       })
    }
   

    get userefirstname(){
      return this.signupForm.get('Firstname');
    }
    get usersurname(){
      return this.signupForm.get('Surname')
    }
    get mobileoremil(){
      return this.signupForm.get('Mobileoremail');
    }
     get Newpasword(){
       return this.signupForm.get('password');
   }
   

    ngOnInit(): void {
      
     }

     signUp() {
      this.http.post<any>("http://localhost:3000/signupdata", this.signupForm.value).subscribe(
        res => {
          alert("Signup Successful");
          localStorage.setItem('username', this.signupForm.value.Firstname); // Store the user's first name
          this.signupForm.reset();
          this.router.navigate(['/navbar']); // Navigate to the navbar page
        },
        err => {
          alert("Something went wrong");
        }
      );
    }
    

   


}
