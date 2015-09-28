'use strict';

describe('drakov connection', function() {
  it('should be able to contact drakov backend mock', function() {
    browser.get('/index.html');

    element(by.css('#drakov-test-button')).click();

    expect(element(by.binding('message')).getText())
      .toBe("Hello World!");
  });
});
