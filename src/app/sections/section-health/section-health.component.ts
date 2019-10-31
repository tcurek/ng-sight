import { Component, OnInit } from '@angular/core';
import { Server } from '../../Models/server'

const Sample_Servers: Server[] = [
  {id:1, name:"dev", isOnline:true},
  {id:1, name:"test", isOnline:true},
  {id:1, name:"stage", isOnline:false},
  {id:1, name:"prod", isOnline:true}
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = Sample_Servers;

  ngOnInit() {
  }

}
