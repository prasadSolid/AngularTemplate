import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {
  
  public listItemsautocomplete: Array<string> = [
    'Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    'Bosnia & Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine',
    'United Kingdom',
    'Vatican City'
    ];
  public listItemsmultiselect: Array<string> = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];
  public value: any = ['Baseball'];
  public listItemscombobox: Array<string> = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];
  public listItemsdropdownlist: Array<string> = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];

  // Dropdown Tree
  // public datadt: any[] = [
  //   {
  //     textdt: 'Furniture', iddt: 1, itemsdt: [
  //       { textdt: 'Tables & Chairs', iddt: 2 },
  //       { textdt: 'Sofas', iddt: 3 },
  //       { textdt: 'Occasional Furniture', iddt: 4 }
  //     ]
  //   },
  //   {
  //     textdt: 'Decor', iddt: 5, itemsdt: [
  //       { textdt: 'Bed Linen', iddt: 6 },
  //       { textdt: 'Carpets', iddt: 7 }
  //     ]
  //   }
  // ];

  // MultiComboBox
  // public contacts: Contact[] = contacts;
  // public getContactImageUrl(contactId: string): string {
  //     return `https://www.telerik.com/kendo-angular-ui-develop/components/dropdowns/assets/contacts/${contactId}.jpg`;
  // }





  constructor() { }

  ngOnInit(): void {
  }

}
