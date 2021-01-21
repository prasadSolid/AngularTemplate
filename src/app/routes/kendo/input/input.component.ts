import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {


  public valueEditor = `
        <p>
            The Kendo Angular UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
            In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks and lists.
            The widget <strong>outputs identical HTML</strong> across all major browsers, follows
            accessibility standards, and provides API for content manipulation.
        </p>
        <p>Features include:</p>
        <ul>
            <li>Text formatting</li>
            <li>Bulleted and numbered lists</li>
            <li>Hyperlinks</li>
            <li>Cross-browser support</li>
            <li>Identical HTML output across browsers</li>
        </ul>
    `;
    
    
  // Color picker
  public preventOpen: boolean;
    public preventClose: boolean;

    public handlePreventableEvent(eventName: string, eventArgs: Event, shouldPrevent: boolean): void {
        if (shouldPrevent) {
            eventArgs.preventDefault();
            console.log(`${eventName} prevented`);

            return;
        }

        console.log(eventName);
    }

    public log(eventName: string, eventArgs: any): void {
        console.log(eventName, eventArgs);
    }
    
  // MaskedTextBox 
  public value = '359884123321';
  public mask = '(999) 000-00-00-00';

  // numeric Textbox
  public autoCorrect = false;
  public valuenumerictextbox = 5;
  public percentage = 0.7;
  public formatOptions: any = {
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'name'
  };

  // Slider
  public valueHorizontal = 0;
  public valuesVertical: number[] = [10, 5, 0, 10, 15];
  public min = -20;
  public max = 20;
  public largeStep = 20;
  public smallStep = 1;
  
  // Range Slider
  public valuerangeslider: [number, number] = [50, 100];
  public minrangeslider = 0;
  public maxrangeslider = 200;
  public largeSteprangeslider = 2;
  public smallSteprangeslider = 20;
  public verticalrangeslider = true;
  // orientation  
  public vertical = true;
  public valueorientation: [number, number] = [3, 5];
  public minorientation = 0;
  public maxorientation = 10;
  public largeSteporientation = 2;

  // Switch
  public checked = true;

 





  constructor() { }

  ngOnInit(): void {
  }

}
