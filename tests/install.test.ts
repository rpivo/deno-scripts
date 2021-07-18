import { install, parseArguments } from "../install.ts";
import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";

Deno.test(
  "install all available scripts successfully if the --scripts flag is not used",
  async (): Promise<void> => {
    const status = await install(["--root", "."]);
    assertEquals(status.success, true);
    Deno.removeSync("bin", { recursive: true });
  }
);

Deno.test(
  "default to installing the scripts at /Users/deno/.deno/bin",
  (): void => {}
);

Deno.test("alert the user when bootstrapping has started", (): void => {});

Deno.test("alert the user when bootstrapping is complete", (): void => {});

Deno.test(
  "alert the user when bootstrapping is unsuccessful, providing as much information as possible",
  (): void => {}
);

Deno.test(
  "check to see if other scripts exist that have the same name as one of the scripts being installed",
  (): void => {}
);

Deno.test(
  "alert the user when a script already exists with the same name as one of the scripts being installed",
  (): void => {}
);

Deno.test(
  "allow the user to type a different name in when there is a preinstalled script with the same name as one of the scripts currently being installed",
  (): void => {}
);

Deno.test(
  "allow the user to install the script with the --no-privileges flag",
  (): void => {}
);

Deno.test(
  "allow the use of all native Deno flags for the native Deno install script",
  (): void => {}
);

Deno.test(
  "allow the user to install scripts to a different location",
  async (): Promise<void> => {
    Deno.mkdirSync("./foo");
    await install(["--root", "./foo"]);
    const [bin] = [...Deno.readDirSync("./foo")];
    assertEquals(bin.name, "bin");
    Deno.removeSync("./foo", { recursive: true });
  }
);

Deno.test(
  "parseArguments() should take all the arguments and generate an object of keys that represent flags and values that represent the values of these flags",
  (): void => {
    const args = ["--foo", "hello", "--bar", "goodbye", "--baz", "haha"];
    const flags = parseArguments(args);
    assertEquals(flags, {
      "--bar": "goodbye",
      "--baz": "haha",
      "--foo": "hello",
    });
  }
);

Deno.test(
  "parseArguments() should remove keys that do not have a value",
  (): void => {}
);

Deno.test("generate a default scripts.toml file", (): void => {});

Deno.test(
  "store the default scripts.toml file in Deno's default cache location",
  (): void => {}
);

Deno.test(
  "allow the use of a `--scripts` flag, which is a list of scripts to be installed",
  (): void => {}
);
