CREATE TABLE public.site_events (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  occurred_at timestamptz NOT NULL DEFAULT now(),
  kind text NOT NULL CHECK (kind IN ('vue','appel','aimant')),
  path text NOT NULL,
  source text NOT NULL DEFAULT 'direct',
  label text,
  device text NOT NULL DEFAULT 'ordinateur' CHECK (device IN ('mobile','ordinateur')),
  visiteur_jour text NOT NULL
);

GRANT ALL ON public.site_events TO service_role;

ALTER TABLE public.site_events ENABLE ROW LEVEL SECURITY;

CREATE INDEX site_events_occurred_at_idx ON public.site_events (occurred_at DESC);
CREATE INDEX site_events_kind_occurred_at_idx ON public.site_events (kind, occurred_at);