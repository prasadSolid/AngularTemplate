import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {


  public status = '#10b507';
  public buttons = [
    { text: 'Away', icon: 'k-i-clock', color: '#f0c505' },
    { text: 'Available', icon: 'k-i-check-circle', color: '#10b507', selected: true },
    { text: 'Offline', icon: 'k-i-close-circle', color: '#707070' },
    { text: 'Do not disturb', icon: 'k-i-minus-circle', color: '#e30000' }
  ];
  private img = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/nancy.jpg';

  public selectedChange(e, btn) {
    this.status = btn.color;
  }

  public meals: Array<{ name: string; icon: string; selected?: boolean }> = [
    { name: 'Pizza', icon: '🍕', selected: true },
    { name: 'Sushi', icon: '🍣' },
    { name: 'Burger', icon: '🍔' }
];
public additions: Array<{ label: string }> = [{ label: 'Ketchup' }, { label: 'Mustard' }, { label: 'Мayonnaise' }];

public selectedMeal(meal: { name: string; icon: string }): void {
    switch (meal.name) {
        case 'Pizza':
            this.additions = [{ label: 'Ketchup' }, { label: 'Mustard' }, { label: 'Мayonnaise' }];
            break;
        case 'Sushi':
            this.additions = [{ label: 'Wasabi' }, { label: 'Ginger' }, { label: 'Soy sauce' }];
            break;
        case 'Burger':
            this.additions = [{ label: 'Onions' }, { label: 'Avocado' }, { label: 'Eggs' }];
            break;
    }
}

data: Array<any> = [{
  text: 'My Profile'
}, {
  text: 'Friend Requests'
}, {
  text: 'Account Settings'
}, {
  text: 'Support'
}, {
  text: 'Log Out'
}];

 // Built-in Kendo UI icon
 public icon = 'cog';
 public settings: Array<any> = [{
     text: 'My Profile'
 }, {
     text: 'Friend Requests'
 }, {
     text: 'Account Settings'
 }, {
     text: 'Support'
 }, {
     text: 'Log Out'
 }];

 // FontAwesome icon
 public iconClass = 'fa fa-cog fa-fw';

 // Image icon
 public imageUrl = 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png';
 public bookmarks: Array<any> = [{
     text: 'Show All'
 }, {
     text: 'Bookmark This Page'
 }, {
     text: 'Import'
 }, {
     text: 'Export'
 }];

// Split Button
public datasplitbutton: Array<any> = [{
  text: 'Keep Text Only',
  icon: 'paste-plain-text',
  click: () => { console.log('Keep Text Only'); }
}, {
  text: 'Paste as HTML',
  icon: 'paste-as-html',
  click: () => { console.log('Paste as HTML'); }
}, {
  text: 'Paste Markdown',
  icon: 'paste-markdown',
  click: () => { console.log('Paste Markdown'); }
}, {
  text: 'Set Default Paste',
  click: () => { console.log('Set Default Paste'); }
}];

public onPaste(): void {
  console.log('Paste');
}

 public imageSrc = 'https://demos.telerik.com/kendo-ui/content/shared/images/photos/4.jpg';

 public addToQueue(): void {
     console.log('Added to queue!');
 }







//  @ViewChild('contactslist') public list: AutoCompleteComponent;

 public contacts: Array<{ label: string, iconClass: string }> = [
     { label: 'Pedro Afonso', iconClass: 'k-chip-avatar pedro'},
     { label: 'Maria Shore', iconClass: 'k-chip-avatar maria' },
     { label: 'Thomas Hardy', iconClass: 'k-chip-avatar thomas' },
     { label: 'Christina Berg', iconClass: 'k-chip-avatar christina' },
     { label: 'Paula Wilson', iconClass: 'k-chip-avatar paula' }
 ];

 public selectedContacts: Array<any> = [this.contacts[1]];

 public valueChange(contact: string): void {
     if (contact === '') { return; }

     const contactData = this.contacts.find((c) => c.label === contact);

     if (!this.selectedContacts.includes(contactData)) {
         this.selectedContacts.push(contactData);
     }

    //  this.list.reset();
 }

//  public onRemove(e: ChipRemoveEvent): void {
//      console.log('Remove event arguments: ', e);
//      const index = this.selectedContacts.map(c => c.label).indexOf(e.sender.label);
//      this.selectedContacts.splice(index, 1);
//  }

  constructor() { }

  ngOnInit(): void {
  }

}
