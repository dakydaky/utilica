import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule, NgbDropdown, ngbDropdownToggle  } from '@ng-bootstrap/ng-bootstrap';
import { MailList } from './mail-list.component';

describe('MailList', () => {
  let component: MailList;
  let fixture: ComponentFixture<MailList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot(),
        NgbDropdown.forRoot(),
        ngbDropdownToggle.forRoot()
      ],
      declarations: [ MailList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
