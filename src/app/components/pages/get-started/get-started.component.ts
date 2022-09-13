import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  title = 'Get started';
  date = Date.now();
  imageUrl = 'https://picsum.photos/200';
  imageDescription = "Image description"
  buttonDisable = true;
  tab = [ "1","2","3" ];

  constructor() { }

  ngOnInit(): void {
  }

  clickMe() : void {
    alert('clicked !');
  }

  toggleButtonStatus() : void {
    this.buttonDisable = !this.buttonDisable;
  }
}
