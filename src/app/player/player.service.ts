import { Injectable, Optional } from "@angular/core";
import { LogService } from "../logging/log.service";
import { Player } from "./player";

@Injectable()
export class PlayerService {
    private players: Player[] = [new Player("a9b1c", "deg", "Offline"), new Player("011f9", "fyva", "Offline")]

    constructor(@Optional() private logService: LogService){}

    getPlayers(): Player[] {
        if (this.logService) this.logService.write("Getting all players");
        return this.players;
    }

    addPlayer(player: Player) {
        this.players.push(player);
        if (this.logService) this.logService.write("Adding new player: " + player.uuid + " " + player.username)
    }
}