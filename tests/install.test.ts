import { install } from "../install.ts";
import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";

Deno.test(
  "install all available scripts successfully",
  async (): Promise<void> => {
    const status = await install();
    assertEquals(status.success, true);
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
  (): void => {}
);
