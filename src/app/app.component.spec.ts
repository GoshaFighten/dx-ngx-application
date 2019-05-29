import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DevExtremeModule } from 'devextreme-angular';
import { LocalizeStubPipe, TranslateStubPipe } from './../../testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, DevExtremeModule],
      declarations: [AppComponent, LocalizeStubPipe, TranslateStubPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should render DxList`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.dx-list')).toBeTruthy();
  });

  it('should render DxToolbar', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.dx-toolbar')).toBeTruthy();
  });
});
