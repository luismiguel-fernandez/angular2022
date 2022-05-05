import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit(): void {
  }

  buyUpgrade() {
    this.game.buyUpgrade(0)
  }
  getNumberOf() {
    return this.game.getNumberOf(0)
  }
  getPrice() {
    return this.game.getPrice(0)
  }
}
