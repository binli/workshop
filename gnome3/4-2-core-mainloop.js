#!/usr/bin/env seed
// The GLib main loop
// Please install the seed before you run this script

const GLib = imports.gi.GLib;
const GObject = imports.gi.GObject;

Main = new GType({
	parent: GObject.Object.type,
	name: "Main",
	init: function() {
		var counter = 0;
		this.printCounter = function() {
			Seed.printf("%d", counter++);
			return true;
		};
		GLib.timeout_add(0, 1000, this.printCounter);
	}
});

var main = new Main();
var context = GLib.main_context_default();
var loop = new GLib.MainLoop.c_new(context);

loop.run();
