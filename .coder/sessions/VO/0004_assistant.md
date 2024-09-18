Para resolver o problema, precisamos migrar a configuração do Cypress do arquivo `cypress.json` para o novo formato `cypress.config.js`. Vou criar o arquivo `cypress.config.js` e remover o `cypress.json`.

### cypress.config.js [coder:save]
```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-vendedoronline.viavarejo.com.br',
    viewportWidth: 1072,
    viewportHeight: 893,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```
[coder:end]

### cypress.json [coder:delete]

Agora, o arquivo de configuração do Cypress foi migrado para `cypress.config.js` e o arquivo `cypress.json` foi removido. Isso deve resolver o problema que você encontrou ao rodar os testes no GitHub Actions.