# Mostrar o perfil do usuário



##  Function Request: 

    #### Mostrar os dados sobre o usuário cadastrado.

    #### Mostra um feed das postagens que o usuário fez (incluindo republicações e postagens de citações), começando com as últimas 5 postagens. 

    #### As postagens mais antigas são carregadas sob demanda sem retornando 5 por vez.

    #### Visualizar se sou seguidor desse usuário ou não.

    #### Seguir um usuário

    #### Deixar de seguir um usuário

    #### Fazer uma nova postagem 

## Function not Requested:
 -  Usar Express
 -  Usar Prisma (ORM)
 -  Usar Postgresql

## Business Rule

    #### Não criar CRUD para usuário

    #### Cada usuário deve ter no maximo 14 caracteres para seu nome.

    #### Utilizar apenas alfanumericos podem ser usados para o nome.

    #### Não criar autenticação

    #### Verificar quantas postagem foram feitas no dia para cada usuário;

    #### Usuário não podem fazer mais de 5 postagens no dia;

    #### A listagem de post por usuario deve vir em uma paginação sempre retornando 5 posts por vez;

    #### Os usuários não pode seguir eles mesmo.
 
    #### Usuários podem seguir outros usuários.