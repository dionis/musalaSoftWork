import { FuseUtils } from '../../../@fuse/utils';

export class Contact
{
    id: string;
    name: string;
    lastName: string;
    avatar: string;
    nickname: string;
    company: string;
    jobTitle: string;
    email: string;
    phone: string;
    address: string;
    birthday: string;
    notes: string;
    serial?:string;
    gatewayName?:string;
    iPv4Address?:string;
    uid?:string;
    vendor?:string;
    status?:string;
    gatewayname?:string;
    devicesize:string;    


    /**
     * Constructor
     *
     * @param contact
     */
    constructor(contact)
    {
        {
            this.id = contact.id || FuseUtils.generateGUID();
            this.name = contact.name || '';
            this.lastName = contact.lastName || '';
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            this.nickname = contact.nickname || '';
            this.company = contact.company || '';
            this.jobTitle = contact.jobTitle || '';
            this.email = contact.email || '';
            this.phone = contact.phone || '';
            this.address = contact.address || '';
            this.birthday = contact.birthday || '';
            this.notes = contact.notes || '';
            this.serial = contact.serial || '';
            this.iPv4Address = contact.iPv4Address || '';
            this.uid = contact.uid || '';
            this.vendor = contact.vendor || '';
            this.status = contact.status||'';
            this.gatewayname = contact.gatewayname || '';
            this.gatewayName = (typeof(contact.gateway)!=='undefined')? contact.gateway.gatewayName:'';
            this.devicesize = String((typeof(contact.devices)!=='undefined')? contact.devices.length:'') || '';
        }
    }
}
