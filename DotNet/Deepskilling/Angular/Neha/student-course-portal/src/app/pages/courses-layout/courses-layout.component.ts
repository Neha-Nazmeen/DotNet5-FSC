// Hands-On 7, Step 72 — parent layout for the nested /courses routes
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class CoursesLayoutComponent {}
