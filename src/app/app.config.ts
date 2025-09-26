// src/app/app.config.ts
import {ApplicationConfig} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

import {provideTranslateService} from '@ngx-translate/core';
import {provideTranslateHttpLoader} from '@ngx-translate/http-loader';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // provide routing
    provideRouter(routes),
    // provide HttpClient in the modern standalone way
    provideHttpClient(withInterceptorsFromDi()),

    // provide ngx-translate service and tell it where translation files live
    provideTranslateService({
      // initial defaults
      defaultLanguage: 'en',
      useDefaultLang: true,
      fallbackLang: 'en',
      // configure HTTP loader prefix/suffix (loads /assets/i18n/en.json etc.)
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json'
      })
    })
  ]
};
