import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { Message } from '../../interface/message';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})

export class AlertComponent implements OnInit{

  constructor(private messageService: MessageService){}

  message:Message | null = null;
  closeAletInterval: any;

  ngOnInit(): void {
    this.messageService.messageSubject$.subscribe(msg => {
      this.message = msg;

     this.closeAletInterval = setTimeout(()=>{
        this.closeAlert();
      }, 5000);

    });
  }

  closeAlert(){
    this.messageService.clearMessage();
    clearInterval(this.closeAletInterval)
  }
}
