```vala
// ExampleApp.vala

public class ExampleApp : Gtk.Application {
  public ExampleApp () {
    Object (
      application_id: "com.example.App",
      flags: ApplicationFlags.DEFAULT_FLAGS
    );
  }

  public override void activate () {
    var win = new Gtk.ApplicationWindow (this);

    var btn = new Gtk.Button.with_label ("Hello World");
    btn.clicked.connect (win.close);

    win.child = btn;
    win.present ();
  }

  public static int main (string[] args) {
    var app = new ExampleApp ();
    return app.run (args);
  }
}

// Compile command (requires "glib-2.0" package on version 2.74 or higher and "gtk4" package to be installed):
// valac --target-glib=2.74 --pkg gtk4 ExampleApp.vala
```
