# Tic Tac Toe Game

## Project Description

This is a fully responsive Tic Tac Toe game built with React and TypeScript. It allows users to play either solo against the computer or in a multiplayer mode against another person. The game includes various features such as hover states, game state preservation, and an intelligent computer opponent.

## Features

- **Responsive Design**: The game layout adjusts optimally based on the device's screen size.
- **Interactive Elements**: All interactive elements have hover states for better user experience.
- **Game Modes**: Play solo vs the computer or in multiplayer mode against another person.
- **Game State Preservation**: The game state is saved in the browser, so it is preserved if the player refreshes their browser.
- **Intelligent Computer Opponent**: The computer opponent is designed to proactively block the player's moves and try to win.

## Installation Instructions

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe-react-ts.git
   cd tic-tac-toe-react-ts
2. **Install Dependencies**:
   ```bash
   npm install

3. **Run the Application**:
   ```bash
   npm start

## Usage
After installation, you can use the application by navigating through the following steps:

- Choose a game mode (Solo vs Computer or Multiplayer).
- Play the game by clicking on the cells to make your move.
- View the game state and winner announcement.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Implementation Details

- **Responsive Design**: Use Tailwind CSS to make the layout responsive.
- **Hover States**: Tailwind CSS provides utilities for hover states.
- **Game Modes**: Implement state management in React to switch between game modes.
- **Game State Preservation**: Use `localStorage` to save and retrieve the game state.
- **Intelligent Computer Opponent**: Implement a basic minimax algorithm or similar strategy for the computer moves.
