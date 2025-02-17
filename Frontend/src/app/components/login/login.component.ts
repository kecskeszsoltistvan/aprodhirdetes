import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../interface/user';
import { ApiService } from '../../service/api.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private message: MessageService,
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ){}
  
  user:User = {
    id: '',
    name: '',
    email: '',
    password: '',
    confirm: '',
  }

  invalidFields:string[] = [];

  login(){
    this.api.login(this.user).subscribe((res:any) => {
      try{
        if (res.success){
          this.user = {
            id: '',
            name: '',
            email: '',
            password: '',
            confirm: '', 
          }
          this.auth.login(res.token);
          this.router.navigateByUrl("/");
        }
      }
      catch (err){
        console.error("Valami gáz van")
      }
      finally {
        this.message.showMessage(res.message);
      }
      
    });
  }

  isInvalid(field:string){
    return this.invalidFields.includes(field);
  }
}
