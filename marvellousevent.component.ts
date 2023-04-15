import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellousevent',
  templateUrl: './marvellousevent.component.html',
  styleUrls: ['./marvellousevent.component.css']
})
export class MarvellousEventComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public fun = "";

  public MarvellousEvent() {
    console.log('Marvellous Infosystems');
  }

  public MarvellousNewEvent() {
    this.fun = "Educating for better tomorrow";
  }

  public MarvellousEventInfo(value : any) {
    console.log(value);
  }
}


