import runCommand from "./util/runCommand.ts";

export async function install() {
  console.log("\nInstalling scripts...\n");

  const Scripts: { [key: string]: Array<string> } = {
    "build.ts": [""],
    "clean.ts": [""],
    "deploy.ts": [""],
    "serve.ts": [""],
    "test.ts": [""],
  };

  let status = <Deno.ProcessStatus>{};

  for (const dirEntry of Deno.readDirSync(".")) {
    const { name } = dirEntry;

    if (name in Scripts) {
      status = await runCommand(["deno", "install", name, ...Scripts[name]]);
      if (!status.success) return status;
    }
  }

  console.log("Installation complete.");
  return status;
}

if (import.meta.main) install();
