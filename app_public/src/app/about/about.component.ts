import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header : {
      title : 'About LOC8r',
      strapline : ''
    },
    content : 'LOC8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elite. Lorem. Loc8r was created to help people find places to sit down and get a bit of work done. Lorem ipsum dolor sit amet, consectetur adipiscing elite. Lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elite. ted to help people find places to sit down and get a bit ofm dolor sit amet, consectetur adipiscing elite. Lorem bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elite. Lorem. Loc8r was created to help people find places to sit down and get a bit of work done. Lorem ipsum dolor sit amet, consectetur adipiscing elite. Lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elite. ted to help people find places to sit down and get a bit ofm dolor sit amet, consectetur adipiscing bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elite. Lorem. Loc8r was created to help people find places to sit down and get a bit ofwork done. Lorem ipsum dolor sit amet, consectetur adipiscing elite. Lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elite. ted to help people find places to sit down and get a bit ofm dolor sit amet, consectetur adipiscing elite. Lorem bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elite. Lorem. Loc8r was created to help people find places to sit down and get a bit of work done. Lorem ipsum dolor sit amet, consectetur adipiscing elite. Lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elite. ted to help people find places to sit down and get a bit ofm dolor sit. '
  };
}