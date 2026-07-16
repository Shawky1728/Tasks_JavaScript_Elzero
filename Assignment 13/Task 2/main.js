function itsMe() {
  return `Iam A Normal Function`;
}

let itsMeArrow = () => `Iam A Arrow Function`;

console.log(itsMe()); // Iam A Normal Function
console.log(itsMeArrow()); // Iam A Arrow Function

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

let urlCreateArrow = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreateArrow("https", "elzero", "org")); // https://www.elzero.org        

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org