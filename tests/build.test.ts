import { lint } from "../build.ts";
import { assertEquals } from "https://deno.land/std@0.100.0/testing/asserts.ts";

Deno.test({
  name: "lint(): run successfully",
  async fn(): Promise<void> {
    Deno.writeTextFileSync("temp.ts", "console.log();");
    const status = await lint();
    assertEquals(status.success, true);
    Deno.removeSync("temp.ts");
  },
});
