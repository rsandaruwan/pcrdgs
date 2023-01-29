import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



const baseUrl = "http://127.0.0.1:3000/pcrg";

@Injectable({
  providedIn: 'root'
})
export class PcrgFormServiceService {

  constructor(   private http: HttpClient,
    private router: Router,) { }

    async pcrg_mail_post(data: any) {

      console.log("Test function2")
      const customOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        })

      }
      return await new Promise((resolve, rejects) => {
        this.http.post(baseUrl , data , customOptions).subscribe((data: any) => {
          resolve(data);
          console.log('==================='+data)




          // this.cancelDialog();
        }, (error) => {
          if (error.status == 401) {
            localStorage.clear();
            this.router.navigate([''])
            // this.cancelDialog();
          } else {
            // this.cancelDialog();
          }
          rejects(error);
        })
      });
    }


}
