import isAbsoluteUrl from 'is-absolute-url';

export const getApplicationUrl = (url: string) => isAbsoluteUrl(url) ? url : new URL(url, window.location.origin).href;
