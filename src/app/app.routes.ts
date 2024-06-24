import { RouterModule, Routes } from '@angular/router';
import { DistrictDetailComponent } from './pages/district/district-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [


    {
        path : '',component:HomeComponent
    },
   
    {
        path : 'contact',component:ContactComponent
    },
    
    {
        path: 'district-detail/:id', component: DistrictDetailComponent
    },
    {
        path : 'login',component:LoginComponent
    },
   
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  
    {
        path : '**',component:HomeComponent
    }
   



    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
