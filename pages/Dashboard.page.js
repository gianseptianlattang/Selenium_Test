import { By, until } from "selenium-webdriver";

export const Dashboard = {
  checkAvatar: async (driver) => {
    return await driver
      .findElement(By.xpath(`//span[@class='oxd-userdropdown-tab']`))
      .isDisplayed();
  },

  checkTitleDashboard: async (driver) => {
    return await driver
      .findElement(By.xpath(`//h6[text()='Dashboard']`))
      .isDisplayed();
  },

  checkElementTimeatWork: async (driver) => {
    return await driver
      .findElement(By.xpath(`//p[text()='Time at Work']`))
      .isDisplayed();
  },

  checkElementMyActions: async (driver) => {
    return await driver
      .findElement(By.xpath(`//p[text()='My Actions']`))
      .isDisplayed();
  },

  checkElementQuickLaunch: async (driver) => {
    return await driver
      .findElement(By.xpath(`//p[text()='Quick Launch']`))
      .isDisplayed();
  },

  checkElementBuzzLatestPosts: async (driver) => {
    return await driver
      .findElement(By.xpath(`//p[text()='Buzz Latest Posts']`))
      .isDisplayed();
  },

  checkElementEmployeesonLeaveToday: async (driver) => {
    return await driver
      .findElement(By.xpath(`//p[text()='Employees on Leave Today']`))
      .isDisplayed();
  },

  checkElementEmployeeDistributionbySubUnit: async (driver) => {
    return await driver
      .findElement(By.xpath(`//p[text()='Employee Distribution by Sub Unit']`))
      .isDisplayed();
  },

  checkElementEmployeeDistributionbyLocation: async (driver) => {
    return await driver
      .findElement(By.xpath(`//p[text()='Employee Distribution by Location']`))
      .isDisplayed();
  },

  checkElementSidebar: async (driver) => {
    return await driver
      .findElement(By.xpath(`//div[@class='oxd-sidepanel-body']`))
      .isDisplayed();
  },

  checkElementSystemUser: async (driver) => {
    return await driver
      .findElement(By.xpath(`//h5[text()='System Users']`))
      .isDisplayed();
  },

  clickMenuAdmin: async (driver) => {
    await driver.findElement(By.xpath(`//span[text()='Admin']`)).click();
    await driver.wait(
      until.elementLocated(By.xpath(`//h5[text()='System Users']`)),
      10000
    );
    await driver.sleep(2000);
  },
};
