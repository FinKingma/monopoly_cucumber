Feature: Roll dice
  As a Player 
  I want to roll the dice
  So that my token can move to a new position

  Scenario Outline: Move token
    Given Laura’s token is at a <starting position>
    When Laura throws <sum of dice> in total
    Then Laura’s token moves to a <new position>

    Examples:
    | starting position  | sum of dice | new position |
    | 1                  | 3           | 4            |
    | 2                  | 7           | 9            |
    | 39                 | 4           | 3            |

  Scenario Outline: Another turn
    Given Laura’s turn
    When Laura throws <dice 1> & <dice 2>
    Then Laura gets <another turn>

    Examples:
    | dice 1    | dice 2  | another turn |
    | 1         | 1       | yes          |
    | 5         | 3       | no           |

  Scenario: Going to jail
    When Laura’s throws double 3 times in a row
    Then Laura goes to jail