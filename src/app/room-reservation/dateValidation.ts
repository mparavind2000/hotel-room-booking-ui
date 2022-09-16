import { AbstractControl } from '@angular/forms';

//date Validation
export function dateValidation (control: AbstractControl){

  if(control && (control.value != null || control.value != undefined)){

    const minDate2Control = control.value;
    const minDateControl = control.root.get('date');

    if(minDateControl){
      const date = minDateControl.value;

      if(date < minDate2Control || date === ''){
        return{
          isError: true
        };
      }

    }

  }

  return null;
}