import { AfterViewInit, Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';
import { gsap, Back, Power1 } from "gsap";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Advert } from '../../interface/advert';
import { Category } from '../../interface/category';
import { AuthService } from '../../service/auth.service';

interface SubCat {
  value: Category;
  viewValue: string;
}

interface MainCat {
  disabled?: boolean;
  name: string;
  cat: SubCat[];
}

@Component({
  selector: 'app-user-ads',
  imports: [MatSelectModule, FormsModule, CommonModule, MatFormFieldModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './user-ads.component.html',
  styleUrl: './user-ads.component.css'
})

export class UserAdsComponent {
  constructor(
    private message: MessageService,
    private auth: AuthService
  ){}
  un:string = "";
  ad:Advert = {
    id: "",
    userID: "",
    date: `${new Date().toLocaleDateString('en-CA')}`,
    title: "",
    description: "",
    price: 0,
    image: null,
    category: Category.COK,
  }

  ngOnInit() {
    this.un = this.auth.loggedUser().name;
  }

  CreateAdvert() {
    this.ad.userID = this.auth.loggedUser().id
    console.log(this.ad)
  }

  onFileSelected(event: any): void {
      this.ad.image = event.target.files[0] ?? null;
  }


  Control = new FormControl('');
  Groups: MainCat[] = [
    {
      name: "Service",
      cat:  [
        {
          value: Category.COK, viewValue: "Cooking"
        },
        {
          value: Category.EDU, viewValue: "Education"
        },
        {
          value: Category.REF, viewValue: "Restore & Clean"
        },
        {
          value: Category.ETC, viewValue: "Other"
        },
      ]
    },
    {
      name: "Job",
      cat:  [
        {
          value: Category.JSC, viewValue: "Apply"
        },
        {
          value: Category.JSJ, viewValue: "Applying"
        },
      ]
    },
    {
      name: "Goods",
      cat:  [
        {
          value: Category.GCL, viewValue: "Clothing"
        },
        {
          value: Category.GHA, viewValue: "Household"
        },
        {
          value: Category.GCO, viewValue: "Collectable"
        },
        {
          value: Category.GGG, viewValue: "Gadgets"
        },
      ]
    },
  ];


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
