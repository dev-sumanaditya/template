import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css'],
})
export class Navbar2Component implements OnInit {
  menuVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu = () => {
    this.menuVisible = !this.menuVisible;
  };

  openMobileMenu = () => {
    // open the mobile menu
  };
}
