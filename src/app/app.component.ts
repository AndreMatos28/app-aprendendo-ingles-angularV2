import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelComponent } from "./panel/panel.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public jogoEmAndamento: boolean = true;
  public encerramento: string = '';

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.encerramento = tipo;
  }

  public reiniciar(): void {
    this.jogoEmAndamento = true;
    this.encerramento = '';
  }
}
