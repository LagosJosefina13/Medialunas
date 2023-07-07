import{Component, OnInit } from '@angular/core';
import {Item} from '../models/item'; //creamos un import llamado Item
@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
items: Item []=[];
constructor() {}
ngOnInit(): void {
    this.items= [
        {
            id: 0,
            title: 'Medialunas',
            price: 10.5,
            quantity: 4,
            completed: false
        },
        {
            id: 0,
            title: 'Tarta Toffe',
            price: 3.5,
            quantity: 8,
            completed: true
        }
    ]
}
}