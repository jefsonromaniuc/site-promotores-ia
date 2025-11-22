# 🚀 Site de Prompts IA para Promotores de Justiça

Sistema interativo para auxiliar Promotores de Justiça na seleção de prompts específicos de Inteligência Artificial, com tutoriais em vídeo integrados.

## 📋 Funcionalidades

- ✅ **Navegação em 4 etapas**: Área → Documento → IA → Resultado
- ✅ **10 prompts organizados** por área jurídica (Cível, Criminal, Infância)
- ✅ **3 plataformas de IA** suportadas (Claude, ChatGPT, Gemini)
- ✅ **Vídeos tutoriais** embarcados do YouTube
- ✅ **Cópia de prompts** com um clique
- ✅ **Design responsivo** para desktop e mobile
- ✅ **Interface profissional** adequada ao público jurídico

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variáveis CSS
- **JavaScript Vanilla** - Lógica da aplicação
- **Google Fonts** - Tipografia (Inter)
- **YouTube API** - Integração de vídeos

## 📁 Estrutura do Projeto

```
site-promotores-ia/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos da aplicação
├── js/
│   ├── app.js          # Lógica principal
│   └── data.js         # Base de dados dos prompts
├── assets/
│   └── icons/          # Ícones (se necessário)
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Baixe todos os arquivos
2. Abra `index.html` diretamente no navegador
3. Navegue pelas etapas para encontrar seu prompt

### Opção 2: Servidor Local (Recomendado)
1. Instale um servidor HTTP simples:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server -p 8000
   ```
2. Acesse `http://localhost:8000`

## 🌐 Deploy

### GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages em Settings → Pages
4. Seu site estará em `https://seuusuario.github.io/repositorio`

### Netlify
1. Acesse netlify.com
2. Arraste a pasta do projeto para a área de deploy
3. Seu site será publicado automaticamente

### Vercel
1. Instale Vercel CLI: `npm install -g vercel`
2. Execute `vercel` na pasta do projeto
3. Siga as instruções para deploy

## 📝 Personalizações

### Adicionar Novos Prompts
Edite o arquivo `js/data.js` e adicione novos prompts na estrutura existente:

```javascript
promptsData.areas.nova_area = {
    nome: "Nova Área",
    objetos: {
        novo_documento: {
            nome: "Novo Tipo de Documento",
            ias: {
                claude: {
                    prompt: "Seu novo prompt aqui...",
                    video: "ID_do_video_youtube"
                }
                // ... outras IAs
            }
        }
    }
};
```

### Atualizar Vídeos
1. Faça upload do vídeo no YouTube
2. Copie o ID do vídeo (após `watch?v=`)
3. Substitua no campo `video` do prompt correspondente

### Personalizar Cores
Edite as variáveis CSS no arquivo `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Cor principal */
    --accent-color: #0ea5e9;     /* Cor de destaque */
    /* ... outras variáveis */
}
```

## 🔧 Manutenção

### Atualizações Trimestrais
1. Edite `js/data.js` com novos prompts
2. Atualize vídeos se necessário
3. Faça novo deploy
4. Teste todas as funcionalidades

### Monitoramento
- Configure Google Analytics para acompanhar uso
- Monitore erros no console do navegador
- Colete feedback dos usuários

## 📊 Compatibilidade

- ✅ **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ **Dispositivos**: Desktop, Tablet, Mobile
- ✅ **Sistemas**: Windows, macOS, Linux, iOS, Android

## 🆘 Suporte

### Problemas Comuns

**Site não carrega:**
- Verifique se todos os arquivos estão na mesma pasta
- Abra o console do navegador (F12) para ver erros

**Vídeos não aparecem:**
- Verifique se os IDs dos vídeos estão corretos
- Teste a conexão com internet

**Botões não funcionam:**
- Verifique se JavaScript está habilitado
- Veja erros no console do navegador

### Debug
Abra o console do navegador (F12) e digite:
```javascript
debugState(); // Ver estado atual da aplicação
```

## 📄 Licença

Este projeto é de uso livre para fins educacionais e profissionais no âmbito do Ministério Público.

## 👨‍💻 Desenvolvimento

**Versão:** 1.0.0  
**Data:** Agosto 2025  
**Autor:** Manus AI  

---

**Desenvolvido para auxiliar Promotores de Justiça no uso eficiente de Inteligência Artificial** 🚀

