import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CommonModule],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {

}
