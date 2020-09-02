import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '../@fuse/fuse.module';
import { FuseSharedModule } from '../@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '../@fuse/components';

import { fuseConfig } from '../app/fuse-config';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '../app/fake-db/fake-db.service';


import { AppComponent } from '../app/app.component';
import { LayoutModule } from '../app/layout/layout.module';
import { SampleModule } from '../app/main/sample/sample.module';
import { ContactsModule } from '../app/main/contacts/contacts.module';
import { DevicesModule } from '../app/main/devices/devices.module';

const appRoutes: Routes = [
    // {
    //     path      : '**',
    //     redirectTo: 'sample'
    // },
    {
        path        : '**',
        loadChildren: () => import('../app/main/contacts/contacts.module').then(m => m.ContactsModule)
    },
    {
        path        : 'devices',
        loadChildren: () => import('../app/main/devices/devices.module').then(m => m.DevicesModule)
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        ContactsModule,
        DevicesModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
