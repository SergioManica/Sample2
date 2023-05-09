import { Component } from '@angular/core';
import{
  faCircleUser,
  faCirclePlus,
  faBook,
  faChalkboardUser,
  faCircleChevronRight,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-createcourse',
  templateUrl:'./createcourse.component.html',
  styleUrls: ['./createcourse.component.scss']
})
export class CreateCourseComponent {
  categories: string[] = [
    'Idiomas', 'Administración', 'Ciencias', 'Salud', 'Negocios',
    'Idiomas', 'Administración', 'Ciencias', 'Salud', 'Negocios'
  ]
  createCourseOptions: string[] = [
    'En base a título',
    'En base a estructura',
    'En base a diseño instruccional',
    'Subir archivo docx',
    'Crear curso vació'
  ]
  faCircleUserIcon = faCircleUser;
  faCirclePlusIcon = faCirclePlus;
  faBookIcon = faBook;
  faChalkBoardIcon = faChalkboardUser;
  faCircleChevronRightIcon = faCircleChevronRight;
  faRightFromBracketIncon = faRightFromBracket;
}