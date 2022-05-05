import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit(): void {
  }

  getCookies() {
    return this.game.getCookies()
  }

  getCookiesPerSecond() {
    return this.game.getCookiesPerSecond()
  }

}
