import { Injectable } from '@angular/core';

import { ApiService } from '../../core/services';

@Injectable()
export class UploadsService {
  prefixPath = '/upload'

  constructor(
    private apiService: ApiService
  ) { }

  uploadSingleFile(file) {
    let path = `${this.prefixPath}/single`;

    const formData = new FormData();
    formData.append('file', file);

    return this.apiService.postFile(`${path}`, formData);
  }
}
