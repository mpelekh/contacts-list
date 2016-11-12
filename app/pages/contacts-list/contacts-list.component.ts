import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import dialogs = require("ui/dialogs");

import { ContactsService } from '../../shared/contacts.service';
import { Contact } from '../../shared/contact.model';

@Component({
    selector: 'contacts-list',
    templateUrl: 'pages/contacts-list/contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {
    contacts: Contact[];

    constructor(private router: Router,
        private contactsService: ContactsService) { }

    ngOnInit() {
        this.getContacts();
    }

    getContacts() {
        this.contactsService
            .getContacts()
            .subscribe(contacts => {
                this.contacts = contacts;
            });
    }

    goToDetail(item) {
        dialogs.confirm({
            title: "Are you sure?",
            message: "Go to details?",
            okButtonText: "OK",
            cancelButtonText: "Cancel"
        }).then(result => result && this.router.navigate(['/contact', item.id]));
    }
}