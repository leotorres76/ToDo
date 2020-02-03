//Toda vez que uma aplicação em angular inicia o arquivo main.ts é chamado, neste caso o main chamará o app.module que por sua vez irá chamar o app.component

import { enableProdMode } from '@angular/core'; //importa o core do node-modules e habilita modo de produção
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // importa do node-modules e possibilita o deploy em qualquer plataforma

import { AppModule } from './app/app.module'; //todo aplicativo angular precisa ao menos de um componente e um módulo, neste caso o compenente app e o app.module são o padrão do sistema (root module) e são importados de dentro do sistema => ´./´

import { environment } from './environments/environment'; // aqui são importadas as variáveis de ambiente de sistema.

if (environment.production) {
  enableProdMode(); // habilita o modo de produção desativando o modo de desenvolvimento e suas variáveis
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
