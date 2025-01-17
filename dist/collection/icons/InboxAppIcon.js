import { h } from '@stencil/core';
export const InboxAppIcon = () => (h("svg", { width: "100%", height: "100%", viewBox: "0 0 255 255", version: "1.1", style: { fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421' } },
    h("rect", { id: "Unified-Inbox", x: "0", y: "0", width: "255", height: "255", style: { fill: 'none' } }),
    h("clipPath", { id: "_clip1" },
        h("rect", { id: "Unified-Inbox1", x: "0", y: "0", width: "255", height: "255" })),
    h("g", { "clip-path": "url(#_clip1)" },
        h("g", null,
            h("path", { id: "email.-open", class: "app-menu-icon-primary-color", d: "M67.5,110.098l60,37.492l60,-37.492l0,-0.008l-60,-37.492l-60,37.492l0,0.008Zm135,-0.008l0,75c0,8.284 -6.715,15 -15,15l-120,0c-8.284,0 -15,-6.716 -15,-15l0,-75c0,-5.457 2.914,-10.233 7.271,-12.858l67.729,-42.322l67.73,42.322c4.356,2.625 7.27,7.401 7.27,12.858Z", style: { fill: '#2196f3', fillRule: 'nonzero' } }),
            h("path", { id: "email.paper", class: "app-menu-icon-accent-color", d: "M172.721,71.25l0,48.529l-45.221,27.787l-45.956,-28.522l0,-47.794l91.177,0Z", style: { fill: '#ffc107' } })),
        h("rect", { x: "96.321", y: "84.457", width: "62.359", height: "7.039", style: { fill: '#ffffff' } }),
        h("rect", { x: "96.321", y: "98.502", width: "62.359", height: "7.24", style: { fill: '#ffffff' } }),
        h("rect", { x: "96.321", y: "112.749", width: "49.951", height: "7.24", style: { fill: '#ffffff' } }))));
