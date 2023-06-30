import { AfterViewInit, Component } from '@angular/core';
declare const google:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 13.020079835516702, lng: 80.14319401267578 },
      zoom: 10
    });

    // lat and long 13.020079835516702, 80.14319401267578

    const marker = new google.maps.Marker({
      position: { lat: 13.020079835516702, lng: 80.14319401267578 },
      map: map,
      title: 'Marker'
    });
  }
}