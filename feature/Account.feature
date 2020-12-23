Feature: Test account2 object
I want to make sure all the fields appear on the account object
 
Background:
Given I open chrome browser
And I am on the login page

 @accounts @regression
  Scenario: Verify the type field and its options
    And I enter username as "test.user@gmail.com.test"
    And I enter password as "Pa55word"
    When I click the login button
    Then I should see the dashboard
    And I click the Accounts tab
    And I click the New button
    And I should see Account Name field
    And I should see Account Number field
    And I should see Type field with different option
    Then I should see all the type field options