import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.css'],
})
export class CloseButtonComponent implements OnInit {
  @Output()
  ClickedEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleclicked = () => {
    this.ClickedEvent.emit();
  };
}
