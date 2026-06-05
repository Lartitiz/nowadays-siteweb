import { Fragment } from "react";

/** Rend du texte avec **gras** et *italique* en marqueurs simples. */
export function RichText({ text }: { text: string }) {
  // Découpe sur **...** puis *...*
  const parts: { kind: "text" | "bold" | "italic"; value: string }[] = [];
  const boldRe = /\*\*(.+?)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  const segments: { kind: "text" | "bold"; value: string }[] = [];
  while ((m = boldRe.exec(text))) {
    if (m.index > last) segments.push({ kind: "text", value: text.slice(last, m.index) });
    segments.push({ kind: "bold", value: m[1] });
    last = m.index + m[0].length;
  }
  if (last < text.length) segments.push({ kind: "text", value: text.slice(last) });

  for (const seg of segments) {
    if (seg.kind === "bold") {
      parts.push(seg);
      continue;
    }
    const italicRe = /\*(.+?)\*/g;
    let l = 0;
    let im: RegExpExecArray | null;
    while ((im = italicRe.exec(seg.value))) {
      if (im.index > l) parts.push({ kind: "text", value: seg.value.slice(l, im.index) });
      parts.push({ kind: "italic", value: im[1] });
      l = im.index + im[0].length;
    }
    if (l < seg.value.length) parts.push({ kind: "text", value: seg.value.slice(l) });
  }

  return (
    <>
      {parts.map((p, i) => {
        if (p.kind === "bold")
          return (
            <strong key={i} className="font-semibold text-ink">
              {p.value}
            </strong>
          );
        if (p.kind === "italic")
          return (
            <em key={i} className="italic text-rose-dark">
              {p.value}
            </em>
          );
        // Préserve les \n
        return (
          <Fragment key={i}>
            {p.value.split("\n").map((line, j, arr) => (
              <Fragment key={j}>
                {line}
                {j < arr.length - 1 && <br />}
              </Fragment>
            ))}
          </Fragment>
        );
      })}
    </>
  );
}
