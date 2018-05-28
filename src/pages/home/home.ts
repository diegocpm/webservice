import { Component } from '@angular/core';
import { NavController, LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public feeds: Array<string>;
  private url: string = "https://www.reddit.com/new.json";  


  constructor(public navCtrl: NavController, public _http: Http, public loadingCtrl: LoadingController) {
    this.carregar();
  }

  carregar (){
    let loading = this.loadingCtrl.create({
      content: 'Carregando dados...'
    });

    loading.present();

    this._http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.data.children;
        //console.log(this.feeds);
        loading.dismiss();
      });  
  }

}
