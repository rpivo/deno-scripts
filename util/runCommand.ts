import log from "./log.ts";

export default async function runCommand(cmd: Array<string>) {
  const p = Deno.run({
    cmd,
    stderr: "piped",
    stdout: "piped",
  });

  const [status, stdout, stderr] = await Promise.all([
    p.status(),
    p.output(),
    p.stderrOutput(),
  ]);

  if (stdout.length) log(stderr);
  if (stderr.length) log(stderr);

  p.close();

  return status;
}
