import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateCourseComponent } from './views/create-course/createcourse.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdministratorCourseComponent } from './views/administrator-course/administrator-course.component';
import { LoginCourseComponent } from './views/login-course/login-course.component';
import { FolderComponent } from './views/folder/folder.component';
import { QuizSelectionComponent } from './views/quiz-selection/quiz-selection.component';
import { SlidesComponent } from './views/slides/slides.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateCourseComponent,
    DashboardComponent,
    AdministratorCourseComponent,
    LoginCourseComponent,
    FolderComponent,
    QuizSelectionComponent,
    SlidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
