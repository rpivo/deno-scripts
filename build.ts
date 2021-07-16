import runCommand from "./util/runCommand.ts";

export async function lint() {
  console.log("\nLinting source files...\n");
  const status = await runCommand(["deno", "lint"]);
  if (status.success) console.log("Linting complete.\n");
  return status;
}

if (import.meta.main) lint();
