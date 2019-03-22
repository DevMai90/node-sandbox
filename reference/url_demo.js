const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html/?id=100&status=active');

// Serialized URL -  Returns full URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain) - Includes port number if applicable
console.log(myUrl.host);

// Hostname - Excludes any port number
console.log(myUrl.hostname);

// Pathname - Gets us the actual path file name
console.log(myUrl.pathname);

// Search - Everything after the question mark '?'
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param - Two arguments (parameter, value)
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
console.log(myUrl.href);

// Loop through params
myUrl.searchParams.forEach((value, parameter) => {
  console.log(`${parameter}: ${value}`);
});
