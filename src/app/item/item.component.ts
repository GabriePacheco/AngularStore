import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private ruta : ActivatedRoute) { }

  ngOnInit() {
  	let producto = this.ruta.snapshot.params['name']	;
  }

}
