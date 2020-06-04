import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService {

  activeRequest = 0;

  constructor(
    private loadingScreenService: LoadingService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.activeRequest === 0) {
      this.loadingScreenService.startLoading();
    }

    this.activeRequest++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequest--;
        if (this.activeRequest === 0) {
          this.loadingScreenService.stopLoading();
        }
      })
    )
  }
}
