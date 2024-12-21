import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/models/Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[]=[];
  constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.http.get<Team[]>('http://localhost:3000/teams').subscribe(data => {
      this.teams = data;
    });
  }
}



