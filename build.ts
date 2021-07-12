export function lint() {
  console.log("\nLinting source files...\n");
  return Deno.run({
    cmd: ["deno", "lint"],
    stderr: "piped",
    stdout: "piped",
  });
}
