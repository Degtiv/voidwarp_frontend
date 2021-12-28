import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AdminService, Player } from './admin.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  players: Player[] = []

  constructor(private adminService: AdminService, public authService: AuthService) { }

  ngOnInit(): void {

  }

  getAllPlayers() {
      this.adminService.getAllPlayers().subscribe(players => {
        this.players = players.body as Player[]
      })
  }

  deletePlayer(uuid: string) {
      this.adminService.deletePlayer(uuid).subscribe(response => {
        this.players = this.players.filter(player => player.uuid != (response.body as Player).uuid)
      })
  }

}
