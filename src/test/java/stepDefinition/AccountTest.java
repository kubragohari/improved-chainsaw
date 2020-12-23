package stepDefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import Utilities.utilities;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class AccountTest extends utilities{
	@Given("^I open chrome browser$")
	public void i_open_chrome_browser() {
		openBrowser();
	}

	@Given("^I enter username as \"([^\"]*)\"$")
	public void I_enter_username_as(String username) {
	   driver.findElement(By.id("username")).sendKeys(username);
	}

	@Given("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as(String password){
		 driver.findElement(By.id("password")).sendKeys(password);
	}

	@Then("^I should see the dashboard$")
	public void I_should_see_the_dashboard()  {
		Assert.assertTrue(driver.findElement(By.linkText("Accounts")).isDisplayed());
	}
	
	@Then("^I click the Accounts tab$")
	public void I_click_the_Accounts_tab() {
	   driver.findElement(By.linkText("Accounts")).click();
	}

	@Then("^I click the New button$")
	public void I_click_the_New_button() {
		driver.findElement(By.name("new")).click();
	}

	@Then("^I should see Account Name field$")
	public void i_should_see_Account_Name_field()  {
		Assert.assertTrue(driver.findElement(By.id("acc2")).isDisplayed());
	}

	@Then("^I should see Account Number field$")
	public void i_should_see_Account_Number_field() {
		Assert.assertTrue(driver.findElement(By.id("acc5")).isDisplayed());
	}
	
	@Then("^I select the type field as \"([^\"]*)\"$")
	public void I_select_the_type_field_as(String value) {
	    WebElement typeSel = driver.findElement(By.id("acc6"));
	    Select type = new Select(typeSel);
	    type.selectByVisibleText(value);
	}

	@Then("^I should see Type field with different option$")
	public void i_should_see_Type_field_with_different_option() {
		driver.findElement(By.id("acc6")).isDisplayed();
	}
	
	@Then("^I should see all the type field options$")
	public void i_should_see_all_the_type_field_options() {
	   String expectedType[]= {"--None--","Prospect","Customer - Direct","Customer - Channel",
			   				   "Channel Partner / Reseller","Installation Partner", 
			   				   "Technology Partner", "Other"};
	   
	  WebElement type = driver.findElement(By.id("acc6"));
	  Select typeSel = new Select(type);
	  List<WebElement> typeOptions = typeSel.getOptions();
	  for (int i=0; i <typeOptions.size();i++){
	  Assert.assertEquals(expectedType[i], typeOptions.get(i).getText());
}
}
}
