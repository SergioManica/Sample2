import { Component, OnInit } from '@angular/core';
import {
  faUserGraduate,
  faBrain,
  faBookOpenReader,
  faMagnifyingGlass,
  faRightFromBracket,
  faCircleUser,
  faSpinner,
  faClock,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor() { }
  
  title = 'dashboard';
  faUserGraduateIcon = faUserGraduate
  faBrainIcon = faBrain
  faBookOpenReaderIcon = faBookOpenReader
  faMagnifyingGlassIcon = faMagnifyingGlass
  faRightFromBracketIncon = faRightFromBracket
  faCircleUserIcon = faCircleUser
  faSpinnerIcon = faSpinner
  faClockIcon = faClock
  faCircleChevronRightIcon = faCircleChevronRight
  ngOnInit(): void {
    
  } 
  onClickGoToCourses(){
    console.log('clicked')
  }
}
