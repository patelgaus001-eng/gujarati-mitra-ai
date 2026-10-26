import { useState, useRef, useEffect } from 'react';
import {
  BRAND,
  CATS,
  MODES,
  WARN,
  WARNTIP,
  CHECKS,
  SAMPLES,
  TESTS,
  SLOG,
  engine,
  translateText,
  hilite,
  esc,
  G
} from './data/gujaratiMitra';

interface OutputState {
  title: string;
  orig: string;
  resHtml: string;
  plain: string;
  whyItems: string[];
}

export default function App() {
  // Engine selection: 'rule' is the safe, default offline engine
  const [engineType, setEngineType] = useState<'rule' | 'gemini'>('rule');
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  const [catId, setCatId] = useState<string>("edu");
  const [wmodeId, setWmodeId] = useState<string>("proof");
  const [otherText, setOtherText] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [askMessage, setAskMessage] = useState<string | null>(null);
  const [outputState, setOutputState] = useState<OutputState | null>(null);
  const [copyResLabel, setCopyResLabel] = useState<string>("📋 Copy Result");

  // Slogan generator state
  const [brandName, setBrandName] = useState<string>("સ્વાદ સ્ટોર");
  const [slogansList, setSlogansList] = useState<string[]>([]);
  const [sloganCopyIdx, setSloganCopyIdx] = useState<number | null>(null);

  // Automated test state
  const [testResults, setTestResults] = useState<{ label: string; pass: boolean; expected: string; got: string }[] | null>(null);

  const outRef = useRef<HTMLDivElement>(null);
  const askBoxRef = useRef<HTMLDivElement>(null);
  const inpRef = useRef<HTMLTextAreaElement>(null);

  const currentCat = CATS.find(c => c.id === catId) || CATS[0];
  const currentMode = MODES.find(m => m.id === wmodeId) || MODES[2];

  // Initialize 4 random slogans on mount
  useEffect(() => {
    generateSlogansWithBrand(brandName);
  }, []);

  const handleCatChange = (newCatId: string) => {
    setCatId(newCatId);
  };

  const handleModeChange = (newModeId: string) => {
    setWmodeId(newModeId);
  };

  const catSample = () => {
    setInputText(currentCat.sample);
    const targetMode = currentCat.smode || "proof";
    setWmodeId(targetMode);
    setOutputState(null);
    setAskMessage(null);
  };

  const loadSample = (key: 'para' | 'banner') => {
    setInputText(SAMPLES[key]);
    setOutputState(null);
    setAskMessage(null);
  };

  const clearAll = () => {
    setInputText("");
    setOutputState(null);
    setAskMessage(null);
    setTestResults(null);
    inpRef.current?.focus();
  };

  const ask = (msg: string) => {
    setOutputState(null);
    setAskMessage("❓ " + msg);
    setTimeout(() => {
      askBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  const renderResult = (title: string, src: string, html: string, plainText: string, items: string[], tips: string[]) => {
    const list: string[] = [];
    items.forEach(x => list.push(x));
    tips.forEach(x => {
      const isSpecial = /^(❓|⚕|⚖|📌)/.test(x);
      list.push((isSpecial ? "" : "💭 ") + esc(x));
    });

    setOutputState({
      title,
      orig: src,
      resHtml: html,
      plain: plainText,
      whyItems: list
    });

    setTimeout(() => {
      outRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  // Rule-based engine execution
  const executeRuleBased = (modeToRun: string) => {
    setAskMessage(null);
    const m = MODES.find(x => x.id === modeToRun) || MODES[2];

    if (currentCat.id === "other" && !otherText.trim()) {
      ask("‘અન્ય’ માટે તમારો હેતુ ઉપરના બોક્સમાં લખો. (Please describe your purpose.)");
      return;
    }

    if (!inputText.trim()) {
      ask(
        modeToRun === "generate"
          ? "પહેલા વિષય લખો, દા.ત. ‘શાળાનો વાર્ષિક ઉત્સવ’. (Please write a topic first.)"
          : "પહેલા લખાણ લખો અથવા paste કરો. (Please enter some text first.)"
      );
      return;
    }

    const hasGu = new RegExp("[" + G + "]").test(inputText);
    const hasEn = /[A-Za-z]/.test(inputText);
    const purpose = currentCat.id === "other" ? otherText.trim() : currentCat.en;
    const title = `${m.en} · ${m.gu} · ${purpose} (Rule-Based)`;
    const wt = currentCat.warn ? [WARNTIP[currentCat.warn]] : [];

    if (modeToRun === "generate") {
      if (!currentCat.tpl) {
        ask("આ હેતુ માટે નમૂનો નથી. ‘Translate to Gujarati’ મોડ વાપરો અથવા બીજો હેતુ પસંદ કરો.");
        return;
      }
      if (inputText.trim().length < 3) {
        ask("વિષય બહુ ટૂંકો છે. થોડી વધુ વિગત લખો. (Topic is too short – please add a little more.)");
        return;
      }
      const out = currentCat.tpl(inputText.trim());
      renderResult(
        title,
        inputText,
        esc(out),
        out,
        ["નમૂનો (template): “" + esc(currentCat.en) + "” માટેના તૈયાર ઢાંચામાં તમારો વિષય મૂક્યો છે. આ AI નથી."],
        ["❓ [ ] માં લખેલી વિગતો (તારીખ, સ્થળ, નામ વગેરે) તમારે જાતે ભરવી. કોઈ નવી માહિતી ઉમેરી નથી.", ...wt]
      );
      return;
    }

    if (modeToRun === "translate") {
      if (hasGu && !hasEn) {
        ask("આ લખાણ પહેલેથી ગુજરાતીમાં છે. સુધારવા માટે ‘Full Proofreading’ કે ‘Simple Gujarati’ પસંદ કરો. (Already Gujarati.)");
        return;
      }
      const r = translateText(inputText);
      renderResult(title, inputText, hilite(inputText, r.out), r.out, r.items, [...r.tips, ...wt]);
      return;
    }

    if (!hasGu) {
      ask("આ લખાણમાં ગુજરાતી અક્ષરો નથી. અનુવાદ કરવો હોય તો ‘Translate to Gujarati’ મોડ પસંદ કરો. (No Gujarati found – did you want to translate?)");
      return;
    }

    const r = engine(inputText, modeToRun);
    const total = r.log.reduce((a, e) => a + e.n, 0);
    const li = r.log.map(e =>
      e.a
        ? `<b>${esc(e.a)}</b> → <b>${esc(e.b || '')}</b>${e.n > 1 ? " (×" + e.n + ")" : ""} · ${esc(e.why)}`
        : `${esc(e.why)} (×${e.n})`
    );
    if (!li.length) {
      li.push("આ મોડના demo નિયમોમાં કોઈ ભૂલ મળી નથી. (No rule matched – this does not mean the text is perfect.)");
    }
    const ck = CHECKS[currentCat.id] ? CHECKS[currentCat.id](r.out) : [];
    renderResult(`${title} · ${total} corrections`, inputText, hilite(inputText, r.out), r.out, li, [...r.tips, ...ck, ...wt]);
  };

  // Gemini AI engine execution
  const executeGemini = async (modeToRun: string) => {
    setAskMessage(null);
    const m = MODES.find(x => x.id === modeToRun) || MODES[2];

    if (currentCat.id === "other" && !otherText.trim()) {
      ask("‘અન્ય’ માટે તમારો હેતુ ઉપરના બોક્સમાં લખો. (Please describe your purpose.)");
      return;
    }

    if (!inputText.trim()) {
      ask(
        modeToRun === "generate"
          ? "પહેલા વિષય લખો, દા.ત. ‘શાળાનો વાર્ષિક ઉત્સવ’. (Please write a topic first.)"
          : "પહેલા લખાણ લખો અથવા paste કરો. (Please enter some text first.)"
      );
      return;
    }

    setIsAiLoading(true);
    const purpose = currentCat.id === "other" ? otherText.trim() : currentCat.en;
    const title = `${m.en} · ${m.gu} · ${purpose} (Gemini AI)`;
    const wt = currentCat.warn ? [WARNTIP[currentCat.warn]] : [];

    try {
      const response = await fetch('/api/gemini/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: inputText,
          category: currentCat.en,
          mode: m.en,
          customPurpose: otherText
        })
      });

      const result = await response.json();

      if (result.success && result.data) {
        const { correctedText, changes, tips } = result.data;
        const changeItems = (changes || []).map((ch: string) => `✨ ${esc(ch)}`);
        const tipItems = [...(tips || []), ...wt];
        renderResult(
          title,
          inputText,
          hilite(inputText, correctedText),
          correctedText,
          changeItems.length ? changeItems : ["Gemini AI દ્વારા લખાણ શુદ્ધ કરવામાં આવ્યું છે."],
          tipItems
        );
      } else {
        // Show clear user-friendly Gujarati error without breaking app
        const errMsg = result.error || "Gemini AI સેવા હાલમાં ઉપલબ્ધ નથી.";
        setAskMessage(`⚠️ ${errMsg}`);
        // Optionally run rule-based engine as fallback so user still sees result
        executeRuleBased(modeToRun);
      }
    } catch {
      setAskMessage("⚠️ સર્વર સાથે જોડાણ થઈ શક્યું નથી. આપમેળે નિયમ-આધારિત પરિણામ દર્શાવવામાં આવે છે.");
      executeRuleBased(modeToRun);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleGo = (modeToRun: string) => {
    if (engineType === 'gemini') {
      executeGemini(modeToRun);
    } else {
      executeRuleBased(modeToRun);
    }
  };

  const runQuick = (m: string) => {
    setWmodeId(m);
    handleGo(m);
  };

  const copyTextToClipboard = async (str: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(str);
      return true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = str;
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        ta.remove();
        return ok;
      } catch {
        return false;
      }
    }
  };

  const handleCopyRes = async () => {
    if (!outputState?.plain) {
      setCopyResLabel("Nothing to copy");
      setTimeout(() => setCopyResLabel("📋 Copy Result"), 1500);
      return;
    }
    const ok = await copyTextToClipboard(outputState.plain);
    setCopyResLabel(ok ? "✅ Copied!" : "⚠️ Copy failed");
    setTimeout(() => setCopyResLabel("📋 Copy Result"), 1800);
  };

  const generateSlogansWithBrand = (name: string) => {
    const n = name.trim() || "તમારું નામ";
    const pick = [...SLOG].sort(() => Math.random() - 0.5).slice(0, 4).map(f => f(n));
    setSlogansList(pick);
  };

  const handleCopySlogan = async (text: string, idx: number) => {
    const ok = await copyTextToClipboard(text);
    if (ok) {
      setSloganCopyIdx(idx);
      setTimeout(() => setSloganCopyIdx(null), 1800);
    }
  };

  const runAllTests = () => {
    const res = TESTS.map(t => {
      const got = engine(t.text, t.mode || "proof").out;
      return {
        label: t.label,
        pass: got === t.expected,
        expected: t.expected,
        got
      };
    });
    setTestResults(res);
  };

  const loadTest = (testIndex: number) => {
    const t = TESTS[testIndex];
    setInputText(t.text);
    setWmodeId(t.mode || "proof");
    setOutputState(null);
    setAskMessage(`🧪 Test ${testIndex + 1} loaded · mode: ${t.mode || "proof"} · Expected: ${t.expected}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="wrap">
      {/* Header */}
      <h1>
        <span id="appName">{BRAND.appName}</span> <span className="tag">Dual-Engine</span>
      </h1>
      <p className="sub" id="tagline">{BRAND.tagline}</p>

      {/* Dual Engine Switcher Card */}
      <div className="card" style={{ padding: "12px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <div>
            <div className="lbl" style={{ margin: 0 }}>એન્જિન પસંદ કરો · Select Engine Mode</div>
            <div className="hint" style={{ margin: 0 }}>
              {engineType === 'rule'
                ? '⚡ નિયમ-આધારિત એન્જિન (ઓફલાઇન / ડેમો નિયમો - સુરક્ષિત ડિફોલ્ટ)'
                : '🤖 Gemini 3.8 Flash AI (Google AI Studio સર્વર પ્રોક્સી)'}
            </div>
          </div>
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              type="button"
              className={engineType === 'rule' ? 'main' : ''}
              style={{ minHeight: "38px", padding: "6px 14px", flex: "0 0 auto", fontSize: "0.9rem" }}
              onClick={() => { setEngineType('rule'); setAskMessage(null); }}
            >
              ⚡ Rule-Based (ડિફોલ્ટ)
            </button>
            <button
              type="button"
              className={engineType === 'gemini' ? 'main' : ''}
              style={{ minHeight: "38px", padding: "6px 14px", flex: "0 0 auto", fontSize: "0.9rem" }}
              onClick={() => { setEngineType('gemini'); setAskMessage(null); }}
            >
              🤖 Gemini AI
            </button>
          </div>
        </div>
      </div>

      {/* Card 1: Purpose & Mode Selection */}
      <div className="card">
        <h2>🎯 હેતુ અને મોડ પસંદ કરો · Choose purpose &amp; mode</h2>
        <p className="hint">
          ૧. હેતુ પસંદ કરો · ૨. મોડ પસંદ કરો · ૩. લખાણ લખી ‘શરૂ કરો’ દબાવો (1. Pick purpose, 2. Pick mode, 3. Type text and press Start)
        </p>

        <label className="lb" htmlFor="cat">હેતુ · Purpose</label>
        <select
          id="cat"
          value={catId}
          onChange={(e) => handleCatChange(e.target.value)}
        >
          {CATS.map(c => (
            <option key={c.id} value={c.id}>
              {c.ico} {c.en} — {c.gu}
            </option>
          ))}
        </select>
        <div className="hint" id="catHelp">{currentCat.ex}</div>

        <input
          id="otherBox"
          placeholder="તમારો હેતુ લખો (Describe your purpose)"
          hidden={catId !== "other"}
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
        />

        {currentCat.warn && (
          <div className="warn" id="catWarn">
            {WARN[currentCat.warn]}
          </div>
        )}

        <label className="lb" htmlFor="wmode">લખાણ મોડ · Writing mode</label>
        <select
          id="wmode"
          value={wmodeId}
          onChange={(e) => handleModeChange(e.target.value)}
        >
          {MODES.map(m => (
            <option key={m.id} value={m.id}>
              {m.en} — {m.gu}
            </option>
          ))}
        </select>
        <div className="hint" id="modeHelp">{currentMode.desc}</div>
      </div>

      {/* Card 2: Enter text */}
      <div className="card">
        <h2 id="inpTitle">
          {wmodeId === "generate" ? "✍️ વિષય લખો · Enter your topic" : "✍️ તમારું લખાણ લખો · Enter your text"}
        </h2>
        <textarea
          ref={inpRef}
          id="inp"
          placeholder={currentCat.ph}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="row">
          <button
            className="main"
            disabled={isAiLoading}
            onClick={() => handleGo(wmodeId)}
          >
            {isAiLoading ? "⏳ AI ચકાસણી ચાલુ છે… (Analyzing with Gemini…)" : "▶ શરૂ કરો · Start"}
          </button>
        </div>

        <p className="hint" style={{ marginTop: "12px" }}>ઝડપી બટન · Quick buttons</p>
        <div className="row">
          <button className="main" disabled={isAiLoading} onClick={() => runQuick("proof")}>
            ✅ Proofread Text
          </button>
          <button className="main" disabled={isAiLoading} onClick={() => runQuick("improve")}>
            ✨ Improve Writing
          </button>
          <button className="main" disabled={isAiLoading} onClick={() => runQuick("simple")}>
            🌱 Simple Gujarati
          </button>
        </div>

        <div className="row">
          <button onClick={catSample}>Sample: this purpose</button>
          <button onClick={() => loadSample("para")}>Sample: લખાણ</button>
          <button onClick={() => loadSample("banner")}>Sample: Banner</button>
          <button onClick={clearAll}>Clear</button>
        </div>
      </div>

      {/* Warning/Ask Box */}
      {askMessage && (
        <div ref={askBoxRef} className="warn" id="askBox">
          {askMessage}
        </div>
      )}

      {/* Card 3: Results Display */}
      {outputState && (
        <div ref={outRef} id="out" className="card">
          <h2 id="mode">{outputState.title}</h2>
          <div className="grid">
            <div>
              <div className="lbl">મૂળ લખાણ · Original</div>
              <div className="box" id="orig">{outputState.orig}</div>
            </div>
            <div>
              <div className="lbl">સુધારેલું લખાણ · Result</div>
              <div
                className="box new"
                id="res"
                dangerouslySetInnerHTML={{ __html: outputState.resHtml }}
              />
            </div>
          </div>
          <div className="row">
            <button className="main" id="cp" onClick={handleCopyRes}>
              {copyResLabel}
            </button>
          </div>
          <p className="note">
            ℹ️ {outputState.title.includes('Gemini AI')
              ? 'Gemini 3.8 Flash AI મોડલ દ્વારા તૈયાર કરેલ પરિણામ.'
              : 'Rule-based demo: નિયમ-આધારિત એન્જિન દ્વારા તૈયાર કરેલ પરિણામ.'}
          </p>
          <h2 style={{ marginTop: "14px" }}>💡 સુધારાની સમજ · What changed</h2>
          <ul id="why">
            {outputState.whyItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      )}

      {/* Card 4: Slogan & Ad Generator */}
      <div className="card">
        <h2>📣 સ્લોગન બનાવો · Slogan &amp; Ad Generator</h2>
        <input
          id="brand"
          placeholder="નામ લખો, જેમ કે: સ્વાદ સ્ટોર"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <div className="row">
          <button className="main" onClick={() => generateSlogansWithBrand(brandName)}>
            🎯 Generate Slogans
          </button>
        </div>
        <div id="sl">
          {slogansList.map((slogan, idx) => (
            <div key={idx} className="sl">
              <span>{slogan}</span>
              <button onClick={() => handleCopySlogan(slogan, idx)}>
                {sloganCopyIdx === idx ? "✅ Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
        <p className="hint">
          આ ફક્ત નમૂના (templates) છે. ગુણવત્તા કે ભાવ જેવા દાવા તમારા વ્યવસાયને લાગુ પડે છે કે કેમ તે તપાસો.
        </p>
      </div>

      <p className="note">
        ⚠️ Rule-based engine spacing, જોડણી યાદી, ક્રિયાપદ અંત, અને મા/ને/થી/નો/ની/નું જોડાણ ચકાસે છે. Gemini AI મોડ ઊંડા સંદર્ભ અને અર્થપૂર્ણ ગુજરાતી વાક્યરચના માટે છે. આ ટૂલ તબીબી કે કાનૂની સાચાઈ ચકાસતું નથી.
      </p>

      {/* Card 5: Roadmap */}
      <div className="card" id="roadmap">
        <h2>🗺️ Coming Later · ભવિષ્યમાં આવનાર સુવિધાઓ</h2>
        <p className="note">આ બધી સુવિધાઓ હજી <b>બની નથી</b>, ફક્ત યોજના છે. (Planned only – none of these work yet.)</p>
        <ul className="road">
          <li><span className="tag">Planned</span> 📷 <b>Image-to-Text proofreading</b> · ફોટા/બેનરમાંથી લખાણ વાંચીને તપાસ</li>
          <li><span className="tag">Planned</span> 📄 <b>PDF / DOCX / TXT proofreading</b> · ફાઇલ અપલોડ કરીને તપાસ</li>
          <li><span className="tag">Planned</span> 📣 <b>Gujarati advertisement writer</b> · સંપૂર્ણ જાહેરાત લેખક</li>
          <li><span className="tag">Planned</span> 🧑‍🏫 <b>Teacher &amp; student tools</b> · શિક્ષક અને વિદ્યાર્થી માટે સાધનો</li>
          <li><span className="tag">Planned</span> 💼 <b>Business &amp; professional writing tools</b> · વેપાર અને વ્યાવસાયિક લેખન સાધનો</li>
        </ul>
      </div>

      {/* Card 6: Collapsible Automated Test Cases */}
      <details className="card">
        <summary>🧪 Test cases · ટેસ્ટ લખાણ (for testing)</summary>
        <p className="note">
          Tap a test to load it into the text box, then press a button above. “Run all tests” checks every case automatically.
        </p>
        <div className="row" id="tests">
          {TESTS.map((t, i) => (
            <button key={i} onClick={() => loadTest(i)}>
              Test {i + 1}: {t.label}
            </button>
          ))}
        </div>
        <div className="row">
          <button className="main" onClick={runAllTests}>
            ▶ Run all tests
          </button>
        </div>
        {testResults && (
          <div id="testOut">
            {testResults.map((tr, idx) => (
              <div key={idx} className="tc">
                <b className={tr.pass ? "pass" : "fail"}>
                  {tr.pass ? "✅ PASS" : "❌ FAIL"}
                </b>{" "}
                Test {idx + 1}: {tr.label}
                {!tr.pass && (
                  <div className="note">
                    Expected: {tr.expected}
                    <br />
                    Got: {tr.got}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </details>

      {/* Footer: Dynamic branding credits */}
      <footer className="about" id="about">
        <div>
          <b id="aboutName">{BRAND.appName}</b> · <span id="aboutVer">{BRAND.version}</span>
        </div>
        <div id="aboutTag">{BRAND.tagline}</div>
        <div>
          <span id="aboutCredit">{BRAND.creditLabel}</span> <b id="aboutDev">{BRAND.developer}</b>
        </div>
      </footer>
    </div>
  );
}
