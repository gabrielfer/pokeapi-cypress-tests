# PokéAPI Cypress Tests

This is a **Cypress** test automation project for [PokéAPI](https://pokeapi.co/).  
The goal is to validate some Pokémon API endpoints using **API tests**.

## 📌 Features
- Automated API tests for PokéAPI using **Cypress**.
- Custom Cypress commands for reusable API calls.
- Enum-based structure for **HTTP methods** and **status codes**.

## 🚀 Getting Started

### 1️⃣ Prerequisites
Ensure you have the following installed:
- **[Node.js](https://nodejs.org/)** (LTS recommended)
- **[npm](https://www.npmjs.com/)** (comes with Node.js)

### 2️⃣ Install Dependencies
Clone this repository and install the dependencies:

```sh
git clone https://github.com/your-username/pokeapi-cypress-tests.git
cd pokeapi-cypress-tests
npm install
```

### 3️⃣ Run Tests
Run the Cypress tests in headless mode:
```
npx cypress run
```

Or open the Cypress Test Runner:
```
npx cypress open
```

 🔧 Custom Commands
This project includes a Cypress custom command for making API requests:

```
cy.pokeApi(method, endpoint)
```

Example Usage:
```
cy.pokeApi('GET', 'pokemon/pikachu').then((response) => {
  expect(response.status).to.eq(200);
});
```

🛠️ Contributing
Feel free to fork this repository and contribute!
PRs are welcome. 😊

📜 License
MIT License.
This project is not affiliated with PokéAPI.
