const promptsData = {
    areas: {
        civil: {
            nome: "Cível",
            objetos: {
                relatorio_processos: {
                    nome: "Relatório de processos judiciais",
                    ias: {
                        googleair: {
                            prompt: `Você receberá um processo Judicial cível em formato de arquivo .pdf para elaboração de relatório detalhado. Sua função será descrever todos os acontecimentos do processo, desde juntada de petição incial (informando o que consta dessas peças) até o último ato, fazendo um resumo dos seguintes atos processuais:

1 - petição inicial: descreva com síntese dos fatos e pedidos;

2 - citação: informe se houve e a data que o réu foi devidamente citado;

3 - Audiência de conciliação: informe se houve designação de audiência e se ambas as partes compareceram;

4 - contestação: mencionane se houve resistência a todos os pedidos ou se o autor se manteve inerte em relação a algum deles, descrevendo qual foi o pedido não contestado;

5 - perícia: informe se houve, qual a sua natureza e seus achados;

6 - Estudo psicossocial: mencione qual a conclusão chegada pela equipe multidisciplinar;

7 - Eventual juntada de documentos: Caso ocorra juntada de documentos e perícias no decorrer do processo, você deve informar isso em seu relatório, trazendo o resumo do documento e suas conclusões;

8 - Informações da audiência de instrução e julgamento: Você deve informar se houve e quais foram os atos realizados durante a audiência, tais como oitiva de testemunhas, interrogatório do acusado, dentre outras.

9 - Observações IMPORTANTES: 
9.1 - Não invente nenhum documento ou fato.
9.2 - Mantenha-se estritamente dentro das informações fornecidas no processo.
9.3 - Utilize linguagem jurídica apropriada e precisa.
9.4 - Se houver questões complexas ou controversas, indique-as claramente.
9.5 - Sempre que mencionar algum ato ou documento do processo, mencione seu respectivo ID.

10 - Formatação: 
10.1 - Utilize estrutura clara com tópicos e subtópicos para facilitar a leitura.
10.2 - Use numeração ou marcadores para listar argumentos e pedidos. todos os atos do processo, inclusive com síntese das manifestação da acusação e da defesa.`,
                            video: "UnH5aCZXCPc"
                        },
                        chatgpt: {
                            prompt: `Você receberá um processo Judicial cível em formato de arquivo .pdf para elaboração de relatório detalhado. Sua função será descrever todos os acontecimentos do processo, desde juntada de petição incial (informando o que consta dessas peças) até o último ato, fazendo um resumo dos seguintes atos processuais:

1 - petição inicial: descreva com síntese dos fatos e pedidos;

2 - citação: informe se houve e a data que o réu foi devidamente citado;

3 - Audiência de conciliação: informe se houve designação de audiência e se ambas as partes compareceram;

4 - contestação: mencionane se houve resistência a todos os pedidos ou se o autor se manteve inerte em relação a algum deles, descrevendo qual foi o pedido não contestado;

5 - perícia: informe se houve, qual a sua natureza e seus achados;

6 - Estudo psicossocial: mencione qual a conclusão chegada pela equipe multidisciplinar;

7 - Eventual juntada de documentos: Caso ocorra juntada de documentos e perícias no decorrer do processo, você deve informar isso em seu relatório, trazendo o resumo do documento e suas conclusões;

8 - Informações da audiência de instrução e julgamento: Você deve informar se houve e quais foram os atos realizados durante a audiência, tais como oitiva de testemunhas, interrogatório do acusado, dentre outras.

9 - Observações IMPORTANTES: 
9.1 - Não invente nenhum documento ou fato.
9.2 - Mantenha-se estritamente dentro das informações fornecidas no processo.
9.3 - Utilize linguagem jurídica apropriada e precisa.
9.4 - Se houver questões complexas ou controversas, indique-as claramente.
9.5 - Sempre que mencionar algum ato ou documento do processo, mencione seu respectivo ID.

10 - Formatação: 
10.1 - Utilize estrutura clara com tópicos e subtópicos para facilitar a leitura.
10.2 - Use numeração ou marcadores para listar argumentos e pedidos. todos os atos do processo, inclusive com síntese das manifestação da acusação e da defesa.`,
                            video: "UnH5aCZXCPc"
                        },
                        claude: {
                            prompt: `Você receberá um processo Judicial cível em formato de arquivo .pdf para elaboração de relatório detalhado. Sua função será descrever todos os acontecimentos do processo, desde juntada de petição incial (informando o que consta dessas peças) até o último ato, fazendo um resumo dos seguintes atos processuais:

1 - petição inicial: descreva com síntese dos fatos e pedidos;

2 - citação: informe se houve e a data que o réu foi devidamente citado;

3 - Audiência de conciliação: informe se houve designação de audiência e se ambas as partes compareceram;

4 - contestação: mencionane se houve resistência a todos os pedidos ou se o autor se manteve inerte em relação a algum deles, descrevendo qual foi o pedido não contestado;

5 - perícia: informe se houve, qual a sua natureza e seus achados;

6 - Estudo psicossocial: mencione qual a conclusão chegada pela equipe multidisciplinar;

7 - Eventual juntada de documentos: Caso ocorra juntada de documentos e perícias no decorrer do processo, você deve informar isso em seu relatório, trazendo o resumo do documento e suas conclusões;

8 - Informações da audiência de instrução e julgamento: Você deve informar se houve e quais foram os atos realizados durante a audiência, tais como oitiva de testemunhas, interrogatório do acusado, dentre outras.

9 - Observações IMPORTANTES: 
9.1 - Não invente nenhum documento ou fato.
9.2 - Mantenha-se estritamente dentro das informações fornecidas no processo.
9.3 - Utilize linguagem jurídica apropriada e precisa.
9.4 - Se houver questões complexas ou controversas, indique-as claramente.
9.5 - Sempre que mencionar algum ato ou documento do processo, mencione seu respectivo ID.

10 - Formatação: 
10.1 - Utilize estrutura clara com tópicos e subtópicos para facilitar a leitura.
10.2 - Use numeração ou marcadores para listar argumentos e pedidos. todos os atos do processo, inclusive com síntese das manifestação da acusação e da defesa.`,
                            video: "UnH5aCZXCPc"
                        }
                    }
                },
                degravacao_videos: {
                    nome: "Degravação de vídeos",
                    ias: {
                        googleair: {
                            prompt: `Objetivo: Transcrever fielmente a audiência criminal presente no vídeo, sem inventar falas, e gerar um resumo detalhado ao final.

Formato da Transcrição:

- Estrutura: Cada fala deve ser precedida pelo tempo exato (HH:MM:SS) em que se inicia no vídeo e pela identificação da pessoa que está falando (ex.: Juiz, Promotor, Advogado de Defesa, Réu, Testemunha 1).
   
- Fidelidade: A transcrição deve ser 100% fiel ao áudio do vídeo, incluindo hesitações, interrupções, falas simultâneas e trechos incompreensíveis (nestes casos, indicar: [inaudível]). Não invente falas ou altere o conteúdo original.
   
- Pontuação: Utilize pontuação adequada para garantir a clareza e legibilidade da transcrição.
   

Exemplo:

00:00:12 - Juiz: Bom dia a todos. Declaro aberta a audiência de instrução e julgamento do processo número [número do processo].

00:00:25 - Promotor: Excelência, o Ministério Público está presente.

Resumo Detalhado:

Após a transcrição completa, gere um resumo detalhado contendo as seguintes informações:

- Identificação do Processo: Número do processo, data da audiência, nome completo do réu e crime pelo qual é acusado.
   
- Presentes: Listar todos os participantes da audiência (Juiz, Promotor, Advogado de Defesa, Réu, Testemunhas etc.)
- Resumo detalhado: Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- - Resumo detalhado das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.
   
Observações:

- Utilize linguagem formal e objetiva.
   
- Mantenha a neutralidade ao relatar os fatos e argumentos apresentados durante a audiência.
   

Resultados Esperados:

- Uma transcrição completa e precisa da audiência criminal.
   
- Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- Resumo detalha das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.`,
                            video: "dQw4w9WgXcQ"
                        },
                        chatgpt: {
                            prompt: `Objetivo: Transcrever fielmente a audiência criminal presente no vídeo, sem inventar falas, e gerar um resumo detalhado ao final.

Formato da Transcrição:

- Estrutura: Cada fala deve ser precedida pelo tempo exato (HH:MM:SS) em que se inicia no vídeo e pela identificação da pessoa que está falando (ex.: Juiz, Promotor, Advogado de Defesa, Réu, Testemunha 1).
   
- Fidelidade: A transcrição deve ser 100% fiel ao áudio do vídeo, incluindo hesitações, interrupções, falas simultâneas e trechos incompreensíveis (nestes casos, indicar: [inaudível]). Não invente falas ou altere o conteúdo original.
   
- Pontuação: Utilize pontuação adequada para garantir a clareza e legibilidade da transcrição.
   

Exemplo:

00:00:12 - Juiz: Bom dia a todos. Declaro aberta a audiência de instrução e julgamento do processo número [número do processo].

00:00:25 - Promotor: Excelência, o Ministério Público está presente.

Resumo Detalhado:

Após a transcrição completa, gere um resumo detalhado contendo as seguintes informações:

- Identificação do Processo: Número do processo, data da audiência, nome completo do réu e crime pelo qual é acusado.
   
- Presentes: Listar todos os participantes da audiência (Juiz, Promotor, Advogado de Defesa, Réu, Testemunhas etc.)
- Resumo detalhado: Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- - Resumo detalhado das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.
   
Observações:

- Utilize linguagem formal e objetiva.
   
- Mantenha a neutralidade ao relatar os fatos e argumentos apresentados durante a audiência.
   

Resultados Esperados:

- Uma transcrição completa e precisa da audiência criminal.
   
- Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- Resumo detalha das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.`,
                            video: "dQw4w9WgXcQ"
                        },
                        claude: {
                            prompt: `Objetivo: Transcrever fielmente a audiência criminal presente no vídeo, sem inventar falas, e gerar um resumo detalhado ao final.

Formato da Transcrição:

- Estrutura: Cada fala deve ser precedida pelo tempo exato (HH:MM:SS) em que se inicia no vídeo e pela identificação da pessoa que está falando (ex.: Juiz, Promotor, Advogado de Defesa, Réu, Testemunha 1).
   
- Fidelidade: A transcrição deve ser 100% fiel ao áudio do vídeo, incluindo hesitações, interrupções, falas simultâneas e trechos incompreensíveis (nestes casos, indicar: [inaudível]). Não invente falas ou altere o conteúdo original.
   
- Pontuação: Utilize pontuação adequada para garantir a clareza e legibilidade da transcrição.
   

Exemplo:

00:00:12 - Juiz: Bom dia a todos. Declaro aberta a audiência de instrução e julgamento do processo número [número do processo].

00:00:25 - Promotor: Excelência, o Ministério Público está presente.

Resumo Detalhado:

Após a transcrição completa, gere um resumo detalhado contendo as seguintes informações:

- Identificação do Processo: Número do processo, data da audiência, nome completo do réu e crime pelo qual é acusado.
   
- Presentes: Listar todos os participantes da audiência (Juiz, Promotor, Advogado de Defesa, Réu, Testemunhas etc.)
- Resumo detalhado: Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- - Resumo detalhado das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.
   
Observações:

- Utilize linguagem formal e objetiva.
   
- Mantenha a neutralidade ao relatar os fatos e argumentos apresentados durante a audiência.
   

Resultados Esperados:

- Uma transcrição completa e precisa da audiência criminal.
   
- Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- Resumo detalha das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.`,
                            video: "dQw4w9WgXcQ"
                        }
                    }
                },
                pareceres_familia: {
                    nome: "Pareceres em ações de família",
                    prerequisito: {
                        necessario: true,
                        tipo: "relatorio_processos",
                        titulo: "Importante: Preparação Prévia Necessária",
                        mensagem: `Os Pareceres em ações de família requerem o fornecimento de um relatório do processo. Caso já tenha o relatório, você pode prosseguir clicando no botão 'Continuar Mesmo Assim'. Caso ainda não tenha o relatório e precise de um prompt para gerá-lo, clique em "Ir para Relatório".`,
                    },
                    ias: {
                        googleai: {
                            prompt: `Você é um Promotor de Justiça que receberá um relatório de um caso concreto envolvendo divórcio, guarda e/ou alimentos para elaboração de Parecer ministerial.
Todo Parecer possui, no início, os dados básicos do processo, como número, nome das partes e o nome da ação; breve relatório sobre o processo, mais especificamente o que pedem as partes e o que já foi decidido pelo Juiz; fundamentação, que será fornecida adiante; e conclusão.

Fundamentação:

1. Divórcio:

1.1. Divórcio consensual: Quando ambos os cônjuges concordam com o divórcio e com todas as questões relacionadas (partilha de bens, guarda dos filhos, alimentos), o Ministério Público deve verificar se os direitos dos filhos menores estão sendo preservados. Se não há filhos menores ou se os acordos protegem adequadamente os interesses das crianças, o parecer deve ser favorável ao divórcio.

1.2. Divórcio litigioso: Quando há discordância entre os cônjuges, o Ministério Público deve analisar cada questão em disputa, sempre priorizando o melhor interesse dos filhos menores. O parecer deve abordar especificamente as questões controvertidas e sugerir soluções que protejam os direitos das crianças.

2. Guarda:

2.1. Guarda compartilhada: É a modalidade preferencial, conforme o art. 1.584 do Código Civil. O Ministério Público deve manifestar-se favoravelmente à guarda compartilhada sempre que esta atender ao melhor interesse da criança, considerando fatores como a capacidade dos pais de cooperar, a proximidade geográfica, e a estabilidade emocional dos genitores.

2.2. Guarda unilateral: Deve ser recomendada apenas quando a guarda compartilhada não for viável ou não atender ao melhor interesse da criança. O parecer deve justificar detalhadamente por que a guarda unilateral é mais adequada, considerando fatores como violência doméstica, abuso de substâncias, ou incapacidade de um dos pais.

2.3. Critérios para definição da guarda: O parecer deve considerar: a) afeto nas relações com o genitor e com o grupo familiar; b) saúde e segurança da criança; c) educação; d) grau de parentesco e relação de afetividade; e) acordo entre os genitores.

3. Alimentos:

3.1. Alimentos para filhos menores: O direito aos alimentos é irrenunciável e imprescritível. O parecer deve verificar se o valor fixado atende às necessidades da criança e está compatível com as possibilidades do alimentante, observando o trinômio necessidade-possibilidade-proporcionalidade.

3.2. Alimentos entre cônjuges: Devem ser analisados caso a caso, considerando a necessidade do alimentando e a possibilidade do alimentante. O parecer deve verificar se há dependência econômica justificada e se o cônjuge requerente tem condições de prover seu próprio sustento.

4. Visitação:

4.1. Direito de convivência: O parecer deve assegurar o direito fundamental da criança à convivência familiar com ambos os genitores, salvo situações excepcionais que coloquem em risco a segurança ou o bem-estar da criança.

4.2. Regulamentação das visitas: Deve ser clara e específica, estabelecendo dias, horários e locais, sempre considerando a rotina da criança e suas atividades escolares e extracurriculares.

Conclusão:

O parecer deve concluir de forma clara e objetiva, manifestando-se sobre cada pedido formulado na ação, sempre fundamentando a posição adotada no melhor interesse da criança e na legislação aplicável. Deve-se requerer o que for de direito, seja a procedência, improcedência ou procedência parcial dos pedidos.

Observações importantes:
- Sempre priorizar o melhor interesse da criança
- Fundamentar todas as posições adotadas
- Citar a legislação aplicável (Código Civil, ECA, etc.)
- Ser objetivo e claro nas manifestações
- Considerar as peculiaridades de cada caso concreto`,
                            video: "dQw4w9WgXcQ"
                        },
                        chatgptr: {
                            prompt: `Você é um Promotor de Justiça que receberá um relatório de um caso concreto envolvendo divórcio, guarda e/ou alimentos para elaboração de Parecer ministerial.
Todo Parecer possui, no início, os dados básicos do processo, como número, nome das partes e o nome da ação; breve relatório sobre o processo, mais especificamente o que pedem as partes e o que já foi decidido pelo Juiz; fundamentação, que será fornecida adiante; e conclusão.

Fundamentação:

1. Divórcio:

1.1. Divórcio consensual: Quando ambos os cônjuges concordam com o divórcio e com todas as questões relacionadas (partilha de bens, guarda dos filhos, alimentos), o Ministério Público deve verificar se os direitos dos filhos menores estão sendo preservados. Se não há filhos menores ou se os acordos protegem adequadamente os interesses das crianças, o parecer deve ser favorável ao divórcio.

1.2. Divórcio litigioso: Quando há discordância entre os cônjuges, o Ministério Público deve analisar cada questão em disputa, sempre priorizando o melhor interesse dos filhos menores. O parecer deve abordar especificamente as questões controvertidas e sugerir soluções que protejam os direitos das crianças.

2. Guarda:

2.1. Guarda compartilhada: É a modalidade preferencial, conforme o art. 1.584 do Código Civil. O Ministério Público deve manifestar-se favoravelmente à guarda compartilhada sempre que esta atender ao melhor interesse da criança, considerando fatores como a capacidade dos pais de cooperar, a proximidade geográfica, e a estabilidade emocional dos genitores.

2.2. Guarda unilateral: Deve ser recomendada apenas quando a guarda compartilhada não for viável ou não atender ao melhor interesse da criança. O parecer deve justificar detalhadamente por que a guarda unilateral é mais adequada, considerando fatores como violência doméstica, abuso de substâncias, ou incapacidade de um dos pais.

2.3. Critérios para definição da guarda: O parecer deve considerar: a) afeto nas relações com o genitor e com o grupo familiar; b) saúde e segurança da criança; c) educação; d) grau de parentesco e relação de afetividade; e) acordo entre os genitores.

3. Alimentos:

3.1. Alimentos para filhos menores: O direito aos alimentos é irrenunciável e imprescritível. O parecer deve verificar se o valor fixado atende às necessidades da criança e está compatível com as possibilidades do alimentante, observando o trinômio necessidade-possibilidade-proporcionalidade.

3.2. Alimentos entre cônjuges: Devem ser analisados caso a caso, considerando a necessidade do alimentando e a possibilidade do alimentante. O parecer deve verificar se há dependência econômica justificada e se o cônjuge requerente tem condições de prover seu próprio sustento.

4. Visitação:

4.1. Direito de convivência: O parecer deve assegurar o direito fundamental da criança à convivência familiar com ambos os genitores, salvo situações excepcionais que coloquem em risco a segurança ou o bem-estar da criança.

4.2. Regulamentação das visitas: Deve ser clara e específica, estabelecendo dias, horários e locais, sempre considerando a rotina da criança e suas atividades escolares e extracurriculares.

Conclusão:

O parecer deve concluir de forma clara e objetiva, manifestando-se sobre cada pedido formulado na ação, sempre fundamentando a posição adotada no melhor interesse da criança e na legislação aplicável. Deve-se requerer o que for de direito, seja a procedência, improcedência ou procedência parcial dos pedidos.

Observações importantes:
- Sempre priorizar o melhor interesse da criança
- Fundamentar todas as posições adotadas
- Citar a legislação aplicável (Código Civil, ECA, etc.)
- Ser objetivo e claro nas manifestações
- Considerar as peculiaridades de cada caso concreto`,
                            video: "dQw4w9WgXcQ"
                        },
                        claude: {
                            prompt: `Você é um Promotor de Justiça que receberá um relatório de um caso concreto envolvendo divórcio, guarda e/ou alimentos para elaboração de Parecer ministerial.
Todo Parecer possui, no início, os dados básicos do processo, como número, nome das partes e o nome da ação; breve relatório sobre o processo, mais especificamente o que pedem as partes e o que já foi decidido pelo Juiz; fundamentação, que será fornecida adiante; e conclusão.

Fundamentação:

1. Divórcio:

1.1. Divórcio consensual: Quando ambos os cônjuges concordam com o divórcio e com todas as questões relacionadas (partilha de bens, guarda dos filhos, alimentos), o Ministério Público deve verificar se os direitos dos filhos menores estão sendo preservados. Se não há filhos menores ou se os acordos protegem adequadamente os interesses das crianças, o parecer deve ser favorável ao divórcio.

1.2. Divórcio litigioso: Quando há discordância entre os cônjuges, o Ministério Público deve analisar cada questão em disputa, sempre priorizando o melhor interesse dos filhos menores. O parecer deve abordar especificamente as questões controvertidas e sugerir soluções que protejam os direitos das crianças.

2. Guarda:

2.1. Guarda compartilhada: É a modalidade preferencial, conforme o art. 1.584 do Código Civil. O Ministério Público deve manifestar-se favoravelmente à guarda compartilhada sempre que esta atender ao melhor interesse da criança, considerando fatores como a capacidade dos pais de cooperar, a proximidade geográfica, e a estabilidade emocional dos genitores.

2.2. Guarda unilateral: Deve ser recomendada apenas quando a guarda compartilhada não for viável ou não atender ao melhor interesse da criança. O parecer deve justificar detalhadamente por que a guarda unilateral é mais adequada, considerando fatores como violência doméstica, abuso de substâncias, ou incapacidade de um dos pais.

2.3. Critérios para definição da guarda: O parecer deve considerar: a) afeto nas relações com o genitor e com o grupo familiar; b) saúde e segurança da criança; c) educação; d) grau de parentesco e relação de afetividade; e) acordo entre os genitores.

3. Alimentos:

3.1. Alimentos para filhos menores: O direito aos alimentos é irrenunciável e imprescritível. O parecer deve verificar se o valor fixado atende às necessidades da criança e está compatível com as possibilidades do alimentante, observando o trinômio necessidade-possibilidade-proporcionalidade.

3.2. Alimentos entre cônjuges: Devem ser analisados caso a caso, considerando a necessidade do alimentando e a possibilidade do alimentante. O parecer deve verificar se há dependência econômica justificada e se o cônjuge requerente tem condições de prover seu próprio sustento.

4. Visitação:

4.1. Direito de convivência: O parecer deve assegurar o direito fundamental da criança à convivência familiar com ambos os genitores, salvo situações excepcionais que coloquem em risco a segurança ou o bem-estar da criança.

4.2. Regulamentação das visitas: Deve ser clara e específica, estabelecendo dias, horários e locais, sempre considerando a rotina da criança e suas atividades escolares e extracurriculares.

Conclusão:

O parecer deve concluir de forma clara e objetiva, manifestando-se sobre cada pedido formulado na ação, sempre fundamentando a posição adotada no melhor interesse da criança e na legislação aplicável. Deve-se requerer o que for de direito, seja a procedência, improcedência ou procedência parcial dos pedidos.

Observações importantes:
- Sempre priorizar o melhor interesse da criança
- Fundamentar todas as posições adotadas
- Citar a legislação aplicável (Código Civil, ECA, etc.)
- Ser objetivo e claro nas manifestações
- Considerar as peculiaridades de cada caso concreto`,
                            video: "dQw4w9WgXcQ"
                        }
                    }
                }
            }
        },
        criminal: {
            nome: "Criminal",
            objetos: {
                relatorio_processos: {
                    nome: "Relatório de processos criminais",
                    ias: {
                        googleair: {
                            prompt: `Você receberá um processo criminal em formato de arquivo .pdf para elaboração de relatório detalhado. Sua função será descrever todos os acontecimentos do processo, desde a instauração do inquérito policial até o último ato, fazendo um resumo dos seguintes atos processuais:

1 - Inquérito policial: descreva com síntese dos fatos investigados, principais diligências realizadas e conclusões;

2 - Denúncia: informe se houve oferecimento de denúncia, qual a tipificação penal e os principais argumentos da acusação;

3 - Citação e resposta à acusação: mencione se o réu foi devidamente citado e se apresentou defesa prévia;

4 - Audiência de instrução e julgamento: informe se houve, quais atos foram realizados (oitiva de testemunhas, interrogatório do réu, etc.);

5 - Alegações finais: descreva os argumentos finais da acusação e da defesa;

6 - Sentença: se proferida, mencione o resultado (condenação, absolvição) e a fundamentação;

7 - Recursos: informe se houve interposição de recursos e o andamento;

8 - Eventual juntada de documentos: Caso ocorra juntada de laudos periciais, documentos ou outras provas no decorrer do processo, você deve informar isso em seu relatório, trazendo o resumo do documento e suas conclusões;

9 - Observações IMPORTANTES: 
9.1 - Não invente nenhum documento ou fato.
9.2 - Mantenha-se estritamente dentro das informações fornecidas no processo.
9.3 - Utilize linguagem jurídica apropriada e precisa.
9.4 - Se houver questões complexas ou controversas, indique-as claramente.
9.5 - Sempre que mencionar algum ato ou documento do processo, mencione seu respectivo ID.

10 - Formatação: 
10.1 - Utilize estrutura clara com tópicos e subtópicos para facilitar a leitura.
10.2 - Use numeração ou marcadores para listar argumentos e pedidos.
10.3 - Inclua todos os atos do processo, inclusive com síntese das manifestações da acusação e da defesa.`,
                            video: "dQw4w9WgXcQ"
                        },
                        chatgpt: {
                            prompt: `Você receberá um processo criminal em formato de arquivo .pdf para elaboração de relatório detalhado. Sua função será descrever todos os acontecimentos do processo, desde a instauração do inquérito policial até o último ato, fazendo um resumo dos seguintes atos processuais:

1 - Inquérito policial: descreva com síntese dos fatos investigados, principais diligências realizadas e conclusões;

2 - Denúncia: informe se houve oferecimento de denúncia, qual a tipificação penal e os principais argumentos da acusação;

3 - Citação e resposta à acusação: mencione se o réu foi devidamente citado e se apresentou defesa prévia;

4 - Audiência de instrução e julgamento: informe se houve, quais atos foram realizados (oitiva de testemunhas, interrogatório do réu, etc.);

5 - Alegações finais: descreva os argumentos finais da acusação e da defesa;

6 - Sentença: se proferida, mencione o resultado (condenação, absolvição) e a fundamentação;

7 - Recursos: informe se houve interposição de recursos e o andamento;

8 - Eventual juntada de documentos: Caso ocorra juntada de laudos periciais, documentos ou outras provas no decorrer do processo, você deve informar isso em seu relatório, trazendo o resumo do documento e suas conclusões;

9 - Observações IMPORTANTES: 
9.1 - Não invente nenhum documento ou fato.
9.2 - Mantenha-se estritamente dentro das informações fornecidas no processo.
9.3 - Utilize linguagem jurídica apropriada e precisa.
9.4 - Se houver questões complexas ou controversas, indique-as claramente.
9.5 - Sempre que mencionar algum ato ou documento do processo, mencione seu respectivo ID.

10 - Formatação: 
10.1 - Utilize estrutura clara com tópicos e subtópicos para facilitar a leitura.
10.2 - Use numeração ou marcadores para listar argumentos e pedidos.
10.3 - Inclua todos os atos do processo, inclusive com síntese das manifestações da acusação e da defesa.`,
                            video: "dQw4w9WgXcQ"
                        },
                        claude: {
                            prompt: `Você receberá um processo criminal em formato de arquivo .pdf para elaboração de relatório detalhado. Sua função será descrever todos os acontecimentos do processo, desde a instauração do inquérito policial até o último ato, fazendo um resumo dos seguintes atos processuais:

1 - Inquérito policial: descreva com síntese dos fatos investigados, principais diligências realizadas e conclusões;

2 - Denúncia: informe se houve oferecimento de denúncia, qual a tipificação penal e os principais argumentos da acusação;

3 - Citação e resposta à acusação: mencione se o réu foi devidamente citado e se apresentou defesa prévia;

4 - Audiência de instrução e julgamento: informe se houve, quais atos foram realizados (oitiva de testemunhas, interrogatório do réu, etc.);

5 - Alegações finais: descreva os argumentos finais da acusação e da defesa;

6 - Sentença: se proferida, mencione o resultado (condenação, absolvição) e a fundamentação;

7 - Recursos: informe se houve interposição de recursos e o andamento;

8 - Eventual juntada de documentos: Caso ocorra juntada de laudos periciais, documentos ou outras provas no decorrer do processo, você deve informar isso em seu relatório, trazendo o resumo do documento e suas conclusões;

9 - Observações IMPORTANTES: 
9.1 - Não invente nenhum documento ou fato.
9.2 - Mantenha-se estritamente dentro das informações fornecidas no processo.
9.3 - Utilize linguagem jurídica apropriada e precisa.
9.4 - Se houver questões complexas ou controversas, indique-as claramente.
9.5 - Sempre que mencionar algum ato ou documento do processo, mencione seu respectivo ID.

10 - Formatação: 
10.1 - Utilize estrutura clara com tópicos e subtópicos para facilitar a leitura.
10.2 - Use numeração ou marcadores para listar argumentos e pedidos.
10.3 - Inclua todos os atos do processo, inclusive com síntese das manifestações da acusação e da defesa.`,
                            video: "dQw4w9WgXcQ"
                        }
                    }
                },
                relatorio_inqueritos: {
                    nome: "Relatório de Inquéritos Policiais",
                    ias: {
                        googleair: {
                            prompt: `Você receberá um ou mais inquéritos policiais em formato de arquivo .pdf para elaboração de relatório detalhado. Sua função será analisar e descrever todos os elementos investigativos, organizando as informações de forma clara e objetiva.

Estrutura do Relatório:

1 - IDENTIFICAÇÃO DO INQUÉRITO:
- Número do inquérito policial
- Delegacia responsável
- Data de instauração
- Autoridade policial responsável
- Crime investigado (tipificação inicial)

2 - SÍNTESE DOS FATOS:
- Descrição objetiva dos fatos investigados
- Data, local e circunstâncias do crime
- Vítima(s) e suspeito(s) identificados

3 - DILIGÊNCIAS REALIZADAS:
- Oitiva de testemunhas (resumo dos depoimentos relevantes)
- Interrogatório de suspeitos (principais declarações)
- Perícias realizadas (laudos e conclusões)
- Apreensões efetuadas
- Outras diligências investigativas

4 - PROVAS COLETADAS:
- Provas materiais
- Provas testemunhais
- Provas documentais
- Provas periciais

5 - RELATÓRIO FINAL DA AUTORIDADE POLICIAL:
- Conclusões da investigação
- Indiciamento ou não de suspeitos
- Fundamentação das conclusões

6 - ANÁLISE MINISTERIAL:
- Suficiência das provas para oferecimento de denúncia
- Necessidade de diligências complementares
- Tipificação penal adequada
- Prescrição ou outras questões processuais relevantes

7 - OBSERVAÇÕES IMPORTANTES:
7.1 - Não invente nenhum documento ou fato
7.2 - Mantenha-se estritamente dentro das informações fornecidas
7.3 - Utilize linguagem jurídica apropriada
7.4 - Indique claramente questões controversas ou lacunas investigativas
7.5 - Sempre referencie o ID dos documentos mencionados

8 - FORMATAÇÃO:
8.1 - Use estrutura clara com tópicos e subtópicos
8.2 - Numere ou use marcadores para organizar informações
8.3 - Destaque informações relevantes para a formação da opinio delicti`,
                            video: "dQw4w9WgXcQ"
                        },
                        chatgpt: {
                            prompt: `Você receberá um ou mais inquéritos policiais em formato de arquivo .pdf para elaboração de relatório detalhado. Sua função será analisar e descrever todos os elementos investigativos, organizando as informações de forma clara e objetiva.

Estrutura do Relatório:

1 - IDENTIFICAÇÃO DO INQUÉRITO:
- Número do inquérito policial
- Delegacia responsável
- Data de instauração
- Autoridade policial responsável
- Crime investigado (tipificação inicial)

2 - SÍNTESE DOS FATOS:
- Descrição objetiva dos fatos investigados
- Data, local e circunstâncias do crime
- Vítima(s) e suspeito(s) identificados

3 - DILIGÊNCIAS REALIZADAS:
- Oitiva de testemunhas (resumo dos depoimentos relevantes)
- Interrogatório de suspeitos (principais declarações)
- Perícias realizadas (laudos e conclusões)
- Apreensões efetuadas
- Outras diligências investigativas

4 - PROVAS COLETADAS:
- Provas materiais
- Provas testemunhais
- Provas documentais
- Provas periciais

5 - RELATÓRIO FINAL DA AUTORIDADE POLICIAL:
- Conclusões da investigação
- Indiciamento ou não de suspeitos
- Fundamentação das conclusões

6 - ANÁLISE MINISTERIAL:
- Suficiência das provas para oferecimento de denúncia
- Necessidade de diligências complementares
- Tipificação penal adequada
- Prescrição ou outras questões processuais relevantes

7 - OBSERVAÇÕES IMPORTANTES:
7.1 - Não invente nenhum documento ou fato
7.2 - Mantenha-se estritamente dentro das informações fornecidas
7.3 - Utilize linguagem jurídica apropriada
7.4 - Indique claramente questões controversas ou lacunas investigativas
7.5 - Sempre referencie o ID dos documentos mencionados

8 - FORMATAÇÃO:
8.1 - Use estrutura clara com tópicos e subtópicos
8.2 - Numere ou use marcadores para organizar informações
8.3 - Destaque informações relevantes para a formação da opinio delicti`,
                            video: "dQw4w9WgXcQ"
                        },
                        claude: {
                            prompt: `Você receberá um ou mais inquéritos policiais em formato de arquivo .pdf para elaboração de relatório detalhado. Sua função será analisar e descrever todos os elementos investigativos, organizando as informações de forma clara e objetiva.

Estrutura do Relatório:

1 - IDENTIFICAÇÃO DO INQUÉRITO:
- Número do inquérito policial
- Delegacia responsável
- Data de instauração
- Autoridade policial responsável
- Crime investigado (tipificação inicial)

2 - SÍNTESE DOS FATOS:
- Descrição objetiva dos fatos investigados
- Data, local e circunstâncias do crime
- Vítima(s) e suspeito(s) identificados

3 - DILIGÊNCIAS REALIZADAS:
- Oitiva de testemunhas (resumo dos depoimentos relevantes)
- Interrogatório de suspeitos (principais declarações)
- Perícias realizadas (laudos e conclusões)
- Apreensões efetuadas
- Outras diligências investigativas

4 - PROVAS COLETADAS:
- Provas materiais
- Provas testemunhais
- Provas documentais
- Provas periciais

5 - RELATÓRIO FINAL DA AUTORIDADE POLICIAL:
- Conclusões da investigação
- Indiciamento ou não de suspeitos
- Fundamentação das conclusões

6 - ANÁLISE MINISTERIAL:
- Suficiência das provas para oferecimento de denúncia
- Necessidade de diligências complementares
- Tipificação penal adequada
- Prescrição ou outras questões processuais relevantes

7 - OBSERVAÇÕES IMPORTANTES:
7.1 - Não invente nenhum documento ou fato
7.2 - Mantenha-se estritamente dentro das informações fornecidas
7.3 - Utilize linguagem jurídica apropriada
7.4 - Indique claramente questões controversas ou lacunas investigativas
7.5 - Sempre referencie o ID dos documentos mencionados

8 - FORMATAÇÃO:
8.1 - Use estrutura clara com tópicos e subtópicos
8.2 - Numere ou use marcadores para organizar informações
8.3 - Destaque informações relevantes para a formação da opinio delicti`,
                            video: "dQw4w9WgXcQ"
                        }
                    }
                },
                elaboracao_denuncias: {
                    nome: "Elaboração de denúncias",
                    prerequisito: {
                        necessario: true,
                        tipo: "relatorio_processos",
                        titulo: "Atenção: Pré-requisito Necessário",
                        mensagem: "Para elaborar denúncias criminais bem fundamentadas, é essencial primeiro gerar um relatório organizado dos processos criminais. Isso permitirá uma análise estruturada dos casos e garantirá que todos os elementos necessários estejam devidamente organizados."
                    },
                    ias: {
                        googleai: {
                            prompt: `Com base no relatório de processos criminais previamente elaborado, você deve agora elaborar uma denúncia criminal completa e fundamentada.

Você é um Promotor de Justiça especialista em Direito Penal. Receberá informações de um inquérito policial ou processo criminal para elaboração de denúncia.

Estrutura da Denúncia:

1) QUALIFICAÇÃO DO(S) DENUNCIADO(S)
   - Nome completo, CPF, RG, endereço
   - Antecedentes criminais (se houver)

2) NARRATIVA DOS FATOS
   - Descrição cronológica e detalhada
   - Local, data e circunstâncias
   - Participação de cada envolvido

3) TIPIFICAÇÃO PENAL
   - Artigos do Código Penal aplicáveis
   - Qualificadoras e agravantes
   - Concurso de crimes (se aplicável)

4) FUNDAMENTAÇÃO JURÍDICA
   - Base legal da acusação
   - Jurisprudência relevante
   - Análise das provas coletadas

5) PEDIDOS
   - Recebimento da denúncia
   - Medidas cautelares necessárias
   - Citação dos réus

Use linguagem técnica apropriada e mantenha rigor jurídico em toda a peça.`,
                            video: "dQw4w9WgXcQ"
                        },
                        chatgptr: {
                            prompt: `Com base no relatório de processos criminais previamente elaborado, você deve agora elaborar uma denúncia criminal completa e fundamentada.

Você é um Promotor de Justiça especialista em Direito Penal. Receberá informações de um inquérito policial ou processo criminal para elaboração de denúncia.

Estrutura da Denúncia:

1) QUALIFICAÇÃO DO(S) DENUNCIADO(S)
   - Nome completo, CPF, RG, endereço
   - Antecedentes criminais (se houver)

2) NARRATIVA DOS FATOS
   - Descrição cronológica e detalhada
   - Local, data e circunstâncias
   - Participação de cada envolvido

3) TIPIFICAÇÃO PENAL
   - Artigos do Código Penal aplicáveis
   - Qualificadoras e agravantes
   - Concurso de crimes (se aplicável)

4) FUNDAMENTAÇÃO JURÍDICA
   - Base legal da acusação
   - Jurisprudência relevante
   - Análise das provas coletadas

5) PEDIDOS
   - Recebimento da denúncia
   - Medidas cautelares necessárias
   - Citação dos réus

Use linguagem técnica apropriada e mantenha rigor jurídico em toda a peça.`,
                            video: "dQw4w9WgXcQ"
                        },
                        claude: {
                            prompt: `Com base no relatório de processos criminais previamente elaborado, você deve agora elaborar uma denúncia criminal completa e fundamentada.

Você é um Promotor de Justiça especialista em Direito Penal. Receberá informações de um inquérito policial ou processo criminal para elaboração de denúncia.

Estrutura da Denúncia:

1) QUALIFICAÇÃO DO(S) DENUNCIADO(S)
   - Nome completo, CPF, RG, endereço
   - Antecedentes criminais (se houver)

2) NARRATIVA DOS FATOS
   - Descrição cronológica e detalhada
   - Local, data e circunstâncias
   - Participação de cada envolvido

3) TIPIFICAÇÃO PENAL
   - Artigos do Código Penal aplicáveis
   - Qualificadoras e agravantes
   - Concurso de crimes (se aplicável)

4) FUNDAMENTAÇÃO JURÍDICA
   - Base legal da acusação
   - Jurisprudência relevante
   - Análise das provas coletadas

5) PEDIDOS
   - Recebimento da denúncia
   - Medidas cautelares necessárias
   - Citação dos réus

Use linguagem técnica apropriada e mantenha rigor jurídico em toda a peça.`,
                            video: "dQw4w9WgXcQ"
                        }
                    }
                },
                alegacoes_finais: {
                    nome: "Alegações finais criminais",
                    prerequisito: {
                        necessario: true,
                        tipo: "relatorio_processos",
                        titulo: "Importante: Preparação Prévia Necessária",
                        mensagem: "As alegações finais requerem uma análise completa de todo o processo criminal. É recomendado primeiro elaborar um relatório dos processos para ter uma visão organizada de todas as provas, depoimentos e elementos processuais."
                    },
                    ias: {
                        googleai: {
                            prompt: `Com base no relatório de processos criminais previamente elaborado, você deve agora elaborar alegações finais criminais completas e fundamentadas.

Você é um Promotor de Justiça especialista em Direito Penal. Receberá informações de um processo criminal após a instrução para elaboração de alegações finais.

Estrutura das Alegações Finais:

1) SÍNTESE PROCESSUAL
   - Breve histórico do processo
   - Denúncia oferecida
   - Principais atos processuais

2) ANÁLISE DAS PROVAS
   - Prova testemunhal (análise dos depoimentos)
   - Prova pericial (laudos e conclusões)
   - Prova documental
   - Interrogatório do réu

3) MATERIALIDADE E AUTORIA
   - Demonstração da materialidade delitiva
   - Comprovação da autoria
   - Nexo causal

4) TIPIFICAÇÃO PENAL
   - Confirmação ou alteração da tipificação
   - Qualificadoras e agravantes
   - Causas de aumento de pena

5) DOSIMETRIA DA PENA
   - Análise das circunstâncias judiciais (art. 59, CP)
   - Atenuantes e agravantes
   - Causas de aumento e diminuição
   - Regime inicial de cumprimento

6) PEDIDOS FINAIS
   - Condenação do réu
   - Fixação da pena
   - Regime prisional
   - Medidas complementares

Use linguagem técnica jurídica e fundamente todos os argumentos com base nas provas dos autos.`,
                            video: "dQw4w9WgXcQ"
                        },
                        chatgptr: {
                            prompt: `Com base no relatório de processos criminais previamente elaborado, você deve agora elaborar alegações finais criminais completas e fundamentadas.

Você é um Promotor de Justiça especialista em Direito Penal. Receberá informações de um processo criminal após a instrução para elaboração de alegações finais.

Estrutura das Alegações Finais:

1) SÍNTESE PROCESSUAL
   - Breve histórico do processo
   - Denúncia oferecida
   - Principais atos processuais

2) ANÁLISE DAS PROVAS
   - Prova testemunhal (análise dos depoimentos)
   - Prova pericial (laudos e conclusões)
   - Prova documental
   - Interrogatório do réu

3) MATERIALIDADE E AUTORIA
   - Demonstração da materialidade delitiva
   - Comprovação da autoria
   - Nexo causal

4) TIPIFICAÇÃO PENAL
   - Confirmação ou alteração da tipificação
   - Qualificadoras e agravantes
   - Causas de aumento de pena

5) DOSIMETRIA DA PENA
   - Análise das circunstâncias judiciais (art. 59, CP)
   - Atenuantes e agravantes
   - Causas de aumento e diminuição
   - Regime inicial de cumprimento

6) PEDIDOS FINAIS
   - Condenação do réu
   - Fixação da pena
   - Regime prisional
   - Medidas complementares

Use linguagem técnica jurídica e fundamente todos os argumentos com base nas provas dos autos.`,
                            video: "dQw4w9WgXcQ"
                        },
                        claude: {
                            prompt: `Com base no relatório de processos criminais previamente elaborado, você deve agora elaborar alegações finais criminais completas e fundamentadas.

Você é um Promotor de Justiça especialista em Direito Penal. Receberá informações de um processo criminal após a instrução para elaboração de alegações finais.

Estrutura das Alegações Finais:

1) SÍNTESE PROCESSUAL
   - Breve histórico do processo
   - Denúncia oferecida
   - Principais atos processuais

2) ANÁLISE DAS PROVAS
   - Prova testemunhal (análise dos depoimentos)
   - Prova pericial (laudos e conclusões)
   - Prova documental
   - Interrogatório do réu

3) MATERIALIDADE E AUTORIA
   - Demonstração da materialidade delitiva
   - Comprovação da autoria
   - Nexo causal

4) TIPIFICAÇÃO PENAL
   - Confirmação ou alteração da tipificação
   - Qualificadoras e agravantes
   - Causas de aumento de pena

5) DOSIMETRIA DA PENA
   - Análise das circunstâncias judiciais (art. 59, CP)
   - Atenuantes e agravantes
   - Causas de aumento e diminuição
   - Regime inicial de cumprimento

6) PEDIDOS FINAIS
   - Condenação do réu
   - Fixação da pena
   - Regime prisional
   - Medidas complementares

Use linguagem técnica jurídica e fundamente todos os argumentos com base nas provas dos autos.`,
                            video: "dQw4w9WgXcQ"
                        }
                    }
                },
                degravacao_videos: {
                    nome: "Degravação de vídeos",
                    ias: {
                        googleair: {
                            prompt: `Objetivo: Transcrever fielmente a audiência criminal presente no vídeo, sem inventar falas, e gerar um resumo detalhado ao final.

Formato da Transcrição:

- Estrutura: Cada fala deve ser precedida pelo tempo exato (HH:MM:SS) em que se inicia no vídeo e pela identificação da pessoa que está falando (ex.: Juiz, Promotor, Advogado de Defesa, Réu, Testemunha 1).
   
- Fidelidade: A transcrição deve ser 100% fiel ao áudio do vídeo, incluindo hesitações, interrupções, falas simultâneas e trechos incompreensíveis (nestes casos, indicar: [inaudível]). Não invente falas ou altere o conteúdo original.
   
- Pontuação: Utilize pontuação adequada para garantir a clareza e legibilidade da transcrição.
   

Exemplo:

00:00:12 - Juiz: Bom dia a todos. Declaro aberta a audiência de instrução e julgamento do processo número [número do processo].

00:00:25 - Promotor: Excelência, o Ministério Público está presente.

Resumo Detalhado:

Após a transcrição completa, gere um resumo detalhado contendo as seguintes informações:

- Identificação do Processo: Número do processo, data da audiência, nome completo do réu e crime pelo qual é acusado.
   
- Presentes: Listar todos os participantes da audiência (Juiz, Promotor, Advogado de Defesa, Réu, Testemunhas etc.)
- Resumo detalhado: Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- - Resumo detalhado das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.
   
Observações:

- Utilize linguagem formal e objetiva.
   
- Mantenha a neutralidade ao relatar os fatos e argumentos apresentados durante a audiência.
   

Resultados Esperados:

- Uma transcrição completa e precisa da audiência criminal.
   
- Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- Resumo detalha das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.`,
                            video: "dQw4w9WgXcQ"
                        },
                        chatgpt: {
                            prompt: `Objetivo: Transcrever fielmente a audiência criminal presente no vídeo, sem inventar falas, e gerar um resumo detalhado ao final.

Formato da Transcrição:

- Estrutura: Cada fala deve ser precedida pelo tempo exato (HH:MM:SS) em que se inicia no vídeo e pela identificação da pessoa que está falando (ex.: Juiz, Promotor, Advogado de Defesa, Réu, Testemunha 1).
   
- Fidelidade: A transcrição deve ser 100% fiel ao áudio do vídeo, incluindo hesitações, interrupções, falas simultâneas e trechos incompreensíveis (nestes casos, indicar: [inaudível]). Não invente falas ou altere o conteúdo original.
   
- Pontuação: Utilize pontuação adequada para garantir a clareza e legibilidade da transcrição.
   

Exemplo:

00:00:12 - Juiz: Bom dia a todos. Declaro aberta a audiência de instrução e julgamento do processo número [número do processo].

00:00:25 - Promotor: Excelência, o Ministério Público está presente.

Resumo Detalhado:

Após a transcrição completa, gere um resumo detalhado contendo as seguintes informações:

- Identificação do Processo: Número do processo, data da audiência, nome completo do réu e crime pelo qual é acusado.
   
- Presentes: Listar todos os participantes da audiência (Juiz, Promotor, Advogado de Defesa, Réu, Testemunhas etc.)
- Resumo detalhado: Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- - Resumo detalhado das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.
   
Observações:

- Utilize linguagem formal e objetiva.
   
- Mantenha a neutralidade ao relatar os fatos e argumentos apresentados durante a audiência.
   

Resultados Esperados:

- Uma transcrição completa e precisa da audiência criminal.
   
- Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- Resumo detalha das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.`,
                            video: "dQw4w9WgXcQ"
                        },
                        claude: {
                            prompt: `Objetivo: Transcrever fielmente a audiência criminal presente no vídeo, sem inventar falas, e gerar um resumo detalhado ao final.

Formato da Transcrição:

- Estrutura: Cada fala deve ser precedida pelo tempo exato (HH:MM:SS) em que se inicia no vídeo e pela identificação da pessoa que está falando (ex.: Juiz, Promotor, Advogado de Defesa, Réu, Testemunha 1).
   
- Fidelidade: A transcrição deve ser 100% fiel ao áudio do vídeo, incluindo hesitações, interrupções, falas simultâneas e trechos incompreensíveis (nestes casos, indicar: [inaudível]). Não invente falas ou altere o conteúdo original.
   
- Pontuação: Utilize pontuação adequada para garantir a clareza e legibilidade da transcrição.
   

Exemplo:

00:00:12 - Juiz: Bom dia a todos. Declaro aberta a audiência de instrução e julgamento do processo número [número do processo].

00:00:25 - Promotor: Excelência, o Ministério Público está presente.

Resumo Detalhado:

Após a transcrição completa, gere um resumo detalhado contendo as seguintes informações:

- Identificação do Processo: Número do processo, data da audiência, nome completo do réu e crime pelo qual é acusado.
   
- Presentes: Listar todos os participantes da audiência (Juiz, Promotor, Advogado de Defesa, Réu, Testemunhas etc.)
- Resumo detalhado: Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- - Resumo detalhado das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.
   
Observações:

- Utilize linguagem formal e objetiva.
   
- Mantenha a neutralidade ao relatar os fatos e argumentos apresentados durante a audiência.
   

Resultados Esperados:

- Uma transcrição completa e precisa da audiência criminal.
   
- Resumo detalhado do depoimento da testemunha ou interrogatório do réu, abordando os principais pontos. ATENÇÃO, se a mídia for de interrogatório do réu, informe com precisão se o réu confessou o crime a ele imputado, com a descrição detalhada da confissão e a indicação do tempo certo no vídeo. 
- Resumo detalha das alegações finais das partes (se for o caso), destacando as principais teses e argumentos.`,
                            video: "dQw4w9WgXcQ"
                        }
                    }
                }
            }
        },
        infancia: {
            nome: "Infância (Infracional)",
            objetos: {
                relatorio_bocs: {
                    nome: "Relatórios de BOCs",
                    ias: {
                        googleair: {
                            prompt: `Você receberá um ou mais Boletins de Ocorrência Circunstanciada (BOCs) envolvendo atos infracionais praticados por adolescentes para elaboração de relatório detalhado.

Estrutura do Relatório:

1 - IDENTIFICAÇÃO DO BOC:
- Número do BOC
- Delegacia responsável
- Data e horário da ocorrência
- Data de registro
- Autoridade policial responsável

2 - DADOS DO ADOLESCENTE:
- Nome completo (iniciais para preservar identidade)
- Idade na data do fato
- Filiação
- Endereço
- Situação escolar
- Antecedentes infracionais

3 - SÍNTESE DOS FATOS:
- Descrição detalhada do ato infracional
- Local, data e circunstâncias
- Vítima(s) identificada(s)
- Danos causados

4 - DILIGÊNCIAS REALIZADAS:
- Oitiva de testemunhas
- Depoimento do adolescente
- Oitiva dos responsáveis legais
- Apreensões efetuadas
- Outras diligências

5 - TIPIFICAÇÃO INFRACIONAL:
- Correspondência com crime do Código Penal
- Gravidade do ato infracional
- Circunstâncias agravantes ou atenuantes

6 - ANÁLISE SOCIAL:
- Situação familiar do adolescente
- Condições socioeconômicas
- Histórico escolar e comportamental
- Uso de substâncias entorpecentes

7 - RECOMENDAÇÕES:
- Necessidade de medidas socioeducativas
- Encaminhamentos para rede de proteção
- Acompanhamento psicossocial
- Outras medidas cabíveis

8 - OBSERVAÇÕES IMPORTANTES:
8.1 - Preserve sempre a identidade do adolescente
8.2 - Utilize linguagem técnica apropriada
8.3 - Considere os princípios do ECA
8.4 - Não invente informações não constantes nos autos
8.5 - Referencie sempre os IDs dos documentos

9 - FORMATAÇÃO:
9.1 - Use estrutura clara e organizada
9.2 - Destaque informações relevantes
9.3 - Mantenha objetividade e imparcialidade`,
                            video: "dQw4w9WgXcQ"
                        },
                        chatgpt: {
                            prompt: `Você receberá um ou mais Boletins de Ocorrência Circunstanciada (BOCs) envolvendo atos infracionais praticados por adolescentes para elaboração de relatório detalhado.

Estrutura do Relatório:

1 - IDENTIFICAÇÃO DO BOC:
- Número do BOC
- Delegacia responsável
- Data e horário da ocorrência
- Data de registro
- Autoridade policial responsável

2 - DADOS DO ADOLESCENTE:
- Nome completo (iniciais para preservar identidade)
- Idade na data do fato
- Filiação
- Endereço
- Situação escolar
- Antecedentes infracionais

3 - SÍNTESE DOS FATOS:
- Descrição detalhada do ato infracional
- Local, data e circunstâncias
- Vítima(s) identificada(s)
- Danos causados

4 - DILIGÊNCIAS REALIZADAS:
- Oitiva de testemunhas
- Depoimento do adolescente
- Oitiva dos responsáveis legais
- Apreensões efetuadas
- Outras diligências

5 - TIPIFICAÇÃO INFRACIONAL:
- Correspondência com crime do Código Penal
- Gravidade do ato infracional
- Circunstâncias agravantes ou atenuantes

6 - ANÁLISE SOCIAL:
- Situação familiar do adolescente
- Condições socioeconômicas
- Histórico escolar e comportamental
- Uso de substâncias entorpecentes

7 - RECOMENDAÇÕES:
- Necessidade de medidas socioeducativas
- Encaminhamentos para rede de proteção
- Acompanhamento psicossocial
- Outras medidas cabíveis

8 - OBSERVAÇÕES IMPORTANTES:
8.1 - Preserve sempre a identidade do adolescente
8.2 - Utilize linguagem técnica apropriada
8.3 - Considere os princípios do ECA
8.4 - Não invente informações não constantes nos autos
8.5 - Referencie sempre os IDs dos documentos

9 - FORMATAÇÃO:
9.1 - Use estrutura clara e organizada
9.2 - Destaque informações relevantes
9.3 - Mantenha objetividade e imparcialidade`,
                            video: "dQw4w9WgXcQ"
                        },
                        claude: {
                            prompt: `Você receberá um ou mais Boletins de Ocorrência Circunstanciada (BOCs) envolvendo atos infracionais praticados por adolescentes para elaboração de relatório detalhado.

Estrutura do Relatório:

1 - IDENTIFICAÇÃO DO BOC:
- Número do BOC
- Delegacia responsável
- Data e horário da ocorrência
- Data de registro
- Autoridade policial responsável

2 - DADOS DO ADOLESCENTE:
- Nome completo (iniciais para preservar identidade)
- Idade na data do fato
- Filiação
- Endereço
- Situação escolar
- Antecedentes infracionais

3 - SÍNTESE DOS FATOS:
- Descrição detalhada do ato infracional
- Local, data e circunstâncias
- Vítima(s) identificada(s)
- Danos causados

4 - DILIGÊNCIAS REALIZADAS:
- Oitiva de testemunhas
- Depoimento do adolescente
- Oitiva dos responsáveis legais
- Apreensões efetuadas
- Outras diligências

5 - TIPIFICAÇÃO INFRACIONAL:
- Correspondência com crime do Código Penal
- Gravidade do ato infracional
- Circunstâncias agravantes ou atenuantes

6 - ANÁLISE SOCIAL:
- Situação familiar do adolescente
- Condições socioeconômicas
- Histórico escolar e comportamental
- Uso de substâncias entorpecentes

7 - RECOMENDAÇÕES:
- Necessidade de medidas socioeducativas
- Encaminhamentos para rede de proteção
- Acompanhamento psicossocial
- Outras medidas cabíveis

8 - OBSERVAÇÕES IMPORTANTES:
8.1 - Preserve sempre a identidade do adolescente
8.2 - Utilize linguagem técnica apropriada
8.3 - Considere os princípios do ECA
8.4 - Não invente informações não constantes nos autos
8.5 - Referencie sempre os IDs dos documentos

9 - FORMATAÇÃO:
9.1 - Use estrutura clara e organizada
9.2 - Destaque informações relevantes
9.3 - Mantenha objetividade e imparcialidade`,
                            video: "dQw4w9WgXcQ"
                        }
                    }
                },
                elaboracao_representacao: {
                    nome: "Elaboração de Representação",
                    prerequisito: {
                        necessario: true,
                        tipo: "relatorio_bocs",
                        titulo: "Pré-requisito: Relatório de BOCs",
                        mensagem: `Para a elaboração uma representação bem fundamentada, esse prompt recebe o relatório do BOC, que pode ser feito através de prompt específico disponível nesse site. É necessário primeiro obter o relatório do BOC relacionado ao caso. Caso já tenha o relatório, você pode prosseguir clicando no botão "Continuar Mesmo Assim"`,
                    },
                    ias: {
                        googleai: {
                            prompt: `Com base no relatório de BOCs previamente elaborado, você deve agora elaborar uma representação para aplicação de medida socioeducativa.

Você é um Promotor de Justiça especialista em Direito da Criança e do Adolescente. Receberá informações de atos infracionais para elaboração de representação.

Estrutura da Representação:

1) QUALIFICAÇÃO DO ADOLESCENTE
   - Iniciais do nome (preservar identidade)
   - Idade, filiação, endereço
   - Situação escolar e social
   - Antecedentes infracionais

2) NARRATIVA DOS FATOS
   - Descrição cronológica do ato infracional
   - Local, data e circunstâncias
   - Participação do adolescente
   - Consequências do ato

3) TIPIFICAÇÃO INFRACIONAL
   - Correspondência com tipo penal
   - Gravidade do ato infracional
   - Circunstâncias do caso

4) FUNDAMENTAÇÃO LEGAL
   - Base no ECA (Lei 8.069/90)
   - Princípios da proteção integral
   - Jurisprudência aplicável
   - Análise das provas

5) ANÁLISE PSICOSSOCIAL
   - Situação familiar
   - Condições socioeconômicas
   - Fatores de risco e proteção
   - Necessidades do adolescente

6) MEDIDA SOCIOEDUCATIVA PROPOSTA
   - Justificativa da medida adequada
   - Objetivos pedagógicos
   - Prazo de aplicação
   - Condições específicas

7) PEDIDOS
   - Aplicação da medida socioeducativa
   - Acompanhamento técnico
   - Outras medidas complementares

Use linguagem técnica apropriada e considere sempre o caráter pedagógico das medidas socioeducativas.`,
                            video: "dQw4w9WgXcQ"
                        },
                        chatgptr: {
                            prompt: `Com base no relatório de BOCs previamente elaborado, você deve agora elaborar uma representação para aplicação de medida socioeducativa.

Você é um Promotor de Justiça especialista em Direito da Criança e do Adolescente. Receberá informações de atos infracionais para elaboração de representação.

Estrutura da Representação:

1) QUALIFICAÇÃO DO ADOLESCENTE
   - Iniciais do nome (preservar identidade)
   - Idade, filiação, endereço
   - Situação escolar e social
   - Antecedentes infracionais

2) NARRATIVA DOS FATOS
   - Descrição cronológica do ato infracional
   - Local, data e circunstâncias
   - Participação do adolescente
   - Consequências do ato

3) TIPIFICAÇÃO INFRACIONAL
   - Correspondência com tipo penal
   - Gravidade do ato infracional
   - Circunstâncias do caso

4) FUNDAMENTAÇÃO LEGAL
   - Base no ECA (Lei 8.069/90)
   - Princípios da proteção integral
   - Jurisprudência aplicável
   - Análise das provas

5) ANÁLISE PSICOSSOCIAL
   - Situação familiar
   - Condições socioeconômicas
   - Fatores de risco e proteção
   - Necessidades do adolescente

6) MEDIDA SOCIOEDUCATIVA PROPOSTA
   - Justificativa da medida adequada
   - Objetivos pedagógicos
   - Prazo de aplicação
   - Condições específicas

7) PEDIDOS
   - Aplicação da medida socioeducativa
   - Acompanhamento técnico
   - Outras medidas complementares

Use linguagem técnica apropriada e considere sempre o caráter pedagógico das medidas socioeducativas.`,
                            video: "dQw4w9WgXcQ"
                        },
                        claude: {
                            prompt: `Com base no relatório de BOCs previamente elaborado, você deve agora elaborar uma representação para aplicação de medida socioeducativa.

Você é um Promotor de Justiça especialista em Direito da Criança e do Adolescente. Receberá informações de atos infracionais para elaboração de representação.

Estrutura da Representação:

1) QUALIFICAÇÃO DO ADOLESCENTE
   - Iniciais do nome (preservar identidade)
   - Idade, filiação, endereço
   - Situação escolar e social
   - Antecedentes infracionais

2) NARRATIVA DOS FATOS
   - Descrição cronológica do ato infracional
   - Local, data e circunstâncias
   - Participação do adolescente
   - Consequências do ato

3) TIPIFICAÇÃO INFRACIONAL
   - Correspondência com tipo penal
   - Gravidade do ato infracional
   - Circunstâncias do caso

4) FUNDAMENTAÇÃO LEGAL
   - Base no ECA (Lei 8.069/90)
   - Princípios da proteção integral
   - Jurisprudência aplicável
   - Análise das provas

5) ANÁLISE PSICOSSOCIAL
   - Situação familiar
   - Condições socioeconômicas
   - Fatores de risco e proteção
   - Necessidades do adolescente

6) MEDIDA SOCIOEDUCATIVA PROPOSTA
   - Justificativa da medida adequada
   - Objetivos pedagógicos
   - Prazo de aplicação
   - Condições específicas

7) PEDIDOS
   - Aplicação da medida socioeducativa
   - Acompanhamento técnico
   - Outras medidas complementares

Use linguagem técnica apropriada e considere sempre o caráter pedagógico das medidas socioeducativas.`,
                            video: "dQw4w9WgXcQ"
                        }
                    }
                }
            }
        }
    },
    ias: {
        googleai: {
            nome: "Google AI Studio",
            descricao: "IA do Google, com capacidade de utilização com prompts e tarefas específicas"
        },
        gemini: {
            nome: "Gemini",
            descricao: "IA do Google, com capacidades multimodais"
        },
        chatgpt: {
            nome: "ChatGPT",
            descricao: "IA da OpenAI, versátil para diversas tarefas"
        },
        googleair: {
            nome: "Google AI Studio (IA sugerida)",
            descricao: "IA do Google, com capacidade de utilização com prompts e tarefas específicas"
        },
        geminir: {
            nome: "Gemini (IA sugerida)",
            descricao: "IA do Google, com capacidades multimodais"
        },
        chatgptr: {
            nome: "ChatGPT (IA sugerida)",
            descricao: "IA da OpenAI, versátil para diversas tarefas"
        },
        claude: {
            nome: "Claude",
            descricao: "IA da Anthropic, especializada em análise jurídica"
        }  
    }
};

