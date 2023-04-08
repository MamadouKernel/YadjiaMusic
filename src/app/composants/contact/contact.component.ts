import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap(): void {
    const uluru = { lat: -25.363, lng: 131.044 };
    const grayStyles = [
      {
        featureType: "all",
        stylers: [
          { saturation: -90 },
          { lightness: 50 }
        ]
      },
      { elementType: 'labels.text.fill', stylers: [{ color: '#ccdee9' }] }
    ];
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 5.4315049, lng: -4.0241782 }, 
      zoom: 9,
      styles: grayStyles,
      scrollwheel: false
    });
  }

}
