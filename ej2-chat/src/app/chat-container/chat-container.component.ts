import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  private chat = [
    {
        id: 0,
        author: "Luismi",
        text: "Hola, Fernando, qué tal con Symfony?",
        time: "19/01/2022 8:15",
        votes: 0
    },
    {
        id: 1,
        author: "Fernando",
        text: "Hey, pues ya sabes, voy en coche-cama",
        time: "19/01/2022 9:10",
        votes: 0
    },
    {
        id: 2,
        author: "Luismi",
        text: "Hazme una API REST para extraer datos de películas",
        time: "19/01/2022 9:28",
        votes: 0
    },
    {
        id: 3,
        author: "Fernando",
        text: "Mejor te hago un hospital y ya si eso te adaptas a mi BD",
        time: "19/01/2022 10:43",
        votes: 0
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  getMessages() {
    return this.chat
  }

  voteUpMsg(id:number) {
    this.chat[id].votes++
  }
}
