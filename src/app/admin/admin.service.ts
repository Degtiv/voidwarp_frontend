import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export interface Player {
    uuid: string
    username?: string
    isActive?: boolean
  }

@Injectable({providedIn: 'root'})
export class AdminService {
    private getAllPlayersUrl = environment.backendHost + "/api/v1/players/all";
    private deletePlayerUrl = environment.backendHost + "/api/v1/players/{{uuid}}/delete";
    
    constructor(private http: HttpClient) {}

    getAllPlayers(): Observable<HttpResponse<Player[]>> {
        const httpOptions = {
            observe: 'response' as 'response',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          }
      
          return this.http.post<Player[]>(this.getAllPlayersUrl, null, httpOptions)
    }

    deletePlayer(uuid: string): Observable<HttpResponse<Player>> {
        const httpOptions = {
            observe: 'response' as 'response',
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          }
      
          return this.http.post<Player>(this.deletePlayerUrl.replace("{{uuid}}", uuid), null, httpOptions)
    }
}