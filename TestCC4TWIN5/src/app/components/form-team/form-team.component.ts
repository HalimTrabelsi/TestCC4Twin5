import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})
export class FormTeamComponent implements OnInit {

  teamForm!:FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient){}

  ngOnInit(): void {
      this.teamForm = this.fb.group({
        name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
        projectName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
        level: ['', Validators.required],
        projectDescription: ['', Validators.minLength(5)]

      })
  }
  onSubmit(): void {
    if (this.teamForm.valid) {
      const team = this.teamForm.value;
      this.http.post('http://localhost:3000/teams', team).subscribe(() => {
        alert('Team added successfully!');
      });
    }
  }
}





