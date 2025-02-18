import { AfterViewInit, Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';
import { gsap, Back, Power1 } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private message: MessageService,
  ){}
  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(".anim1", { 
      y: 100,
      duration: 1,
      delay: 0.5, 
      opacity: 0, 
      ease: Back.easeOut, 
    });

    tl.from(".anim2", { 
      y: 100, 
      duration: 1, 
      delay: -0.5, 
      opacity: 0, 
      ease: Back.easeOut
    });

    tl.from(".anim3", { 
      y: 100, 
      duration: 1, 
      opacity: 0, 
      ease: Power1.easeOut,
      scrollTrigger: {
        scrub: 1,
        pin: true,
        start: "10px",
        end: "110px",
      }
    });

    tl.from(".anim4", { 
      y: 100, 
      duration: 1, 
      opacity: 0, 
      ease: Power1.easeOut,
      scrollTrigger: {
        scrub: 1,
        pin: true,
        start: "110px",
        end: "210px",
      }
    });

    tl.from(".anim5", { 
      y: 100, 
      duration: 1, 
      opacity: 0, 
      ease: Power1.easeOut,
      scrollTrigger: {
        scrub: 1,
        pin: true,
        start: "210px",
        end: "310px",
      }
    });

    tl.fromTo("#share", {opacity: 0}, {
      y: -300,
      ease: Power1.easeOut,
      opacity: 1,
      scrollTrigger: {
        scrub: 2,
        pin: true,
        start: "250px",
        end: "300px",
      }
    });
  }

  copyShare() {
    navigator.clipboard.writeText("http://localhost:4200/");
    this.message.showMessage("Link copied!")
  }

  ngOnInit() {
    console.log("Home loaded.")
  }
}
