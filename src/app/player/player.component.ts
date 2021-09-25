import { Component } from "@angular/core";
import { PlayerService } from "./player.service";
import { Player } from "./player";

@Component({
    selector: "app-player",
    templateUrl: "player.component.html",
    styleUrls: ["player.component.css"]
})
export class PlayerComponent {
    players: Player[] = [];
    player: Player = new Player("", "", "")
    statuses: string[] = ["Offline", "Playing", "Invisible"]

    constructor(private playerService: PlayerService) {}

    addPlayer() {
        this.playerService.addPlayer(Player.copy(this.player));
    }

    ngOnInit() {
        this.players = this.playerService.getPlayers();
    }

    
}