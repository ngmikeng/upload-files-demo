import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { UploadsService } from '../../services'

@Component({
  selector: 'app-upload-single',
  templateUrl: './upload-single.component.html',
  styleUrls: ['./upload-single.component.scss']
})
export class UploadSingleComponent implements OnInit {

  uploader: FileUploader = new FileUploader({});
  selectedFile = null;

  uploadStatusCode = {
    failed: -1,
    uploading: 1,
    succeed: 2
  };

  pageState = {
    isLoading: false,
    uploadProgress: 0,
    dropZoneOver: false,
    uploading: false,
    uploadStatus: null
  };

  constructor(
    private uploadService: UploadsService,
  ) { }

  ngOnInit() {
  }

  chooseFile(event, inputFileEl) {
    event.preventDefault();
    if (inputFileEl) {
      inputFileEl.click();
    }
  }

  fileSelectChange(files) {
    this.selectedFile = files[0];
    this.uploader.queue = [this.uploader.queue[this.uploader.queue.length - 1]];
    this.pageState.uploadProgress = 0;
    this.pageState.uploadStatus = null;
  }

  fileOverHandler(e: any) {
    this.pageState.dropZoneOver = e;
  }

  submitUpload() {
    if (this.selectedFile) {
      this.pageState.uploadProgress = 0;
      this.pageState.uploadStatus = this.uploadStatusCode.uploading;
      this.uploadService.uploadSingleFile(this.selectedFile).subscribe(
        (evt) => {
          if (evt.type === HttpEventType.UploadProgress) {
            if (evt.total > 0) {
              this.pageState.uploadProgress = Math.round(evt.loaded / evt.total * 100);
            }
          } else if (evt.type === HttpEventType.Response) {
            if (evt.status === 200 && evt.body && evt.body.result) {
              this.pageState.uploadStatus = this.uploadStatusCode.succeed;
            }
          }
        },
        (err) => {
          this.pageState.uploadProgress = 0;
          this.pageState.uploadStatus = this.uploadStatusCode.failed;
        }
      );
    }
  }

}
