export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'tune-talk-client.herokuapp.com':
  APIURL = 'https://tune-talk-server.herokuapp.com/'
  break;

  default:
    APIURL = 'http://localhost:4200';
}
