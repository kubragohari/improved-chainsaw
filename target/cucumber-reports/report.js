$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Account.feature");
formatter.feature({
  "line": 1,
  "name": "Test account2 object",
  "description": "I want to make sure all the fields appear on the account object",
  "id": "test-account2-object",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I am on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "AccountTest.i_open_chrome_browser()"
});
formatter.result({
  "duration": 6964679900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_am_on_the_login_page()"
});
formatter.result({
  "duration": 429550600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify the type field and its options",
  "description": "",
  "id": "test-account2-object;verify-the-type-field-and-its-options",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@accounts"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter username as \"test.user@gmail.com.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter password as \"Pa55word\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click the Accounts tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click the New button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see Account Name field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see Account Number field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see Type field with different option",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see all the type field options",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "test.user@gmail.com.test",
      "offset": 21
    }
  ],
  "location": "AccountTest.I_enter_username_as(String)"
});
formatter.result({
  "duration": 526769200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 21
    }
  ],
  "location": "AccountTest.i_enter_password_as(String)"
});
formatter.result({
  "duration": 717044100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "duration": 823185800,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_dashboard()"
});
formatter.result({
  "duration": 1900972800,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_Accounts_tab()"
});
formatter.result({
  "duration": 1588150400,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.I_click_the_New_button()"
});
formatter.result({
  "duration": 1782352700,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_should_see_Account_Name_field()"
});
formatter.result({
  "duration": 62763100,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_should_see_Account_Number_field()"
});
formatter.result({
  "duration": 60191000,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_should_see_Type_field_with_different_option()"
});
formatter.result({
  "duration": 85991600,
  "status": "passed"
});
formatter.match({
  "location": "AccountTest.i_should_see_all_the_type_field_options()"
});
formatter.result({
  "duration": 957909200,
  "status": "passed"
});
formatter.uri("feature/login.feature");
formatter.feature({
  "line": 2,
  "name": "Test login functionality",
  "description": "I want to make sure the login functionality is working",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Verify login functionality using valid crdentials",
  "description": "",
  "id": "test-login-functionality;verify-login-functionality-using-valid-crdentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter valid username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_am_on_the_login_page()"
});
formatter.result({
  "duration": 629798500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username(String)"
});
formatter.result({
  "duration": 469100,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepDefinition.LoginTest.i_enter_valid_username(String) in file:/C:/Users/kubragohari/eclipse-workspace/com.codegator.cucumber/target/test-classes/\u0027 with pattern [^I enter valid username$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: And I enter valid username\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountTest.I_should_see_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
});