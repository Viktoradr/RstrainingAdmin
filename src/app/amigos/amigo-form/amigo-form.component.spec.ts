import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigoFormComponent } from './amigo-form.component';

describe('AmigoFormComponent', () => {
  let component: AmigoFormComponent;
  let fixture: ComponentFixture<AmigoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
