import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Batman'];
  heroeBorrado: string = '';
  
  borrarHeroe(): void {
    // const heroeBorradoAux = this.heroes.shift();
    // if (heroeBorradoAux){
    //   this.heroeBorrado = heroeBorradoAux;
    // } else {
    //   this.heroeBorrado = '';
    // }

    this.heroeBorrado = this.heroes.shift() || '';
}
  
}
