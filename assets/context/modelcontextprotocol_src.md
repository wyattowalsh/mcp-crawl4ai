└── src
    ├── aws-kb-retrieval-server
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── brave-search
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── everart
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── everything
        ├── Dockerfile
        ├── README.md
        ├── everything.ts
        ├── index.ts
        ├── package.json
        ├── sse.ts
        └── tsconfig.json
    ├── fetch
        ├── .python-version
        ├── Dockerfile
        ├── LICENSE
        ├── README.md
        ├── pyproject.toml
        ├── src
        │   └── mcp_server_fetch
        │   │   ├── __init__.py
        │   │   ├── __main__.py
        │   │   └── server.py
        └── uv.lock
    ├── filesystem
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── gdrive
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        ├── replace_open.sh
        └── tsconfig.json
    ├── git
        ├── .gitignore
        ├── .python-version
        ├── Dockerfile
        ├── LICENSE
        ├── README.md
        ├── pyproject.toml
        ├── src
        │   └── mcp_server_git
        │   │   ├── __init__.py
        │   │   ├── __main__.py
        │   │   └── server.py
        ├── tests
        │   └── test_server.py
        └── uv.lock
    ├── github
        ├── Dockerfile
        ├── README.md
        ├── common
        │   ├── errors.ts
        │   ├── types.ts
        │   ├── utils.ts
        │   └── version.ts
        ├── index.ts
        ├── operations
        │   ├── branches.ts
        │   ├── commits.ts
        │   ├── files.ts
        │   ├── issues.ts
        │   ├── pulls.ts
        │   ├── repository.ts
        │   └── search.ts
        ├── package.json
        └── tsconfig.json
    ├── gitlab
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        ├── schemas.ts
        └── tsconfig.json
    ├── google-maps
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── memory
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── postgres
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── puppeteer
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── redis
        ├── Dockerfile
        ├── README.md
        ├── package.json
        ├── src
        │   └── index.ts
        └── tsconfig.json
    ├── sentry
        ├── .python-version
        ├── Dockerfile
        ├── README.md
        ├── pyproject.toml
        ├── src
        │   └── mcp_server_sentry
        │   │   ├── __init__.py
        │   │   ├── __main__.py
        │   │   └── server.py
        └── uv.lock
    ├── sequentialthinking
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── slack
        ├── Dockerfile
        ├── README.md
        ├── index.ts
        ├── package.json
        └── tsconfig.json
    ├── sqlite
        ├── .python-version
        ├── Dockerfile
        ├── README.md
        ├── pyproject.toml
        ├── src
        │   └── mcp_server_sqlite
        │   │   ├── __init__.py
        │   │   └── server.py
        └── uv.lock
    └── time
        ├── .python-version
        ├── Dockerfile
        ├── README.md
        ├── pyproject.toml
        ├── src
            └── mcp_server_time
            │   ├── __init__.py
            │   ├── __main__.py
            │   └── server.py
        ├── test
            └── time_server_test.py
        └── uv.lock


/src/aws-kb-retrieval-server/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | COPY src/aws-kb-retrieval-server /app
 4 | COPY tsconfig.json /tsconfig.json
 5 | 
 6 | WORKDIR /app
 7 | 
 8 | RUN --mount=type=cache,target=/root/.npm npm install
 9 | 
10 | FROM node:22-alpine AS release
11 | 
12 | WORKDIR /app
13 | 
14 | COPY --from=builder /app/dist /app/dist
15 | COPY --from=builder /app/package.json /app/package.json
16 | COPY --from=builder /app/package-lock.json /app/package-lock.json
17 | 
18 | ENV NODE_ENV=production
19 | 
20 | RUN npm ci --ignore-scripts --omit-dev
21 | 
22 | ENTRYPOINT ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/aws-kb-retrieval-server/README.md:
--------------------------------------------------------------------------------
 1 | # AWS Knowledge Base Retrieval MCP Server
 2 | 
 3 | An MCP server implementation for retrieving information from the AWS Knowledge Base using the Bedrock Agent Runtime.
 4 | 
 5 | ## Features
 6 | 
 7 | - **RAG (Retrieval-Augmented Generation)**: Retrieve context from the AWS Knowledge Base based on a query and a Knowledge Base ID.
 8 | - **Supports multiple results retrieval**: Option to retrieve a customizable number of results.
 9 | 
10 | ## Tools
11 | 
12 | - **retrieve_from_aws_kb**
13 |   - Perform retrieval operations using the AWS Knowledge Base.
14 |   - Inputs:
15 |     - `query` (string): The search query for retrieval.
16 |     - `knowledgeBaseId` (string): The ID of the AWS Knowledge Base.
17 |     - `n` (number, optional): Number of results to retrieve (default: 3).
18 | 
19 | ## Configuration
20 | 
21 | ### Setting up AWS Credentials
22 | 
23 | 1. Obtain AWS access key ID, secret access key, and region from the AWS Management Console.
24 | 2. Ensure these credentials have appropriate permissions for Bedrock Agent Runtime operations.
25 | 
26 | ### Usage with Claude Desktop
27 | 
28 | Add this to your `claude_desktop_config.json`:
29 | 
30 | #### Docker
31 | 
32 | ```json
33 | {
34 |   "mcpServers": {
35 |     "aws-kb-retrieval": {
36 |       "command": "docker",
37 |       "args": [ "run", "-i", "--rm", "-e", "AWS_ACCESS_KEY_ID", "-e", "AWS_SECRET_ACCESS_KEY", "-e", "AWS_REGION", "mcp/aws-kb-retrieval-server" ],
38 |       "env": {
39 |         "AWS_ACCESS_KEY_ID": "YOUR_ACCESS_KEY_HERE",
40 |         "AWS_SECRET_ACCESS_KEY": "YOUR_SECRET_ACCESS_KEY_HERE",
41 |         "AWS_REGION": "YOUR_AWS_REGION_HERE"
42 |       }
43 |     }
44 |   }
45 | }
46 | ```
47 | 
48 | ```json
49 | {
50 |   "mcpServers": {
51 |     "aws-kb-retrieval": {
52 |       "command": "npx",
53 |       "args": [
54 |         "-y",
55 |         "@modelcontextprotocol/server-aws-kb-retrieval"
56 |       ],
57 |       "env": {
58 |         "AWS_ACCESS_KEY_ID": "YOUR_ACCESS_KEY_HERE",
59 |         "AWS_SECRET_ACCESS_KEY": "YOUR_SECRET_ACCESS_KEY_HERE",
60 |         "AWS_REGION": "YOUR_AWS_REGION_HERE"
61 |       }
62 |     }
63 |   }
64 | }
65 | ```
66 | 
67 | ## Building
68 | 
69 | Docker: 
70 | 
71 | ```sh
72 | docker build -t mcp/aws-kb-retrieval -f src/aws-kb-retrieval-server/Dockerfile . 
73 | ```
74 | 
75 | ## License
76 | 
77 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
78 | 
79 | This README assumes that your server package is named `@modelcontextprotocol/server-aws-kb-retrieval`. Adjust the package name and installation details if they differ in your setup. Also, ensure that your server script is correctly built and that all dependencies are properly managed in your `package.json`.
80 | 


--------------------------------------------------------------------------------
/src/aws-kb-retrieval-server/index.ts:
--------------------------------------------------------------------------------
  1 | #!/usr/bin/env node
  2 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
  3 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
  4 | import {
  5 |   CallToolRequestSchema,
  6 |   ListToolsRequestSchema,
  7 |   Tool,
  8 | } from "@modelcontextprotocol/sdk/types.js";
  9 | import {
 10 |   BedrockAgentRuntimeClient,
 11 |   RetrieveCommand,
 12 |   RetrieveCommandInput,
 13 | } from "@aws-sdk/client-bedrock-agent-runtime";
 14 | 
 15 | // AWS client initialization
 16 | const bedrockClient = new BedrockAgentRuntimeClient({
 17 |   region: process.env.AWS_REGION,
 18 |   credentials: {
 19 |     accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
 20 |     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
 21 |   },
 22 | });
 23 | 
 24 | interface RAGSource {
 25 |   id: string;
 26 |   fileName: string;
 27 |   snippet: string;
 28 |   score: number;
 29 | }
 30 | 
 31 | async function retrieveContext(
 32 |   query: string,
 33 |   knowledgeBaseId: string,
 34 |   n: number = 3
 35 | ): Promise<{
 36 |   context: string;
 37 |   isRagWorking: boolean;
 38 |   ragSources: RAGSource[];
 39 | }> {
 40 |   try {
 41 |     if (!knowledgeBaseId) {
 42 |       console.error("knowledgeBaseId is not provided");
 43 |       return {
 44 |         context: "",
 45 |         isRagWorking: false,
 46 |         ragSources: [],
 47 |       };
 48 |     }
 49 | 
 50 |     const input: RetrieveCommandInput = {
 51 |       knowledgeBaseId: knowledgeBaseId,
 52 |       retrievalQuery: { text: query },
 53 |       retrievalConfiguration: {
 54 |         vectorSearchConfiguration: { numberOfResults: n },
 55 |       },
 56 |     };
 57 | 
 58 |     const command = new RetrieveCommand(input);
 59 |     const response = await bedrockClient.send(command);
 60 |     const rawResults = response?.retrievalResults || [];
 61 |     const ragSources: RAGSource[] = rawResults
 62 |       .filter((res) => res?.content?.text)
 63 |       .map((result, index) => {
 64 |         const uri = result?.location?.s3Location?.uri || "";
 65 |         const fileName = uri.split("/").pop() || `Source-${index}.txt`;
 66 |         return {
 67 |           id: (result.metadata?.["x-amz-bedrock-kb-chunk-id"] as string) || `chunk-${index}`,
 68 |           fileName: fileName.replace(/_/g, " ").replace(".txt", ""),
 69 |           snippet: result.content?.text || "",
 70 |           score: (result.score as number) || 0,
 71 |         };
 72 |       })
 73 |       .slice(0, 3);
 74 | 
 75 |     const context = rawResults
 76 |       .filter((res): res is { content: { text: string } } => res?.content?.text !== undefined)
 77 |       .map(res => res.content.text)
 78 |       .join("\n\n");
 79 | 
 80 |     return {
 81 |       context,
 82 |       isRagWorking: true,
 83 |       ragSources,
 84 |     };
 85 |   } catch (error) {
 86 |     console.error("RAG Error:", error);
 87 |     return { context: "", isRagWorking: false, ragSources: [] };
 88 |   }
 89 | }
 90 | 
 91 | // Define the retrieval tool
 92 | const RETRIEVAL_TOOL: Tool = {
 93 |   name: "retrieve_from_aws_kb",
 94 |   description: "Performs retrieval from the AWS Knowledge Base using the provided query and Knowledge Base ID.",
 95 |   inputSchema: {
 96 |     type: "object",
 97 |     properties: {
 98 |       query: { type: "string", description: "The query to perform retrieval on" },
 99 |       knowledgeBaseId: { type: "string", description: "The ID of the AWS Knowledge Base" },
100 |       n: { type: "number", default: 3, description: "Number of results to retrieve" },
101 |     },
102 |     required: ["query", "knowledgeBaseId"],
103 |   },
104 | };
105 | 
106 | // Server setup
107 | const server = new Server(
108 |   {
109 |     name: "aws-kb-retrieval-server",
110 |     version: "0.2.0",
111 |   },
112 |   {
113 |     capabilities: {
114 |       tools: {},
115 |     },
116 |   },
117 | );
118 | 
119 | // Request handlers
120 | server.setRequestHandler(ListToolsRequestSchema, async () => ({
121 |   tools: [RETRIEVAL_TOOL],
122 | }));
123 | 
124 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
125 |   const { name, arguments: args } = request.params;
126 | 
127 |   if (name === "retrieve_from_aws_kb") {
128 |     const { query, knowledgeBaseId, n = 3 } = args as Record<string, any>;
129 |     try {
130 |       const result = await retrieveContext(query, knowledgeBaseId, n);
131 |       if (result.isRagWorking) {
132 |         return {
133 |           content: [
134 |             { type: "text", text: `Context: ${result.context}` },
135 |             { type: "text", text: `RAG Sources: ${JSON.stringify(result.ragSources)}` },
136 |           ],
137 |         };
138 |       } else {
139 |         return {
140 |           content: [{ type: "text", text: "Retrieval failed or returned no results." }],
141 |         };
142 |       }
143 |     } catch (error) {
144 |       return {
145 |         content: [{ type: "text", text: `Error occurred: ${error}` }],
146 |       };
147 |     }
148 |   } else {
149 |     return {
150 |       content: [{ type: "text", text: `Unknown tool: ${name}` }],
151 |       isError: true,
152 |     };
153 |   }
154 | });
155 | 
156 | // Server startup
157 | async function runServer() {
158 |   const transport = new StdioServerTransport();
159 |   await server.connect(transport);
160 |   console.error("AWS KB Retrieval Server running on stdio");
161 | }
162 | 
163 | runServer().catch((error) => {
164 |   console.error("Fatal error running server:", error);
165 |   process.exit(1);
166 | });
167 | 


--------------------------------------------------------------------------------
/src/aws-kb-retrieval-server/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-aws-kb-retrieval",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for AWS Knowledge Base retrieval using Bedrock Agent Runtime",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-aws-kb-retrieval": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "0.5.0",
23 |     "@aws-sdk/client-bedrock-agent-runtime": "^3.0.0"
24 |   },
25 |   "devDependencies": {
26 |     "@types/node": "^22",
27 |     "shx": "^0.3.4",
28 |     "typescript": "^5.6.2"
29 |   }
30 | }


--------------------------------------------------------------------------------
/src/aws-kb-retrieval-server/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "outDir": "./dist",
 5 |     "rootDir": ".",
 6 |     "composite": true,
 7 |     "incremental": true,
 8 |     "tsBuildInfoFile": "./dist/.tsbuildinfo"
 9 |   },
10 |   "include": [
11 |     "./**/*.ts"
12 |   ],
13 |   "exclude": [
14 |     "node_modules",
15 |     "dist"
16 |   ]
17 | }
18 | 


--------------------------------------------------------------------------------
/src/brave-search/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | # Must be entire project because `prepare` script is run during `npm install` and requires all files.
 4 | COPY src/brave-search /app
 5 | COPY tsconfig.json /tsconfig.json
 6 | 
 7 | WORKDIR /app
 8 | 
 9 | RUN --mount=type=cache,target=/root/.npm npm install
10 | 
11 | FROM node:22-alpine AS release
12 | 
13 | WORKDIR /app
14 | 
15 | COPY --from=builder /app/dist /app/dist
16 | COPY --from=builder /app/package.json /app/package.json
17 | COPY --from=builder /app/package-lock.json /app/package-lock.json
18 | 
19 | ENV NODE_ENV=production
20 | 
21 | RUN npm ci --ignore-scripts --omit-dev
22 | 
23 | ENTRYPOINT ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/brave-search/README.md:
--------------------------------------------------------------------------------
 1 | # Brave Search MCP Server
 2 | 
 3 | An MCP server implementation that integrates the Brave Search API, providing both web and local search capabilities.
 4 | 
 5 | ## Features
 6 | 
 7 | - **Web Search**: General queries, news, articles, with pagination and freshness controls
 8 | - **Local Search**: Find businesses, restaurants, and services with detailed information
 9 | - **Flexible Filtering**: Control result types, safety levels, and content freshness
10 | - **Smart Fallbacks**: Local search automatically falls back to web when no results are found
11 | 
12 | ## Tools
13 | 
14 | - **brave_web_search**
15 |   - Execute web searches with pagination and filtering
16 |   - Inputs:
17 |     - `query` (string): Search terms
18 |     - `count` (number, optional): Results per page (max 20)
19 |     - `offset` (number, optional): Pagination offset (max 9)
20 | 
21 | - **brave_local_search**
22 |   - Search for local businesses and services
23 |   - Inputs:
24 |     - `query` (string): Local search terms
25 |     - `count` (number, optional): Number of results (max 20)
26 |   - Automatically falls back to web search if no local results found
27 | 
28 | 
29 | ## Configuration
30 | 
31 | ### Getting an API Key
32 | 1. Sign up for a [Brave Search API account](https://brave.com/search/api/)
33 | 2. Choose a plan (Free tier available with 2,000 queries/month)
34 | 3. Generate your API key [from the developer dashboard](https://api.search.brave.com/app/keys)
35 | 
36 | ### Usage with Claude Desktop
37 | Add this to your `claude_desktop_config.json`:
38 | 
39 | ### Docker
40 | 
41 | ```json
42 | {
43 |   "mcpServers": {
44 |     "brave-search": {
45 |       "command": "docker",
46 |       "args": [
47 |         "run",
48 |         "-i",
49 |         "--rm",
50 |         "-e",
51 |         "BRAVE_API_KEY",
52 |         "mcp/brave-search"
53 |       ],
54 |       "env": {
55 |         "BRAVE_API_KEY": "YOUR_API_KEY_HERE"
56 |       }
57 |     }
58 |   }
59 | }
60 | ```
61 | 
62 | ### NPX
63 | 
64 | ```json
65 | {
66 |   "mcpServers": {
67 |     "brave-search": {
68 |       "command": "npx",
69 |       "args": [
70 |         "-y",
71 |         "@modelcontextprotocol/server-brave-search"
72 |       ],
73 |       "env": {
74 |         "BRAVE_API_KEY": "YOUR_API_KEY_HERE"
75 |       }
76 |     }
77 |   }
78 | }
79 | ```
80 | 
81 | 
82 | ## Build
83 | 
84 | Docker build:
85 | 
86 | ```bash
87 | docker build -t mcp/brave-search:latest -f src/brave-search/Dockerfile .
88 | ```
89 | 
90 | ## License
91 | 
92 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
93 | 


--------------------------------------------------------------------------------
/src/brave-search/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-brave-search",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for Brave Search API integration",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-brave-search": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "1.0.1"
23 |   },
24 |   "devDependencies": {
25 |     "@types/node": "^22",
26 |     "shx": "^0.3.4",
27 |     "typescript": "^5.6.2"
28 |   }
29 | }


--------------------------------------------------------------------------------
/src/brave-search/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |     "extends": "../../tsconfig.json",
 3 |     "compilerOptions": {
 4 |       "outDir": "./dist",
 5 |       "rootDir": "."
 6 |     },
 7 |     "include": [
 8 |       "./**/*.ts"
 9 |     ]
10 |   }
11 | 


--------------------------------------------------------------------------------
/src/everart/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | COPY src/everart /app
 4 | COPY tsconfig.json /tsconfig.json
 5 | 
 6 | WORKDIR /app
 7 | 
 8 | RUN --mount=type=cache,target=/root/.npm npm install
 9 | 
10 | FROM node:22-alpine AS release
11 | 
12 | WORKDIR /app
13 | 
14 | COPY --from=builder /app/dist /app/dist
15 | COPY --from=builder /app/package.json /app/package.json
16 | COPY --from=builder /app/package-lock.json /app/package-lock.json
17 | 
18 | ENV NODE_ENV=production
19 | 
20 | RUN npm ci --ignore-scripts --omit-dev
21 | 
22 | ENTRYPOINT ["node", "dist/index.js"]
23 | 
24 | CMD ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/everart/README.md:
--------------------------------------------------------------------------------
 1 | # EverArt MCP Server
 2 | 
 3 | Image generation server for Claude Desktop using EverArt's API.
 4 | 
 5 | ## Install
 6 | ```bash
 7 | npm install
 8 | export EVERART_API_KEY=your_key_here
 9 | ```
10 | 
11 | ## Config
12 | Add to Claude Desktop config:
13 | 
14 | ### Docker
15 | ```json
16 | {
17 |   "mcpServers": {
18 |     "everart": {
19 |       "command": "docker",
20 |       "args": ["run", "-i", "--rm", "-e", "EVERART_API_KEY", "mcp/everart"],
21 |       "env": {
22 |         "EVERART_API_KEY": "your_key_here"
23 |       }
24 |     }
25 |   }
26 | }
27 | ```
28 | 
29 | ### NPX
30 | 
31 | ```json
32 | {
33 |   "mcpServers": {
34 |     "everart": {
35 |       "command": "npx",
36 |       "args": ["-y", "@modelcontextprotocol/server-everart"],
37 |       "env": {
38 |         "EVERART_API_KEY": "your_key_here"
39 |       }
40 |     }
41 |   }
42 | }
43 | ```
44 | 
45 | ## Tools
46 | 
47 | ### generate_image
48 | Generates images with multiple model options. Opens result in browser and returns URL.
49 | 
50 | Parameters:
51 | ```typescript
52 | {
53 |   prompt: string,       // Image description
54 |   model?: string,       // Model ID (default: "207910310772879360")
55 |   image_count?: number  // Number of images (default: 1)
56 | }
57 | ```
58 | 
59 | Models:
60 | - 5000: FLUX1.1 (standard)
61 | - 9000: FLUX1.1-ultra
62 | - 6000: SD3.5
63 | - 7000: Recraft-Real
64 | - 8000: Recraft-Vector
65 | 
66 | All images generated at 1024x1024.
67 | 
68 | Sample usage:
69 | ```javascript
70 | const result = await client.callTool({
71 |   name: "generate_image",
72 |   arguments: {
73 |     prompt: "A cat sitting elegantly",
74 |     model: "7000",
75 |     image_count: 1
76 |   }
77 | });
78 | ```
79 | 
80 | Response format:
81 | ```
82 | Image generated successfully!
83 | The image has been opened in your default browser.
84 | 
85 | Generation details:
86 | - Model: 7000
87 | - Prompt: "A cat sitting elegantly"
88 | - Image URL: https://storage.googleapis.com/...
89 | 
90 | You can also click the URL above to view the image again.
91 | ```
92 | 
93 | ## Building w/ Docker
94 | 
95 | ```sh
96 | docker build -t mcp/everart -f src/everart/Dockerfile . 
97 | ```
98 | 


--------------------------------------------------------------------------------
/src/everart/index.ts:
--------------------------------------------------------------------------------
  1 | #!/usr/bin/env node
  2 | import EverArt from "everart";
  3 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
  4 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
  5 | import {
  6 |   CallToolRequestSchema,
  7 |   ListToolsRequestSchema,
  8 |   ListResourcesRequestSchema,
  9 |   ReadResourceRequestSchema,
 10 | } from "@modelcontextprotocol/sdk/types.js";
 11 | import fetch from "node-fetch";
 12 | import open from "open";
 13 | 
 14 | const server = new Server(
 15 |   {
 16 |     name: "example-servers/everart",
 17 |     version: "0.2.0",
 18 |   },
 19 |   {
 20 |     capabilities: {
 21 |       tools: {},
 22 |       resources: {}, // Required for image resources
 23 |     },
 24 |   },
 25 | );
 26 | 
 27 | if (!process.env.EVERART_API_KEY) {
 28 |   console.error("EVERART_API_KEY environment variable is not set");
 29 |   process.exit(1);
 30 | }
 31 | 
 32 | const client = new EverArt.default(process.env.EVERART_API_KEY);
 33 | 
 34 | server.setRequestHandler(ListToolsRequestSchema, async () => ({
 35 |   tools: [
 36 |     {
 37 |       name: "generate_image",
 38 |       description:
 39 |         "Generate images using EverArt Models and returns a clickable link to view the generated image. " +
 40 |         "The tool will return a URL that can be clicked to view the image in a browser. " +
 41 |         "Available models:\n" +
 42 |         "- 5000:FLUX1.1: Standard quality\n" +
 43 |         "- 9000:FLUX1.1-ultra: Ultra high quality\n" +
 44 |         "- 6000:SD3.5: Stable Diffusion 3.5\n" +
 45 |         "- 7000:Recraft-Real: Photorealistic style\n" +
 46 |         "- 8000:Recraft-Vector: Vector art style\n" +
 47 |         "\nThe response will contain a direct link to view the generated image.",
 48 |       inputSchema: {
 49 |         type: "object",
 50 |         properties: {
 51 |           prompt: {
 52 |             type: "string",
 53 |             description: "Text description of desired image",
 54 |           },
 55 |           model: {
 56 |             type: "string",
 57 |             description:
 58 |               "Model ID (5000:FLUX1.1, 9000:FLUX1.1-ultra, 6000:SD3.5, 7000:Recraft-Real, 8000:Recraft-Vector)",
 59 |             default: "5000",
 60 |           },
 61 |           image_count: {
 62 |             type: "number",
 63 |             description: "Number of images to generate",
 64 |             default: 1,
 65 |           },
 66 |         },
 67 |         required: ["prompt"],
 68 |       },
 69 |     },
 70 |   ],
 71 | }));
 72 | 
 73 | server.setRequestHandler(ListResourcesRequestSchema, async () => {
 74 |   return {
 75 |     resources: [
 76 |       {
 77 |         uri: "everart://images",
 78 |         mimeType: "image/png",
 79 |         name: "Generated Images",
 80 |       },
 81 |     ],
 82 |   };
 83 | });
 84 | 
 85 | server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
 86 |   if (request.params.uri === "everart://images") {
 87 |     return {
 88 |       contents: [
 89 |         {
 90 |           uri: "everart://images",
 91 |           mimeType: "image/png",
 92 |           blob: "", // Empty since this is just for listing
 93 |         },
 94 |       ],
 95 |     };
 96 |   }
 97 |   throw new Error("Resource not found");
 98 | });
 99 | 
100 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
101 |   if (request.params.name === "generate_image") {
102 |     try {
103 |       const {
104 |         prompt,
105 |         model = "207910310772879360",
106 |         image_count = 1,
107 |       } = request.params.arguments as any;
108 | 
109 |       // Use correct EverArt API method
110 |       const generation = await client.v1.generations.create(
111 |         model,
112 |         prompt,
113 |         "txt2img",
114 |         {
115 |           imageCount: image_count,
116 |           height: 1024,
117 |           width: 1024,
118 |         },
119 |       );
120 | 
121 |       // Wait for generation to complete
122 |       const completedGen = await client.v1.generations.fetchWithPolling(
123 |         generation[0].id,
124 |       );
125 | 
126 |       const imgUrl = completedGen.image_url;
127 |       if (!imgUrl) throw new Error("No image URL");
128 | 
129 |       // Automatically open the image URL in the default browser
130 |       await open(imgUrl);
131 | 
132 |       // Return a formatted message with the clickable link
133 |       return {
134 |         content: [
135 |           {
136 |             type: "text",
137 |             text: `Image generated successfully!\nThe image has been opened in your default browser.\n\nGeneration details:\n- Model: ${model}\n- Prompt: "${prompt}"\n- Image URL: ${imgUrl}\n\nYou can also click the URL above to view the image again.`,
138 |           },
139 |         ],
140 |       };
141 |     } catch (error: unknown) {
142 |       console.error("Detailed error:", error);
143 |       const errorMessage =
144 |         error instanceof Error ? error.message : "Unknown error";
145 |       return {
146 |         content: [{ type: "text", text: `Error: ${errorMessage}` }],
147 |         isError: true,
148 |       };
149 |     }
150 |   }
151 |   throw new Error(`Unknown tool: ${request.params.name}`);
152 | });
153 | 
154 | async function runServer() {
155 |   const transport = new StdioServerTransport();
156 |   await server.connect(transport);
157 |   console.error("EverArt MCP Server running on stdio");
158 | }
159 | 
160 | runServer().catch(console.error);
161 | 


--------------------------------------------------------------------------------
/src/everart/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-everart",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for EverArt API integration",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-everart": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "0.5.0",
23 |     "everart": "^1.0.0",
24 |     "node-fetch": "^3.3.2",
25 |     "open": "^9.1.0"
26 |   },
27 |   "devDependencies": {
28 |     "@types/node": "^22",
29 |     "shx": "^0.3.4",
30 |     "typescript": "^5.3.3"
31 |   }
32 | }


--------------------------------------------------------------------------------
/src/everart/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "outDir": "./dist",
 5 |     "rootDir": "."
 6 |   },
 7 |   "include": [
 8 |     "./**/*.ts"
 9 |   ]
10 | }
11 | 


--------------------------------------------------------------------------------
/src/everything/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | COPY src/everything /app
 4 | COPY tsconfig.json /tsconfig.json
 5 | 
 6 | WORKDIR /app
 7 | 
 8 | RUN --mount=type=cache,target=/root/.npm npm install
 9 | 
10 | FROM node:22-alpine AS release
11 | 
12 | WORKDIR /app
13 | 
14 | COPY --from=builder /app/dist /app/dist
15 | COPY --from=builder /app/package.json /app/package.json
16 | COPY --from=builder /app/package-lock.json /app/package-lock.json
17 | 
18 | ENV NODE_ENV=production
19 | 
20 | RUN npm ci --ignore-scripts --omit-dev
21 | 
22 | CMD ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/everything/README.md:
--------------------------------------------------------------------------------
  1 | # Everything MCP Server
  2 | 
  3 | This MCP server attempts to exercise all the features of the MCP protocol. It is not intended to be a useful server, but rather a test server for builders of MCP clients. It implements prompts, tools, resources, sampling, and more to showcase MCP capabilities.
  4 | 
  5 | ## Components
  6 | 
  7 | ### Tools
  8 | 
  9 | 1. `echo`
 10 |    - Simple tool to echo back input messages
 11 |    - Input:
 12 |      - `message` (string): Message to echo back
 13 |    - Returns: Text content with echoed message
 14 | 
 15 | 2. `add`
 16 |    - Adds two numbers together
 17 |    - Inputs:
 18 |      - `a` (number): First number
 19 |      - `b` (number): Second number
 20 |    - Returns: Text result of the addition
 21 | 
 22 | 3. `longRunningOperation`
 23 |    - Demonstrates progress notifications for long operations
 24 |    - Inputs:
 25 |      - `duration` (number, default: 10): Duration in seconds
 26 |      - `steps` (number, default: 5): Number of progress steps
 27 |    - Returns: Completion message with duration and steps
 28 |    - Sends progress notifications during execution
 29 | 
 30 | 4. `sampleLLM`
 31 |    - Demonstrates LLM sampling capability using MCP sampling feature
 32 |    - Inputs:
 33 |      - `prompt` (string): The prompt to send to the LLM
 34 |      - `maxTokens` (number, default: 100): Maximum tokens to generate
 35 |    - Returns: Generated LLM response
 36 | 
 37 | 5. `getTinyImage`
 38 |    - Returns a small test image
 39 |    - No inputs required
 40 |    - Returns: Base64 encoded PNG image data
 41 | 
 42 | 6. `printEnv`
 43 |    - Prints all environment variables
 44 |    - Useful for debugging MCP server configuration
 45 |    - No inputs required
 46 |    - Returns: JSON string of all environment variables
 47 | 
 48 | 7. `annotatedMessage`
 49 |    - Demonstrates how annotations can be used to provide metadata about content
 50 |    - Inputs:
 51 |      - `messageType` (enum: "error" | "success" | "debug"): Type of message to demonstrate different annotation patterns
 52 |      - `includeImage` (boolean, default: false): Whether to include an example image
 53 |    - Returns: Content with varying annotations:
 54 |      - Error messages: High priority (1.0), visible to both user and assistant
 55 |      - Success messages: Medium priority (0.7), user-focused
 56 |      - Debug messages: Low priority (0.3), assistant-focused
 57 |      - Optional image: Medium priority (0.5), user-focused
 58 |    - Example annotations:
 59 |      ```json
 60 |      {
 61 |        "priority": 1.0,
 62 |        "audience": ["user", "assistant"]
 63 |      }
 64 |      ```
 65 | 
 66 | ### Resources
 67 | 
 68 | The server provides 100 test resources in two formats:
 69 | - Even numbered resources:
 70 |   - Plaintext format
 71 |   - URI pattern: `test://static/resource/{even_number}`
 72 |   - Content: Simple text description
 73 | 
 74 | - Odd numbered resources:
 75 |   - Binary blob format
 76 |   - URI pattern: `test://static/resource/{odd_number}`
 77 |   - Content: Base64 encoded binary data
 78 | 
 79 | Resource features:
 80 | - Supports pagination (10 items per page)
 81 | - Allows subscribing to resource updates
 82 | - Demonstrates resource templates
 83 | - Auto-updates subscribed resources every 5 seconds
 84 | 
 85 | ### Prompts
 86 | 
 87 | 1. `simple_prompt`
 88 |    - Basic prompt without arguments
 89 |    - Returns: Single message exchange
 90 | 
 91 | 2. `complex_prompt`
 92 |    - Advanced prompt demonstrating argument handling
 93 |    - Required arguments:
 94 |      - `temperature` (number): Temperature setting
 95 |    - Optional arguments:
 96 |      - `style` (string): Output style preference
 97 |    - Returns: Multi-turn conversation with images
 98 | 
 99 | ### Logging
100 | 
101 | The server sends random-leveled log messages every 15 seconds, e.g.:
102 | 
103 | ```json
104 | {
105 |   "method": "notifications/message",
106 |   "params": {
107 | 	"level": "info",
108 | 	"data": "Info-level message"
109 |   }
110 | }
111 | ```
112 | 
113 | ## Usage with Claude Desktop
114 | 
115 | Add to your `claude_desktop_config.json`:
116 | 
117 | ```json
118 | {
119 |   "mcpServers": {
120 |     "everything": {
121 |       "command": "npx",
122 |       "args": [
123 |         "-y",
124 |         "@modelcontextprotocol/server-everything"
125 |       ]
126 |     }
127 |   }
128 | }
129 | ```
130 | 


--------------------------------------------------------------------------------
/src/everything/index.ts:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env node
 2 | 
 3 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
 4 | import { createServer } from "./everything.js";
 5 | 
 6 | async function main() {
 7 |   const transport = new StdioServerTransport();
 8 |   const { server, cleanup } = createServer();
 9 | 
10 |   await server.connect(transport);
11 | 
12 |   // Cleanup on exit
13 |   process.on("SIGINT", async () => {
14 |     await cleanup();
15 |     await server.close();
16 |     process.exit(0);
17 |   });
18 | }
19 | 
20 | main().catch((error) => {
21 |   console.error("Server error:", error);
22 |   process.exit(1);
23 | });
24 | 


--------------------------------------------------------------------------------
/src/everything/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-everything",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server that exercises all the features of the MCP protocol",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-everything": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch",
20 |     "start": "node dist/index.js",
21 |     "start:sse": "node dist/sse.js"
22 |   },
23 |   "dependencies": {
24 |     "@modelcontextprotocol/sdk": "1.0.1",
25 |     "express": "^4.21.1",
26 |     "zod": "^3.23.8",
27 |     "zod-to-json-schema": "^3.23.5"
28 |   },
29 |   "devDependencies": {
30 |     "@types/express": "^5.0.0",
31 |     "shx": "^0.3.4",
32 |     "typescript": "^5.6.2"
33 |   }
34 | }


--------------------------------------------------------------------------------
/src/everything/sse.ts:
--------------------------------------------------------------------------------
 1 | import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
 2 | import express from "express";
 3 | import { createServer } from "./everything.js";
 4 | 
 5 | const app = express();
 6 | 
 7 | const { server, cleanup } = createServer();
 8 | 
 9 | let transport: SSEServerTransport;
10 | 
11 | app.get("/sse", async (req, res) => {
12 |   console.log("Received connection");
13 |   transport = new SSEServerTransport("/message", res);
14 |   await server.connect(transport);
15 | 
16 |   server.onclose = async () => {
17 |     await cleanup();
18 |     await server.close();
19 |     process.exit(0);
20 |   };
21 | });
22 | 
23 | app.post("/message", async (req, res) => {
24 |   console.log("Received message");
25 | 
26 |   await transport.handlePostMessage(req, res);
27 | });
28 | 
29 | const PORT = process.env.PORT || 3001;
30 | app.listen(PORT, () => {
31 |   console.log(`Server is running on port ${PORT}`);
32 | });
33 | 


--------------------------------------------------------------------------------
/src/everything/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "outDir": "./dist",
 5 |     "rootDir": "."
 6 |   },
 7 |   "include": [
 8 |     "./**/*.ts"
 9 |   ]
10 | }
11 | 


--------------------------------------------------------------------------------
/src/fetch/.python-version:
--------------------------------------------------------------------------------
1 | 3.11
2 | 


--------------------------------------------------------------------------------
/src/fetch/Dockerfile:
--------------------------------------------------------------------------------
 1 | # Use a Python image with uv pre-installed
 2 | FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim AS uv
 3 | 
 4 | # Install the project into `/app`
 5 | WORKDIR /app
 6 | 
 7 | # Enable bytecode compilation
 8 | ENV UV_COMPILE_BYTECODE=1
 9 | 
10 | # Copy from the cache instead of linking since it's a mounted volume
11 | ENV UV_LINK_MODE=copy
12 | 
13 | # Install the project's dependencies using the lockfile and settings
14 | RUN --mount=type=cache,target=/root/.cache/uv \
15 |     --mount=type=bind,source=uv.lock,target=uv.lock \
16 |     --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
17 |     uv sync --frozen --no-install-project --no-dev --no-editable
18 | 
19 | # Then, add the rest of the project source code and install it
20 | # Installing separately from its dependencies allows optimal layer caching
21 | ADD . /app
22 | RUN --mount=type=cache,target=/root/.cache/uv \
23 |     uv sync --frozen --no-dev --no-editable
24 | 
25 | FROM python:3.12-slim-bookworm
26 | 
27 | WORKDIR /app
28 |  
29 | COPY --from=uv /root/.local /root/.local
30 | COPY --from=uv --chown=app:app /app/.venv /app/.venv
31 | 
32 | # Place executables in the environment at the front of the path
33 | ENV PATH="/app/.venv/bin:$PATH"
34 | 
35 | # when running the container, add --db-path and a bind mount to the host's db file
36 | ENTRYPOINT ["mcp-server-fetch"]
37 | 


--------------------------------------------------------------------------------
/src/fetch/LICENSE:
--------------------------------------------------------------------------------
1 | Copyright (c) 2024 Anthropic, PBC.
2 | 
3 | Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
4 | 
5 | The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
6 | 
7 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
8 | 


--------------------------------------------------------------------------------
/src/fetch/README.md:
--------------------------------------------------------------------------------
  1 | # Fetch MCP Server
  2 | 
  3 | A Model Context Protocol server that provides web content fetching capabilities. This server enables LLMs to retrieve and process content from web pages, converting HTML to markdown for easier consumption.
  4 | 
  5 | The fetch tool will truncate the response, but by using the `start_index` argument, you can specify where to start the content extraction. This lets models read a webpage in chunks, until they find the information they need.
  6 | 
  7 | ### Available Tools
  8 | 
  9 | - `fetch` - Fetches a URL from the internet and extracts its contents as markdown.
 10 |     - `url` (string, required): URL to fetch
 11 |     - `max_length` (integer, optional): Maximum number of characters to return (default: 5000)
 12 |     - `start_index` (integer, optional): Start content from this character index (default: 0)
 13 |     - `raw` (boolean, optional): Get raw content without markdown conversion (default: false)
 14 | 
 15 | ### Prompts
 16 | 
 17 | - **fetch**
 18 |   - Fetch a URL and extract its contents as markdown
 19 |   - Arguments:
 20 |     - `url` (string, required): URL to fetch
 21 | 
 22 | ## Installation
 23 | 
 24 | Optionally: Install node.js, this will cause the fetch server to use a different HTML simplifier that is more robust.
 25 | 
 26 | ### Using uv (recommended)
 27 | 
 28 | When using [`uv`](https://docs.astral.sh/uv/) no specific installation is needed. We will
 29 | use [`uvx`](https://docs.astral.sh/uv/guides/tools/) to directly run *mcp-server-fetch*.
 30 | 
 31 | ### Using PIP
 32 | 
 33 | Alternatively you can install `mcp-server-fetch` via pip:
 34 | 
 35 | ```
 36 | pip install mcp-server-fetch
 37 | ```
 38 | 
 39 | After installation, you can run it as a script using:
 40 | 
 41 | ```
 42 | python -m mcp_server_fetch
 43 | ```
 44 | 
 45 | ## Configuration
 46 | 
 47 | ### Configure for Claude.app
 48 | 
 49 | Add to your Claude settings:
 50 | 
 51 | <details>
 52 | <summary>Using uvx</summary>
 53 | 
 54 | ```json
 55 | "mcpServers": {
 56 |   "fetch": {
 57 |     "command": "uvx",
 58 |     "args": ["mcp-server-fetch"]
 59 |   }
 60 | }
 61 | ```
 62 | </details>
 63 | 
 64 | <details>
 65 | <summary>Using docker</summary>
 66 | 
 67 | ```json
 68 | "mcpServers": {
 69 |   "fetch": {
 70 |     "command": "docker",
 71 |     "args": ["run", "-i", "--rm", "mcp/fetch"]
 72 |   }
 73 | }
 74 | ```
 75 | </details>
 76 | 
 77 | <details>
 78 | <summary>Using pip installation</summary>
 79 | 
 80 | ```json
 81 | "mcpServers": {
 82 |   "fetch": {
 83 |     "command": "python",
 84 |     "args": ["-m", "mcp_server_fetch"]
 85 |   }
 86 | }
 87 | ```
 88 | </details>
 89 | 
 90 | ### Customization - robots.txt
 91 | 
 92 | By default, the server will obey a websites robots.txt file if the request came from the model (via a tool), but not if
 93 | the request was user initiated (via a prompt). This can be disabled by adding the argument `--ignore-robots-txt` to the
 94 | `args` list in the configuration.
 95 | 
 96 | ### Customization - User-agent
 97 | 
 98 | By default, depending on if the request came from the model (via a tool), or was user initiated (via a prompt), the
 99 | server will use either the user-agent
100 | ```
101 | ModelContextProtocol/1.0 (Autonomous; +https://github.com/modelcontextprotocol/servers)
102 | ```
103 | or
104 | ```
105 | ModelContextProtocol/1.0 (User-Specified; +https://github.com/modelcontextprotocol/servers)
106 | ```
107 | 
108 | This can be customized by adding the argument `--user-agent=YourUserAgent` to the `args` list in the configuration.
109 | 
110 | ### Customization - Proxy
111 | 
112 | The server can be configured to use a proxy by using the `--proxy-url` argument.
113 | 
114 | ## Debugging
115 | 
116 | You can use the MCP inspector to debug the server. For uvx installations:
117 | 
118 | ```
119 | npx @modelcontextprotocol/inspector uvx mcp-server-fetch
120 | ```
121 | 
122 | Or if you've installed the package in a specific directory or are developing on it:
123 | 
124 | ```
125 | cd path/to/servers/src/fetch
126 | npx @modelcontextprotocol/inspector uv run mcp-server-fetch
127 | ```
128 | 
129 | ## Contributing
130 | 
131 | We encourage contributions to help expand and improve mcp-server-fetch. Whether you want to add new tools, enhance existing functionality, or improve documentation, your input is valuable.
132 | 
133 | For examples of other MCP servers and implementation patterns, see:
134 | https://github.com/modelcontextprotocol/servers
135 | 
136 | Pull requests are welcome! Feel free to contribute new ideas, bug fixes, or enhancements to make mcp-server-fetch even more powerful and useful.
137 | 
138 | ## License
139 | 
140 | mcp-server-fetch is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
141 | 


--------------------------------------------------------------------------------
/src/fetch/pyproject.toml:
--------------------------------------------------------------------------------
 1 | [project]
 2 | name = "mcp-server-fetch"
 3 | version = "0.6.3"
 4 | description = "A Model Context Protocol server providing tools to fetch and convert web content for usage by LLMs"
 5 | readme = "README.md"
 6 | requires-python = ">=3.10"
 7 | authors = [{ name = "Anthropic, PBC." }]
 8 | maintainers = [{ name = "Jack Adamson", email = "jadamson@anthropic.com" }]
 9 | keywords = ["http", "mcp", "llm", "automation"]
10 | license = { text = "MIT" }
11 | classifiers = [
12 |     "Development Status :: 4 - Beta",
13 |     "Intended Audience :: Developers",
14 |     "License :: OSI Approved :: MIT License",
15 |     "Programming Language :: Python :: 3",
16 |     "Programming Language :: Python :: 3.10",
17 | ]
18 | dependencies = [
19 |     "httpx<0.28",
20 |     "markdownify>=0.13.1",
21 |     "mcp>=1.1.3",
22 |     "protego>=0.3.1",
23 |     "pydantic>=2.0.0",
24 |     "readabilipy>=0.2.0",
25 |     "requests>=2.32.3",
26 | ]
27 | 
28 | [project.scripts]
29 | mcp-server-fetch = "mcp_server_fetch:main"
30 | 
31 | [build-system]
32 | requires = ["hatchling"]
33 | build-backend = "hatchling.build"
34 | 
35 | [tool.uv]
36 | dev-dependencies = ["pyright>=1.1.389", "ruff>=0.7.3"]
37 | 


--------------------------------------------------------------------------------
/src/fetch/src/mcp_server_fetch/__init__.py:
--------------------------------------------------------------------------------
 1 | from .server import serve
 2 | 
 3 | 
 4 | def main():
 5 |     """MCP Fetch Server - HTTP fetching functionality for MCP"""
 6 |     import argparse
 7 |     import asyncio
 8 | 
 9 |     parser = argparse.ArgumentParser(
10 |         description="give a model the ability to make web requests"
11 |     )
12 |     parser.add_argument("--user-agent", type=str, help="Custom User-Agent string")
13 |     parser.add_argument(
14 |         "--ignore-robots-txt",
15 |         action="store_true",
16 |         help="Ignore robots.txt restrictions",
17 |     )
18 |     parser.add_argument("--proxy-url", type=str, help="Proxy URL to use for requests")
19 | 
20 |     args = parser.parse_args()
21 |     asyncio.run(serve(args.user_agent, args.ignore_robots_txt, args.proxy_url))
22 | 
23 | 
24 | if __name__ == "__main__":
25 |     main()
26 | 


--------------------------------------------------------------------------------
/src/fetch/src/mcp_server_fetch/__main__.py:
--------------------------------------------------------------------------------
1 | # __main__.py
2 | 
3 | from mcp_server_fetch import main
4 | 
5 | main()
6 | 


--------------------------------------------------------------------------------
/src/filesystem/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | WORKDIR /app
 4 | 
 5 | COPY src/filesystem /app
 6 | COPY tsconfig.json /tsconfig.json
 7 | 
 8 | RUN --mount=type=cache,target=/root/.npm npm install
 9 | 
10 | RUN --mount=type=cache,target=/root/.npm-production npm ci --ignore-scripts --omit-dev
11 | 
12 | 
13 | FROM node:22-alpine AS release
14 | 
15 | WORKDIR /app
16 | 
17 | COPY --from=builder /app/dist /app/dist
18 | COPY --from=builder /app/package.json /app/package.json
19 | COPY --from=builder /app/package-lock.json /app/package-lock.json
20 | 
21 | ENV NODE_ENV=production
22 | 
23 | RUN npm ci --ignore-scripts --omit-dev
24 | 
25 | ENTRYPOINT ["node", "/app/dist/index.js"]


--------------------------------------------------------------------------------
/src/filesystem/README.md:
--------------------------------------------------------------------------------
  1 | # Filesystem MCP Server
  2 | 
  3 | Node.js server implementing Model Context Protocol (MCP) for filesystem operations.
  4 | 
  5 | ## Features
  6 | 
  7 | - Read/write files
  8 | - Create/list/delete directories
  9 | - Move files/directories
 10 | - Search files
 11 | - Get file metadata
 12 | 
 13 | **Note**: The server will only allow operations within directories specified via `args`.
 14 | 
 15 | ## API
 16 | 
 17 | ### Resources
 18 | 
 19 | - `file://system`: File system operations interface
 20 | 
 21 | ### Tools
 22 | 
 23 | - **read_file**
 24 |   - Read complete contents of a file
 25 |   - Input: `path` (string)
 26 |   - Reads complete file contents with UTF-8 encoding
 27 | 
 28 | - **read_multiple_files**
 29 |   - Read multiple files simultaneously
 30 |   - Input: `paths` (string[])
 31 |   - Failed reads won't stop the entire operation
 32 | 
 33 | - **write_file**
 34 |   - Create new file or overwrite existing (exercise caution with this)
 35 |   - Inputs:
 36 |     - `path` (string): File location
 37 |     - `content` (string): File content
 38 | 
 39 | - **edit_file**
 40 |   - Make selective edits using advanced pattern matching and formatting
 41 |   - Features:
 42 |     - Line-based and multi-line content matching
 43 |     - Whitespace normalization with indentation preservation
 44 |     - Multiple simultaneous edits with correct positioning
 45 |     - Indentation style detection and preservation
 46 |     - Git-style diff output with context
 47 |     - Preview changes with dry run mode
 48 |   - Inputs:
 49 |     - `path` (string): File to edit
 50 |     - `edits` (array): List of edit operations
 51 |       - `oldText` (string): Text to search for (can be substring)
 52 |       - `newText` (string): Text to replace with
 53 |     - `dryRun` (boolean): Preview changes without applying (default: false)
 54 |   - Returns detailed diff and match information for dry runs, otherwise applies changes
 55 |   - Best Practice: Always use dryRun first to preview changes before applying them
 56 | 
 57 | - **create_directory**
 58 |   - Create new directory or ensure it exists
 59 |   - Input: `path` (string)
 60 |   - Creates parent directories if needed
 61 |   - Succeeds silently if directory exists
 62 | 
 63 | - **list_directory**
 64 |   - List directory contents with [FILE] or [DIR] prefixes
 65 |   - Input: `path` (string)
 66 | 
 67 | - **move_file**
 68 |   - Move or rename files and directories
 69 |   - Inputs:
 70 |     - `source` (string)
 71 |     - `destination` (string)
 72 |   - Fails if destination exists
 73 | 
 74 | - **search_files**
 75 |   - Recursively search for files/directories
 76 |   - Inputs:
 77 |     - `path` (string): Starting directory
 78 |     - `pattern` (string): Search pattern
 79 |     - `excludePatterns` (string[]): Exclude any patterns. Glob formats are supported.
 80 |   - Case-insensitive matching
 81 |   - Returns full paths to matches
 82 | 
 83 | - **get_file_info**
 84 |   - Get detailed file/directory metadata
 85 |   - Input: `path` (string)
 86 |   - Returns:
 87 |     - Size
 88 |     - Creation time
 89 |     - Modified time
 90 |     - Access time
 91 |     - Type (file/directory)
 92 |     - Permissions
 93 | 
 94 | - **list_allowed_directories**
 95 |   - List all directories the server is allowed to access
 96 |   - No input required
 97 |   - Returns:
 98 |     - Directories that this server can read/write from
 99 | 
100 | ## Usage with Claude Desktop
101 | Add this to your `claude_desktop_config.json`:
102 | 
103 | Note: you can provide sandboxed directories to the server by mounting them to `/projects`. Adding the `ro` flag will make the directory readonly by the server.
104 | 
105 | ### Docker
106 | Note: all directories must be mounted to `/projects` by default.
107 | 
108 | ```json
109 | {
110 |   "mcpServers": {
111 |     "filesystem": {
112 |       "command": "docker",
113 |       "args": [
114 |         "run",
115 |         "-i",
116 |         "--rm",
117 |         "--mount", "type=bind,src=/Users/username/Desktop,dst=/projects/Desktop",
118 |         "--mount", "type=bind,src=/path/to/other/allowed/dir,dst=/projects/other/allowed/dir,ro",
119 |         "--mount", "type=bind,src=/path/to/file.txt,dst=/projects/path/to/file.txt",
120 |         "mcp/filesystem",
121 |         "/projects"
122 |       ]
123 |     }
124 |   }
125 | }
126 | ```
127 | 
128 | ### NPX
129 | 
130 | ```json
131 | {
132 |   "mcpServers": {
133 |     "filesystem": {
134 |       "command": "npx",
135 |       "args": [
136 |         "-y",
137 |         "@modelcontextprotocol/server-filesystem",
138 |         "/Users/username/Desktop",
139 |         "/path/to/other/allowed/dir"
140 |       ]
141 |     }
142 |   }
143 | }
144 | ```
145 | 
146 | ## Build
147 | 
148 | Docker build:
149 | 
150 | ```bash
151 | docker build -t mcp/filesystem -f src/filesystem/Dockerfile .
152 | ```
153 | 
154 | ## License
155 | 
156 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
157 | 


--------------------------------------------------------------------------------
/src/filesystem/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-filesystem",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for filesystem access",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-filesystem": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "0.5.0",
23 |     "diff": "^5.1.0",
24 |     "glob": "^10.3.10",
25 |     "minimatch": "^10.0.1",
26 |     "zod-to-json-schema": "^3.23.5"
27 |   },
28 |   "devDependencies": {
29 |     "@types/diff": "^5.0.9",
30 |     "@types/minimatch": "^5.1.2",
31 |     "@types/node": "^22",
32 |     "shx": "^0.3.4",
33 |     "typescript": "^5.3.3"
34 |   }
35 | }


--------------------------------------------------------------------------------
/src/filesystem/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "outDir": "./dist",
 5 |     "rootDir": ".",
 6 |     "moduleResolution": "NodeNext",
 7 |     "module": "NodeNext"
 8 |   },
 9 |   "include": [
10 |     "./**/*.ts"
11 |   ]
12 | }
13 | 


--------------------------------------------------------------------------------
/src/gdrive/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | COPY src/gdrive /app
 4 | COPY tsconfig.json /tsconfig.json
 5 | 
 6 | WORKDIR /app
 7 | 
 8 | RUN --mount=type=cache,target=/root/.npm npm install
 9 | 
10 | RUN --mount=type=cache,target=/root/.npm-production npm ci --ignore-scripts --omit-dev
11 | 
12 | FROM node:22-alpine AS release
13 | 
14 | WORKDIR /app
15 | 
16 | COPY --from=builder /app/dist /app/dist
17 | COPY --from=builder /app/package.json /app/package.json
18 | COPY --from=builder /app/package-lock.json /app/package-lock.json
19 | COPY src/gdrive/replace_open.sh /replace_open.sh
20 | 
21 | ENV NODE_ENV=production
22 | 
23 | RUN npm ci --ignore-scripts --omit-dev
24 | 
25 | RUN sh /replace_open.sh
26 | 
27 | RUN rm /replace_open.sh
28 | 
29 | ENTRYPOINT ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/gdrive/README.md:
--------------------------------------------------------------------------------
 1 | # Google Drive server
 2 | 
 3 | This MCP server integrates with Google Drive to allow listing, reading, and searching over files.
 4 | 
 5 | ## Components
 6 | 
 7 | ### Tools
 8 | 
 9 | - **search**
10 |   - Search for files in Google Drive
11 |   - Input: `query` (string): Search query
12 |   - Returns file names and MIME types of matching files
13 | 
14 | ### Resources
15 | 
16 | The server provides access to Google Drive files:
17 | 
18 | - **Files** (`gdrive:///<file_id>`)
19 |   - Supports all file types
20 |   - Google Workspace files are automatically exported:
21 |     - Docs → Markdown
22 |     - Sheets → CSV
23 |     - Presentations → Plain text
24 |     - Drawings → PNG
25 |   - Other files are provided in their native format
26 | 
27 | ## Getting started
28 | 
29 | 1. [Create a new Google Cloud project](https://console.cloud.google.com/projectcreate)
30 | 2. [Enable the Google Drive API](https://console.cloud.google.com/workspace-api/products)
31 | 3. [Configure an OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent) ("internal" is fine for testing)
32 | 4. Add OAuth scope `https://www.googleapis.com/auth/drive.readonly`
33 | 5. [Create an OAuth Client ID](https://console.cloud.google.com/apis/credentials/oauthclient) for application type "Desktop App"
34 | 6. Download the JSON file of your client's OAuth keys
35 | 7. Rename the key file to `gcp-oauth.keys.json` and place into the root of this repo (i.e. `servers/gcp-oauth.keys.json`)
36 | 
37 | Make sure to build the server with either `npm run build` or `npm run watch`.
38 | 
39 | ### Authentication
40 | 
41 | To authenticate and save credentials:
42 | 
43 | 1. Run the server with the `auth` argument: `node ./dist auth`
44 | 2. This will open an authentication flow in your system browser
45 | 3. Complete the authentication process
46 | 4. Credentials will be saved in the root of this repo (i.e. `servers/.gdrive-server-credentials.json`)
47 | 
48 | ### Usage with Desktop App
49 | 
50 | To integrate this server with the desktop app, add the following to your app's server configuration:
51 | 
52 | #### Docker
53 | 
54 | Authentication:
55 | 
56 | Assuming you have completed setting up the OAuth application on Google Cloud, you can now auth the server with the following command, replacing `/path/to/gcp-oauth.keys.json` with the path to your OAuth keys file:
57 | 
58 | ```bash
59 | docker run -i --rm --mount type=bind,source=/path/to/gcp-oauth.keys.json,target=/gcp-oauth.keys.json -v mcp-gdrive:/gdrive-server -e GDRIVE_OAUTH_PATH=/gcp-oauth.keys.json -e "GDRIVE_CREDENTIALS_PATH=/gdrive-server/credentials.json" -p 3000:3000 mcp/gdrive auth
60 | ```
61 | 
62 | The command will print the URL to open in your browser. Open this URL in your browser and complete the authentication process. The credentials will be saved in the `mcp-gdrive` volume.
63 | 
64 | Once authenticated, you can use the server in your app's server configuration:
65 | 
66 | ```json
67 | {
68 |   "mcpServers": {
69 |     "gdrive": {
70 |       "command": "docker",
71 |       "args": ["run", "-i", "--rm", "-v", "mcp-gdrive:/gdrive-server", "-e", "GDRIVE_CREDENTIALS_PATH=/gdrive-server/credentials.json", "mcp/gdrive"]
72 |     }
73 |   }
74 | }
75 | ```
76 | 
77 | #### NPX
78 | 
79 | ```json
80 | {
81 |   "mcpServers": {
82 |     "gdrive": {
83 |       "command": "npx",
84 |       "args": [
85 |         "-y",
86 |         "@modelcontextprotocol/server-gdrive"
87 |       ]
88 |     }
89 |   }
90 | }
91 | ```
92 | 
93 | ## License
94 | 
95 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
96 | 


--------------------------------------------------------------------------------
/src/gdrive/index.ts:
--------------------------------------------------------------------------------
  1 | #!/usr/bin/env node
  2 | 
  3 | import { authenticate } from "@google-cloud/local-auth";
  4 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
  5 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
  6 | import {
  7 |   CallToolRequestSchema,
  8 |   ListResourcesRequestSchema,
  9 |   ListToolsRequestSchema,
 10 |   ReadResourceRequestSchema,
 11 | } from "@modelcontextprotocol/sdk/types.js";
 12 | import fs from "fs";
 13 | import { google } from "googleapis";
 14 | import path from "path";
 15 | import { fileURLToPath } from 'url';
 16 | 
 17 | const drive = google.drive("v3");
 18 | 
 19 | const server = new Server(
 20 |   {
 21 |     name: "example-servers/gdrive",
 22 |     version: "0.1.0",
 23 |   },
 24 |   {
 25 |     capabilities: {
 26 |       resources: {},
 27 |       tools: {},
 28 |     },
 29 |   },
 30 | );
 31 | 
 32 | server.setRequestHandler(ListResourcesRequestSchema, async (request) => {
 33 |   const pageSize = 10;
 34 |   const params: any = {
 35 |     pageSize,
 36 |     fields: "nextPageToken, files(id, name, mimeType)",
 37 |   };
 38 | 
 39 |   if (request.params?.cursor) {
 40 |     params.pageToken = request.params.cursor;
 41 |   }
 42 | 
 43 |   const res = await drive.files.list(params);
 44 |   const files = res.data.files!;
 45 | 
 46 |   return {
 47 |     resources: files.map((file) => ({
 48 |       uri: `gdrive:///${file.id}`,
 49 |       mimeType: file.mimeType,
 50 |       name: file.name,
 51 |     })),
 52 |     nextCursor: res.data.nextPageToken,
 53 |   };
 54 | });
 55 | 
 56 | server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
 57 |   const fileId = request.params.uri.replace("gdrive:///", "");
 58 | 
 59 |   // First get file metadata to check mime type
 60 |   const file = await drive.files.get({
 61 |     fileId,
 62 |     fields: "mimeType",
 63 |   });
 64 | 
 65 |   // For Google Docs/Sheets/etc we need to export
 66 |   if (file.data.mimeType?.startsWith("application/vnd.google-apps")) {
 67 |     let exportMimeType: string;
 68 |     switch (file.data.mimeType) {
 69 |       case "application/vnd.google-apps.document":
 70 |         exportMimeType = "text/markdown";
 71 |         break;
 72 |       case "application/vnd.google-apps.spreadsheet":
 73 |         exportMimeType = "text/csv";
 74 |         break;
 75 |       case "application/vnd.google-apps.presentation":
 76 |         exportMimeType = "text/plain";
 77 |         break;
 78 |       case "application/vnd.google-apps.drawing":
 79 |         exportMimeType = "image/png";
 80 |         break;
 81 |       default:
 82 |         exportMimeType = "text/plain";
 83 |     }
 84 | 
 85 |     const res = await drive.files.export(
 86 |       { fileId, mimeType: exportMimeType },
 87 |       { responseType: "text" },
 88 |     );
 89 | 
 90 |     return {
 91 |       contents: [
 92 |         {
 93 |           uri: request.params.uri,
 94 |           mimeType: exportMimeType,
 95 |           text: res.data,
 96 |         },
 97 |       ],
 98 |     };
 99 |   }
100 | 
101 |   // For regular files download content
102 |   const res = await drive.files.get(
103 |     { fileId, alt: "media" },
104 |     { responseType: "arraybuffer" },
105 |   );
106 |   const mimeType = file.data.mimeType || "application/octet-stream";
107 |   if (mimeType.startsWith("text/") || mimeType === "application/json") {
108 |     return {
109 |       contents: [
110 |         {
111 |           uri: request.params.uri,
112 |           mimeType: mimeType,
113 |           text: Buffer.from(res.data as ArrayBuffer).toString("utf-8"),
114 |         },
115 |       ],
116 |     };
117 |   } else {
118 |     return {
119 |       contents: [
120 |         {
121 |           uri: request.params.uri,
122 |           mimeType: mimeType,
123 |           blob: Buffer.from(res.data as ArrayBuffer).toString("base64"),
124 |         },
125 |       ],
126 |     };
127 |   }
128 | });
129 | 
130 | server.setRequestHandler(ListToolsRequestSchema, async () => {
131 |   return {
132 |     tools: [
133 |       {
134 |         name: "search",
135 |         description: "Search for files in Google Drive",
136 |         inputSchema: {
137 |           type: "object",
138 |           properties: {
139 |             query: {
140 |               type: "string",
141 |               description: "Search query",
142 |             },
143 |           },
144 |           required: ["query"],
145 |         },
146 |       },
147 |     ],
148 |   };
149 | });
150 | 
151 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
152 |   if (request.params.name === "search") {
153 |     const userQuery = request.params.arguments?.query as string;
154 |     const escapedQuery = userQuery.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
155 |     const formattedQuery = `fullText contains '${escapedQuery}'`;
156 | 
157 |     const res = await drive.files.list({
158 |       q: formattedQuery,
159 |       pageSize: 10,
160 |       fields: "files(id, name, mimeType, modifiedTime, size)",
161 |     });
162 | 
163 |     const fileList = res.data.files
164 |       ?.map((file: any) => `${file.name} (${file.mimeType})`)
165 |       .join("\n");
166 |     return {
167 |       content: [
168 |         {
169 |           type: "text",
170 |           text: `Found ${res.data.files?.length ?? 0} files:\n${fileList}`,
171 |         },
172 |       ],
173 |       isError: false,
174 |     };
175 |   }
176 |   throw new Error("Tool not found");
177 | });
178 | 
179 | const credentialsPath = process.env.GDRIVE_CREDENTIALS_PATH || path.join(
180 |   path.dirname(fileURLToPath(import.meta.url)),
181 |   "../../../.gdrive-server-credentials.json",
182 | );
183 | 
184 | async function authenticateAndSaveCredentials() {
185 |   console.log("Launching auth flow…");
186 |   const auth = await authenticate({
187 |     keyfilePath: process.env.GDRIVE_OAUTH_PATH || path.join(
188 |       path.dirname(fileURLToPath(import.meta.url)),
189 |       "../../../gcp-oauth.keys.json",
190 |     ),
191 |     scopes: ["https://www.googleapis.com/auth/drive.readonly"],
192 |   });
193 |   fs.writeFileSync(credentialsPath, JSON.stringify(auth.credentials));
194 |   console.log("Credentials saved. You can now run the server.");
195 | }
196 | 
197 | async function loadCredentialsAndRunServer() {
198 |   if (!fs.existsSync(credentialsPath)) {
199 |     console.error(
200 |       "Credentials not found. Please run with 'auth' argument first.",
201 |     );
202 |     process.exit(1);
203 |   }
204 | 
205 |   const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf-8"));
206 |   const auth = new google.auth.OAuth2();
207 |   auth.setCredentials(credentials);
208 |   google.options({ auth });
209 | 
210 |   console.error("Credentials loaded. Starting server.");
211 |   const transport = new StdioServerTransport();
212 |   await server.connect(transport);
213 | }
214 | 
215 | if (process.argv[2] === "auth") {
216 |   authenticateAndSaveCredentials().catch(console.error);
217 | } else {
218 |   loadCredentialsAndRunServer().catch(console.error);
219 | }
220 | 


--------------------------------------------------------------------------------
/src/gdrive/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-gdrive",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for interacting with Google Drive",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-gdrive": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@google-cloud/local-auth": "^3.0.1",
23 |     "@modelcontextprotocol/sdk": "1.0.1",
24 |     "googleapis": "^144.0.0"
25 |   },
26 |   "devDependencies": {
27 |     "@types/node": "^22",
28 |     "shx": "^0.3.4",
29 |     "typescript": "^5.6.2"
30 |   }
31 | }


--------------------------------------------------------------------------------
/src/gdrive/replace_open.sh:
--------------------------------------------------------------------------------
1 | #! /bin/bash
2 | 
3 | # Basic script to replace opn(authorizeUrl, { wait: false }).then(cp => cp.unref()); with process.stdout.write(`Open this URL in your browser: ${authorizeUrl}`);
4 | 
5 | sed -i 's/opn(authorizeUrl, { wait: false }).then(cp => cp.unref());/process.stderr.write(`Open this URL in your browser: ${authorizeUrl}\n`);/' node_modules/@google-cloud/local-auth/build/src/index.js
6 | 


--------------------------------------------------------------------------------
/src/gdrive/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "outDir": "./dist",
 5 |     "rootDir": "."
 6 |   },
 7 |   "include": [
 8 |     "./**/*.ts"
 9 |   ]
10 | }
11 | 


--------------------------------------------------------------------------------
/src/git/.gitignore:
--------------------------------------------------------------------------------
1 | __pycache__
2 | .venv
3 | 


--------------------------------------------------------------------------------
/src/git/.python-version:
--------------------------------------------------------------------------------
1 | 3.10
2 | 


--------------------------------------------------------------------------------
/src/git/Dockerfile:
--------------------------------------------------------------------------------
 1 | # Use a Python image with uv pre-installed
 2 | FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim AS uv
 3 | 
 4 | # Install the project into `/app`
 5 | WORKDIR /app
 6 | 
 7 | # Enable bytecode compilation
 8 | ENV UV_COMPILE_BYTECODE=1
 9 | 
10 | # Copy from the cache instead of linking since it's a mounted volume
11 | ENV UV_LINK_MODE=copy
12 | 
13 | # Install the project's dependencies using the lockfile and settings
14 | RUN --mount=type=cache,target=/root/.cache/uv \
15 |     --mount=type=bind,source=uv.lock,target=uv.lock \
16 |     --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
17 |     uv sync --frozen --no-install-project --no-dev --no-editable
18 | 
19 | # Then, add the rest of the project source code and install it
20 | # Installing separately from its dependencies allows optimal layer caching
21 | ADD . /app
22 | RUN --mount=type=cache,target=/root/.cache/uv \
23 |     uv sync --frozen --no-dev --no-editable
24 | 
25 | FROM python:3.12-slim-bookworm
26 | 
27 | RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*
28 | 
29 | WORKDIR /app
30 |  
31 | COPY --from=uv /root/.local /root/.local
32 | COPY --from=uv --chown=app:app /app/.venv /app/.venv
33 | 
34 | # Place executables in the environment at the front of the path
35 | ENV PATH="/app/.venv/bin:$PATH"
36 | 
37 | # when running the container, add --db-path and a bind mount to the host's db file
38 | ENTRYPOINT ["mcp-server-git"]
39 | 


--------------------------------------------------------------------------------
/src/git/LICENSE:
--------------------------------------------------------------------------------
1 | Copyright (c) 2024 Anthropic, PBC.
2 | 
3 | Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
4 | 
5 | The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
6 | 
7 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
8 | 


--------------------------------------------------------------------------------
/src/git/README.md:
--------------------------------------------------------------------------------
  1 | # mcp-server-git: A git MCP server
  2 | 
  3 | ## Overview
  4 | 
  5 | A Model Context Protocol server for Git repository interaction and automation. This server provides tools to read, search, and manipulate Git repositories via Large Language Models.
  6 | 
  7 | Please note that mcp-server-git is currently in early development. The functionality and available tools are subject to change and expansion as we continue to develop and improve the server.
  8 | 
  9 | ### Tools
 10 | 
 11 | 1. `git_status`
 12 |    - Shows the working tree status
 13 |    - Input:
 14 |      - `repo_path` (string): Path to Git repository
 15 |    - Returns: Current status of working directory as text output
 16 | 
 17 | 2. `git_diff_unstaged`
 18 |    - Shows changes in working directory not yet staged
 19 |    - Input:
 20 |      - `repo_path` (string): Path to Git repository
 21 |    - Returns: Diff output of unstaged changes
 22 | 
 23 | 3. `git_diff_staged`
 24 |    - Shows changes that are staged for commit
 25 |    - Input:
 26 |      - `repo_path` (string): Path to Git repository
 27 |    - Returns: Diff output of staged changes
 28 | 
 29 | 4. `git_diff`
 30 |    - Shows differences between branches or commits
 31 |    - Inputs:
 32 |      - `repo_path` (string): Path to Git repository
 33 |      - `target` (string): Target branch or commit to compare with
 34 |    - Returns: Diff output comparing current state with target
 35 | 
 36 | 5. `git_commit`
 37 |    - Records changes to the repository
 38 |    - Inputs:
 39 |      - `repo_path` (string): Path to Git repository
 40 |      - `message` (string): Commit message
 41 |    - Returns: Confirmation with new commit hash
 42 | 
 43 | 6. `git_add`
 44 |    - Adds file contents to the staging area
 45 |    - Inputs:
 46 |      - `repo_path` (string): Path to Git repository
 47 |      - `files` (string[]): Array of file paths to stage
 48 |    - Returns: Confirmation of staged files
 49 | 
 50 | 7. `git_reset`
 51 |    - Unstages all staged changes
 52 |    - Input:
 53 |      - `repo_path` (string): Path to Git repository
 54 |    - Returns: Confirmation of reset operation
 55 | 
 56 | 8. `git_log`
 57 |    - Shows the commit logs
 58 |    - Inputs:
 59 |      - `repo_path` (string): Path to Git repository
 60 |      - `max_count` (number, optional): Maximum number of commits to show (default: 10)
 61 |    - Returns: Array of commit entries with hash, author, date, and message
 62 | 
 63 | 9. `git_create_branch`
 64 |    - Creates a new branch
 65 |    - Inputs:
 66 |      - `repo_path` (string): Path to Git repository
 67 |      - `branch_name` (string): Name of the new branch
 68 |      - `start_point` (string, optional): Starting point for the new branch
 69 |    - Returns: Confirmation of branch creation
 70 | 10. `git_checkout`
 71 |    - Switches branches
 72 |    - Inputs:
 73 |      - `repo_path` (string): Path to Git repository
 74 |      - `branch_name` (string): Name of branch to checkout
 75 |    - Returns: Confirmation of branch switch
 76 | 11. `git_show`
 77 |    - Shows the contents of a commit
 78 |    - Inputs:
 79 |      - `repo_path` (string): Path to Git repository
 80 |      - `revision` (string): The revision (commit hash, branch name, tag) to show
 81 |    - Returns: Contents of the specified commit
 82 | 12. `git_init`
 83 |    - Initializes a Git repository
 84 |    - Inputs:
 85 |      - `repo_path` (string): Path to directory to initialize git repo
 86 |    - Returns: Confirmation of repository initialization
 87 | 
 88 | ## Installation
 89 | 
 90 | ### Using uv (recommended)
 91 | 
 92 | When using [`uv`](https://docs.astral.sh/uv/) no specific installation is needed. We will
 93 | use [`uvx`](https://docs.astral.sh/uv/guides/tools/) to directly run *mcp-server-git*.
 94 | 
 95 | ### Using PIP
 96 | 
 97 | Alternatively you can install `mcp-server-git` via pip:
 98 | 
 99 | ```
100 | pip install mcp-server-git
101 | ```
102 | 
103 | After installation, you can run it as a script using:
104 | 
105 | ```
106 | python -m mcp_server_git
107 | ```
108 | 
109 | ## Configuration
110 | 
111 | ### Usage with Claude Desktop
112 | 
113 | Add this to your `claude_desktop_config.json`:
114 | 
115 | <details>
116 | <summary>Using uvx</summary>
117 | 
118 | ```json
119 | "mcpServers": {
120 |   "git": {
121 |     "command": "uvx",
122 |     "args": ["mcp-server-git", "--repository", "path/to/git/repo"]
123 |   }
124 | }
125 | ```
126 | </details>
127 | 
128 | <details>
129 | <summary>Using docker</summary>
130 | 
131 | * Note: replace '/Users/username' with the a path that you want to be accessible by this tool
132 | 
133 | ```json
134 | "mcpServers": {
135 |   "git": {
136 |     "command": "docker",
137 |     "args": ["run", "--rm", "-i", "--mount", "type=bind,src=/Users/username,dst=/Users/username", "mcp/git"]
138 |   }
139 | }
140 | ```
141 | </details>
142 | 
143 | <details>
144 | <summary>Using pip installation</summary>
145 | 
146 | ```json
147 | "mcpServers": {
148 |   "git": {
149 |     "command": "python",
150 |     "args": ["-m", "mcp_server_git", "--repository", "path/to/git/repo"]
151 |   }
152 | }
153 | ```
154 | </details>
155 | 
156 | ### Usage with [Zed](https://github.com/zed-industries/zed)
157 | 
158 | Add to your Zed settings.json:
159 | 
160 | <details>
161 | <summary>Using uvx</summary>
162 | 
163 | ```json
164 | "context_servers": [
165 |   "mcp-server-git": {
166 |     "command": {
167 |       "path": "uvx",
168 |       "args": ["mcp-server-git"]
169 |     }
170 |   }
171 | ],
172 | ```
173 | </details>
174 | 
175 | <details>
176 | <summary>Using pip installation</summary>
177 | 
178 | ```json
179 | "context_servers": {
180 |   "mcp-server-git": {
181 |     "command": {
182 |       "path": "python",
183 |       "args": ["-m", "mcp_server_git"]
184 |     }
185 |   }
186 | },
187 | ```
188 | </details>
189 | 
190 | ## Debugging
191 | 
192 | You can use the MCP inspector to debug the server. For uvx installations:
193 | 
194 | ```
195 | npx @modelcontextprotocol/inspector uvx mcp-server-git
196 | ```
197 | 
198 | Or if you've installed the package in a specific directory or are developing on it:
199 | 
200 | ```
201 | cd path/to/servers/src/git
202 | npx @modelcontextprotocol/inspector uv run mcp-server-git
203 | ```
204 | 
205 | Running `tail -n 20 -f ~/Library/Logs/Claude/mcp*.log` will show the logs from the server and may
206 | help you debug any issues.
207 | 
208 | ## Development
209 | 
210 | If you are doing local development, there are two ways to test your changes:
211 | 
212 | 1. Run the MCP inspector to test your changes. See [Debugging](#debugging) for run instructions.
213 | 
214 | 2. Test using the Claude desktop app. Add the following to your `claude_desktop_config.json`:
215 | 
216 | ### Docker
217 | 
218 | ```json
219 | {
220 |   "mcpServers": {
221 |     "git": {
222 |       "command": "docker",
223 |       "args": [
224 |         "run",
225 |         "--rm",
226 |         "-i",
227 |         "--mount", "type=bind,src=/Users/username/Desktop,dst=/projects/Desktop",
228 |         "--mount", "type=bind,src=/path/to/other/allowed/dir,dst=/projects/other/allowed/dir,ro",
229 |         "--mount", "type=bind,src=/path/to/file.txt,dst=/projects/path/to/file.txt",
230 |         "mcp/git"
231 |       ]
232 |     }
233 |   }
234 | }
235 | ```
236 | 
237 | ### UVX
238 | ```json
239 | {
240 | "mcpServers": {
241 |   "git": {
242 |     "command": "uv",
243 |     "args": [ 
244 |       "--directory",
245 |       "/<path to mcp-servers>/mcp-servers/src/git",
246 |       "run",
247 |       "mcp-server-git"
248 |     ]
249 |   }
250 | }
251 | ```
252 | 
253 | ## Build
254 | 
255 | Docker build:
256 | 
257 | ```bash
258 | cd src/git
259 | docker build -t mcp/git .
260 | ```
261 | 
262 | ## License
263 | 
264 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
265 | 


--------------------------------------------------------------------------------
/src/git/pyproject.toml:
--------------------------------------------------------------------------------
 1 | [project]
 2 | name = "mcp-server-git"
 3 | version = "0.6.2"
 4 | description = "A Model Context Protocol server providing tools to read, search, and manipulate Git repositories programmatically via LLMs"
 5 | readme = "README.md"
 6 | requires-python = ">=3.10"
 7 | authors = [{ name = "Anthropic, PBC." }]
 8 | maintainers = [{ name = "David Soria Parra", email = "davidsp@anthropic.com" }]
 9 | keywords = ["git", "mcp", "llm", "automation"]
10 | license = { text = "MIT" }
11 | classifiers = [
12 |     "Development Status :: 4 - Beta",
13 |     "Intended Audience :: Developers",
14 |     "License :: OSI Approved :: MIT License",
15 |     "Programming Language :: Python :: 3",
16 |     "Programming Language :: Python :: 3.10",
17 | ]
18 | dependencies = [
19 |     "click>=8.1.7",
20 |     "gitpython>=3.1.43",
21 |     "mcp>=1.0.0",
22 |     "pydantic>=2.0.0",
23 | ]
24 | 
25 | [project.scripts]
26 | mcp-server-git = "mcp_server_git:main"
27 | 
28 | [build-system]
29 | requires = ["hatchling"]
30 | build-backend = "hatchling.build"
31 | 
32 | [tool.uv]
33 | dev-dependencies = ["pyright>=1.1.389", "ruff>=0.7.3", "pytest>=8.0.0"]
34 | 
35 | [tool.pytest.ini_options]
36 | testpaths = ["tests"]
37 | python_files = "test_*.py"
38 | python_classes = "Test*"
39 | python_functions = "test_*"


--------------------------------------------------------------------------------
/src/git/src/mcp_server_git/__init__.py:
--------------------------------------------------------------------------------
 1 | import click
 2 | from pathlib import Path
 3 | import logging
 4 | import sys
 5 | from .server import serve
 6 | 
 7 | @click.command()
 8 | @click.option("--repository", "-r", type=Path, help="Git repository path")
 9 | @click.option("-v", "--verbose", count=True)
10 | def main(repository: Path | None, verbose: bool) -> None:
11 |     """MCP Git Server - Git functionality for MCP"""
12 |     import asyncio
13 | 
14 |     logging_level = logging.WARN
15 |     if verbose == 1:
16 |         logging_level = logging.INFO
17 |     elif verbose >= 2:
18 |         logging_level = logging.DEBUG
19 | 
20 |     logging.basicConfig(level=logging_level, stream=sys.stderr)
21 |     asyncio.run(serve(repository))
22 | 
23 | if __name__ == "__main__":
24 |     main()
25 | 


--------------------------------------------------------------------------------
/src/git/src/mcp_server_git/__main__.py:
--------------------------------------------------------------------------------
1 | # __main__.py
2 | 
3 | from mcp_server_git import main
4 | 
5 | main()
6 | 


--------------------------------------------------------------------------------
/src/git/tests/test_server.py:
--------------------------------------------------------------------------------
 1 | import pytest
 2 | from pathlib import Path
 3 | import git
 4 | from mcp_server_git.server import git_checkout
 5 | import shutil
 6 | 
 7 | @pytest.fixture
 8 | def test_repository(tmp_path: Path):
 9 |     repo_path = tmp_path / "temp_test_repo"
10 |     test_repo = git.Repo.init(repo_path)
11 | 
12 |     Path(repo_path / "test.txt").write_text("test")
13 |     test_repo.index.add(["test.txt"])
14 |     test_repo.index.commit("initial commit")
15 | 
16 |     yield test_repo
17 | 
18 |     shutil.rmtree(repo_path)
19 | 
20 | def test_git_checkout_existing_branch(test_repository):
21 |     test_repository.git.branch("test-branch")
22 |     result = git_checkout(test_repository, "test-branch")
23 | 
24 |     assert "Switched to branch 'test-branch'" in result
25 |     assert test_repository.active_branch.name == "test-branch"
26 | 
27 | def test_git_checkout_nonexistent_branch(test_repository):
28 | 
29 |     with pytest.raises(git.GitCommandError):
30 |         git_checkout(test_repository, "nonexistent-branch")


--------------------------------------------------------------------------------
/src/github/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | # Must be entire project because `prepare` script is run during `npm install` and requires all files.
 4 | COPY src/github /app
 5 | COPY tsconfig.json /tsconfig.json
 6 | 
 7 | WORKDIR /app
 8 | 
 9 | RUN --mount=type=cache,target=/root/.npm npm install
10 | 
11 | FROM node:22.12-alpine AS release
12 | 
13 | COPY --from=builder /app/dist /app/dist
14 | COPY --from=builder /app/package.json /app/package.json
15 | COPY --from=builder /app/package-lock.json /app/package-lock.json
16 | 
17 | ENV NODE_ENV=production
18 | 
19 | WORKDIR /app
20 | 
21 | RUN npm ci --ignore-scripts --omit-dev
22 | 
23 | ENTRYPOINT ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/github/common/errors.ts:
--------------------------------------------------------------------------------
 1 | export class GitHubError extends Error {
 2 |   constructor(
 3 |     message: string,
 4 |     public readonly status: number,
 5 |     public readonly response: unknown
 6 |   ) {
 7 |     super(message);
 8 |     this.name = "GitHubError";
 9 |   }
10 | }
11 | 
12 | export class GitHubValidationError extends GitHubError {
13 |   constructor(message: string, status: number, response: unknown) {
14 |     super(message, status, response);
15 |     this.name = "GitHubValidationError";
16 |   }
17 | }
18 | 
19 | export class GitHubResourceNotFoundError extends GitHubError {
20 |   constructor(resource: string) {
21 |     super(`Resource not found: ${resource}`, 404, { message: `${resource} not found` });
22 |     this.name = "GitHubResourceNotFoundError";
23 |   }
24 | }
25 | 
26 | export class GitHubAuthenticationError extends GitHubError {
27 |   constructor(message = "Authentication failed") {
28 |     super(message, 401, { message });
29 |     this.name = "GitHubAuthenticationError";
30 |   }
31 | }
32 | 
33 | export class GitHubPermissionError extends GitHubError {
34 |   constructor(message = "Insufficient permissions") {
35 |     super(message, 403, { message });
36 |     this.name = "GitHubPermissionError";
37 |   }
38 | }
39 | 
40 | export class GitHubRateLimitError extends GitHubError {
41 |   constructor(
42 |     message = "Rate limit exceeded",
43 |     public readonly resetAt: Date
44 |   ) {
45 |     super(message, 429, { message, reset_at: resetAt.toISOString() });
46 |     this.name = "GitHubRateLimitError";
47 |   }
48 | }
49 | 
50 | export class GitHubConflictError extends GitHubError {
51 |   constructor(message: string) {
52 |     super(message, 409, { message });
53 |     this.name = "GitHubConflictError";
54 |   }
55 | }
56 | 
57 | export function isGitHubError(error: unknown): error is GitHubError {
58 |   return error instanceof GitHubError;
59 | }
60 | 
61 | export function createGitHubError(status: number, response: any): GitHubError {
62 |   switch (status) {
63 |     case 401:
64 |       return new GitHubAuthenticationError(response?.message);
65 |     case 403:
66 |       return new GitHubPermissionError(response?.message);
67 |     case 404:
68 |       return new GitHubResourceNotFoundError(response?.message || "Resource");
69 |     case 409:
70 |       return new GitHubConflictError(response?.message || "Conflict occurred");
71 |     case 422:
72 |       return new GitHubValidationError(
73 |         response?.message || "Validation failed",
74 |         status,
75 |         response
76 |       );
77 |     case 429:
78 |       return new GitHubRateLimitError(
79 |         response?.message,
80 |         new Date(response?.reset_at || Date.now() + 60000)
81 |       );
82 |     default:
83 |       return new GitHubError(
84 |         response?.message || "GitHub API error",
85 |         status,
86 |         response
87 |       );
88 |   }
89 | }


--------------------------------------------------------------------------------
/src/github/common/types.ts:
--------------------------------------------------------------------------------
  1 | import { z } from "zod";
  2 | 
  3 | // Base schemas for common types
  4 | export const GitHubAuthorSchema = z.object({
  5 |   name: z.string(),
  6 |   email: z.string(),
  7 |   date: z.string(),
  8 | });
  9 | 
 10 | export const GitHubOwnerSchema = z.object({
 11 |   login: z.string(),
 12 |   id: z.number(),
 13 |   node_id: z.string(),
 14 |   avatar_url: z.string(),
 15 |   url: z.string(),
 16 |   html_url: z.string(),
 17 |   type: z.string(),
 18 | });
 19 | 
 20 | export const GitHubRepositorySchema = z.object({
 21 |   id: z.number(),
 22 |   node_id: z.string(),
 23 |   name: z.string(),
 24 |   full_name: z.string(),
 25 |   private: z.boolean(),
 26 |   owner: GitHubOwnerSchema,
 27 |   html_url: z.string(),
 28 |   description: z.string().nullable(),
 29 |   fork: z.boolean(),
 30 |   url: z.string(),
 31 |   created_at: z.string(),
 32 |   updated_at: z.string(),
 33 |   pushed_at: z.string(),
 34 |   git_url: z.string(),
 35 |   ssh_url: z.string(),
 36 |   clone_url: z.string(),
 37 |   default_branch: z.string(),
 38 | });
 39 | 
 40 | export const GithubFileContentLinks = z.object({
 41 |   self: z.string(),
 42 |   git: z.string().nullable(),
 43 |   html: z.string().nullable()
 44 | });
 45 | 
 46 | export const GitHubFileContentSchema = z.object({
 47 |   name: z.string(),
 48 |   path: z.string(),
 49 |   sha: z.string(),
 50 |   size: z.number(),
 51 |   url: z.string(),
 52 |   html_url: z.string(),
 53 |   git_url: z.string(),
 54 |   download_url: z.string(),
 55 |   type: z.string(),
 56 |   content: z.string().optional(),
 57 |   encoding: z.string().optional(),
 58 |   _links: GithubFileContentLinks
 59 | });
 60 | 
 61 | export const GitHubDirectoryContentSchema = z.object({
 62 |   type: z.string(),
 63 |   size: z.number(),
 64 |   name: z.string(),
 65 |   path: z.string(),
 66 |   sha: z.string(),
 67 |   url: z.string(),
 68 |   git_url: z.string(),
 69 |   html_url: z.string(),
 70 |   download_url: z.string().nullable(),
 71 | });
 72 | 
 73 | export const GitHubContentSchema = z.union([
 74 |   GitHubFileContentSchema,
 75 |   z.array(GitHubDirectoryContentSchema),
 76 | ]);
 77 | 
 78 | export const GitHubTreeEntrySchema = z.object({
 79 |   path: z.string(),
 80 |   mode: z.enum(["100644", "100755", "040000", "160000", "120000"]),
 81 |   type: z.enum(["blob", "tree", "commit"]),
 82 |   size: z.number().optional(),
 83 |   sha: z.string(),
 84 |   url: z.string(),
 85 | });
 86 | 
 87 | export const GitHubTreeSchema = z.object({
 88 |   sha: z.string(),
 89 |   url: z.string(),
 90 |   tree: z.array(GitHubTreeEntrySchema),
 91 |   truncated: z.boolean(),
 92 | });
 93 | 
 94 | export const GitHubCommitSchema = z.object({
 95 |   sha: z.string(),
 96 |   node_id: z.string(),
 97 |   url: z.string(),
 98 |   author: GitHubAuthorSchema,
 99 |   committer: GitHubAuthorSchema,
100 |   message: z.string(),
101 |   tree: z.object({
102 |     sha: z.string(),
103 |     url: z.string(),
104 |   }),
105 |   parents: z.array(
106 |     z.object({
107 |       sha: z.string(),
108 |       url: z.string(),
109 |     })
110 |   ),
111 | });
112 | 
113 | export const GitHubListCommitsSchema = z.array(z.object({
114 |   sha: z.string(),
115 |   node_id: z.string(),
116 |   commit: z.object({
117 |     author: GitHubAuthorSchema,
118 |     committer: GitHubAuthorSchema,
119 |     message: z.string(),
120 |     tree: z.object({
121 |       sha: z.string(),
122 |       url: z.string()
123 |     }),
124 |     url: z.string(),
125 |     comment_count: z.number(),
126 |   }),
127 |   url: z.string(),
128 |   html_url: z.string(),
129 |   comments_url: z.string()
130 | }));
131 | 
132 | export const GitHubReferenceSchema = z.object({
133 |   ref: z.string(),
134 |   node_id: z.string(),
135 |   url: z.string(),
136 |   object: z.object({
137 |     sha: z.string(),
138 |     type: z.string(),
139 |     url: z.string(),
140 |   }),
141 | });
142 | 
143 | // User and assignee schemas
144 | export const GitHubIssueAssigneeSchema = z.object({
145 |   login: z.string(),
146 |   id: z.number(),
147 |   avatar_url: z.string(),
148 |   url: z.string(),
149 |   html_url: z.string(),
150 | });
151 | 
152 | // Issue-related schemas
153 | export const GitHubLabelSchema = z.object({
154 |   id: z.number(),
155 |   node_id: z.string(),
156 |   url: z.string(),
157 |   name: z.string(),
158 |   color: z.string(),
159 |   default: z.boolean(),
160 |   description: z.string().nullable().optional(),
161 | });
162 | 
163 | export const GitHubMilestoneSchema = z.object({
164 |   url: z.string(),
165 |   html_url: z.string(),
166 |   labels_url: z.string(),
167 |   id: z.number(),
168 |   node_id: z.string(),
169 |   number: z.number(),
170 |   title: z.string(),
171 |   description: z.string(),
172 |   state: z.string(),
173 | });
174 | 
175 | export const GitHubIssueSchema = z.object({
176 |   url: z.string(),
177 |   repository_url: z.string(),
178 |   labels_url: z.string(),
179 |   comments_url: z.string(),
180 |   events_url: z.string(),
181 |   html_url: z.string(),
182 |   id: z.number(),
183 |   node_id: z.string(),
184 |   number: z.number(),
185 |   title: z.string(),
186 |   user: GitHubIssueAssigneeSchema,
187 |   labels: z.array(GitHubLabelSchema),
188 |   state: z.string(),
189 |   locked: z.boolean(),
190 |   assignee: GitHubIssueAssigneeSchema.nullable(),
191 |   assignees: z.array(GitHubIssueAssigneeSchema),
192 |   milestone: GitHubMilestoneSchema.nullable(),
193 |   comments: z.number(),
194 |   created_at: z.string(),
195 |   updated_at: z.string(),
196 |   closed_at: z.string().nullable(),
197 |   body: z.string().nullable(),
198 | });
199 | 
200 | // Search-related schemas
201 | export const GitHubSearchResponseSchema = z.object({
202 |   total_count: z.number(),
203 |   incomplete_results: z.boolean(),
204 |   items: z.array(GitHubRepositorySchema),
205 | });
206 | 
207 | // Pull request schemas
208 | export const GitHubPullRequestRefSchema = z.object({
209 |   label: z.string(),
210 |   ref: z.string(),
211 |   sha: z.string(),
212 |   user: GitHubIssueAssigneeSchema,
213 |   repo: GitHubRepositorySchema,
214 | });
215 | 
216 | export const GitHubPullRequestSchema = z.object({
217 |   url: z.string(),
218 |   id: z.number(),
219 |   node_id: z.string(),
220 |   html_url: z.string(),
221 |   diff_url: z.string(),
222 |   patch_url: z.string(),
223 |   issue_url: z.string(),
224 |   number: z.number(),
225 |   state: z.string(),
226 |   locked: z.boolean(),
227 |   title: z.string(),
228 |   user: GitHubIssueAssigneeSchema,
229 |   body: z.string().nullable(),
230 |   created_at: z.string(),
231 |   updated_at: z.string(),
232 |   closed_at: z.string().nullable(),
233 |   merged_at: z.string().nullable(),
234 |   merge_commit_sha: z.string().nullable(),
235 |   assignee: GitHubIssueAssigneeSchema.nullable(),
236 |   assignees: z.array(GitHubIssueAssigneeSchema),
237 |   requested_reviewers: z.array(GitHubIssueAssigneeSchema),
238 |   labels: z.array(GitHubLabelSchema),
239 |   head: GitHubPullRequestRefSchema,
240 |   base: GitHubPullRequestRefSchema,
241 | });
242 | 
243 | // Export types
244 | export type GitHubAuthor = z.infer<typeof GitHubAuthorSchema>;
245 | export type GitHubRepository = z.infer<typeof GitHubRepositorySchema>;
246 | export type GitHubFileContent = z.infer<typeof GitHubFileContentSchema>;
247 | export type GitHubDirectoryContent = z.infer<typeof GitHubDirectoryContentSchema>;
248 | export type GitHubContent = z.infer<typeof GitHubContentSchema>;
249 | export type GitHubTree = z.infer<typeof GitHubTreeSchema>;
250 | export type GitHubCommit = z.infer<typeof GitHubCommitSchema>;
251 | export type GitHubListCommits = z.infer<typeof GitHubListCommitsSchema>;
252 | export type GitHubReference = z.infer<typeof GitHubReferenceSchema>;
253 | export type GitHubIssueAssignee = z.infer<typeof GitHubIssueAssigneeSchema>;
254 | export type GitHubLabel = z.infer<typeof GitHubLabelSchema>;
255 | export type GitHubMilestone = z.infer<typeof GitHubMilestoneSchema>;
256 | export type GitHubIssue = z.infer<typeof GitHubIssueSchema>;
257 | export type GitHubSearchResponse = z.infer<typeof GitHubSearchResponseSchema>;
258 | export type GitHubPullRequest = z.infer<typeof GitHubPullRequestSchema>;
259 | export type GitHubPullRequestRef = z.infer<typeof GitHubPullRequestRefSchema>;


--------------------------------------------------------------------------------
/src/github/common/utils.ts:
--------------------------------------------------------------------------------
  1 | import { getUserAgent } from "universal-user-agent";
  2 | import { createGitHubError } from "./errors.js";
  3 | import { VERSION } from "./version.js";
  4 | 
  5 | type RequestOptions = {
  6 |   method?: string;
  7 |   body?: unknown;
  8 |   headers?: Record<string, string>;
  9 | }
 10 | 
 11 | async function parseResponseBody(response: Response): Promise<unknown> {
 12 |   const contentType = response.headers.get("content-type");
 13 |   if (contentType?.includes("application/json")) {
 14 |     return response.json();
 15 |   }
 16 |   return response.text();
 17 | }
 18 | 
 19 | export function buildUrl(baseUrl: string, params: Record<string, string | number | undefined>): string {
 20 |   const url = new URL(baseUrl);
 21 |   Object.entries(params).forEach(([key, value]) => {
 22 |     if (value !== undefined) {
 23 |       url.searchParams.append(key, value.toString());
 24 |     }
 25 |   });
 26 |   return url.toString();
 27 | }
 28 | 
 29 | const USER_AGENT = `modelcontextprotocol/servers/github/v${VERSION} ${getUserAgent()}`;
 30 | 
 31 | export async function githubRequest(
 32 |   url: string,
 33 |   options: RequestOptions = {}
 34 | ): Promise<unknown> {
 35 |   const headers: Record<string, string> = {
 36 |     "Accept": "application/vnd.github.v3+json",
 37 |     "Content-Type": "application/json",
 38 |     "User-Agent": USER_AGENT,
 39 |     ...options.headers,
 40 |   };
 41 | 
 42 |   if (process.env.GITHUB_PERSONAL_ACCESS_TOKEN) {
 43 |     headers["Authorization"] = `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;
 44 |   }
 45 | 
 46 |   const response = await fetch(url, {
 47 |     method: options.method || "GET",
 48 |     headers,
 49 |     body: options.body ? JSON.stringify(options.body) : undefined,
 50 |   });
 51 | 
 52 |   const responseBody = await parseResponseBody(response);
 53 | 
 54 |   if (!response.ok) {
 55 |     throw createGitHubError(response.status, responseBody);
 56 |   }
 57 | 
 58 |   return responseBody;
 59 | }
 60 | 
 61 | export function validateBranchName(branch: string): string {
 62 |   const sanitized = branch.trim();
 63 |   if (!sanitized) {
 64 |     throw new Error("Branch name cannot be empty");
 65 |   }
 66 |   if (sanitized.includes("..")) {
 67 |     throw new Error("Branch name cannot contain '..'");
 68 |   }
 69 |   if (/[\s~^:?*[\\\]]/.test(sanitized)) {
 70 |     throw new Error("Branch name contains invalid characters");
 71 |   }
 72 |   if (sanitized.startsWith("/") || sanitized.endsWith("/")) {
 73 |     throw new Error("Branch name cannot start or end with '/'");
 74 |   }
 75 |   if (sanitized.endsWith(".lock")) {
 76 |     throw new Error("Branch name cannot end with '.lock'");
 77 |   }
 78 |   return sanitized;
 79 | }
 80 | 
 81 | export function validateRepositoryName(name: string): string {
 82 |   const sanitized = name.trim().toLowerCase();
 83 |   if (!sanitized) {
 84 |     throw new Error("Repository name cannot be empty");
 85 |   }
 86 |   if (!/^[a-z0-9_.-]+$/.test(sanitized)) {
 87 |     throw new Error(
 88 |       "Repository name can only contain lowercase letters, numbers, hyphens, periods, and underscores"
 89 |     );
 90 |   }
 91 |   if (sanitized.startsWith(".") || sanitized.endsWith(".")) {
 92 |     throw new Error("Repository name cannot start or end with a period");
 93 |   }
 94 |   return sanitized;
 95 | }
 96 | 
 97 | export function validateOwnerName(owner: string): string {
 98 |   const sanitized = owner.trim().toLowerCase();
 99 |   if (!sanitized) {
100 |     throw new Error("Owner name cannot be empty");
101 |   }
102 |   if (!/^[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9])){0,38}$/.test(sanitized)) {
103 |     throw new Error(
104 |       "Owner name must start with a letter or number and can contain up to 39 characters"
105 |     );
106 |   }
107 |   return sanitized;
108 | }
109 | 
110 | export async function checkBranchExists(
111 |   owner: string,
112 |   repo: string,
113 |   branch: string
114 | ): Promise<boolean> {
115 |   try {
116 |     await githubRequest(
117 |       `https://api.github.com/repos/${owner}/${repo}/branches/${branch}`
118 |     );
119 |     return true;
120 |   } catch (error) {
121 |     if (error && typeof error === "object" && "status" in error && error.status === 404) {
122 |       return false;
123 |     }
124 |     throw error;
125 |   }
126 | }
127 | 
128 | export async function checkUserExists(username: string): Promise<boolean> {
129 |   try {
130 |     await githubRequest(`https://api.github.com/users/${username}`);
131 |     return true;
132 |   } catch (error) {
133 |     if (error && typeof error === "object" && "status" in error && error.status === 404) {
134 |       return false;
135 |     }
136 |     throw error;
137 |   }
138 | }


--------------------------------------------------------------------------------
/src/github/common/version.ts:
--------------------------------------------------------------------------------
1 | // If the format of this file changes, so it doesn't simply export a VERSION constant,
2 | // this will break .github/workflows/version-check.yml.
3 | export const VERSION = "0.6.2";


--------------------------------------------------------------------------------
/src/github/operations/branches.ts:
--------------------------------------------------------------------------------
  1 | import { z } from "zod";
  2 | import { githubRequest } from "../common/utils.js";
  3 | import { GitHubReferenceSchema } from "../common/types.js";
  4 | 
  5 | // Schema definitions
  6 | export const CreateBranchOptionsSchema = z.object({
  7 |   ref: z.string(),
  8 |   sha: z.string(),
  9 | });
 10 | 
 11 | export const CreateBranchSchema = z.object({
 12 |   owner: z.string().describe("Repository owner (username or organization)"),
 13 |   repo: z.string().describe("Repository name"),
 14 |   branch: z.string().describe("Name for the new branch"),
 15 |   from_branch: z.string().optional().describe("Optional: source branch to create from (defaults to the repository's default branch)"),
 16 | });
 17 | 
 18 | // Type exports
 19 | export type CreateBranchOptions = z.infer<typeof CreateBranchOptionsSchema>;
 20 | 
 21 | // Function implementations
 22 | export async function getDefaultBranchSHA(owner: string, repo: string): Promise<string> {
 23 |   try {
 24 |     const response = await githubRequest(
 25 |       `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/main`
 26 |     );
 27 |     const data = GitHubReferenceSchema.parse(response);
 28 |     return data.object.sha;
 29 |   } catch (error) {
 30 |     const masterResponse = await githubRequest(
 31 |       `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/master`
 32 |     );
 33 |     if (!masterResponse) {
 34 |       throw new Error("Could not find default branch (tried 'main' and 'master')");
 35 |     }
 36 |     const data = GitHubReferenceSchema.parse(masterResponse);
 37 |     return data.object.sha;
 38 |   }
 39 | }
 40 | 
 41 | export async function createBranch(
 42 |   owner: string,
 43 |   repo: string,
 44 |   options: CreateBranchOptions
 45 | ): Promise<z.infer<typeof GitHubReferenceSchema>> {
 46 |   const fullRef = `refs/heads/${options.ref}`;
 47 | 
 48 |   const response = await githubRequest(
 49 |     `https://api.github.com/repos/${owner}/${repo}/git/refs`,
 50 |     {
 51 |       method: "POST",
 52 |       body: {
 53 |         ref: fullRef,
 54 |         sha: options.sha,
 55 |       },
 56 |     }
 57 |   );
 58 | 
 59 |   return GitHubReferenceSchema.parse(response);
 60 | }
 61 | 
 62 | export async function getBranchSHA(
 63 |   owner: string,
 64 |   repo: string,
 65 |   branch: string
 66 | ): Promise<string> {
 67 |   const response = await githubRequest(
 68 |     `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`
 69 |   );
 70 | 
 71 |   const data = GitHubReferenceSchema.parse(response);
 72 |   return data.object.sha;
 73 | }
 74 | 
 75 | export async function createBranchFromRef(
 76 |   owner: string,
 77 |   repo: string,
 78 |   newBranch: string,
 79 |   fromBranch?: string
 80 | ): Promise<z.infer<typeof GitHubReferenceSchema>> {
 81 |   let sha: string;
 82 |   if (fromBranch) {
 83 |     sha = await getBranchSHA(owner, repo, fromBranch);
 84 |   } else {
 85 |     sha = await getDefaultBranchSHA(owner, repo);
 86 |   }
 87 | 
 88 |   return createBranch(owner, repo, {
 89 |     ref: newBranch,
 90 |     sha,
 91 |   });
 92 | }
 93 | 
 94 | export async function updateBranch(
 95 |   owner: string,
 96 |   repo: string,
 97 |   branch: string,
 98 |   sha: string
 99 | ): Promise<z.infer<typeof GitHubReferenceSchema>> {
100 |   const response = await githubRequest(
101 |     `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`,
102 |     {
103 |       method: "PATCH",
104 |       body: {
105 |         sha,
106 |         force: true,
107 |       },
108 |     }
109 |   );
110 | 
111 |   return GitHubReferenceSchema.parse(response);
112 | }
113 | 


--------------------------------------------------------------------------------
/src/github/operations/commits.ts:
--------------------------------------------------------------------------------
 1 | import { z } from "zod";
 2 | import { githubRequest, buildUrl } from "../common/utils.js";
 3 | 
 4 | export const ListCommitsSchema = z.object({
 5 |   owner: z.string(),
 6 |   repo: z.string(),
 7 |   sha: z.string().optional(),
 8 |   page: z.number().optional(),
 9 |   perPage: z.number().optional()
10 | });
11 | 
12 | export async function listCommits(
13 |   owner: string,
14 |   repo: string,
15 |   page?: number,
16 |   perPage?: number,
17 |   sha?: string
18 | ) {
19 |   return githubRequest(
20 |     buildUrl(`https://api.github.com/repos/${owner}/${repo}/commits`, {
21 |       page: page?.toString(),
22 |       per_page: perPage?.toString(),
23 |       sha
24 |     })
25 |   );
26 | }


--------------------------------------------------------------------------------
/src/github/operations/files.ts:
--------------------------------------------------------------------------------
  1 | import { z } from "zod";
  2 | import { githubRequest } from "../common/utils.js";
  3 | import {
  4 |   GitHubContentSchema,
  5 |   GitHubAuthorSchema,
  6 |   GitHubTreeSchema,
  7 |   GitHubCommitSchema,
  8 |   GitHubReferenceSchema,
  9 |   GitHubFileContentSchema,
 10 | } from "../common/types.js";
 11 | 
 12 | // Schema definitions
 13 | export const FileOperationSchema = z.object({
 14 |   path: z.string(),
 15 |   content: z.string(),
 16 | });
 17 | 
 18 | export const CreateOrUpdateFileSchema = z.object({
 19 |   owner: z.string().describe("Repository owner (username or organization)"),
 20 |   repo: z.string().describe("Repository name"),
 21 |   path: z.string().describe("Path where to create/update the file"),
 22 |   content: z.string().describe("Content of the file"),
 23 |   message: z.string().describe("Commit message"),
 24 |   branch: z.string().describe("Branch to create/update the file in"),
 25 |   sha: z.string().optional().describe("SHA of the file being replaced (required when updating existing files)"),
 26 | });
 27 | 
 28 | export const GetFileContentsSchema = z.object({
 29 |   owner: z.string().describe("Repository owner (username or organization)"),
 30 |   repo: z.string().describe("Repository name"),
 31 |   path: z.string().describe("Path to the file or directory"),
 32 |   branch: z.string().optional().describe("Branch to get contents from"),
 33 | });
 34 | 
 35 | export const PushFilesSchema = z.object({
 36 |   owner: z.string().describe("Repository owner (username or organization)"),
 37 |   repo: z.string().describe("Repository name"),
 38 |   branch: z.string().describe("Branch to push to (e.g., 'main' or 'master')"),
 39 |   files: z.array(FileOperationSchema).describe("Array of files to push"),
 40 |   message: z.string().describe("Commit message"),
 41 | });
 42 | 
 43 | export const GitHubCreateUpdateFileResponseSchema = z.object({
 44 |   content: GitHubFileContentSchema.nullable(),
 45 |   commit: z.object({
 46 |     sha: z.string(),
 47 |     node_id: z.string(),
 48 |     url: z.string(),
 49 |     html_url: z.string(),
 50 |     author: GitHubAuthorSchema,
 51 |     committer: GitHubAuthorSchema,
 52 |     message: z.string(),
 53 |     tree: z.object({
 54 |       sha: z.string(),
 55 |       url: z.string(),
 56 |     }),
 57 |     parents: z.array(
 58 |       z.object({
 59 |         sha: z.string(),
 60 |         url: z.string(),
 61 |         html_url: z.string(),
 62 |       })
 63 |     ),
 64 |   }),
 65 | });
 66 | 
 67 | // Type exports
 68 | export type FileOperation = z.infer<typeof FileOperationSchema>;
 69 | export type GitHubCreateUpdateFileResponse = z.infer<typeof GitHubCreateUpdateFileResponseSchema>;
 70 | 
 71 | // Function implementations
 72 | export async function getFileContents(
 73 |   owner: string,
 74 |   repo: string,
 75 |   path: string,
 76 |   branch?: string
 77 | ) {
 78 |   let url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
 79 |   if (branch) {
 80 |     url += `?ref=${branch}`;
 81 |   }
 82 | 
 83 |   const response = await githubRequest(url);
 84 |   const data = GitHubContentSchema.parse(response);
 85 | 
 86 |   // If it's a file, decode the content
 87 |   if (!Array.isArray(data) && data.content) {
 88 |     data.content = Buffer.from(data.content, "base64").toString("utf8");
 89 |   }
 90 | 
 91 |   return data;
 92 | }
 93 | 
 94 | export async function createOrUpdateFile(
 95 |   owner: string,
 96 |   repo: string,
 97 |   path: string,
 98 |   content: string,
 99 |   message: string,
100 |   branch: string,
101 |   sha?: string
102 | ) {
103 |   const encodedContent = Buffer.from(content).toString("base64");
104 | 
105 |   let currentSha = sha;
106 |   if (!currentSha) {
107 |     try {
108 |       const existingFile = await getFileContents(owner, repo, path, branch);
109 |       if (!Array.isArray(existingFile)) {
110 |         currentSha = existingFile.sha;
111 |       }
112 |     } catch (error) {
113 |       console.error("Note: File does not exist in branch, will create new file");
114 |     }
115 |   }
116 | 
117 |   const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
118 |   const body = {
119 |     message,
120 |     content: encodedContent,
121 |     branch,
122 |     ...(currentSha ? { sha: currentSha } : {}),
123 |   };
124 | 
125 |   const response = await githubRequest(url, {
126 |     method: "PUT",
127 |     body,
128 |   });
129 | 
130 |   return GitHubCreateUpdateFileResponseSchema.parse(response);
131 | }
132 | 
133 | async function createTree(
134 |   owner: string,
135 |   repo: string,
136 |   files: FileOperation[],
137 |   baseTree?: string
138 | ) {
139 |   const tree = files.map((file) => ({
140 |     path: file.path,
141 |     mode: "100644" as const,
142 |     type: "blob" as const,
143 |     content: file.content,
144 |   }));
145 | 
146 |   const response = await githubRequest(
147 |     `https://api.github.com/repos/${owner}/${repo}/git/trees`,
148 |     {
149 |       method: "POST",
150 |       body: {
151 |         tree,
152 |         base_tree: baseTree,
153 |       },
154 |     }
155 |   );
156 | 
157 |   return GitHubTreeSchema.parse(response);
158 | }
159 | 
160 | async function createCommit(
161 |   owner: string,
162 |   repo: string,
163 |   message: string,
164 |   tree: string,
165 |   parents: string[]
166 | ) {
167 |   const response = await githubRequest(
168 |     `https://api.github.com/repos/${owner}/${repo}/git/commits`,
169 |     {
170 |       method: "POST",
171 |       body: {
172 |         message,
173 |         tree,
174 |         parents,
175 |       },
176 |     }
177 |   );
178 | 
179 |   return GitHubCommitSchema.parse(response);
180 | }
181 | 
182 | async function updateReference(
183 |   owner: string,
184 |   repo: string,
185 |   ref: string,
186 |   sha: string
187 | ) {
188 |   const response = await githubRequest(
189 |     `https://api.github.com/repos/${owner}/${repo}/git/refs/${ref}`,
190 |     {
191 |       method: "PATCH",
192 |       body: {
193 |         sha,
194 |         force: true,
195 |       },
196 |     }
197 |   );
198 | 
199 |   return GitHubReferenceSchema.parse(response);
200 | }
201 | 
202 | export async function pushFiles(
203 |   owner: string,
204 |   repo: string,
205 |   branch: string,
206 |   files: FileOperation[],
207 |   message: string
208 | ) {
209 |   const refResponse = await githubRequest(
210 |     `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`
211 |   );
212 | 
213 |   const ref = GitHubReferenceSchema.parse(refResponse);
214 |   const commitSha = ref.object.sha;
215 | 
216 |   const tree = await createTree(owner, repo, files, commitSha);
217 |   const commit = await createCommit(owner, repo, message, tree.sha, [commitSha]);
218 |   return await updateReference(owner, repo, `heads/${branch}`, commit.sha);
219 | }
220 | 


--------------------------------------------------------------------------------
/src/github/operations/issues.ts:
--------------------------------------------------------------------------------
  1 | import { z } from "zod";
  2 | import { githubRequest, buildUrl } from "../common/utils.js";
  3 | 
  4 | export const GetIssueSchema = z.object({
  5 |   owner: z.string(),
  6 |   repo: z.string(),
  7 |   issue_number: z.number(),
  8 | });
  9 | 
 10 | export const IssueCommentSchema = z.object({
 11 |   owner: z.string(),
 12 |   repo: z.string(),
 13 |   issue_number: z.number(),
 14 |   body: z.string(),
 15 | });
 16 | 
 17 | export const CreateIssueOptionsSchema = z.object({
 18 |   title: z.string(),
 19 |   body: z.string().optional(),
 20 |   assignees: z.array(z.string()).optional(),
 21 |   milestone: z.number().optional(),
 22 |   labels: z.array(z.string()).optional(),
 23 | });
 24 | 
 25 | export const CreateIssueSchema = z.object({
 26 |   owner: z.string(),
 27 |   repo: z.string(),
 28 |   ...CreateIssueOptionsSchema.shape,
 29 | });
 30 | 
 31 | export const ListIssuesOptionsSchema = z.object({
 32 |   owner: z.string(),
 33 |   repo: z.string(),
 34 |   direction: z.enum(["asc", "desc"]).optional(),
 35 |   labels: z.array(z.string()).optional(),
 36 |   page: z.number().optional(),
 37 |   per_page: z.number().optional(),
 38 |   since: z.string().optional(),
 39 |   sort: z.enum(["created", "updated", "comments"]).optional(),
 40 |   state: z.enum(["open", "closed", "all"]).optional(),
 41 | });
 42 | 
 43 | export const UpdateIssueOptionsSchema = z.object({
 44 |   owner: z.string(),
 45 |   repo: z.string(),
 46 |   issue_number: z.number(),
 47 |   title: z.string().optional(),
 48 |   body: z.string().optional(),
 49 |   assignees: z.array(z.string()).optional(),
 50 |   milestone: z.number().optional(),
 51 |   labels: z.array(z.string()).optional(),
 52 |   state: z.enum(["open", "closed"]).optional(),
 53 | });
 54 | 
 55 | export async function getIssue(owner: string, repo: string, issue_number: number) {
 56 |   return githubRequest(`https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}`);
 57 | }
 58 | 
 59 | export async function addIssueComment(
 60 |   owner: string,
 61 |   repo: string,
 62 |   issue_number: number,
 63 |   body: string
 64 | ) {
 65 |   return githubRequest(`https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}/comments`, {
 66 |     method: "POST",
 67 |     body: { body },
 68 |   });
 69 | }
 70 | 
 71 | export async function createIssue(
 72 |   owner: string,
 73 |   repo: string,
 74 |   options: z.infer<typeof CreateIssueOptionsSchema>
 75 | ) {
 76 |   return githubRequest(
 77 |     `https://api.github.com/repos/${owner}/${repo}/issues`,
 78 |     {
 79 |       method: "POST",
 80 |       body: options,
 81 |     }
 82 |   );
 83 | }
 84 | 
 85 | export async function listIssues(
 86 |   owner: string,
 87 |   repo: string,
 88 |   options: Omit<z.infer<typeof ListIssuesOptionsSchema>, "owner" | "repo">
 89 | ) {
 90 |   const urlParams: Record<string, string | undefined> = {
 91 |     direction: options.direction,
 92 |     labels: options.labels?.join(","),
 93 |     page: options.page?.toString(),
 94 |     per_page: options.per_page?.toString(),
 95 |     since: options.since,
 96 |     sort: options.sort,
 97 |     state: options.state
 98 |   };
 99 | 
100 |   return githubRequest(
101 |     buildUrl(`https://api.github.com/repos/${owner}/${repo}/issues`, urlParams)
102 |   );
103 | }
104 | 
105 | export async function updateIssue(
106 |   owner: string,
107 |   repo: string,
108 |   issue_number: number,
109 |   options: Omit<z.infer<typeof UpdateIssueOptionsSchema>, "owner" | "repo" | "issue_number">
110 | ) {
111 |   return githubRequest(
112 |     `https://api.github.com/repos/${owner}/${repo}/issues/${issue_number}`,
113 |     {
114 |       method: "PATCH",
115 |       body: options,
116 |     }
117 |   );
118 | }


--------------------------------------------------------------------------------
/src/github/operations/repository.ts:
--------------------------------------------------------------------------------
 1 | import { z } from "zod";
 2 | import { githubRequest } from "../common/utils.js";
 3 | import { GitHubRepositorySchema, GitHubSearchResponseSchema } from "../common/types.js";
 4 | 
 5 | // Schema definitions
 6 | export const CreateRepositoryOptionsSchema = z.object({
 7 |   name: z.string().describe("Repository name"),
 8 |   description: z.string().optional().describe("Repository description"),
 9 |   private: z.boolean().optional().describe("Whether the repository should be private"),
10 |   autoInit: z.boolean().optional().describe("Initialize with README.md"),
11 | });
12 | 
13 | export const SearchRepositoriesSchema = z.object({
14 |   query: z.string().describe("Search query (see GitHub search syntax)"),
15 |   page: z.number().optional().describe("Page number for pagination (default: 1)"),
16 |   perPage: z.number().optional().describe("Number of results per page (default: 30, max: 100)"),
17 | });
18 | 
19 | export const ForkRepositorySchema = z.object({
20 |   owner: z.string().describe("Repository owner (username or organization)"),
21 |   repo: z.string().describe("Repository name"),
22 |   organization: z.string().optional().describe("Optional: organization to fork to (defaults to your personal account)"),
23 | });
24 | 
25 | // Type exports
26 | export type CreateRepositoryOptions = z.infer<typeof CreateRepositoryOptionsSchema>;
27 | 
28 | // Function implementations
29 | export async function createRepository(options: CreateRepositoryOptions) {
30 |   const response = await githubRequest("https://api.github.com/user/repos", {
31 |     method: "POST",
32 |     body: options,
33 |   });
34 |   return GitHubRepositorySchema.parse(response);
35 | }
36 | 
37 | export async function searchRepositories(
38 |   query: string,
39 |   page: number = 1,
40 |   perPage: number = 30
41 | ) {
42 |   const url = new URL("https://api.github.com/search/repositories");
43 |   url.searchParams.append("q", query);
44 |   url.searchParams.append("page", page.toString());
45 |   url.searchParams.append("per_page", perPage.toString());
46 | 
47 |   const response = await githubRequest(url.toString());
48 |   return GitHubSearchResponseSchema.parse(response);
49 | }
50 | 
51 | export async function forkRepository(
52 |   owner: string,
53 |   repo: string,
54 |   organization?: string
55 | ) {
56 |   const url = organization
57 |     ? `https://api.github.com/repos/${owner}/${repo}/forks?organization=${organization}`
58 |     : `https://api.github.com/repos/${owner}/${repo}/forks`;
59 | 
60 |   const response = await githubRequest(url, { method: "POST" });
61 |   return GitHubRepositorySchema.extend({
62 |     parent: GitHubRepositorySchema,
63 |     source: GitHubRepositorySchema,
64 |   }).parse(response);
65 | }
66 | 


--------------------------------------------------------------------------------
/src/github/operations/search.ts:
--------------------------------------------------------------------------------
 1 | import { z } from "zod";
 2 | import { githubRequest, buildUrl } from "../common/utils.js";
 3 | 
 4 | export const SearchOptions = z.object({
 5 |   q: z.string(),
 6 |   order: z.enum(["asc", "desc"]).optional(),
 7 |   page: z.number().min(1).optional(),
 8 |   per_page: z.number().min(1).max(100).optional(),
 9 | });
10 | 
11 | export const SearchUsersOptions = SearchOptions.extend({
12 |   sort: z.enum(["followers", "repositories", "joined"]).optional(),
13 | });
14 | 
15 | export const SearchIssuesOptions = SearchOptions.extend({
16 |   sort: z.enum([
17 |     "comments",
18 |     "reactions",
19 |     "reactions-+1",
20 |     "reactions--1",
21 |     "reactions-smile",
22 |     "reactions-thinking_face",
23 |     "reactions-heart",
24 |     "reactions-tada",
25 |     "interactions",
26 |     "created",
27 |     "updated",
28 |   ]).optional(),
29 | });
30 | 
31 | export const SearchCodeSchema = SearchOptions;
32 | export const SearchUsersSchema = SearchUsersOptions;
33 | export const SearchIssuesSchema = SearchIssuesOptions;
34 | 
35 | export async function searchCode(params: z.infer<typeof SearchCodeSchema>) {
36 |   return githubRequest(buildUrl("https://api.github.com/search/code", params));
37 | }
38 | 
39 | export async function searchIssues(params: z.infer<typeof SearchIssuesSchema>) {
40 |   return githubRequest(buildUrl("https://api.github.com/search/issues", params));
41 | }
42 | 
43 | export async function searchUsers(params: z.infer<typeof SearchUsersSchema>) {
44 |   return githubRequest(buildUrl("https://api.github.com/search/users", params));
45 | }


--------------------------------------------------------------------------------
/src/github/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-github",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for using the GitHub API",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-github": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "1.0.1",
23 |     "@types/node": "^22",
24 |     "@types/node-fetch": "^2.6.12",
25 |     "node-fetch": "^3.3.2",
26 |     "universal-user-agent": "^7.0.2",
27 |     "zod": "^3.22.4",
28 |     "zod-to-json-schema": "^3.23.5"
29 |   },
30 |   "devDependencies": {
31 |     "shx": "^0.3.4",
32 |     "typescript": "^5.6.2"
33 |   }
34 | }
35 | 


--------------------------------------------------------------------------------
/src/github/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |     "extends": "../../tsconfig.json",
 3 |     "compilerOptions": {
 4 |       "outDir": "./dist",
 5 |       "rootDir": "."
 6 |     },
 7 |     "include": [
 8 |       "./**/*.ts"
 9 |     ]
10 |   }
11 |   


--------------------------------------------------------------------------------
/src/gitlab/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | COPY src/gitlab /app
 4 | COPY tsconfig.json /tsconfig.json
 5 | 
 6 | WORKDIR /app
 7 | 
 8 | RUN --mount=type=cache,target=/root/.npm npm install
 9 | 
10 | RUN --mount=type=cache,target=/root/.npm-production npm ci --ignore-scripts --omit-dev
11 | 
12 | FROM node:22.12-alpine AS release
13 | 
14 | WORKDIR /app
15 | 
16 | COPY --from=builder /app/dist /app/dist
17 | COPY --from=builder /app/package.json /app/package.json
18 | COPY --from=builder /app/package-lock.json /app/package-lock.json
19 | 
20 | ENV NODE_ENV=production
21 | 
22 | RUN npm ci --ignore-scripts --omit-dev
23 | 
24 | ENTRYPOINT ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/gitlab/README.md:
--------------------------------------------------------------------------------
  1 | # GitLab MCP Server
  2 | 
  3 | MCP Server for the GitLab API, enabling project management, file operations, and more.
  4 | 
  5 | ### Features
  6 | 
  7 | - **Automatic Branch Creation**: When creating/updating files or pushing changes, branches are automatically created if they don't exist
  8 | - **Comprehensive Error Handling**: Clear error messages for common issues
  9 | - **Git History Preservation**: Operations maintain proper Git history without force pushing
 10 | - **Batch Operations**: Support for both single-file and multi-file operations
 11 | 
 12 | 
 13 | ## Tools
 14 | 
 15 | 1. `create_or_update_file`
 16 |    - Create or update a single file in a project
 17 |    - Inputs:
 18 |      - `project_id` (string): Project ID or URL-encoded path
 19 |      - `file_path` (string): Path where to create/update the file
 20 |      - `content` (string): Content of the file
 21 |      - `commit_message` (string): Commit message
 22 |      - `branch` (string): Branch to create/update the file in
 23 |      - `previous_path` (optional string): Path of the file to move/rename
 24 |    - Returns: File content and commit details
 25 | 
 26 | 2. `push_files`
 27 |    - Push multiple files in a single commit
 28 |    - Inputs:
 29 |      - `project_id` (string): Project ID or URL-encoded path
 30 |      - `branch` (string): Branch to push to
 31 |      - `files` (array): Files to push, each with `file_path` and `content`
 32 |      - `commit_message` (string): Commit message
 33 |    - Returns: Updated branch reference
 34 | 
 35 | 3. `search_repositories`
 36 |    - Search for GitLab projects
 37 |    - Inputs:
 38 |      - `search` (string): Search query
 39 |      - `page` (optional number): Page number for pagination
 40 |      - `per_page` (optional number): Results per page (default 20)
 41 |    - Returns: Project search results
 42 | 
 43 | 4. `create_repository`
 44 |    - Create a new GitLab project
 45 |    - Inputs:
 46 |      - `name` (string): Project name
 47 |      - `description` (optional string): Project description
 48 |      - `visibility` (optional string): 'private', 'internal', or 'public'
 49 |      - `initialize_with_readme` (optional boolean): Initialize with README
 50 |    - Returns: Created project details
 51 | 
 52 | 5. `get_file_contents`
 53 |    - Get contents of a file or directory
 54 |    - Inputs:
 55 |      - `project_id` (string): Project ID or URL-encoded path
 56 |      - `file_path` (string): Path to file/directory
 57 |      - `ref` (optional string): Branch/tag/commit to get contents from
 58 |    - Returns: File/directory contents
 59 | 
 60 | 6. `create_issue`
 61 |    - Create a new issue
 62 |    - Inputs:
 63 |      - `project_id` (string): Project ID or URL-encoded path
 64 |      - `title` (string): Issue title
 65 |      - `description` (optional string): Issue description
 66 |      - `assignee_ids` (optional number[]): User IDs to assign
 67 |      - `labels` (optional string[]): Labels to add
 68 |      - `milestone_id` (optional number): Milestone ID
 69 |    - Returns: Created issue details
 70 | 
 71 | 7. `create_merge_request`
 72 |    - Create a new merge request
 73 |    - Inputs:
 74 |      - `project_id` (string): Project ID or URL-encoded path
 75 |      - `title` (string): MR title
 76 |      - `description` (optional string): MR description
 77 |      - `source_branch` (string): Branch containing changes
 78 |      - `target_branch` (string): Branch to merge into
 79 |      - `draft` (optional boolean): Create as draft MR
 80 |      - `allow_collaboration` (optional boolean): Allow commits from upstream members
 81 |    - Returns: Created merge request details
 82 | 
 83 | 8. `fork_repository`
 84 |    - Fork a project
 85 |    - Inputs:
 86 |      - `project_id` (string): Project ID or URL-encoded path
 87 |      - `namespace` (optional string): Namespace to fork to
 88 |    - Returns: Forked project details
 89 | 
 90 | 9. `create_branch`
 91 |    - Create a new branch
 92 |    - Inputs:
 93 |      - `project_id` (string): Project ID or URL-encoded path
 94 |      - `branch` (string): Name for new branch
 95 |      - `ref` (optional string): Source branch/commit for new branch
 96 |    - Returns: Created branch reference
 97 | 
 98 | ## Setup
 99 | 
100 | ### Personal Access Token
101 | [Create a GitLab Personal Access Token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) with appropriate permissions:
102 |    - Go to User Settings > Access Tokens in GitLab
103 |    - Select the required scopes:
104 |      - `api` for full API access
105 |      - `read_api` for read-only access
106 |      - `read_repository` and `write_repository` for repository operations
107 |    - Create the token and save it securely
108 | 
109 | ### Usage with Claude Desktop
110 | Add the following to your `claude_desktop_config.json`:
111 | 
112 | #### Docker
113 | ```json
114 | {
115 |   "mcpServers": { 
116 |     "gitlab": {
117 |       "command": "docker",
118 |       "args": [
119 |         "run",
120 |         "--rm",
121 |         "-i",
122 |         "-e",
123 |         "GITLAB_PERSONAL_ACCESS_TOKEN",
124 |         "-e",
125 |         "GITLAB_API_URL",
126 |         "mcp/gitlab"
127 |       ],
128 |       "env": {
129 |         "GITLAB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>",
130 |         "GITLAB_API_URL": "https://gitlab.com/api/v4" // Optional, for self-hosted instances
131 |       }
132 |     }
133 |   }
134 | }
135 | ```
136 | 
137 | ### NPX
138 | 
139 | ```json
140 | {
141 |   "mcpServers": {
142 |     "gitlab": {
143 |       "command": "npx",
144 |       "args": [
145 |         "-y",
146 |         "@modelcontextprotocol/server-gitlab"
147 |       ],
148 |       "env": {
149 |         "GITLAB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>",
150 |         "GITLAB_API_URL": "https://gitlab.com/api/v4" // Optional, for self-hosted instances
151 |       }
152 |     }
153 |   }
154 | }
155 | ```
156 | 
157 | ## Build
158 | 
159 | Docker build:
160 | 
161 | ```bash
162 | docker build -t vonwig/gitlab:mcp -f src/gitlab/Dockerfile .
163 | ```
164 | 
165 | ## Environment Variables
166 | 
167 | - `GITLAB_PERSONAL_ACCESS_TOKEN`: Your GitLab personal access token (required)
168 | - `GITLAB_API_URL`: Base URL for GitLab API (optional, defaults to `https://gitlab.com/api/v4`)
169 | 
170 | ## License
171 | 
172 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
173 | 


--------------------------------------------------------------------------------
/src/gitlab/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-gitlab",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for using the GitLab API",
 5 |   "license": "MIT",
 6 |   "author": "GitLab, PBC (https://gitlab.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-gitlab": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "1.0.1",
23 |     "@types/node-fetch": "^2.6.12",
24 |     "node-fetch": "^3.3.2",
25 |     "zod-to-json-schema": "^3.23.5"
26 |   },
27 |   "devDependencies": {
28 |     "shx": "^0.3.4",
29 |     "typescript": "^5.6.2"
30 |   }
31 | }


--------------------------------------------------------------------------------
/src/gitlab/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |     "extends": "../../tsconfig.json",
 3 |     "compilerOptions": {
 4 |       "outDir": "./dist",
 5 |       "rootDir": "."
 6 |     },
 7 |     "include": [
 8 |       "./**/*.ts"
 9 |     ]
10 |   }
11 |   


--------------------------------------------------------------------------------
/src/google-maps/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | # Must be entire project because `prepare` script is run during `npm install` and requires all files.
 4 | COPY src/google-maps /app
 5 | COPY tsconfig.json /tsconfig.json
 6 | 
 7 | WORKDIR /app
 8 | 
 9 | RUN --mount=type=cache,target=/root/.npm npm install
10 | 
11 | RUN --mount=type=cache,target=/root/.npm-production npm ci --ignore-scripts --omit-dev
12 | 
13 | FROM node:22-alpine AS release
14 | 
15 | COPY --from=builder /app/dist /app/dist
16 | COPY --from=builder /app/package.json /app/package.json
17 | COPY --from=builder /app/package-lock.json /app/package-lock.json
18 | 
19 | ENV NODE_ENV=production
20 | 
21 | WORKDIR /app
22 | 
23 | RUN npm ci --ignore-scripts --omit-dev
24 | 
25 | ENTRYPOINT ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/google-maps/README.md:
--------------------------------------------------------------------------------
  1 | # Google Maps MCP Server
  2 | 
  3 | MCP Server for the Google Maps API.
  4 | 
  5 | ## Tools
  6 | 
  7 | 1. `maps_geocode`
  8 |    - Convert address to coordinates
  9 |    - Input: `address` (string)
 10 |    - Returns: location, formatted_address, place_id
 11 | 
 12 | 2. `maps_reverse_geocode`
 13 |    - Convert coordinates to address
 14 |    - Inputs:
 15 |      - `latitude` (number)
 16 |      - `longitude` (number)
 17 |    - Returns: formatted_address, place_id, address_components
 18 | 
 19 | 3. `maps_search_places`
 20 |    - Search for places using text query
 21 |    - Inputs:
 22 |      - `query` (string)
 23 |      - `location` (optional): { latitude: number, longitude: number }
 24 |      - `radius` (optional): number (meters, max 50000)
 25 |    - Returns: array of places with names, addresses, locations
 26 | 
 27 | 4. `maps_place_details`
 28 |    - Get detailed information about a place
 29 |    - Input: `place_id` (string)
 30 |    - Returns: name, address, contact info, ratings, reviews, opening hours
 31 | 
 32 | 5. `maps_distance_matrix`
 33 |    - Calculate distances and times between points
 34 |    - Inputs:
 35 |      - `origins` (string[])
 36 |      - `destinations` (string[])
 37 |      - `mode` (optional): "driving" | "walking" | "bicycling" | "transit"
 38 |    - Returns: distances and durations matrix
 39 | 
 40 | 6. `maps_elevation`
 41 |    - Get elevation data for locations
 42 |    - Input: `locations` (array of {latitude, longitude})
 43 |    - Returns: elevation data for each point
 44 | 
 45 | 7. `maps_directions`
 46 |    - Get directions between points
 47 |    - Inputs:
 48 |      - `origin` (string)
 49 |      - `destination` (string)
 50 |      - `mode` (optional): "driving" | "walking" | "bicycling" | "transit"
 51 |    - Returns: route details with steps, distance, duration
 52 | 
 53 | ## Setup
 54 | 
 55 | ### API Key
 56 | Get a Google Maps API key by following the instructions [here](https://developers.google.com/maps/documentation/javascript/get-api-key#create-api-keys).
 57 | 
 58 | ### Usage with Claude Desktop
 59 | 
 60 | Add the following to your `claude_desktop_config.json`:
 61 | 
 62 | #### Docker
 63 | 
 64 | ```json
 65 | {
 66 |   "mcpServers": {
 67 |     "google-maps": {
 68 |       "command": "docker",
 69 |       "args": [
 70 |         "run",
 71 |         "-i",
 72 |         "--rm",
 73 |         "-e",
 74 |         "GOOGLE_MAPS_API_KEY",
 75 |         "mcp/google-maps"
 76 |       ],
 77 |       "env": {
 78 |         "GOOGLE_MAPS_API_KEY": "<YOUR_API_KEY>"
 79 |       }
 80 |     }
 81 |   }
 82 | }
 83 | ```
 84 | 
 85 | ### NPX
 86 | 
 87 | ```json
 88 | {
 89 |   "mcpServers": {
 90 |     "google-maps": {
 91 |       "command": "npx",
 92 |       "args": [
 93 |         "-y",
 94 |         "@modelcontextprotocol/server-google-maps"
 95 |       ],
 96 |       "env": {
 97 |         "GOOGLE_MAPS_API_KEY": "<YOUR_API_KEY>"
 98 |       }
 99 |     }
100 |   }
101 | }
102 | ```
103 | 
104 | ## Build
105 | 
106 | Docker build:
107 | 
108 | ```bash
109 | docker build -t mcp/google-maps -f src/google-maps/Dockerfile .
110 | ```
111 | 
112 | ## License
113 | 
114 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
115 | 


--------------------------------------------------------------------------------
/src/google-maps/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-google-maps",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for using the Google Maps API",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-google-maps": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "1.0.1",
23 |     "@types/node-fetch": "^2.6.12",
24 |     "node-fetch": "^3.3.2"
25 |   },
26 |   "devDependencies": {
27 |     "shx": "^0.3.4",
28 |     "typescript": "^5.6.2"
29 |   }
30 | }


--------------------------------------------------------------------------------
/src/google-maps/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "outDir": "./dist",
 5 |     "rootDir": "."
 6 |   },
 7 |   "include": [
 8 |     "./**/*.ts"
 9 |   ]
10 | }
11 | 


--------------------------------------------------------------------------------
/src/memory/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | COPY src/memory /app
 4 | COPY tsconfig.json /tsconfig.json
 5 | 
 6 | WORKDIR /app
 7 | 
 8 | RUN --mount=type=cache,target=/root/.npm npm install
 9 | 
10 | RUN --mount=type=cache,target=/root/.npm-production npm ci --ignore-scripts --omit-dev
11 | 
12 | FROM node:22-alpine AS release
13 | 
14 | COPY --from=builder /app/dist /app/dist
15 | COPY --from=builder /app/package.json /app/package.json
16 | COPY --from=builder /app/package-lock.json /app/package-lock.json
17 | 
18 | ENV NODE_ENV=production
19 | 
20 | WORKDIR /app
21 | 
22 | RUN npm ci --ignore-scripts --omit-dev
23 | 
24 | ENTRYPOINT ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/memory/README.md:
--------------------------------------------------------------------------------
  1 | # Knowledge Graph Memory Server
  2 | A basic implementation of persistent memory using a local knowledge graph. This lets Claude remember information about the user across chats.
  3 | 
  4 | ## Core Concepts
  5 | 
  6 | ### Entities
  7 | Entities are the primary nodes in the knowledge graph. Each entity has:
  8 | - A unique name (identifier)
  9 | - An entity type (e.g., "person", "organization", "event")
 10 | - A list of observations
 11 | 
 12 | Example:
 13 | ```json
 14 | {
 15 |   "name": "John_Smith",
 16 |   "entityType": "person",
 17 |   "observations": ["Speaks fluent Spanish"]
 18 | }
 19 | ```
 20 | 
 21 | ### Relations
 22 | Relations define directed connections between entities. They are always stored in active voice and describe how entities interact or relate to each other.
 23 | 
 24 | Example:
 25 | ```json
 26 | {
 27 |   "from": "John_Smith",
 28 |   "to": "Anthropic",
 29 |   "relationType": "works_at"
 30 | }
 31 | ```
 32 | ### Observations
 33 | Observations are discrete pieces of information about an entity. They are:
 34 | 
 35 | - Stored as strings
 36 | - Attached to specific entities
 37 | - Can be added or removed independently
 38 | - Should be atomic (one fact per observation)
 39 | 
 40 | Example:
 41 | ```json
 42 | {
 43 |   "entityName": "John_Smith",
 44 |   "observations": [
 45 |     "Speaks fluent Spanish",
 46 |     "Graduated in 2019",
 47 |     "Prefers morning meetings"
 48 |   ]
 49 | }
 50 | ```
 51 | 
 52 | ## API
 53 | 
 54 | ### Tools
 55 | - **create_entities**
 56 |   - Create multiple new entities in the knowledge graph
 57 |   - Input: `entities` (array of objects)
 58 |     - Each object contains:
 59 |       - `name` (string): Entity identifier
 60 |       - `entityType` (string): Type classification
 61 |       - `observations` (string[]): Associated observations
 62 |   - Ignores entities with existing names
 63 | 
 64 | - **create_relations**
 65 |   - Create multiple new relations between entities
 66 |   - Input: `relations` (array of objects)
 67 |     - Each object contains:
 68 |       - `from` (string): Source entity name
 69 |       - `to` (string): Target entity name
 70 |       - `relationType` (string): Relationship type in active voice
 71 |   - Skips duplicate relations
 72 | 
 73 | - **add_observations**
 74 |   - Add new observations to existing entities
 75 |   - Input: `observations` (array of objects)
 76 |     - Each object contains:
 77 |       - `entityName` (string): Target entity
 78 |       - `contents` (string[]): New observations to add
 79 |   - Returns added observations per entity
 80 |   - Fails if entity doesn't exist
 81 | 
 82 | - **delete_entities**
 83 |   - Remove entities and their relations
 84 |   - Input: `entityNames` (string[])
 85 |   - Cascading deletion of associated relations
 86 |   - Silent operation if entity doesn't exist
 87 | 
 88 | - **delete_observations**
 89 |   - Remove specific observations from entities
 90 |   - Input: `deletions` (array of objects)
 91 |     - Each object contains:
 92 |       - `entityName` (string): Target entity
 93 |       - `observations` (string[]): Observations to remove
 94 |   - Silent operation if observation doesn't exist
 95 | 
 96 | - **delete_relations**
 97 |   - Remove specific relations from the graph
 98 |   - Input: `relations` (array of objects)
 99 |     - Each object contains:
100 |       - `from` (string): Source entity name
101 |       - `to` (string): Target entity name
102 |       - `relationType` (string): Relationship type
103 |   - Silent operation if relation doesn't exist
104 | 
105 | - **read_graph**
106 |   - Read the entire knowledge graph
107 |   - No input required
108 |   - Returns complete graph structure with all entities and relations
109 | 
110 | - **search_nodes**
111 |   - Search for nodes based on query
112 |   - Input: `query` (string)
113 |   - Searches across:
114 |     - Entity names
115 |     - Entity types
116 |     - Observation content
117 |   - Returns matching entities and their relations
118 | 
119 | - **open_nodes**
120 |   - Retrieve specific nodes by name
121 |   - Input: `names` (string[])
122 |   - Returns:
123 |     - Requested entities
124 |     - Relations between requested entities
125 |   - Silently skips non-existent nodes
126 | 
127 | # Usage with Claude Desktop
128 | 
129 | ### Setup
130 | 
131 | Add this to your claude_desktop_config.json:
132 | 
133 | #### Docker
134 | 
135 | ```json
136 | {
137 |   "mcpServers": {
138 |     "memory": {
139 |       "command": "docker",
140 |       "args": ["run", "-i", "-v", "claude-memory:/app/dist", "--rm", "mcp/memory"]
141 |     }
142 |   }
143 | }
144 | ```
145 | 
146 | #### NPX
147 | ```json
148 | {
149 |   "mcpServers": {
150 |     "memory": {
151 |       "command": "npx",
152 |       "args": [
153 |         "-y",
154 |         "@modelcontextprotocol/server-memory"
155 |       ]
156 |     }
157 |   }
158 | }
159 | ```
160 | 
161 | #### NPX with custom setting
162 | 
163 | The server can be configured using the following environment variables:
164 | 
165 | ```json
166 | {
167 |   "mcpServers": {
168 |     "memory": {
169 |       "command": "npx",
170 |       "args": [
171 |         "-y",
172 |         "@modelcontextprotocol/server-memory"
173 |       ],
174 |       "env": {
175 |         "MEMORY_FILE_PATH": "/path/to/custom/memory.json"
176 |       }
177 |     }
178 |   }
179 | }
180 | ```
181 | 
182 | - `MEMORY_FILE_PATH`: Path to the memory storage JSON file (default: `memory.json` in the server directory)
183 | 
184 | ### System Prompt
185 | 
186 | The prompt for utilizing memory depends on the use case. Changing the prompt will help the model determine the frequency and types of memories created.
187 | 
188 | Here is an example prompt for chat personalization. You could use this prompt in the "Custom Instructions" field of a [Claude.ai Project](https://www.anthropic.com/news/projects). 
189 | 
190 | ```
191 | Follow these steps for each interaction:
192 | 
193 | 1. User Identification:
194 |    - You should assume that you are interacting with default_user
195 |    - If you have not identified default_user, proactively try to do so.
196 | 
197 | 2. Memory Retrieval:
198 |    - Always begin your chat by saying only "Remembering..." and retrieve all relevant information from your knowledge graph
199 |    - Always refer to your knowledge graph as your "memory"
200 | 
201 | 3. Memory
202 |    - While conversing with the user, be attentive to any new information that falls into these categories:
203 |      a) Basic Identity (age, gender, location, job title, education level, etc.)
204 |      b) Behaviors (interests, habits, etc.)
205 |      c) Preferences (communication style, preferred language, etc.)
206 |      d) Goals (goals, targets, aspirations, etc.)
207 |      e) Relationships (personal and professional relationships up to 3 degrees of separation)
208 | 
209 | 4. Memory Update:
210 |    - If any new information was gathered during the interaction, update your memory as follows:
211 |      a) Create entities for recurring organizations, people, and significant events
212 |      b) Connect them to the current entities using relations
213 |      b) Store facts about them as observations
214 | ```
215 | 
216 | ## Building
217 | 
218 | Docker:
219 | 
220 | ```sh
221 | docker build -t mcp/memory -f src/memory/Dockerfile . 
222 | ```
223 | 
224 | ## License
225 | 
226 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
227 | 


--------------------------------------------------------------------------------
/src/memory/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-memory",
 3 |   "version": "0.6.3",
 4 |   "description": "MCP server for enabling memory for Claude through a knowledge graph",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-memory": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "1.0.1"
23 |   },
24 |   "devDependencies": {
25 |     "@types/node": "^22",
26 |     "shx": "^0.3.4",
27 |     "typescript": "^5.6.2"
28 |   }
29 | }


--------------------------------------------------------------------------------
/src/memory/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |     "extends": "../../tsconfig.json",
 3 |     "compilerOptions": {
 4 |       "outDir": "./dist",
 5 |       "rootDir": "."
 6 |     },
 7 |     "include": [
 8 |       "./**/*.ts"
 9 |     ]
10 |   }
11 |   


--------------------------------------------------------------------------------
/src/postgres/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | COPY src/postgres /app
 4 | COPY tsconfig.json /tsconfig.json
 5 | 
 6 | WORKDIR /app
 7 | 
 8 | RUN --mount=type=cache,target=/root/.npm npm install
 9 | 
10 | RUN --mount=type=cache,target=/root/.npm-production npm ci --ignore-scripts --omit-dev
11 | 
12 | FROM node:22-alpine AS release
13 | 
14 | COPY --from=builder /app/dist /app/dist
15 | COPY --from=builder /app/package.json /app/package.json
16 | COPY --from=builder /app/package-lock.json /app/package-lock.json
17 | 
18 | ENV NODE_ENV=production
19 | 
20 | WORKDIR /app
21 | 
22 | RUN npm ci --ignore-scripts --omit-dev
23 | 
24 | ENTRYPOINT ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/postgres/README.md:
--------------------------------------------------------------------------------
 1 | # PostgreSQL
 2 | 
 3 | A Model Context Protocol server that provides read-only access to PostgreSQL databases. This server enables LLMs to inspect database schemas and execute read-only queries.
 4 | 
 5 | ## Components
 6 | 
 7 | ### Tools
 8 | 
 9 | - **query**
10 |   - Execute read-only SQL queries against the connected database
11 |   - Input: `sql` (string): The SQL query to execute
12 |   - All queries are executed within a READ ONLY transaction
13 | 
14 | ### Resources
15 | 
16 | The server provides schema information for each table in the database:
17 | 
18 | - **Table Schemas** (`postgres://<host>/<table>/schema`)
19 |   - JSON schema information for each table
20 |   - Includes column names and data types
21 |   - Automatically discovered from database metadata
22 | 
23 | ## Usage with Claude Desktop
24 | 
25 | To use this server with the Claude Desktop app, add the following configuration to the "mcpServers" section of your `claude_desktop_config.json`:
26 | 
27 | ### Docker
28 | 
29 | * when running docker on macos, use host.docker.internal if the server is running on the host network (eg localhost)
30 | * username/password can be added to the postgresql url with `postgresql://user:password@host:port/db-name`
31 | 
32 | ```json
33 | {
34 |   "mcpServers": {
35 |     "postgres": {
36 |       "command": "docker",
37 |       "args": [
38 |         "run", 
39 |         "-i", 
40 |         "--rm", 
41 |         "mcp/postgres", 
42 |         "postgresql://host.docker.internal:5432/mydb"]
43 |     }
44 |   }
45 | }
46 | ```
47 | 
48 | ### NPX
49 | 
50 | ```json
51 | {
52 |   "mcpServers": {
53 |     "postgres": {
54 |       "command": "npx",
55 |       "args": [
56 |         "-y",
57 |         "@modelcontextprotocol/server-postgres",
58 |         "postgresql://localhost/mydb"
59 |       ]
60 |     }
61 |   }
62 | }
63 | ```
64 | 
65 | Replace `/mydb` with your database name.
66 | 
67 | ## Building
68 | 
69 | Docker:
70 | 
71 | ```sh
72 | docker build -t mcp/postgres -f src/postgres/Dockerfile . 
73 | ```
74 | 
75 | ## License
76 | 
77 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
78 | 


--------------------------------------------------------------------------------
/src/postgres/index.ts:
--------------------------------------------------------------------------------
  1 | #!/usr/bin/env node
  2 | 
  3 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
  4 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
  5 | import {
  6 |   CallToolRequestSchema,
  7 |   ListResourcesRequestSchema,
  8 |   ListToolsRequestSchema,
  9 |   ReadResourceRequestSchema,
 10 | } from "@modelcontextprotocol/sdk/types.js";
 11 | import pg from "pg";
 12 | 
 13 | const server = new Server(
 14 |   {
 15 |     name: "example-servers/postgres",
 16 |     version: "0.1.0",
 17 |   },
 18 |   {
 19 |     capabilities: {
 20 |       resources: {},
 21 |       tools: {},
 22 |     },
 23 |   },
 24 | );
 25 | 
 26 | const args = process.argv.slice(2);
 27 | if (args.length === 0) {
 28 |   console.error("Please provide a database URL as a command-line argument");
 29 |   process.exit(1);
 30 | }
 31 | 
 32 | const databaseUrl = args[0];
 33 | 
 34 | const resourceBaseUrl = new URL(databaseUrl);
 35 | resourceBaseUrl.protocol = "postgres:";
 36 | resourceBaseUrl.password = "";
 37 | 
 38 | const pool = new pg.Pool({
 39 |   connectionString: databaseUrl,
 40 | });
 41 | 
 42 | const SCHEMA_PATH = "schema";
 43 | 
 44 | server.setRequestHandler(ListResourcesRequestSchema, async () => {
 45 |   const client = await pool.connect();
 46 |   try {
 47 |     const result = await client.query(
 48 |       "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'",
 49 |     );
 50 |     return {
 51 |       resources: result.rows.map((row) => ({
 52 |         uri: new URL(`${row.table_name}/${SCHEMA_PATH}`, resourceBaseUrl).href,
 53 |         mimeType: "application/json",
 54 |         name: `"${row.table_name}" database schema`,
 55 |       })),
 56 |     };
 57 |   } finally {
 58 |     client.release();
 59 |   }
 60 | });
 61 | 
 62 | server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
 63 |   const resourceUrl = new URL(request.params.uri);
 64 | 
 65 |   const pathComponents = resourceUrl.pathname.split("/");
 66 |   const schema = pathComponents.pop();
 67 |   const tableName = pathComponents.pop();
 68 | 
 69 |   if (schema !== SCHEMA_PATH) {
 70 |     throw new Error("Invalid resource URI");
 71 |   }
 72 | 
 73 |   const client = await pool.connect();
 74 |   try {
 75 |     const result = await client.query(
 76 |       "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = $1",
 77 |       [tableName],
 78 |     );
 79 | 
 80 |     return {
 81 |       contents: [
 82 |         {
 83 |           uri: request.params.uri,
 84 |           mimeType: "application/json",
 85 |           text: JSON.stringify(result.rows, null, 2),
 86 |         },
 87 |       ],
 88 |     };
 89 |   } finally {
 90 |     client.release();
 91 |   }
 92 | });
 93 | 
 94 | server.setRequestHandler(ListToolsRequestSchema, async () => {
 95 |   return {
 96 |     tools: [
 97 |       {
 98 |         name: "query",
 99 |         description: "Run a read-only SQL query",
100 |         inputSchema: {
101 |           type: "object",
102 |           properties: {
103 |             sql: { type: "string" },
104 |           },
105 |         },
106 |       },
107 |     ],
108 |   };
109 | });
110 | 
111 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
112 |   if (request.params.name === "query") {
113 |     const sql = request.params.arguments?.sql as string;
114 | 
115 |     const client = await pool.connect();
116 |     try {
117 |       await client.query("BEGIN TRANSACTION READ ONLY");
118 |       const result = await client.query(sql);
119 |       return {
120 |         content: [{ type: "text", text: JSON.stringify(result.rows, null, 2) }],
121 |         isError: false,
122 |       };
123 |     } catch (error) {
124 |       throw error;
125 |     } finally {
126 |       client
127 |         .query("ROLLBACK")
128 |         .catch((error) =>
129 |           console.warn("Could not roll back transaction:", error),
130 |         );
131 | 
132 |       client.release();
133 |     }
134 |   }
135 |   throw new Error(`Unknown tool: ${request.params.name}`);
136 | });
137 | 
138 | async function runServer() {
139 |   const transport = new StdioServerTransport();
140 |   await server.connect(transport);
141 | }
142 | 
143 | runServer().catch(console.error);
144 | 


--------------------------------------------------------------------------------
/src/postgres/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-postgres",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for interacting with PostgreSQL databases",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-postgres": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "1.0.1",
23 |     "pg": "^8.13.0"
24 |   },
25 |   "devDependencies": {
26 |     "@types/pg": "^8.11.10",
27 |     "shx": "^0.3.4",
28 |     "typescript": "^5.6.2"
29 |   }
30 | }


--------------------------------------------------------------------------------
/src/postgres/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "outDir": "./dist",
 5 |     "rootDir": "."
 6 |   },
 7 |   "include": [
 8 |     "./**/*.ts"
 9 |   ]
10 | }
11 | 


--------------------------------------------------------------------------------
/src/puppeteer/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22-bookworm-slim
 2 | 
 3 | ENV DEBIAN_FRONTEND noninteractive
 4 | 
 5 | # for arm64 support we need to install chromium provided by debian
 6 | # npm ERR! The chromium binary is not available for arm64.
 7 | # https://github.com/puppeteer/puppeteer/issues/7740
 8 | 
 9 | ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
10 | ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
11 | 
12 | RUN apt-get update && \
13 |     apt-get install -y wget gnupg && \
14 |     apt-get install -y fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
15 |         libgtk2.0-0 libnss3 libatk-bridge2.0-0 libdrm2 libxkbcommon0 libgbm1 libasound2 && \
16 |     apt-get install -y chromium && \
17 |     apt-get clean
18 | 
19 | COPY src/puppeteer /project
20 | COPY tsconfig.json /tsconfig.json
21 | 
22 | WORKDIR /project
23 | 
24 | RUN npm install
25 | 
26 | ENTRYPOINT ["node", "dist/index.js"]


--------------------------------------------------------------------------------
/src/puppeteer/README.md:
--------------------------------------------------------------------------------
  1 | # Puppeteer
  2 | 
  3 | A Model Context Protocol server that provides browser automation capabilities using Puppeteer. This server enables LLMs to interact with web pages, take screenshots, and execute JavaScript in a real browser environment.
  4 | 
  5 | ## Components
  6 | 
  7 | ### Tools
  8 | 
  9 | - **puppeteer_navigate**
 10 |   - Navigate to any URL in the browser
 11 |   - Inputs:
 12 |     - `url` (string, required): URL to navigate to
 13 |     - `launchOptions` (object, optional): PuppeteerJS LaunchOptions. Default null. If changed and not null, browser restarts. Example: `{ headless: true, args: ['--user-data-dir="C:/Data"'] }`
 14 |     - `allowDangerous` (boolean, optional): Allow dangerous LaunchOptions that reduce security. When false, dangerous args like `--no-sandbox`, `--disable-web-security` will throw errors. Default false.
 15 | 
 16 | - **puppeteer_screenshot**
 17 |   - Capture screenshots of the entire page or specific elements
 18 |   - Inputs:
 19 |     - `name` (string, required): Name for the screenshot
 20 |     - `selector` (string, optional): CSS selector for element to screenshot
 21 |     - `width` (number, optional, default: 800): Screenshot width
 22 |     - `height` (number, optional, default: 600): Screenshot height
 23 | 
 24 | - **puppeteer_click**
 25 |   - Click elements on the page
 26 |   - Input: `selector` (string): CSS selector for element to click
 27 | 
 28 | - **puppeteer_hover**
 29 |   - Hover elements on the page
 30 |   - Input: `selector` (string): CSS selector for element to hover
 31 | 
 32 | - **puppeteer_fill**
 33 |   - Fill out input fields
 34 |   - Inputs:
 35 |     - `selector` (string): CSS selector for input field
 36 |     - `value` (string): Value to fill
 37 | 
 38 | - **puppeteer_select**
 39 |   - Select an element with SELECT tag
 40 |   - Inputs:
 41 |     - `selector` (string): CSS selector for element to select
 42 |     - `value` (string): Value to select
 43 | 
 44 | - **puppeteer_evaluate**
 45 |   - Execute JavaScript in the browser console
 46 |   - Input: `script` (string): JavaScript code to execute
 47 | 
 48 | ### Resources
 49 | 
 50 | The server provides access to two types of resources:
 51 | 
 52 | 1. **Console Logs** (`console://logs`)
 53 |    - Browser console output in text format
 54 |    - Includes all console messages from the browser
 55 | 
 56 | 2. **Screenshots** (`screenshot://<name>`)
 57 |    - PNG images of captured screenshots
 58 |    - Accessible via the screenshot name specified during capture
 59 | 
 60 | ## Key Features
 61 | 
 62 | - Browser automation
 63 | - Console log monitoring
 64 | - Screenshot capabilities
 65 | - JavaScript execution
 66 | - Basic web interaction (navigation, clicking, form filling)
 67 | - Customizable Puppeteer launch options
 68 | 
 69 | ## Configuration to use Puppeteer Server
 70 | Here's the Claude Desktop configuration to use the Puppeter server:
 71 | 
 72 | ### Docker
 73 | 
 74 | **NOTE** The docker implementation will use headless chromium, where as the NPX version will open a browser window.
 75 | 
 76 | ```json
 77 | {
 78 |   "mcpServers": {
 79 |     "puppeteer": {
 80 |       "command": "docker",
 81 |       "args": ["run", "-i", "--rm", "--init", "-e", "DOCKER_CONTAINER=true", "mcp/puppeteer"]
 82 |     }
 83 |   }
 84 | }
 85 | ```
 86 | 
 87 | ### NPX
 88 | 
 89 | ```json
 90 | {
 91 |   "mcpServers": {
 92 |     "puppeteer": {
 93 |       "command": "npx",
 94 |       "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
 95 |     }
 96 |   }
 97 | }
 98 | ```
 99 | 
100 | ### Launch Options
101 | 
102 | You can customize Puppeteer's browser behavior in two ways:
103 | 
104 | 1. **Environment Variable**: Set `PUPPETEER_LAUNCH_OPTIONS` with a JSON-encoded string in the MCP configuration's `env` parameter:
105 | 
106 |     ```json
107 |     {
108 |       "mcpServers": {
109 |         "mcp-puppeteer": {
110 |           "command": "npx",
111 |           "args": ["-y", "@modelcontextprotocol/server-puppeteer"],
112 |           "env": {
113 |             "PUPPETEER_LAUNCH_OPTIONS": "{ \"headless\": false, \"executablePath\": \"C:/Program Files/Google/Chrome/Application/chrome.exe\", \"args\": [] }",
114 |             "ALLOW_DANGEROUS": "true"
115 |           }
116 |         }
117 |       }
118 |     }
119 |     ```
120 | 
121 | 2. **Tool Call Arguments**: Pass `launchOptions` and `allowDangerous` parameters to the `puppeteer_navigate` tool:
122 | 
123 |    ```json
124 |    {
125 |      "url": "https://example.com",
126 |      "launchOptions": {
127 |        "headless": false,
128 |        "defaultViewport": {"width": 1280, "height": 720}
129 |      }
130 |    }
131 |    ```
132 | 
133 | ## Build
134 | 
135 | Docker build:
136 | 
137 | ```bash
138 | docker build -t mcp/puppeteer -f src/puppeteer/Dockerfile .
139 | ```
140 | 
141 | ## License
142 | 
143 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.


--------------------------------------------------------------------------------
/src/puppeteer/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-puppeteer",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for browser automation using Puppeteer",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-puppeteer": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "1.0.1",
23 |     "puppeteer": "^23.4.0"
24 |   },
25 |   "devDependencies": {
26 |     "shx": "^0.3.4",
27 |     "typescript": "^5.6.2"
28 |   }
29 | }


--------------------------------------------------------------------------------
/src/puppeteer/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "outDir": "./dist",
 5 |     "rootDir": "."
 6 |   },
 7 |   "include": [
 8 |     "./**/*.ts"
 9 |   ]
10 | }
11 | 


--------------------------------------------------------------------------------
/src/redis/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine as builder
 2 | 
 3 | COPY src/redis /app
 4 | 
 5 | WORKDIR /app
 6 | 
 7 | RUN --mount=type=cache,target=/root/.npm npm install
 8 | 
 9 | RUN npm run build
10 | 
11 | FROM node:22-alpine AS release
12 | 
13 | COPY --from=builder /app/build /app/build
14 | COPY --from=builder /app/package.json /app/package.json
15 | COPY --from=builder /app/package-lock.json /app/package-lock.json
16 | 
17 | ENV NODE_ENV=production
18 | 
19 | WORKDIR /app
20 | 
21 | RUN npm ci --ignore-scripts --omit-dev
22 | 
23 | ENTRYPOINT ["node", "build/index.js"]


--------------------------------------------------------------------------------
/src/redis/README.md:
--------------------------------------------------------------------------------
  1 | # Redis
  2 | 
  3 | A Model Context Protocol server that provides access to Redis databases. This server enables LLMs to interact with Redis key-value stores through a set of standardized tools.
  4 | 
  5 | ## Prerequisites
  6 | 
  7 | 1. Redis server must be installed and running
  8 |    - [Download Redis](https://redis.io/download)
  9 |    - For Windows users: Use [Windows Subsystem for Linux (WSL)](https://redis.io/docs/getting-started/installation/install-redis-on-windows/) or [Memurai](https://www.memurai.com/) (Redis-compatible Windows server)
 10 |    - Default port: 6379
 11 | 
 12 | ## Common Issues & Solutions
 13 | 
 14 | ### Connection Errors
 15 | 
 16 | **ECONNREFUSED**
 17 |   - **Cause**: Redis server is not running or unreachable
 18 |   - **Solution**: 
 19 |     - Verify Redis is running: `redis-cli ping` should return "PONG"
 20 |     - Check Redis service status: `systemctl status redis` (Linux) or `brew services list` (macOS)
 21 |     - Ensure correct port (default 6379) is not blocked by firewall
 22 |     - Verify Redis URL format: `redis://hostname:port`
 23 | 
 24 | ### Server Behavior
 25 | 
 26 | - The server implements exponential backoff with a maximum of 5 retries
 27 | - Initial retry delay: 1 second, maximum delay: 30 seconds
 28 | - Server will exit after max retries to prevent infinite reconnection loops
 29 | 
 30 | ## Components
 31 | 
 32 | ### Tools
 33 | 
 34 | - **set**
 35 |   - Set a Redis key-value pair with optional expiration
 36 |   - Input:
 37 |     - `key` (string): Redis key
 38 |     - `value` (string): Value to store
 39 |     - `expireSeconds` (number, optional): Expiration time in seconds
 40 | 
 41 | - **get**
 42 |   - Get value by key from Redis
 43 |   - Input: `key` (string): Redis key to retrieve
 44 | 
 45 | - **delete**
 46 |   - Delete one or more keys from Redis
 47 |   - Input: `key` (string | string[]): Key or array of keys to delete
 48 | 
 49 | - **list**
 50 |   - List Redis keys matching a pattern
 51 |   - Input: `pattern` (string, optional): Pattern to match keys (default: *)
 52 | 
 53 | ## Usage with Claude Desktop
 54 | 
 55 | To use this server with the Claude Desktop app, add the following configuration to the "mcpServers" section of your `claude_desktop_config.json`:
 56 | 
 57 | ### Docker
 58 | 
 59 | * when running docker on macos, use host.docker.internal if the server is running on the host network (eg localhost)
 60 | * Redis URL can be specified as an argument, defaults to "redis://localhost:6379"
 61 | 
 62 | ```json
 63 | {
 64 |   "mcpServers": {
 65 |     "redis": {
 66 |       "command": "docker",
 67 |       "args": [
 68 |         "run", 
 69 |         "-i", 
 70 |         "--rm", 
 71 |         "mcp/redis", 
 72 |         "redis://host.docker.internal:6379"]
 73 |     }
 74 |   }
 75 | }
 76 | ```
 77 | 
 78 | ### NPX
 79 | 
 80 | ```json
 81 | {
 82 |   "mcpServers": {
 83 |     "redis": {
 84 |       "command": "npx",
 85 |       "args": [
 86 |         "-y",
 87 |         "@modelcontextprotocol/server-redis",
 88 |         "redis://localhost:6379"
 89 |       ]
 90 |     }
 91 |   }
 92 | }
 93 | ```
 94 | 
 95 | ## Building
 96 | 
 97 | Docker:
 98 | 
 99 | ```sh
100 | docker build -t mcp/redis -f src/redis/Dockerfile . 
101 | ```
102 | 
103 | ## License
104 | 
105 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
106 | 


--------------------------------------------------------------------------------
/src/redis/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-redis",
 3 |   "version": "0.1.0",
 4 |   "description": "MCP server for using Redis",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "redis": "./build/index.js"
12 |   },
13 |   "files": [
14 |     "build"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x build/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "^1.7.0",
23 |     "@types/node": "^22.10.2",
24 |     "@types/redis": "^4.0.10",
25 |     "redis": "^4.7.0"
26 |   },
27 |   "devDependencies": {
28 |     "shx": "^0.3.4",
29 |     "typescript": "^5.7.2"
30 |   }
31 | }
32 | 


--------------------------------------------------------------------------------
/src/redis/src/index.ts:
--------------------------------------------------------------------------------
  1 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
  2 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
  3 | import {
  4 |     CallToolRequestSchema,
  5 |     ListToolsRequestSchema,
  6 | } from "@modelcontextprotocol/sdk/types.js";
  7 | import { z } from "zod";
  8 | import { createClient } from 'redis';
  9 | 
 10 | // Configuration
 11 | const REDIS_URL = process.argv[2] || "redis://localhost:6379";
 12 | const MAX_RETRIES = 5;
 13 | const MIN_RETRY_DELAY = 1000; // 1 second
 14 | const MAX_RETRY_DELAY = 30000; // 30 seconds
 15 | 
 16 | // Create Redis client with retry strategy
 17 | const redisClient = createClient({
 18 |     url: REDIS_URL,
 19 |     socket: {
 20 |         reconnectStrategy: (retries) => {
 21 |             if (retries >= MAX_RETRIES) {
 22 |                 console.error(`Maximum retries (${MAX_RETRIES}) reached. Giving up.`);
 23 |                 return new Error('Max retries reached');
 24 |             }
 25 |             const delay = Math.min(Math.pow(2, retries) * MIN_RETRY_DELAY, MAX_RETRY_DELAY);
 26 |             console.error(`Reconnection attempt ${retries + 1}/${MAX_RETRIES} in ${delay}ms`);
 27 |             return delay;
 28 |         }
 29 |     }
 30 | });
 31 | 
 32 | // Define Zod schemas for validation
 33 | const SetArgumentsSchema = z.object({
 34 |     key: z.string(),
 35 |     value: z.string(),
 36 |     expireSeconds: z.number().optional(),
 37 | });
 38 | 
 39 | const GetArgumentsSchema = z.object({
 40 |     key: z.string(),
 41 | });
 42 | 
 43 | const DeleteArgumentsSchema = z.object({
 44 |     key: z.string().or(z.array(z.string())),
 45 | });
 46 | 
 47 | const ListArgumentsSchema = z.object({
 48 |     pattern: z.string().default("*"),
 49 | });
 50 | 
 51 | // Create server instance
 52 | const server = new Server(
 53 |     {
 54 |         name: "redis",
 55 |         version: "0.0.1"
 56 |     },
 57 |     {
 58 |         capabilities: {
 59 |             tools: {}
 60 |         }
 61 |     }
 62 | );
 63 | 
 64 | // List available tools
 65 | server.setRequestHandler(ListToolsRequestSchema, async () => {
 66 |     return {
 67 |         tools: [
 68 |             {
 69 |                 name: "set",
 70 |                 description: "Set a Redis key-value pair with optional expiration",
 71 |                 inputSchema: {
 72 |                     type: "object",
 73 |                     properties: {
 74 |                         key: {
 75 |                             type: "string",
 76 |                             description: "Redis key",
 77 |                         },
 78 |                         value: {
 79 |                             type: "string",
 80 |                             description: "Value to store",
 81 |                         },
 82 |                         expireSeconds: {
 83 |                             type: "number",
 84 |                             description: "Optional expiration time in seconds",
 85 |                         },
 86 |                     },
 87 |                     required: ["key", "value"],
 88 |                 },
 89 |             },
 90 |             {
 91 |                 name: "get",
 92 |                 description: "Get value by key from Redis",
 93 |                 inputSchema: {
 94 |                     type: "object",
 95 |                     properties: {
 96 |                         key: {
 97 |                             type: "string",
 98 |                             description: "Redis key to retrieve",
 99 |                         },
100 |                     },
101 |                     required: ["key"],
102 |                 },
103 |             },
104 |             {
105 |                 name: "delete",
106 |                 description: "Delete one or more keys from Redis",
107 |                 inputSchema: {
108 |                     type: "object",
109 |                     properties: {
110 |                         key: {
111 |                             oneOf: [
112 |                                 { type: "string" },
113 |                                 { type: "array", items: { type: "string" } }
114 |                             ],
115 |                             description: "Key or array of keys to delete",
116 |                         },
117 |                     },
118 |                     required: ["key"],
119 |                 },
120 |             },
121 |             {
122 |                 name: "list",
123 |                 description: "List Redis keys matching a pattern",
124 |                 inputSchema: {
125 |                     type: "object",
126 |                     properties: {
127 |                         pattern: {
128 |                             type: "string",
129 |                             description: "Pattern to match keys (default: *)",
130 |                         },
131 |                     },
132 |                 },
133 |             },
134 |         ],
135 |     };
136 | });
137 | 
138 | // Handle tool execution
139 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
140 |     const { name, arguments: args } = request.params;
141 | 
142 |     try {
143 |         if (name === "set") {
144 |             const { key, value, expireSeconds } = SetArgumentsSchema.parse(args);
145 |             
146 |             if (expireSeconds) {
147 |                 await redisClient.setEx(key, expireSeconds, value);
148 |             } else {
149 |                 await redisClient.set(key, value);
150 |             }
151 | 
152 |             return {
153 |                 content: [
154 |                     {
155 |                         type: "text",
156 |                         text: `Successfully set key: ${key}`,
157 |                     },
158 |                 ],
159 |             };
160 |         } else if (name === "get") {
161 |             const { key } = GetArgumentsSchema.parse(args);
162 |             const value = await redisClient.get(key);
163 | 
164 |             if (value === null) {
165 |                 return {
166 |                     content: [
167 |                         {
168 |                             type: "text",
169 |                             text: `Key not found: ${key}`,
170 |                         },
171 |                     ],
172 |                 };
173 |             }
174 | 
175 |             return {
176 |                 content: [
177 |                     {
178 |                         type: "text",
179 |                         text: `${value}`,
180 |                     },
181 |                 ],
182 |             };
183 |         } else if (name === "delete") {
184 |             const { key } = DeleteArgumentsSchema.parse(args);
185 |             
186 |             if (Array.isArray(key)) {
187 |                 await redisClient.del(key);
188 |                 return {
189 |                     content: [
190 |                         {
191 |                             type: "text",
192 |                             text: `Successfully deleted ${key.length} keys`,
193 |                         },
194 |                     ],
195 |                 };
196 |             } else {
197 |                 await redisClient.del(key);
198 |                 return {
199 |                     content: [
200 |                         {
201 |                             type: "text",
202 |                             text: `Successfully deleted key: ${key}`,
203 |                         },
204 |                     ],
205 |                 };
206 |             }
207 |         } else if (name === "list") {
208 |             const { pattern } = ListArgumentsSchema.parse(args);
209 |             const keys = await redisClient.keys(pattern);
210 | 
211 |             return {
212 |                 content: [
213 |                     {
214 |                         type: "text",
215 |                         text: keys.length > 0 
216 |                             ? `Found keys:\n${keys.join('\n')}`
217 |                             : "No keys found matching pattern",
218 |                     },
219 |                 ],
220 |             };
221 |         } else {
222 |             throw new Error(`Unknown tool: ${name}`);
223 |         }
224 |     } catch (error) {
225 |         if (error instanceof z.ZodError) {
226 |             throw new Error(
227 |                 `Invalid arguments: ${error.errors
228 |                     .map((e) => `${e.path.join(".")}: ${e.message}`)
229 |                     .join(", ")}`
230 |             );
231 |         }
232 |         throw error;
233 |     }
234 | });
235 | 
236 | // Start the server
237 | async function main() {
238 |     try {
239 |         // Set up Redis event handlers
240 |         redisClient.on('error', (err: Error) => {
241 |             console.error('Redis Client Error:', err);
242 |         });
243 | 
244 |         redisClient.on('connect', () => {
245 |             console.error(`Connected to Redis at ${REDIS_URL}`);
246 |         });
247 | 
248 |         redisClient.on('reconnecting', () => {
249 |             console.error('Attempting to reconnect to Redis...');
250 |         });
251 | 
252 |         redisClient.on('end', () => {
253 |             console.error('Redis connection closed');
254 |         });
255 | 
256 |         // Connect to Redis
257 |         await redisClient.connect();
258 | 
259 |         // Set up MCP server
260 |         const transport = new StdioServerTransport();
261 |         await server.connect(transport);
262 |         console.error("Redis MCP Server running on stdio");
263 |     } catch (error) {
264 |         console.error("Error during startup:", error);
265 |         await cleanup();
266 |     }
267 | }
268 | 
269 | // Cleanup function
270 | async function cleanup() {
271 |     try {
272 |         await redisClient.quit();
273 |     } catch (error) {
274 |         console.error("Error during cleanup:", error);
275 |     }
276 |     process.exit(1);
277 | }
278 | 
279 | // Handle process termination
280 | process.on('SIGINT', cleanup);
281 | process.on('SIGTERM', cleanup);
282 | 
283 | main().catch((error) => {
284 |     console.error("Fatal error in main():", error);
285 |     cleanup();
286 | });
287 | 


--------------------------------------------------------------------------------
/src/redis/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |     "compilerOptions": {
 3 |       "target": "ES2022",
 4 |       "module": "Node16",
 5 |       "moduleResolution": "Node16",
 6 |       "outDir": "./build",
 7 |       "rootDir": "./src",
 8 |       "strict": true,
 9 |       "esModuleInterop": true,
10 |       "skipLibCheck": true,
11 |       "forceConsistentCasingInFileNames": true
12 |     },
13 |     "include": ["src/**/*"],
14 |     "exclude": ["node_modules"]
15 |   }
16 |   


--------------------------------------------------------------------------------
/src/sentry/.python-version:
--------------------------------------------------------------------------------
1 | 3.10
2 | 


--------------------------------------------------------------------------------
/src/sentry/Dockerfile:
--------------------------------------------------------------------------------
 1 | # Use a Python image with uv pre-installed
 2 | FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim AS uv
 3 | 
 4 | # Install the project into `/app`
 5 | WORKDIR /app
 6 | 
 7 | # Enable bytecode compilation
 8 | ENV UV_COMPILE_BYTECODE=1
 9 | 
10 | # Copy from the cache instead of linking since it's a mounted volume
11 | ENV UV_LINK_MODE=copy
12 | 
13 | # Install the project's dependencies using the lockfile and settings
14 | RUN --mount=type=cache,target=/root/.cache/uv \
15 |     --mount=type=bind,source=uv.lock,target=uv.lock \
16 |     --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
17 |     uv sync --frozen --no-install-project --no-dev --no-editable
18 | 
19 | # Then, add the rest of the project source code and install it
20 | # Installing separately from its dependencies allows optimal layer caching
21 | ADD . /app
22 | RUN --mount=type=cache,target=/root/.cache/uv \
23 |     uv sync --frozen --no-dev --no-editable
24 | 
25 | FROM python:3.12-slim-bookworm
26 | 
27 | WORKDIR /app
28 |  
29 | COPY --from=uv /root/.local /root/.local
30 | COPY --from=uv --chown=app:app /app/.venv /app/.venv
31 | 
32 | # Place executables in the environment at the front of the path
33 | ENV PATH="/app/.venv/bin:$PATH"
34 | 
35 | # when running the container, add --db-path and a bind mount to the host's db file
36 | ENTRYPOINT ["mcp-server-sentry"]
37 | 
38 | 


--------------------------------------------------------------------------------
/src/sentry/README.md:
--------------------------------------------------------------------------------
  1 | # mcp-server-sentry: A Sentry MCP server
  2 | 
  3 | ## Overview
  4 | 
  5 | A Model Context Protocol server for retrieving and analyzing issues from Sentry.io. This server provides tools to inspect error reports, stacktraces, and other debugging information from your Sentry account.
  6 | 
  7 | ### Tools
  8 | 
  9 | 1. `get_sentry_issue`
 10 |    - Retrieve and analyze a Sentry issue by ID or URL
 11 |    - Input:
 12 |      - `issue_id_or_url` (string): Sentry issue ID or URL to analyze
 13 |    - Returns: Issue details including:
 14 |      - Title
 15 |      - Issue ID
 16 |      - Status
 17 |      - Level
 18 |      - First seen timestamp
 19 |      - Last seen timestamp
 20 |      - Event count
 21 |      - Full stacktrace
 22 | 
 23 | ### Prompts
 24 | 
 25 | 1. `sentry-issue`
 26 |    - Retrieve issue details from Sentry
 27 |    - Input:
 28 |      - `issue_id_or_url` (string): Sentry issue ID or URL
 29 |    - Returns: Formatted issue details as conversation context
 30 | 
 31 | ## Installation
 32 | 
 33 | ### Using uv (recommended)
 34 | 
 35 | When using [`uv`](https://docs.astral.sh/uv/) no specific installation is needed. We will
 36 | use [`uvx`](https://docs.astral.sh/uv/guides/tools/) to directly run *mcp-server-sentry*.
 37 | 
 38 | ### Using PIP
 39 | 
 40 | Alternatively you can install `mcp-server-sentry` via pip:
 41 | 
 42 | ```
 43 | pip install mcp-server-sentry
 44 | ```
 45 | 
 46 | After installation, you can run it as a script using:
 47 | 
 48 | ```
 49 | python -m mcp_server_sentry
 50 | ```
 51 | 
 52 | ## Configuration
 53 | 
 54 | ### Usage with Claude Desktop
 55 | 
 56 | Add this to your `claude_desktop_config.json`:
 57 | 
 58 | <details>
 59 | <summary>Using uvx</summary>
 60 | 
 61 | ```json
 62 | "mcpServers": {
 63 |   "sentry": {
 64 |     "command": "uvx",
 65 |     "args": ["mcp-server-sentry", "--auth-token", "YOUR_SENTRY_TOKEN"]
 66 |   }
 67 | }
 68 | ```
 69 | </details>
 70 | 
 71 | <details>
 72 | 
 73 | <details>
 74 | <summary>Using docker</summary>
 75 | 
 76 | ```json
 77 | "mcpServers": {
 78 |   "sentry": {
 79 |     "command": "docker",
 80 |     "args": ["run", "-i", "--rm", "mcp/sentry", "--auth-token", "YOUR_SENTRY_TOKEN"]
 81 |   }
 82 | }
 83 | ```
 84 | </details>
 85 | 
 86 | <details>
 87 | 
 88 | <summary>Using pip installation</summary>
 89 | 
 90 | ```json
 91 | "mcpServers": {
 92 |   "sentry": {
 93 |     "command": "python",
 94 |     "args": ["-m", "mcp_server_sentry", "--auth-token", "YOUR_SENTRY_TOKEN"]
 95 |   }
 96 | }
 97 | ```
 98 | </details>
 99 | 
100 | ### Usage with [Zed](https://github.com/zed-industries/zed)
101 | 
102 | Add to your Zed settings.json:
103 | 
104 | <details>
105 | <summary>Using uvx</summary>
106 | 
107 | ```json
108 | "context_servers": [
109 |   "mcp-server-sentry": {
110 |     "command": {
111 |       "path": "uvx",
112 |       "args": ["mcp-server-sentry", "--auth-token", "YOUR_SENTRY_TOKEN"]
113 |     }
114 |   }
115 | ],
116 | ```
117 | </details>
118 | 
119 | <details>
120 | <summary>Using pip installation</summary>
121 | 
122 | ```json
123 | "context_servers": {
124 |   "mcp-server-sentry": {
125 |     "command": "python",
126 |     "args": ["-m", "mcp_server_sentry", "--auth-token", "YOUR_SENTRY_TOKEN"]
127 |   }
128 | },
129 | ```
130 | </details>
131 | 
132 | ## Debugging
133 | 
134 | You can use the MCP inspector to debug the server. For uvx installations:
135 | 
136 | ```
137 | npx @modelcontextprotocol/inspector uvx mcp-server-sentry --auth-token YOUR_SENTRY_TOKEN
138 | ```
139 | 
140 | Or if you've installed the package in a specific directory or are developing on it:
141 | 
142 | ```
143 | cd path/to/servers/src/sentry
144 | npx @modelcontextprotocol/inspector uv run mcp-server-sentry --auth-token YOUR_SENTRY_TOKEN
145 | ```
146 | 
147 | ## License
148 | 
149 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
150 | 


--------------------------------------------------------------------------------
/src/sentry/pyproject.toml:
--------------------------------------------------------------------------------
 1 | [project]
 2 | name = "mcp-server-sentry"
 3 | version = "0.6.2"
 4 | description = "MCP server for retrieving issues from sentry.io"
 5 | readme = "README.md"
 6 | requires-python = ">=3.10"
 7 | dependencies = ["mcp>=1.0.0"]
 8 | 
 9 | [build-system]
10 | requires = ["hatchling"]
11 | build-backend = "hatchling.build"
12 | 
13 | [tool.uv]
14 | dev-dependencies = ["pyright>=1.1.389", "pytest>=8.3.3", "ruff>=0.8.0"]
15 | 
16 | [project.scripts]
17 | mcp-server-sentry = "mcp_server_sentry:main"
18 | 


--------------------------------------------------------------------------------
/src/sentry/src/mcp_server_sentry/__init__.py:
--------------------------------------------------------------------------------
 1 | from . import server
 2 | import asyncio
 3 | 
 4 | 
 5 | def main():
 6 |     """Main entry point for the package."""
 7 |     asyncio.run(server.main())
 8 | 
 9 | 
10 | # Optionally expose other important items at package level
11 | __all__ = ["main", "server"]
12 | 


--------------------------------------------------------------------------------
/src/sentry/src/mcp_server_sentry/__main__.py:
--------------------------------------------------------------------------------
1 | from mcp_server_sentry.server import main
2 | 
3 | if __name__ == "__main__":
4 |     main()
5 | 


--------------------------------------------------------------------------------
/src/sequentialthinking/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | COPY src/sequentialthinking /app
 4 | COPY tsconfig.json /tsconfig.json
 5 | 
 6 | WORKDIR /app
 7 | 
 8 | RUN --mount=type=cache,target=/root/.npm npm install
 9 | 
10 | RUN --mount=type=cache,target=/root/.npm-production npm ci --ignore-scripts --omit-dev
11 | 
12 | FROM node:22-alpine AS release
13 | 
14 | COPY --from=builder /app/dist /app/dist
15 | COPY --from=builder /app/package.json /app/package.json
16 | COPY --from=builder /app/package-lock.json /app/package-lock.json
17 | 
18 | ENV NODE_ENV=production
19 | 
20 | WORKDIR /app
21 | 
22 | RUN npm ci --ignore-scripts --omit-dev
23 | 
24 | ENTRYPOINT ["node", "dist/index.js"]
25 | 


--------------------------------------------------------------------------------
/src/sequentialthinking/README.md:
--------------------------------------------------------------------------------
 1 | 
 2 | # Sequential Thinking MCP Server
 3 | 
 4 | An MCP server implementation that provides a tool for dynamic and reflective problem-solving through a structured thinking process.
 5 | 
 6 | ## Features
 7 | 
 8 | - Break down complex problems into manageable steps
 9 | - Revise and refine thoughts as understanding deepens
10 | - Branch into alternative paths of reasoning
11 | - Adjust the total number of thoughts dynamically
12 | - Generate and verify solution hypotheses
13 | 
14 | ## Tool
15 | 
16 | ### sequential_thinking
17 | 
18 | Facilitates a detailed, step-by-step thinking process for problem-solving and analysis.
19 | 
20 | **Inputs:**
21 | - `thought` (string): The current thinking step
22 | - `nextThoughtNeeded` (boolean): Whether another thought step is needed
23 | - `thoughtNumber` (integer): Current thought number
24 | - `totalThoughts` (integer): Estimated total thoughts needed
25 | - `isRevision` (boolean, optional): Whether this revises previous thinking
26 | - `revisesThought` (integer, optional): Which thought is being reconsidered
27 | - `branchFromThought` (integer, optional): Branching point thought number
28 | - `branchId` (string, optional): Branch identifier
29 | - `needsMoreThoughts` (boolean, optional): If more thoughts are needed
30 | 
31 | ## Usage
32 | 
33 | The Sequential Thinking tool is designed for:
34 | - Breaking down complex problems into steps
35 | - Planning and design with room for revision
36 | - Analysis that might need course correction
37 | - Problems where the full scope might not be clear initially
38 | - Tasks that need to maintain context over multiple steps
39 | - Situations where irrelevant information needs to be filtered out
40 | 
41 | ## Configuration
42 | 
43 | ### Usage with Claude Desktop
44 | 
45 | Add this to your `claude_desktop_config.json`:
46 | 
47 | #### npx
48 | 
49 | ```json
50 | {
51 |   "mcpServers": {
52 |     "sequential-thinking": {
53 |       "command": "npx",
54 |       "args": [
55 |         "-y",
56 |         "@modelcontextprotocol/server-sequential-thinking"
57 |       ]
58 |     }
59 |   }
60 | }
61 | ```
62 | 
63 | #### docker
64 | 
65 | ```json
66 | {
67 |   "mcpServers": {
68 |     "sequentialthinking": {
69 |       "command": "docker",
70 |       "args": [
71 |         "run",
72 |         "--rm",
73 |         "-i",
74 |         "mcp/sequentialthinking"
75 |       ]
76 |     }
77 |   }
78 | }
79 | ```
80 | 
81 | ## Building
82 | 
83 | Docker:
84 | 
85 | ```bash
86 | docker build -t mcp/sequentialthinking -f src/sequentialthinking/Dockerfile .
87 | ```
88 | 
89 | ## License
90 | 
91 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
92 | 


--------------------------------------------------------------------------------
/src/sequentialthinking/index.ts:
--------------------------------------------------------------------------------
  1 | #!/usr/bin/env node
  2 | 
  3 | import { Server } from "@modelcontextprotocol/sdk/server/index.js";
  4 | import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
  5 | import {
  6 |   CallToolRequestSchema,
  7 |   ListToolsRequestSchema,
  8 |   Tool,
  9 | } from "@modelcontextprotocol/sdk/types.js";
 10 | // Fixed chalk import for ESM
 11 | import chalk from 'chalk';
 12 | 
 13 | interface ThoughtData {
 14 |   thought: string;
 15 |   thoughtNumber: number;
 16 |   totalThoughts: number;
 17 |   isRevision?: boolean;
 18 |   revisesThought?: number;
 19 |   branchFromThought?: number;
 20 |   branchId?: string;
 21 |   needsMoreThoughts?: boolean;
 22 |   nextThoughtNeeded: boolean;
 23 | }
 24 | 
 25 | class SequentialThinkingServer {
 26 |   private thoughtHistory: ThoughtData[] = [];
 27 |   private branches: Record<string, ThoughtData[]> = {};
 28 | 
 29 |   private validateThoughtData(input: unknown): ThoughtData {
 30 |     const data = input as Record<string, unknown>;
 31 | 
 32 |     if (!data.thought || typeof data.thought !== 'string') {
 33 |       throw new Error('Invalid thought: must be a string');
 34 |     }
 35 |     if (!data.thoughtNumber || typeof data.thoughtNumber !== 'number') {
 36 |       throw new Error('Invalid thoughtNumber: must be a number');
 37 |     }
 38 |     if (!data.totalThoughts || typeof data.totalThoughts !== 'number') {
 39 |       throw new Error('Invalid totalThoughts: must be a number');
 40 |     }
 41 |     if (typeof data.nextThoughtNeeded !== 'boolean') {
 42 |       throw new Error('Invalid nextThoughtNeeded: must be a boolean');
 43 |     }
 44 | 
 45 |     return {
 46 |       thought: data.thought,
 47 |       thoughtNumber: data.thoughtNumber,
 48 |       totalThoughts: data.totalThoughts,
 49 |       nextThoughtNeeded: data.nextThoughtNeeded,
 50 |       isRevision: data.isRevision as boolean | undefined,
 51 |       revisesThought: data.revisesThought as number | undefined,
 52 |       branchFromThought: data.branchFromThought as number | undefined,
 53 |       branchId: data.branchId as string | undefined,
 54 |       needsMoreThoughts: data.needsMoreThoughts as boolean | undefined,
 55 |     };
 56 |   }
 57 | 
 58 |   private formatThought(thoughtData: ThoughtData): string {
 59 |     const { thoughtNumber, totalThoughts, thought, isRevision, revisesThought, branchFromThought, branchId } = thoughtData;
 60 | 
 61 |     let prefix = '';
 62 |     let context = '';
 63 | 
 64 |     if (isRevision) {
 65 |       prefix = chalk.yellow('🔄 Revision');
 66 |       context = ` (revising thought ${revisesThought})`;
 67 |     } else if (branchFromThought) {
 68 |       prefix = chalk.green('🌿 Branch');
 69 |       context = ` (from thought ${branchFromThought}, ID: ${branchId})`;
 70 |     } else {
 71 |       prefix = chalk.blue('💭 Thought');
 72 |       context = '';
 73 |     }
 74 | 
 75 |     const header = `${prefix} ${thoughtNumber}/${totalThoughts}${context}`;
 76 |     const border = '─'.repeat(Math.max(header.length, thought.length) + 4);
 77 | 
 78 |     return `
 79 | ┌${border}┐
 80 | │ ${header} │
 81 | ├${border}┤
 82 | │ ${thought.padEnd(border.length - 2)} │
 83 | └${border}┘`;
 84 |   }
 85 | 
 86 |   public processThought(input: unknown): { content: Array<{ type: string; text: string }>; isError?: boolean } {
 87 |     try {
 88 |       const validatedInput = this.validateThoughtData(input);
 89 | 
 90 |       if (validatedInput.thoughtNumber > validatedInput.totalThoughts) {
 91 |         validatedInput.totalThoughts = validatedInput.thoughtNumber;
 92 |       }
 93 | 
 94 |       this.thoughtHistory.push(validatedInput);
 95 | 
 96 |       if (validatedInput.branchFromThought && validatedInput.branchId) {
 97 |         if (!this.branches[validatedInput.branchId]) {
 98 |           this.branches[validatedInput.branchId] = [];
 99 |         }
100 |         this.branches[validatedInput.branchId].push(validatedInput);
101 |       }
102 | 
103 |       const formattedThought = this.formatThought(validatedInput);
104 |       console.error(formattedThought);
105 | 
106 |       return {
107 |         content: [{
108 |           type: "text",
109 |           text: JSON.stringify({
110 |             thoughtNumber: validatedInput.thoughtNumber,
111 |             totalThoughts: validatedInput.totalThoughts,
112 |             nextThoughtNeeded: validatedInput.nextThoughtNeeded,
113 |             branches: Object.keys(this.branches),
114 |             thoughtHistoryLength: this.thoughtHistory.length
115 |           }, null, 2)
116 |         }]
117 |       };
118 |     } catch (error) {
119 |       return {
120 |         content: [{
121 |           type: "text",
122 |           text: JSON.stringify({
123 |             error: error instanceof Error ? error.message : String(error),
124 |             status: 'failed'
125 |           }, null, 2)
126 |         }],
127 |         isError: true
128 |       };
129 |     }
130 |   }
131 | }
132 | 
133 | const SEQUENTIAL_THINKING_TOOL: Tool = {
134 |   name: "sequentialthinking",
135 |   description: `A detailed tool for dynamic and reflective problem-solving through thoughts.
136 | This tool helps analyze problems through a flexible thinking process that can adapt and evolve.
137 | Each thought can build on, question, or revise previous insights as understanding deepens.
138 | 
139 | When to use this tool:
140 | - Breaking down complex problems into steps
141 | - Planning and design with room for revision
142 | - Analysis that might need course correction
143 | - Problems where the full scope might not be clear initially
144 | - Problems that require a multi-step solution
145 | - Tasks that need to maintain context over multiple steps
146 | - Situations where irrelevant information needs to be filtered out
147 | 
148 | Key features:
149 | - You can adjust total_thoughts up or down as you progress
150 | - You can question or revise previous thoughts
151 | - You can add more thoughts even after reaching what seemed like the end
152 | - You can express uncertainty and explore alternative approaches
153 | - Not every thought needs to build linearly - you can branch or backtrack
154 | - Generates a solution hypothesis
155 | - Verifies the hypothesis based on the Chain of Thought steps
156 | - Repeats the process until satisfied
157 | - Provides a correct answer
158 | 
159 | Parameters explained:
160 | - thought: Your current thinking step, which can include:
161 | * Regular analytical steps
162 | * Revisions of previous thoughts
163 | * Questions about previous decisions
164 | * Realizations about needing more analysis
165 | * Changes in approach
166 | * Hypothesis generation
167 | * Hypothesis verification
168 | - next_thought_needed: True if you need more thinking, even if at what seemed like the end
169 | - thought_number: Current number in sequence (can go beyond initial total if needed)
170 | - total_thoughts: Current estimate of thoughts needed (can be adjusted up/down)
171 | - is_revision: A boolean indicating if this thought revises previous thinking
172 | - revises_thought: If is_revision is true, which thought number is being reconsidered
173 | - branch_from_thought: If branching, which thought number is the branching point
174 | - branch_id: Identifier for the current branch (if any)
175 | - needs_more_thoughts: If reaching end but realizing more thoughts needed
176 | 
177 | You should:
178 | 1. Start with an initial estimate of needed thoughts, but be ready to adjust
179 | 2. Feel free to question or revise previous thoughts
180 | 3. Don't hesitate to add more thoughts if needed, even at the "end"
181 | 4. Express uncertainty when present
182 | 5. Mark thoughts that revise previous thinking or branch into new paths
183 | 6. Ignore information that is irrelevant to the current step
184 | 7. Generate a solution hypothesis when appropriate
185 | 8. Verify the hypothesis based on the Chain of Thought steps
186 | 9. Repeat the process until satisfied with the solution
187 | 10. Provide a single, ideally correct answer as the final output
188 | 11. Only set next_thought_needed to false when truly done and a satisfactory answer is reached`,
189 |   inputSchema: {
190 |     type: "object",
191 |     properties: {
192 |       thought: {
193 |         type: "string",
194 |         description: "Your current thinking step"
195 |       },
196 |       nextThoughtNeeded: {
197 |         type: "boolean",
198 |         description: "Whether another thought step is needed"
199 |       },
200 |       thoughtNumber: {
201 |         type: "integer",
202 |         description: "Current thought number",
203 |         minimum: 1
204 |       },
205 |       totalThoughts: {
206 |         type: "integer",
207 |         description: "Estimated total thoughts needed",
208 |         minimum: 1
209 |       },
210 |       isRevision: {
211 |         type: "boolean",
212 |         description: "Whether this revises previous thinking"
213 |       },
214 |       revisesThought: {
215 |         type: "integer",
216 |         description: "Which thought is being reconsidered",
217 |         minimum: 1
218 |       },
219 |       branchFromThought: {
220 |         type: "integer",
221 |         description: "Branching point thought number",
222 |         minimum: 1
223 |       },
224 |       branchId: {
225 |         type: "string",
226 |         description: "Branch identifier"
227 |       },
228 |       needsMoreThoughts: {
229 |         type: "boolean",
230 |         description: "If more thoughts are needed"
231 |       }
232 |     },
233 |     required: ["thought", "nextThoughtNeeded", "thoughtNumber", "totalThoughts"]
234 |   }
235 | };
236 | 
237 | const server = new Server(
238 |   {
239 |     name: "sequential-thinking-server",
240 |     version: "0.2.0",
241 |   },
242 |   {
243 |     capabilities: {
244 |       tools: {},
245 |     },
246 |   }
247 | );
248 | 
249 | const thinkingServer = new SequentialThinkingServer();
250 | 
251 | server.setRequestHandler(ListToolsRequestSchema, async () => ({
252 |   tools: [SEQUENTIAL_THINKING_TOOL],
253 | }));
254 | 
255 | server.setRequestHandler(CallToolRequestSchema, async (request) => {
256 |   if (request.params.name === "sequentialthinking") {
257 |     return thinkingServer.processThought(request.params.arguments);
258 |   }
259 | 
260 |   return {
261 |     content: [{
262 |       type: "text",
263 |       text: `Unknown tool: ${request.params.name}`
264 |     }],
265 |     isError: true
266 |   };
267 | });
268 | 
269 | async function runServer() {
270 |   const transport = new StdioServerTransport();
271 |   await server.connect(transport);
272 |   console.error("Sequential Thinking MCP Server running on stdio");
273 | }
274 | 
275 | runServer().catch((error) => {
276 |   console.error("Fatal error running server:", error);
277 |   process.exit(1);
278 | });
279 | 


--------------------------------------------------------------------------------
/src/sequentialthinking/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-sequential-thinking",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for sequential thinking and problem solving",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-sequential-thinking": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "0.5.0",
23 |     "chalk": "^5.3.0",
24 |     "yargs": "^17.7.2"
25 |   },
26 |   "devDependencies": {
27 |     "@types/node": "^22",
28 |     "@types/yargs": "^17.0.32",
29 |     "shx": "^0.3.4",
30 |     "typescript": "^5.3.3"
31 |   }
32 | }


--------------------------------------------------------------------------------
/src/sequentialthinking/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "extends": "../../tsconfig.json",
 3 |   "compilerOptions": {
 4 |     "outDir": "./dist",
 5 |     "rootDir": ".",
 6 |     "moduleResolution": "NodeNext",
 7 |     "module": "NodeNext"
 8 |   },
 9 |   "include": ["./**/*.ts"]
10 | }
11 | 


--------------------------------------------------------------------------------
/src/slack/Dockerfile:
--------------------------------------------------------------------------------
 1 | FROM node:22.12-alpine AS builder
 2 | 
 3 | # Must be entire project because `prepare` script is run during `npm install` and requires all files.
 4 | COPY src/slack /app
 5 | COPY tsconfig.json /tsconfig.json
 6 | 
 7 | WORKDIR /app
 8 | 
 9 | RUN --mount=type=cache,target=/root/.npm npm install
10 | 
11 | RUN --mount=type=cache,target=/root/.npm-production npm ci --ignore-scripts --omit-dev
12 | 
13 | FROM node:22-alpine AS release
14 | 
15 | COPY --from=builder /app/dist /app/dist
16 | COPY --from=builder /app/package.json /app/package.json
17 | COPY --from=builder /app/package-lock.json /app/package-lock.json
18 | 
19 | ENV NODE_ENV=production
20 | 
21 | WORKDIR /app
22 | 
23 | RUN npm ci --ignore-scripts --omit-dev
24 | 
25 | ENTRYPOINT ["node", "dist/index.js"]
26 | 


--------------------------------------------------------------------------------
/src/slack/README.md:
--------------------------------------------------------------------------------
  1 | # Slack MCP Server
  2 | 
  3 | MCP Server for the Slack API, enabling Claude to interact with Slack workspaces.
  4 | 
  5 | ## Tools
  6 | 
  7 | 1. `slack_list_channels`
  8 |    - List public channels in the workspace
  9 |    - Optional inputs:
 10 |      - `limit` (number, default: 100, max: 200): Maximum number of channels to return
 11 |      - `cursor` (string): Pagination cursor for next page
 12 |    - Returns: List of channels with their IDs and information
 13 | 
 14 | 2. `slack_post_message`
 15 |    - Post a new message to a Slack channel
 16 |    - Required inputs:
 17 |      - `channel_id` (string): The ID of the channel to post to
 18 |      - `text` (string): The message text to post
 19 |    - Returns: Message posting confirmation and timestamp
 20 | 
 21 | 3. `slack_reply_to_thread`
 22 |    - Reply to a specific message thread
 23 |    - Required inputs:
 24 |      - `channel_id` (string): The channel containing the thread
 25 |      - `thread_ts` (string): Timestamp of the parent message
 26 |      - `text` (string): The reply text
 27 |    - Returns: Reply confirmation and timestamp
 28 | 
 29 | 4. `slack_add_reaction`
 30 |    - Add an emoji reaction to a message
 31 |    - Required inputs:
 32 |      - `channel_id` (string): The channel containing the message
 33 |      - `timestamp` (string): Message timestamp to react to
 34 |      - `reaction` (string): Emoji name without colons
 35 |    - Returns: Reaction confirmation
 36 | 
 37 | 5. `slack_get_channel_history`
 38 |    - Get recent messages from a channel
 39 |    - Required inputs:
 40 |      - `channel_id` (string): The channel ID
 41 |    - Optional inputs:
 42 |      - `limit` (number, default: 10): Number of messages to retrieve
 43 |    - Returns: List of messages with their content and metadata
 44 | 
 45 | 6. `slack_get_thread_replies`
 46 |    - Get all replies in a message thread
 47 |    - Required inputs:
 48 |      - `channel_id` (string): The channel containing the thread
 49 |      - `thread_ts` (string): Timestamp of the parent message
 50 |    - Returns: List of replies with their content and metadata
 51 | 
 52 | 
 53 | 7. `slack_get_users`
 54 |    - Get list of workspace users with basic profile information
 55 |    - Optional inputs:
 56 |      - `cursor` (string): Pagination cursor for next page
 57 |      - `limit` (number, default: 100, max: 200): Maximum users to return
 58 |    - Returns: List of users with their basic profiles
 59 | 
 60 | 8. `slack_get_user_profile`
 61 |    - Get detailed profile information for a specific user
 62 |    - Required inputs:
 63 |      - `user_id` (string): The user's ID
 64 |    - Returns: Detailed user profile information
 65 | 
 66 | ## Setup
 67 | 
 68 | 1. Create a Slack App:
 69 |    - Visit the [Slack Apps page](https://api.slack.com/apps)
 70 |    - Click "Create New App"
 71 |    - Choose "From scratch"
 72 |    - Name your app and select your workspace
 73 | 
 74 | 2. Configure Bot Token Scopes:
 75 |    Navigate to "OAuth & Permissions" and add these scopes:
 76 |    - `channels:history` - View messages and other content in public channels
 77 |    - `channels:read` - View basic channel information
 78 |    - `chat:write` - Send messages as the app
 79 |    - `reactions:write` - Add emoji reactions to messages
 80 |    - `users:read` - View users and their basic information
 81 | 
 82 | 4. Install App to Workspace:
 83 |    - Click "Install to Workspace" and authorize the app
 84 |    - Save the "Bot User OAuth Token" that starts with `xoxb-`
 85 | 
 86 | 5. Get your Team ID (starts with a `T`) by following [this guidance](https://slack.com/help/articles/221769328-Locate-your-Slack-URL-or-ID#find-your-workspace-or-org-id)
 87 | 
 88 | ### Usage with Claude Desktop
 89 | 
 90 | Add the following to your `claude_desktop_config.json`:
 91 | 
 92 | #### npx
 93 | 
 94 | ```json
 95 | {
 96 |   "mcpServers": {
 97 |     "slack": {
 98 |       "command": "npx",
 99 |       "args": [
100 |         "-y",
101 |         "@modelcontextprotocol/server-slack"
102 |       ],
103 |       "env": {
104 |         "SLACK_BOT_TOKEN": "xoxb-your-bot-token",
105 |         "SLACK_TEAM_ID": "T01234567"
106 |       }
107 |     }
108 |   }
109 | }
110 | ```
111 | 
112 | #### docker
113 | 
114 | ```json
115 | {
116 |   "mcpServers": {
117 |     "slack": {
118 |       "command": "docker",
119 |       "args": [
120 |         "run",
121 |         "-i",
122 |         "--rm",
123 |         "-e",
124 |         "SLACK_BOT_TOKEN",
125 |         "-e",
126 |         "SLACK_TEAM_ID",
127 |         "mcp/slack"
128 |       ],
129 |       "env": {
130 |         "SLACK_BOT_TOKEN": "xoxb-your-bot-token",
131 |         "SLACK_TEAM_ID": "T01234567"
132 |       }
133 |     }
134 |   }
135 | }
136 | ```
137 | 
138 | ### Troubleshooting
139 | 
140 | If you encounter permission errors, verify that:
141 | 1. All required scopes are added to your Slack app
142 | 2. The app is properly installed to your workspace
143 | 3. The tokens and workspace ID are correctly copied to your configuration
144 | 4. The app has been added to the channels it needs to access
145 | 
146 | ## Build
147 | 
148 | Docker build:
149 | 
150 | ```bash
151 | docker build -t mcp/slack -f src/slack/Dockerfile .
152 | ```
153 | 
154 | ## License
155 | 
156 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
157 | 


--------------------------------------------------------------------------------
/src/slack/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "@modelcontextprotocol/server-slack",
 3 |   "version": "0.6.2",
 4 |   "description": "MCP server for interacting with Slack",
 5 |   "license": "MIT",
 6 |   "author": "Anthropic, PBC (https://anthropic.com)",
 7 |   "homepage": "https://modelcontextprotocol.io",
 8 |   "bugs": "https://github.com/modelcontextprotocol/servers/issues",
 9 |   "type": "module",
10 |   "bin": {
11 |     "mcp-server-slack": "dist/index.js"
12 |   },
13 |   "files": [
14 |     "dist"
15 |   ],
16 |   "scripts": {
17 |     "build": "tsc && shx chmod +x dist/*.js",
18 |     "prepare": "npm run build",
19 |     "watch": "tsc --watch"
20 |   },
21 |   "dependencies": {
22 |     "@modelcontextprotocol/sdk": "1.0.1"
23 |   },
24 |   "devDependencies": {
25 |     "@types/node": "^22",
26 |     "shx": "^0.3.4",
27 |     "typescript": "^5.6.2"
28 |   }
29 | }


--------------------------------------------------------------------------------
/src/slack/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |     "extends": "../../tsconfig.json",
 3 |     "compilerOptions": {
 4 |       "outDir": "./dist",
 5 |       "rootDir": "."
 6 |     },
 7 |     "include": [
 8 |       "./**/*.ts"
 9 |     ]
10 |   }
11 |   


--------------------------------------------------------------------------------
/src/sqlite/.python-version:
--------------------------------------------------------------------------------
1 | 3.10
2 | 


--------------------------------------------------------------------------------
/src/sqlite/Dockerfile:
--------------------------------------------------------------------------------
 1 | # Use a Python image with uv pre-installed
 2 | FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim AS uv
 3 | 
 4 | # Install the project into `/app`
 5 | WORKDIR /app
 6 | 
 7 | # Enable bytecode compilation
 8 | ENV UV_COMPILE_BYTECODE=1
 9 | 
10 | # Copy from the cache instead of linking since it's a mounted volume
11 | ENV UV_LINK_MODE=copy
12 | 
13 | # Install the project's dependencies using the lockfile and settings
14 | RUN --mount=type=cache,target=/root/.cache/uv \
15 |     --mount=type=bind,source=uv.lock,target=uv.lock \
16 |     --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
17 |     uv sync --frozen --no-install-project --no-dev --no-editable
18 | 
19 | # Then, add the rest of the project source code and install it
20 | # Installing separately from its dependencies allows optimal layer caching
21 | ADD . /app
22 | RUN --mount=type=cache,target=/root/.cache/uv \
23 |     uv sync --frozen --no-dev --no-editable
24 | 
25 | FROM python:3.12-slim-bookworm
26 | 
27 | WORKDIR /app
28 |  
29 | COPY --from=uv /root/.local /root/.local
30 | COPY --from=uv --chown=app:app /app/.venv /app/.venv
31 | 
32 | # Place executables in the environment at the front of the path
33 | ENV PATH="/app/.venv/bin:$PATH"
34 | 
35 | # when running the container, add --db-path and a bind mount to the host's db file
36 | ENTRYPOINT ["mcp-server-sqlite"]
37 | 
38 | 


--------------------------------------------------------------------------------
/src/sqlite/README.md:
--------------------------------------------------------------------------------
  1 | # SQLite MCP Server
  2 | 
  3 | ## Overview
  4 | A Model Context Protocol (MCP) server implementation that provides database interaction and business intelligence capabilities through SQLite. This server enables running SQL queries, analyzing business data, and automatically generating business insight memos.
  5 | 
  6 | ## Components
  7 | 
  8 | ### Resources
  9 | The server exposes a single dynamic resource:
 10 | - `memo://insights`: A continuously updated business insights memo that aggregates discovered insights during analysis
 11 |   - Auto-updates as new insights are discovered via the append-insight tool
 12 | 
 13 | ### Prompts
 14 | The server provides a demonstration prompt:
 15 | - `mcp-demo`: Interactive prompt that guides users through database operations
 16 |   - Required argument: `topic` - The business domain to analyze
 17 |   - Generates appropriate database schemas and sample data
 18 |   - Guides users through analysis and insight generation
 19 |   - Integrates with the business insights memo
 20 | 
 21 | ### Tools
 22 | The server offers six core tools:
 23 | 
 24 | #### Query Tools
 25 | - `read_query`
 26 |    - Execute SELECT queries to read data from the database
 27 |    - Input:
 28 |      - `query` (string): The SELECT SQL query to execute
 29 |    - Returns: Query results as array of objects
 30 | 
 31 | - `write_query`
 32 |    - Execute INSERT, UPDATE, or DELETE queries
 33 |    - Input:
 34 |      - `query` (string): The SQL modification query
 35 |    - Returns: `{ affected_rows: number }`
 36 | 
 37 | - `create_table`
 38 |    - Create new tables in the database
 39 |    - Input:
 40 |      - `query` (string): CREATE TABLE SQL statement
 41 |    - Returns: Confirmation of table creation
 42 | 
 43 | #### Schema Tools
 44 | - `list_tables`
 45 |    - Get a list of all tables in the database
 46 |    - No input required
 47 |    - Returns: Array of table names
 48 | 
 49 | - `describe-table`
 50 |    - View schema information for a specific table
 51 |    - Input:
 52 |      - `table_name` (string): Name of table to describe
 53 |    - Returns: Array of column definitions with names and types
 54 | 
 55 | #### Analysis Tools
 56 | - `append_insight`
 57 |    - Add new business insights to the memo resource
 58 |    - Input:
 59 |      - `insight` (string): Business insight discovered from data analysis
 60 |    - Returns: Confirmation of insight addition
 61 |    - Triggers update of memo://insights resource
 62 | 
 63 | 
 64 | ## Usage with Claude Desktop
 65 | 
 66 | ### uv
 67 | 
 68 | ```bash
 69 | # Add the server to your claude_desktop_config.json
 70 | "mcpServers": {
 71 |   "sqlite": {
 72 |     "command": "uv",
 73 |     "args": [
 74 |       "--directory",
 75 |       "parent_of_servers_repo/servers/src/sqlite",
 76 |       "run",
 77 |       "mcp-server-sqlite",
 78 |       "--db-path",
 79 |       "~/test.db"
 80 |     ]
 81 |   }
 82 | }
 83 | ```
 84 | 
 85 | ### Docker
 86 | 
 87 | ```json
 88 | # Add the server to your claude_desktop_config.json
 89 | "mcpServers": {
 90 |   "sqlite": {
 91 |     "command": "docker",
 92 |     "args": [
 93 |       "run",
 94 |       "--rm",
 95 |       "-i",
 96 |       "-v",
 97 |       "mcp-test:/mcp",
 98 |       "mcp/sqlite",
 99 |       "--db-path",
100 |       "/mcp/test.db"
101 |     ]
102 |   }
103 | }
104 | ```
105 | 
106 | ## Building
107 | 
108 | Docker:
109 | 
110 | ```bash
111 | docker build -t mcp/sqlite .
112 | ```
113 | 
114 | ## License
115 | 
116 | This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
117 | 


--------------------------------------------------------------------------------
/src/sqlite/pyproject.toml:
--------------------------------------------------------------------------------
 1 | [project]
 2 | name = "mcp-server-sqlite"
 3 | version = "0.6.2"
 4 | description = "A simple SQLite MCP server"
 5 | readme = "README.md"
 6 | requires-python = ">=3.10"
 7 | dependencies = ["mcp>=1.0.0"]
 8 | 
 9 | [build-system]
10 | requires = ["hatchling"]
11 | build-backend = "hatchling.build"
12 | 
13 | [tool.uv]
14 | dev-dependencies = ["pyright>=1.1.389"]
15 | 
16 | [project.scripts]
17 | mcp-server-sqlite = "mcp_server_sqlite:main"
18 | 


--------------------------------------------------------------------------------
/src/sqlite/src/mcp_server_sqlite/__init__.py:
--------------------------------------------------------------------------------
 1 | from . import server
 2 | import asyncio
 3 | import argparse
 4 | 
 5 | 
 6 | def main():
 7 |     """Main entry point for the package."""
 8 |     parser = argparse.ArgumentParser(description='SQLite MCP Server')
 9 |     parser.add_argument('--db-path', 
10 |                        default="./sqlite_mcp_server.db",
11 |                        help='Path to SQLite database file')
12 |     
13 |     args = parser.parse_args()
14 |     asyncio.run(server.main(args.db_path))
15 | 
16 | 
17 | # Optionally expose other important items at package level
18 | __all__ = ["main", "server"]
19 | 


--------------------------------------------------------------------------------
/src/time/.python-version:
--------------------------------------------------------------------------------
1 | 3.10
2 | 


--------------------------------------------------------------------------------
/src/time/Dockerfile:
--------------------------------------------------------------------------------
 1 | # Use a Python image with uv pre-installed
 2 | FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim AS uv
 3 | 
 4 | # Install the project into `/app`
 5 | WORKDIR /app
 6 | 
 7 | # Enable bytecode compilation
 8 | ENV UV_COMPILE_BYTECODE=1
 9 | 
10 | # Copy from the cache instead of linking since it's a mounted volume
11 | ENV UV_LINK_MODE=copy
12 | 
13 | # Install the project's dependencies using the lockfile and settings
14 | RUN --mount=type=cache,target=/root/.cache/uv \
15 |     --mount=type=bind,source=uv.lock,target=uv.lock \
16 |     --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
17 |     uv sync --frozen --no-install-project --no-dev --no-editable
18 | 
19 | # Then, add the rest of the project source code and install it
20 | # Installing separately from its dependencies allows optimal layer caching
21 | ADD . /app
22 | RUN --mount=type=cache,target=/root/.cache/uv \
23 |     uv sync --frozen --no-dev --no-editable
24 | 
25 | FROM python:3.12-slim-bookworm
26 | 
27 | WORKDIR /app
28 |  
29 | COPY --from=uv /root/.local /root/.local
30 | COPY --from=uv --chown=app:app /app/.venv /app/.venv
31 | 
32 | # Place executables in the environment at the front of the path
33 | ENV PATH="/app/.venv/bin:$PATH"
34 | 
35 | # when running the container, add --db-path and a bind mount to the host's db file
36 | ENTRYPOINT ["mcp-server-time"]
37 | 


--------------------------------------------------------------------------------
/src/time/README.md:
--------------------------------------------------------------------------------
  1 | # Time MCP Server
  2 | 
  3 | A Model Context Protocol server that provides time and timezone conversion capabilities. This server enables LLMs to get current time information and perform timezone conversions using IANA timezone names, with automatic system timezone detection.
  4 | 
  5 | ### Available Tools
  6 | 
  7 | - `get_current_time` - Get current time in a specific timezone or system timezone.
  8 |   - Required arguments:
  9 |     - `timezone` (string): IANA timezone name (e.g., 'America/New_York', 'Europe/London')
 10 | 
 11 | - `convert_time` - Convert time between timezones.
 12 |   - Required arguments:
 13 |     - `source_timezone` (string): Source IANA timezone name
 14 |     - `time` (string): Time in 24-hour format (HH:MM)
 15 |     - `target_timezone` (string): Target IANA timezone name
 16 | 
 17 | ## Installation
 18 | 
 19 | ### Using uv (recommended)
 20 | 
 21 | When using [`uv`](https://docs.astral.sh/uv/) no specific installation is needed. We will
 22 | use [`uvx`](https://docs.astral.sh/uv/guides/tools/) to directly run *mcp-server-time*.
 23 | 
 24 | ### Using PIP
 25 | 
 26 | Alternatively you can install `mcp-server-time` via pip:
 27 | 
 28 | ```bash
 29 | pip install mcp-server-time
 30 | ```
 31 | 
 32 | After installation, you can run it as a script using:
 33 | 
 34 | ```bash
 35 | python -m mcp_server_time
 36 | ```
 37 | 
 38 | ## Configuration
 39 | 
 40 | ### Configure for Claude.app
 41 | 
 42 | Add to your Claude settings:
 43 | 
 44 | <details>
 45 | <summary>Using uvx</summary>
 46 | 
 47 | ```json
 48 | "mcpServers": {
 49 |   "time": {
 50 |     "command": "uvx",
 51 |     "args": ["mcp-server-time"]
 52 |   }
 53 | }
 54 | ```
 55 | </details>
 56 | 
 57 | <details>
 58 | <summary>Using docker</summary>
 59 | 
 60 | ```json
 61 | "mcpServers": {
 62 |   "time": {
 63 |     "command": "docker",
 64 |     "args": ["run", "-i", "--rm", "mcp/time"]
 65 |   }
 66 | }
 67 | ```
 68 | </details>
 69 | 
 70 | <details>
 71 | <summary>Using pip installation</summary>
 72 | 
 73 | ```json
 74 | "mcpServers": {
 75 |   "time": {
 76 |     "command": "python",
 77 |     "args": ["-m", "mcp_server_time"]
 78 |   }
 79 | }
 80 | ```
 81 | </details>
 82 | 
 83 | ### Configure for Zed
 84 | 
 85 | Add to your Zed settings.json:
 86 | 
 87 | <details>
 88 | <summary>Using uvx</summary>
 89 | 
 90 | ```json
 91 | "context_servers": [
 92 |   "mcp-server-time": {
 93 |     "command": "uvx",
 94 |     "args": ["mcp-server-time"]
 95 |   }
 96 | ],
 97 | ```
 98 | </details>
 99 | 
100 | <details>
101 | <summary>Using pip installation</summary>
102 | 
103 | ```json
104 | "context_servers": {
105 |   "mcp-server-time": {
106 |     "command": "python",
107 |     "args": ["-m", "mcp_server_time"]
108 |   }
109 | },
110 | ```
111 | </details>
112 | 
113 | ### Customization - System Timezone
114 | 
115 | By default, the server automatically detects your system's timezone. You can override this by adding the argument `--local-timezone` to the `args` list in the configuration.
116 | 
117 | Example:
118 | ```json
119 | {
120 |   "command": "python",
121 |   "args": ["-m", "mcp_server_time", "--local-timezone=America/New_York"]
122 | }
123 | ```
124 | 
125 | ## Example Interactions
126 | 
127 | 1. Get current time:
128 | ```json
129 | {
130 |   "name": "get_current_time",
131 |   "arguments": {
132 |     "timezone": "Europe/Warsaw"
133 |   }
134 | }
135 | ```
136 | Response:
137 | ```json
138 | {
139 |   "timezone": "Europe/Warsaw",
140 |   "datetime": "2024-01-01T13:00:00+01:00",
141 |   "is_dst": false
142 | }
143 | ```
144 | 
145 | 2. Convert time between timezones:
146 | ```json
147 | {
148 |   "name": "convert_time",
149 |   "arguments": {
150 |     "source_timezone": "America/New_York",
151 |     "time": "16:30",
152 |     "target_timezone": "Asia/Tokyo"
153 |   }
154 | }
155 | ```
156 | Response:
157 | ```json
158 | {
159 |   "source": {
160 |     "timezone": "America/New_York",
161 |     "datetime": "2024-01-01T12:30:00-05:00",
162 |     "is_dst": false
163 |   },
164 |   "target": {
165 |     "timezone": "Asia/Tokyo",
166 |     "datetime": "2024-01-01T12:30:00+09:00",
167 |     "is_dst": false
168 |   },
169 |   "time_difference": "+13.0h",
170 | }
171 | ```
172 | 
173 | ## Debugging
174 | 
175 | You can use the MCP inspector to debug the server. For uvx installations:
176 | 
177 | ```bash
178 | npx @modelcontextprotocol/inspector uvx mcp-server-time
179 | ```
180 | 
181 | Or if you've installed the package in a specific directory or are developing on it:
182 | 
183 | ```bash
184 | cd path/to/servers/src/time
185 | npx @modelcontextprotocol/inspector uv run mcp-server-time
186 | ```
187 | 
188 | ## Examples of Questions for Claude
189 | 
190 | 1. "What time is it now?" (will use system timezone)
191 | 2. "What time is it in Tokyo?"
192 | 3. "When it's 4 PM in New York, what time is it in London?"
193 | 4. "Convert 9:30 AM Tokyo time to New York time"
194 | 
195 | ## Build
196 | 
197 | Docker build:
198 | 
199 | ```bash
200 | cd src/time
201 | docker build -t mcp/time .
202 | ```
203 | 
204 | ## Contributing
205 | 
206 | We encourage contributions to help expand and improve mcp-server-time. Whether you want to add new time-related tools, enhance existing functionality, or improve documentation, your input is valuable.
207 | 
208 | For examples of other MCP servers and implementation patterns, see:
209 | https://github.com/modelcontextprotocol/servers
210 | 
211 | Pull requests are welcome! Feel free to contribute new ideas, bug fixes, or enhancements to make mcp-server-time even more powerful and useful.
212 | 
213 | ## License
214 | 
215 | mcp-server-time is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
216 | 


--------------------------------------------------------------------------------
/src/time/pyproject.toml:
--------------------------------------------------------------------------------
 1 | [project]
 2 | name = "mcp-server-time"
 3 | version = "0.6.2"
 4 | description = "A Model Context Protocol server providing tools for time queries and timezone conversions for LLMs"
 5 | readme = "README.md"
 6 | requires-python = ">=3.10"
 7 | authors = [
 8 |     { name = "Mariusz 'maledorak' Korzekwa", email = "mariusz@korzekwa.dev" },
 9 | ]
10 | keywords = ["time", "timezone", "mcp", "llm"]
11 | license = { text = "MIT" }
12 | classifiers = [
13 |     "Development Status :: 4 - Beta",
14 |     "Intended Audience :: Developers",
15 |     "License :: OSI Approved :: MIT License",
16 |     "Programming Language :: Python :: 3",
17 |     "Programming Language :: Python :: 3.10",
18 | ]
19 | dependencies = [
20 |     "mcp>=1.0.0",
21 |     "pydantic>=2.0.0",
22 |     "tzdata>=2024.2",
23 | ]
24 | 
25 | [project.scripts]
26 | mcp-server-time = "mcp_server_time:main"
27 | 
28 | [build-system]
29 | requires = ["hatchling"]
30 | build-backend = "hatchling.build"
31 | 
32 | [tool.uv]
33 | dev-dependencies = [
34 |     "freezegun>=1.5.1",
35 |     "pyright>=1.1.389",
36 |     "pytest>=8.3.3",
37 |     "ruff>=0.8.1",
38 | ]
39 | 


--------------------------------------------------------------------------------
/src/time/src/mcp_server_time/__init__.py:
--------------------------------------------------------------------------------
 1 | from .server import serve
 2 | 
 3 | 
 4 | def main():
 5 |     """MCP Time Server - Time and timezone conversion functionality for MCP"""
 6 |     import argparse
 7 |     import asyncio
 8 | 
 9 |     parser = argparse.ArgumentParser(
10 |         description="give a model the ability to handle time queries and timezone conversions"
11 |     )
12 |     parser.add_argument("--local-timezone", type=str, help="Override local timezone")
13 | 
14 |     args = parser.parse_args()
15 |     asyncio.run(serve(args.local_timezone))
16 | 
17 | 
18 | if __name__ == "__main__":
19 |     main()
20 | 


--------------------------------------------------------------------------------
/src/time/src/mcp_server_time/__main__.py:
--------------------------------------------------------------------------------
1 | from mcp_server_time import main
2 | 
3 | main()
4 | 


--------------------------------------------------------------------------------
/src/time/src/mcp_server_time/server.py:
--------------------------------------------------------------------------------
  1 | from datetime import datetime, timedelta
  2 | from enum import Enum
  3 | import json
  4 | from typing import Sequence
  5 | 
  6 | from zoneinfo import ZoneInfo
  7 | from mcp.server import Server
  8 | from mcp.server.stdio import stdio_server
  9 | from mcp.types import Tool, TextContent, ImageContent, EmbeddedResource
 10 | from mcp.shared.exceptions import McpError
 11 | 
 12 | from pydantic import BaseModel
 13 | 
 14 | 
 15 | class TimeTools(str, Enum):
 16 |     GET_CURRENT_TIME = "get_current_time"
 17 |     CONVERT_TIME = "convert_time"
 18 | 
 19 | 
 20 | class TimeResult(BaseModel):
 21 |     timezone: str
 22 |     datetime: str
 23 |     is_dst: bool
 24 | 
 25 | 
 26 | class TimeConversionResult(BaseModel):
 27 |     source: TimeResult
 28 |     target: TimeResult
 29 |     time_difference: str
 30 | 
 31 | 
 32 | class TimeConversionInput(BaseModel):
 33 |     source_tz: str
 34 |     time: str
 35 |     target_tz_list: list[str]
 36 | 
 37 | 
 38 | def get_local_tz(local_tz_override: str | None = None) -> ZoneInfo:
 39 |     if local_tz_override:
 40 |         return ZoneInfo(local_tz_override)
 41 | 
 42 |     # Get local timezone from datetime.now()
 43 |     tzinfo = datetime.now().astimezone(tz=None).tzinfo
 44 |     if tzinfo is not None:
 45 |         return ZoneInfo(str(tzinfo))
 46 |     raise McpError("Could not determine local timezone - tzinfo is None")
 47 | 
 48 | 
 49 | def get_zoneinfo(timezone_name: str) -> ZoneInfo:
 50 |     try:
 51 |         return ZoneInfo(timezone_name)
 52 |     except Exception as e:
 53 |         raise McpError(f"Invalid timezone: {str(e)}")
 54 | 
 55 | 
 56 | class TimeServer:
 57 |     def get_current_time(self, timezone_name: str) -> TimeResult:
 58 |         """Get current time in specified timezone"""
 59 |         timezone = get_zoneinfo(timezone_name)
 60 |         current_time = datetime.now(timezone)
 61 | 
 62 |         return TimeResult(
 63 |             timezone=timezone_name,
 64 |             datetime=current_time.isoformat(timespec="seconds"),
 65 |             is_dst=bool(current_time.dst()),
 66 |         )
 67 | 
 68 |     def convert_time(
 69 |         self, source_tz: str, time_str: str, target_tz: str
 70 |     ) -> TimeConversionResult:
 71 |         """Convert time between timezones"""
 72 |         source_timezone = get_zoneinfo(source_tz)
 73 |         target_timezone = get_zoneinfo(target_tz)
 74 | 
 75 |         try:
 76 |             parsed_time = datetime.strptime(time_str, "%H:%M").time()
 77 |         except ValueError:
 78 |             raise ValueError("Invalid time format. Expected HH:MM [24-hour format]")
 79 | 
 80 |         now = datetime.now(source_timezone)
 81 |         source_time = datetime(
 82 |             now.year,
 83 |             now.month,
 84 |             now.day,
 85 |             parsed_time.hour,
 86 |             parsed_time.minute,
 87 |             tzinfo=source_timezone,
 88 |         )
 89 | 
 90 |         target_time = source_time.astimezone(target_timezone)
 91 |         source_offset = source_time.utcoffset() or timedelta()
 92 |         target_offset = target_time.utcoffset() or timedelta()
 93 |         hours_difference = (target_offset - source_offset).total_seconds() / 3600
 94 | 
 95 |         if hours_difference.is_integer():
 96 |             time_diff_str = f"{hours_difference:+.1f}h"
 97 |         else:
 98 |             # For fractional hours like Nepal's UTC+5:45
 99 |             time_diff_str = f"{hours_difference:+.2f}".rstrip("0").rstrip(".") + "h"
100 | 
101 |         return TimeConversionResult(
102 |             source=TimeResult(
103 |                 timezone=source_tz,
104 |                 datetime=source_time.isoformat(timespec="seconds"),
105 |                 is_dst=bool(source_time.dst()),
106 |             ),
107 |             target=TimeResult(
108 |                 timezone=target_tz,
109 |                 datetime=target_time.isoformat(timespec="seconds"),
110 |                 is_dst=bool(target_time.dst()),
111 |             ),
112 |             time_difference=time_diff_str,
113 |         )
114 | 
115 | 
116 | async def serve(local_timezone: str | None = None) -> None:
117 |     server = Server("mcp-time")
118 |     time_server = TimeServer()
119 |     local_tz = str(get_local_tz(local_timezone))
120 | 
121 |     @server.list_tools()
122 |     async def list_tools() -> list[Tool]:
123 |         """List available time tools."""
124 |         return [
125 |             Tool(
126 |                 name=TimeTools.GET_CURRENT_TIME.value,
127 |                 description="Get current time in a specific timezones",
128 |                 inputSchema={
129 |                     "type": "object",
130 |                     "properties": {
131 |                         "timezone": {
132 |                             "type": "string",
133 |                             "description": f"IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use '{local_tz}' as local timezone if no timezone provided by the user.",
134 |                         }
135 |                     },
136 |                     "required": ["timezone"],
137 |                 },
138 |             ),
139 |             Tool(
140 |                 name=TimeTools.CONVERT_TIME.value,
141 |                 description="Convert time between timezones",
142 |                 inputSchema={
143 |                     "type": "object",
144 |                     "properties": {
145 |                         "source_timezone": {
146 |                             "type": "string",
147 |                             "description": f"Source IANA timezone name (e.g., 'America/New_York', 'Europe/London'). Use '{local_tz}' as local timezone if no source timezone provided by the user.",
148 |                         },
149 |                         "time": {
150 |                             "type": "string",
151 |                             "description": "Time to convert in 24-hour format (HH:MM)",
152 |                         },
153 |                         "target_timezone": {
154 |                             "type": "string",
155 |                             "description": f"Target IANA timezone name (e.g., 'Asia/Tokyo', 'America/San_Francisco'). Use '{local_tz}' as local timezone if no target timezone provided by the user.",
156 |                         },
157 |                     },
158 |                     "required": ["source_timezone", "time", "target_timezone"],
159 |                 },
160 |             ),
161 |         ]
162 | 
163 |     @server.call_tool()
164 |     async def call_tool(
165 |         name: str, arguments: dict
166 |     ) -> Sequence[TextContent | ImageContent | EmbeddedResource]:
167 |         """Handle tool calls for time queries."""
168 |         try:
169 |             match name:
170 |                 case TimeTools.GET_CURRENT_TIME.value:
171 |                     timezone = arguments.get("timezone")
172 |                     if not timezone:
173 |                         raise ValueError("Missing required argument: timezone")
174 | 
175 |                     result = time_server.get_current_time(timezone)
176 | 
177 |                 case TimeTools.CONVERT_TIME.value:
178 |                     if not all(
179 |                         k in arguments
180 |                         for k in ["source_timezone", "time", "target_timezone"]
181 |                     ):
182 |                         raise ValueError("Missing required arguments")
183 | 
184 |                     result = time_server.convert_time(
185 |                         arguments["source_timezone"],
186 |                         arguments["time"],
187 |                         arguments["target_timezone"],
188 |                     )
189 |                 case _:
190 |                     raise ValueError(f"Unknown tool: {name}")
191 | 
192 |             return [
193 |                 TextContent(type="text", text=json.dumps(result.model_dump(), indent=2))
194 |             ]
195 | 
196 |         except Exception as e:
197 |             raise ValueError(f"Error processing mcp-server-time query: {str(e)}")
198 | 
199 |     options = server.create_initialization_options()
200 |     async with stdio_server() as (read_stream, write_stream):
201 |         await server.run(read_stream, write_stream, options)
202 | 


---------------------------------------------------------