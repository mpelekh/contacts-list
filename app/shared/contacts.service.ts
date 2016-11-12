import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from './contact.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactsService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: Http) { }

    getContacts(): Observable<Contact[]> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => res.json() as Contact[])
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }

    getContact(id: number): Observable<Contact> {
        return this.http
            .get(`${this.apiUrl}/${id}`)
            .map((res: Response) => res.json() as Contact)
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }

    updateContact(contact: Contact): Observable<Contact> {
        return this.http
            .put(`${this.apiUrl}/${contact._id}`, contact)
            .map((res: Response) => res.json() as Contact)
            .catch((error:any) => Observable.throw(error || 'Server error'));
    } 
}