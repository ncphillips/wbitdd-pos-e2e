Feature: Create Todo

  Scenario: Creating my first todo
    Given I open my Todo App
    When I enter "Buy milk" into the "New Task" field
    Then the "New Task" field clears
    And the "Tasks" list contains "Buy milk"