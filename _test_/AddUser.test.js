import { Builder } from "selenium-webdriver";
import { LoginPage } from "../pages/Login.page.js";
import { Common } from "../pages/Common.page.js";
import { expect } from "chai";
import { Dashboard } from "../pages/Dashboard.page.js";
import { MenuAdmin } from "../pages/MenuAdmin.page.js";

describe("Add New User", () => {
  let driver;
  describe("Positif Case Add New User", () => {
    before(async () => {
      driver = await new Builder().forBrowser("chrome").build();
      driver.manage().window().maximize();
    });
    after(async () => {
      await driver.close();
    });

    it("As a user, I can add new user successfully", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);
      await Dashboard.clickMenuAdmin(driver);
      await MenuAdmin.clickAddUser(driver);
      await MenuAdmin.fillUserRole(driver);
      await MenuAdmin.fillStatus(driver);
      await MenuAdmin.fillEmployeeName(driver);
      await MenuAdmin.fillUsername(driver);
      await MenuAdmin.fillPassword(driver);
      await MenuAdmin.fillConfirmPassword(driver);
      await MenuAdmin.clickSave(driver);

      // assertion
      const successToast = await MenuAdmin.checkSuccessToast(driver);
      expect(successToast).to.be.true;
      await Common.wait(driver, 2000);
    });
  });

  describe("Negatif Case Add New User", () => {
    beforeEach(async () => {
      driver = await new Builder().forBrowser("chrome").build();
      driver.manage().window().maximize();
    });
    afterEach(async () => {
      await driver.close();
    });
    it("As a user, I can't add new user without fill the User Role", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);
      await Dashboard.clickMenuAdmin(driver);
      await MenuAdmin.clickAddUser(driver);
      await MenuAdmin.fillStatus(driver);
      await MenuAdmin.fillEmployeeName(driver);
      await MenuAdmin.fillUsername(driver);
      await MenuAdmin.fillPassword(driver);
      await MenuAdmin.fillConfirmPassword(driver);
      await MenuAdmin.clickSaveInvalid(driver);

      // assertion
      const invalidData = await MenuAdmin.checkMandatoryError(driver);
      expect(invalidData).to.be.true;
      await Common.wait(driver, 2000);
    });

    it("As a user, I can't add new user without fill the Status", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);
      await Dashboard.clickMenuAdmin(driver);
      await MenuAdmin.clickAddUser(driver);
      await MenuAdmin.fillUserRole(driver);
      await MenuAdmin.fillEmployeeName(driver);
      await MenuAdmin.fillUsername(driver);
      await MenuAdmin.fillPassword(driver);
      await MenuAdmin.fillConfirmPassword(driver);
      await MenuAdmin.clickSaveInvalid(driver);

      // assertion
      const invalidData = await MenuAdmin.checkMandatoryError(driver);
      expect(invalidData).to.be.true;
      await Common.wait(driver, 2000);
    });

    it("As a user, I can't add new user without fill the Employee Name", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);
      await Dashboard.clickMenuAdmin(driver);
      await MenuAdmin.clickAddUser(driver);
      await MenuAdmin.fillUserRole(driver);
      await MenuAdmin.fillStatus(driver);
      await MenuAdmin.fillUsername(driver);
      await MenuAdmin.fillPassword(driver);
      await MenuAdmin.fillConfirmPassword(driver);
      await MenuAdmin.clickSaveInvalid(driver);

      // assertion
      const invalidData = await MenuAdmin.checkMandatoryError(driver);
      expect(invalidData).to.be.true;
      await Common.wait(driver, 2000);
    });

    it("As a user, I can't add new user without fill the Username", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);
      await Dashboard.clickMenuAdmin(driver);
      await MenuAdmin.clickAddUser(driver);
      await MenuAdmin.fillUserRole(driver);
      await MenuAdmin.fillStatus(driver);
      await MenuAdmin.fillEmployeeName(driver);
      await MenuAdmin.fillPassword(driver);
      await MenuAdmin.fillConfirmPassword(driver);
      await MenuAdmin.clickSaveInvalid(driver);

      // assertion
      const invalidData = await MenuAdmin.checkMandatoryError(driver);
      expect(invalidData).to.be.true;
      await Common.wait(driver, 2000);
    });

    it("As a user, I can't add new user without fill the Password", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);
      await Dashboard.clickMenuAdmin(driver);
      await MenuAdmin.clickAddUser(driver);
      await MenuAdmin.fillUserRole(driver);
      await MenuAdmin.fillStatus(driver);
      await MenuAdmin.fillEmployeeName(driver);
      await MenuAdmin.fillUsername(driver);
      await MenuAdmin.fillConfirmPassword(driver);
      await MenuAdmin.clickSaveInvalid(driver);

      // assertion
      const invalidDataPass = await MenuAdmin.checkMandatoryError(driver);
      const invalidDataConfirmPass = await MenuAdmin.checkMandatoryError(
        driver,
        "Passwords do not match"
      );
      expect(invalidDataPass).to.be.true;
      expect(invalidDataConfirmPass).to.be.true;
      await Common.wait(driver, 2000);
    });

    it("As a user, I can't add new user without fill the Confirm Password", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);
      await Dashboard.clickMenuAdmin(driver);
      await MenuAdmin.clickAddUser(driver);
      await MenuAdmin.fillUserRole(driver);
      await MenuAdmin.fillStatus(driver);
      await MenuAdmin.fillEmployeeName(driver);
      await MenuAdmin.fillUsername(driver);
      await MenuAdmin.fillPassword(driver);
      await MenuAdmin.clickSaveInvalid(driver);

      // assertion
      const invalidData = await MenuAdmin.checkMandatoryError(driver);
      expect(invalidData).to.be.true;
      await Common.wait(driver, 2000);
    });

    it("As a user, I can't add new user using Existing Username", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);
      await Dashboard.clickMenuAdmin(driver);
      await MenuAdmin.clickAddUser(driver);
      await MenuAdmin.fillUserRole(driver);
      await MenuAdmin.fillStatus(driver);
      await MenuAdmin.fillEmployeeName(driver);
      await MenuAdmin.fillExistingUsername(driver);
      await MenuAdmin.fillPassword(driver);
      await MenuAdmin.fillConfirmPassword(driver);
      await MenuAdmin.clickSaveInvalid(driver);

      // assertion
      const invalidData = await MenuAdmin.checkMandatoryError(
        driver,
        "Already exists"
      );
      expect(invalidData).to.be.true;
      await Common.wait(driver, 2000);
    });

    it("As a user, I can't add new user using different data between Password and Confirm Password", async function () {
      await LoginPage.openLoginPage(driver);
      await LoginPage.fillUsername(driver, "Admin");
      await LoginPage.fillPassword(driver, "admin123");
      await LoginPage.clickLogin(driver);
      await Dashboard.clickMenuAdmin(driver);
      await MenuAdmin.clickAddUser(driver);
      await MenuAdmin.fillUserRole(driver);
      await MenuAdmin.fillStatus(driver);
      await MenuAdmin.fillEmployeeName(driver);
      await MenuAdmin.fillUsername(driver);
      await MenuAdmin.fillPassword(driver);
      await MenuAdmin.fillDiffConfirmPassword(driver);
      await MenuAdmin.clickSaveInvalid(driver);

      // assertion
      const invalidData = await MenuAdmin.checkMandatoryError(
        driver,
        "Passwords do not match"
      );
      expect(invalidData).to.be.true;
      await Common.wait(driver, 2000);
    });
  });
});
