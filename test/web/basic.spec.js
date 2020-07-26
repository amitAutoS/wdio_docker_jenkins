import { expect } from 'chai';

suite('webdriver.io page', () => {
    test('should have the right title', () => {
        browser.url('/');
        const title = browser.getTitle();
        console.log('Browser Title is: '+title);
        expect(title).to.equal('My Store');
    });
});