import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { Projeto } from 'src/app/services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  columns = [
    {
      name: "#"
    },
    {
      name: "Cliente"
    },
    {
      name: "Titulo"
    },
    {
      name: "Status"
    },
    {
      name: "Prazo para propostas"
    }
  ];

  projects: Projeto[] = [];

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(){
    this._homeService.getProjetos().subscribe(response => {
      console.log(response);
      this.projects = [...response];
    });
  }

}
