import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appOnlyText]',
  standalone: true,
})
export class OnlyTextDirective {
  element: ElementRef<HTMLInputElement> = inject(ElementRef);
  private ngModel = inject(NgModel)

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const regex = /^[a-zA-Z\s]*$/;
    const value = inputElement.value;


    if (!regex.test(value)) {
      const cleanValue = value.replace(/[^a-zA-Z\s]/g, '');
      inputElement.value = cleanValue

      if (this.ngModel) {
          this.ngModel.control.setValue(cleanValue);
      }
    }
  }
}
