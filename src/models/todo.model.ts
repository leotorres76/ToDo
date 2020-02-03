//arquivo modelo de tipagem para a variável 'todos'(appComponent) onde cada item inserido na varíavel array deverá receber os atributos abaixo

export class Todo{ // o export aqui define que esta classe será pública
  constructor(
    public id: Number,
    public task: String,
    public done: Boolean,
  ) { /* não teremos método*/ }
}