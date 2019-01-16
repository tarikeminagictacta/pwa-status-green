import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Task } from '../../services/task.service';

const menuShown = trigger(
  'menuShown', [
    state('*', style({
      transform: 'translateX(0)'
    })),
    state('shown', style({
      transform: 'translateX(-30%)'
    })),
    transition('* <=> shown', animate('200ms 0s ease-in-out'))
  ]
);

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  animations: [menuShown]
})
export class TaskCardComponent implements OnInit {
  @Input() task: Partial<Task>;
  menuState: string;

  constructor() { }

  ngOnInit() {
  }

  onSwipeLeft() {
    this.menuState = 'shown';
  }

  onSwipeRight() {
    this.menuState = null;
  }

  onPressUp() {
    this.task.pressed = true;
  }

}
