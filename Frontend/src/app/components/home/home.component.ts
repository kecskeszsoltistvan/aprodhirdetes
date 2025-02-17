import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap, Back } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".anim1", { 
      y: 100,
      duration: 1,
      delay: 0.5, 
      opacity: 0, 
      ease: Back.easeOut, 
      /*
      scrollTrigger: {
        trigger: ".anim1",
        start: "top 260px",
        markers: true
      }
      */
    });
    gsap.from(".anim2", { 
      y: 100, 
      duration: 1, 
      delay: 1, 
      opacity: 0, 
      ease: Back.easeOut
    
    });
  }
  ngOnInit() {
    console.log("Home loaded.")
  }
}
