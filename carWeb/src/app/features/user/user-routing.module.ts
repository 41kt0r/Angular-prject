import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { isGuestGuard } from 'src/app/core/guards/is-guest-user.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [isGuestGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [isGuestGuard],
    component: RegisterComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
