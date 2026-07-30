import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from '../constants/publicUrlLists';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token: string = localStorage.getItem("authToken") || '';
  const router: Router = inject(Router);

  for(const u of urls){
    if(req.url.includes(u)){
      return next(req);
    }
  }

  const modifiedRequest = req.clone({
    headers: req.headers.set('Authorization', 'Bearer ' + token)
  });


  return next(modifiedRequest);
};
