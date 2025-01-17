export const isParentPathnameOf = (parentUrl, childUrl) => {
    return parentUrl === childUrl || new RegExp(`${parentUrl}[^\\w\\d-_.~]`, 'g').test(childUrl);
};
