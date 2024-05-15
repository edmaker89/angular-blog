import { Component, OnInit } from '@angular/core';
import { HeroTitleComponent } from '../../components/hero-title/hero-title.component';
import { DestakCardComponent } from "../../components/destak-card/destak-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { dataFake } from '../../data/dataFake';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeroTitleComponent, DestakCardComponent, SmallCardComponent, MenuBarComponent]
})
export class HomeComponent implements OnInit{

    smallCards:any

    ngOnInit(): void {
        const result = dataFake.filter(value => value.type == 'small');
        this.smallCards = result
    }

}
