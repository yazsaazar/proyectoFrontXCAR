import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../services/reporte.model';
import { ReporteService } from '../../services/reporte.service';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
})
export class ReporteComponent{
  reportes: any[] = [];
  mostrarModal = false;
  modalEditar = false;
  modalTitulo = '';
  reporteActual: any = {};

  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listarReportes();
  }

  listarReportes() {
    this.http.get<any>('http://127.0.0.1:5000/reportes').subscribe(data => {
      this.reportes = data.reportes;
    });
  }

  mostrarModalAgregar() {
    this.modalEditar = false;
    this.modalTitulo = 'Agregar Reporte';
    this.reporteActual = {};
    this.mostrarModal = true;
  }

  mostrarModalEditar(reporte: any) {
    this.modalEditar = true;
    this.modalTitulo = 'Editar Reporte';
    this.reporteActual = { ...reporte };
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  agregarReporte() {
    this.http.post<any>('http://127.0.0.1:5000/reportes', this.reporteActual).subscribe(
      data => {
        this.reporteActual = {
          propietario: '',
          modelo: '',
          marca: '',
          color: '',
          placa: ''
        };
        this.cerrarModal();
        this.listarReportes();
  
        // Mostrar alerta exitosa
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El reporte ha sido registrado con éxito.',
          confirmButtonText: 'Aceptar'
        });
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
     
  

  actualizarReporte() {
    const data = {
      id: this.reporteActual.id,
      propietario: this.reporteActual.propietario,
      modelo: this.reporteActual.modelo,
      marca: this.reporteActual.marca,
      color: this.reporteActual.color,
      placa: this.reporteActual.placa
    };
  
    this.http.put<any>(`http://127.0.0.1:5000/reportes/${this.reporteActual.id}`, data).subscribe(
      () => {
        this.cerrarModal();
        this.listarReportes();
  
        // Mostrar alerta de actualización exitosa
        Swal.fire({
          icon: 'success',
          title: 'Actualización exitosa',
          text: 'El reporte ha sido actualizado con éxito.',
          confirmButtonText: 'Aceptar'
        });
      },
      error => {
        console.error('Error:', error);
  
        // Mostrar alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error al actualizar el reporte.',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }


  eliminarReporte(id: number) {
    // Mostrar alerta de confirmación
    Swal.fire({
      icon: 'question',
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el reporte. ¿Deseas continuar?',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirmó, eliminar el reporte
        this.http.delete<any>(`http://127.0.0.1:5000/reportes/${id}`).subscribe(
          () => {
            this.listarReportes();
            // Mostrar alerta de eliminación exitosa
            Swal.fire({
              icon: 'success',
              title: 'Eliminación exitosa',
              text: 'El reporte ha sido eliminado con éxito.',
              confirmButtonText: 'Aceptar'
            });
          },
          error => {
            console.error('Error:', error);
          }
        );
      }
    });
  }

validarTexto(event: KeyboardEvent): boolean {
  const pattern = /^[a-zA-Z]*$/; // Permite letras, números y espacios
  const inputChar = String.fromCharCode(event.charCode);

  if (!pattern.test(inputChar)) {
    event.preventDefault();
    return false;
  }
  return true;
}

formatearAMayusculas(input: string): string {
  return input.toUpperCase();
}




}