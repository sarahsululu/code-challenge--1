# code-challenge--1
# Week 1 JavaScript Code Challenges

## Description

This repository contains my solutions for the Week 1 Code Challenges provided as part of [mention your course or program name if applicable, otherwise omit]. The challenges focus on fundamental JavaScript concepts including variables, data types, operators, functions, user input (simulated via `prompt`), conditional logic, and basic object manipulation.

The challenges covered are:

1.  **Chai Bora Ingredient Calculator:** A script that calculates the required ingredients for making Kenyan chai based on the number of cups requested by the user.
2.  **Boda Boda Ride Fare Estimator:** A script that estimates the fare for a motorcycle taxi ride based on a base fare and distance traveled.
3.  **Simplified Mobile Money Transaction Fee Estimator:** A script that calculates a transaction fee based on a percentage, while enforcing minimum and maximum fee limits.

## Project Structure

The code for each challenge is organized into dedicated folders within the `Code-Challenge-1` repository:

*   `chaiCalculator/`: Contains the solution for Challenge 1 (`chai.js`).
*   `bodaFareCalculator/`: Contains the solution for Challenge 2 (`fare.js`).
*   `mobileMoneyEstimator/`: Contains the solution for Challenge 3 (`fee.js`).

Each folder contains a single JavaScript file with the complete solution for that specific challenge.

## Project Setup and How to Run

To set up and run the code from this repository:

1.  **Clone the repository:**
    ```bash
    git clone [Link to your GitHub repository]
    ```
    Replace `[Link to your GitHub repository]` with the actual URL of your repository on GitHub.
2.  **Navigate into the repository directory:**
    ```bash
    cd Code-Challenge-1
    ```
    (Or whatever you named your repository)
3.  **Running the scripts:**
    These scripts use the `prompt()` function, which is typically available in web browser environments or simulated in other environments. You will need an environment that supports `prompt()` to run these scripts as written.

    *   **Example using Node.js with a library (requires setup):**
        If running in a terminal using Node.js, you would typically need a library like `readline-sync` to handle prompts. After installing such a library (`npm install readline-sync` and modifying your JS files to use it), you could run:
        ```bash
        node chaiCalculator/chai.js
        # or
        node bodaFareCalculator/fare.js
        # or
        node mobileMoneyEstimator/fee.js
        ```

    **Note:** Ensure you are running the scripts in an environment where `prompt()` is available or correctly polyfilled/simulated.

## Author

*   [Your Name]
*   [Your GitHub Username (Optional)]

## License

This project is licensed under the [e.g., MIT License]. You can find the full license text in the [LICENSE](LICENSE) file (if you choose to add a license file).
