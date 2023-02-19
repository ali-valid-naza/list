import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, } from 'rxjs';

@Injectable()
export class GetProductsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (request.method === 'GET') return of( new HttpResponse({ body: ProductData.getProducts }))

    return next.handle(request)
  }
}
