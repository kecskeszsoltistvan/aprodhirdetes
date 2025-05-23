import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { UserAdsComponent } from './components/user-ads/user-ads.component';
import { UserAuthGuard } from './guard/logged.guard';

export const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'adverts', component: AdvertsComponent
  },
  {
    path: 'userPanel', component: UserAdsComponent, canActivate: [UserAuthGuard]
  },
  {
    path: '**', component: HomeComponent
  },
  
];
