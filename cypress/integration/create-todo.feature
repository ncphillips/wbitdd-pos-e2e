Feature: Create Todo

  Scenario: Creating my first todo
    Given I open my Todo App
    When I enter "Buy milk" into the "New Task" field
    Then the "New Task" field clears
    And the "Tasks" list contains "Buy milk"

  Scenario: Creating multiple todos
    Given I open my Todo App
    When I enter "Clean fridge" into the "New Task" field
    And enter "Cook pasta" into the "New Task" field
    Then the "Tasks" list contains "Clean fridge"
    And the "Tasks" list contains "Cook pasta"


