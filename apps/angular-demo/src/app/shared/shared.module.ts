import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';

import { UploadsService } from './services';
import { UploadSingleComponent } from './components/upload-single/upload-single.component';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const LIB_MODULES = [NgbModule, FileUploadModule];
const COMPONENTS = [UploadSingleComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...BASE_MODULES,
    ...LIB_MODULES
  ],
  exports: [
    ...BASE_MODULES,
    ...LIB_MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UploadsService
      ]
    };
  }
}
