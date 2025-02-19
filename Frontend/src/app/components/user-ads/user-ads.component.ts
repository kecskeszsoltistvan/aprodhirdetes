import { AfterViewInit, Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';
import { gsap, Back, Power1 } from "gsap";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Advert } from '../../interface/advert';
import { Category } from '../../interface/category';

@Component({
  selector: 'app-user-ads',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './user-ads.component.html',
  styleUrl: './user-ads.component.css'
})
export class UserAdsComponent {
  constructor(
    private message: MessageService,
  ){}
  ad:Advert = {
    id: "",
    userID: "",
    date: Date.now(),
    title: "",
    description: "",
    price: 0,
    image: "",
    category: Category.COK,
  }

  ngAfterViewInit(): void {
    const tl = gsap.timeline();
    tl.from("#title", {
      x: -300,
      duration: 1.3,
      opacity: 0,
      ease: Back.easeOut
    })
    tl.from("#TopPanel", {
      y: 100,
      duration: 1,
      delay: -0.2,
      opacity: 0,
      ease: Power1.easeOut
    })
    tl.from("#MyCurrentAdverts", {
      x: -100,
      duration: 1,
      delay: -0.6,
      opacity: 0,
      ease: Power1.easeOut
    })
    tl.from("#CreateAdvert", {
      x: 100,
      duration: 1,
      delay: -0.8,
      opacity: 0,
      ease: Power1.easeOut
    })
    tl.from("#Statistics", {
      y: 100,
      duration: 1,
      delay: -0.8,
      opacity: 0,
      ease: Power1.easeOut
    })
    tl.from("#Etc", {
      y: 100,
      duration: 1,
      delay: -0.8,
      opacity: 0,
      ease: Power1.easeOut
    })
  }

}
