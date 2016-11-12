import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ContactsService } from './shared/contacts.service';
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)    
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents],
    bootstrap: [AppComponent],
    providers: [ContactsService]
})
export class AppModule {}