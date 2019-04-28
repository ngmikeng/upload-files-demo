import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSingleComponent } from './upload-single.component';

describe('UploadSingleComponent', () => {
  let component: UploadSingleComponent;
  let fixture: ComponentFixture<UploadSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
