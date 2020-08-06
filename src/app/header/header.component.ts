import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuList: any[] = [
  {
    name: "FEATURES",
    childList: [{
      name: "PT MANAGEMENT",
      url: 'features',
    },
    {
      name: "eFORMS",
      url: 'features',
    },
    {
      name: "ANALYTICS",
      url: 'features',
    },
    {
      name: "REALISTIC LOAD TESTING",
      url: 'features',
    },
  {
    name:"SCRIPT DESIGN",
    url:'features'
  },
  {
    name:"SCRIPT DESIGN",
    url:'features'
  },]
  },
  {
    name: "PRODUCTS",
    childList: [{
      name: "PERFTRACK",
      url: 'home',
    },
    {
      name: "PERFANALYTICS",
      url: 'home',
    },{
      name: "LRAC",
      url: 'home',
    },
    {
      name: "LOGANALYSER",
      url: 'home',
    },
    {
      name: "NFR Validation",
      url: 'home',
    },
    {
      name: "JTest",
      url: 'home',
    }
  ]
  },
  {
    name: "REPORTS",
    url: 'home',
    childList: []
  }, {
    name: "CONTACT US",
    url: 'contactus',
    childList: []
  },
  {
    name: "EMPLOYEE",
    url: 'employee-create',
    childList: []
  }]

  constructor() { }

  ngOnInit() {
  }

}
