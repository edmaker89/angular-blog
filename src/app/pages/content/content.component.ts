import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photocover:string = ''
  contentTitle:string = ''
  contentDescription:string = ``
  id:string | null = "0"

  constructor (private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'));
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]
    this.photocover = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description
    console.log(result)
  }
}
