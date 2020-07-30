import { Component, Prop, ComponentInterface, State, Host, h } from '@stencil/core';
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

      if (!Array.isArray(applications) || !applications.length) {
        throw new Error("The parsed 'serializedApplications' has an invalid JSON structure");
      }

      this.applications = applications;
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
              {this.applications.map(({ name, url }) => {
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
