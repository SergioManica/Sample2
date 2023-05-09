import { Component } from '@angular/core';
import{
  faEye,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-course',
  templateUrl: './login-course.component.html',
  styleUrls: ['./login-course.component.scss']
})
export class LoginCourseComponent {
title = 'login-course';
faeyeIcon = faEye;
faenvelopeIcon = faEnvelope;
}
