import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-title',
  standalone: true,
  imports: [],
  templateUrl: './hero-title.component.html',
  styleUrls: ['./hero-title.component.css' ,'./hero-title.responsive.component.css']
})
export class HeroTitleComponent {
title: string= 'Marvel News'

}
