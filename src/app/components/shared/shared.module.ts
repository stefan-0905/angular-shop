import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {NavigationComponent} from './navigation/navigation.component';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {CommonModule} from '@angular/common';
import {MyInfoComponent} from './navigation/social-information/my-info/my-info.component';
import {SocialAppsComponent} from './navigation/social-information/social-apps/social-apps.component';
import {SocialInformationComponent} from './navigation/social-information/social-information.component';
import {MainNavComponent} from './navigation/main-nav/main-nav.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent,
    NewsletterComponent,
    MyInfoComponent,
    SocialAppsComponent,
    SocialInformationComponent,
    MainNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    NewsletterComponent,
    MyInfoComponent,
    SocialAppsComponent,
    SocialInformationComponent,
    MainNavComponent,
    CommonModule
  ]
})
export class SharedModule {}
