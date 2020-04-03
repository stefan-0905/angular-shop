import {Component, OnInit} from '@angular/core';
import {PersonalInfo} from '../../../../../models/navigation/Personalnfo.model';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
  personalInformation: PersonalInfo[];
  constructor() {
    const mail = new PersonalInfo(
      'info@shopy.com',
      '#',
      'fa fa-envelope-o'
    );
    const phone = new PersonalInfo(
      '453-5553-996',
      '#',
      'fa fa-phone'
    );
    this.personalInformation = [ mail, phone ];
  }

  ngOnInit(): void {
  }

}


