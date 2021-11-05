Feature: Create Todo

  Scenario: Creating my first todo
    Given I open my Todo App
    When I type "Buy milk" into the "Task" field
    And press enter
    Then the "Task" field clears
    And the "Tasks" list contains "Buy milk"