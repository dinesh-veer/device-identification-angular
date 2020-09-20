import { TestBed } from '@angular/core/testing';

import { DeviceDetectionService } from './device-detection.service';

describe('DeviceDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceDetectionService = TestBed.get(DeviceDetectionService);
    expect(service).toBeTruthy();
  });
  it('should return false if device size is greater than 760', () => {
    const service: DeviceDetectionService = TestBed.get(DeviceDetectionService);
    spyOnProperty(window, 'innerWidth').and.returnValue(760);
    const value = service.getIsMobileResolution();
    console.log(value)
    expect(value).toEqual(false);
  });

  it('should return true if device size is less than 758', () => {
    const service: DeviceDetectionService = TestBed.get(DeviceDetectionService);
    spyOnProperty(window, 'innerWidth').and.returnValue(750);
    const value = service.getIsMobileResolution();
    console.log(value);
    expect(value).toEqual(true);
  });
});
