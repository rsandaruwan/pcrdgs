import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';




const baseUrl = "http://127.0.0.1:3000/ccebdm";

@Injectable({
  providedIn: 'root'
})
export class CcebdmServiceService {

  constructor(   private http: HttpClient,
    private router: Router,) { }

    async ccebdm_mail_post(data: any) {
      console.log('==================='+data)
      console.log("Test function2")
      const customOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        })

      }
      return await new Promise((resolve, rejects) => {
        this.http.post(baseUrl, data).subscribe(
          (r)=>{console.log('got r', r)}
        )

      });
    }







}
