```vala
int main (string[] args) {
  var app = new Gtk.Application(
    "com.example.App",
    ApplicationFlags.FLAGS_NONE
  );
  
  app.activate.connect(() => {
    var win = new Gtk.ApplicationWindow(app);

    var btn = new Gtk.Button.with_label("Hello World");
    btn.click.connect(win.close);

    win.child = btn;
    win.present();
  })
  return app.run(args);
} 
```
