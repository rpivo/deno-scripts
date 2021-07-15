export default function log(output: Uint8Array) {
  console.log(new TextDecoder().decode(output));
}
