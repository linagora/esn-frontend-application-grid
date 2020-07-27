import { Component, ComponentInterface, Host, Element, State, h, Method } from '@stencil/core';
import { createPopper } from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';

@Component({
  tag: 'esn-popover',
  styleUrl: 'esn-popover.scss',
  shadow: true
})
export class EsnPopover implements ComponentInterface {
  private clickOutsideListener: EventListener;

  private popoverContainerEl: HTMLDivElement;

  @Element() private hostEl: HTMLElement;

  @State() active: boolean;

  @State() fadingState: string;

  componentDidLoad() {
    createPopper(this.hostEl, this.popoverContainerEl, {
      strategy: 'fixed',
      modifiers: [flip, preventOverflow]
    });

    this.popoverContainerEl.addEventListener('animationstart', function (e: AnimationEvent) {
      if (e.animationName === 'fade-in') {
        (e.target as HTMLElement).classList.add('did-fade-in');
      }
    });

    this.popoverContainerEl.addEventListener('animationend', function (e) {
      if (e.animationName === 'fade-out') {
        (e.target as HTMLElement).classList.remove('did-fade-in');
      }
    });

    this.clickOutsideListener = (e: MouseEvent) => {
      const isClickInside = this.hostEl.contains(e.target as HTMLElement);

      if (!isClickInside) {
        this.active = false;
      }
    };

    document.addEventListener('click', this.clickOutsideListener);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.clickOutsideListener);
  }

  /**
   * A method to toggle the popover on/off.
   */
  @Method()
  async toggleShowState() {
    this.active = !this.active;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'esn-popover': true,
            active: this.active,
            inactive: !this.active
          }}
          ref={el => (this.popoverContainerEl = el)}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
