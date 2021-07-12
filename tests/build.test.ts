import { lint } from "../build.ts";
import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";

// TODO: refactor
// Deno.test({
//   name: "lint(): throw an error when failing code is found",
//   async fn(): Promise<void> {
//     Deno.writeTextFileSync("temp.ts", "console.log(");

//     const r = lint();

//     const stderrOutput = await r.stderrOutput();
//     const errorString = new TextDecoder().decode(stderrOutput);

//     assertEquals(
//       errorString,
//       `Error linting: /Users/ryanpivovar/Documents/dev/deno-scripts/temp.ts
//    Unexpected eof at /Users/ryanpivovar/Documents/dev/deno-scripts/temp.ts:1:12
// Checked 3 files
// `
//     );

//     Deno.removeSync("temp.ts");
//     // Deno.close(4);
//     // Deno.close(6);
//   },
// });

Deno.test({
  name: "lint(): run successfully",
  async fn(): Promise<void> {
    Deno.writeTextFileSync("temp.ts", "console.log();");

    const r = await lint();

    assertEquals(r.status.success, true);

    Deno.removeSync("temp.ts");
  },
});
