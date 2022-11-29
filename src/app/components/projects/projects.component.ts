import { ProjetcsService } from './../../services/projetcs/projetcs.service';
import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/services/services';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

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
    private _projetcsService: ProjetcsService
  ) { }

  ngOnInit(): void {
    this._getData();
  }

  private _getData(){
    this._projetcsService.getProjetcs().subscribe(response => {
      console.log(response);
      this.projects = [...response];
    });
  }

}
