Deno.test(
  "install all available scripts in this repo, including the build, clean, and test scripts",
  (): void => {}
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
