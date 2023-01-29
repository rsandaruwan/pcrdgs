import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import {PcrgFormServiceService} from './service/pcrg-form-service.service'


@Component({
  selector: 'app-pcrg-form',
  templateUrl: './pcrg-form.component.html',
  styleUrls: ['./pcrg-form.component.scss']
})
export class PcrgFormComponent implements OnInit {


  firstFormGroup = this._formBuilder.group({
    // firstCtrl: ['', Validators.required],
    pcrgFirstName: ['',Validators.required],
    pcrgNic: ['', [ Validators.required,  Validators.minLength(9), Validators.maxLength(13) ]],
    pcrgPostAddress :['',Validators.required],
    pcrgMobile:['',[ Validators.required,  Validators.minLength(9), Validators.maxLength(11) ]],
    pcrgMobileResident:[''],
    pcrgMobileOffice:[''],
    pcrgEmail:['',[Validators.required, Validators.email]],
  });
  secondFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
    pcrgQulification:['',Validators.required],
    pcrgSpeciality:['',Validators.required],
    pcrgSLMCRegNo:['',Validators.required],
    pcrgFaxNo:['',Validators.required],
    pcrgProposedBy:[''],
    pcrgSecondedBy:['']
  });
  isEditable = false;

  qulForm: FormGroup;
  submitted = false;

  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder,
     private pcrgFormService :PcrgFormServiceService, private formBuilder: FormBuilder) {
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

  pcrgNextForm(){
    this.submitted = true;

  }



  pcrgSubmitForm() {
    console.log('Form Submitted with value: ', this.firstFormGroup.value);
    const data = {
      "pcrgFirstName": this.firstFormGroup.value.pcrgFirstName,
      "pcrgNic": this.firstFormGroup.value.pcrgNic,
      "pcrgPostAddress": this.firstFormGroup.value.pcrgPostAddress,
      "pcrgMobile": this.firstFormGroup.value.pcrgMobile,
      "pcrgMobileResident": this.firstFormGroup.value.pcrgMobileResident,
      "pcrgMobileOffice": this.firstFormGroup.value.pcrgMobileOffice,
      "pcrgEmail": this.firstFormGroup.value.pcrgEmail,

      "pcrgQulification": this.secondFormGroup.value.pcrgQulification,
      "pcrgQulification1": this.secondFormGroup.value.pcrgQulification1,
      "pcrgSpeciality": this.secondFormGroup.value.pcrgSpeciality,
      "pcrgSLMCRegNo": this.secondFormGroup.value.pcrgSLMCRegNo,
      "pcrgFaxNo": this.secondFormGroup.value.pcrgFaxNo,
      "pcrgProposedBy": this.secondFormGroup.value.pcrgProposedBy,
      "pcrgSecondedBy": this.secondFormGroup.value.pcrgSecondedBy,

    }
    // this.contactservice.contact_mail_post(this.userForm.value);
    this.pcrgFormService.pcrg_mail_post(data).then((response: any) => {
      alert(response);
    }).catch((error: any) => {
      console.log(error);
    })

  }
      //validation
      get f(): { [key: string]: AbstractControl } {
        return this.firstFormGroup.controls;
      }

      get f1(): { [key: string]: AbstractControl } {
        return this.secondFormGroup.controls;
      }



}
