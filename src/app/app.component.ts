import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'device-identification-angular';
  public width: number;
  private isMobileResolution: boolean;

/*  ngOnInit(): void {
    this.width = window.innerWidth;
    console.log(' width ' + this.width );
  }*/

  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.width = window.innerWidth;
  console.log(' width ' + this.width );
  if (this.width < 758) {
    this.isMobileResolution = true;
 } else {
   this.isMobileResolution = false;
}
}

constructor(){
  /*if (this.width < 758) {
  this.isMobileResolution = true;
} else {
 this.isMobileResolution = false;
}*/

}
public getIsMobileResolution(): boolean {
  return this.isMobileResolution;
}
}
