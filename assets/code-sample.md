```vala
// main.vala
int main (string[] args) {
  var app = new Gtk.Application(
    "com.example.App",
    ApplicationFlags.FLAGS_NONE
  );

  app.activate.connect(() => {
    var win = new Gtk.ApplicationWindow(app);

    var btn = new Gtk.Button.with_label("Hello World");
    btn.clicked.connect(win.close);

    win.child = btn;
    win.present();
  });
  return app.run(args);
}

// Compile command (requires gtk4 package to be installed):
// valac --pkg gtk4 main.vala
```
