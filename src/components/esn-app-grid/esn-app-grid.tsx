import { Component, Prop, ComponentInterface, Host, h } from '@stencil/core';
import { Application } from './esn-app-grid.types';
import { AppGridTogglerIcon } from '../../icons/AppGridIcon';
import { getAppIcon } from '../../utils/app-icons';
import { isParentPathnameOf } from '../../utils/pathname';

@Component({
  tag: 'esn-app-grid',
  styleUrl: 'esn-app-grid.scss',
  shadow: true
})
export class EsnAppGrid implements ComponentInterface {
  private popover: HTMLElement;

  /**
   * A serialized JSON object that contains information about the available apps.
   */
  @Prop() serializedApplications: string;

  parseSerializedApplications() {
    let applications: Application[];

    try {
      if (!this.serializedApplications) {
        throw new Error("The 'serializedApplications' attribute/property must be set to a serialized JSON");
      }

      applications = JSON.parse(this.serializedApplications);

      if (!Array.isArray(applications) || !applications.length) {
        throw new Error("The parsed 'serializedApplications' has an invalid JSON structure");
      }
    } catch (err) {
      console.error("Something went wrong when parsing the 'serializedApplications' property.", err);

      if (!Array.isArray(applications) || applications.length) {
        applications = [];
      }
    }

    return applications;
  }

  render() {
    const applications = this.parseSerializedApplications();

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
              {applications.map(({ name, url }) => {
                const IconComponent = getAppIcon(name);

                return (
                  <div class="esn-app-grid__app-item">
                    <a href={url} target={isParentPathnameOf(url, window.location.href) ? '_self' : '_blank'}>
                      <div class="esn-app-grid__app-icon">
                        <IconComponent />
                      </div>
                      <span class="label">{name}</span>
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
