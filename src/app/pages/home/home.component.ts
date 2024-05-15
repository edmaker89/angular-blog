import { Component } from '@angular/core';
import { HeroTitleComponent } from '../../components/hero-title/hero-title.component';
import { DestakCardComponent } from "../../components/destak-card/destak-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeroTitleComponent, DestakCardComponent, SmallCardComponent]
})
export class HomeComponent {

}