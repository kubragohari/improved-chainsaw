
Feature: Test login functionality 
I want to make sure the login functionality is working
  

  @smokeTest 
  Scenario: Verify login functionality using valid crdentials
    Given I am on the login page
    And I enter valid username
    And I enter valid password 
    When I click the login button
    Then I should see the dashboard