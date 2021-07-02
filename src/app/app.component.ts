import { Component, Pipe, Directive, ElementRef, HostListener } from '@angular/core';

@Pipe({
  name: 'currencyWithoutDecimal'
})
export class currencyWithoutDecimalPipe {
  transform(val: string) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(Number(val));

  }
}


@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  monthlyIncome = "150000";
  monthlyExpense = "0";
  haveExistingLoan = true;
  repaymentTenure = 'yearly';
  existingLoanAmount!: number;

  updateLoan() {
    // Code here
  }

  updatedExpense() {
    // Code here
  }
}
