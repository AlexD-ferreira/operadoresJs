/* ==========================================================================
   EXERCÍCIO 1: FECHAMENTO DE VENDAS
   
   Uma cafeteria precisa apurar os números do dia.
   
   Dados:
   - Preço do café: 8.50 | Quantidade vendida: 42
   - Preço do bolo: 12.00 | Quantidade vendida: 18
   - Taxa operacional: 15.00
   - Clientes atendidos: 30
   - Total de cookies produzidos: 125 | Capacidade da caixa: 6 unidades

   Fórmulas para os cálculos:
   1. Faturamento Bruto = (preço café * quantidade) + (preço bolo * quantidade)
   2. Faturamento Líquido = faturamento bruto - taxa operacional
   3. Ticket Médio = faturamento bruto / total de clientes atendidos
   4. Sobra de Cookies = resto da divisão entre total de cookies e a capacidade da caixa

   Calcule e exiba os 4 resultados no console.
   ========================================================================== */

   let cafe = {
      "preco" : 8.50,
      "quantidade" : 42
   }
   let bolo = {
      "preco" : 12.00,
      "quantidade" : 18
   }

   let taxaOperacional = 15.00;

   let clientesAtendidos = 30;

   let cookies = {
      "produzidos" : 125,
      "caixas" : 6
   }
   let faturamentoBruto = (cafe.preco * cafe.quantidade) + (bolo.preco * bolo.quantidade);
   let faturamentoLiquido = faturamentoBruto - taxaOperacional;
   let ticketMedio = faturamentoBruto / clientesAtendidos;
   let sobraCookies = cookies.produzidos % cookies.caixas;

   console.log(`Faturamento Bruto : ${faturamentoBruto} \n Faturamento Liquido ${faturamentoLiquido} \n Ticket Medio ${ticketMedio} \n Sobras de Cookies ${sobraCookies}`);




/* ==========================================================================
   EXERCÍCIO 2: VALIDAÇÃO DE CADASTRO E COMPRA
   
   Um sistema precisa validar os dados de um pedido gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Idade informada: 17
   - Código digitado no formulário: "100" (texto)
   - Código registrado no banco: 100 (número)
   - Saldo disponível: 250.00
   - Valor da compra: 250.00

   Regras a verificar e exibir no console:
   1. O cliente atingiu a maioridade civil (18 anos)?
   2. O código digitado confere com o banco considerando apenas o valor?
   3. O código digitado confere com o banco considerando valor e tipo de dado?
   4. O tipo do dado digitado difere do tipo esperado no banco?
   5. O saldo do cliente cobre o valor da compra?
   ========================================================================== */
   let idade = 17;
   let codigoDigitalizado = "100";
   let codigoRegistrado = 100 ;
   let saldo = 250.00;
   let valorCompra = 250.00;

   let verificarIdade = idade >= 18 ;
   let vertificarValor = codigoDigitalizado == codigoRegistrado;
   let verificarValorTipo = codigoDigitalizado === codigoRegistrado;
   let tipoDiferente = codigoDigitalizado != codigoRegistrado;
   let saldoSuficiente = saldo >= valorCompra;

   console.log(`Maior de idade : ${verificarIdade} \nO codigo confere com o valor do banco : ${vertificarValor} \nO codigo confere com o valor e tipo do banco : ${
   verificarValorTipo}\nO tipo de dado são diferentes : ${tipoDiferente} \nO saldo da compra e sificiente: ${saldoSuficiente}`)


/* ==========================================================================
   EXERCÍCIO 3: CONCESSÃO DE BENEFÍCIOS
   
   Avalie a liberação de benefícios para o cliente gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Valor da compra: 220
   - Cliente é assinante premium: falso
   - Possui cupom promocional: verdadeiro
   - Endereço possui restrição de entrega: falso
   - Cliente é estudante: verdadeiro
   - Idade: 22

   Regras a verificar e exibir no console:
   1. Frete grátis: concedido para compras a partir de 200 reais ou para
      assinantes premium, desde que o endereço não tenha restrição de entrega.
   2. Desconto universitário: concedido para estudantes com até 29 anos de idade.
   3. Acesso à área VIP: liberado para assinantes premium, ou para compras a
      partir de 300 reais que possuam cupom promocional.
   ========================================================================== */

   let compra = 220;
   let assinaturaPremium = false;
   let cupom = true;
   let endereçoRestricao = false;
   let clienteEstudante = true;
   let clienteIdade = 22;

   let freteGratis = compra >= 200 || assinaturaPremium === true && endereçoRestricao === false;
   let descontoUniversitario = clienteEstudante && clienteIdade <= 29;
   let acessoVip = assinaturaPremium === true || compra >= 300 && cupom ;
   console.log(`Tem frente gratis : ${freteGratis} \nPossui desconto : ${descontoUniversitario} \nAcesso vip : ${acessoVip}`)