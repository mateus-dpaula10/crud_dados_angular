import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Componente1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_basic';
}
