import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input('url') url: string;
  constructor() { }

  ngOnInit() {
  }
  onError() {
    this.url = "http://img.bitscn.com/upimg/allimg/c160120/1453262W253120-12J05.jpg";
  }
}
