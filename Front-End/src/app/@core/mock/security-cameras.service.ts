import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';

@Injectable()
export class SecurityCamerasService extends SecurityCamerasData {

  private cameras: Camera[] = [
    {
      title: 'Camara #1',
      source: 'assets/images/camera1.jpg',
      
    },
    
    {
      title: 'Camara #2',
      source: 'assets/images/camera2.jpg',
    },
    {
      title: 'Camara #3',
      source: 'assets/images/camera3.jpg',
    },
    {
      title: 'Camara #4',
      source: 'assets/images/camera4.jpg',
    },
  ];

  getCamerasData(): Observable<Camera[]> {
    return observableOf(this.cameras);
  }
}
