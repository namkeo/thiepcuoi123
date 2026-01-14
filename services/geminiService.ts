import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateWeddingWish = async (senderName: string, relationship: string): Promise<string> => {
  try {
    const ai = getClient();
    const prompt = `Write a short, heartfelt, and elegant wedding wish (maximum 2 sentences) for a couple named Quang Vinh and Xuan Anh. 
    The sender is ${senderName}, who is the ${relationship} of the couple. 
    The tone should be warm, celebratory, and culturally appropriate for a Vietnamese modern wedding.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text?.trim() || "Wishing you a lifetime of love and happiness!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Wishing you a lifetime of love and happiness!";
  }
};