import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destak-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './destak-card.component.html',
  styleUrl: './destak-card.component.css'
})
export class DestakCardComponent {
  @Input()
  photoCover: string = ""

  @Input()
  cardTitle: string = ""
  
  @Input()
  cardDescription: string = ""

  @Input()
  id:string="0"
}
