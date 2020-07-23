import { Component, Prop, ComponentInterface, State, Host, h } from '@stencil/core';
import fetchSvgIcon from '../../utils/fetch-icon';
import { InternalItem } from './esn-app-grid.types';
import { AppGridTogglerIcon } from './app-grid-icon/AppGridIcon';

@Component({
  tag: 'esn-app-grid',
  styleUrl: 'esn-app-grid.scss',
  shadow: true
})
export class EsnAppGrid implements ComponentInterface {
  private popover: HTMLElement;

  @State() internalItems: InternalItem[] = [];

  /**
   * A serialized JSON object that contains information about the available apps.
   */
  @Prop() serializedItems: string;

  componentWillLoad() {
    try {
      if (!this.serializedItems) {
        throw new Error("The 'serializedItems' attribute/property must be set to a serialized JSON");
      }

      const items = JSON.parse(this.serializedItems);

      if (Array.isArray(items) && items.length) {
        this.internalItems = items.map(({ name, url }) => ({
          name,
          url
        }));
      } else {
        throw new Error("The parsed 'serializedItems' has an invalid JSON structure");
      }

      Promise.all(items.map(({ iconUrl }) => fetchSvgIcon(iconUrl))).then(iconContents => {
        this.internalItems = iconContents.map((iconContent, index) => ({
          name: this.internalItems[index].name,
          url: this.internalItems[index].url,
          iconContent
        }));
      });
    } catch (err) {
      console.error('Something went wrong', err);
      this.internalItems = [];
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
              {this.internalItems.map(item => (
                <div class="esn-app-grid__app-item">
                  <a href={item.url}>
                    <div class="esn-app-grid__app-icon" innerHTML={item.iconContent} />
                    <span class="label">{item.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </esn-popover>
        </div>
      </Host>
    );
  }
}
