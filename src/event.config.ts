/**
 * Astro Symposium Site Lite — the only file you need to edit.
 * All sample people, institutions and addresses are fictional (see README).
 */
export type Item = {
  time: string; // HH:MM, local time
  end?: string;
  title: string;
  who?: string; // speaker(s) as printed
  kind?: 'keynote' | 'talk' | 'break' | 'panel' | 'other';
  note?: string;
};

export const event = {
  name: 'Workshop on Computational Methods for Historical Dialects',
  shortName: 'CMHD 2027',
  edition: 'Third workshop',
  theme: 'Sparse data, old spellings, many villages',
  summary:
    'A one-day, single-track workshop on building and analysing corpora of historical dialects: transcription, normalisation, dialectometry and the ethics of digitising community archives.',
  date: '2027-09-09',
  dateLabel: 'Thursday 9 September 2027',
  city: 'Ghent',
  timezoneLabel: 'CEST (UTC+2)',
  venue: { name: 'Leie Conference Centre, Hall C', street: 'Kaailaan 12', postcode: '9000', city: 'Ghent', country: 'Belgium', note: 'Ten minutes on foot from Gent-Sint-Pieters station; step-free access and a hearing loop in Hall C.' },
  registration: {
    url: 'https://tickets.example.org/cmhd-2027',
    label: 'Register',
    closes: 'Thursday 26 August 2027',
    note: 'Fees include coffee, lunch and the closing drinks. Presenting authors register at the regular fee.',
    currency: 'EUR',
    /** One row each in the fee table on the home page. */
    fees: [
      { name: 'Regular', price: 45 },
      { name: 'SIG member', price: 35, note: 'Current members of the Special Interest Group' },
      { name: 'Student / unwaged', price: 15, note: 'Bring proof of status to the desk' },
    ],
  },
  cfp: { text: 'Papers (4–8 pages) were due on 2 May 2027; notifications went out on 20 June.', url: 'https://submit.example.org/cmhd2027' },
  organisers: 'Organised by the Special Interest Group on Dialect Corpora.',
  email: 'cmhd2027@example.org',
  programme: [
    { time: '09:00', end: '09:20', title: 'Registration and welcome', kind: 'break' },
    { time: '09:20', end: '10:20', title: 'Fourteen ways to spell “water”: what historical dialect atlases did with variation, and what we lose when we normalise it', who: 'Margit Halvorsen-Pires · Bergen Institute for Language Archives', kind: 'keynote' },
    { time: '10:20', end: '10:50', title: 'Coffee', kind: 'break' },
    { time: '10:50', end: '11:10', title: 'Aligning 19th-century fieldworker transcriptions with modern phonetic notation', who: 'J. Okonkwo-Verbeke, L. Moens', kind: 'talk' },
    { time: '11:10', end: '11:30', title: 'Character-level normalisation for Middle Dutch charters with fewer than 2,000 tokens per region', who: 'A. Szabó, P. de Clercq', kind: 'talk' },
    { time: '11:30', end: '11:50', title: 'A dialectometric map of Flemish verb endings from parish registers', who: 'R. Vandamme', kind: 'talk' },
    { time: '11:50', end: '12:30', title: 'Lightning talks: six five-minute project reports', who: 'Chaired by T. Lindqvist', kind: 'other' },
    { time: '12:30', end: '13:30', title: 'Lunch', kind: 'break' },
    { time: '13:30', end: '13:50', title: 'Who owns a village’s voice? Consent and community archives', who: 'S. Ní Bhriain, K. Arslan', kind: 'talk' },
    { time: '13:50', end: '14:10', title: 'Evaluating OCR on handwritten dialect questionnaires', who: 'M. Haddou, E. Peeters', kind: 'talk' },
    { time: '14:10', end: '14:30', title: 'Few-shot geolocation of undated letters from spelling alone', who: 'H. Kristensen', kind: 'talk' },
    { time: '14:30', end: '15:00', title: 'Coffee and posters', kind: 'break' },
    { time: '15:00', end: '16:15', title: 'Panel: what should a shared benchmark for historical dialects contain?', who: 'L. Moens, A. Szabó, M. Halvorsen-Pires; chaired by R. Vandamme', kind: 'panel' },
    { time: '16:15', end: '16:30', title: 'Best paper and closing', kind: 'other' },
    { time: '16:30', end: '18:00', title: 'Drinks at the canal-side terrace', kind: 'break' },
  ] satisfies Item[] as Item[],
  speakers: [
    { name: 'Margit Halvorsen-Pires', affiliation: 'Bergen Institute for Language Archives', keynote: true },
    { name: 'Jide Okonkwo-Verbeke', affiliation: 'Antwerp Centre for Language & Speech' },
    { name: 'Lotte Moens', affiliation: 'Scheldt University' },
    { name: 'Anna Szabó', affiliation: 'Pécs Digital Humanities Lab' },
    { name: 'Pieter de Clercq', affiliation: 'Scheldt University' },
    { name: 'Ruben Vandamme', affiliation: 'Flemish Dialect Atlas Project' },
    { name: 'Saoirse Ní Bhriain', affiliation: 'Galway Oral History Unit' },
    { name: 'Kerem Arslan', affiliation: 'Galway Oral History Unit' },
    { name: 'Meriem Haddou', affiliation: 'Lille Manuscript Lab' },
    { name: 'Helle Kristensen', affiliation: 'Aarhus Centre for Historical Linguistics' },
  ],
} as const;
