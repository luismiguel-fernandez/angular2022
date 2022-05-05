import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit(): void {
  }

  clickOnCookie() {
    //pedir al servicio que incremente mis cookies
    this.game.addCookies(1)
  }

}
