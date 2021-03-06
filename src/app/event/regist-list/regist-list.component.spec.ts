import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistListComponent } from './regist-list.component';

describe('RegistListComponent', () => {
  let component: RegistListComponent;
  let fixture: ComponentFixture<RegistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
