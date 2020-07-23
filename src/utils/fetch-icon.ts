export default function fetchSvgIcon(iconUrl: string) {
  console.log('fetching from iconUrl', iconUrl);

  const proxiedUrl = 'https://cors-anywhere.herokuapp.com/' + iconUrl;

  console.log('proxiedUrl', proxiedUrl);

  return fetch(proxiedUrl)
    .then(response => response.text())
    .then(svgContent => {
      console.log('svgContent', svgContent);
      return svgContent;
    });
}
