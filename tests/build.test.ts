import { lint } from "../build.ts";
import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";

Deno.test("should run clean() before building", () => {});

Deno.test("should run lint() before building", () => {});

Deno.test("should alert the user when linting has started", () => {});

Deno.test("should alert the user when linting is complete", () => {});

Deno.test("should run format() before building", () => {});

Deno.test("should alert the user when formatting has started", () => {});

Deno.test("should alert the user when formatting is complete", () => {});

Deno.test("should alert the user when building is started", () => {});

Deno.test("should alert the user when building is complete", () => {});

Deno.test("should alert the user when building is unsuccessful", () => {});

Deno.test(
  "should exit the process and display an error for the user if an unfixable error is found while linting or formatting",
  () => {}
);

Deno.test(
  "should bundle all source code after linting and formatting",
  () => {}
);

Deno.test(
  "should deposit the bundled code in the 'dist' folder after bundling",
  () => {}
);

Deno.test(
  "should provide a flag to set the target folder to deposit the bundled files",
  () => {}
);

Deno.test(
  "should provide a flag to set the source folder to be built",
  () => {}
);

Deno.test(
  "should allow the use of all native Deno flags for the native Deno bundle script",
  () => {}
);

Deno.test("lint() should run successfully", async (): Promise<void> => {
  Deno.writeTextFileSync("temp.ts", "console.log();");
  const status = await lint();
  assertEquals(status.success, true);
  Deno.removeSync("temp.ts");
});
