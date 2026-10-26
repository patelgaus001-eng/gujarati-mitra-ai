import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '2mb' }));

  // API endpoint for Gemini Gujarati processing
  app.post('/api/gemini/process', async (req, res) => {
    const { text, category, mode, customPurpose } = req.body;

    if (!text || typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({
        success: false,
        error: 'કૃપા કરીને લખાણ લખો. (Text is required.)'
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        success: false,
        error: 'Gemini API કી ઉપલબ્ધ નથી. કૃપા કરીને નિયમ-આધારિત મોડ વાપરો. (API key not configured. Please use Rule-based mode.)',
        canFallback: true
      });
    }

    try {
      const ai = new GoogleGenAI({});
      const prompt = `You are Gujarati Mitra AI (ગુજરાતી મિત્ર), an expert Gujarati language scholar, proofreader, and copywriter.
Task: ${mode || 'proofread'}
Category / Purpose: ${category || 'general'} ${customPurpose ? `(${customPurpose})` : ''}

Input Gujarati text:
"""${text}"""

Instructions:
1. Provide the thoroughly corrected, polished Gujarati text (શુદ્ધ અને યોગ્ય જોડણી, યોગ્ય અનુસ્વાર, યોગ્ય વિરામચિહ્નો, યોગ્ય વ્યાકરણ).
2. If the task is 'translate', translate the input accurately into natural Gujarati.
3. If the task is 'generate', generate complete, professional Gujarati content for the given topic.
4. List specific corrections or improvements made in Gujarati.
5. Provide helpful tips or tone recommendations for this purpose.

Respond ONLY with valid JSON in this exact structure:
{
  "correctedText": "string containing corrected or generated Gujarati text",
  "changes": [
    "string in Gujarati describing a change or improvement"
  ],
  "tips": [
    "string in Gujarati providing domain or tone advice"
  ]
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const responseText = response.text || '{}';
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = {
          correctedText: responseText.trim(),
          changes: ['લખાણ સુધારવામાં આવ્યું છે.'],
          tips: []
        };
      }

      return res.json({
        success: true,
        data: {
          correctedText: parsed.correctedText || text,
          changes: Array.isArray(parsed.changes) ? parsed.changes : [],
          tips: Array.isArray(parsed.tips) ? parsed.tips : []
        }
      });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      let userFriendlyError = 'Gemini AI સાથે જોડાણમાં ક્ષતિ આવી છે. કૃપા કરીને નિયમ-આધારિત મોડ વાપરો.';

      if (errMsg.includes('403') || errMsg.includes('PERMISSION_DENIED') || errMsg.includes('billing')) {
        userFriendlyError = 'Gemini API માટે બિલિંગ અથવા પરવાનગી જરૂરી છે. નિયમ-આધારિત મોડ સતત ચાલુ રહેશે. (Gemini API requires billing/permission. Rule-based mode remains active.)';
      } else if (errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED')) {
        userFriendlyError = 'API ક્વોટા પૂર્ણ થયો છે. કૃપા કરીને થોડી વાર પછી પ્રયાસ કરો અથવા નિયમ-આધારિત મોડ વાપરો. (Quota exceeded. Please retry later or use Rule-based mode.)';
      }

      return res.status(500).json({
        success: false,
        error: userFriendlyError,
        canFallback: true
      });
    }
  });

  // Vite middlewares in dev, static files in production
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Gujarati Mitra AI server listening on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
