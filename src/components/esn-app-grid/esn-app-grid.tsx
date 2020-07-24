import { Component, Prop, ComponentInterface, State, Host, h } from '@stencil/core';
import { Application } from './esn-app-grid.types';
import { AppGridTogglerIcon } from './icons/AppGridIcon';
import { CalendarAppIcon } from './icons/CalendarAppIcon';
import { InboxAppIcon } from './icons/InboxAppIcon';
import { AdminAppIcon } from './icons/AdminAppIcon';
import { ContactsAppIcon } from './icons/ContactsAppIcon';
import { LinShareAppIcon } from './icons/LinShareAppIcon';
import { UnknownAppIcon } from './icons/UnknownAppIcon';

const iconMapping = {
  Admin: AdminAppIcon,
  Calendar: CalendarAppIcon,
  Contacts: ContactsAppIcon,
  Inbox: InboxAppIcon,
  LinShare: LinShareAppIcon
};

const isIconAvailable = (appName: string) => Object.keys(iconMapping).includes(appName);

@Component({
  tag: 'esn-app-grid',
  styleUrl: 'esn-app-grid.scss',
  shadow: true
})
export class EsnAppGrid implements ComponentInterface {
  private popover: HTMLElement;

  @State() applications: Application[] = [];

  /**
   * A serialized JSON object that contains information about the available apps.
   */
  @Prop() serializedApplications: string;

  componentWillLoad() {
    try {
      if (!this.serializedApplications) {
        throw new Error("The 'serializedApplications' attribute/property must be set to a serialized JSON");
      }

      const applications = JSON.parse(this.serializedApplications);

      if (Array.isArray(applications) && applications.length) {
        this.applications = applications.map(({ name, url }) => {
          if (!isIconAvailable(name)) {
            console.warn(
              `The application with name ${name} does not have an icon available. A fallback icon will be used instead.`
            );
          }

          return {
            name,
            url
          };
        });
      } else {
        throw new Error("The parsed 'serializedApplications' has an invalid JSON structure");
      }
    } catch (err) {
      console.error('Something went wrong', err);
      this.applications = [];
    }
  }

  render() {
    return (
      <Host>
        <div class="esn-app-grid">
          <button
            class="esn-app-grid__toggler"
            onClick={e => {
              e.stopPropagation();
              (this.popover as any).toggleShowState();
            }}
          >
            <AppGridTogglerIcon />
          </button>
          <esn-popover ref={el => (this.popover = el as HTMLElement)}>
            <div class="esn-app-grid__popover-content">
              {this.applications.map(application => {
                const IconComponent = isIconAvailable(application.name)
                  ? iconMapping[application.name]
                  : UnknownAppIcon;

                return (
                  <div class="esn-app-grid__app-item">
                    <a href={application.url}>
                      <div class="esn-app-grid__app-icon">
                        <IconComponent />
                      </div>
                      <span class="label">{application.name}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </esn-popover>
        </div>
      </Host>
    );
  }
}
