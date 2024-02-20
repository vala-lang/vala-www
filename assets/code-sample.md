```vala
// ExampleApp.vala

public class ExampleApp : Gtk.Application {
  public ExampleApp () {
    Object (
      application_id: "com.example.App",
#if GLIB_2_74
      flags: ApplicationFlags.DEFAULT_FLAGS
#else
      flags: ApplicationFlags.FLAGS_NONE
#endif
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

// Compile command (requires gtk4 package to be installed):
// valac --target-glib=auto --pkg gtk4 ExampleApp.vala
```
