describe("JQueryBox", function() {

  var handler;

  beforeEach(function() {
    jasmine.getFixtures().set('<a id="handler">some content</a>');
    handler = $('#handler');    
    handler.data('consoleTmpl', 'simple-template');
    console.debug(handler, handler.parents())
    handler.parent().show().height(100);
  });
  describe("SimpleTemplate", function() {
    it("should work", function() {
      handler.trigger( $.Event('click') );
      // console.debug($('.context'));
    })
  });
});