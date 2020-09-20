import { DeviceDetectionService } from './shared/services/device-detection.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent ],
      providers: [DeviceDetectionService], // tried to mock the service
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'device-identification-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('device-identification-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('device-identification-angular app is running!');
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let mockService : jasmine.SpyObj<DeviceDetectionService>;
    mockService = jasmine.createSpyObj('DeviceDetectionService' , ['getIsMobileResolution']);
    mockService.getIsMobileResolution.and.returnValue(false);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card>span').textContent).toContain('device-identification-angular app is running!');
  });

  it('should not render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    let mockService : jasmine.SpyObj<DeviceDetectionService>;
    mockService = jasmine.createSpyObj('DeviceDetectionService' , ['getIsMobileResolution']);
    mockService.getIsMobileResolution.and.returnValue(true);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled.querySelector('.card>span').textContent);
    expect(compiled.querySelector('.card>span').textContent).toContain('');
  });
});
