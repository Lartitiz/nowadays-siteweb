-- La page /merci-rdv (redirection Calendly après réservation réelle) doit
-- pouvoir enregistrer un événement distinct du simple clic vers Calendly.
ALTER TABLE public.site_events DROP CONSTRAINT IF EXISTS site_events_kind_check;
ALTER TABLE public.site_events
  ADD CONSTRAINT site_events_kind_check
  CHECK (kind IN ('vue', 'appel', 'aimant', 'appel_confirme'));