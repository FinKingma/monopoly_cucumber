Feature: Roll dice
  As a Player 
  I want to roll the dice
  So that my token can move to a new position

  Scenario Outline: Move token
    Given player’s token is at a <starting position>
    When player throws <sum of dice>
    Then player’s token moves to a <new position>

    Examples:
    | starting position  | sum of dice | new position |
    | 1                  | 3           | 4            |
    | 2                  | 7           | 9            |
    | 39                 | 4           | 3            |
