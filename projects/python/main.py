#####################
# Welcome to Cursor #
#####################

# '''
# Step 1: Try generating with Cmd+K or Ctrl+K on a new line. Ask for CLI-based game of TicTacToe.

# Step 2: Hit Cmd+L or Ctrl+L and ask the chat what the code does. 
#    - Then, try running the code

# Step 3: Try highlighting all the code with your mouse, then hit Cmd+k or Ctrl+K. 
#    - Instruct it to change the game in some way (e.g. add colors, add a start screen, make it 4x4 instead of 3x3)

# Step 4: To try out cursor on your own projects, go to the file menu (top left) and open a folder.
# ''''

import random

def print_board(board):
    print("\n")
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("-----------")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("-----------")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print("\n")

def check_winner(board):
    # Check rows, columns, and diagonals
    win_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        [0, 4, 8], [2, 4, 6]  # Diagonals
    ]
    for combo in win_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] != " ":
            return board[combo[0]]
    if " " not in board:
        return "Tie"
    return None

def get_player_move(board):
    while True:
        try:
            move = int(input("Enter your move (1-9): ")) - 1
            if 0 <= move <= 8 and board[move] == " ":
                return move
            else:
                print("Invalid move. Try again.")
        except ValueError:
            print("Invalid input. Please enter a number between 1 and 9.")

def get_computer_move(board):
    empty_spots = [i for i, spot in enumerate(board) if spot == " "]
    return random.choice(empty_spots)

def main():
    print("Welcome to Tic-Tac-Toe!")
    print("Player 1 is X and Player 2 (Computer) is O")
    print("To make a move, enter a number from 1-9 corresponding to the board position:")
    print(" 1 | 2 | 3 ")
    print("-----------")
    print(" 4 | 5 | 6 ")
    print("-----------")
    print(" 7 | 8 | 9 ")
    print("\n")

    while True:
        play = input("Do you want to play? (yes/no): ").lower().strip()
        if play == "yes":
            break
        elif play == "no":
            print("Maybe next time. Goodbye!")
            return
        else:
            print("Please enter 'yes' or 'no'.")

    board = [" " for _ in range(9)]
    current_player = "X"

    while True:
        print_board(board)
        if current_player == "X":
            move = get_player_move(board)
        else:
            print("Computer's turn...")
            move = get_computer_move(board)

        board[move] = current_player

        winner = check_winner(board)
        if winner:
            print_board(board)
            if winner == "Tie":
                print("It's a tie!")
            else:
                print(f"{'You' if winner == 'X' else 'Computer'} win!")
            break

        current_player = "O" if current_player == "X" else "X"

if __name__ == "__main__":
    main()

# This code implements a command-line interface (CLI) based Tic-Tac-Toe game.
# Here's a breakdown of what the code does:

# 1. It defines several functions:
#    - print_board(): Displays the current state of the game board.
#    - check_winner(): Checks if there's a winner or a tie.
#    - get_player_move(): Prompts the player for their move and validates it.
#    - get_computer_move(): Generates a random move for the computer.
#    - play_tictactoe(): The main game loop that coordinates turns and checks for game end.

# 2. The game board is represented as a list of 9 elements, initially all spaces.

# 3. The game alternates between the player (X) and the computer (O).

# 4. For each turn:
#    - The current board state is printed.
#    - If it's the player's turn, they're prompted for input.
#    - If it's the computer's turn, a random valid move is generated.
#    - The move is applied to the board.
#    - The game checks for a winner or tie.

# 5. The game continues until there's a winner or a tie.

# 6. At the end, the final board state is displayed along with the game result.

# 7. The game starts when the script is run directly (not imported as a module).

def show_instructions():
    print("\nWelcome to Tic-Tac-Toe!")
    print("\nInstructions:")
    print("1. The game is played on a 3x3 grid.")
    print("2. You are 'X', and the computer is 'O'.")
    print("3. Players take turns putting their marks in empty squares.")
    print("4. The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.")
    print("5. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.")
    print("\nTo make a move, enter a number from 1-9 corresponding to the board position:")
    print(" 1 | 2 | 3 ")
    print("---+---+---")
    print(" 4 | 5 | 6 ")
    print("---+---+---")
    print(" 7 | 8 | 9 ")
    
    input("\nPress Enter to start the game...")

def play_tictactoe():
    show_instructions()
    board = [" " for _ in range(9)]
    current_player = "X"

    while True:
        print_board(board)

