import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { MyApp } from './app.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';
import { MediaProvider } from '../providers/media/media';
//import { AngularCropperjsModule } from 'angular-cropperjs';
@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      pageTransition: 'ios-transition'
    }),
    SuperTabsModule.forRoot(),
    HttpClientModule
    //AngularCropperjsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    MediaProvider
  ]
})
export class AppModule {}
