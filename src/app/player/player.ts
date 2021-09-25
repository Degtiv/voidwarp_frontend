export class Player {
    constructor(public uuid: string, public username: string, public status: string) {}
    
    static copy(player: Player): Player{
        return new Player(player.uuid, player.username, player.status)
    }
}