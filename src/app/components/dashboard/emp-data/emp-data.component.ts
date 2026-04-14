import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
// employeeForm (FormGroup)
// │
// ├── basicInfo (FormGroup)
// │     ├── firstName
// │     ├── lastName
// │     ├── email
// │     └── phone
// │
// ├── emergencyContact (FormGroup)
// │
// ├── addresses (FormArray)
// │     ├── FormGroup (address1)
// │     ├── FormGroup (address2)
// │
// └── skills (FormArray)
//       ├── FormGroup (skill1)
//       ├── FormGroup (skill2)
export class EmpDataComponent implements OnInit{
  employeeForm!: FormGroup;
    constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
      this.addSkill();

  }

  createForm() {
    this.employeeForm = this.fb.group({
        basicInfo: this.fb.group({
          firstName: [''],
          lastName: [''],
          email: [''],
          phone: ['']
        }),

        emergencyContact: this.fb.group({
          name: [''],
          relation: [''],
          contact: ['']
        }),

        addresses: this.fb.array([]),

        skills: this.fb.array([])   // IMPORTANT
      });
    // this.employeeForm = this.fb.group({

    //   basicInfo: this.fb.group({
    //     firstName: ['', Validators.required],
    //     lastName: ['', Validators.required],
    //     email: ['', [Validators.required, Validators.email]],
    //     phone: ['']
    //   }),

    //   emergencyContact : this.fb.group({
    //     name: ['', Validators.required],
    //     relationship: ['', Validators.required],
    //     phone: ['', Validators.required]
    //    }),
       
    //   addresses: this.fb.array([]),

    //   skills: this.fb.array([]),

    // });
    }

     // Address FormArray
  get addresses(): FormArray {
    return this.employeeForm.get('addresses') as FormArray;
  }


  addAddress() {
    const addressForm = this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    });
    this.addresses.push(addressForm);
  } 

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

    get skills():FormArray{
    return this.employeeForm.get('skills') as FormArray;
  }

addSkill() {
    const skill = this.fb.group({
      skillName: [''],
      experience: ['']
    });

    this.skills.push(skill);
    console.log(skill);
  }
   removeSkill(index: number) {
    this.skills.removeAt(index);
  }


  submitForm() {
    console.log(this.employeeForm.value);
  }
}
