import { lint } from "../build.ts";
import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";

Deno.test("run clean() before building", () => {});

Deno.test("run lint() before building", () => {});

Deno.test("alert the user when linting has started", () => {});

Deno.test("alert the user when linting is complete", () => {});

Deno.test("run format() before building", () => {});

Deno.test("alert the user when formatting has started", () => {});

Deno.test("alert the user when formatting is complete", () => {});

Deno.test("alert the user when building is started", () => {});

Deno.test("alert the user when building is complete", () => {});

Deno.test("alert the user when building is unsuccessful", () => {});

Deno.test(
  "exit the process and display an error for the user if an unfixable error is found while linting or formatting",
  () => {}
);

Deno.test(
  "bundle all source code after linting and formatting",
  () => {}
);

Deno.test(
  "deposit the bundled code in the 'dist' folder after bundling",
  () => {}
);

Deno.test(
  "provide a flag to set the target folder to deposit the bundled files",
  () => {}
);

Deno.test(
  "provide a flag to set the source folder to be built",
  () => {}
);

Deno.test(
  "allow the use of all native Deno flags for the native Deno bundle script",
  () => {}
);

Deno.test("lint() should run successfully", async (): Promise<void> => {
  Deno.writeTextFileSync("temp.ts", "console.log();");
  const status = await lint();
  assertEquals(status.success, true);
  Deno.removeSync("temp.ts");
});
