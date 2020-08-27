import { AdminAppIcon } from '../icons/AdminAppIcon';
import { CalendarAppIcon } from '../icons/CalendarAppIcon';
import { ContactsAppIcon } from '../icons/ContactsAppIcon';
import { InboxAppIcon } from '../icons/InboxAppIcon';
import { LinShareAppIcon } from '../icons/LinShareAppIcon';
import { UnknownAppIcon } from '../icons/UnknownAppIcon';
import { TwakeAppIcon } from '../icons/TwakeAppIcon';

const iconMapping = {
  Admin: AdminAppIcon,
  Calendar: CalendarAppIcon,
  Contacts: ContactsAppIcon,
  Inbox: InboxAppIcon,
  LinShare: LinShareAppIcon,
  Twake: TwakeAppIcon
};

export const getAppIcon = (appName: string) => {
  if (iconMapping[appName]) return iconMapping[appName];

  console.warn(`The application with name ${appName} does not have an icon available. A fallback icon will be used instead.`);

  return UnknownAppIcon;
}
