import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectDirective } from '../directives/direct.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    DirectDirective
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  binding: any;
}
