SISTEMA ESCOLAR - PRIMEIRA VERSAO

1. Abra a pasta sistema-escolar no Visual Studio Code.
2. Instale a extensão Live Server (Ritwick Dey).
3. Abra js/supabase.js.
4. Substitua COLE_AQUI_A_URL_DO_PROJETO e COLE_AQUI_A_CHAVE_ANON_PUBLIC pelos dados do Supabase:
   Supabase > Project Settings > API (ou Data API, conforme a interface).
5. Salve os arquivos.
6. Clique com o botão direito em index.html e escolha Open with Live Server.

IMPORTANTE:
- Use somente a chave anon/public no navegador.
- NUNCA coloque a chave service_role no HTML, CSS ou JavaScript público.
- Esta primeira versão contém login e painéis iniciais. Os cadastros e o lançamento de notas serão implementados nas próximas etapas.
- O login atual usa e-mail e senha. A entrada por matrícula para alunos exige uma implementação adicional segura no servidor.

Banco esperado:
A aplicação espera a tabela public.perfis com as colunas id, nome e tipo,
conforme o banco criado anteriormente.
