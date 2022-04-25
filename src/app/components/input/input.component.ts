import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output()
  OnChangeEvent = new EventEmitter<string>();

  @Input()
  placeholder: string = '';

  @Input()
  disabled: boolean = false;

  value: any = '';

  constructor() {}

  ngOnInit(): void {}

  onChangeHandler = (event: any) => {
    this.OnChangeEvent.emit(this.value);
  };
}
