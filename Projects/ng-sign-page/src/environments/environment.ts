// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA37137lA-mH2Zx__Ddck1ckk2ECuJeHHU",
    authDomain: "ng-sign-page.firebaseapp.com",
    databaseURL: "https://ng-sign-page.firebaseio.com",
    projectId: "ng-sign-page",
    storageBucket: "ng-sign-page.appspot.com",
    messagingSenderId: "258595002513"
  }
};