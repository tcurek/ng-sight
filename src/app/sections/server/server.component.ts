import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../../Models/server'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  @Input() server: Server;

  ngOnInit() {
  }

}
