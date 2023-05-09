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
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  title = 'Folder';
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