import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.css']
})
export class LeftpaneComponent implements OnInit {

  cookies = 0

  constructor() { }

  ngOnInit(): void {
  }

  addCookies() {
    this.cookies++
  }

}
