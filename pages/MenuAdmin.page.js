import { By, until } from "selenium-webdriver";

export const MenuAdmin = {
  clickAddUser: async (driver) => {
    await driver.findElement(By.xpath(`//button[text()=' Add ']`)).click();
    await driver.wait(
      until.elementLocated(By.xpath(`//h6[text()='Add User']`)),
      10000
    );
    await driver.sleep(2000);
  },

  fillUserRole: async (driver) => {
    await driver
      .findElement(
        By.css(
          `#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1)`
        )
      )
      .click();
    await driver
      .findElement(By.xpath(`//div[@role='listbox']`))
      .findElement(By.xpath(`.//div[span[text()='Admin']]`))
      .click();
  },

  fillStatus: async (driver) => {
    await driver
      .findElement(
        By.css(
          `#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(3)`
        )
      )
      .click();
    await driver
      .findElement(By.xpath(`//div[@role='listbox']`))
      .findElement(By.xpath(`.//div[span[text()='Enabled']]`))
      .click();
  },

  fillEmployeeName: async (driver) => {
    const employeeName = await driver.findElement(
      By.xpath(`//input[@placeholder='Type for hints...']`)
    );
    await employeeName.sendKeys("Odis Adalwin");
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//div[@role='option']`)).click();
  },

  fillUsername: async (driver) => {
    await driver.sleep(1000);
    const userNumber = Math.floor(Math.random() * 1000);
    const usernameData = await driver.findElement(
      By.css(
        `#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input`
      )
    );
    await usernameData.sendKeys(`UserTesting${userNumber}`);
  },

  fillExistingUsername: async (driver) => {
    await driver.sleep(1000);
    const usernameData = await driver.findElement(
      By.css(
        `#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input`
      )
    );
    await usernameData.sendKeys(`Testing`);
  },

  fillPassword: async (driver) => {
    await driver.sleep(1000);
    const password = await driver.findElement(
      By.css(
        `#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input`
      )
    );
    await password.sendKeys("admin123");
  },

  fillConfirmPassword: async (driver) => {
    await driver.sleep(1000);
    const confrimPass = await driver.findElement(
      By.css(
        `#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input`
      )
    );
    await confrimPass.sendKeys("admin123");
  },

  fillDiffConfirmPassword: async (driver) => {
    await driver.sleep(1000);
    const confrimPass = await driver.findElement(
      By.css(
        `#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input`
      )
    );
    await confrimPass.sendKeys("admin333");
  },

  clickSave: async (driver) => {
    await driver.findElement(By.xpath(`//button[text()=' Save ']`)).click();
    await driver.wait(
      until.elementLocated(
        By.xpath(
          `//div[@class='oxd-toast oxd-toast--success oxd-toast-container--toast']`
        )
      ),
      10000
    );
  },

  clickSaveInvalid: async (driver) => {
    await driver.findElement(By.xpath(`//button[text()=' Save ']`)).click();
    await driver.sleep(2000);
  },

  checkSuccessToast: async (driver) => {
    return await driver
      .findElement(
        By.xpath(
          `//div[@class='oxd-toast oxd-toast--success oxd-toast-container--toast']`
        )
      )
      .isDisplayed();
  },

  checkMandatoryError: async (driver, message = "Required") => {
    return await driver
      .findElement(
        By.xpath(
          `//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message' and text()='${message}']`
        )
      )
      .isDisplayed();
  },
};
