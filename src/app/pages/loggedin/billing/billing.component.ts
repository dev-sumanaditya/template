import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  isCardSection: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  setACH = () => {
    this.isCardSection = false;
  };

  setCard = () => {
    this.isCardSection = true;
  };
}
