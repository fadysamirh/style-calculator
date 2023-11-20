import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'style-calculator';
  designWidth = new FormControl('', [Validators.required]);
  designHeight = new FormControl('', [Validators.required]);
  actual = new FormControl('', [Validators.required]);
  font: string = '0';
  horizontal: string = '0';
  vertical: string = '0'

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  calculate() {
    if(this.designWidth.valid&&this.designHeight.valid&&this.actual.valid){
      this.font=((parseFloat(this.actual.value!)/parseFloat(this.designHeight.value!))*100).toFixed(2)
      this.vertical=((parseFloat(this.actual.value!)/parseFloat(this.designHeight.value!))*100).toFixed(2)
      this.horizontal=((parseFloat(this.actual.value!)/parseFloat(this.designWidth.value!))*100).toFixed(2)
    }
  }
}
