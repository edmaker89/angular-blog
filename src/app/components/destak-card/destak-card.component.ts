import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-destak-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './destak-card.component.html',
  styleUrl: './destak-card.component.css'
})
export class DestakCardComponent implements OnInit {
  @Input()
  photoCover: string = ""
  
  @Input()
  cardTitle: string = ""
  
  @Input()
  cardDescription: string = ""
  
  @Input()
  id:string="0"
  
  ngOnInit(): void {
    const result = dataFake.filter(value => value.type == "destak")[0]
    this.photoCover = result.photo
    this.cardTitle = result.title
    this.cardDescription = result.description
    this.id = String(result.id)
  }
}
