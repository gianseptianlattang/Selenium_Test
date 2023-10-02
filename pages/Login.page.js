import { By, until } from "selenium-webdriver";

export const LoginPage = {
  openLoginPage: async (driver) => {
    await driver.get(
      `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`
    );
    await driver.wait(
      until.elementLocated(By.xpath(`//h5[text()='Login']`)),
      10000
    );
  },

  checkTitleLogin: async (driver) => {
    return await driver
      .findElement(By.xpath(`//h5[text()='Login']`))
      .isDisplayed();
  },

  checkLogoOrangeHRM: async (driver) => {
    return await driver
      .findElement(By.xpath(`//div[@class='orangehrm-login-branding']`))
      .isDisplayed();
  },

  elementInvalidLogin: async (driver) => {
    return await driver
      .findElement(By.xpath(`//div[@class='oxd-alert oxd-alert--error']`))
      .isDisplayed();
  },

  fillUsername: async (driver, username) => {
    const firstNameElement = await driver.findElement(By.name("username"));
    await firstNameElement.sendKeys(username);
  },

  fillPassword: async (driver, password) => {
    const firstNameElement = await driver.findElement(By.name("password"));
    await firstNameElement.sendKeys(password);
  },

  clickLogin: async (driver) => {
    await driver
      .findElement(
        By.xpath(
          `//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button`
        )
      )
      .click();
    await driver.wait(
      until.elementLocated(
        By.xpath(
          `//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/img`
        )
      ),
      10000
    );
    await driver.sleep(2000);
  },

  clickLoginInvalid: async (driver) => {
    await driver
      .findElement(
        By.xpath(
          `//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button`
        )
      )
      .click();
    await driver.wait(
      until.elementLocated(
        By.xpath(`//div[@class='oxd-alert oxd-alert--error']`)
      ),
      10000
    );
    await driver.sleep(2000);
  },
};
