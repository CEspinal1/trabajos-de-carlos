import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private router: Router) { }
  cars = [
    {
      model: "Chevrolet Camaro",
      image: "https://back.chevrolet.com.do/wp-content/uploads/2019/04/2018-camaro-coupe-jelly-06-1.png",
      hp: 335,
      speed: 248,
      weight: 1550
    },
    {
      model: "Ford Mustang",
      image : "https://www.vdm.ford.com/content/dam/na/ford/en_us/images/mustang/2025/jellybeans/Ford_Mustang_2025_101A_PYZ_882_89W_13A_CON_64F_99H_44U_EBST_DEFAULT_EXT_4.png",
      hp: 450,
      speed: 276,
      weight: 1700
    },
    {
      model: "Dodge Viper",
      image : "https://platform.cstatic-images.com/xxlarge/in/v2/stock_photos/cc363c76-9b2d-4e05-9559-0b3a74fd7512/547fb3fc-593d-47fc-9b0b-17ec7e596f99.png",
      hp: 645,
      speed: 303,
      weight: 1490
    }
  ];

  changePage(vehicle:string) {
    this.router.navigate(['/details'], { queryParams: { vehicle: vehicle } });
  }
}