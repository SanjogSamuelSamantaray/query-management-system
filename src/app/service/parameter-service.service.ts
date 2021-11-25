import { Injectable } from '@angular/core';
import { APIResult } from './api-result';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParameterServiceService {
  
  baseURL = environment.apiServiceURL;
  private _serviceURL = this.baseURL + 'parameters/';
  constructor(private http: HttpClient) {}

  getParameters()
  {
    let getParametersUrl=this._serviceURL+"GetParameters";

    return this.http.get<APIResult>(getParametersUrl).toPromise();
  }

}
