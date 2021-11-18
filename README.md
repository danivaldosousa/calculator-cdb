<h1  align="center"> CALCULATOR CDB </h1>

<p  align="center"> Api de calculo do CDB - CDI </p>

<h1  align="center">

<a  href="https://nodejs.org/">🔗 NodeJS </a>

</h1>

<p  align="center">🚀 API para Cálculo de CDB baseado na data de investimento.</p>
<p  align="center">
<a  href="#instalar">Como Instalar</a> •
<a  href="#features">Features</a> •
<a  href="#tecnologias">Tecnologias</a> •
<a  href="#licença">Licença</a> •
<a  href="#autor">Autor</a>
</p>

### Instalar

<p> Faça o download do projeto para sua maquina via terminal com git clone https://github.com/danivaldosousa/calculator-cdb.git </p>

<p> Depois de baixado, acesse a pasta do projeto e rode o comando abaixo no terminal de sua maquina, e será instalado todas dependências do projeto.</p>

    yarn

<p> Para a criação da Base de dados em Sqlite execute o comando.</p>

    yarn prisma migrate dev

<p> Para o executar o programa em modo de desenvolvimento execute a linha abaixo.</p>

    yarn dev

<p> Para o executar o programa em modo de Produção crie a pasta .dist na raiz do projeto, e depois execute o comando abaixo.</p>

    yarn tsc

e depois

    yarn build

### Tecnologias

- [ ] NodeJS \*
- [ ] Typescript \*
- [ ] Express \*
- [ ] Os principios do SOLID
- [ ] Multer
- [ ] momentjs
- [ ] Swagger / Para documentação da API e teste em browse dos recursos.
- [ ] Prisma.io / ORM e gerenciador dos dados (SQlite, Postgres, Mysql, MongoDB)

### Features

- [x] Cadastro de Manual da CDI
- [x] Importação do Histórico das Taxas CDI
- [x] Calculo do CDB

### Recursos

## /cdi - Recurso para cadastro manual da CDI.

    http://localhost.3333/cdi

## /import - Recurso para importação da Lista Histórica de CDI e cadastro automatico na Banco de dados.

    http://localhost.3333/import

## /calculator - Recurso para calculo do CDB.

    http://localhost.3333/calculator

## /api-docs - Recurso para a documentação e teste dos recursos em browse.

    http://localhost.3333/api-docs

### Licença

MIT License

### Autor

<p> **Danivaldo Sousa** </p>

<img  src="https://img.shields.io/static/v1?label=Blog&message=DanivaldoSousa&color=7159c1&style=for-the-badge&logo=ghost"/>
