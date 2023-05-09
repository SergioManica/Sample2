import { Component } from '@angular/core';
import {
  faBookOpenReader,
  faMagnifyingGlass,
  faRightFromBracket,
  faCircleUser,
  faCircleChevronRight,
  faCircleChevronDown,
  faUserGear,
  faUserPen,
  faBuilding,
  faList,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-administrator-course',
  templateUrl: './administrator-course.component.html',
  styleUrls: ['./administrator-course.component.scss']
})
export class AdministratorCourseComponent {
  title = 'administrator-course';
  faBookOpenReaderIcon = faBookOpenReader
  faMagnifyingGlassIcon = faMagnifyingGlass
  faRightFromBracketIncon = faRightFromBracket
  faCircleUserIcon = faCircleUser
  facirclechevrondownIcon= faCircleChevronDown
  fausergearIcon=faUserGear
  faUserPenIcon=faUserPen
  faBuildingIcon=faBuilding
  faListIcon=faList
  faFileContractIcon=faFileContract
  faCircleChevronRightIcon=faCircleChevronRight
}
