export type AIAction = 'summarize' | 'keyPoints' | 'improve';

export interface AIResult {
  summary: string;
  keyPoints: string[];
  improved: string;
}

// Simulate AI with smart text processing
// In production replace with actual AI API calls (Gemini, OpenAI, etc.)
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function splitSentences(text: string): string[] {
  return text
    .replace(/([.?!])\s+/g, '$1\n')
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

function extractKeyPhrases(text: string): string[] {
  const sentences = splitSentences(text);
  // Pick sentences that contain key signal words, or every other sentence
  const keywords = ['important', 'key', 'must', 'should', 'need', 'critical', 'main', 'primary', 'essential', 'significant', 'note', 'remember', 'ensure', 'goal', 'objective', 'result', 'conclusion'];
  const matched = sentences.filter(s =>
    keywords.some(k => s.toLowerCase().includes(k))
  );
  // If no keyword matches, pick evenly distributed sentences
  const selected = matched.length >= 3
    ? matched.slice(0, 5)
    : sentences.filter((_, i) => i % Math.max(1, Math.floor(sentences.length / 5)) === 0).slice(0, 5);

  return selected.length ? selected : sentences.slice(0, 3);
}

function generateSummary(text: string): string {
  const sentences = splitSentences(text);
  if (sentences.length <= 2) return text.trim();
  // Take ~30% of sentences, minimum 2, maximum 4
  const count = Math.min(4, Math.max(2, Math.floor(sentences.length * 0.3)));
  const step = Math.floor(sentences.length / count);
  const picked: string[] = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.min(i * step, sentences.length - 1);
    picked.push(sentences[idx]);
  }
  return picked.join(' ');
}

function improveWriting(text: string): string {
  // Apply common improvements:
  let improved = text.trim();

  // Fix multiple spaces
  improved = improved.replace(/  +/g, ' ');

  // Capitalize first letter of each sentence
  improved = improved.replace(/(^|[.!?]\s+)([a-z])/g, (_, p1, p2) => p1 + p2.toUpperCase());

  // Ensure ends with period
  if (improved && !/[.!?]$/.test(improved)) {
    improved += '.';
  }

  // Replace informal words
  const informal: Record<string, string> = {
    "gonna": "going to",
    "wanna": "want to",
    "gotta": "have to",
    "kinda": "kind of",
    "sorta": "sort of",
    "btw": "by the way",
    "fyi": "for your information",
    "imo": "in my opinion",
    "asap": "as soon as possible",
    "bc": "because",
    "thru": "through",
    "ur": "your",
    "u": "you",
    "r": "are",
    "cuz": "because",
    "tho": "though",
    "ya": "you",
    "n't": " not",
    "lol": "",
    "omg": "",
  };

  Object.entries(informal).forEach(([from, to]) => {
    const re = new RegExp(`\\b${from}\\b`, 'gi');
    improved = improved.replace(re, to);
  });

  // Remove double punctuation
  improved = improved.replace(/([.!?]){2,}/g, '$1');

  // Add professional framing if text is short
  if (improved.split(' ').length < 20) {
    improved = `${improved}`;
  }

  return improved;
}

export async function processWithAI(text: string, action: AIAction): Promise<Partial<AIResult>> {
  // Simulate network latency
  await delay(1400 + Math.random() * 800);

  if (!text.trim()) {
    throw new Error('Please enter some text first.');
  }

  switch (action) {
    case 'summarize':
      return { summary: generateSummary(text) };
    case 'keyPoints':
      return { keyPoints: extractKeyPhrases(text) };
    case 'improve':
      return { improved: improveWriting(text) };
    default:
      throw new Error('Unknown action');
  }
}

export async function processAll(text: string): Promise<AIResult> {
  await delay(2000 + Math.random() * 1000);

  if (!text.trim()) {
    throw new Error('Please enter some text first.');
  }

  return {
    summary: generateSummary(text),
    keyPoints: extractKeyPhrases(text),
    improved: improveWriting(text),
  };
}
