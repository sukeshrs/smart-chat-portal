import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//TODO - delete if Ngb is not used
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [],
  exports: [MDBBootstrapModule,CommonModule]
})
export class SharedFeatureModule { }
