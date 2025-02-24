import { Component } from '@angular/core';

import { AuthService } from '../../service/auth.service';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-adverts',
  imports: [],
  templateUrl: './adverts.component.html',
  styleUrl: './adverts.component.css'
})
export class AdvertsComponent {
  constructor(
    private auth: AuthService,
    private api: ApiService
  ){}
  allAds:any;
  ngOnInit() {
    this.api.getAllAds().subscribe((res) => {
      this.allAds = res;
      this.allAds = this.allAds.allAds;
      console.log(this.allAds);
    })
  }
}
