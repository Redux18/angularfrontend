import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:CoursesComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
