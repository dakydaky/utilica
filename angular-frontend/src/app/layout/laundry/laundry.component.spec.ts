import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LaundryComponent } from './laundry.component';

import {
    ModalComponent,
    DateComponent
} from './components';

describe('LaundryComponent', () => {
  let component: LaundryComponent;
  let fixture: ComponentFixture<LaundryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports: [
	    FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
		],
      declarations: [ LaundryComponent, ModalComponent, ModalEditComponent, ModalDeleteComponent
	  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
