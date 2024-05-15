import { SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink, SlicePipe],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
@Input() photoCover:string = 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png'
@Input() descriptionCard:string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia magni nemo illo magnam. Illum tempora nihil ipsum harum quo! Reiciendis maxime illo voluptate sequi laudantium commodi esse at harum eos!'
@Input() title:string = ''
@Input() id:string = "0"
}
