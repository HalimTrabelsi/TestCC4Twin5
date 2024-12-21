import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FormTeamComponent } from './components/form-team/form-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    TeamComponent,
    TeamsComponent,
    FormTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]) // Ensure RouterModule is imported

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
