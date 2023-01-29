import { Component, OnInit,  } from '@angular/core';
import {ContactServiveService} from './service/contact-servive.service'
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
// import Validation from '../utils/validation';





@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {


  userForm!: FormGroup;
  submitted = false;

   constructor(private contactservice :ContactServiveService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['',Validators.required],
      useremail: ['',  [Validators.required, Validators.email]],
      usermassage:[''],
      newsLetter: [false, Validators.requiredTrue]

    });

    data: this.userForm.value;


    //validation

  }

  createServiceContact = this.formBuilder.group({

  });


  submitForm() {
    console.log('Form Submitted with value: ', this.userForm.value);
    const data = {
      "username": this.userForm.value.username,
      "useremail": this.userForm.value.useremail,
      "usermassage": this.userForm.value.usermassage,
      "newsLetter": this.userForm.value.newsLetter

    }

    this.contactservice.contact_mail_post(data).then((response: any) => {
      alert(response);
    }).catch((error: any) => {
      console.log(error);
    })

    this.userForm.reset();
    this.submitted = true;



  }





  //validation
  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }


}
