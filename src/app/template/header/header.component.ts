import { Component, OnInit } from '@angular/core';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  icons = {
    faBell: faBell,
    faGear: faGear
  }

  constructor() { }

  ngOnInit(): void {
  }

}
