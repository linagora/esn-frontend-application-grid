export const isParentPathnameOf = (parentUrl: string, childUrl: string) => {
  return parentUrl === childUrl || new RegExp(`${parentUrl}[^\\w\\d-_.~]`, 'g').test(childUrl);
}
