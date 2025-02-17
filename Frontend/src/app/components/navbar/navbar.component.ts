import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    public auth: AuthService
  ){}

  isLogged:boolean = false;

  ngOnInit() {
    this.auth.isLoggedIn$.subscribe((res:any) => {
      this.updateNav(res)
    })
  }
  
  updateNav(isLoggedIn:boolean){
    this.isLogged = isLoggedIn
  } 
}
