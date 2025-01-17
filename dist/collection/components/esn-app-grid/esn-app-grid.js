import { Component, Prop, Host, h } from '@stencil/core';
import { AppGridTogglerIcon } from '../../icons/AppGridIcon';
import { getAppIcon } from '../../utils/app-icons';
import { isParentPathnameOf } from '../../utils/pathname';
export class EsnAppGrid {
    parseSerializedApplications() {
        let applications;
        try {
            if (!this.serializedApplications) {
                throw new Error("The 'serializedApplications' attribute/property must be set to a serialized JSON");
            }
            applications = JSON.parse(this.serializedApplications);
            if (!Array.isArray(applications) || !applications.length) {
                throw new Error("The parsed 'serializedApplications' has an invalid JSON structure");
            }
        }
        catch (err) {
            console.error("Something went wrong when parsing the 'serializedApplications' property.", err);
            if (!Array.isArray(applications) || applications.length) {
                applications = [];
            }
        }
        return applications;
    }
    render() {
        const applications = this.parseSerializedApplications();
        return (h(Host, null,
            h("div", { class: "esn-app-grid" },
                h("button", { class: "esn-app-grid__toggler", onClick: e => {
                        e.stopPropagation();
                        this.popover.toggleShowState();
                    } },
                    h(AppGridTogglerIcon, null)),
                h("esn-popover", { ref: el => (this.popover = el) },
                    h("div", { class: "esn-app-grid__popover-content" }, applications.map(({ name, url }) => {
                        const IconComponent = getAppIcon(name);
                        return (h("div", { class: "esn-app-grid__app-item" },
                            h("a", { href: url, target: isParentPathnameOf(url, window.location.href) ? '_self' : '_blank' },
                                h("div", { class: "esn-app-grid__app-icon" },
                                    h(IconComponent, null)),
                                h("span", { class: "label" }, name))));
                    }))))));
    }
    static get is() { return "esn-app-grid"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["esn-app-grid.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["esn-app-grid.css"]
    }; }
    static get properties() { return {
        "serializedApplications": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "A serialized JSON object that contains information about the available apps."
            },
            "attribute": "serialized-applications",
            "reflect": false
        }
    }; }
}
