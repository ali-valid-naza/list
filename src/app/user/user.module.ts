import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';
import { SharedModule } from '../shared/shared.module';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', userReducer)
  ]
})
export class UserModule { }
