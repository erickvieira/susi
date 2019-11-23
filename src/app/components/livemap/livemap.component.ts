import { susiMapStyle } from './../../models/constants';
import { Spot } from './../../models/spot';
/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, ElementRef, ViewChild, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'live-map',
  templateUrl: './livemap.component.html',
  styleUrls: ['./livemap.component.scss'],
})
export class LivemapComponent implements OnInit {

  @Input('img') srcImage: string;
  @Input('spots') spots: Array<Spot>;
  @Output('on-pin-click') onPinClick = new EventEmitter<Spot>();
  overlay: any = undefined;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  private readonly mapCenter = {lat: -16.6252368087954, lng: -49.26779433337401};

  markers: google.maps.Marker[] = [];

  constructor() {
    google.maps.event.addDomListener(window, 'load', () => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 13,
        // styles: susiMapStyle,
        center: this.mapCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        fullscreenControl: false,
        zoomControl: false,
        disableDefaultUI: true,
        disableDoubleClickZoom: true,
        streetViewControl: false
      });
      this.map.addListener('click', (e) => {
        console.log({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
      });
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.spots.forEach(s => {
        const marker = new google.maps.Marker({
          title: `${s.nome} - ${s.id}`,
          position: new google.maps.LatLng(s.coords[0], s.coords[1]),
          icon: `../../../assets/imgs/pins/pin${s.indicador || 0}.svg`,
        });
        marker.setMap(this.map);
        this.markers.push(marker);
        const onPinClick = this.onPinClick;
        const getClicked = (marker) => () => {
          const splited = `${marker.get('title')}`.split(' - ');
          const spot = this.spots.find(s => s.id === splited[splited.length - 1]);
          this.onPinClick.emit(spot);
        };
        google.maps.event.addListener(marker, 'click', (marker => {
          return getClicked(marker)
        })(marker));
      });
    }, 1000)
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes.spots.currentValue);
    // if (this.spots && changes.spots.currentValue !== changes.spots.previousValue) {
      // if (changes.spots.previousValue) {
      //   this.markers.forEach(m => {
      //     m.setMap(null);
      //   });
      //   this.markers = [];
      //   this.map.setCenter(this.mapCenter);
      //   this.map.setZoom(13);
      // }
    // }
  }

}
