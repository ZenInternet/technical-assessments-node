# technical-assessments-node

This repository contains a technical assessment for a job interview at Zen Internet. Please ensure that you have completed the setup instructions below **before** the interview. This will help you to be fully prepared and allow you to focus on the tasks provided during the interview.

## Setup Instructions

### Prerequisites

- Yarn 2+
- Node 18+

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/ZenInternet/technical-assessments-node.git
  cd technical-assessments-node
  ```

2. Install dependencies:
  ```sh
  yarn install
  ```

3. Run the application:
  ```sh
  yarn start
  ```

4. Run the mock API (in a separate terminal): 
  ```sh
  yarn start-db
  ```

## Tests

### Running Tests

To run the tests using Jest, use the following command:

```sh
yarn test
```

To run tests in watch mode:

```sh
yarn test --watch
```

To generate a code coverage report:

```sh
yarn test --coverage
```

## Mock API
Data for the Mock API is provided in the db.json file and is served via the `json-server` package and `yarn start-db` command. 

## Your assessment

Please take some time to explore the repository and famailiarise yourself with the project and its structure.

You will be provided with tasks to complete during the interview. 

