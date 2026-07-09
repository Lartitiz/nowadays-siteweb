import { Fragment, type ReactNode } from "react";

const LINK_CLASS =
  "text-rose-dark underline underline-offset-2 decoration-rose-dark/40 transition-colors hover:text-bordeaux break-words";

/** Gras / italique / sauts de ligne dans un fragment SANS lien. */
function renderInline(text: string, kp: string): ReactNode[] {
  const out: ReactNode[] = [];
  let idx = 0;

  const pushText = (s: string) => {
    const lines = s.split("\n");
    lines.forEach((line, j) => {
      out.push(
        <Fragment key={`${kp}-t${idx++}`}>
          {line}
          {j < lines.length - 1 && <br />}
        </Fragment>,
      );
    });
  };

  const pushItalic = (s: string) => {
    const italicRe = /\*(.+?)\*/g;
    let l = 0;
    let im: RegExpExecArray | null;
    while ((im = italicRe.exec(s))) {
      if (im.index > l) pushText(s.slice(l, im.index));
      out.push(
        <em key={`${kp}-i${idx++}`} className="italic text-rose-dark">
          {im[1]}
        </em>,
      );
      l = im.index + im[0].length;
    }
    if (l < s.length) pushText(s.slice(l));
  };

  const boldRe = /\*\*(.+?)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = boldRe.exec(text))) {
    if (m.index > last) pushItalic(text.slice(last, m.index));
    out.push(
      <strong key={`${kp}-b${idx++}`} className="font-semibold text-ink">
        {m[1]}
      </strong>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) pushItalic(text.slice(last));
  return out;
}

/**
 * Rend du texte d'article : liens markdown [texte](url) et URLs brutes en
 * `<a>` cliquables, plus **gras**, *italique* et sauts de ligne.
 */
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  // Lien markdown [txt](url) OU URL brute http(s)://…
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|(https?:\/\/[^\s)]+)/g;
  let last = 0;
  let idx = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(text))) {
    if (m.index > last) {
      out.push(
        <Fragment key={`p${idx++}`}>
          {renderInline(text.slice(last, m.index), `p${idx}`)}
        </Fragment>,
      );
    }
    if (m[1] !== undefined) {
      // Lien markdown : le texte peut contenir gras/italique.
      out.push(
        <a
          key={`l${idx++}`}
          href={m[2]}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          {renderInline(m[1], `l${idx}`)}
        </a>,
      );
    } else {
      // URL brute : on retire la ponctuation finale (., ) etc.) du lien.
      let url = m[3];
      let trailing = "";
      const tm = url.match(/[.,;:!?)]+$/);
      if (tm) {
        trailing = tm[0];
        url = url.slice(0, -trailing.length);
      }
      out.push(
        <a
          key={`u${idx++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          {url}
        </a>,
      );
      if (trailing) out.push(<Fragment key={`ut${idx++}`}>{trailing}</Fragment>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    out.push(
      <Fragment key={`p${idx++}`}>
        {renderInline(text.slice(last), `p${idx}`)}
      </Fragment>,
    );
  }

  return <>{out}</>;
}
