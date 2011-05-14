
TODO:
====
- add real tests.
- implement automatic colision methods
- load remote content "context-url='/foo.html'

Depends:
  - jquery
  - jquery-ui-position
  - jquery-tmpl
  
Example:

<script id="user-data" type="text/x-jquery-tmpl">
    <div>
      <h3>Name: ${name}</h3>
      <p>Age: ${age}</p>
    </div>
</script>

<a data-context-tmpl="user-data" data-name="Dr. Jones" data-age="23">Jones</a>

<script>
$(function() {
  $("*[data-context-tmpl]").contextfy();
});
</script>