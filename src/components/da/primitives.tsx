// Décors dessinés en CSS/SVG (aucune image à charger) : mégaphone du manifeste
// et du Mégaphone.

export function Megaphone() {
  return (
    <div className="mega" aria-hidden="true">
      <div className="mega-body" />
      <div className="mega-mouth" />
      <div className="mega-handle" />
      <i className="sound s1" />
      <i className="sound s2" />
      <i className="sound s3" />
    </div>
  );
}
