import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html'
})
export class HeaderComponent {
  
  dispatchThemeToggleSignal(): void {
    window.dispatchEvent(new CustomEvent('vault:toggle-theme'));
  }
}
