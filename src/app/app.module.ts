import { BrowserModule } from '@angular/platform-browser'; //esse app irá rodar via browser mas poderia ser mobile tanto faz
import { NgModule } from '@angular/core'; //importado para criação de módulos
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; //root component para fazer par com este root module

//trecho de código abaixo = metadata criado com @nome (o arroba identifica um decorator) é como uma classe e dentro suas informações
@NgModule({ //tudo declarado aqui será exportado para utilização em outro componente ou módulo
  declarations: [
    AppComponent //aqui são declarados os componentes utilizados neste módulo
  ],
  imports: [
    BrowserModule, //imports de extras que serão utilizados, neste módulo o app utilizará browser
    ReactiveFormsModule //import para trabalhar com formulários no angular
  ],
  providers: [], //aqui poderá ser extendidos as funcionalidades do módulo para outros componentes sem a necessidade de importar bastando adcionar os componentes que irão utilizar
  bootstrap: [AppComponent]
})
export class AppModule { }
