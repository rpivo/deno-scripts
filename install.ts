import runCommand from "./util/runCommand.ts";

enum Flags {
  ROOT = "--root",
}

export async function install(args?: Array<string>) {
  console.log("\nInstalling scripts...");

  const flags = parseArguments(args ?? Deno.args);

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
      status = await runCommand([
        "deno",
        "install",
        ...(flags[Flags.ROOT] ? [Flags.ROOT, flags[Flags.ROOT]] : []),
        name,
        ...Scripts[name],
      ]);
      if (!status.success) return status;
    }
  }

  console.log("Installation complete.\n");
  return status;
}

export function parseArguments(args: Array<string>) {
  const flags: { [key: string]: string } = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i];
    const value = args[i + 1];
    flags[key] = value;
  }
  return flags;
}

if (import.meta.main) install();
