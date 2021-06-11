import {Injectable} from "@angular/core";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";

export class WebSocketService {

  // TODO move all to constructor

  socketMessage$:Observable<any>;

  constructor(private webId: string) {
    this.socketMessage$ = new Observable((observer) => {
      let stompClient = Stomp.over(new SockJS(`http://localhost:8080/socket`));
      stompClient.connect({}, frame => {
        stompClient.subscribe('/topic/notification/' + webId, notifications => {
          observer.next(notifications);
        })
      })
    })
  }
}
