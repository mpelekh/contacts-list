import { ContactsListComponent } from "./pages/contacts-list/contacts-list.component";
import { ContactDetailComponent } from "./pages/contact-detail/contact-detail.component";

export const routes = [
  { path: "", component: ContactsListComponent },
  { path: "contact/:id", component: ContactDetailComponent }
];

export const navigatableComponents = [
  ContactsListComponent,
  ContactDetailComponent
];
