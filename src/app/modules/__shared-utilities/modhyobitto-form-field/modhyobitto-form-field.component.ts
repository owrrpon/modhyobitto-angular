import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modhyobitto-form-field',
  templateUrl: './modhyobitto-form-field.component.html',
  styleUrls: ['./modhyobitto-form-field.component.scss']
})
export class ModhyobittoFormFieldComponent implements OnInit, OnChanges {

  @Input() label!: string;
  @Input() required_error!: string;
           invalid_error: string = 'Please enter valid data.'; 
  @Input() placeholder!: string;
  @Input() maxlength!: string;
  @Input() type: string = "text";
  @Input() select_option_map: any;
           select_option_keys!: any[];
           required: boolean = false;

  //for form controls
  @Input() parent_FG!: FormGroup;
  @Input() control_name!: string;
           control!: AbstractControl;
  @Input() enddate_control_name!: string;

  constructor() { }

  ngOnInit(): void {
    this.control = this.parent_FG.get(this.control_name) as AbstractControl;

    //prepare the select options
    if(this.type == 'select'){
      this.select_option_keys = Object.keys(this.select_option_map);
    }

    //check if required validator
    if(!!this.control.validator){
      let validators = this.control.validator({} as AbstractControl);
      this.required = !!validators && !!validators.required;
    }

    //update the invalid error for date fields
    if(this.type == 'date' || this.type == 'daterange'){
      this.invalid_error = 'Please use MM/DD/YYYY format.';
    }
  }

  ngOnChanges(){
    //prepare the select options
    if(this.type == 'select'){
      this.select_option_keys = Object.keys(this.select_option_map);
    }
  }

}
