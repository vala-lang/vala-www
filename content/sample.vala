int main (string[] args) {
  var app = new Gtk.Application (
    "io.github.myteam.MyApp",
    ApplicationFlags.FLAGS_NONE
  );

  app.startup.connect (() => new Gtk.ApplicationWindow (app) {
    default_width = 800,
    default_height = 600,
    title = "Hello, World!"
  });

  app.activate.connect (() => app.active_window.present ());

  return app.run (args);
}
