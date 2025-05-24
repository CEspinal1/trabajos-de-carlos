import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  details: string | null = null;
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.details = params.get('vehicle');
      console.log(params.get('vehicle'))
    });
  }
}
