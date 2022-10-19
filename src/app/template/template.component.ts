import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  un: any = "deeapli";
  ps: any = 12345;
  cp: any = 12345;
  em: any = "dmj@gmail.com";
  constructor() { }

  ngOnInit(): void {
  }
  onbtnsubmit(frm1: any) {

    // console.log("")
    // alert('form submitted');
    console.log(frm1.value);

  }
  onsubmitForm(frm: any) {
    console.log(frm.value);
    // console.log(fm.value.uname);

  }
}
