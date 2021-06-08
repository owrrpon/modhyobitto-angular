import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppUtilityService } from 'src/app/app-utility.service';
import { CustomValidators } from 'src/app/app.validators';

@Component({
  selector: 'app-page-a1',
  templateUrl: './page-a1.component.html',
  styleUrls: ['./page-a1.component.scss']
})
export class PageA1Component implements OnInit {

  formfield_demo_form!: FormGroup;
  select_option_list = ['Option X', 'Option Y', 'Option Z'];

  @ViewChild('form_ref') ngForm_ref!: any;

  constructor(
    private global_utilities: AppUtilityService
  ) { }

  ngOnInit(): void {
    this.formfield_demo_form = new FormGroup({
      text: new FormControl(),
      required_text: new FormControl('',[Validators.required]),
      custom_required_text: new FormControl('',[Validators.required]),
      generic_validation: new FormControl('',[Validators.max(10)]),
      custom_validation: new FormControl('',[CustomValidators.validatePercentage(this.global_utilities)]),
      select: new FormControl(),
      date: new FormControl(),
      start_date: new FormControl(),
      end_date: new FormControl(),
      textarea: new FormControl(),
      checkbox1: new FormControl(false),
      checkbox2: new FormControl(false)
    });
  }

  resetDemoForm(){
    this.formfield_demo_form.reset();
  }

  initiateDemoSubmit(){
    //this.ngForm_ref.resetForm();
    this.formfield_demo_form.reset();
  }

}
