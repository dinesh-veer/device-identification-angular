import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  private width: number;

  public getIsMobileResolution(): boolean {
    this.width = window.innerWidth;
    if (this.width < 758) {
      return true;
   } else {
     return false;
  }
  }
}
