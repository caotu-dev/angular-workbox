import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeTab:number = 0;
  menuItems = [
    {id : 1, url : '/task', title : 'Tasks'},
    // {id : 2, url : '/trello', title : 'Trello'}
  ]
}
