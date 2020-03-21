import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(
    private http: HttpClient
  ) { }

  addContact(contactDetail) {
    return this.http.post(`${environment.baseApi}/api/contact/contact`, contactDetail);
  }

}
