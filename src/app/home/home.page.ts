import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {
    // this.openBrowser()
  }

  openBrowser() {
    
    const browser = this.iab.create(
      'https://sdk-microsite.tsports.com/live/0/+8801744555555/gp/WWpOQk9Wb3pRVzFrVkRCeVQwUm5kMDFVWXpCT1JGVXhUbFJWTVU1VFdteGpSREI1VFVSSmVrMUVXWGRPUkVVelRsUnJNVTlSUFQwPQ==',
      // 'https://tsports.com/',
      // 'https://toffeelive.com/',
      // 'https://toffeelive.com/#video/07983a0e0b03d2c989d05f5d907ee2b3',
      '_blank', //_blank _self
      {
        location: 'no',
        hidden: 'no',
        toolbar: 'yes',
        toolbarposition: 'top',
        mediaPlaybackRequiresUserAction: 'yes',
        allowInlineMediaPlayback: 'yes',
      
      }
      );
  }

  


}
