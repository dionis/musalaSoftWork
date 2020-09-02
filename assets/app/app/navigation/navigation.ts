import { FuseNavigation } from '../../@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            // {
            //     id       : 'sample',
            //     title    : 'Sample',
            //     translate: 'NAV.SAMPLE.TITLE',
            //     type     : 'item',
            //     icon     : 'email',
            //     url      : '/sample',
            //     badge    : {
            //         title    : '25',
            //         translate: 'NAV.SAMPLE.BADGE',
            //         bg       : '#F44336',
            //         fg       : '#FFFFFF'
            //     }
            // },
            {
                id       : 'contact',
                title    : 'Contact',
                translate: 'NAV.CONTACT.TITLE',
                type     : 'item',
                icon     : 'settings_remote',
                url      : '/contact',
               
            },
            {
                id       : 'device',
                title    : 'Device',
                translate: 'NAV.DEVICE.TITLE',
                type     : 'item',
                icon     : 'devices_other',
                url      : '/devices',
               
            }
        ]
    }
];
