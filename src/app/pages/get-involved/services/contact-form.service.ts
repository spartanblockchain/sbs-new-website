import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  environmentUrl : string = '';

  constructor(private http: Http) {
    this.environmentUrl = environment.apiUrl
  }

  sendEmail(body) {
    return this.http.post(this.environmentUrl + '/sendEmail', body); // Heroku API Endpoint
  }
}
