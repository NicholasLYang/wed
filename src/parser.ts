export function parse(code: string) {
  if (code.substring(0, 8) !== "0061736d") {
    console.log("Invalid prologue: " + code.substring(0, 7))
  }
  if (code.substring(8, 16) !== "01000000") {
    console.log("Version cannot be anything other than 1: " + code.substring(8, 16));
  }
  let i = 17;
  switch (parseInt(code.substring(i, i  + 1), 16)) {
    case 1:
      parseTypeSection(code, i)
  }
}

function parseTypeSection(code: string, i: number) {
  i = i + 2;
  const size = parseInt(code.substring(i, i + 1), 16);
  console.log(size);
}