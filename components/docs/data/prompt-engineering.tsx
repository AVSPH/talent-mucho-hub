import { Globe, Target, Zap, List, FileText } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DocGroup } from "./types";

export const promptEngineeringSections: DocGroup[] = [
  {
    title: "PROMPT ENGINEERING",
    items: [
      {
        id: "pe-intro",
        label: "What is Prompt Engineering?",
        icon: Globe,
        sections: [
          {
            title: "Overview",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Prompt engineering is the practice of designing and optimizing prompts to efficiently interact with large language models (LLMs). It involves much more than simply asking a question—it's about providing the right context, instructions, and structure.</p>
                <div className="p-4 bg-muted/30 border border-primary/20 rounded-lg">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" /> Why it matters
                  </h4>
                  <ul className="text-sm space-y-2 list-disc pl-4">
                    <li>Maximizes the quality and relevance of AI-generated responses.</li>
                    <li>Reduces hallucinations and factual errors.</li>
                    <li>Saves time by minimizing back-and-forth prompt iterations.</li>
                  </ul>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pe-best-practices",
        label: "Best Practices",
        icon: Target,
        sections: [
          {
            title: "Core Framework",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-bold text-foreground mb-2">1. Be Specific & Clear</h4>
                    <p className="text-sm">Avoid vague instructions. Clearly define the task, format, and tone expected in the output.</p>
                  </div>
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-bold text-foreground mb-2">2. Provide Context</h4>
                    <p className="text-sm">Give the model the necessary background info. The more context, the more accurate the response.</p>
                  </div>
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-bold text-foreground mb-2">3. Define the Persona</h4>
                    <p className="text-sm">Ask the model to act as an expert (e.g., "Act as a senior copywriter...").</p>
                  </div>
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-bold text-foreground mb-2">4. Use Examples</h4>
                    <p className="text-sm">Show, don't just tell. Providing clear formatting examples sets a strong pattern for the model to follow.</p>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pe-techniques",
        label: "Prompting Techniques",
        icon: Zap,
        sections: [
          {
            title: "Common Strategies",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground border-l-4 border-primary pl-4">Zero-Shot Prompting</h4>
                  <p className="text-sm">Asking a model to perform a task without providing any examples. Best for simple, straightforward tasks.</p>
                  <p className="p-4 bg-muted/40 font-mono text-xs rounded-lg border text-foreground">Extract the dates from this text: "The meeting is on June 12th and the launch is July 1st."</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground border-l-4 border-primary pl-4">Few-Shot Prompting</h4>
                  <p className="text-sm">Providing a few examples within the prompt to guide the model's output formatting and logic.</p>
                  <div className="p-4 bg-muted/40 font-mono text-xs rounded-lg border space-y-2 text-foreground">
                    <p>Great product ={">"} Positive</p>
                    <p>Terrible support ={">"} Negative</p>
                    <p>Okay experience ={">"} Neutral</p>
                    <p>I loved the app ={">"} [Model evaluates this]</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground border-l-4 border-primary pl-4">Chain of Thought</h4>
                  <p className="text-sm">Prompting the model to explain its reasoning step-by-step before outputting the final answer. E.g., adding "Let's think step by step".</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pe-strategies",
        label: "Prompt Strategies",
        icon: List,
        sections: [
          {
            title: "1. Set Clear Goals and Objectives",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Use action verbs to specify the desired action</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Write a bulleted list that summarizes the key findings of the attached research paper"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Define the desired length and format of the output</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Compose a 500-word essay discussing the impact of climate change on coastal communities."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Specify the target audience</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Write a product description for a new line of organic skincare products, targeting young adults concerned with sustainability."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "2. Provide Context and Background",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Include relevant facts and data</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Given that global temperatures have risen by 1 degree Celsius since the pre-industrial era, discuss the potential consequences for sea level rise."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Reference specific sources or documents</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Based on the attached financial report, analyze the company's profitability over the past five years."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Define key terms and concepts</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Explain the concept of quantum computing in simple terms, suitable for a non-technical audience."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "3. Use Few-Shot Prompting",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Provide a few examples of desired input-output pairs</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Input: "Cat" Output: "A small furry mammal with whiskers." Input: "Dog" Output: "A domesticated canine known for its loyalty." Prompt: "Elephant"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Demonstrate the desired style or tone</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Example 1 (humorous): "The politician's speech was so dull, it could cure insomnia." Example 2 (formal): "The dignitary delivered an address..." Prompt: "Write a sentence describing the comedian's stand-up routine."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Show the desired level of detail</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Example 1 (brief): "The movie was about a young boy..." Example 2 (detailed): "The science fiction film follows the story of Elliot..." Prompt: "Summarize the plot of the novel you just finished reading."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "4. Be Specific",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Use precise language and avoid ambiguity</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Instead of: "Write something about climate change," use: "Write a persuasive essay arguing for the implementation of stricter carbon emission regulations."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Quantify your requests whenever possible</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Instead of: "Write a long poem," use: "Write a sonnet with 14 lines that explores themes of love and loss."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Break down complex tasks into smaller steps</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Instead of: "Create a marketing plan," use: "1. Identify target audience. 2. Develop key messages. 3. Choose channels."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "5. Iterate and Experiment",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Try different phrasings and keywords</TableCell>
                        <TableCell className="text-muted-foreground text-sm">Rephrase your prompt using synonyms or alternative sentence structures.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Adjust the level of detail and specificity</TableCell>
                        <TableCell className="text-muted-foreground text-sm">Add or remove information to fine-tune the output.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Test different prompt lengths</TableCell>
                        <TableCell className="text-muted-foreground text-sm">Experiment with both shorter and longer prompts to find the optimal balance.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "6. Leverage Chain of Thought",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Encourage step-by-step reasoning</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Solve this problem step-by-step: John has 5 apples, he eats 2... Step 1: John starts with 5 apples. Step 2: eats 2..."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Ask the model to explain its reasoning</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Explain your thought process in determining the sentiment of this movie review: 'The acting was superb...'"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Guide through a logical sequence</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"To classify this email as spam... consider: 1. Is sender known? 2. Subject keywords? 3. Offer too good to be true?"</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm text-primary">
                  <p><strong>Google Cloud Tip:</strong> For further guidance, explore the <a href="https://cloud.google.com/blog/products/ai-machine-learning/five-best-practices-for-prompt-engineering" target="_blank" rel="noopener noreferrer" className="underline font-bold">Five Best Practices for Prompt Engineering</a> on Google Cloud.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pe-use-cases",
        label: "Use Cases & Examples",
        icon: FileText,
        sections: [
          {
            title: "Language & Text Generation",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <p>Prompt engineering helps produce customized and relevant output. Here are specific examples:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-xl bg-muted/10 space-y-2">
                    <h4 className="font-bold text-foreground">Creative Writing</h4>
                    <p className="text-xs">Specify genre, tone, style, and plot points to guide the narrative.</p>
                    <div className="p-3 bg-background border rounded-lg font-mono text-xs text-primary/80">"Write a short story about a young woman who discovers a magical portal in her attic."</div>
                  </div>
                  <div className="p-4 border rounded-xl bg-muted/10 space-y-2">
                    <h4 className="font-bold text-foreground">Summarization</h4>
                    <p className="text-xs">Provide text and instruct the AI to generate concise summaries.</p>
                    <div className="p-3 bg-background border rounded-lg font-mono text-xs text-primary/80">"Summarize the main points of the following news article on climate change."</div>
                  </div>
                  <div className="p-4 border rounded-xl bg-muted/10 space-y-2">
                    <h4 className="font-bold text-foreground">Translation</h4>
                    <p className="text-xs">Specify source and target languages to preserve meaning.</p>
                    <div className="p-3 bg-background border rounded-lg font-mono text-xs text-primary/80">"Translate the following text from English to Spanish: 'The quick brown fox...'"</div>
                  </div>
                  <div className="p-4 border rounded-xl bg-muted/10 space-y-2">
                    <h4 className="font-bold text-foreground">Dialogue</h4>
                    <p className="text-xs">Simulate conversations for chatbots or roleplay.</p>
                    <div className="p-3 bg-background border rounded-lg font-mono text-xs text-primary/80">"You are a friendly chatbot helping users troubleshoot... Respond to: 'My computer won't turn on.'"</div>
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Question Answering",
            content: (
               <div className="space-y-4 text-muted-foreground">
                  <div className="space-y-3">
                    <div className="p-4 border-l-4 border-primary bg-muted/10 rounded-r-xl">
                      <h4 className="font-bold text-foreground">Open-Ended & Specific Questions</h4>
                      <p className="text-sm mt-1 mb-2">Target comprehensive answers or precise information retrieval.</p>
                      <ul className="space-y-2 font-mono text-xs">
                        <li className="p-2 bg-background border rounded text-primary/80">"Explain the concept of quantum computing and its impact..."</li>
                        <li className="p-2 bg-background border rounded text-primary/80">"According to the provided text, what are the main causes..."</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-l-4 border-primary bg-muted/10 rounded-r-xl">
                      <h4 className="font-bold text-foreground">Hypothetical & Opinion-Based</h4>
                      <p className="text-sm mt-1 mb-2">Explore situations requiring reasoning and justification.</p>
                      <ul className="space-y-2 font-mono text-xs">
                        <li className="p-2 bg-background border rounded text-primary/80">"What would happen if humans could travel at the speed of light?"</li>
                        <li className="p-2 bg-background border rounded text-primary/80">"Do you believe AI will surpass human intelligence? Why?"</li>
                      </ul>
                    </div>
                  </div>
               </div>
            )
          },
          {
            title: "Code Generation",
            content: (
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-muted-foreground">
                  <div className="p-4 border rounded-xl flex flex-col gap-2 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                     <h4 className="font-bold text-foreground">Code Completion</h4>
                     <p className="text-xs">"Write a Python function to calculate the factorial of a given number."</p>
                  </div>
                  <div className="p-4 border rounded-xl flex flex-col gap-2 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                     <h4 className="font-bold text-foreground">Code Translation</h4>
                     <p className="text-xs">"Translate the following Python code to JavaScript: def greet(name)..."</p>
                  </div>
                  <div className="p-4 border rounded-xl flex flex-col gap-2 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                     <h4 className="font-bold text-foreground">Code Optimization</h4>
                     <p className="text-xs">"Optimize the following Python code to reduce its execution time."</p>
                  </div>
                  <div className="p-4 border rounded-xl flex flex-col gap-2 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                     <h4 className="font-bold text-foreground">Code Debugging</h4>
                     <p className="text-xs">"Debug the following Java code and explain why it is throwing a NullPointerException."</p>
                  </div>
               </div>
            )
          },
          {
             title: "Image Generation",
             content: (
                <div className="space-y-4 text-muted-foreground">
                   <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <dt className="font-bold text-foreground flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/80"></div>Photorealistic</dt>
                       <dd className="text-xs">Images describing lighting, scenery, and subjects: <br/><code className="text-primary mt-1 block bg-primary/5 p-2 rounded">"A photorealistic image of a sunset over the ocean with palm trees silhouetted..."</code></dd>
                     </div>
                     <div className="space-y-2">
                       <dt className="font-bold text-foreground flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/80"></div>Artistic & Abstract</dt>
                       <dd className="text-xs">Specify techniques or emotional concepts: <br/><code className="text-primary mt-1 block bg-primary/5 p-2 rounded">"An impressionist painting of a bustling city street..."</code></dd>
                     </div>
                     <div className="space-y-2 md:col-span-2">
                       <dt className="font-bold text-foreground flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/80"></div>Image Editing</dt>
                       <dd className="text-xs">Provide an image and specify modification instructions: <br/><code className="text-primary mt-1 block bg-primary/5 p-2 rounded">"Change the background of this photo to a starry night sky and add a full moon."</code></dd>
                     </div>
                   </dl>
                </div>
             )
          }
        ]
      }
    ]
  }
];
