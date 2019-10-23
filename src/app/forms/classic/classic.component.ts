import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  id = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id');
    });

    // this.id = +this.route.snapshot.queryParamMap.get('id');
    this.route.queryParamMap.subscribe((queryParamMap) => {
      this.id = +queryParamMap.get('id');
    });

  }

}
