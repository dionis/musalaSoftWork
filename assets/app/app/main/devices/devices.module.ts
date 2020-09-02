import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FuseSharedModule } from '../../../@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '../../../@fuse/components';

import { DevicesComponent } from '../../../app/main/devices/devices.component';
import { DevicesService } from '../../../app/main/devices/devices.service';
import { DevicesDeviceListComponent } from '../../../app/main/devices/device-list/device-list.component';
import { DevicesSelectedBarComponent } from '../../../app/main/devices/device-bar/selected-bar.component';
import { DevicesMainSidebarComponent } from '../../../app/main/devices/sidebars/main/main.component';
import { DevicesDeviceFormDialogComponent } from '../../../app/main/devices/device-form/device-form.component';

const routes: Routes = [
    {
        path     : 'devices',
        component: DevicesComponent,
        resolve  : {
            contacts: DevicesService
        }
    }
];

@NgModule({
    declarations   : [
        DevicesComponent,
        DevicesDeviceListComponent,
        DevicesSelectedBarComponent,
        DevicesMainSidebarComponent,
        DevicesDeviceFormDialogComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatTableModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule
    ],
    providers      : [
        DevicesService
    ],
    entryComponents: [
        DevicesDeviceFormDialogComponent
    ]
})
export class DevicesModule
{
}
