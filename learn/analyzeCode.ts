import { config } from "dotenv";
import { GoogleGenAI } from "@google/genai";
config();

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: `${apiKey}` });

export async function analyzeCodeWithGemini(fn: Function, problemTitle = "") {
  const codeStr = fn.toString();
  const prompt = `
    I solved a LeetCode problem${
      problemTitle ? ` titled "${problemTitle}"` : ""
    }.
    Here's my TypeScript solution:

    \`\`\`ts
    ${codeStr}
    \`\`\`

    Can you do the following:
    1. Analyze time and space complexity.
    2. Generate 5 test cases (normal + edge cases).
    Return it cleanly formatted for terminal output.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `${prompt}`,
    });
    console.log(response.text);
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to analyze code with Gemini API.");
  }
}
