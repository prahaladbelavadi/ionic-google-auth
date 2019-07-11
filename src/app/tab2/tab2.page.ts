import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  credentials;

  constructor(private googlePlus: GooglePlus) { }
  signin() {
    this.googlePlus.login({})
      .then(res => {
        this.credentials = res
      })
      .catch(err => console.error(err))
  }
}
