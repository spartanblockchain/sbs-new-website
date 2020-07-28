import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  constructor(private http: Http) {}

  sendEmail(body) {
    console.log('HERE')
    return this.http.post('https://spartan-blockchain-contact.herokuapp.com/sendEmail', body); // Heroku API Endpoint
  }
}
