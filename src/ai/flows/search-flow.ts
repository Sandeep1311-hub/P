'use server';
/**
 * @fileOverview A search engine AI flow.
 * 
 * - searchFlow - A function that simulates search results for a given query.
 * - SearchInput - The input type for the search function.
 * - SearchOutput - The return type for the search function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SearchInputSchema = z.object({
  query: z.string().describe('The search query entered by the user.'),
});
export type SearchInput = z.infer<typeof SearchInputSchema>;

const SearchOutputSchema = z.object({
  results: z.array(z.object({
    title: z.string().describe('The title of the search result.'),
    link: z.string().describe('A mock or real URL for the result.'),
    snippet: z.string().describe('A brief description or excerpt of the result.'),
  })),
});
export type SearchOutput = z.infer<typeof SearchOutputSchema>;

export async function searchFlow(input: SearchInput): Promise<SearchOutput> {
  const { output } = await ai.generate({
    model: 'googleai/gemini-2.5-flash',
    input: { schema: SearchInputSchema, data: input },
    output: { schema: SearchOutputSchema },
    system: `You are a specialized search engine for a professional portfolio. 
    When a user searches, you should provide highly relevant, professional-looking results.
    If the search is about "Sandeep", "ACE", "Bluestock", or "Portfolio projects", prioritize information about the developer's skills (LLMs, Neural Networks, Node.js, Azure).
    Otherwise, provide general, helpful search results.
    Each result must have a professional title, a plausible link, and a concise snippet.`,
    prompt: `Search query: {{{query}}}`,
  });

  return output!;
}

export async function performSearch(query: string): Promise<SearchOutput> {
  return searchFlow({ query });
}
