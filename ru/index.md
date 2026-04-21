---
layout: home
title: Язык программирования Vala
description: Vala — это объектно-ориентированный язык программирования с самостоятельным компилятором, который генерирует C-код и использует систему типов GObject.
---

```vala
// ExampleApp.vala

public class ExampleApp : Gtk.Application {
  public ExampleApp () {
    Object (application_id: "com.example.App");
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
// valac --pkg gtk4 ExampleApp.vala
```
