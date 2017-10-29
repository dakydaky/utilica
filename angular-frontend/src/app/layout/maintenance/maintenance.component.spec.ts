import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaintenanceComponent } from './maintenance.component';

import {
    ModalMaintenanceComponent,
    ModalSendMaintenanceComponent
} from './components';

describe('MaintenanceComponent', () => {
  let component: MaintenanceComponent;
  let fixture: ComponentFixture<MaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports: [
	    FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
		],
      declarations: [ MaintenanceComponent, ModalMaintenanceComponent, ModalSendMaintenanceComponent
	  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
