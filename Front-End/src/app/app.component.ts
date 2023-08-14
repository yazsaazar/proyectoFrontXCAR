/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  private idiomas: Array<string>;

  constructor(private analytics: AnalyticsService, private seoService: SeoService, public translate: TranslateService) {
    this.translate.addLangs(['es', 'en'])
    this.translate.setDefaultLang('es');
    //this.translate.use(this.translate.getBrowserLang());

  }
  

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }


}
