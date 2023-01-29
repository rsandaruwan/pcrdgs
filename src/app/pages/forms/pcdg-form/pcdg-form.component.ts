import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormArray,AbstractControl,   } from '@angular/forms';
import {PcdgFormServiceService} from './service/pcdg-form-service.service'

@Component({
  selector: 'app-pcdg-form',
  templateUrl: './pcdg-form.component.html',
  styleUrls: ['./pcdg-form.component.scss']
})
export class PcdgFormComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    // firstCtrl: ['', Validators.required],
    pcdgFirstName: ['' ,Validators.required],
    pcdgNic: ['',[ Validators.required,  Validators.minLength(9), Validators.maxLength(13) ]],
    pcdgPostAddress :['' ,Validators.required],
    pcdgMobile:['',[ Validators.required,  Validators.minLength(9), Validators.maxLength(11) ]],
    pcdgMobileResident:[''],
    pcdgMobileOffice:[''],
    pcdgEmail:['',[Validators.required, Validators.email]],
  });
  secondFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
    pcdgQulification:['' ,Validators.required],
    pcdgQulification1:['' ,Validators.required],
    pcdgSpeciality:['',Validators.required],
    pcdgSLMCRegNo:['',Validators.required],
    pcdgFaxNo:[''],
    pcdgProposedBy:[''],
    pcdgSecondedBy:['']
  });


  isEditable = false;
  submitted = false;

  qulForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder,
    private pcdgFormService :PcdgFormServiceService, private formBuilder: FormBuilder) {
    this.qulForm = this.fb.group({
      qualification: this.fb.array([])
    });
   }

  ngOnInit(): void {
  }

  qualification(): FormArray {
    return this.qulForm.get("qualification") as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    console.log("Adding a employee");
    this.qualification().push(this.newEmployee());
  }



  qualificationSkills(empIndex: number): FormArray {
    return this.qualification()
      .get("skills") as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: "",
      exp: ""
    });
  }

  addqualificationSkill(empIndex: number) {
    this.qualificationSkills(empIndex).push;
  }

  removequalificationSkill(empIndex: number ) {
    this.qualificationSkills(empIndex);
  }

  pcdgNextForm(){
    this.submitted = true;

  }




  pcdgSubmitForm() {
    console.log('Form Submitted with value: ', this.firstFormGroup.value);
    const data = {
      "pcdgFirstName": this.firstFormGroup.value.pcdgFirstName,
      "pcdgNic": this.firstFormGroup.value.pcdgNic,
      "pcdgPostAddress": this.firstFormGroup.value.pcdgPostAddress,
      "pcdgMobile": this.firstFormGroup.value.pcdgMobile,
      "pcdgMobileResident": this.firstFormGroup.value.pcdgMobileResident,
      "pcdgMobileOffice": this.firstFormGroup.value.pcdgMobileOffice,
      "pcdgEmail": this.firstFormGroup.value.pcdgEmail,

      "pcdgQulification": this.secondFormGroup.value.pcdgQulification,
      "pcdgQulification1": this.secondFormGroup.value.pcdgQulification1,
      "pcdgSpeciality": this.secondFormGroup.value.pcdgSpeciality,
      "pcdgSLMCRegNo": this.secondFormGroup.value.pcdgSLMCRegNo,
      "pcdgFaxNo": this.secondFormGroup.value.pcdgFaxNo,
      "pcdgProposedBy": this.secondFormGroup.value.pcdgProposedBy,
      "pcdgSecondedBy": this.secondFormGroup.value.pcdgSecondedBy,

    }
    // this.contactservice.contact_mail_post(this.userForm.value);
    this.pcdgFormService.pcdg_mail_post(data).then((response: any) => {
      alert(response);
    }).catch((error: any) => {
      console.log(error);
    })

    this.firstFormGroup.reset();
    this.submitted = true;

  }

    //validation
    get f(): { [key: string]: AbstractControl } {
      return this.firstFormGroup.controls;
    }

    get f1(): { [key: string]: AbstractControl } {
      return this.secondFormGroup.controls;
    }

}
