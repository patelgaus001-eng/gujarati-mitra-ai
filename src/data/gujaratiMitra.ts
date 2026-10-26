// ================= BRANDING: change these lines to rebrand the whole app =================
export const BRAND = {
  appName: "Gujarati Mitra AI",
  tagline: "ગુજરાતી લખાણ, હવે વધુ શુદ્ધ અને સરળ!",
  developer: "Gautam Patel",
  creditLabel: "Developed by",
  version: "Prototype v0.1"
};

// ---- Small word lists. [wrong, right, reason] ----
export const SPELL: [string, string, string][] = [
  ["ગુજરાતિ", "ગુજરાતી", "‘ગુજરાતી’ માં છેલ્લે દીર્ઘ ‘ી’ આવે."],
  ["વિધાર્થી", "વિદ્યાર્થી", "સાચો શબ્દ ‘વિદ્યાર્થી’ (દ્ + યા)."],
  ["પરિક્ષા", "પરીક્ષા", "‘પરીક્ષા’ માં ‘રી’ દીર્ઘ છે."],
  ["શુભેછા", "શુભેચ્છા", "‘શુભેચ્છા’ માં ‘ચ્છ’ જોડાક્ષર છે."],
  ["ઉદઘાટન", "ઉદ્ઘાટન", "‘ઉદ્ઘાટન’ માં ‘દ્ઘ’ જોડાક્ષર છે."],
  ["સંસ્કૃતી", "સંસ્કૃતિ", "‘સંસ્કૃતિ’ માં હ્રસ્વ ‘િ’ આવે."],
  ["આશિર્વાદ", "આશીર્વાદ", "‘આશીર્વાદ’ માં ‘શી’ દીર્ઘ છે."],
  ["દિપાવલી", "દીપાવલી", "‘દીપાવલી’ માં ‘દી’ દીર્ઘ છે."],
  ["સુવીધા", "સુવિધા", "‘સુવિધા’ માં ‘વિ’ હ્રસ્વ છે."],
  ["અભીનંદન", "અભિનંદન", "‘અભિનંદન’ માં ‘ભિ’ હ્રસ્વ છે."],
  ["ઉપલબદ્ધ", "ઉપલબ્ધ", "સાચો શબ્દ ‘ઉપલબ્ધ’."],
  ["સુચના", "સૂચના", "‘સૂચના’ માં ‘સૂ’ દીર્ઘ છે."],
  ["જરુર", "જરૂર", "‘જરૂર’ માં ‘રૂ’ દીર્ઘ છે."],
  ["સ્વછતા", "સ્વચ્છતા", "‘સ્વચ્છતા’ માં ‘ચ્છ’ આવે."],
  ["મહત્વ", "મહત્ત્વ", "પ્રચલિત સાચી જોડણી ‘મહત્ત્વ’ (ત્ + ત્વ)."],
  ["સમ્પૂર્ણ", "સંપૂર્ણ", "‘સંપૂર્ણ’ માં અનુસ્વાર (ં) વપરાય."],
  ["કાર્યકર્મ", "કાર્યક્રમ", "સાચો શબ્દ ‘કાર્યક્રમ’ (ક્ર)."],
  ["પરીવાર", "પરિવાર", "‘પરિવાર’ માં ‘રિ’ હ્રસ્વ છે."],
  ["અતિથી", "અતિથિ", "‘અતિથિ’ માં છેલ્લે હ્રસ્વ ‘િ’ આવે."],
  ["વિધ્યાલય", "વિદ્યાલય", "સાચો શબ્દ ‘વિદ્યાલય’ (દ્ + યા)."],
  ["સમ્માન", "સન્માન", "સાચી જોડણી ‘સન્માન’."],
  ["વ્યકત", "વ્યક્ત", "‘વ્યક્ત’ માં ‘ક્ત’ જોડાક્ષર છે."]
];

export const STYLE: [string, string, string][] = [
  ["કૃપયા", "કૃપા કરીને", "‘કૃપા કરીને’ ગુજરાતીમાં વધુ કુદરતી લાગે."],
  ["સંપર્ક સાધો", "સંપર્ક કરો", "‘સંપર્ક કરો’ સામાન્ય અને સરળ પ્રયોગ છે."]
];

export const SIMPLE: [string, string, string][] = [
  ["અત્યંત", "ખૂબ", "સરળ શબ્દ."],
  ["સત્વરે", "જલદી", "સરળ શબ્દ."],
  ["તત્કાલ", "તરત", "સરળ શબ્દ."],
  ["પ્રારંભ", "શરૂઆત", "રોજિંદો શબ્દ."],
  ["આરંભ", "શરૂઆત", "રોજિંદો શબ્દ."],
  ["અવશ્ય", "જરૂર", "રોજિંદો શબ્દ."],
  ["પ્રાપ્ત કરો", "મેળવો", "ટૂંકું અને સરળ."],
  ["પ્રયત્ન", "કોશિશ", "બોલચાલનો શબ્દ."],
  ["ઉત્કૃષ્ટ", "ઉત્તમ", "સરળ શબ્દ."],
  ["કદાપિ", "ક્યારેય", "રોજિંદો શબ્દ."]
];

export const FORMAL: [string, string, string][] = [
  ["તમને", "આપને", "‘આપ’ વધુ આદરપૂર્ણ (formal) છે."],
  ["તમારું", "આપનું", "‘આપ’ વધુ આદરપૂર્ણ (formal) છે."],
  ["તમારી", "આપની", "‘આપ’ વધુ આદરપૂર્ણ (formal) છે."],
  ["તમારા", "આપના", "‘આપ’ વધુ આદરપૂર્ણ (formal) છે."],
  ["તમારો", "આપનો", "‘આપ’ વધુ આદરપૂર્ણ (formal) છે."]
];

// Verbs that must end with ‘ું’
export const VERBS = [
  "ભર્યુ", "કર્યુ", "લખ્યુ", "થયુ", "હતુ", "જોયુ", "આપ્યુ", "કહ્યુ",
  "મળ્યુ", "રહ્યુ", "આવ્યુ", "વાંચ્યુ", "બોલ્યુ", "પૂછ્યુ", "ગમ્યુ", "શીખ્યુ", "સાંભળ્યુ"
];

// Words that should be joined or replaced as a phrase
export const PHRASES: [string, string, string][] = [
  ["ભાવ ભર્યું", "ભાવભર્યું", "‘ભાવભર્યું’ એક જ સંયુક્ત શબ્દ છે, વચ્ચે જગ્યા નહીં."],
  ["સર્વે ને", "સૌને", "‘સૌને’ વધુ સહજ અને સરળ લાગે છે."],
  ["સર્વેને", "સૌને", "‘સૌને’ વધુ સહજ અને સરળ લાગે છે."]
];

// ‘મા’ can also mean “mother”, so it is left alone after these words
export const KEEP_MA = ["મારી", "મારા", "તારી", "તમારી", "પ્રિય", "વહાલી", "જય"];

// Tiny English -> Gujarati word list (demo, not a real translator)
export const TRANS: [string, string][] = [
  ["good morning", "સુપ્રભાત"],
  ["good night", "શુભ રાત્રિ"],
  ["happy diwali", "દિવાળીની શુભેચ્છાઓ"],
  ["happy birthday", "જન્મદિવસની શુભેચ્છાઓ"],
  ["thank you", "આભાર"],
  ["congratulations", "અભિનંદન"],
  ["welcome", "સ્વાગત છે"],
  ["please", "કૃપા કરીને"],
  ["sale", "સેલ"],
  ["offer", "ઓફર"],
  ["free", "મફત"]
];

export const G = "\\u0A80-\\u0AFF"; // Gujarati letters, matras and digits
export const rxe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const MODECFG: Record<string, { spell?: number; grammar?: number; style?: number; simple?: number; formal?: number }> = {
  spell: { spell: 1 },
  grammar: { grammar: 1 },
  proof: { spell: 1, grammar: 1 },
  improve: { spell: 1, grammar: 1, style: 1 },
  simple: { spell: 1, grammar: 1, style: 1, simple: 1 },
  formal: { spell: 1, grammar: 1, style: 1, formal: 1 }
};

export interface EngineLogItem {
  key: string;
  a: string | null;
  b: string | null;
  why: string;
  n: number;
}

export function engine(text: string, mode: string) {
  const c = MODECFG[mode] || MODECFG.proof;
  const log: EngineLogItem[] = [];
  const tips: string[] = [];
  let t = text;

  const rec = (key: string, a: string | null, b: string | null, why: string, n = 1) => {
    const e = log.find(x => x.key === key);
    if (e) e.n += n;
    else log.push({ key, a, b, why, n });
  };

  const pre = (a: string, b: string, why: string) => {
    t = t.replace(new RegExp("(^|[^" + G + "])" + rxe(a), "g"), (_m, p) => {
      rec(a + ">" + b, a, b, why);
      return p + b;
    });
  };

  const word = (a: string, b: string, why: string) => {
    t = t.replace(new RegExp("(^|[^" + G + "])" + rxe(a) + "(?![" + G + "])", "g"), (_m, p) => {
      rec(a + ">" + b, a, b, why);
      return p + b;
    });
  };

  if (c.grammar) { // spacing and punctuation
    let n = (t.match(/[ \t]{2,}/g) || []).length;
    if (n) {
      t = t.replace(/[ \t]{2,}/g, " ");
      rec("s1", null, null, "વધારાની જગ્યાઓ ઓછી કરી (extra spaces).", n);
    }
    n = (t.match(/[ \t]+[,.;:!?\u0964]/g) || []).length;
    if (n) {
      t = t.replace(/[ \t]+([,.;:!?\u0964])/g, "$1");
      rec("s2", null, null, "વિરામચિહ્ન પહેલાં જગ્યા કાઢી (no space before , . ! ?).", n);
    }
    const after = new RegExp("([,;:!?\u0964]|\\.)(?=[" + G + "])", "g");
    n = (t.match(after) || []).length;
    if (n) {
      t = t.replace(after, "$1 ");
      rec("s3", null, null, "વિરામચિહ્ન પછી જગ્યા ઉમેરી (space after punctuation).", n);
    }
  }

  if (c.spell) {
    SPELL.forEach(([a, b, w]) => pre(a, b, w));
    VERBS.forEach(v => word(v, v + "ં", "‘" + v + "ં’ માં છેલ્લે અનુસ્વાર (ં) જોઈએ."));
  }

  if (c.grammar) {
    PHRASES.forEach(([a, b, w]) => word(a, b, w));
    t = t.replace(new RegExp("([" + G + "]+)[ \\t]+(માં|મા|ને|થી|નો|ની|નું)(?![" + G + "])", "g"), (m, w, s) => {
      const ma = (s === "મા" || s === "માં");
      if (/^[\u0AE6-\u0AEF]+$/.test(w)) return m;
      if (ma && KEEP_MA.includes(w)) {
        const q = "❓ ‘" + m + "’ માં ‘મા’ નો અર્થ ‘માતા’ હોય તો બરાબર છે, તેથી બદલ્યું નથી. ‘માં (in)’ કહેવું હોય તો ‘" + w + "માં’ લખો.";
        if (!tips.includes(q)) tips.push(q);
        return m;
      }
      const r = w + (ma ? "માં" : s);
      rec("att" + s, m, r, ma ? "‘મા/માં’ શબ્દ સાથે જોડીને લખાય અને ‘માં’ લખાય." : "‘" + s + "’ શબ્દ સાથે જોડીને લખાય (શબ્દથી અલગ નહીં).");
      if (s === "ને") {
        const q = "❓ ‘ને’ ને પહેલાના શબ્દ સાથે જોડ્યો છે (દા.ત. ‘" + m + "’ → ‘" + r + "’). ‘ને’ નો અર્થ ‘અને’ (and) હોય તો તેને અલગ રાખો.";
        if (!tips.some(x => x.startsWith("❓ ‘ને’"))) tips.push(q);
      }
      return r;
    });
  }

  if (c.style) STYLE.forEach(([a, b, w]) => word(a, b, w));
  if (c.simple) SIMPLE.forEach(([a, b, w]) => word(a, b, w));
  if (c.formal) FORMAL.forEach(([a, b, w]) => word(a, b, w));
  if (c.grammar) t = t.trim();

  const rep = t.match(new RegExp("(^|[^" + G + "])([" + G + "]{2,})[ \\t]+\\2(?![" + G + "])"));
  if (rep) tips.push("‘" + rep[2] + " " + rep[2] + "’ બે વાર આવ્યું છે. ભૂલ હોય તો એક કાઢો (‘ધીમે ધીમે’ જેવા શબ્દો ઠીક છે).");
  if (c.grammar && new RegExp("[" + G + "]$").test(t)) tips.push("છેલ્લા વાક્ય પછી પૂર્ણવિરામ (.) મૂકવાનું વિચારો. (સ્લોગનમાં જરૂરી નથી.)");

  return { out: t, log, tips };
}

export function translateText(src: string) {
  let t = src;
  const items: string[] = [];
  const tips: string[] = [];
  TRANS.forEach(([e, g]) => {
    let n = 0;
    t = t.replace(new RegExp("\\b" + e + "\\b", "gi"), () => {
      n++;
      return g;
    });
    if (n) items.push("<b>" + e + "</b> → <b>" + g + "</b>" + (n > 1 ? " (×" + n + ")" : "") + " · demo શબ્દયાદી");
  });
  const left = [...new Set(t.match(/[A-Za-z]+/g) || [])];
  if (!items.length) tips.push("❓ આ demo ની નાની યાદીમાં આ લખાણના કોઈ શબ્દો નથી, એટલે અનુવાદ થયો નથી. સાચા અનુવાદ માટે પછી AI જોડવું પડશે.");
  else if (left.length) tips.push("❓ આ શબ્દો યાદીમાં નથી, અનુવાદ થયા નથી: " + left.join(", ") + ".");
  return { out: t, items, tips };
}

export function toks(s: string) {
  return s.match(/[\u0A80-\u0AFF\w]+|\s+|[^\s\w\u0A80-\u0AFF]/gu) || [];
}

export const isSp = (w: string) => /^\s+$/.test(w);

export function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function hilite(a: string, b: string) {
  const X = toks(a).filter(w => !isSp(w));
  const Y = toks(b);
  const yi: number[] = [];
  Y.forEach((w, i) => { if (!isSp(w)) yi.push(i); });
  const n = X.length, m = yi.length;
  if (n * m > 4e6) return esc(b);
  const D: Uint16Array[] = [];
  for (let i = 0; i <= n; i++) D.push(new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      D[i][j] = X[i] === Y[yi[j]] ? D[i + 1][j + 1] + 1 : Math.max(D[i + 1][j], D[i][j + 1]);
    }
  }
  const keep = new Set<number>();
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (X[i] === Y[yi[j]]) {
      keep.add(yi[j]);
      i++;
      j++;
    } else if (D[i + 1][j] >= D[i][j + 1]) {
      i++;
    } else {
      j++;
    }
  }
  return Y.map((w, k) => isSp(w) || keep.has(k) ? esc(w) : "<mark>" + esc(w) + "</mark>").join("");
}

// ---- Slogan templates ----
export const SLOG = [
  (n: string) => `${n} – તમારા વિશ્વાસનું બીજું નામ!`,
  (n: string) => `${n}: ગુણવત્તા સાથે કોઈ સમાધાન નહીં.`,
  (n: string) => `આજે જ ${n} અપનાવો, ફરક જાતે અનુભવો.`,
  (n: string) => `${n} – દરેક ઘર માટે, દરેક દિલ માટે.`,
  (n: string) => `સરળ, સારું અને સસ્તું – બસ ${n}!`,
  (n: string) => `${n} સાથે દરેક દિવસ બને ખાસ.`,
  (n: string) => `🎉 ${n} માં આપનું સ્વાગત છે! વધુ માહિતી માટે આજે જ સંપર્ક કરો.`,
  (n: string) => `✨ ${n} – નવી શરૂઆત, નવો વિશ્વાસ. હમણાં જ મુલાકાત લો!`
];

export interface CategoryItem {
  id: string;
  gu: string;
  en: string;
  ico: string;
  ex: string;
  ph: string;
  sample: string;
  smode?: string;
  warn?: "health" | "legal";
  tpl: ((n: string) => string) | null;
}

export const CATS: CategoryItem[] = [
  {
    id: "edu", gu: "શિક્ષણ", en: "Education & Learning", ico: "🎓",
    ex: "Essays, letters, reports, school notices, worksheets, question papers",
    ph: "દા.ત. શાળાની સૂચના, નિબંધ કે પત્ર અહીં લખો…",
    sample: "પ્રિય વિધાર્થીમિત્રો, આવતી કાલે શાળા મા પરિક્ષા છે.  સુચના જરુર વાંચવી.",
    tpl: (n: string) => `શાળા સૂચના\nવિષય: ${n}\nતારીખ: [તારીખ]\nવિદ્યાર્થીમિત્રો, ${n} અંગે જરૂરી માહિતી: [વિગતો અહીં લખો]. વધુ માહિતી માટે વર્ગશિક્ષકનો સંપર્ક કરો.`
  },
  {
    id: "biz", gu: "વેપાર અને જાહેરાત", en: "Business & Marketing", ico: "🛍️",
    ex: "Shop banners, promotional advertisements, product descriptions, offers",
    ph: "દા.ત. દુકાનનું બેનર કે ઓફરનું લખાણ અહીં લખો…",
    sample: "અમારી દુકાન મા દિપાવલી ની ખાસ ઓફર !  સત્વરે સંપર્ક સાધો",
    tpl: (n: string) => `🎉 ${n}\n${SLOG[1](n)}\nખાસ ઓફર: [અહીં તમારી ઓફર લખો]\nસંપર્ક: [ફોન નંબર]`
  },
  {
    id: "health", gu: "આરોગ્ય", en: "Health & Medical", ico: "🩺",
    ex: "Hospital banners, patient instructions, health-awareness posters",
    ph: "દા.ત. આરોગ્ય જાગૃતિનું પોસ્ટર અહીં લખો…", warn: "health",
    sample: "આરોગ્ય શિબિર મા સૌને ભાવ ભર્યુ આમંત્રણ છે.  સ્વછતા નું મહત્વ સમજો.",
    tpl: (n: string) => `આરોગ્ય જાગૃતિ: ${n}\nવધુ માહિતી અને સલાહ માટે તમારા ડૉક્ટર અથવા નજીકના આરોગ્ય કેન્દ્રનો સંપર્ક કરો.\n[આ લખાણની તબીબી ચકાસણી ડૉક્ટર પાસે કરાવો.]`
  },
  {
    id: "rel", gu: "ધાર્મિક અને સાંસ્કૃતિક", en: "Religious & Cultural", ico: "🪔",
    ex: "Festival posters, invitations, speeches, religious program scripts",
    ph: "દા.ત. તહેવારનું પોસ્ટર કે ભાષણ અહીં લખો…",
    sample: "નવરાત્રી ની શુભેછા !  કાર્યકર્મ મા સર્વે ને પધારવા વિનંતી.",
    tpl: (n: string) => `${n} નિમિત્તે સૌને હાર્દિક શુભેચ્છાઓ!\nકાર્યક્રમ: [વિગતો]\nતારીખ: [તારીખ] | સમય: [સમય] | સ્થળ: [સ્થળ]`
  },
  {
    id: "gov", gu: "જાહેર સૂચનાઓ", en: "Government & Public Notices", ico: "📢",
    ex: "Public announcements, notices, citizen information",
    ph: "દા.ત. જાહેર સૂચના કે નાગરિકો માટેની માહિતી અહીં લખો…",
    sample: "જાહેર સુચના : આવતી કાલે પાણી પુરવઠો બંધ રહેશે .  નાગરિકો સહકાર આપે.",
    tpl: (n: string) => `જાહેર સૂચના\nવિષય: ${n}\nતારીખ: [તારીખ]\nસંબંધિત નાગરિકોને જાણ કરવામાં આવે છે કે [વિગતો અહીં લખો]. વધુ માહિતી માટે [કચેરીનું નામ] નો સંપર્ક કરો.`
  },
  {
    id: "social", gu: "સોશિયલ મીડિયા", en: "Social Media & Content", ico: "📱",
    ex: "WhatsApp messages, Instagram captions, Facebook posts, blog content",
    ph: "દા.ત. WhatsApp સંદેશ કે Instagram caption અહીં લખો…",
    sample: "શુભ સવાર મિત્રો !  આજે શાળા થી પરિક્ષા આપી ને ઘરે આવ્યો.",
    tpl: (n: string) => `✨ ${n}\n[તમારી લાગણી કે વિગત અહીં લખો]\n#ગુજરાતી #${n.replace(/\s+/g, "")}`
  },
  {
    id: "prof", gu: "વ્યાવસાયિક લખાણ", en: "Professional Writing", ico: "💼",
    ex: "Emails, office notices, circulars, business letters, reports",
    ph: "દા.ત. ઈમેલ કે ઓફિસ સૂચના અહીં લખો…",
    sample: "માનનીય સાહેબ, કૃપયા આવતી કાલ ની બેઠક ની સુચના વાંચવી.  તમને જાણ થાય.", smode: "formal",
    tpl: (n: string) => `વિષય: ${n}\n\nમાનનીય મહોદય/મહોદયા,\n\nસવિનય જણાવવાનું કે ${n} અંગે [વિગતો અહીં લખો].\n\nઆભાર સહ,\n[તમારું નામ]`
  },
  {
    id: "creative", gu: "સર્જનાત્મક લેખન", en: "Creative Writing", ico: "🎨",
    ex: "Stories, poems, slogans, creative Gujarati writing",
    ph: "દા.ત. વાર્તા, કવિતા કે સ્લોગન અહીં લખો…",
    sample: "ગુજરાતિ ભાષા મારી શાન છે ,  સંસ્કૃતી નો અમૂલ્ય વારસો.",
    tpl: (n: string) => `${SLOG[3](n)}\n${SLOG[5](n)}\n[તમારી કવિતા કે વાર્તાની શરૂઆત અહીં લખો]`
  },
  {
    id: "legal", gu: "કાનૂની અને નાણાકીય લખાણ", en: "Legal & Financial Documents", ico: "📄",
    ex: "General letters, applications, informational documents",
    ph: "દા.ત. અરજી કે સામાન્ય પત્ર અહીં લખો…", warn: "legal",
    sample: "માનનીય સાહેબશ્રી,  સવિનય જણાવવાનું કે મારી અરજી પર સત્વરે ધ્યાન આપવા વિનંતી છે .",
    tpl: (n: string) => `વિષય: ${n}\n\nમાનનીય સાહેબશ્રી,\n\nસવિનય જણાવવાનું કે ${n} અંગે [વિગતો અહીં લખો]. આપને વિનંતી છે કે યોગ્ય કાર્યવાહી કરશો.\n\nઆભાર સહ,\n[તમારું નામ]\n[તારીખ]`
  },
  {
    id: "invite", gu: "આમંત્રણો અને કાર્યક્રમો", en: "Invitations & Events", ico: "💌",
    ex: "Wedding invitations, birthdays, school functions, public events",
    ph: "દા.ત. આમંત્રણનું લખાણ અહીં લખો…",
    sample: "આપ સર્વે ને વાર્ષિક ઉત્સવ મા ભાવ ભર્યુ આમંત્રણ છે.",
    tpl: (n: string) => `આપ સૌને ${n} પ્રસંગે ભાવભર્યું આમંત્રણ છે.\nતારીખ: [તારીખ]\nસમય: [સમય]\nસ્થળ: [સ્થળ]\nઆપની ઉપસ્થિતિ અમારા માટે આનંદની વાત હશે.`
  },
  {
    id: "trans", gu: "અનુવાદ અને સરળ ગુજરાતી", en: "Translation & Simple Gujarati", ico: "🔤",
    ex: "Translation into Gujarati and simplification of complicated Gujarati",
    ph: "અંગ્રેજી લખાણ અનુવાદ માટે, અથવા અઘરું ગુજરાતી સરળ બનાવવા અહીં લખો…",
    sample: "Good morning. Happy Diwali. Thank you.", smode: "translate", tpl: null
  },
  {
    id: "other", gu: "અન્ય", en: "Other", ico: "✏️",
    ex: "Describe your purpose in the box below if none of the categories fits",
    ph: "અહીં તમારું લખાણ લખો…",
    sample: "આ મારો પ્રથમ પ્રયત્ન છે ,  કૃપયા સુચના આપો.",
    tpl: (n: string) => `${n}\n[તમારી વિગતો અહીં લખો]`
  }
];

export const WARN = {
  health: "⚕️ આ ટૂલ માત્ર ભાષા (જોડણી/શબ્દરચના) તપાસે છે. દવા, ડોઝ, આંકડા કે તબીબી માહિતીની સાચાઈ ચકાસતું નથી. પ્રકાશિત કરતા પહેલા ડૉક્ટર પાસે ચકાસણી કરાવો. (Language check only – not medical verification.)",
  legal: "⚖️ આ ટૂલ માત્ર ભાષા તપાસે છે. કાનૂની કે નાણાકીય સાચાઈ, રકમ, તારીખ કે શરતો ચકાસતું નથી. વકીલ કે નાણાકીય સલાહકાર પાસે ચકાસણી કરાવો. (Language check only – not legal or financial verification.)"
};

export const WARNTIP = {
  health: "⚕️ દવા, ડોઝ અને આંકડા ડૉક્ટર કે નિષ્ણાત પાસે ચકાસવા. આ ટૂલ માત્ર ભાષા તપાસે છે.",
  legal: "⚖️ રકમ, તારીખ અને શરતો વકીલ કે નાણાકીય સલાહકાર પાસે ચકાસવી. આ ટૂલ માત્ર ભાષા તપાસે છે."
};

export interface ModeItem {
  id: string;
  gu: string;
  en: string;
  desc: string;
}

export const MODES: ModeItem[] = [
  { id: "spell", gu: "માત્ર જોડણી સુધારો", en: "Correct Spelling", desc: "માત્ર જાણીતી જોડણીની ભૂલો સુધારે છે; બાકી લખાણ જેમ છે તેમ રહે છે." },
  { id: "grammar", gu: "વ્યાકરણ સુધારો", en: "Grammar Check", desc: "જગ્યા, વિરામચિહ્ન અને જોડાણ (શાળા મા → શાળામાં) સુધારે છે. (Demo rules)" },
  { id: "proof", gu: "સંપૂર્ણ પ્રૂફરીડિંગ", en: "Full Proofreading", desc: "જોડણી + જગ્યા/વિરામચિહ્ન + જોડાણ, ત્રણેય સુધારે છે." },
  { id: "improve", gu: "લખાણ સુધારો", en: "Improve Writing", desc: "પ્રૂફરીડિંગ + થોડા સહજ શૈલી સુધારા (જેમ કે ‘કૃપયા’ → ‘કૃપા કરીને’)." },
  { id: "simple", gu: "સરળ ગુજરાતી", en: "Simple Gujarati", desc: "અઘરા શબ્દોને નાની યાદી પ્રમાણે સરળ શબ્દોથી બદલે છે. (Demo)" },
  { id: "formal", gu: "ઔપચારિક ગુજરાતી", en: "Professional Gujarati", desc: "‘તમે’ ને બદલે ‘આપ’ જેવા આદરપૂર્ણ શબ્દો વાપરે છે. (Demo)" },
  { id: "generate", gu: "નવું લખાણ બનાવો", en: "Generate New Text", desc: "તમારા વિષય પરથી [ખાલી જગ્યા] વાળો નમૂનો બનાવે છે. સાચું AI નથી, નમૂનો (template) છે." },
  { id: "translate", gu: "ગુજરાતીમાં અનુવાદ કરો", en: "Translate to Gujarati", desc: "નાની યાદીના જાણીતા અંગ્રેજી શબ્દો ગુજરાતીમાં બદલે છે. સાચો અનુવાદક નથી. (Demo)" }
];

export const SAL = /માનનીય|સાહેબ|મહોદય|પ્રિય/;

export const CHECKS: Record<string, (t: string) => string[]> = {
  biz: t => /સંપર્ક|ફોન|મોબાઈલ|સરનામું|[૦-૯0-9]/.test(t) ? [] : ["📌 જાહેરાતમાં સંપર્ક નંબર કે સરનામું ઉમેર્યું છે? (Add contact details.)"],
  invite: t => {
    const m = ["તારીખ", "સમય", "સ્થળ"].filter(x => !t.includes(x));
    return m.length ? ["📌 આમંત્રણમાં આ વિગતો લખી છે? " + m.join(", ") + " (date, time, place)"] : [];
  },
  gov: t => /તારીખ|આજે|કાલે/.test(t) ? [] : ["📌 જાહેર સૂચનામાં તારીખ અને કચેરી/વિભાગનું નામ લખ્યું છે? (Add date and office.)"],
  legal: t => SAL.test(t) ? [] : ["📌 પત્રની શરૂઆતમાં સંબોધન (દા.ત. માનનીય સાહેબશ્રી) લખ્યું છે?"],
  prof: t => [
    ...(SAL.test(t) ? [] : ["📌 શરૂઆતમાં સંબોધન લખ્યું છે? (e.g. માનનીય મહોદય)"]),
    ...(t.includes("આભાર") ? [] : ["📌 અંતે ‘આભાર’ લખવાનું વિચારો."])
  ]
};

export const SAMPLES = {
  para: "ગુજરાતિ ભાષા આપણી સંસ્કૃતી નો અમૂલ્ય વારસો છે.  દરેક વિધાર્થી એ પરિક્ષા પહેલા સુચના અવશ્ય વાંચવી  .  કૃપયા સત્વરે સંપર્ક સાધો.",
  banner: "દિપાવલી ની હાર્દિક શુભેછા !  નવા વર્ષે અભીનંદન.  સ્વછતા નું મહત્વ સમજો,  સુવીધા નો ઉપયોગ કરો."
};

export interface TestCaseItem {
  label: string;
  mode?: string;
  text: string;
  expected: string;
}

export const TESTS: TestCaseItem[] = [
  { label: "શાળા આમંત્રણ", text: "અમારી શાળા મા આવતી કાલે વાર્ષિક ઉત્સવ યોજવા મા આવશે. આપ સર્વે ને ભાવ ભર્યુ આમંત્રણ છે.", expected: "અમારી શાળામાં આવતી કાલે વાર્ષિક ઉત્સવ યોજવામાં આવશે. આપ સૌને ભાવભર્યું આમંત્રણ છે." },
  { label: "જગ્યા અને વિરામચિહ્ન", text: "આજે  સાંજે ૭ વાગ્યે ,કાર્યક્રમ શરૂ થશે .બધા આવજો !", expected: "આજે સાંજે ૭ વાગ્યે, કાર્યક્રમ શરૂ થશે. બધા આવજો!" },
  { label: "જોડણી", text: "દરેક વિધાર્થીએ પરિક્ષા ની સુચના જરુર વાંચવી.", expected: "દરેક વિદ્યાર્થીએ પરીક્ષાની સૂચના જરૂર વાંચવી." },
  { label: "ક્રિયાપદ અને થી", text: "બાળકો ઘર થી શાળા સુધી ચાલતા ગયા. અમે ગઈકાલે પુસ્તક વાંચ્યુ.", expected: "બાળકો ઘરથી શાળા સુધી ચાલતા ગયા. અમે ગઈકાલે પુસ્તક વાંચ્યું." },
  { label: "‘મા’ = માતા", text: "મારી મા બહુ સારી છે. તે ઘર મા રહે છે.", expected: "મારી મા બહુ સારી છે. તે ઘરમાં રહે છે." },
  { label: "દિવાળી બેનર", text: "દિપાવલી ની હાર્દિક શુભેછા !  નવા વર્ષે અભીનંદન.  સ્વછતા નું મહત્વ સમજો,  સુવીધા નો ઉપયોગ કરો.", expected: "દીપાવલીની હાર્દિક શુભેચ્છા! નવા વર્ષે અભિનંદન. સ્વચ્છતાનું મહત્ત્વ સમજો, સુવિધાનો ઉપયોગ કરો." },
  { label: "માત્ર જોડણી (spell only)", mode: "spell", text: "દરેક વિધાર્થીએ  પરિક્ષા ની સુચના  વાંચવી .", expected: "દરેક વિદ્યાર્થીએ  પરીક્ષા ની સૂચના  વાંચવી ." },
  { label: "ઔપચારિક (formal)", mode: "formal", text: "તમને અમારા કાર્યક્રમ મા આવવા વિનંતી છે.", expected: "આપને અમારા કાર્યક્રમમાં આવવા વિનંતી છે." }
];
