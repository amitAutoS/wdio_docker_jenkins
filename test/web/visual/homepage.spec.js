import { expect } from 'chai';
import { loginPage } from '../../../pages/web/login'

function getRegion(selector) {
  const element = $(selector);
  const location = element.getLocation();
  const size = element.getSize();
  return {
    height: size.height,
    width: size.width,
    x: location.x,
    y: location.y
  };
}

suite('Visual regression tests on the home page.', () => {
  setup(() => {
    console.log('\n Inside setup \n');
    loginPage.open();
    
    console.log('\n login page opened \n');
    loginPage.buttonLogin.waitForExist();
    browser.pause(5000);
    expect(browser.checkFullPageScreen('Test checkFullPageScreen')).to.lessThan(2);
    // const results = browser.checkFullPageScreen('fullPageCheckFolders');
  });

  // test('Displays logo on the home page.', () => {
  //   var blockOutRegion = [];
  //   if (!browser.isMobile) {
  //     blockOutRegion.push(getRegion('div#homepage-slider'));
  //   }
  //   const testOptions = {
  //     blockOut: blockOutRegion,
  //   };
  //   const results = browser.checkFullPageScreen('fullPageCheckFolders', testOptions);
  //   console.log(results);
  //   expect(results.misMatchPercentage).to.lessThan(5);
  // });
});