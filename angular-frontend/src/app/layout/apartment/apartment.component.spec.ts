import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApartmentComponent } from './apartment.component';

import {
    ModalComponent,
	ModalEditComponent,
	ModalDeleteComponent
} from './components';

describe('ApartmentComponent', () => {
  let component: ApartmentComponent;
  let fixture: ComponentFixture<ApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports: [
	    FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
		],
      declarations: [ ApartmentComponent, ModalComponent, ModalEditComponent, ModalDeleteComponent
	  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
