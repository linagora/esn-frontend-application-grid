import { Component, Host, Element, State, h, Method } from '@stencil/core';
import { createPopper } from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
export class EsnPopover {
    componentDidLoad() {
        createPopper(this.hostEl, this.popoverContainerEl, {
            strategy: 'fixed',
            modifiers: [flip, preventOverflow, {
                    name: 'preventOverflow',
                    options: {
                        padding: 8
                    }
                }]
        });
        this.popoverContainerEl.addEventListener('animationstart', function (e) {
            if (e.animationName === 'fade-in') {
                e.target.classList.add('did-fade-in');
            }
        });
        this.popoverContainerEl.addEventListener('animationend', function (e) {
            if (e.animationName === 'fade-out') {
                e.target.classList.remove('did-fade-in');
            }
        });
        this.clickOutsideListener = (e) => {
            const isClickInside = this.hostEl.contains(e.target);
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
    async toggleShowState() {
        this.active = !this.active;
    }
    render() {
        return (h(Host, null,
            h("div", { class: {
                    'esn-popover': true,
                    active: this.active,
                    inactive: !this.active
                }, ref: el => (this.popoverContainerEl = el) },
                h("slot", null))));
    }
    static get is() { return "esn-popover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["esn-popover.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["esn-popover.css"]
    }; }
    static get states() { return {
        "active": {},
        "fadingState": {}
    }; }
    static get methods() { return {
        "toggleShowState": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "A method to toggle the popover on/off.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "hostEl"; }
}
