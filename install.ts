export async function install() {
  // TODO: figure out how to make these logs testable
  console.log("\nInstalling scripts...\n");

  const Scripts: { [key: string]: Array<string> } = {
    "build.ts": [""],
    "clean.ts": [""],
    "deploy.ts": [""],
    "serve.ts": [""],
    "test.ts": [""],
  };

  for (const dirEntry of Deno.readDirSync(".")) {
    const { name } = dirEntry;

    if (name in Scripts) {
      const p = Deno.run({
        cmd: ["deno", "install", name, ...Scripts[name]],
        stderr: "piped",
        stdout: "piped",
      });

      const [status, stdout, stderr] = await Promise.all([
        p.status(),
        p.output(),
        p.stderrOutput(),
      ]);

      p.close();
    }
  }

  // TODO: figure out how to make these logs testable
  console.log("Installation complete.\n");
}
