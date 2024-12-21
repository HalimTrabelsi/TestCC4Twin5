import { Team } from './../../models/Team';
import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
team!:Team;

constructor(private route: ActivatedRoute, private http:HttpClient){}
ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<Team>(`http://localhost:3000/teams/${id}`).subscribe(
      data =>{
        this.team = data;
      });
}





}
