import { Component, OnInit,  } from "@angular/core";
import {FormBuilder, FormControl, Validators, AbstractControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {CcebdmServiceService} from './service/ccebdm-service.service'

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';




  // table 1
  export interface Education {
    qualification: string;
    college: string;
    year: string;

  }
  const ELEMENT_DATA: Education[] = [
    { qualification: '', college: '', year: ''}
  ];
// end
//  table 2
  export interface Other {
    position: string;
    hospital: string;
    duration: string;



  }

  const ELEMENT_DATA1: Other[] = [
    { position: '', hospital: '', duration: ''},
  ];
// end

interface Qualification {
  value: string;
  viewValue: string;
}


interface Year {
  value: string;
  viewValue: string;
}


interface Position {
  value: string;
  viewValue: string;
}


interface Duration {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-ccebdm',
  templateUrl: './ccebdm.component.html',
  styleUrls: ['./ccebdm.component.scss'],
})


export class CCEBDMComponent implements OnInit {

  table_data_array: Array<Education> = [];
  table_data_array1: Array<Other> = [];
  file:any;
  submitted = false;

  firstFormGroup = this._formBuilder.group({

    fullName: ['', Validators.required],
    otherSpecify:[''],
    Number :['', Validators.required],
    Street:['', Validators.required],
    City:['', Validators.required],
    MobileNumber:['', [ Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
    Email:['', [Validators.required, Validators.email]],
    dob:[''],
    attachments:[''],
    registrationNo:['', Validators.required ],
    registrarionDate:['', Validators.required ],
    private: false,
    governement: false,
    other: false,
    privatelast: false,
    governementlast: false,
    otherlast: false

  });

    secondFormGroup = this._formBuilder.group({

    qualification: [''],
    college: [''],
    year :[''],


  });

  thirdFormGroup = this._formBuilder.group({

    treatedMonth: [''],
    seenMonth: [''],
    profYear :[''],
  });

  forthFormGroup= this._formBuilder.group({

    position: [''],
    hospital: [''],
    duration :[''],
    newsLetterlast: false
  });

   isEditable = false;

  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder,
    private CcebdmServiceService :CcebdmServiceService, private formBuilder: FormBuilder ) {
  }



  onValueChange(file: File[]) {
    console.log("File changed!");
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue= value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter1(value: string): string[] {
    const filterValue1 = value.toLowerCase();


    return this.hospitals.filter(hospital => hospital.toLowerCase().includes(filterValue1));
  }

    //Auto complete
    myControl = new FormControl('');
    options: string[] = [
    'University of California San Francisco Parnassus Campus',
    'University of California San Francisco Parnassus Campus',
    'University of California San Francisco Parnassus Campus'
    ];
    filteredOptions: Observable<string[]>|any;

    myControl1 = new FormControl('');
    hospitals: string[] = [
      'Masuva Lanka Hospital',
      'Masuva Lanka Hospital22',
      'Masuva Lanka Hospital333'
      ];
    filteredOptions1: Observable<string[]>|any;




  // table

  displayedColumns: string[] = ['qualification', 'college', 'year'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns1: string[] = ['position', 'hospital', 'duration'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);


  //drop down
  selectedValue: string= "";

  qualifications: Qualification[] = [
    {value: 'a', viewValue: 'MSC'},
    {value: 'b', viewValue: 'BSC'},
    {value: 'c', viewValue: 'PHD'},
  ];

    //drop down
    selectedValue1: string= "";

    years: Year[] = [
      {value: '1', viewValue: '2019'},
      {value: '2', viewValue: '2020'},
      {value: '3', viewValue: '2021'},
    ];

    selectedValue2: string= "";

    positions : Position[] = [
      {value: 'a', viewValue: 'Physician'},
      {value: 'b', viewValue: 'Docter'},
      {value: 'c', viewValue: 'Nurse'},
    ];

      //drop down
      selectedValue3: string= "";

      durations: Duration[] = [
        {value: '1', viewValue: '1 Year'},
        {value: '2', viewValue: '2 Year'},
        {value: '3', viewValue: '3 Year'},
      ];


      onTermsUpload(event: any) {
        this.file = event.srcElement.files[0];
      }

      ccebdmNextForm(){
        this.submitted = true;

      }


      ccebdmSubmitForm() {


        var formdata = new FormData();
        console.log('Form Submitted with value: ', this.firstFormGroup.value);
        const data = {



        }

        var formdata = new FormData();
        formdata.append("attachments", this.firstFormGroup.value.attachments);
        formdata.append("attachments", this.file, this.file.path);  //name or path
        formdata.append("fullName", this.firstFormGroup.value.fullName)
        formdata.append("otherSpecify", this.firstFormGroup.value.otherSpecify);
        formdata.append("Number",  this.firstFormGroup.value.Number);
        formdata.append("Street", this.firstFormGroup.value.Street);
        formdata.append("City", this.firstFormGroup.value.City);
        formdata.append("MobileNumber", this.firstFormGroup.value.MobileNumber);
        formdata.append("Email", this.firstFormGroup.value.Email);
        formdata.append("dob", this.firstFormGroup.value.dob);
        formdata.append("registrationNo",  this.firstFormGroup.value.registrationNo);
        formdata.append("registrarionDate", this.firstFormGroup.value.registrarionDate);

        formdata.append("qualification", this.secondFormGroup.value.qualification);
        formdata.append("college", this.secondFormGroup.value.college);
        formdata.append("year", this.secondFormGroup.value.year);

        formdata.append("treatedMonth", this.thirdFormGroup.value.treatedMonth);
        formdata.append("seenMonth", this.thirdFormGroup.value.seenMonth);
        formdata.append("profYear", this.thirdFormGroup.value.profYear);

        formdata.append("position", this.forthFormGroup.value.position);
        formdata.append("hospital", this.forthFormGroup.value.hospital);
        formdata.append("duration", this.forthFormGroup.value.duration);

        formdata.append("private", this.firstFormGroup.value.private);
        formdata.append("governement", this.firstFormGroup.value.governement);
        formdata.append("other", this.firstFormGroup.value.other);

        formdata.append("privatelast", this.firstFormGroup.value.privatelast);
        formdata.append("governementlast", this.firstFormGroup.value.governementlast);
        formdata.append("otherlast", this.firstFormGroup.value.otherlast);

        formdata.append("newsLetterlast", this.forthFormGroup.value.newsLetterlast);






        this.CcebdmServiceService.ccebdm_mail_post(formdata).then((response: any) => {
          alert(response);

          console.log("========================="+formdata)



        }).catch((error: any) => {
          console.log(error);
        })

      }


//select value

AddSubmitForm(){
  var data:Education;
  data = {
    "qualification": this.secondFormGroup.value.qualification,
    "college": this.secondFormGroup.value.college,
    "year": this.secondFormGroup.value.year
    }

  console.log('Form Submitted with value: ', );

    this.table_data_array.push(data)
    this.dataSource = new MatTableDataSource(this.table_data_array);

    // this.firstFormGroup.reset();
    this.submitted = true;

}

  forthSubmitForm(){
    var data:Other;
    data = {
      "position": this.forthFormGroup.value.position,
      "hospital": this.forthFormGroup.value.hospital,
      "duration": this.forthFormGroup.value.duration
      }

    console.log('Form Submitted with value: ',data );

      this.table_data_array1.push(data)
      this.dataSource1 = new MatTableDataSource(this.table_data_array1);

  }

  get f(): { [key: string]: AbstractControl } {
    return this.firstFormGroup.controls;
  }

  onSubmit(): void {
    this.submitted = true;

  }


}

