import { AbstractControl } from "@angular/forms";
import { AppUtilityService } from "./app-utility.service";


export class CustomValidators {
    static validatePercentage(global_utilities: AppUtilityService){
        return (control: AbstractControl) => {
            let result = null;
            let test_regex = global_utilities.regexes.percentage;
            if(!!control.value && (!test_regex.test(control.value) || control.value>100)){
                result = {
                    message: global_utilities.error_messages.validation.percentage
                };
            }

            return result;
        }
    }
}