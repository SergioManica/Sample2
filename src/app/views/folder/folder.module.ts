import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from '../create-course/createcourse.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdministratorCourseComponent } from '../administrator-course/administrator-course.component';
import { LoginCourseComponent } from '../login-course/login-course.component';
import { FolderComponent } from './folder.component';
import { QuizSelectionComponent } from '../quiz-selection/quiz-selection.component';
import { SlidesComponent } from '../slides/slides.component';


const routes: Routes = [
  {
    path: '',
    component: FolderComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'administrator-course', component: AdministratorCourseComponent },
      { path:'create-course', component: CreateCourseComponent},
      { path:'quiz-selection',component:QuizSelectionComponent},
      { path:'slides',component:SlidesComponent},
      
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class FolderModule { }