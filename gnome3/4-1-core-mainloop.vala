#!/usr/bin/env vala
using GLib;

public class Main : Object
{
	int counter = 0;

	bool printCounter() {
		stdout.printf("%d\n", counter++);
		return true;
	}

	public Main ()
	{
		Timeout.add(1000, printCounter);
	}

	static int main (string[] args)
	{
		Main main = new Main();
		var loop = new MainLoop();
		loop.run ();
		return 0;
	}
}
