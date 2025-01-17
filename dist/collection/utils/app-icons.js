import { AdminAppIcon } from '../icons/AdminAppIcon';
import { CalendarAppIcon } from '../icons/CalendarAppIcon';
import { ContactsAppIcon } from '../icons/ContactsAppIcon';
import { InboxAppIcon } from '../icons/InboxAppIcon';
import { LinShareAppIcon } from '../icons/LinShareAppIcon';
import { UnknownAppIcon } from '../icons/UnknownAppIcon';
import { TwakeAppIcon } from '../icons/TwakeAppIcon';
import { TmailAppIcon } from '../icons/TmailAppIcon';
import { TdriveAppIcon } from '../icons/TdriveAppIcon';
import { TcontactsAppIcon } from '../icons/TcontactsAppIcon';
import { TcalendarAppIcon } from '../icons/TcalendarAppIcon';
const iconMapping = {
    Admin: AdminAppIcon,
    Calendar: CalendarAppIcon,
    Contacts: ContactsAppIcon,
    Inbox: InboxAppIcon,
    LinShare: LinShareAppIcon,
    Twake: TwakeAppIcon,
    TMail: TmailAppIcon,
    TDrive: TdriveAppIcon,
    TContacts: TcontactsAppIcon,
    TCalendar: TcalendarAppIcon
};
export const getAppIcon = (appName) => {
    if (iconMapping[appName])
        return iconMapping[appName];
    console.warn(`The application with name ${appName} does not have an icon available. A fallback icon will be used instead.`);
    return UnknownAppIcon;
};
