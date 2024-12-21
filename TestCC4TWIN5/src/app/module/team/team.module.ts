import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { TeamRoutingModule } from './team-routing.module';
import { TeamsComponent } from '../../components/teams/teams.component';
import { TeamComponent } from '../../components/team/team.component';
import { FormTeamComponent } from '../../components/form-team/form-team.component';
import { MyteamsComponent } from '../../components/myteams/myteams.component';


@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent,
    FormTeamComponent,
    MyteamsComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FormControl
  ]
})
export class TeamModule { }
