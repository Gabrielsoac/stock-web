import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss'
})
export class InfoCard {
  @Input({required: true}) title!: string;
  @Input({required: true}) info!: string;
  @Input() description!: string;
  @Input ({required: true}) icon!: string;
  @Input() textColor: string = 'black';

  get pathIcon(){
    return `${this.icon}`;
  }
}
