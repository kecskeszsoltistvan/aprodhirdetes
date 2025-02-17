import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})

export class LogoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private message: MessageService
  ){}

  ngOnInit(): void {
    this.auth.logout();
    this.message.showMessage('Sikeres kijelentkezés');
    setTimeout(() => this.router.navigateByUrl('/'), 5000)
  }
}