import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteComponent } from './components/componente/componente.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_basic';
}
