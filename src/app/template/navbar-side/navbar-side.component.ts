import { Component, OnInit } from '@angular/core';
import { faHouse, faFolderOpen, faCommentDollar, faWallet, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-side',
  templateUrl: './navbar-side.component.html',
  styleUrls: ['./navbar-side.component.css']
})
export class NavbarSideComponent implements OnInit {

  icons = {
    faHouse: faHouse,
    faFolderOpen: faFolderOpen,
    faCommentDollar: faCommentDollar,
    faWallet: faWallet,
    faCircleUser: faCircleUser
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
