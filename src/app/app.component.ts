import { Component } from '@angular/core';
import { BonusAndHRAIncrement } from './custom-decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  salary: number = 0;

  @BonusAndHRAIncrement(20, 0) 
  calculateBonus() {
    return this.salary;
  }

  @BonusAndHRAIncrement(0, 10) 
  calculateHRA() {
    return this.salary;
  }

  @BonusAndHRAIncrement(20, 10)
  calculateBoth() {
    return this.salary;
  }

  onreset() {
    this.salary = 0;
  }
}
