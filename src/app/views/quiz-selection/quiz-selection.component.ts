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
  faFileLines,
  faPhotoFilm,
  faVideo,
  faFileArrowDown,
  faSpellCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.scss']
})
export class QuizSelectionComponent {
  title = 'quiz-selection';
  faUserGraduateIcon = faUserGraduate
  faBrainIcon = faBrain
  faBookOpenReaderIcon = faBookOpenReader
  faMagnifyingGlassIcon = faMagnifyingGlass
  faRightFromBracketIncon = faRightFromBracket
  faCircleUserIcon = faCircleUser
  faSpinnerIcon = faSpinner
  faClockIcon = faClock
  faCircleChevronRightIcon = faCircleChevronRight
  faFileLinesIcon = faFileLines
  faPhotoFilmIcon = faPhotoFilm
  faVideoIcon = faVideo
  faFileArrowDownIcon = faFileArrowDown
  faSpellCheck = faSpellCheck
  indexSelectedResponse:Number = -1
  onClickResponse(indexResponse:Number) {
    this.indexSelectedResponse = indexResponse
  }

}
 
