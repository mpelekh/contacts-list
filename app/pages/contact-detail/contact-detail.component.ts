import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from '../../shared/contacts.service';
import { Contact } from '../../shared/contact.model';

@Component({
    selector: 'contact-detail',
    templateUrl: 'pages/contact-detail/contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {
    contact: Contact;

    constructor(private contactsService: ContactsService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        const id = <number>this.route.snapshot.params['id'];
        this.getContact(id);
    }

    getContact(id: number) {
        this.contactsService
            .getContact(id)
            .subscribe(contact => {
                this.contact = contact;
            });
    }
}