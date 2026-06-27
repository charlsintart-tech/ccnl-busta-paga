export const roles = [
  'Comandante Superiore',
  'Primo Comandante',
  'Comandante',
  '1^ Ufficiale',
  'Pilota di 1^',
  'Pilota di 2^',
  'Salario di ingresso',
] as const;

export type Role = (typeof roles)[number];

// Art.16 - Stipendi minimi contrattuali
export const stipendiMinimi: Record<Role, number> = {
  'Comandante Superiore': 1425.14,
  'Primo Comandante': 1339.61,
  'Comandante': 1256.46,
  '1^ Ufficiale': 1095.84,
  'Pilota di 1^': 1051.78,
  'Pilota di 2^': 1000.06,
  'Salario di ingresso': 1000.06,
};

// Art.20 - Calcolo scatto
export const calcoloScatto: Record<Role, number> = {
  'Comandante Superiore': 197.58,
  'Primo Comandante': 192.24,
  'Comandante': 186.88,
  '1^ Ufficiale': 149.42,
  'Pilota di 1^': 137.30,
  'Pilota di 2^': 119.29,
  'Salario di ingresso': 81.80,
};

// Stipendio mensile lordo (zero scatti)
export const stipendioLordo: Record<Role, { feb2024: number; apr2025: number }> = {
  'Comandante Superiore': { feb2024: 4262.74, apr2025: 4714.74 },
  'Primo Comandante': { feb2024: 4135.21, apr2025: 4563.21 },
  'Comandante': { feb2024: 4004.26, apr2025: 4404.26 },
  '1^ Ufficiale': { feb2024: 3174.64, apr2025: 3522.64 },
  'Pilota di 1^': { feb2024: 2913.98, apr2025: 3249.98 },
  'Pilota di 2^': { feb2024: 2554.66, apr2025: 2874.66 },
  'Salario di ingresso': { feb2024: 1824.46, apr2025: 2036.46 },
};

// Art.21 - Indennita di volo notturno
export const voloNotturno: Record<Role, { giorno: number; turno: number }> = {
  'Comandante Superiore': { giorno: 35.77, turno: 250.39 },
  'Primo Comandante': { giorno: 35.48, turno: 248.36 },
  'Comandante': { giorno: 35.16, turno: 246.12 },
  '1^ Ufficiale': { giorno: 26.09, turno: 182.63 },
  'Pilota di 1^': { giorno: 22.82, turno: 159.74 },
  'Pilota di 2^': { giorno: 18.15, turno: 127.05 },
  'Salario di ingresso': { giorno: 8.20, turno: 57.40 },
};

// Art.18 - Indennita di volo
export const indennitaVolo: Record<Role, { oraria: number; mensile: number; vacanza: number; istat2024: number; istat2025: number }> = {
  'Comandante Superiore': { oraria: 37.26, mensile: 2235.60, vacanza: 150.00, istat2024: 452.00, istat2025: 452.00 },
  'Primo Comandante': { oraria: 36.96, mensile: 2217.60, vacanza: 150.00, istat2024: 428.00, istat2025: 428.00 },
  'Comandante': { oraria: 36.63, mensile: 2197.80, vacanza: 150.00, istat2024: 400.00, istat2025: 400.00 },
  '1^ Ufficiale': { oraria: 27.18, mensile: 1630.80, vacanza: 100.00, istat2024: 348.00, istat2025: 348.00 },
  'Pilota di 1^': { oraria: 23.77, mensile: 1426.20, vacanza: 100.00, istat2024: 336.00, istat2025: 336.00 },
  'Pilota di 2^': { oraria: 18.91, mensile: 1134.60, vacanza: 100.00, istat2024: 320.00, istat2025: 320.00 },
  'Salario di ingresso': { oraria: 8.54, mensile: 512.40, vacanza: 100.00, istat2024: 212.00, istat2025: 212.00 },
};

// Art.19 - Indennita integrativa di volo (200 ore)
export const indennitaIntegrativa: Record<Role, { oraria: number; annuale: number }> = {
  'Comandante Superiore': { oraria: 21.09, annuale: 4218.00 },
  'Primo Comandante': { oraria: 20.78, annuale: 4156.00 },
  'Comandante': { oraria: 20.40, annuale: 4080.00 },
  '1^ Ufficiale': { oraria: 19.17, annuale: 3834.00 },
  'Pilota di 1^': { oraria: 18.55, annuale: 3710.00 },
  'Pilota di 2^': { oraria: 16.00, annuale: 3200.00 },
  'Salario di ingresso': { oraria: 4.59, annuale: 918.00 },
};

// Art.24 - Indennita di viaggio
export const indennitaViaggio: Record<Role, { km200g: number; km200t: number; km400g: number; km400t: number; km400pg: number; km400pt: number }> = {
  'Comandante Superiore': { km200g: 0, km200t: 0, km400g: 67.50, km400t: 135.00, km400pg: 135.00, km400pt: 270.00 },
  'Primo Comandante': { km200g: 0, km200t: 0, km400g: 66.25, km400t: 132.50, km400pg: 132.50, km400pt: 265.00 },
  'Comandante': { km200g: 0, km200t: 0, km400g: 63.75, km400t: 127.50, km400pg: 127.50, km400pt: 255.00 },
  '1^ Ufficiale': { km200g: 0, km200t: 0, km400g: 51.25, km400t: 102.50, km400pg: 102.50, km400pt: 205.00 },
  'Pilota di 1^': { km200g: 0, km200t: 0, km400g: 47.50, km400t: 95.00, km400pg: 95.00, km400pt: 190.00 },
  'Pilota di 2^': { km200g: 0, km200t: 0, km400g: 41.25, km400t: 82.50, km400pg: 82.50, km400pt: 165.00 },
  'Salario di ingresso': { km200g: 0, km200t: 0, km400g: 27.50, km400t: 55.00, km400pg: 55.00, km400pt: 110.00 },
};

// Art.26 - Straordinario / Art.25 - Festività non goduta
export const straordinarioFestivita: Record<Role, { straordinario: number; festivita: number }> = {
  'Comandante Superiore': { straordinario: 421.08, festivita: 56.14 },
  'Primo Comandante': { straordinario: 409.69, festivita: 54.63 },
  'Comandante': { straordinario: 398.26, festivita: 53.10 },
  '1^ Ufficiale': { straordinario: 318.44, festivita: 42.46 },
  'Pilota di 1^': { straordinario: 292.60, festivita: 39.01 },
  'Pilota di 2^': { straordinario: 254.23, festivita: 33.90 },
  'Salario di ingresso': { straordinario: 174.32, festivita: 23.24 },
};

// Diarie
export const diarie = {
  hotel: { importo: 60.00, esentasse: 30.99 },
  residence: { importo: 65.00, esentasse: 30.99 },
  estera: { importo: 77.47, esentasse: 77.47 },
  mancatoAlloggio: { importo: 95.00, esentasse: 46.48 },
};

// Rimborso Chilometrico
export const rimborsoKm = {
  euroPerKm: 0.43,
  maxKm: 800,
  pieDiLista: 70.00,
};

// Contributi INPS
export const contributiINPS: Record<Role, string> = {
  'Comandante Superiore': '390 - 420',
  'Primo Comandante': '375 - 405',
  'Comandante': '360 - 390',
  '1^ Ufficiale': '295 - 320',
  'Pilota di 1^': '275 - 300',
  'Pilota di 2^': '250 - 270',
  'Salario di ingresso': '200 - 215',
};

// FONDAEREO
export const fondaereo = {
  tfr: '100%',
  azienda: '4,09%',
  pilota: '3,03%',
};

export type FondaereoRole = 'Com.te Super.' | 'Primo Com.te' | 'Comandante' | '1^ Ufficiale' | 'Pilota di 1^' | 'Pilota di 2^' | 'Salario di ing.';

export const fondaereoStima: Record<string, string> = {
  'Com.te Super.': '560 - 620',
  'Primo Com.te': '550 - 600',
  'Comandante': '530 - 580',
  '1^ Ufficiale': '420 - 465',
  'Pilota di 1^': '385 - 430',
  'Pilota di 2^': '340 - 380',
  'Salario di ing.': '250 - 275',
};

// Ferie - Art.48
export const ferie = {
  giorniTotali: 28,
  giorniAzienda: 14,
  giorniPilota: 14,
};

// Straordinari Trimestri
export const trimestri = [
  { periodo: 'Gen. - Feb. - Mar.', gg: 45.75, pagamento: 'Aprile' },
  { periodo: 'Apr. - Mag. - Giu.', gg: 45.75, pagamento: 'Luglio' },
  { periodo: 'Lug. - Ago. - Set.', gg: 45.75, pagamento: 'Ottobre' },
  { periodo: 'Ott. - Nov. - Dic.', gg: 45.75, pagamento: 'Gennaio' },
];

// Giornate Festive - Art.25
export const giornateFestive = [
  '1 Gennaio',
  '6 Gennaio',
  '25 Aprile',
  'Pasquetta',
  '1 Maggio',
  '15 Agosto',
  '1 Novembre',
  '8 Dicembre',
  '25 Dicembre',
  '26 Dicembre',
];

// Assicurazioni - Art.43
export const assicurazioni = {
  casoMorte: {
    'Comandante': 413166.00,
    '1 Uff. / Pilota di 1^': 309874.00,
    'Pilota di 2^': 154937.00,
  },
  invaliditaPermanente: {
    'Comandante': 516457.00,
    '1 Uff. / Pilota di 1^': 413166.00,
    'Pilota di 2^': 206583.00,
  },
  invalidita5: {
    'Comandante': 361520.00,
    '1 Uff. / Pilota di 1^': 232406.00,
    'Pilota di 2^': 103291.00,
  },
};

// Aliquote IRPEF 2024
export const aliquoteIRPEF = [
  { scaglione: 'Fino a 28.000', aliquota: '23%' },
  { scaglione: 'Da 28.000 a 50.000', aliquota: '35%' },
  { scaglione: 'Oltre 50.000', aliquota: '43%' },
];

// Malattia - Art.37 / Aspettativa - Art.34 / Tredicesima - Art.27 / Congedo matrimoniale - Art.35
export const altreInfo = {
  malattia: 'Art. 37',
  aspettativa: 'Art. 34',
  tredicesima: 'Art. 27',
  congedoMatrimoniale: 'Art. 35',
};
