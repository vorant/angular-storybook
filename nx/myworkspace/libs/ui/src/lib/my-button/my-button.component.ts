import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myworkspace-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean = false;
}
