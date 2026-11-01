import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router'
import { OnInit } from '@angular/core';

interface Libro {
  id: number;
  codigo: string;
  titulo: string;
  autor: string;
  anio: number;
}

@Component({
  imports: [FormsModule],
  selector: 'app-libro',
  styleUrl: './libro.component.css',
  templateUrl: './libro.component.html',
})
export class LibroComponent implements OnInit {
  private readonly CLAVE_DATOS = 'librosBiblioteca';
  private readonly CLAVE_SESION = 'sesionBiblioteca';

  libros: Libro[] = [];
  
  constructor(private router: Router) {}

    ngOnInit() {
      if (!localStorage.getItem(this.CLAVE_SESION)) {
        this.router.navigate(['/login']);
        return;
      }
      const guardado = localStorage.getItem(this.CLAVE_DATOS);
      this.libros = guardado ? JSON.parse(guardado) : [];
    }
  }
