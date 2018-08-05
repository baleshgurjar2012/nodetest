import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable()
export class ContactService {

  constructor(private http:HttpClient) { }

  getContact(){

    return this.http.get('http://localhost:3000/api/contacts');
  };

  addContact(newContact) {
    var header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post('localhost:3000/api/contact', newContact, { headers: header });
  };
}
