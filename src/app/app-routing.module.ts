import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCourseComponent } from './views/login-course/login-course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginCourseComponent
  },
  // { path: '', component: CreateCourseComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // {path: 'administrator-course',component:AdministratorCourseComponent},
  // { path: 'footer', component: FolderComponent },
  {
    path: 'footer',
    loadChildren: () => import('./views/folder/folder.module').then(m => m.FolderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
