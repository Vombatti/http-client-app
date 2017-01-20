import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  private vastaus: any = {};
  private apivastaus: any = [];
  private apivastaus2: any = [];

  constructor(private http: Http) { }

  private getJson(){
  this.http.get('tsconfig.json')
    .subscribe(
      (res:Response) =>  {
        const json =res.json();
      this.vastaus = json.compilerOptions;
      console.log(this.vastaus);
    }
  );
  }

  private getApi(){
    // Vantaan avoimet työpaikat Api http://gis.vantaa.fi/rest/tyopaikat/v1
    // HSL Api http://api.digitransit.fi/routing/v1/routers/hsl/
    this.http.get('http://gis.vantaa.fi/rest/tyopaikat/v1')
      .subscribe(
        (res:Response) =>  {
          const json =res.json();
          this.apivastaus = json;
          console.log(this.apivastaus);
        }
      );
  }

  private getApi2(){
    // Vantaan avoimet työpaikat Api http://gis.vantaa.fi/rest/tyopaikat/v1
    // HSL Api http://api.digitransit.fi/routing/v1/routers/hsl/
    this.http.get('http://api.digitransit.fi/routing/v1/routers/hsl/')
      .subscribe(
        (res:Response) =>  {
          const json =res.json();
          this.apivastaus2 = json;
          console.log(this.apivastaus2);
        }
      );
  }


  ngOnInit() {
    this.getJson();
    this.getApi();
    this.getApi2();
  }

}

