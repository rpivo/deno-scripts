export async function lint() {
  // TODO: figure out how to make these logs testable
  console.log("\nLinting source files...\n");

  const p = Deno.run({
    cmd: ["deno", "lint"],
    stderr: "piped",
    stdout: "piped",
  });

  const [status, stdout, stderr] = await Promise.all([
    p.status(),
    p.output(),
    p.stderrOutput(),
  ]);

  p.close();

  // TODO: figure out how to make these logs testable
  console.log("Linting complete.\n");

  return { status, stdout, stderr };
}
