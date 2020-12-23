package stepDefinition;

import org.openqa.selenium.By;

import Utilities.utilities;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class LoginTest extends utilities {
	
	
	@Given("^I am on the login page$")
	public void i_am_on_the_login_page()  {
		driver.get("https://login.salesforce.com/");
	}

	@Given("^I enter valid username$")
	public void i_enter_valid_username(String username)  {
		driver.findElement(By.id("username")).sendKeys(username);
	}

	@Given("^I enter valid password$")
	public void i_enter_valid_password(String password) {
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^I click the login button$")
	public void i_click_the_login_button()  {
		 driver.findElement(By.id("Login")).click();
	}

	

}
