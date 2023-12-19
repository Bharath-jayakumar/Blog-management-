import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BlogService } from '../../service/blog-service.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent {
  url: string = "/client/home";
  userName: string = '';
  constructor(
    private blogService: BlogService,
    private router: Router
  ) {
    if (this.blogService.getUserName() !== null) {
      this.userName = this.blogService.getUserName();
    }
}
}