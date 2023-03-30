import { Component } from '@angular/core';
import { Usuario } from 'src/shared/model/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social';
  usuario: Usuario;

  constructor(){
    this.usuario = new Usuario();
    this.usuario.nome = 'Guguinhaa';
  }
  enviar(): void{
    console.log('uiiii')

  }
}
