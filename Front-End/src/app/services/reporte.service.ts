import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../services/reporte.model';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  private apiUrl = 'http://127.0.0.1:5000'; // Reemplaza con la URL de tu API Flask

  constructor(private http: HttpClient) {}

  getReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${this.apiUrl}/reportes`);
  }

  getReporte(id: string): Observable<Reporte> {
    return this.http.get<Reporte>(`${this.apiUrl}/reportes/${id}`);
  }

  crearReporte(reporte: Reporte): Observable<any> {
    return this.http.post(`${this.apiUrl}/reportes`, reporte);
  }

  actualizarReporte(id: string, reporte: Reporte): Observable<any> {
    return this.http.put(`${this.apiUrl}/reportes/${id}`, reporte);
  }

  eliminarReporte(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reportes/${id}`);
  }
  login2(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login_jwt`, { email, password });
  }
}
