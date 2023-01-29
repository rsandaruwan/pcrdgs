
import { Component, OnInit,  } from "@angular/core";
import {FormBuilder, Validators, FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


  // table 1
  export interface Education {
    qualification: string;
    college: string;
    year: string;

  }

  const ELEMENT_DATA: Education[] = [
    { qualification: 'MBBS', college: 'University of California San Francisco Parnassus Campus', year: '1998'},
    { qualification: 'MBBS', college: 'University of California San Francisco Parnassus Campus', year: '1998'},
    { qualification: 'MBBS', college: 'University of California San Francisco Parnassus Campus', year: '1998'},

  ];
// end

  // table 1
  export interface Other {
    position: string;
    organization: string;
    duration: string;

  }

  const ELEMENT_DATA1: Other[] = [
    { position: 'Physician', organization: 'Masuva Lanka Hospital', duration: '2 years'},
    { position: 'Physician', organization: 'Masuva Lanka Hospital', duration: '2 years'},
    { position: 'Physician', organization: 'Masuva Lanka Hospital', duration: '2 years'},

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
  selector: 'app-copd',
  templateUrl: './copd.component.html',
  styleUrls: ['./copd.component.scss']
})
export class CopdComponent implements OnInit {
 //Auto complete
 myControl = new FormControl('');
 options: string[] = ['University of California San Francisco Parnassus Campus',
  'University of California San Francisco Parnassus Campus',
   'University of California San Francisco Parnassus Campus'];
 filteredOptions: Observable<string[]>|any;

 myControl1 = new FormControl('');
 options1: string[] = ['Masuva Lanka Hospital',
  'Masuva Lanka Hospital22',
   'Masuva Lanka Hospital333'];
 filteredOptions1: Observable<string[]>|any;





 firstFormGroup = this._formBuilder.group({
   firstCtrl: [''],
 });
 secondFormGroup = this._formBuilder.group({
   secondCtrl: [''],
 });
 isEditable = false;

 constructor(private _formBuilder: FormBuilder ) {
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
   const filterValue = value.toLowerCase();

   return this.options.filter(option => option.toLowerCase().includes(filterValue));
 }

 private _filter1(value: string): string[] {
   const filterValue1 = value.toLowerCase();

   return this.options1.filter(option => option.toLowerCase().includes(filterValue1));
 }

 // table

 displayedColumns: string[] = ['qualification', 'college', 'year'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);

 displayedColumns1: string[] = ['position', 'organization', 'duration'];
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

     // firstSelectValue = 'one';
     // secondSelectValue = null;

     // get firstSelectOptions(){
     //   return this.options.map(({value})=> value);
     // }

     // get secondSelectOptions() {
     //   return (this.qualifications.find(({value}) => value === this.firstSelectValue)).viewValue
     // }



}
