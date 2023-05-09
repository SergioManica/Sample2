import { Component } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
}
