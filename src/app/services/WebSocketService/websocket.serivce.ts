import {Injectable} from "@angular/core";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';


@Injectable()
export class WebSocketService {

  constructor() { }

  connect() {
    let socket = new SockJS(`http://localhost:8181/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }
}
