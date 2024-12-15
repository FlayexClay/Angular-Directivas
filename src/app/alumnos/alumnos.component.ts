import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
})
export class AlumnosComponent {
  alumnos: { nombre: string; edad: number; aprobado: boolean }[] = [];
  newName: string = '';
  newEdad: number | null = null;

  addStudent(): void {
    if (!this.newName.trim()) {
      alert('El nombre debe ser valido');
      return;
    }

    if (!this.newEdad || this.newEdad <= 0 || isNaN(this.newEdad)) {
      alert('Asigne una edad valida mayor que el número 0');
      return;
    }

    this.alumnos.push({
      nombre: this.newName,
      edad: this.newEdad,
      aprobado: false,
    });

    this.newName = '';
    this.newEdad = null;

    console.log(this.alumnos);
    
  }

  toggleStudent(index: number): void {
    this.alumnos[index].aprobado = !this.alumnos[index].aprobado;
  }

  deleteStudent(index: number): void {
    this.alumnos.splice(index, 1);
  }
}
