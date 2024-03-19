
# Integrar SFMC no Bitly

Como rastrear cliques a nível do assinante com parâmetro adicional nas mensagens SMS enviadas do Salesforce Marketing Cloud? Nesse exemplo, utilizamos o Bitly.

➡️ Para enviar o SMS, vamos utilizar AMPScript com a função HTTPPost para fazer a requisição e receber o link curto e parametrizado.

➡️ Uma CloudPage do tipo Code Resource (JSON) servirá como endpoint de webhook no Bitly, ela será responsável por receber o payload e armazená-lo em uma data extension.


## Bitly

Para rodar esse projeto, você vai precisar ter o token de acesso da API do Bitly. Ela pode ser obtida em ` Settings > API > Generate Token `.

Você também vai precisar o ID do grupo para enviar na requisição.

![Bitly](https://github.com/leokovaski/sfmc-api-bitly/blob/main/images/bitly-id-folder.png?raw=true)

Obs: Para configurar o Webhook, você precisa ter uma conta `Enterprise`.

Uma solução para quem não tem uma conta desse nível, é ter uma automação no Marketing Cloud consultando via API, de tempos em tempos, os dados de engajamento e armazenando em uma Data Extension.
## SFMC

#### Data Extension de retorno

Crie uma Data Extension com as seguintes as características abaixo. Ela será utilizada para armazenar os eventos enviados pelo Webhook do Bitly.

| Name   | Tipo | Tamanho |
| :---------- | :--------- | :--------- |
| `event_id` | `string` | ` 50 ` |
| `event_type` | `string` | ` 50 ` |
| `datetime` | `Date` |  |
| `url` | `string` | ` 250 ` |
| `bitlink` | `string` | ` 50 ` |
| `country` | `string` | ` 5 ` |
| `referrer` | `string` | ` 50 ` |
| `device_type` | `string` | ` 100 ` |
| `contact_key` | `string` | ` 150 ` |

#### CloudPage

Crie uma CloudPage do tipo **Code Resource** com o layout `JSON`.

![Bitly](https://github.com/leokovaski/sfmc-api-bitly/blob/main/images/chrome-capture-2024-3-19.gif?raw=true)

Por que usar recursos de código quando temos novos CloudPages no Web Studio e blocos de conteúdo de código no Content Builder? Um conjunto exclusivo de recursos torna os recursos de código insubstituíveis:

- O Code Resource possue sua própria URL. Isso significa que eles não são apenas um alicerce, mas podem funcionar sozinhos como um ativo da web. Isso também significa que eles podem ser vinculados e chamados de API como qualquer outro site.

- Ao contrário das Cloud Pages, o Code Resource não têm estruturas HTML anexadas automaticamente pelo Marketing Cloud. Ele permite que você tenha controle total sobre o que é retornado pelo recurso de código.

- Ao contrário dos arquivos hospedados externamente, você pode aproveitar as soluções programáticas SFMC - SSJS e AMPScript - para fornecer uma lógica de back-end aos seus recursos de código.

- Finalmente, ao contrário do Cloud Pages, **não há custo associado** ao carregamento de um recurso de código.

Essa combinação torna o Code Resources perfeito para vários casos de uso - dos básicos aos complexos.
## Códigos

 - [AMPScript do SMS](https://github.com/leokovaski/sfmc-api-bitly/blob/main/AMPScript_SMS)
 - [SSJS do Code Resource](https://github.com/leokovaski/sfmc-api-bitly/blob/main/SSJS_CodeResource.js)

## Observação

Os scripts acima são bases para entender como funciona e a possibilidade que tem de unir as duas soluções para obter um novo KPI de mensuração em mensagens SMS. Como incremento, pode-se adicionar também dados de UTMs ou outros parametros para enriquecer esse resultado.

Muito obrigado, espero ter ajudado. 🙅🏻‍♂️
## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leokovaski/)
