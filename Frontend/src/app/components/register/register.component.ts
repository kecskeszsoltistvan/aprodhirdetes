import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../interface/user';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private message: MessageService,
    private api: ApiService
  ){}

  user:User = {
    id: '',
    name: '',
    email: '',
    password: '',
    confirm: '',
  }

  invalidFields:string[] = [];

  registration(){
    this.api.userRegistration(this.user).subscribe((res:any) => {
      try{
        if (res.status == 201){
          this.message.showMessage(res.message);
          this.user = {
            id: '',
            name: '',
            email: '',
            password: '',
            confirm: '', 
          }
        }
        else{
          this.message.showMessage(res.message);
        }
      }
      catch (err){
        this.message.showMessage(res.message);
      }
      
      
    });
  }

  isInvalid(field:string){
    return this.invalidFields.includes(field);
  }
}
