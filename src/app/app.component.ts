import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public todos: any[] = []; /*criamos uma variável públicado tipo any (pode ser uma string, number, boolean e etc) e array que receberá uma lista com cada todo(tarefa), esse array foi declarado como vazio se fosse apenas 'public todos: any[];' o retorno seria 'undefined'*/
  public mode = 'list';
  public todos: Todo[] = []; // aqui criamos novamente a variável 'todos' mas tipando com o model 'todo' também vazio
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;

  //usar o comando ctor+tab para gerar o construtor básico automaticamente
  constructor(private fb: FormBuilder) { //este construtor será chamado toda vez que iniciar o componente
    this.form = this.fb.group({ //crio o formulário com o formbuilder e uso validadores pro campo de input que recebera a tarefa(task)
      task: ['', Validators.compose([ // o primeiro campo é uma string que pode ser usada como placeholder e o segundo é para abrir um array de validadores
        Validators.minLength(3), // validador com qtd de caracteres mínimo
        Validators.maxLength(60), // validador com qtd de caracteres máximo
        Validators.required
      ])]
    });

    this.load(); //chama o metodo que carrega as informações do local storage

  }

  add(){
    const task = this.form.controls['task'].value; // armazeno a tarefa recebida pelo valor do input
    const id = this.todos.length +1; // vejo a qtd de índices no array e somo 1 para criar o novo id da tarefa
    this.todos.push(new Todo(id, task, false)); //insiro a tarefa do tipo Todo e passo os atributos
    this.save(); //chamo o método que persiste os dados em local storage
    this.clear(); //chamo o método clear para limpar formulário
  }

  clear(){
    this.form.reset(); // o reset é um método do FormBuilder para limpar o formulário
  }

  remove(todo: Todo){ //recebo o todo do binding de evento (click) do html 
    const index = this.todos.indexOf(todo); //capturo o índice desse todo (Que inicia em 0 se array estiver vazio é -1)
      if(index !== -1){
        this.todos.splice(index, 1);
      }else{
        this.todos = [];
      }
      this.save();
  }

  markAsDone(todo: Todo){ //recebo o todo do binding de evento (click) html
    todo.done = true; // declaro novo valor para a variável todo
    this.save();
  }

  markAsUndone(todo: Todo){ //recebo o todo do binding de evento (click) html
    todo.done = false; // declaro novo valor para a variável todo
    this.save();
  }

  save(){// método para persistir dados em local storage
    const data = JSON.stringify(this.todos); //armazeno a lista de 'todos' como JSON em formato STRING
    localStorage.setItem('todos',data) //armazeno a lista já convertida no local storage (key, value)
    this.mode = 'list'; //volta a variável mode pra 'list' para reexibir a lista após salvar a tarefa
  }

  load(){ //método para carregar as tarefas armazenadas no local storage
    const data = localStorage.getItem('todos'); //armazeno as tarefas do local storage
    if(data){
      this.todos = JSON.parse(data); // volto a lista  que está em formato STRING para o formato JSON e armazeno no array 'todos'
    }else{
      this.todos = [];
    }
  }

  changeMode(mode:string){ //recebo a string do html e altero o valor da variavel mode
    this.mode = mode;
  }

}
