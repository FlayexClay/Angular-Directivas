import { Component } from '@angular/core';
import { AlumnosComponent } from "./alumnos/alumnos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alumnos-directivas';
}
