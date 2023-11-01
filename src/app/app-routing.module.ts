import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { Signup2Component } from './signup2/signup2.component';
import { Signin2Component } from './signin2/signin2.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'pages',component:PagesComponent},
  {path:'all-course',component:AllCourseComponent},
  {path:'blog',component:BlogComponent},
  {path:"contact",component:ContactComponent},
  {path:"signup2",component:Signup2Component},
  {path:"signin2",component:Signin2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
