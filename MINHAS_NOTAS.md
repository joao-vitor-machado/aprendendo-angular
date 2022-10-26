## Coisas importantes para rodar o projeto:
- Como estou usando o nvm para gerenciar as versões do node é uma boa ideia verificar se estou na versão correta
- Se estiver na versão correta eu devo verificar se nessa versão a cli do angular está instalada

- O index.html redireciona para o app-root, que será o app.component
- No angular nós temos uma configuração de prefixo que todos os componentes devem seguir. No caso desse projeto o prefixo configurado é o "app"
- No angular nós temos sistemas de módulos. Cada componente deve ser parte de um módulo, que estão no arquivo app.module.ts
- No angular nós temos APIs que vão fornecer as ferramentas para interagir com os dados na DOM sem precisar usar o Javascript diretamente:
  - (nada) => evento
  - [nada] => propriedade de exibição. Note que na DOM ela pode até mudar mas a camada de dados não aceita a mudança
  - [(nada)] => propriedade que poderá ser alterada

- É bom tomar cuidado ao usar o EventEmitter porque o VsCode ou a IDE em questão poderia importar automaticamente o EventEmitter do módulo "stream". Garanta que o EventEmitter que você tem acesso é o do @angular/core

- Podemos iterar na view usando a propriedade ngFor
- Podemos utilizar as propriedades pipe "|" para definir formatos de data e de moeda. Para isso é necessário importar os modulos necessários para isso e adicionar nos providers. Tudo isso no arquivo app.module.ts

- Podemos usar Ifs dentro das árvores de componentes HTML utilizando ngIf. E podemos referenciar a rendenização condicional utilizando um componente criado usando o ng-template e dando um #<nome> pra ele

