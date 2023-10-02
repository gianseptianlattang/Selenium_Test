import { Builder } from "selenium-webdriver";
import { LoginPage } from "../pages/Login.page.js";
import { Common } from "../pages/Common.page.js";
import { expect } from "chai";
import { Dashboard } from "../pages/Dashboard.page.js";

describe("Login to OrangeHRM", () => {
  let driver;
  describe("Positif Case Login to OrangeHRM", () => {
    before(async () => {
      driver = await new Builder().forBrowser("chrome").build();
      driver.manage().window().maximize();
    });
    after(async () => {
      await driver.close();
    });

    it("As a user, I can open login page and see the component", async function () {
      await LoginPage.openLoginPage(driver);

      //assertion
      const titleLogin = await LoginPage.checkTitleLogin(driver);
      const logoOrangeHRM = await LoginPage.checkLogoOrangeHRM(driver);
      expect(titleLogin).to.be.true;
      expect(logoOrangeHRM).to.be.true;
    });

    it("As a user, I can login to OrangeHRM sucessfully and see the dashboard component", async function () {
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);

      // assertion
      const elementAvatar = await Dashboard.checkAvatar(driver);
      const titleDashboard = await Dashboard.checkTitleDashboard(driver);
      const titleElementMyActions = await Dashboard.checkElementMyActions(
        driver
      );
      const titleElementQuickLaunch = await Dashboard.checkElementQuickLaunch(
        driver
      );
      const titleElementBuzzLatestPosts =
        await Dashboard.checkElementBuzzLatestPosts(driver);
      const titleElementEmployeesonLeaveToday =
        await Dashboard.checkElementEmployeesonLeaveToday(driver);
      const titleElementEmployeeDistributionbySubUnit =
        await Dashboard.checkElementEmployeeDistributionbySubUnit(driver);
      const titleElementEmployeeDistributionbyLocation =
        await Dashboard.checkElementEmployeeDistributionbyLocation(driver);
      expect(elementAvatar).to.be.true;
      expect(titleDashboard).to.be.true;
      expect(titleElementMyActions).to.be.true;
      expect(titleElementQuickLaunch).to.be.true;
      expect(titleElementBuzzLatestPosts).to.be.true;
      expect(titleElementEmployeesonLeaveToday).to.be.true;
      expect(titleElementEmployeeDistributionbySubUnit).to.be.true;
      expect(titleElementEmployeeDistributionbyLocation).to.be.true;
      await Common.wait(driver, 2000);
    });
  });

  describe("Negatif Case Login to OrangeHRM", () => {
    before(async () => {
      driver = await new Builder().forBrowser("chrome").build();
      driver.manage().window().maximize();
    });
    after(async () => {
      await driver.close();
    });

    it("As a user, I can't login to OrangeHRM using invalid username", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "InvalidUsername");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLoginInvalid(driver);

      // assertion
      const elemnetInvalidLogin = await LoginPage.elementInvalidLogin(driver);
      expect(elemnetInvalidLogin).to.be.true;
      await Common.wait(driver, 2000);
    });

    it("As a user, I can't login to OrangeHRM using invalid password", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "Invalid123");
      await LoginPage.clickLoginInvalid(driver);

      // assertion
      const elemnetInvalidLogin = await LoginPage.elementInvalidLogin(driver);
      expect(elemnetInvalidLogin).to.be.true;
      await Common.wait(driver, 2000);
    });
  });
});
