import {Injectable} from "@angular/core";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Observable, of} from "rxjs";


@Injectable()
export class WebSocketService {


  socketMessage$:Observable<any>;

  constructor() {
    this.socketMessage$ = of("string")
    this.socket3();
  }

  connect() {
    return Stomp.over(new SockJS(`http://localhost:8080/socket`));
  }

  socket3() {
    let stompClient = this.connect();
    stompClient.connect({}, frame => {

      stompClient.subscribe('/topic/notification/' + '6969', notifications => {
        this.socketMessage$ = of(notifications);
      })
    })
  }
}
