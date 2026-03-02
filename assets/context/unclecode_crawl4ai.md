├── .env.txt
├── .gitattributes
├── .github
    ├── DISCUSSION_TEMPLATE
    │   └── feature-requests.yml
    ├── ISSUE_TEMPLATE
    │   ├── bug_report.yml
    │   └── config.yml
    ├── pull_request_template.md
    └── workflows
    │   └── main.yml
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTORS.md
├── Dockerfile
├── LICENSE
├── MANIFEST.in
├── MISSION.md
├── README.md
├── ROADMAP.md
├── cliff.toml
├── crawl4ai
    ├── __init__.py
    ├── __version__.py
    ├── async_configs.py
    ├── async_crawler_strategy.py
    ├── async_database.py
    ├── async_dispatcher.py
    ├── async_logger.py
    ├── async_webcrawler.py
    ├── browser
    │   ├── __init__.py
    │   ├── docker
    │   │   ├── connect.Dockerfile
    │   │   └── launch.Dockerfile
    │   ├── docker_config.py
    │   ├── docker_registry.py
    │   ├── docker_strategy.py
    │   ├── docker_utils.py
    │   ├── manager.py
    │   ├── models.py
    │   ├── profiles.py
    │   ├── strategies.py
    │   └── utils.py
    ├── browser_manager.py
    ├── browser_profiler.py
    ├── cache_context.py
    ├── chunking_strategy.py
    ├── cli.py
    ├── components
    │   └── crawler_monitor.py
    ├── config.py
    ├── content_filter_strategy.py
    ├── content_scraping_strategy.py
    ├── crawlers
    │   ├── __init__.py
    │   ├── amazon_product
    │   │   ├── __init__.py
    │   │   └── crawler.py
    │   └── google_search
    │   │   ├── __init__.py
    │   │   ├── crawler.py
    │   │   └── script.js
    ├── deep_crawling
    │   ├── __init__.py
    │   ├── base_strategy.py
    │   ├── bff_strategy.py
    │   ├── bfs_strategy.py
    │   ├── crazy.py
    │   ├── dfs_strategy.py
    │   ├── filters.py
    │   └── scorers.py
    ├── docker_client.py
    ├── extraction_strategy.py
    ├── html2text
    │   ├── __init__.py
    │   ├── __main__.py
    │   ├── _typing.py
    │   ├── cli.py
    │   ├── config.py
    │   ├── elements.py
    │   └── utils.py
    ├── hub.py
    ├── install.py
    ├── js_snippet
    │   ├── __init__.py
    │   ├── navigator_overrider.js
    │   ├── remove_overlay_elements.js
    │   └── update_image_dimensions.js
    ├── legacy
    │   ├── __init__.py
    │   ├── cli.py
    │   ├── crawler_strategy.py
    │   ├── database.py
    │   ├── docs_manager.py
    │   ├── llmtxt.py
    │   ├── version_manager.py
    │   └── web_crawler.py
    ├── markdown_generation_strategy.py
    ├── migrations.py
    ├── model_loader.py
    ├── models.py
    ├── processors
    │   └── pdf
    │   │   ├── __init__.py
    │   │   ├── processor.py
    │   │   └── utils.py
    ├── prompts.py
    ├── proxy_strategy.py
    ├── ssl_certificate.py
    ├── types.py
    ├── user_agent_generator.py
    └── utils.py
├── deploy
    └── docker
    │   ├── .dockerignore
    │   ├── .llm.env.example
    │   ├── README.md
    │   ├── api.py
    │   ├── auth.py
    │   ├── config.yml
    │   ├── requirements.txt
    │   ├── server.py
    │   ├── supervisord.conf
    │   └── utils.py
├── docker-compose.yml
├── docs
    ├── assets
    │   ├── pitch-dark.png
    │   ├── pitch-dark.svg
    │   ├── powered-by-dark.svg
    │   ├── powered-by-disco.svg
    │   ├── powered-by-light.svg
    │   └── powered-by-night.svg
    ├── deprecated
    │   └── docker-deployment.md
    ├── examples
    │   ├── README_BUILTIN_BROWSER.md
    │   ├── amazon_product_extraction_direct_url.py
    │   ├── amazon_product_extraction_using_hooks.py
    │   ├── amazon_product_extraction_using_use_javascript.py
    │   ├── arun_vs_arun_many.py
    │   ├── assets
    │   │   ├── audio.mp3
    │   │   ├── basic.png
    │   │   ├── cosine_extraction.png
    │   │   ├── css_js.png
    │   │   ├── css_selector.png
    │   │   ├── exec_script.png
    │   │   ├── llm_extraction.png
    │   │   ├── semantic_extraction_cosine.png
    │   │   └── semantic_extraction_llm.png
    │   ├── async_webcrawler_multiple_urls_example.py
    │   ├── browser_optimization_example.py
    │   ├── builtin_browser_example.py
    │   ├── chainlit.md
    │   ├── cli
    │   │   ├── browser.yml
    │   │   ├── crawler.yml
    │   │   ├── css_schema.json
    │   │   ├── extract.yml
    │   │   ├── extract_css.yml
    │   │   └── llm_schema.json
    │   ├── crawlai_vs_firecrawl.py
    │   ├── crawler_monitor_example.py
    │   ├── crypto_analysis_example.py
    │   ├── deepcrawl_example.py
    │   ├── dispatcher_example.py
    │   ├── docker_config_obj.py
    │   ├── docker_example.py
    │   ├── docker_python_rest_api.py
    │   ├── docker_python_sdk.py
    │   ├── extraction_strategies_examples.py
    │   ├── full_page_screenshot_and_pdf_export.md
    │   ├── hello_world.py
    │   ├── hooks_example.py
    │   ├── identity_based_browsing.py
    │   ├── language_support_example.py
    │   ├── llm_extraction_openai_pricing.py
    │   ├── llm_markdown_generator.py
    │   ├── proxy_rotation_demo.py
    │   ├── quickstart.ipynb
    │   ├── quickstart.py
    │   ├── quickstart_examples_set_1.py
    │   ├── quickstart_examples_set_2.py
    │   ├── research_assistant.py
    │   ├── rest_call.py
    │   ├── sample_ecommerce.html
    │   ├── scraping_strategies_performance.py
    │   ├── serp_api_project_11_feb.py
    │   ├── ssl_example.py
    │   ├── storage_state_tutorial.md
    │   ├── summarize_page.py
    │   ├── tutorial_dynamic_clicks.md
    │   └── tutorial_v0.5.py
    ├── md_v2
    │   ├── advanced
    │   │   ├── advanced-features.md
    │   │   ├── crawl-dispatcher.md
    │   │   ├── file-downloading.md
    │   │   ├── hooks-auth.md
    │   │   ├── identity-based-crawling.md
    │   │   ├── lazy-loading.md
    │   │   ├── multi-url-crawling.md
    │   │   ├── proxy-security.md
    │   │   ├── session-management.md
    │   │   └── ssl-certificate.md
    │   ├── api
    │   │   ├── arun.md
    │   │   ├── arun_many.md
    │   │   ├── async-webcrawler.md
    │   │   ├── crawl-result.md
    │   │   ├── parameters.md
    │   │   └── strategies.md
    │   ├── assets
    │   │   ├── DankMono-Bold.woff2
    │   │   ├── DankMono-Italic.woff2
    │   │   ├── DankMono-Regular.woff2
    │   │   ├── Monaco.woff
    │   │   ├── dmvendor.css
    │   │   ├── docs.zip
    │   │   ├── highlight.css
    │   │   ├── highlight.min.js
    │   │   ├── highlight_init.js
    │   │   ├── images
    │   │   │   └── dispatcher.png
    │   │   └── styles.css
    │   ├── basic
    │   │   └── installation.md
    │   ├── blog
    │   │   ├── articles
    │   │   │   └── dockerize_hooks.md
    │   │   ├── index.md
    │   │   └── releases
    │   │   │   ├── 0.4.0.md
    │   │   │   ├── 0.4.1.md
    │   │   │   ├── 0.4.2.md
    │   │   │   ├── 0.5.0.md
    │   │   │   └── v0.4.3b1.md
    │   ├── core
    │   │   ├── browser-crawler-config.md
    │   │   ├── cache-modes.md
    │   │   ├── cli.md
    │   │   ├── content-selection.md
    │   │   ├── crawler-result.md
    │   │   ├── deep-crawling.md
    │   │   ├── docker-deployment.md
    │   │   ├── fit-markdown.md
    │   │   ├── installation.md
    │   │   ├── link-media.md
    │   │   ├── local-files.md
    │   │   ├── markdown-generation.md
    │   │   ├── page-interaction.md
    │   │   ├── quickstart.md
    │   │   └── simple-crawling.md
    │   ├── extraction
    │   │   ├── chunking.md
    │   │   ├── clustring-strategies.md
    │   │   ├── llm-strategies.md
    │   │   └── no-llm-strategies.md
    │   └── index.md
    ├── releases_review
    │   ├── Crawl4AI_v0.3.72_Release_Announcement.ipynb
    │   ├── v0.3.74.overview.py
    │   ├── v0_4_24_walkthrough.py
    │   └── v0_4_3b2_features_demo.py
    └── snippets
    │   └── deep_crawl
    │       ├── 1.intro.py
    │       └── 2.filters.py
├── mkdocs.yml
├── pyproject.toml
├── requirements.txt
├── setup.cfg
├── setup.py
└── tests
    ├── 20241401
        ├── test_acyn_crawl_wuth_http_crawler_strategy.py
        ├── test_advanced_deep_crawl.py
        ├── test_async_crawler_strategy.py
        ├── test_async_markdown_generator.py
        ├── test_async_webcrawler.py
        ├── test_cache_context.py
        ├── test_crawlers.py
        ├── test_deep_crawl.py
        ├── test_deep_crawl_filters.py
        ├── test_deep_crawl_scorers.py
        ├── test_http_crawler_strategy.py
        ├── test_llm_filter.py
        ├── test_robot_parser.py
        ├── test_schema_builder.py
        ├── test_stream.py
        ├── test_stream_dispatch.py
        └── tets_robot.py
    ├── __init__.py
    ├── async
        ├── sample_wikipedia.html
        ├── test_0.4.2_browser_manager.py
        ├── test_0.4.2_config_params.py
        ├── test_async_doanloader.py
        ├── test_basic_crawling.py
        ├── test_caching.py
        ├── test_chunking_and_extraction_strategies.py
        ├── test_content_extraction.py
        ├── test_content_filter_bm25.py
        ├── test_content_filter_prune.py
        ├── test_content_scraper_strategy.py
        ├── test_crawler_strategy.py
        ├── test_database_operations.py
        ├── test_dispatchers.py
        ├── test_edge_cases.py
        ├── test_error_handling.py
        ├── test_evaluation_scraping_methods_performance.configs.py
        ├── test_markdown_genertor.py
        ├── test_parameters_and_options.py
        ├── test_performance.py
        └── test_screenshot.py
    ├── browser
        ├── docker
        │   ├── __init__.py
        │   └── test_docker_browser.py
        ├── test_browser_manager.py
        ├── test_builtin_browser.py
        ├── test_builtin_strategy.py
        ├── test_cdp_strategy.py
        ├── test_combined.py
        ├── test_launch_standalone.py
        ├── test_parallel_crawling.py
        ├── test_playwright_strategy.py
        └── test_profiles.py
    ├── cli
        └── test_cli.py
    ├── docker
        ├── test_config_object.py
        ├── test_docker.py
        ├── test_dockerclient.py
        ├── test_serialization.py
        ├── test_server.py
        └── test_server_token.py
    ├── docker_example.py
    ├── hub
        └── test_simple.py
    ├── loggers
        └── test_logger.py
    ├── memory
        ├── test_crawler_monitor.py
        └── test_dispatcher_stress.py
    ├── test_cli_docs.py
    ├── test_docker.py
    ├── test_llmtxt.py
    ├── test_main.py
    ├── test_scraping_strategy.py
    └── test_web_crawler.py


/.env.txt:
--------------------------------------------------------------------------------
1 | GROQ_API_KEY = "YOUR_GROQ_API"
2 | OPENAI_API_KEY = "YOUR_OPENAI_API"
3 | ANTHROPIC_API_KEY = "YOUR_ANTHROPIC_API"
4 | # You can add more API keys here


--------------------------------------------------------------------------------
/.gitattributes:
--------------------------------------------------------------------------------
 1 | # Documentation
 2 | *.html linguist-documentation
 3 | docs/* linguist-documentation
 4 | docs/examples/* linguist-documentation
 5 | docs/md_v2/* linguist-documentation
 6 | 
 7 | # Explicitly mark Python as the main language
 8 | *.py linguist-detectable=true
 9 | *.py linguist-language=Python
10 | 
11 | # Exclude HTML from language statistics
12 | *.html linguist-detectable=false
13 | 


--------------------------------------------------------------------------------
/.github/DISCUSSION_TEMPLATE/feature-requests.yml:
--------------------------------------------------------------------------------
 1 | title: "[Feature Request]: "
 2 | labels: ["⚙️ New"]
 3 | body:
 4 |   - type: markdown
 5 |     attributes:
 6 |       value: |
 7 |         Thank you for your interest in suggesting a new feature! Before you submit, please take a moment to check if already exists in
 8 |         this discussions category to avoid duplicates. 😊
 9 | 
10 |   - type: textarea
11 |     id: needs_to_be_done
12 |     attributes:
13 |       label: What needs to be done?
14 |       description: Please describe the feature or functionality you'd like to see.
15 |       placeholder: "e.g., Return alt text along with images scraped from a webpages in Result"
16 |     validations:
17 |       required: true
18 | 
19 |   - type: textarea
20 |     id: problem_to_solve
21 |     attributes:
22 |       label: What problem does this solve?
23 |       description: Explain the pain point or issue this feature will help address.
24 |       placeholder: "e.g., Bypass Captchas added by cloudflare"
25 |     validations:
26 |       required: true
27 | 
28 |   - type: textarea
29 |     id: target_users
30 |     attributes:
31 |       label: Target users/beneficiaries
32 |       description: Who would benefit from this feature? (e.g., specific teams, developers, users, etc.)
33 |       placeholder: "e.g., Marketing teams, developers"
34 |     validations:
35 |       required: false
36 | 
37 |   - type: textarea
38 |     id: current_workarounds
39 |     attributes:
40 |       label: Current alternatives/workarounds
41 |       description: Are there any existing solutions or workarounds? How does this feature improve upon them?
42 |       placeholder: "e.g., Users manually select the css classes mapped to data fields to extract them"
43 |     validations:
44 |       required: false
45 | 
46 |   - type: markdown
47 |     attributes:
48 |       value: |
49 |         ### 💡 Implementation Ideas
50 | 
51 |   - type: textarea
52 |     id: proposed_approach
53 |     attributes:
54 |       label: Proposed approach
55 |       description: Share any ideas you have for how this feature could be implemented. Point out any challenges your foresee
56 |        and the success metrics for this feature
57 |       placeholder: "e.g., Implement a breadth first traversal algorithm for scraper"
58 |     validations:
59 |       required: false
60 | 


--------------------------------------------------------------------------------
/.github/ISSUE_TEMPLATE/bug_report.yml:
--------------------------------------------------------------------------------
  1 | name: Bug Report
  2 | description: Report a bug with the Crawl4AI.
  3 | title: "[Bug]: "
  4 | labels: ["🐞 Bug","🩺 Needs Triage"]
  5 | body:
  6 |   - type: input
  7 |     id: crawl4ai_version
  8 |     attributes:
  9 |       label: crawl4ai version
 10 |       description: Specify the version of crawl4ai you are using.
 11 |       placeholder: "e.g., 2.0.0"
 12 |     validations:
 13 |       required: true
 14 | 
 15 |   - type: textarea
 16 |     id: expected_behavior
 17 |     attributes:
 18 |       label: Expected Behavior
 19 |       description: Describe what you expected to happen.
 20 |       placeholder: "Provide a detailed explanation of the expected outcome."
 21 |     validations:
 22 |       required: true
 23 | 
 24 |   - type: textarea
 25 |     id: current_behavior
 26 |     attributes:
 27 |       label: Current Behavior
 28 |       description: Describe what is happening instead of the expected behavior.
 29 |       placeholder: "Describe the actual result or issue you encountered."
 30 |     validations:
 31 |       required: true
 32 | 
 33 |   - type: dropdown
 34 |     id: reproducible
 35 |     attributes:
 36 |       label: Is this reproducible?
 37 |       description: Indicate whether this bug can be reproduced consistently.
 38 |       options:
 39 |         - "Yes"
 40 |         - "No"
 41 |     validations:
 42 |       required: true
 43 | 
 44 |   - type: textarea
 45 |     id: inputs
 46 |     attributes:
 47 |       label: Inputs Causing the Bug
 48 |       description: Provide details about the inputs causing the issue.
 49 |       placeholder: |
 50 |         - URL(s): 
 51 |         - Settings used: 
 52 |         - Input data (if applicable): 
 53 |       render: bash
 54 |   
 55 |   - type: textarea
 56 |     id: steps_to_reproduce
 57 |     attributes:
 58 |       label: Steps to Reproduce
 59 |       description: Provide step-by-step instructions to reproduce the issue.
 60 |       placeholder: |
 61 |         1. Go to...
 62 |         2. Click on...
 63 |         3. Observe the issue...
 64 |       render: bash
 65 |   
 66 |   - type: textarea
 67 |     id: code_snippets
 68 |     attributes:
 69 |       label: Code snippets
 70 |       description: Provide code snippets(if any). Add comments as necessary
 71 |       placeholder: print("Hello world")
 72 |       render: python
 73 | 
 74 |   # Header Section with Title
 75 |   - type: markdown
 76 |     attributes:
 77 |       value: |
 78 |           ## Supporting Information
 79 |           Please provide the following details to help us understand and resolve your issue. This will assist us in reproducing and diagnosing the problem
 80 | 
 81 |   - type: input
 82 |     id: os
 83 |     attributes:
 84 |       label: OS
 85 |       description: Please provide the operating system & distro where the issue occurs.
 86 |       placeholder: "e.g., Windows, macOS, Linux"
 87 |     validations:
 88 |       required: true
 89 | 
 90 |   - type: input
 91 |     id: python_version
 92 |     attributes:
 93 |       label: Python version
 94 |       description: Specify the Python version being used.
 95 |       placeholder: "e.g., 3.8.5"
 96 |     validations:
 97 |       required: true
 98 | 
 99 |   # Browser Field
100 |   - type: input
101 |     id: browser
102 |     attributes:
103 |       label: Browser
104 |       description: Provide the name of the browser you are using.
105 |       placeholder: "e.g., Chrome, Firefox, Safari"
106 |     validations:
107 |       required: false
108 | 
109 |   # Browser Version Field
110 |   - type: input
111 |     id: browser_version
112 |     attributes:
113 |       label: Browser version
114 |       description: Provide the version of the browser you are using.
115 |       placeholder: "e.g., 91.0.4472.124"
116 |     validations:
117 |       required: false
118 | 
119 |   # Error Logs Field (Text Area)
120 |   - type: textarea
121 |     id: error_logs
122 |     attributes:
123 |       label: Error logs & Screenshots (if applicable)
124 |       description: If you encountered any errors, please provide the error logs. Attach any relevant screenshots to help us understand the issue.
125 |       placeholder: "Paste error logs here and attach your screenshots"
126 |     validations:
127 |       required: false
128 | 


--------------------------------------------------------------------------------
/.github/ISSUE_TEMPLATE/config.yml:
--------------------------------------------------------------------------------
1 | blank_issues_enabled: false
2 | contact_links:
3 |   - name: Feature Requests
4 |     url: https://github.com/unclecode/crawl4ai/discussions/categories/feature-requests
5 |     about: "Suggest new features or enhancements for Crawl4AI"
6 |   - name: Forums - Q&A
7 |     url: https://github.com/unclecode/crawl4ai/discussions/categories/forums-q-a
8 |     about: "Ask questions or engage in general discussions about Crawl4AI"
9 | 


--------------------------------------------------------------------------------
/.github/pull_request_template.md:
--------------------------------------------------------------------------------
 1 | ## Summary
 2 | Please include a summary of the change and/or which issues are fixed.
 3 | 
 4 | eg: `Fixes #123` (Tag GitHub issue numbers in this format, so it automatically links the issues with your PR)
 5 | 
 6 | ## List of files changed and why
 7 | eg: quickstart.py - To update the example as per new changes
 8 | 
 9 | ## How Has This Been Tested?
10 | Please describe the tests that you ran to verify your changes.
11 | 
12 | ## Checklist:
13 | 
14 | - [ ] My code follows the style guidelines of this project
15 | - [ ] I have performed a self-review of my own code
16 | - [ ] I have commented my code, particularly in hard-to-understand areas
17 | - [ ] I have made corresponding changes to the documentation
18 | - [ ] I have added/updated unit tests that prove my fix is effective or that my feature works
19 | - [ ] New and existing unit tests pass locally with my changes
20 | 


--------------------------------------------------------------------------------
/.github/workflows/main.yml:
--------------------------------------------------------------------------------
 1 | name: Discord GitHub Notifications
 2 | 
 3 | on:
 4 |   issues:
 5 |     types: [opened]
 6 |   issue_comment:
 7 |     types: [created]
 8 |   pull_request:
 9 |     types: [opened]
10 |   discussion:
11 |     types: [created]
12 | 
13 | jobs:
14 |   notify-discord:
15 |     runs-on: ubuntu-latest
16 |     steps:
17 |       - name: Set webhook based on event type
18 |         id: set-webhook
19 |         run: |
20 |           if [ "${{ github.event_name }}" == "discussion" ]; then
21 |             echo "webhook=${{ secrets.DISCORD_DISCUSSIONS_WEBHOOK }}" >> $GITHUB_OUTPUT
22 |           else
23 |             echo "webhook=${{ secrets.DISCORD_WEBHOOK }}" >> $GITHUB_OUTPUT
24 |           fi
25 | 
26 |       - name: Discord Notification
27 |         uses: Ilshidur/action-discord@master
28 |         env:
29 |           DISCORD_WEBHOOK: ${{ steps.set-webhook.outputs.webhook }}
30 |         with:
31 |           args: |
32 |             ${{ github.event_name == 'issues' && format('📣 New issue created: **{0}** by {1} - {2}', github.event.issue.title, github.event.issue.user.login, github.event.issue.html_url) || 
33 |             github.event_name == 'issue_comment' && format('💬 New comment on issue **{0}** by {1} - {2}', github.event.issue.title, github.event.comment.user.login, github.event.comment.html_url) ||
34 |             github.event_name == 'pull_request' && format('🔄 New PR opened: **{0}** by {1} - {2}', github.event.pull_request.title, github.event.pull_request.user.login, github.event.pull_request.html_url) || 
35 |             format('💬 New discussion started: **{0}** by {1} - {2}', github.event.discussion.title, github.event.discussion.user.login, github.event.discussion.html_url) }}
36 | 


--------------------------------------------------------------------------------
/CONTRIBUTORS.md:
--------------------------------------------------------------------------------
 1 | # Contributors to Crawl4AI
 2 | 
 3 | We would like to thank the following people for their contributions to Crawl4AI:
 4 | 
 5 | ## Core Team
 6 | 
 7 | - [Unclecode](https://github.com/unclecode) - Project Creator and Main Developer
 8 | - [Nasrin](https://github.com/ntohidi) - Project Manager and Developer
 9 | - [Aravind Karnam](https://github.com/aravindkarnam) - Head of Community and Product 
10 | 
11 | ## Community Contributors
12 | 
13 | - [aadityakanjolia4](https://github.com/aadityakanjolia4) - Fix for `CustomHTML2Text` is not defined.
14 | - [FractalMind](https://github.com/FractalMind) - Created the first official Docker Hub image and fixed Dockerfile errors
15 | - [ketonkss4](https://github.com/ketonkss4) - Identified Selenium's new capabilities, helping reduce dependencies
16 | - [jonymusky](https://github.com/jonymusky) - Javascript execution documentation, and wait_for
17 | - [datehoer](https://github.com/datehoer) - Add browser prxy support
18 | 
19 | ## Pull Requests
20 | 
21 | - [dvschuyl](https://github.com/dvschuyl) - AsyncPlaywrightCrawlerStrategy page-evaluate context destroyed by navigation [#304](https://github.com/unclecode/crawl4ai/pull/304)
22 | - [nelzomal](https://github.com/nelzomal) - Enhance development installation instructions [#286](https://github.com/unclecode/crawl4ai/pull/286)
23 | - [HamzaFarhan](https://github.com/HamzaFarhan) - Handled the cases where markdown_with_citations, references_markdown, and filtered_html might not be defined [#293](https://github.com/unclecode/crawl4ai/pull/293)
24 | - [NanmiCoder](https://github.com/NanmiCoder) - fix: crawler strategy exception handling and fixes [#271](https://github.com/unclecode/crawl4ai/pull/271)
25 | - [paulokuong](https://github.com/paulokuong) - fix: RAWL4_AI_BASE_DIRECTORY should be Path object instead of string [#298](https://github.com/unclecode/crawl4ai/pull/298)
26 | 
27 | #### Feb-Alpha-1
28 | - [sufianuddin](https://github.com/sufianuddin) - fix: [Documentation for JsonCssExtractionStrategy](https://github.com/unclecode/crawl4ai/issues/651)
29 | - [tautikAg](https://github.com/tautikAg) - fix: [Markdown output has incorect spacing](https://github.com/unclecode/crawl4ai/issues/599)
30 | - [cardit1](https://github.com/cardit1) - fix: ['AsyncPlaywrightCrawlerStrategy' object has no attribute 'downloads_path'](https://github.com/unclecode/crawl4ai/issues/585)
31 | - [dmurat](https://github.com/dmurat) - fix: [ Incorrect rendering of inline code inside of links ](https://github.com/unclecode/crawl4ai/issues/583)
32 | - [Sparshsing](https://github.com/Sparshsing) - fix: [Relative Urls in the webpage not extracted properly ](https://github.com/unclecode/crawl4ai/issues/570)
33 | 
34 | 
35 | 
36 | ## Other Contributors
37 | 
38 | - [Gokhan](https://github.com/gkhngyk) 
39 | - [Shiv Kumar](https://github.com/shivkumar0757)
40 | - [QIN2DIM](https://github.com/QIN2DIM)
41 | 
42 | #### Typo fixes
43 | - [ssoydan](https://github.com/ssoydan)
44 | - [Darshan](https://github.com/Darshan2104)
45 | - [tuhinmallick](https://github.com/tuhinmallick)
46 | 
47 | ## Acknowledgements
48 | 
49 | We also want to thank all the users who have reported bugs, suggested features, or helped in any other way to make Crawl4AI better.
50 | 
51 | ---
52 | 
53 | If you've contributed to Crawl4AI and your name isn't on this list, please [open a pull request](https://github.com/unclecode/crawl4ai/pulls) with your name, link, and contribution, and we'll review it promptly.
54 | 
55 | Thank you all for your contributions!


--------------------------------------------------------------------------------
/MANIFEST.in:
--------------------------------------------------------------------------------
1 | include requirements.txt
2 | recursive-include crawl4ai/js_snippet *.js


--------------------------------------------------------------------------------
/MISSION.md:
--------------------------------------------------------------------------------
 1 | # Mission
 2 | 
 3 | ![Mission Diagram](./docs/assets/pitch-dark.svg)
 4 | 
 5 | ### 1. The Data Capitalization Opportunity
 6 | 
 7 | We live in an unprecedented era of digital wealth creation. Every day, individuals and enterprises generate massive amounts of valuable digital footprints across various platforms, social media channels, messenger apps, and cloud services. While people can interact with their data within these platforms, there's an immense untapped opportunity to transform this data into true capital assets. Just as physical property became a foundational element of wealth creation, personal and enterprise data has the potential to become a new form of capital on balance sheets.
 8 | 
 9 | For individuals, this represents an opportunity to transform their digital activities into valuable assets. For enterprises, their internal communications, team discussions, and collaborative documents contain rich insights that could be structured and valued as intellectual capital. This wealth of information represents an unprecedented opportunity for value creation in the digital age.
10 | 
11 | ### 2. The Potential of Authentic Data
12 | 
13 | While synthetic data has played a crucial role in AI development, there's an enormous untapped potential in the authentic data generated by individuals and organizations. Every message, document, and interaction contains unique insights and patterns that could enhance AI development. The challenge isn't a lack of data - it's that most authentic human-generated data remains inaccessible for productive use.
14 | 
15 | By enabling willing participation in data sharing, we can unlock this vast reservoir of authentic human knowledge. This represents an opportunity to enhance AI development with diverse, real-world data that reflects the full spectrum of human experience and knowledge.
16 | 
17 | ## Our Pathway to Data Democracy
18 | 
19 | ### 1. Open-Source Foundation
20 | 
21 | Our first step is creating an open-source data extraction engine that empowers developers and innovators to build tools for data structuring and organization. This foundation ensures transparency, security, and community-driven development. By making these tools openly available, we enable the technical infrastructure needed for true data ownership and capitalization.
22 | 
23 | ### 2. Data Capitalization Platform
24 | 
25 | Building on this open-source foundation, we're developing a platform that helps individuals and enterprises transform their digital footprints into structured, valuable assets. This platform will provide the tools and frameworks needed to organize, understand, and value personal and organizational data as true capital assets.
26 | 
27 | ### 3. Creating a Data Marketplace
28 | 
29 | The final piece is establishing a marketplace where individuals and organizations can willingly share their data assets. This creates opportunities for:
30 | - Individuals to earn equity, revenue, or other forms of value from their data
31 | - Enterprises to access diverse, high-quality data for AI development
32 | - Researchers to work with authentic human-generated data
33 | - Startups to build innovative solutions using real-world data
34 | 
35 | ## Economic Vision: A Shared Data Economy
36 | 
37 | We envision a future where data becomes a fundamental asset class in a thriving shared economy. This transformation will democratize AI development by enabling willing participation in data sharing, ensuring that the benefits of AI advancement flow back to data creators. Just as property rights revolutionized economic systems, establishing data as a capital asset will create new opportunities for wealth creation and economic participation.
38 | 
39 | This shared data economy will:
40 | - Enable individuals to capitalize on their digital footprints
41 | - Create new revenue streams for data creators
42 | - Provide AI developers with access to diverse, authentic data
43 | - Foster innovation through broader access to real-world data
44 | - Ensure more equitable distribution of AI's economic benefits
45 | 
46 | Our vision is to facilitate this transformation from the ground up - starting with open-source tools, progressing to data capitalization platforms, and ultimately creating a thriving marketplace where data becomes a true asset class in a shared economy. This approach ensures that the future of AI is built on a foundation of authentic human knowledge, with benefits flowing back to the individuals and organizations who create and share their valuable data.


--------------------------------------------------------------------------------
/cliff.toml:
--------------------------------------------------------------------------------
 1 | [changelog]
 2 | # Template format
 3 | header = """
 4 | # Changelog\n
 5 | All notable changes to this project will be documented in this file.\n
 6 | The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
 7 | and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n
 8 | """
 9 | 
10 | # Organize commits by type
11 | [git]
12 | conventional_commits = true
13 | filter_unconventional = true
14 | commit_parsers = [
15 |     { message = "^feat", group = "Added"},
16 |     { message = "^fix", group = "Fixed"},
17 |     { message = "^doc", group = "Documentation"},
18 |     { message = "^perf", group = "Performance"},
19 |     { message = "^refactor", group = "Changed"},
20 |     { message = "^style", group = "Changed"},
21 |     { message = "^test", group = "Testing"},
22 |     { message = "^chore\\(release\\): prepare for", skip = true},
23 |     { message = "^chore", group = "Miscellaneous Tasks"},
24 | ]


--------------------------------------------------------------------------------
/crawl4ai/__version__.py:
--------------------------------------------------------------------------------
1 | # crawl4ai/_version.py
2 | __version__ = "0.5.0.post8"
3 | 


--------------------------------------------------------------------------------
/crawl4ai/browser/__init__.py:
--------------------------------------------------------------------------------
 1 | """Browser management module for Crawl4AI.
 2 | 
 3 | This module provides browser management capabilities using different strategies
 4 | for browser creation and interaction.
 5 | """
 6 | 
 7 | from .manager import BrowserManager
 8 | from .profiles import BrowserProfileManager
 9 | 
10 | __all__ = ['BrowserManager', 'BrowserProfileManager']


--------------------------------------------------------------------------------
 1 | FROM ubuntu:22.04
 2 | 
 3 | # Install dependencies with comprehensive Chromium support
 4 | RUN apt-get update && apt-get install -y --no-install-recommends \
 5 |     wget \
 6 |     gnupg \
 7 |     ca-certificates \
 8 |     fonts-liberation \
 9 |     # Sound support
10 |     libasound2 \
11 |     # Accessibility support
12 |     libatspi2.0-0 \
13 |     libatk1.0-0 \
14 |     libatk-bridge2.0-0 \
15 |     # Graphics and rendering
16 |     libdrm2 \
17 |     libgbm1 \
18 |     libgtk-3-0 \
19 |     libxcomposite1 \
20 |     libxdamage1 \
21 |     libxext6 \
22 |     libxfixes3 \
23 |     libxrandr2 \
24 |     # X11 and window system
25 |     libx11-6 \
26 |     libxcb1 \
27 |     libxkbcommon0 \
28 |     # Text and internationalization
29 |     libpango-1.0-0 \
30 |     libcairo2 \
31 |     # Printing support
32 |     libcups2 \
33 |     # System libraries
34 |     libdbus-1-3 \
35 |     libnss3 \
36 |     libnspr4 \
37 |     libglib2.0-0 \
38 |     # Utilities
39 |     xdg-utils \
40 |     socat \
41 |     # Process management
42 |     procps \
43 |     # Clean up
44 |     && rm -rf /var/lib/apt/lists/*
45 | 
46 | # Install Chrome
47 | RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
48 |     echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list && \
49 |     apt-get update && \
50 |     apt-get install -y google-chrome-stable && \
51 |     rm -rf /var/lib/apt/lists/*
52 | 
53 | # Create data directory for user data
54 | RUN mkdir -p /data && chmod 777 /data
55 | 
56 | # Add a startup script
57 | COPY start.sh /start.sh
58 | RUN chmod +x /start.sh
59 | 
60 | # Set entrypoint
61 | ENTRYPOINT ["/start.sh"]


--------------------------------------------------------------------------------
 1 | FROM ubuntu:22.04
 2 | 
 3 | # Install dependencies with comprehensive Chromium support
 4 | RUN apt-get update && apt-get install -y --no-install-recommends \
 5 |     wget \
 6 |     gnupg \
 7 |     ca-certificates \
 8 |     fonts-liberation \
 9 |     # Sound support
10 |     libasound2 \
11 |     # Accessibility support
12 |     libatspi2.0-0 \
13 |     libatk1.0-0 \
14 |     libatk-bridge2.0-0 \
15 |     # Graphics and rendering
16 |     libdrm2 \
17 |     libgbm1 \
18 |     libgtk-3-0 \
19 |     libxcomposite1 \
20 |     libxdamage1 \
21 |     libxext6 \
22 |     libxfixes3 \
23 |     libxrandr2 \
24 |     # X11 and window system
25 |     libx11-6 \
26 |     libxcb1 \
27 |     libxkbcommon0 \
28 |     # Text and internationalization
29 |     libpango-1.0-0 \
30 |     libcairo2 \
31 |     # Printing support
32 |     libcups2 \
33 |     # System libraries
34 |     libdbus-1-3 \
35 |     libnss3 \
36 |     libnspr4 \
37 |     libglib2.0-0 \
38 |     # Utilities
39 |     xdg-utils \
40 |     socat \
41 |     # Process management
42 |     procps \
43 |     # Clean up
44 |     && rm -rf /var/lib/apt/lists/*
45 | 
46 | # Install Chrome
47 | RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
48 |     echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list && \
49 |     apt-get update && \
50 |     apt-get install -y google-chrome-stable && \
51 |     rm -rf /var/lib/apt/lists/*
52 | 
53 | # Create data directory for user data
54 | RUN mkdir -p /data && chmod 777 /data
55 | 
56 | # Keep container running without starting Chrome
57 | CMD ["tail", "-f", "/dev/null"]


--------------------------------------------------------------------------------
/crawl4ai/browser/models.py:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/crawl4ai/browser/models.py


--------------------------------------------------------------------------------
/crawl4ai/cache_context.py:
--------------------------------------------------------------------------------
  1 | from enum import Enum
  2 | 
  3 | 
  4 | class CacheMode(Enum):
  5 |     """
  6 |     Defines the caching behavior for web crawling operations.
  7 | 
  8 |     Modes:
  9 |     - ENABLED: Normal caching behavior (read and write)
 10 |     - DISABLED: No caching at all
 11 |     - READ_ONLY: Only read from cache, don't write
 12 |     - WRITE_ONLY: Only write to cache, don't read
 13 |     - BYPASS: Bypass cache for this operation
 14 |     """
 15 | 
 16 |     ENABLED = "enabled"
 17 |     DISABLED = "disabled"
 18 |     READ_ONLY = "read_only"
 19 |     WRITE_ONLY = "write_only"
 20 |     BYPASS = "bypass"
 21 | 
 22 | 
 23 | class CacheContext:
 24 |     """
 25 |     Encapsulates cache-related decisions and URL handling.
 26 | 
 27 |     This class centralizes all cache-related logic and URL type checking,
 28 |     making the caching behavior more predictable and maintainable.
 29 | 
 30 |     Attributes:
 31 |         url (str): The URL being processed.
 32 |         cache_mode (CacheMode): The cache mode for the current operation.
 33 |         always_bypass (bool): If True, bypasses caching for this operation.
 34 |         is_cacheable (bool): True if the URL is cacheable, False otherwise.
 35 |         is_web_url (bool): True if the URL is a web URL, False otherwise.
 36 |         is_local_file (bool): True if the URL is a local file, False otherwise.
 37 |         is_raw_html (bool): True if the URL is raw HTML, False otherwise.
 38 |         _url_display (str): The display name for the URL (web, local file, or raw HTML).
 39 |     """
 40 | 
 41 |     def __init__(self, url: str, cache_mode: CacheMode, always_bypass: bool = False):
 42 |         """
 43 |         Initializes the CacheContext with the provided URL and cache mode.
 44 | 
 45 |         Args:
 46 |             url (str): The URL being processed.
 47 |             cache_mode (CacheMode): The cache mode for the current operation.
 48 |             always_bypass (bool): If True, bypasses caching for this operation.
 49 |         """
 50 |         self.url = url
 51 |         self.cache_mode = cache_mode
 52 |         self.always_bypass = always_bypass
 53 |         self.is_cacheable = url.startswith(("http://", "https://", "file://"))
 54 |         self.is_web_url = url.startswith(("http://", "https://"))
 55 |         self.is_local_file = url.startswith("file://")
 56 |         self.is_raw_html = url.startswith("raw:")
 57 |         self._url_display = url if not self.is_raw_html else "Raw HTML"
 58 | 
 59 |     def should_read(self) -> bool:
 60 |         """
 61 |         Determines if cache should be read based on context.
 62 | 
 63 |         How it works:
 64 |         1. If always_bypass is True or is_cacheable is False, return False.
 65 |         2. If cache_mode is ENABLED or READ_ONLY, return True.
 66 | 
 67 |         Returns:
 68 |             bool: True if cache should be read, False otherwise.
 69 |         """
 70 |         if self.always_bypass or not self.is_cacheable:
 71 |             return False
 72 |         return self.cache_mode in [CacheMode.ENABLED, CacheMode.READ_ONLY]
 73 | 
 74 |     def should_write(self) -> bool:
 75 |         """
 76 |         Determines if cache should be written based on context.
 77 | 
 78 |         How it works:
 79 |         1. If always_bypass is True or is_cacheable is False, return False.
 80 |         2. If cache_mode is ENABLED or WRITE_ONLY, return True.
 81 | 
 82 |         Returns:
 83 |             bool: True if cache should be written, False otherwise.
 84 |         """
 85 |         if self.always_bypass or not self.is_cacheable:
 86 |             return False
 87 |         return self.cache_mode in [CacheMode.ENABLED, CacheMode.WRITE_ONLY]
 88 | 
 89 |     @property
 90 |     def display_url(self) -> str:
 91 |         """Returns the URL in display format."""
 92 |         return self._url_display
 93 | 
 94 | 
 95 | def _legacy_to_cache_mode(
 96 |     disable_cache: bool = False,
 97 |     bypass_cache: bool = False,
 98 |     no_cache_read: bool = False,
 99 |     no_cache_write: bool = False,
100 | ) -> CacheMode:
101 |     """
102 |     Converts legacy cache parameters to the new CacheMode enum.
103 | 
104 |     This is an internal function to help transition from the old boolean flags
105 |     to the new CacheMode system.
106 |     """
107 |     if disable_cache:
108 |         return CacheMode.DISABLED
109 |     if bypass_cache:
110 |         return CacheMode.BYPASS
111 |     if no_cache_read and no_cache_write:
112 |         return CacheMode.DISABLED
113 |     if no_cache_read:
114 |         return CacheMode.WRITE_ONLY
115 |     if no_cache_write:
116 |         return CacheMode.READ_ONLY
117 |     return CacheMode.ENABLED
118 | 


--------------------------------------------------------------------------------
/crawl4ai/crawlers/__init__.py:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/crawl4ai/crawlers/__init__.py


--------------------------------------------------------------------------------
/crawl4ai/crawlers/amazon_product/__init__.py:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/crawl4ai/crawlers/amazon_product/__init__.py


--------------------------------------------------------------------------------
/crawl4ai/crawlers/amazon_product/crawler.py:
--------------------------------------------------------------------------------
 1 | from crawl4ai.hub import BaseCrawler
 2 | 
 3 | __meta__ = {
 4 |     "version": "1.2.0",
 5 |     "tested_on": ["amazon.com"],
 6 |     "rate_limit": "50 RPM",
 7 |     "schema": {"product": ["name", "price"]}
 8 | }
 9 | 
10 | class AmazonProductCrawler(BaseCrawler):
11 |     async def run(self, url: str, **kwargs) -> str:
12 |         try:
13 |             self.logger.info(f"Crawling {url}")
14 |             return '{"product": {"name": "Test Amazon Product"}}'
15 |         except Exception as e:
16 |             self.logger.error(f"Crawl failed: {str(e)}")
17 |             return json.dumps({
18 |                 "error": str(e),
19 |                 "metadata": self.meta  # Include meta in error response
20 |             })            


--------------------------------------------------------------------------------
/crawl4ai/crawlers/google_search/__init__.py:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/crawl4ai/crawlers/google_search/__init__.py


--------------------------------------------------------------------------------
/crawl4ai/crawlers/google_search/script.js:
--------------------------------------------------------------------------------
  1 | (() => {
  2 |     // Function to extract image data from Google Images page
  3 |     function extractImageData() {
  4 |         const keys = Object.keys(window.W_jd);
  5 |         let allImageData = [];
  6 |         let currentPosition = 0;
  7 | 
  8 |         // Get the symbol we'll use (from first valid entry)
  9 |         let targetSymbol;
 10 |         for (let key of keys) {
 11 |             try {
 12 |                 const symbols = Object.getOwnPropertySymbols(window.W_jd[key]);
 13 |                 if (symbols.length > 0) {
 14 |                     targetSymbol = symbols[0];
 15 |                     break;
 16 |                 }
 17 |             } catch (e) {
 18 |                 continue;
 19 |             }
 20 |         }
 21 | 
 22 |         if (!targetSymbol) return [];
 23 | 
 24 |         // Iterate through ALL keys
 25 |         for (let key of keys) {
 26 |             try {
 27 |                 const o1 = window.W_jd[key][targetSymbol]
 28 |                 if (!o1) continue;
 29 |                 const data = Object.values(o1)[0]
 30 |                 // const data = window.W_jd[key][targetSymbol]?.Ws;
 31 |                 // Check if this is a valid image data entry
 32 |                 if (data && Array.isArray(data[1])) {
 33 |                     const processedData = processImageEntry(data, currentPosition);
 34 |                     if (processedData) {
 35 |                         allImageData.push(processedData);
 36 |                         currentPosition++;
 37 |                     }
 38 |                 }
 39 |             } catch (e) {
 40 |                 continue;
 41 |             }
 42 |         }
 43 | 
 44 |         return allImageData;
 45 |     }
 46 | 
 47 |     function processImageEntry(entry, position) {
 48 |         const imageData = entry[1];
 49 |         if (!Array.isArray(imageData)) return null;
 50 | 
 51 |         // Extract the image ID
 52 |         const imageId = imageData[1];
 53 |         if (!imageId) return null;
 54 | 
 55 |         // Find the corresponding DOM element
 56 |         const domElement = document.querySelector(`[data-docid="${imageId}"]`);
 57 |         if (!domElement) return null;
 58 | 
 59 |         // Extract data from the array structure
 60 |         const [
 61 |             _,
 62 |             id,
 63 |             thumbnailInfo,
 64 |             imageInfo,
 65 |             __,
 66 |             ___,
 67 |             rgb,
 68 |             ____,
 69 |             _____,
 70 |             metadata
 71 |         ] = imageData;
 72 | 
 73 |         // Ensure we have the required data
 74 |         if (!thumbnailInfo || !imageInfo) return null;
 75 | 
 76 |         // Extract metadata from DOM
 77 |         const title = domElement?.querySelector('.toI8Rb')?.textContent?.trim();
 78 |         const source = domElement?.querySelector('.guK3rf')?.textContent?.trim();
 79 |         const link = domElement?.querySelector('a.EZAeBe')?.href;
 80 | 
 81 |         if (!link) return null;
 82 | 
 83 |         // Build Google Image URL
 84 |         const googleUrl = buildGoogleImageUrl(imageInfo[0], link, imageId, imageInfo[1], imageInfo[2]);
 85 | 
 86 |         return {
 87 |             title,
 88 |             imageUrl: imageInfo[0],
 89 |             imageWidth: imageInfo[2],
 90 |             imageHeight: imageInfo[1],
 91 |             thumbnailUrl: thumbnailInfo[0],
 92 |             thumbnailWidth: thumbnailInfo[2],
 93 |             thumbnailHeight: thumbnailInfo[1],
 94 |             source,
 95 |             domain: metadata['2000']?.[1] || new URL(link).hostname,
 96 |             link,
 97 |             googleUrl,
 98 |             position: position + 1
 99 |         };
100 |     }
101 | 
102 |     function buildGoogleImageUrl(imgUrl, refUrl, tbnid, height, width) {
103 |         const params = new URLSearchParams({
104 |             imgurl: imgUrl,
105 |             tbnid: tbnid,
106 |             imgrefurl: refUrl,
107 |             docid: tbnid,
108 |             w: width.toString(),
109 |             h: height.toString(),
110 |         });
111 | 
112 |         return `https://www.google.com/imgres?${params.toString()}`;
113 |     }
114 |     return extractImageData();
115 | })();


--------------------------------------------------------------------------------
/crawl4ai/deep_crawling/__init__.py:
--------------------------------------------------------------------------------
 1 | # deep_crawling/__init__.py
 2 | from .base_strategy import DeepCrawlDecorator, DeepCrawlStrategy
 3 | from .bfs_strategy import BFSDeepCrawlStrategy
 4 | from .bff_strategy import BestFirstCrawlingStrategy
 5 | from .dfs_strategy import DFSDeepCrawlStrategy
 6 | from .filters import (
 7 |     FilterChain,
 8 |     ContentTypeFilter,
 9 |     DomainFilter,
10 |     URLFilter,
11 |     URLPatternFilter,
12 |     FilterStats,
13 |     ContentRelevanceFilter,
14 |     SEOFilter
15 | )
16 | from .scorers import (
17 |     KeywordRelevanceScorer,
18 |     URLScorer,
19 |     CompositeScorer,
20 |     DomainAuthorityScorer,
21 |     FreshnessScorer,
22 |     PathDepthScorer,
23 |     ContentTypeScorer
24 | )
25 | 
26 | __all__ = [
27 |     "DeepCrawlDecorator",
28 |     "DeepCrawlStrategy",
29 |     "BFSDeepCrawlStrategy",
30 |     "BestFirstCrawlingStrategy",
31 |     "DFSDeepCrawlStrategy",
32 |     "FilterChain",
33 |     "ContentTypeFilter",
34 |     "DomainFilter",
35 |     "URLFilter",
36 |     "URLPatternFilter",
37 |     "FilterStats",
38 |     "ContentRelevanceFilter",
39 |     "SEOFilter",
40 |     "KeywordRelevanceScorer",
41 |     "URLScorer",
42 |     "CompositeScorer",
43 |     "DomainAuthorityScorer",
44 |     "FreshnessScorer",
45 |     "PathDepthScorer",
46 |     "ContentTypeScorer",
47 | ]
48 | 


--------------------------------------------------------------------------------
/crawl4ai/html2text/__main__.py:
--------------------------------------------------------------------------------
1 | from .cli import main
2 | 
3 | main()
4 | 


--------------------------------------------------------------------------------
/crawl4ai/html2text/_typing.py:
--------------------------------------------------------------------------------
1 | class OutCallback:
2 |     def __call__(self, s: str) -> None:
3 |         ...
4 | 


--------------------------------------------------------------------------------
/crawl4ai/html2text/elements.py:
--------------------------------------------------------------------------------
 1 | from typing import Dict, Optional
 2 | 
 3 | 
 4 | class AnchorElement:
 5 |     __slots__ = ["attrs", "count", "outcount"]
 6 | 
 7 |     def __init__(self, attrs: Dict[str, Optional[str]], count: int, outcount: int):
 8 |         self.attrs = attrs
 9 |         self.count = count
10 |         self.outcount = outcount
11 | 
12 | 
13 | class ListElement:
14 |     __slots__ = ["name", "num"]
15 | 
16 |     def __init__(self, name: str, num: int):
17 |         self.name = name
18 |         self.num = num
19 | 


--------------------------------------------------------------------------------
/crawl4ai/hub.py:
--------------------------------------------------------------------------------
 1 | # crawl4ai/hub.py
 2 | from abc import ABC, abstractmethod
 3 | from typing import Dict, Type, Union
 4 | import logging
 5 | import importlib
 6 | from pathlib import Path
 7 | import inspect
 8 | 
 9 | logger = logging.getLogger(__name__)
10 | 
11 | 
12 | class BaseCrawler(ABC):
13 |     def __init__(self):
14 |         self.logger = logging.getLogger(self.__class__.__name__)
15 |         
16 |     @abstractmethod
17 |     async def run(self, url: str = "", **kwargs) -> str:
18 |         """
19 |         Implement this method to return JSON string.
20 |         Must accept URL + arbitrary kwargs for flexibility.
21 |         """
22 |         pass
23 | 
24 |     def __init_subclass__(cls, **kwargs):
25 |         """Enforce interface validation on subclassing"""
26 |         super().__init_subclass__(**kwargs)
27 |         
28 |         # Verify run method signature
29 |         run_method = cls.run
30 |         if not run_method.__code__.co_argcount >= 2:  # self + url
31 |             raise TypeError(f"{cls.__name__} must implement 'run(self, url: str, **kwargs)'")
32 |             
33 |         # Verify async nature
34 |         if not inspect.iscoroutinefunction(run_method):
35 |             raise TypeError(f"{cls.__name__}.run must be async")
36 | 
37 | class CrawlerHub:
38 |     _crawlers: Dict[str, Type[BaseCrawler]] = {}
39 | 
40 |     @classmethod
41 |     def _discover_crawlers(cls):
42 |         """Dynamically load crawlers from /crawlers in 3 lines"""
43 |         base_path = Path(__file__).parent / "crawlers"
44 |         for crawler_dir in base_path.iterdir():
45 |             if crawler_dir.is_dir():
46 |                 try:
47 |                     module = importlib.import_module(
48 |                         f"crawl4ai.crawlers.{crawler_dir.name}.crawler"
49 |                     )
50 |                     for attr in dir(module):
51 |                         cls._maybe_register_crawler(
52 |                             getattr(module, attr), crawler_dir.name
53 |                         )
54 |                 except Exception as e:
55 |                     logger.warning(f"Failed {crawler_dir.name}: {str(e)}")
56 | 
57 |     @classmethod
58 |     def _maybe_register_crawler(cls, obj, name: str):
59 |         """Brilliant one-liner registration"""
60 |         if isinstance(obj, type) and issubclass(obj, BaseCrawler) and obj != BaseCrawler:
61 |             module = importlib.import_module(obj.__module__)
62 |             obj.meta = getattr(module, "__meta__", {})
63 |             cls._crawlers[name] = obj
64 | 
65 |     @classmethod
66 |     def get(cls, name: str) -> Union[Type[BaseCrawler], None]:
67 |         if not cls._crawlers:
68 |             cls._discover_crawlers()
69 |         return cls._crawlers.get(name)


--------------------------------------------------------------------------------
/crawl4ai/js_snippet/__init__.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | 
 3 | 
 4 | # Create a function get name of a js script, then load from the CURRENT folder of this script and return its content as string, make sure its error free
 5 | def load_js_script(script_name):
 6 |     # Get the path of the current script
 7 |     current_script_path = os.path.dirname(os.path.realpath(__file__))
 8 |     # Get the path of the script to load
 9 |     script_path = os.path.join(current_script_path, script_name + ".js")
10 |     # Check if the script exists
11 |     if not os.path.exists(script_path):
12 |         raise ValueError(
13 |             f"Script {script_name} not found in the folder {current_script_path}"
14 |         )
15 |     # Load the content of the script
16 |     with open(script_path, "r") as f:
17 |         script_content = f.read()
18 |     return script_content
19 | 


--------------------------------------------------------------------------------
/crawl4ai/js_snippet/navigator_overrider.js:
--------------------------------------------------------------------------------
 1 | // Pass the Permissions Test.
 2 | const originalQuery = window.navigator.permissions.query;
 3 | window.navigator.permissions.query = (parameters) =>
 4 |     parameters.name === "notifications"
 5 |         ? Promise.resolve({ state: Notification.permission })
 6 |         : originalQuery(parameters);
 7 | Object.defineProperty(navigator, "webdriver", {
 8 |     get: () => undefined,
 9 | });
10 | window.navigator.chrome = {
11 |     runtime: {},
12 |     // Add other properties if necessary
13 | };
14 | Object.defineProperty(navigator, "plugins", {
15 |     get: () => [1, 2, 3, 4, 5],
16 | });
17 | Object.defineProperty(navigator, "languages", {
18 |     get: () => ["en-US", "en"],
19 | });
20 | Object.defineProperty(document, "hidden", {
21 |     get: () => false,
22 | });
23 | Object.defineProperty(document, "visibilityState", {
24 |     get: () => "visible",
25 | });
26 | 


--------------------------------------------------------------------------------
/crawl4ai/js_snippet/update_image_dimensions.js:
--------------------------------------------------------------------------------
 1 | () => {
 2 |     return new Promise((resolve) => {
 3 |         const filterImage = (img) => {
 4 |             // Filter out images that are too small
 5 |             if (img.width < 100 && img.height < 100) return false;
 6 | 
 7 |             // Filter out images that are not visible
 8 |             const rect = img.getBoundingClientRect();
 9 |             if (rect.width === 0 || rect.height === 0) return false;
10 | 
11 |             // Filter out images with certain class names (e.g., icons, thumbnails)
12 |             if (img.classList.contains("icon") || img.classList.contains("thumbnail")) return false;
13 | 
14 |             // Filter out images with certain patterns in their src (e.g., placeholder images)
15 |             if (img.src.includes("placeholder") || img.src.includes("icon")) return false;
16 | 
17 |             return true;
18 |         };
19 | 
20 |         const images = Array.from(document.querySelectorAll("img")).filter(filterImage);
21 |         let imagesLeft = images.length;
22 | 
23 |         if (imagesLeft === 0) {
24 |             resolve();
25 |             return;
26 |         }
27 | 
28 |         const checkImage = (img) => {
29 |             if (img.complete && img.naturalWidth !== 0) {
30 |                 img.setAttribute("width", img.naturalWidth);
31 |                 img.setAttribute("height", img.naturalHeight);
32 |                 imagesLeft--;
33 |                 if (imagesLeft === 0) resolve();
34 |             }
35 |         };
36 | 
37 |         images.forEach((img) => {
38 |             checkImage(img);
39 |             if (!img.complete) {
40 |                 img.onload = () => {
41 |                     checkImage(img);
42 |                 };
43 |                 img.onerror = () => {
44 |                     imagesLeft--;
45 |                     if (imagesLeft === 0) resolve();
46 |                 };
47 |             }
48 |         });
49 | 
50 |         // Fallback timeout of 5 seconds
51 |         // setTimeout(() => resolve(), 5000);
52 |         resolve();
53 |     });
54 | };
55 | 


--------------------------------------------------------------------------------
/crawl4ai/legacy/__init__.py:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/crawl4ai/legacy/__init__.py


--------------------------------------------------------------------------------
/crawl4ai/legacy/cli.py:
--------------------------------------------------------------------------------
  1 | import click
  2 | import sys
  3 | import asyncio
  4 | from typing import List
  5 | from .docs_manager import DocsManager
  6 | from .async_logger import AsyncLogger
  7 | 
  8 | logger = AsyncLogger(verbose=True)
  9 | docs_manager = DocsManager(logger)
 10 | 
 11 | 
 12 | def print_table(headers: List[str], rows: List[List[str]], padding: int = 2):
 13 |     """Print formatted table with headers and rows"""
 14 |     widths = [max(len(str(cell)) for cell in col) for col in zip(headers, *rows)]
 15 |     border = "+" + "+".join("-" * (w + 2 * padding) for w in widths) + "+"
 16 | 
 17 |     def format_row(row):
 18 |         return (
 19 |             "|"
 20 |             + "|".join(
 21 |                 f"{' ' * padding}{str(cell):<{w}}{' ' * padding}"
 22 |                 for cell, w in zip(row, widths)
 23 |             )
 24 |             + "|"
 25 |         )
 26 | 
 27 |     click.echo(border)
 28 |     click.echo(format_row(headers))
 29 |     click.echo(border)
 30 |     for row in rows:
 31 |         click.echo(format_row(row))
 32 |     click.echo(border)
 33 | 
 34 | 
 35 | @click.group()
 36 | def cli():
 37 |     """Crawl4AI Command Line Interface"""
 38 |     pass
 39 | 
 40 | 
 41 | @cli.group()
 42 | def docs():
 43 |     """Documentation operations"""
 44 |     pass
 45 | 
 46 | 
 47 | @docs.command()
 48 | @click.argument("sections", nargs=-1)
 49 | @click.option(
 50 |     "--mode", type=click.Choice(["extended", "condensed"]), default="extended"
 51 | )
 52 | def combine(sections: tuple, mode: str):
 53 |     """Combine documentation sections"""
 54 |     try:
 55 |         asyncio.run(docs_manager.ensure_docs_exist())
 56 |         click.echo(docs_manager.generate(sections, mode))
 57 |     except Exception as e:
 58 |         logger.error(str(e), tag="ERROR")
 59 |         sys.exit(1)
 60 | 
 61 | 
 62 | @docs.command()
 63 | @click.argument("query")
 64 | @click.option("--top-k", "-k", default=5)
 65 | @click.option("--build-index", is_flag=True, help="Build index if missing")
 66 | def search(query: str, top_k: int, build_index: bool):
 67 |     """Search documentation"""
 68 |     try:
 69 |         result = docs_manager.search(query, top_k)
 70 |         if result == "No search index available. Call build_search_index() first.":
 71 |             if build_index or click.confirm("No search index found. Build it now?"):
 72 |                 asyncio.run(docs_manager.llm_text.generate_index_files())
 73 |                 result = docs_manager.search(query, top_k)
 74 |         click.echo(result)
 75 |     except Exception as e:
 76 |         click.echo(f"Error: {str(e)}", err=True)
 77 |         sys.exit(1)
 78 | 
 79 | 
 80 | @docs.command()
 81 | def update():
 82 |     """Update docs from GitHub"""
 83 |     try:
 84 |         asyncio.run(docs_manager.fetch_docs())
 85 |         click.echo("Documentation updated successfully")
 86 |     except Exception as e:
 87 |         click.echo(f"Error: {str(e)}", err=True)
 88 |         sys.exit(1)
 89 | 
 90 | 
 91 | @docs.command()
 92 | @click.option("--force-facts", is_flag=True, help="Force regenerate fact files")
 93 | @click.option("--clear-cache", is_flag=True, help="Clear BM25 cache")
 94 | def index(force_facts: bool, clear_cache: bool):
 95 |     """Build or rebuild search indexes"""
 96 |     try:
 97 |         asyncio.run(docs_manager.ensure_docs_exist())
 98 |         asyncio.run(
 99 |             docs_manager.llm_text.generate_index_files(
100 |                 force_generate_facts=force_facts, clear_bm25_cache=clear_cache
101 |             )
102 |         )
103 |         click.echo("Search indexes built successfully")
104 |     except Exception as e:
105 |         click.echo(f"Error: {str(e)}", err=True)
106 |         sys.exit(1)
107 | 
108 | 
109 | # Add docs list command
110 | @docs.command()
111 | def list():
112 |     """List available documentation sections"""
113 |     try:
114 |         sections = docs_manager.list()
115 |         print_table(["Sections"], [[section] for section in sections])
116 | 
117 |     except Exception as e:
118 |         click.echo(f"Error: {str(e)}", err=True)
119 |         sys.exit(1)
120 | 
121 | 
122 | if __name__ == "__main__":
123 |     cli()
124 | 


--------------------------------------------------------------------------------
/crawl4ai/legacy/docs_manager.py:
--------------------------------------------------------------------------------
 1 | import requests
 2 | import shutil
 3 | from pathlib import Path
 4 | from crawl4ai.async_logger import AsyncLogger
 5 | from crawl4ai.llmtxt import AsyncLLMTextManager
 6 | 
 7 | 
 8 | class DocsManager:
 9 |     def __init__(self, logger=None):
10 |         self.docs_dir = Path.home() / ".crawl4ai" / "docs"
11 |         self.local_docs = Path(__file__).parent.parent / "docs" / "llm.txt"
12 |         self.docs_dir.mkdir(parents=True, exist_ok=True)
13 |         self.logger = logger or AsyncLogger(verbose=True)
14 |         self.llm_text = AsyncLLMTextManager(self.docs_dir, self.logger)
15 | 
16 |     async def ensure_docs_exist(self):
17 |         """Fetch docs if not present"""
18 |         if not any(self.docs_dir.iterdir()):
19 |             await self.fetch_docs()
20 | 
21 |     async def fetch_docs(self) -> bool:
22 |         """Copy from local docs or download from GitHub"""
23 |         try:
24 |             # Try local first
25 |             if self.local_docs.exists() and (
26 |                 any(self.local_docs.glob("*.md"))
27 |                 or any(self.local_docs.glob("*.tokens"))
28 |             ):
29 |                 # Empty the local docs directory
30 |                 for file_path in self.docs_dir.glob("*.md"):
31 |                     file_path.unlink()
32 |                 # for file_path in self.docs_dir.glob("*.tokens"):
33 |                 #     file_path.unlink()
34 |                 for file_path in self.local_docs.glob("*.md"):
35 |                     shutil.copy2(file_path, self.docs_dir / file_path.name)
36 |                 # for file_path in self.local_docs.glob("*.tokens"):
37 |                 #     shutil.copy2(file_path, self.docs_dir / file_path.name)
38 |                 return True
39 | 
40 |             # Fallback to GitHub
41 |             response = requests.get(
42 |                 "https://api.github.com/repos/unclecode/crawl4ai/contents/docs/llm.txt",
43 |                 headers={"Accept": "application/vnd.github.v3+json"},
44 |             )
45 |             response.raise_for_status()
46 | 
47 |             for item in response.json():
48 |                 if item["type"] == "file" and item["name"].endswith(".md"):
49 |                     content = requests.get(item["download_url"]).text
50 |                     with open(self.docs_dir / item["name"], "w", encoding="utf-8") as f:
51 |                         f.write(content)
52 |             return True
53 | 
54 |         except Exception as e:
55 |             self.logger.error(f"Failed to fetch docs: {str(e)}")
56 |             raise
57 | 
58 |     def list(self) -> list[str]:
59 |         """List available topics"""
60 |         names = [file_path.stem for file_path in self.docs_dir.glob("*.md")]
61 |         # Remove [0-9]+_ prefix
62 |         names = [name.split("_", 1)[1] if name[0].isdigit() else name for name in names]
63 |         # Exclude those end with .xs.md and .q.md
64 |         names = [
65 |             name
66 |             for name in names
67 |             if not name.endswith(".xs") and not name.endswith(".q")
68 |         ]
69 |         return names
70 | 
71 |     def generate(self, sections, mode="extended"):
72 |         return self.llm_text.generate(sections, mode)
73 | 
74 |     def search(self, query: str, top_k: int = 5):
75 |         return self.llm_text.search(query, top_k)
76 | 


--------------------------------------------------------------------------------
/crawl4ai/legacy/version_manager.py:
--------------------------------------------------------------------------------
 1 | # version_manager.py
 2 | from pathlib import Path
 3 | from packaging import version
 4 | from . import __version__
 5 | 
 6 | 
 7 | class VersionManager:
 8 |     def __init__(self):
 9 |         self.home_dir = Path.home() / ".crawl4ai"
10 |         self.version_file = self.home_dir / "version.txt"
11 | 
12 |     def get_installed_version(self):
13 |         """Get the version recorded in home directory"""
14 |         if not self.version_file.exists():
15 |             return None
16 |         try:
17 |             return version.parse(self.version_file.read_text().strip())
18 |         except:
19 |             return None
20 | 
21 |     def update_version(self):
22 |         """Update the version file to current library version"""
23 |         self.version_file.write_text(__version__.__version__)
24 | 
25 |     def needs_update(self):
26 |         """Check if database needs update based on version"""
27 |         installed = self.get_installed_version()
28 |         current = version.parse(__version__.__version__)
29 |         return installed is None or installed < current
30 | 


--------------------------------------------------------------------------------
 1 | # .dockerignore
 2 | *
 3 | 
 4 | # Allow specific files and directories when using local installation
 5 | !crawl4ai/
 6 | !docs/
 7 | !deploy/docker/
 8 | !setup.py
 9 | !pyproject.toml
10 | !README.md
11 | !LICENSE
12 | !MANIFEST.in
13 | !setup.cfg
14 | !mkdocs.yml
15 | 
16 | .git/
17 | __pycache__/
18 | *.pyc
19 | *.pyo
20 | *.pyd
21 | .DS_Store
22 | .env
23 | .venv
24 | venv/
25 | tests/
26 | coverage.xml
27 | *.log
28 | *.swp
29 | *.egg-info/
30 | dist/
31 | build/


--------------------------------------------------------------------------------
/deploy/docker/.llm.env.example:
--------------------------------------------------------------------------------
1 | # LLM Provider Keys
2 | OPENAI_API_KEY=your_openai_key_here
3 | DEEPSEEK_API_KEY=your_deepseek_key_here
4 | ANTHROPIC_API_KEY=your_anthropic_key_here
5 | GROQ_API_KEY=your_groq_key_here
6 | TOGETHER_API_KEY=your_together_key_here
7 | MISTRAL_API_KEY=your_mistral_key_here
8 | GEMINI_API_TOKEN=your_gemini_key_here


--------------------------------------------------------------------------------
/deploy/docker/auth.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | from datetime import datetime, timedelta, timezone
 3 | from typing import Dict, Optional
 4 | from jwt import JWT, jwk_from_dict
 5 | from jwt.utils import get_int_from_datetime
 6 | from fastapi import Depends, HTTPException
 7 | from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
 8 | from pydantic import EmailStr
 9 | from pydantic.main import BaseModel
10 | import base64
11 | 
12 | instance = JWT()
13 | security = HTTPBearer(auto_error=False)
14 | SECRET_KEY = os.environ.get("SECRET_KEY", "mysecret")
15 | ACCESS_TOKEN_EXPIRE_MINUTES = 60
16 | 
17 | def get_jwk_from_secret(secret: str):
18 |     """Convert a secret string into a JWK object."""
19 |     secret_bytes = secret.encode('utf-8')
20 |     b64_secret = base64.urlsafe_b64encode(secret_bytes).rstrip(b'=').decode('utf-8')
21 |     return jwk_from_dict({"kty": "oct", "k": b64_secret})
22 | 
23 | def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
24 |     """Create a JWT access token with an expiration."""
25 |     to_encode = data.copy()
26 |     expire = datetime.now(timezone.utc) + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
27 |     to_encode.update({"exp": get_int_from_datetime(expire)})
28 |     signing_key = get_jwk_from_secret(SECRET_KEY)
29 |     return instance.encode(to_encode, signing_key, alg='HS256')
30 | 
31 | def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)) -> Dict:
32 |     """Verify the JWT token from the Authorization header."""
33 | 
34 |     if credentials is None:
35 |         return None
36 |     token = credentials.credentials
37 |     verifying_key = get_jwk_from_secret(SECRET_KEY)
38 |     try:
39 |         payload = instance.decode(token, verifying_key, do_time_check=True, algorithms='HS256')
40 |         return payload
41 |     except Exception:
42 |         raise HTTPException(status_code=401, detail="Invalid or expired token")
43 | 
44 | 
45 | def get_token_dependency(config: Dict):
46 |     """Return the token dependency if JWT is enabled, else a function that returns None."""
47 | 
48 |     if config.get("security", {}).get("jwt_enabled", False):
49 |         return verify_token
50 |     else:
51 |         return lambda: None
52 | 
53 | 
54 | class TokenRequest(BaseModel):
55 |     email: EmailStr


--------------------------------------------------------------------------------
/deploy/docker/config.yml:
--------------------------------------------------------------------------------
 1 | # Application Configuration
 2 | app:
 3 |   title: "Crawl4AI API"
 4 |   version: "1.0.0"
 5 |   host: "0.0.0.0"
 6 |   port: 8020
 7 |   reload: True
 8 |   timeout_keep_alive: 300
 9 | 
10 | # Default LLM Configuration
11 | llm:
12 |   provider: "openai/gpt-4o-mini"
13 |   api_key_env: "OPENAI_API_KEY"
14 |   # api_key: sk-...  # If you pass the API key directly then api_key_env will be ignored
15 | 
16 | # Redis Configuration
17 | redis:
18 |   host: "localhost"
19 |   port: 6379
20 |   db: 0
21 |   password: ""
22 |   ssl: False
23 |   ssl_cert_reqs: None
24 |   ssl_ca_certs: None
25 |   ssl_certfile: None
26 |   ssl_keyfile: None
27 |   ssl_cert_reqs: None
28 |   ssl_ca_certs: None
29 |   ssl_certfile: None
30 |   ssl_keyfile: None
31 | 
32 | # Rate Limiting Configuration
33 | rate_limiting:
34 |   enabled: True
35 |   default_limit: "1000/minute"
36 |   trusted_proxies: []
37 |   storage_uri: "memory://"  # Use "redis://localhost:6379" for production
38 | 
39 | # Security Configuration
40 | security:
41 |   enabled: false 
42 |   jwt_enabled: false 
43 |   https_redirect: false
44 |   trusted_hosts: ["*"]
45 |   headers:
46 |     x_content_type_options: "nosniff"
47 |     x_frame_options: "DENY"
48 |     content_security_policy: "default-src 'self'"
49 |     strict_transport_security: "max-age=63072000; includeSubDomains"
50 | 
51 | # Crawler Configuration
52 | crawler:
53 |   memory_threshold_percent: 95.0
54 |   rate_limiter:
55 |     base_delay: [1.0, 2.0]
56 |   timeouts:
57 |     stream_init: 30.0  # Timeout for stream initialization
58 |     batch_process: 300.0  # Timeout for batch processing
59 | 
60 | # Logging Configuration
61 | logging:
62 |   level: "INFO"
63 |   format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
64 | 
65 | # Observability Configuration
66 | observability:
67 |   prometheus:
68 |     enabled: True
69 |     endpoint: "/metrics"
70 |   health_check:
71 |     endpoint: "/health"
72 | 


--------------------------------------------------------------------------------
/deploy/docker/requirements.txt:
--------------------------------------------------------------------------------
 1 | crawl4ai
 2 | fastapi
 3 | uvicorn
 4 | gunicorn>=23.0.0
 5 | slowapi>=0.1.9
 6 | prometheus-fastapi-instrumentator>=7.0.2
 7 | redis>=5.2.1
 8 | jwt>=1.3.1
 9 | dnspython>=2.7.0
10 | email-validator>=2.2.0


--------------------------------------------------------------------------------
/deploy/docker/supervisord.conf:
--------------------------------------------------------------------------------
 1 | [supervisord]
 2 | nodaemon=true
 3 | 
 4 | [program:redis]
 5 | command=redis-server
 6 | autorestart=true
 7 | priority=10
 8 | 
 9 | [program:gunicorn]
10 | command=gunicorn --bind 0.0.0.0:8000 --workers 4 --threads 2 --timeout 300 --graceful-timeout 60 --keep-alive 65 --log-level debug --worker-class uvicorn.workers.UvicornWorker --max-requests 1000 --max-requests-jitter 50 server:app
11 | autorestart=true
12 | priority=20


--------------------------------------------------------------------------------
/deploy/docker/utils.py:
--------------------------------------------------------------------------------
 1 | import dns.resolver
 2 | import logging
 3 | import yaml
 4 | from datetime import datetime
 5 | from enum import Enum
 6 | from pathlib import Path
 7 | from fastapi import Request
 8 | from typing import Dict, Optional
 9 | 
10 | class TaskStatus(str, Enum):
11 |     PROCESSING = "processing"
12 |     FAILED = "failed"
13 |     COMPLETED = "completed"
14 | 
15 | class FilterType(str, Enum):
16 |     RAW = "raw"
17 |     FIT = "fit"
18 |     BM25 = "bm25"
19 |     LLM = "llm"
20 | 
21 | def load_config() -> Dict:
22 |     """Load and return application configuration."""
23 |     config_path = Path(__file__).parent / "config.yml"
24 |     with open(config_path, "r") as config_file:
25 |         return yaml.safe_load(config_file)
26 | 
27 | def setup_logging(config: Dict) -> None:
28 |     """Configure application logging."""
29 |     logging.basicConfig(
30 |         level=config["logging"]["level"],
31 |         format=config["logging"]["format"]
32 |     )
33 | 
34 | def get_base_url(request: Request) -> str:
35 |     """Get base URL including scheme and host."""
36 |     return f"{request.url.scheme}://{request.url.netloc}"
37 | 
38 | def is_task_id(value: str) -> bool:
39 |     """Check if the value matches task ID pattern."""
40 |     return value.startswith("llm_") and "_" in value
41 | 
42 | def datetime_handler(obj: any) -> Optional[str]:
43 |     """Handle datetime serialization for JSON."""
44 |     if hasattr(obj, 'isoformat'):
45 |         return obj.isoformat()
46 |     raise TypeError(f"Object of type {type(obj)} is not JSON serializable")
47 | 
48 | def should_cleanup_task(created_at: str) -> bool:
49 |     """Check if task should be cleaned up based on creation time."""
50 |     created = datetime.fromisoformat(created_at)
51 |     return (datetime.now() - created).total_seconds() > 3600
52 | 
53 | def decode_redis_hash(hash_data: Dict[bytes, bytes]) -> Dict[str, str]:
54 |     """Decode Redis hash data from bytes to strings."""
55 |     return {k.decode('utf-8'): v.decode('utf-8') for k, v in hash_data.items()}
56 | 
57 | 
58 | 
59 | def verify_email_domain(email: str) -> bool:
60 |     try:
61 |         domain = email.split('@')[1]
62 |         # Try to resolve MX records for the domain.
63 |         records = dns.resolver.resolve(domain, 'MX')
64 |         return True if records else False
65 |     except Exception as e:
66 |         return False


--------------------------------------------------------------------------------
/docker-compose.yml:
--------------------------------------------------------------------------------
 1 | # Base configuration (not a service, just a reusable config block)
 2 | x-base-config: &base-config
 3 |   ports:
 4 |     - "11235:11235"
 5 |     - "8000:8000"
 6 |     - "9222:9222"
 7 |     - "8080:8080"
 8 |   environment:
 9 |     - CRAWL4AI_API_TOKEN=${CRAWL4AI_API_TOKEN:-}
10 |     - OPENAI_API_KEY=${OPENAI_API_KEY:-}
11 |     - CLAUDE_API_KEY=${CLAUDE_API_KEY:-}
12 |   volumes:
13 |     - /dev/shm:/dev/shm
14 |   deploy:
15 |     resources:
16 |       limits:
17 |         memory: 4G
18 |       reservations:
19 |         memory: 1G
20 |   restart: unless-stopped
21 |   healthcheck:
22 |     test: ["CMD", "curl", "-f", "http://localhost:11235/health"]
23 |     interval: 30s
24 |     timeout: 10s
25 |     retries: 3
26 |     start_period: 40s
27 | 
28 | services:
29 |   # Local build services for different platforms
30 |   crawl4ai-amd64:
31 |     build:
32 |       context: .
33 |       dockerfile: Dockerfile
34 |       args:
35 |         PYTHON_VERSION: "3.10"
36 |         INSTALL_TYPE: ${INSTALL_TYPE:-basic}
37 |         ENABLE_GPU: false
38 |       platforms:
39 |         - linux/amd64
40 |     profiles: ["local-amd64"]
41 |     <<: *base-config  # extends yerine doğrudan yapılandırmayı dahil ettik
42 | 
43 |   crawl4ai-arm64:
44 |     build:
45 |       context: .
46 |       dockerfile: Dockerfile
47 |       args:
48 |         PYTHON_VERSION: "3.10"
49 |         INSTALL_TYPE: ${INSTALL_TYPE:-basic}
50 |         ENABLE_GPU: false
51 |       platforms:
52 |         - linux/arm64
53 |     profiles: ["local-arm64"]
54 |     <<: *base-config
55 | 
56 |   # Hub services for different platforms and versions
57 |   crawl4ai-hub-amd64:
58 |     image: unclecode/crawl4ai:${VERSION:-basic}-amd64
59 |     profiles: ["hub-amd64"]
60 |     <<: *base-config
61 | 
62 |   crawl4ai-hub-arm64:
63 |     image: unclecode/crawl4ai:${VERSION:-basic}-arm64
64 |     profiles: ["hub-arm64"]
65 |     <<: *base-config


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/assets/pitch-dark.png


--------------------------------------------------------------------------------
 1 | <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
 2 |     <!-- Background -->
 3 |     <rect width="800" height="500" fill="#1a1a1a"/>
 4 |     
 5 |     <!-- Opportunities Section -->
 6 |     <g transform="translate(50,50)">
 7 |         <!-- Opportunity 1 Box -->
 8 |         <rect x="0" y="0" width="300" height="150" rx="10" fill="#1a2d3d" stroke="#64b5f6" stroke-width="2"/>
 9 |         <text x="150" y="30" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="#64b5f6">Data Capitalization Opportunity</text>
10 |         <text x="150" y="60" text-anchor="middle" font-family="Arial" font-size="12" fill="#e0e0e0">
11 |             <tspan x="150" dy="0">Transform digital footprints into assets</tspan>
12 |             <tspan x="150" dy="20">Personal data as capital</tspan>
13 |             <tspan x="150" dy="20">Enterprise knowledge valuation</tspan>
14 |             <tspan x="150" dy="20">New form of wealth creation</tspan>
15 |         </text>
16 | 
17 |         <!-- Opportunity 2 Box -->
18 |         <rect x="0" y="200" width="300" height="150" rx="10" fill="#1a2d1a" stroke="#81c784" stroke-width="2"/>
19 |         <text x="150" y="230" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="#81c784">Authentic Data Potential</text>
20 |         <text x="150" y="260" text-anchor="middle" font-family="Arial" font-size="12" fill="#e0e0e0">
21 |             <tspan x="150" dy="0">Vast reservoir of real insights</tspan>
22 |             <tspan x="150" dy="20">Enhanced AI development</tspan>
23 |             <tspan x="150" dy="20">Diverse human knowledge</tspan>
24 |             <tspan x="150" dy="20">Willing participation model</tspan>
25 |         </text>
26 |     </g>
27 | 
28 |     <!-- Development Pathway -->
29 |     <g transform="translate(450,50)">
30 |         <!-- Step 1 Box -->
31 |         <rect x="0" y="0" width="300" height="100" rx="10" fill="#2d1a2d" stroke="#ce93d8" stroke-width="2"/>
32 |         <text x="150" y="35" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="#ce93d8">1. Open-Source Foundation</text>
33 |         <text x="150" y="65" text-anchor="middle" font-family="Arial" font-size="12" fill="#e0e0e0">Data extraction engine &amp; community development</text>
34 | 
35 |         <!-- Step 2 Box -->
36 |         <rect x="0" y="125" width="300" height="100" rx="10" fill="#2d1a2d" stroke="#ce93d8" stroke-width="2"/>
37 |         <text x="150" y="160" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="#ce93d8">2. Data Capitalization Platform</text>
38 |         <text x="150" y="190" text-anchor="middle" font-family="Arial" font-size="12" fill="#e0e0e0">Tools to structure &amp; value digital assets</text>
39 | 
40 |         <!-- Step 3 Box -->
41 |         <rect x="0" y="250" width="300" height="100" rx="10" fill="#2d1a2d" stroke="#ce93d8" stroke-width="2"/>
42 |         <text x="150" y="285" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="#ce93d8">3. Shared Data Marketplace</text>
43 |         <text x="150" y="315" text-anchor="middle" font-family="Arial" font-size="12" fill="#e0e0e0">Economic platform for data exchange</text>
44 |     </g>
45 | 
46 |     <!-- Connecting Arrows -->
47 |     <g transform="translate(400,125)">
48 |         <path d="M-20,0 L40,0" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
49 |         <path d="M-20,200 L40,200" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
50 |     </g>
51 | 
52 |     <!-- Arrow Marker -->
53 |     <defs>
54 |         <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
55 |             <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
56 |         </marker>
57 |     </defs>
58 | 
59 |     <!-- Vision Box at Bottom -->
60 |     <g transform="translate(200,420)">
61 |         <rect x="0" y="0" width="400" height="60" rx="10" fill="#2d2613" stroke="#ffd54f" stroke-width="2"/>
62 |         <text x="200" y="35" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="#ffd54f">Economic Vision: Shared Data Economy</text>
63 |     </g>
64 | </svg>


--------------------------------------------------------------------------------
 1 | <svg xmlns="http://www.w3.org/2000/svg" width="120" height="35" viewBox="0 0 120 35">
 2 |   <!-- Dark Theme -->
 3 |   <g>
 4 |     <defs>
 5 |       <pattern id="halftoneDark" width="4" height="4" patternUnits="userSpaceOnUse">
 6 |         <circle cx="2" cy="2" r="1" fill="#eee" opacity="0.1"/>
 7 |       </pattern>
 8 |       <pattern id="halftoneTextDark" width="3" height="3" patternUnits="userSpaceOnUse">
 9 |         <circle cx="1.5" cy="1.5" r="2" fill="#aaa" opacity="0.2"/>
10 |       </pattern>
11 |     </defs>
12 |     <!-- White border - added as outer rectangle -->
13 |     <rect width="120" height="35" rx="5" fill="#111"/>
14 |     <!-- Dark background slightly smaller to show thicker border -->
15 |     <rect x="2" y="2" width="116" height="31" rx="4" fill="#1a1a1a"/>
16 |     <rect x="2" y="2" width="116" height="31" rx="4" fill="url(#halftoneDark)"/>
17 |     
18 |     <!-- Logo with halftone -->
19 |     <path d="M30 17.5 a7.5 7.5 0 1 1 -15 0 a7.5 7.5 0 1 1 15 0" fill="none" stroke="#eee" stroke-width="2"/>
20 |     <path d="M18 17.5 L27 17.5" stroke="#eee" stroke-width="2"/>
21 |     <circle cx="22.5" cy="17.5" r="2" fill="#eee"/>
22 |     
23 |     <text x="40" y="23" fill="#eee" font-family="Arial, sans-serif" font-weight="500" font-size="14">Crawl4AI</text>
24 |   </g>
25 | </svg>


--------------------------------------------------------------------------------
 1 | <svg xmlns="http://www.w3.org/2000/svg" width="120" height="35" viewBox="0 0 120 35">
 2 |   <g>
 3 |     <defs>
 4 |       <pattern id="cyberdots" width="4" height="4" patternUnits="userSpaceOnUse">
 5 |         <circle cx="2" cy="2" r="1">
 6 |           <animate attributeName="fill" 
 7 |                    values="#FF2EC4;#8B5CF6;#0BC5EA;#FF2EC4" 
 8 |                    dur="6s" 
 9 |                    repeatCount="indefinite"/>
10 |           <animate attributeName="opacity" 
11 |                    values="0.2;0.4;0.2" 
12 |                    dur="4s" 
13 |                    repeatCount="indefinite"/>
14 |         </circle>
15 |       </pattern>
16 |       <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
17 |         <feGaussianBlur stdDeviation="1" result="blur"/>
18 |         <feFlood flood-color="#FF2EC4" flood-opacity="0.2">
19 |           <animate attributeName="flood-color"
20 |                    values="#FF2EC4;#8B5CF6;#0BC5EA;#FF2EC4"
21 |                    dur="8s"
22 |                    repeatCount="indefinite"/>
23 |         </feFlood>
24 |         <feComposite in2="blur" operator="in"/>
25 |         <feMerge>
26 |           <feMergeNode/>
27 |           <feMergeNode in="SourceGraphic"/>
28 |         </feMerge>
29 |       </filter>
30 |     </defs>
31 |     
32 |     <rect width="120" height="35" rx="5" fill="#0A0A0F"/>
33 |     <rect x="2" y="2" width="116" height="31" rx="4" fill="#16161E"/>
34 |     <rect x="2" y="2" width="116" height="31" rx="4" fill="url(#cyberdots)"/>
35 |     
36 |     <!-- Logo with animated neon -->
37 |     <path d="M30 17.5 a7.5 7.5 0 1 1 -15 0 a7.5 7.5 0 1 1 15 0" fill="none" stroke="#8B5CF6" stroke-width="2" filter="url(#neonGlow)">
38 |       <animate attributeName="stroke"
39 |                values="#FF2EC4;#8B5CF6;#0BC5EA;#FF2EC4"
40 |                dur="8s"
41 |                repeatCount="indefinite"/>
42 |     </path>
43 |     <path d="M18 17.5 L27 17.5" stroke="#8B5CF6" stroke-width="2" filter="url(#neonGlow)">
44 |       <animate attributeName="stroke"
45 |                values="#FF2EC4;#8B5CF6;#0BC5EA;#FF2EC4"
46 |                dur="8s"
47 |                repeatCount="indefinite"/>
48 |     </path>
49 |     <circle cx="22.5" cy="17.5" r="2" fill="#0BC5EA">
50 |       <animate attributeName="fill" 
51 |                values="#0BC5EA;#FF2EC4;#8B5CF6;#0BC5EA" 
52 |                dur="8s" 
53 |                repeatCount="indefinite"/>
54 |     </circle>
55 |     
56 |     <text x="40" y="23" font-family="Arial, sans-serif" font-weight="500" font-size="14" filter="url(#neonGlow)">
57 |       <animate attributeName="fill"
58 |                values="#FF2EC4;#8B5CF6;#0BC5EA;#FF2EC4"
59 |                dur="8s"
60 |                repeatCount="indefinite"/>
61 |       Crawl4AI
62 |     </text>
63 |   </g>
64 | </svg>


--------------------------------------------------------------------------------
 1 | <svg xmlns="http://www.w3.org/2000/svg" width="120" height="35" viewBox="0 0 120 35">
 2 |   <g>
 3 |     <defs>
 4 |       <pattern id="halftoneLight" width="4" height="4" patternUnits="userSpaceOnUse">
 5 |         <circle cx="2" cy="2" r="1" fill="#111" opacity="0.1"/>
 6 |       </pattern>
 7 |     </defs>
 8 |     <!-- Dark border -->
 9 |     <rect width="120" height="35" rx="5" fill="#DDD"/>
10 |     <!-- Light background -->
11 |     <rect x="2" y="2" width="116" height="31" rx="4" fill="#fff"/>
12 |     <rect x="2" y="2" width="116" height="31" rx="4" fill="url(#halftoneLight)"/>
13 |     
14 |     <!-- Logo -->
15 |     <path d="M30 17.5 a7.5 7.5 0 1 1 -15 0 a7.5 7.5 0 1 1 15 0" fill="none" stroke="#111" stroke-width="2"/>
16 |     <path d="M18 17.5 L27 17.5" stroke="#111" stroke-width="2"/>
17 |     <circle cx="22.5" cy="17.5" r="2" fill="#111"/>
18 |     
19 |     <text x="40" y="23" fill="#111" font-family="Arial, sans-serif" font-weight="500" font-size="14">Crawl4AI</text>
20 |   </g>
21 | </svg>


--------------------------------------------------------------------------------
 1 | <svg xmlns="http://www.w3.org/2000/svg" width="120" height="35" viewBox="0 0 120 35">
 2 |   <g>
 3 |     <defs>
 4 |       <pattern id="halftoneDark" width="4" height="4" patternUnits="userSpaceOnUse">
 5 |         <circle cx="2" cy="2" r="1" fill="#8B5CF6" opacity="0.1"/>
 6 |       </pattern>
 7 |       <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
 8 |         <feGaussianBlur stdDeviation="1" result="blur"/>
 9 |         <feFlood flood-color="#8B5CF6" flood-opacity="0.2"/>
10 |         <feComposite in2="blur" operator="in"/>
11 |         <feMerge>
12 |           <feMergeNode/>
13 |           <feMergeNode in="SourceGraphic"/>
14 |         </feMerge>
15 |       </filter>
16 |     </defs>
17 |     <rect width="120" height="35" rx="5" fill="#0A0A0F"/>
18 |     <rect x="2" y="2" width="116" height="31" rx="4" fill="#16161E"/>
19 |     <rect x="2" y="2" width="116" height="31" rx="4" fill="url(#halftoneDark)"/>
20 |     
21 |     <!-- Logo with neon glow -->
22 |     <path d="M30 17.5 a7.5 7.5 0 1 1 -15 0 a7.5 7.5 0 1 1 15 0" fill="none" stroke="#8B5CF6" stroke-width="2" filter="url(#neonGlow)"/>
23 |     <path d="M18 17.5 L27 17.5" stroke="#8B5CF6" stroke-width="2" filter="url(#neonGlow)"/>
24 |     <circle cx="22.5" cy="17.5" r="2" fill="#8B5CF6"/>
25 |     
26 |     <text x="40" y="23" fill="#fff" font-family="Arial, sans-serif" font-weight="500" font-size="14" filter="url(#neonGlow)">Crawl4AI</text>
27 |   </g>
28 | </svg>


--------------------------------------------------------------------------------
/docs/examples/README_BUILTIN_BROWSER.md:
--------------------------------------------------------------------------------
  1 | # Builtin Browser in Crawl4AI
  2 | 
  3 | This document explains the builtin browser feature in Crawl4AI and how to use it effectively.
  4 | 
  5 | ## What is the Builtin Browser?
  6 | 
  7 | The builtin browser is a persistent Chrome instance that Crawl4AI manages for you. It runs in the background and can be used by multiple crawling operations, eliminating the need to start and stop browsers for each crawl.
  8 | 
  9 | Benefits include:
 10 | - **Faster startup times** - The browser is already running, so your scripts start faster
 11 | - **Shared resources** - All your crawling scripts can use the same browser instance
 12 | - **Simplified management** - No need to worry about CDP URLs or browser processes
 13 | - **Persistent cookies and sessions** - Browser state persists between script runs
 14 | - **Less resource usage** - Only one browser instance for multiple scripts
 15 | 
 16 | ## Using the Builtin Browser
 17 | 
 18 | ### In Python Code
 19 | 
 20 | Using the builtin browser in your code is simple:
 21 | 
 22 | ```python
 23 | from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig
 24 | 
 25 | # Create browser config with builtin mode
 26 | browser_config = BrowserConfig(
 27 |     browser_mode="builtin",  # This is the key setting!
 28 |     headless=True            # Can be headless or not
 29 | )
 30 | 
 31 | # Create the crawler
 32 | crawler = AsyncWebCrawler(config=browser_config)
 33 | 
 34 | # Use it - no need to explicitly start()
 35 | result = await crawler.arun("https://example.com")
 36 | ```
 37 | 
 38 | Key points:
 39 | 1. Set `browser_mode="builtin"` in your BrowserConfig
 40 | 2. No need for explicit `start()` call - the crawler will automatically connect to the builtin browser
 41 | 3. No need to use a context manager or call `close()` - the browser stays running
 42 | 
 43 | ### Via CLI
 44 | 
 45 | The CLI provides commands to manage the builtin browser:
 46 | 
 47 | ```bash
 48 | # Start the builtin browser
 49 | crwl browser start
 50 | 
 51 | # Check its status
 52 | crwl browser status
 53 | 
 54 | # Open a visible window to see what the browser is doing
 55 | crwl browser view --url https://example.com
 56 | 
 57 | # Stop it when no longer needed
 58 | crwl browser stop
 59 | 
 60 | # Restart with different settings
 61 | crwl browser restart --no-headless
 62 | ```
 63 | 
 64 | When crawling via CLI, simply add the builtin browser mode:
 65 | 
 66 | ```bash
 67 | crwl https://example.com -b "browser_mode=builtin"
 68 | ```
 69 | 
 70 | ## How It Works
 71 | 
 72 | 1. When a crawler with `browser_mode="builtin"` is created:
 73 |    - It checks if a builtin browser is already running
 74 |    - If not, it automatically launches one
 75 |    - It connects to the browser via CDP (Chrome DevTools Protocol)
 76 | 
 77 | 2. The browser process continues running after your script exits
 78 |    - This means it's ready for the next crawl
 79 |    - You can manage it via the CLI commands
 80 | 
 81 | 3. During installation, Crawl4AI attempts to create a builtin browser automatically
 82 | 
 83 | ## Example
 84 | 
 85 | See the [builtin_browser_example.py](builtin_browser_example.py) file for a complete example.
 86 | 
 87 | Run it with:
 88 | 
 89 | ```bash
 90 | python builtin_browser_example.py
 91 | ```
 92 | 
 93 | ## When to Use
 94 | 
 95 | The builtin browser is ideal for:
 96 | - Scripts that run frequently
 97 | - Development and testing workflows
 98 | - Applications that need to minimize startup time
 99 | - Systems where you want to manage browser instances centrally
100 | 
101 | You might not want to use it when:
102 | - Running one-off scripts
103 | - When you need different browser configurations for different tasks
104 | - In environments where persistent processes are not allowed
105 | 
106 | ## Troubleshooting
107 | 
108 | If you encounter issues:
109 | 
110 | 1. Check the browser status:
111 |    ```
112 |    crwl browser status
113 |    ```
114 | 
115 | 2. Try restarting it:
116 |    ```
117 |    crwl browser restart
118 |    ```
119 | 
120 | 3. If problems persist, stop it and let Crawl4AI start a fresh one:
121 |    ```
122 |    crwl browser stop
123 |    ```


--------------------------------------------------------------------------------
/docs/examples/arun_vs_arun_many.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | import time
 3 | from crawl4ai.async_webcrawler import AsyncWebCrawler, CacheMode
 4 | from crawl4ai.async_configs import CrawlerRunConfig
 5 | from crawl4ai.async_dispatcher import MemoryAdaptiveDispatcher, RateLimiter
 6 | 
 7 | VERBOSE = False
 8 | 
 9 | async def crawl_sequential(urls):
10 |     config = CrawlerRunConfig(cache_mode=CacheMode.BYPASS, verbose=VERBOSE)
11 |     results = []
12 |     start_time = time.perf_counter()
13 |     async with AsyncWebCrawler() as crawler:
14 |         for url in urls:
15 |             result_container = await crawler.arun(url=url, config=config)
16 |             results.append(result_container[0])
17 |     total_time = time.perf_counter() - start_time
18 |     return total_time, results
19 | 
20 | async def crawl_parallel_dispatcher(urls):
21 |     config = CrawlerRunConfig(cache_mode=CacheMode.BYPASS, verbose=VERBOSE)
22 |     # Dispatcher with rate limiter enabled (default behavior)
23 |     dispatcher = MemoryAdaptiveDispatcher(
24 |         rate_limiter=RateLimiter(base_delay=(1.0, 3.0), max_delay=60.0, max_retries=3),
25 |         max_session_permit=50,
26 |     )
27 |     start_time = time.perf_counter()
28 |     async with AsyncWebCrawler() as crawler:
29 |         result_container = await crawler.arun_many(urls=urls, config=config, dispatcher=dispatcher)
30 |         results = []
31 |         if isinstance(result_container, list):
32 |             results = result_container
33 |         else:
34 |             async for res in result_container:
35 |                 results.append(res)
36 |     total_time = time.perf_counter() - start_time
37 |     return total_time, results
38 | 
39 | async def crawl_parallel_no_rate_limit(urls):
40 |     config = CrawlerRunConfig(cache_mode=CacheMode.BYPASS, verbose=VERBOSE)
41 |     # Dispatcher with no rate limiter and a high session permit to avoid queuing
42 |     dispatcher = MemoryAdaptiveDispatcher(
43 |         rate_limiter=None,
44 |         max_session_permit=len(urls)  # allow all URLs concurrently
45 |     )
46 |     start_time = time.perf_counter()
47 |     async with AsyncWebCrawler() as crawler:
48 |         result_container = await crawler.arun_many(urls=urls, config=config, dispatcher=dispatcher)
49 |         results = []
50 |         if isinstance(result_container, list):
51 |             results = result_container
52 |         else:
53 |             async for res in result_container:
54 |                 results.append(res)
55 |     total_time = time.perf_counter() - start_time
56 |     return total_time, results
57 | 
58 | async def main():
59 |     urls = ["https://example.com"] * 100
60 |     print(f"Crawling {len(urls)} URLs sequentially...")
61 |     seq_time, seq_results = await crawl_sequential(urls)
62 |     print(f"Sequential crawling took: {seq_time:.2f} seconds\n")
63 |     
64 |     print(f"Crawling {len(urls)} URLs in parallel using arun_many with dispatcher (with rate limit)...")
65 |     disp_time, disp_results = await crawl_parallel_dispatcher(urls)
66 |     print(f"Parallel (dispatcher with rate limiter) took: {disp_time:.2f} seconds\n")
67 |        
68 |     print(f"Crawling {len(urls)} URLs in parallel using dispatcher with no rate limiter...")
69 |     no_rl_time, no_rl_results = await crawl_parallel_no_rate_limit(urls)
70 |     print(f"Parallel (dispatcher without rate limiter) took: {no_rl_time:.2f} seconds\n")
71 |     
72 |     print("Crawl4ai - Crawling Comparison")
73 |     print("--------------------------------------------------------")
74 |     print(f"Sequential crawling took: {seq_time:.2f} seconds")
75 |     print(f"Parallel (dispatcher with rate limiter) took: {disp_time:.2f} seconds")
76 |     print(f"Parallel (dispatcher without rate limiter) took: {no_rl_time:.2f} seconds")
77 |     
78 | if __name__ == "__main__":
79 |     asyncio.run(main())
80 | 


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/examples/assets/audio.mp3


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/examples/assets/basic.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/examples/assets/cosine_extraction.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/examples/assets/css_js.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/examples/assets/css_selector.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/examples/assets/exec_script.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/examples/assets/llm_extraction.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/examples/assets/semantic_extraction_cosine.png


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/examples/assets/semantic_extraction_llm.png


--------------------------------------------------------------------------------
/docs/examples/async_webcrawler_multiple_urls_example.py:
--------------------------------------------------------------------------------
 1 | # File: async_webcrawler_multiple_urls_example.py
 2 | import os, sys
 3 | 
 4 | # append 2 parent directories to sys.path to import crawl4ai
 5 | parent_dir = os.path.dirname(
 6 |     os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 7 | )
 8 | sys.path.append(parent_dir)
 9 | 
10 | import asyncio
11 | from crawl4ai import AsyncWebCrawler
12 | 
13 | 
14 | async def main():
15 |     # Initialize the AsyncWebCrawler
16 |     async with AsyncWebCrawler(verbose=True) as crawler:
17 |         # List of URLs to crawl
18 |         urls = [
19 |             "https://example.com",
20 |             "https://python.org",
21 |             "https://github.com",
22 |             "https://stackoverflow.com",
23 |             "https://news.ycombinator.com",
24 |         ]
25 | 
26 |         # Set up crawling parameters
27 |         word_count_threshold = 100
28 | 
29 |         # Run the crawling process for multiple URLs
30 |         results = await crawler.arun_many(
31 |             urls=urls,
32 |             word_count_threshold=word_count_threshold,
33 |             bypass_cache=True,
34 |             verbose=True,
35 |         )
36 | 
37 |         # Process the results
38 |         for result in results:
39 |             if result.success:
40 |                 print(f"Successfully crawled: {result.url}")
41 |                 print(f"Title: {result.metadata.get('title', 'N/A')}")
42 |                 print(f"Word count: {len(result.markdown.split())}")
43 |                 print(
44 |                     f"Number of links: {len(result.links.get('internal', [])) + len(result.links.get('external', []))}"
45 |                 )
46 |                 print(f"Number of images: {len(result.media.get('images', []))}")
47 |                 print("---")
48 |             else:
49 |                 print(f"Failed to crawl: {result.url}")
50 |                 print(f"Error: {result.error_message}")
51 |                 print("---")
52 | 
53 | 
54 | if __name__ == "__main__":
55 |     asyncio.run(main())
56 | 


--------------------------------------------------------------------------------
/docs/examples/builtin_browser_example.py:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env python3
 2 | """
 3 | Builtin Browser Example
 4 | 
 5 | This example demonstrates how to use Crawl4AI's builtin browser feature,
 6 | which simplifies the browser management process. With builtin mode:
 7 | 
 8 | - No need to manually start or connect to a browser
 9 | - No need to manage CDP URLs or browser processes
10 | - Automatically connects to an existing browser or launches one if needed
11 | - Browser persists between script runs, reducing startup time
12 | - No explicit cleanup or close() calls needed
13 | 
14 | The example also demonstrates "auto-starting" where you don't need to explicitly
15 | call start() method on the crawler.
16 | """
17 | 
18 | import asyncio
19 | from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode
20 | import time
21 | 
22 | async def crawl_with_builtin_browser():
23 |     """
24 |     Simple example of crawling with the builtin browser.
25 |     
26 |     Key features:
27 |     1. browser_mode="builtin" in BrowserConfig
28 |     2. No explicit start() call needed
29 |     3. No explicit close() needed
30 |     """
31 |     print("\n=== Crawl4AI Builtin Browser Example ===\n")
32 |     
33 |     # Create a browser configuration with builtin mode
34 |     browser_config = BrowserConfig(
35 |         browser_mode="builtin",  # This is the key setting!
36 |         headless=True            # Can run headless for background operation
37 |     )
38 |     
39 |     # Create crawler run configuration
40 |     crawler_config = CrawlerRunConfig(
41 |         cache_mode=CacheMode.BYPASS,  # Skip cache for this demo
42 |         screenshot=True,              # Take a screenshot
43 |         verbose=True                  # Show verbose logging
44 |     )
45 |     
46 |     # Create the crawler instance
47 |     # Note: We don't need to use "async with" context manager
48 |     crawler = AsyncWebCrawler(config=browser_config)
49 |     
50 |     # Start crawling several URLs - no explicit start() needed!
51 |     # The crawler will automatically connect to the builtin browser
52 |     print("\n➡️ Crawling first URL...")
53 |     t0 = time.time()
54 |     result1 = await crawler.arun(
55 |         url="https://crawl4ai.com",
56 |         config=crawler_config
57 |     )
58 |     t1 = time.time()
59 |     print(f"✅ First URL crawled in {t1-t0:.2f} seconds")
60 |     print(f"   Got {len(result1.markdown.raw_markdown)} characters of content")
61 |     print(f"   Title: {result1.metadata.get('title', 'No title')}")
62 |     
63 |     # Try another URL - the browser is already running, so this should be faster
64 |     print("\n➡️ Crawling second URL...")
65 |     t0 = time.time()
66 |     result2 = await crawler.arun(
67 |         url="https://example.com",
68 |         config=crawler_config
69 |     )
70 |     t1 = time.time()
71 |     print(f"✅ Second URL crawled in {t1-t0:.2f} seconds")
72 |     print(f"   Got {len(result2.markdown.raw_markdown)} characters of content")
73 |     print(f"   Title: {result2.metadata.get('title', 'No title')}")
74 |     
75 |     # The builtin browser continues running in the background
76 |     # No need to explicitly close it
77 |     print("\n🔄 The builtin browser remains running for future use")
78 |     print("   You can use 'crwl browser status' to check its status")
79 |     print("   or 'crwl browser stop' to stop it when completely done")
80 | 
81 | async def main():
82 |     """Run the example"""
83 |     await crawl_with_builtin_browser()
84 | 
85 | if __name__ == "__main__":
86 |     asyncio.run(main())


--------------------------------------------------------------------------------
/docs/examples/chainlit.md:
--------------------------------------------------------------------------------
1 | # Welcome to Crawl4AI! 🚀🤖
2 | 
3 | Hi there, Developer! 👋 Here is an example of a research pipeline, where you can share a URL in your conversation with any LLM, and then the context of crawled pages will be used as the context.


--------------------------------------------------------------------------------
/docs/examples/cli/browser.yml:
--------------------------------------------------------------------------------
 1 | browser_type: "chromium"
 2 | headless: true
 3 | viewport_width: 1280
 4 | viewport_height: 800
 5 | user_agent_mode: "random"
 6 | verbose: true
 7 | text_mode: false
 8 | light_mode: false
 9 | ignore_https_errors: true
10 | java_script_enabled: true
11 | extra_args:
12 |   - "--disable-gpu"
13 |   - "--no-sandbox"


--------------------------------------------------------------------------------
/docs/examples/cli/crawler.yml:
--------------------------------------------------------------------------------
 1 | cache_mode: "bypass"
 2 | wait_until: "networkidle"
 3 | page_timeout: 30000
 4 | delay_before_return_html: 0.5
 5 | word_count_threshold: 100
 6 | scan_full_page: true
 7 | scroll_delay: 0.3
 8 | process_iframes: false
 9 | remove_overlay_elements: true
10 | magic: true
11 | verbose: true
12 | exclude_external_links: true
13 | exclude_social_media_links: true


--------------------------------------------------------------------------------
/docs/examples/cli/css_schema.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "ArticleExtractor",
 3 |   "baseSelector": ".cards[data-tax=news] .card__data",
 4 |   "fields": [
 5 |     {
 6 |       "name": "title",
 7 |       "selector": "h4.card__title",
 8 |       "type": "text"
 9 |     },
10 |     {
11 |       "name": "link",
12 |       "selector": "h4.card__title a", 
13 |       "type": "attribute",
14 |       "attribute": "href"
15 |     },
16 |     {
17 |       "name": "details",
18 |       "selector": ".card__details",
19 |       "type": "text"
20 |     },
21 |     {
22 |       "name": "topics",
23 |       "selector": ".card__topics.topics",
24 |       "type": "text"
25 |     }
26 |   ]
27 | }


--------------------------------------------------------------------------------
/docs/examples/cli/extract.yml:
--------------------------------------------------------------------------------
 1 | type: "llm"
 2 | provider: "openai/gpt-4o-mini"
 3 | api_token: "env:OPENAI_API_KEY"
 4 | instruction: "Extract all articles with their titles, authors, publication dates and main topics in a structured format"
 5 | params:
 6 |   chunk_token_threshold: 4096
 7 |   overlap_rate: 0.1
 8 |   word_token_rate: 0.75
 9 |   temperature: 0.3
10 |   max_tokens: 1000
11 |   verbose: true


--------------------------------------------------------------------------------
/docs/examples/cli/extract_css.yml:
--------------------------------------------------------------------------------
1 | type: "json-css"
2 | params:
3 |   verbose: true 


--------------------------------------------------------------------------------
/docs/examples/cli/llm_schema.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "title": "NewsArticle",
 3 |   "type": "object",
 4 |   "properties": {
 5 |     "title": {
 6 |       "type": "string",
 7 |       "description": "The title/headline of the news article"
 8 |     },
 9 |     "link": {
10 |       "type": "string",
11 |       "description": "The URL or link to the full article"
12 |     },
13 |     "details": {
14 |       "type": "string", 
15 |       "description": "Brief summary or details about the article content"
16 |     },
17 |     "topics": {
18 |       "type": "array",
19 |       "items": {
20 |         "type": "string"
21 |       },
22 |       "description": "List of topics or categories associated with the article"
23 |     }
24 |   },
25 |   "required": ["title", "details"]
26 | }


--------------------------------------------------------------------------------
/docs/examples/crawlai_vs_firecrawl.py:
--------------------------------------------------------------------------------
 1 | import os, time
 2 | 
 3 | # append the path to the root of the project
 4 | import sys
 5 | import asyncio
 6 | 
 7 | sys.path.append(os.path.join(os.path.dirname(__file__), "..", ".."))
 8 | from firecrawl import FirecrawlApp
 9 | from crawl4ai import AsyncWebCrawler
10 | 
11 | __data__ = os.path.join(os.path.dirname(__file__), "..", "..") + "/.data"
12 | 
13 | 
14 | async def compare():
15 |     app = FirecrawlApp(api_key=os.environ["FIRECRAWL_API_KEY"])
16 | 
17 |     # Tet Firecrawl with a simple crawl
18 |     start = time.time()
19 |     scrape_status = app.scrape_url(
20 |         "https://www.nbcnews.com/business", params={"formats": ["markdown", "html"]}
21 |     )
22 |     end = time.time()
23 |     print(f"Time taken: {end - start} seconds")
24 |     print(len(scrape_status["markdown"]))
25 |     # save the markdown content with provider name
26 |     with open(f"{__data__}/firecrawl_simple.md", "w") as f:
27 |         f.write(scrape_status["markdown"])
28 |     # Count how many "cldnry.s-nbcnews.com" are in the markdown
29 |     print(scrape_status["markdown"].count("cldnry.s-nbcnews.com"))
30 | 
31 |     async with AsyncWebCrawler() as crawler:
32 |         start = time.time()
33 |         result = await crawler.arun(
34 |             url="https://www.nbcnews.com/business",
35 |             # js_code=["const loadMoreButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.includes('Load More')); loadMoreButton && loadMoreButton.click();"],
36 |             word_count_threshold=0,
37 |             bypass_cache=True,
38 |             verbose=False,
39 |         )
40 |         end = time.time()
41 |         print(f"Time taken: {end - start} seconds")
42 |         print(len(result.markdown))
43 |         # save the markdown content with provider name
44 |         with open(f"{__data__}/crawl4ai_simple.md", "w") as f:
45 |             f.write(result.markdown)
46 |         # count how many "cldnry.s-nbcnews.com" are in the markdown
47 |         print(result.markdown.count("cldnry.s-nbcnews.com"))
48 | 
49 |         start = time.time()
50 |         result = await crawler.arun(
51 |             url="https://www.nbcnews.com/business",
52 |             js_code=[
53 |                 "const loadMoreButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.includes('Load More')); loadMoreButton && loadMoreButton.click();"
54 |             ],
55 |             word_count_threshold=0,
56 |             bypass_cache=True,
57 |             verbose=False,
58 |         )
59 |         end = time.time()
60 |         print(f"Time taken: {end - start} seconds")
61 |         print(len(result.markdown))
62 |         # save the markdown content with provider name
63 |         with open(f"{__data__}/crawl4ai_js.md", "w") as f:
64 |             f.write(result.markdown)
65 |         # count how many "cldnry.s-nbcnews.com" are in the markdown
66 |         print(result.markdown.count("cldnry.s-nbcnews.com"))
67 | 
68 | 
69 | if __name__ == "__main__":
70 |     asyncio.run(compare())
71 | 


--------------------------------------------------------------------------------
/docs/examples/docker_python_sdk.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from crawl4ai.docker_client import Crawl4aiDockerClient
 3 | from crawl4ai import (
 4 |     BrowserConfig,
 5 |     CrawlerRunConfig
 6 | )
 7 | 
 8 | async def main():
 9 |     async with Crawl4aiDockerClient(base_url="http://localhost:8000", verbose=True) as client:
10 |         # If jwt is enabled, authenticate first
11 |         # await client.authenticate("test@example.com")
12 |         
13 |         # Non-streaming crawl
14 |         results = await client.crawl(
15 |             ["https://example.com", "https://python.org"],
16 |             browser_config=BrowserConfig(headless=True),
17 |             crawler_config=CrawlerRunConfig()
18 |         )
19 |         print(f"Non-streaming results: {results}")
20 |         
21 |         # Streaming crawl
22 |         crawler_config = CrawlerRunConfig(stream=True)
23 |         async for result in await client.crawl(
24 |             ["https://example.com", "https://python.org"],
25 |             browser_config=BrowserConfig(headless=True),
26 |             crawler_config=crawler_config
27 |         ):
28 |             print(f"Streamed result: {result}")
29 |         
30 |         # Get schema
31 |         schema = await client.get_schema()
32 |         print(f"Schema: {schema}")
33 | 
34 | if __name__ == "__main__":
35 |     asyncio.run(main())


--------------------------------------------------------------------------------
/docs/examples/full_page_screenshot_and_pdf_export.md:
--------------------------------------------------------------------------------
 1 | # Capturing Full-Page Screenshots and PDFs from Massive Webpages with Crawl4AI
 2 | 
 3 | When dealing with very long web pages, traditional full-page screenshots can be slow or fail entirely. For large pages (like extensive Wikipedia articles), generating a single massive screenshot often leads to delays, memory issues, or style differences.
 4 | 
 5 | **The New Approach:**
 6 | We’ve introduced a new feature that effortlessly handles even the biggest pages by first exporting them as a PDF, then converting that PDF into a high-quality image. This approach leverages the browser’s built-in PDF rendering, making it both stable and efficient for very long content. You also have the option to directly save the PDF for your own usage—no need for multiple passes or complex stitching logic.
 7 | 
 8 | **Key Benefits:**
 9 | - **Reliability:** The PDF export never times out and works regardless of page length.
10 | - **Versatility:** Get both the PDF and a screenshot in one crawl, without reloading or reprocessing.
11 | - **Performance:** Skips manual scrolling and stitching images, reducing complexity and runtime.
12 | 
13 | **Simple Example:**
14 | ```python
15 | import os, sys
16 | import asyncio
17 | from crawl4ai import AsyncWebCrawler, CacheMode
18 | 
19 | # Adjust paths as needed
20 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
21 | sys.path.append(parent_dir)
22 | __location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))
23 | 
24 | async def main():
25 |     async with AsyncWebCrawler() as crawler:
26 |         # Request both PDF and screenshot
27 |         result = await crawler.arun(
28 |             url='https://en.wikipedia.org/wiki/List_of_common_misconceptions',
29 |             cache_mode=CacheMode.BYPASS,
30 |             pdf=True,
31 |             screenshot=True
32 |         )
33 |         
34 |         if result.success:
35 |             # Save screenshot
36 |             if result.screenshot:
37 |                 from base64 import b64decode
38 |                 with open(os.path.join(__location__, "screenshot.png"), "wb") as f:
39 |                     f.write(b64decode(result.screenshot))
40 |             
41 |             # Save PDF
42 |             if result.pdf:
43 |                 pdf_bytes = b64decode(result.pdf)
44 |                 with open(os.path.join(__location__, "page.pdf"), "wb") as f:
45 |                     f.write(pdf_bytes)
46 | 
47 | if __name__ == "__main__":
48 |     asyncio.run(main())
49 | ```
50 | 
51 | **What Happens Under the Hood:**
52 | - Crawl4AI navigates to the target page.
53 | - If `pdf=True`, it exports the current page as a full PDF, capturing all of its content no matter the length.
54 | - If `screenshot=True`, and a PDF is already available, it directly converts the first page of that PDF to an image for you—no repeated loading or scrolling.
55 | - Finally, you get your PDF and/or screenshot ready to use.
56 | 
57 | **Conclusion:**
58 | With this feature, Crawl4AI becomes even more robust and versatile for large-scale content extraction. Whether you need a PDF snapshot or a quick screenshot, you now have a reliable solution for even the most extensive webpages.


--------------------------------------------------------------------------------
/docs/examples/hello_world.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from crawl4ai import (
 3 |     AsyncWebCrawler,
 4 |     BrowserConfig,
 5 |     CrawlerRunConfig,
 6 |     CacheMode,
 7 |     DefaultMarkdownGenerator,
 8 |     PruningContentFilter,
 9 |     CrawlResult
10 | )
11 | 
12 | async def example_cdp():
13 |     browser_conf = BrowserConfig(
14 |         headless=False,
15 |         cdp_url="http://localhost:9223"
16 |     )
17 |     crawler_config = CrawlerRunConfig(
18 |         session_id="test",
19 |         js_code = """(() => { return {"result": "Hello World!"} })()""",
20 |         js_only=True
21 |     )
22 |     async with AsyncWebCrawler(
23 |         config=browser_conf,
24 |         verbose=True,
25 |     ) as crawler:
26 |         result : CrawlResult = await crawler.arun(
27 |             url="https://www.helloworld.org",
28 |             config=crawler_config,
29 |         )
30 |         print(result.js_execution_result)
31 |                    
32 | 
33 | async def main():
34 |     browser_config = BrowserConfig(headless=True, verbose=True)
35 |     async with AsyncWebCrawler(config=browser_config) as crawler:
36 |         crawler_config = CrawlerRunConfig(
37 |             cache_mode=CacheMode.BYPASS,
38 |             markdown_generator=DefaultMarkdownGenerator(
39 |                 content_filter=PruningContentFilter(
40 |                      threshold=0.48, threshold_type="fixed", min_word_threshold=0
41 |                 )
42 |             ),
43 |         )
44 |         result : CrawlResult = await crawler.arun(
45 |             url="https://www.helloworld.org", config=crawler_config
46 |         )
47 |         print(result.markdown.raw_markdown[:500])
48 | 
49 | if __name__ == "__main__":
50 |     asyncio.run(main())
51 | 


--------------------------------------------------------------------------------
/docs/examples/language_support_example.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from crawl4ai import AsyncWebCrawler, AsyncPlaywrightCrawlerStrategy
 3 | 
 4 | 
 5 | async def main():
 6 |     # Example 1: Setting language when creating the crawler
 7 |     crawler1 = AsyncWebCrawler(
 8 |         crawler_strategy=AsyncPlaywrightCrawlerStrategy(
 9 |             headers={"Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"}
10 |         )
11 |     )
12 |     result1 = await crawler1.arun("https://www.example.com")
13 |     print(
14 |         "Example 1 result:", result1.extracted_content[:100]
15 |     )  # Print first 100 characters
16 | 
17 |     # Example 2: Setting language before crawling
18 |     crawler2 = AsyncWebCrawler()
19 |     crawler2.crawler_strategy.headers[
20 |         "Accept-Language"
21 |     ] = "es-ES,es;q=0.9,en-US;q=0.8,en;q=0.7"
22 |     result2 = await crawler2.arun("https://www.example.com")
23 |     print("Example 2 result:", result2.extracted_content[:100])
24 | 
25 |     # Example 3: Setting language when calling arun method
26 |     crawler3 = AsyncWebCrawler()
27 |     result3 = await crawler3.arun(
28 |         "https://www.example.com",
29 |         headers={"Accept-Language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7"},
30 |     )
31 |     print("Example 3 result:", result3.extracted_content[:100])
32 | 
33 |     # Example 4: Crawling multiple pages with different languages
34 |     urls = [
35 |         ("https://www.example.com", "fr-FR,fr;q=0.9"),
36 |         ("https://www.example.org", "es-ES,es;q=0.9"),
37 |         ("https://www.example.net", "de-DE,de;q=0.9"),
38 |     ]
39 | 
40 |     crawler4 = AsyncWebCrawler()
41 |     results = await asyncio.gather(
42 |         *[crawler4.arun(url, headers={"Accept-Language": lang}) for url, lang in urls]
43 |     )
44 | 
45 |     for url, result in zip([u for u, _ in urls], results):
46 |         print(f"Result for {url}:", result.extracted_content[:100])
47 | 
48 | 
49 | if __name__ == "__main__":
50 |     asyncio.run(main())
51 | 


--------------------------------------------------------------------------------
/docs/examples/llm_extraction_openai_pricing.py:
--------------------------------------------------------------------------------
 1 | from crawl4ai import LLMConfig
 2 | from crawl4ai import AsyncWebCrawler, LLMExtractionStrategy
 3 | import asyncio
 4 | import os
 5 | import json
 6 | from pydantic import BaseModel, Field
 7 | 
 8 | url = "https://openai.com/api/pricing/"
 9 | 
10 | 
11 | class OpenAIModelFee(BaseModel):
12 |     model_name: str = Field(..., description="Name of the OpenAI model.")
13 |     input_fee: str = Field(..., description="Fee for input token for the OpenAI model.")
14 |     output_fee: str = Field(
15 |         ..., description="Fee for output token for the OpenAI model."
16 |     )
17 | 
18 | async def main():
19 |     # Use AsyncWebCrawler
20 |     async with AsyncWebCrawler() as crawler:
21 |         result = await crawler.arun(
22 |             url=url,
23 |             word_count_threshold=1,
24 |             extraction_strategy=LLMExtractionStrategy(
25 |                 # provider= "openai/gpt-4o", api_token = os.getenv('OPENAI_API_KEY'),
26 |                 llm_config=LLMConfig(provider="groq/llama-3.1-70b-versatile", api_token=os.getenv("GROQ_API_KEY")),
27 |                 schema=OpenAIModelFee.model_json_schema(),
28 |                 extraction_type="schema",
29 |                 instruction="From the crawled content, extract all mentioned model names along with their "
30 |                 "fees for input and output tokens. Make sure not to miss anything in the entire content. "
31 |                 "One extracted model JSON format should look like this: "
32 |                 '{ "model_name": "GPT-4", "input_fee": "US$10.00 / 1M tokens", "output_fee": "US$30.00 / 1M tokens" }',
33 |             ),
34 |         )
35 |         print("Success:", result.success)
36 |         model_fees = json.loads(result.extracted_content)
37 |         print(len(model_fees))
38 | 
39 |         with open(".data/data.json", "w", encoding="utf-8") as f:
40 |             f.write(result.extracted_content)
41 | 
42 | 
43 | asyncio.run(main())
44 | 


--------------------------------------------------------------------------------
/docs/examples/llm_markdown_generator.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import asyncio
 3 | from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode
 4 | from crawl4ai import LLMConfig
 5 | from crawl4ai.content_filter_strategy import LLMContentFilter
 6 | 
 7 | async def test_llm_filter():
 8 |     # Create an HTML source that needs intelligent filtering
 9 |     url = "https://docs.python.org/3/tutorial/classes.html"
10 |     
11 |     browser_config = BrowserConfig(
12 |         headless=True,
13 |         verbose=True
14 |     )
15 |     
16 |     # run_config = CrawlerRunConfig(cache_mode=CacheMode.BYPASS)
17 |     run_config = CrawlerRunConfig(cache_mode=CacheMode.ENABLED)
18 |     
19 |     async with AsyncWebCrawler(config=browser_config) as crawler:
20 |         # First get the raw HTML
21 |         result = await crawler.arun(url, config=run_config)
22 |         html = result.cleaned_html
23 | 
24 |         # Initialize LLM filter with focused instruction
25 |         filter = LLMContentFilter(
26 |             llm_config=LLMConfig(provider="openai/gpt-4o", api_token=os.getenv('OPENAI_API_KEY')),
27 |             instruction="""
28 |             Focus on extracting the core educational content about Python classes.
29 |             Include:
30 |             - Key concepts and their explanations
31 |             - Important code examples
32 |             - Essential technical details
33 |             Exclude:
34 |             - Navigation elements
35 |             - Sidebars
36 |             - Footer content
37 |             - Version information
38 |             - Any non-essential UI elements
39 |             
40 |             Format the output as clean markdown with proper code blocks and headers.
41 |             """,
42 |             verbose=True
43 |         )
44 |         
45 |         filter = LLMContentFilter(
46 |             llm_config=LLMConfig(provider="openai/gpt-4o",api_token=os.getenv('OPENAI_API_KEY')),
47 |             chunk_token_threshold=2 ** 12 * 2, # 2048 * 2
48 |             ignore_cache = True,
49 |             instruction="""
50 |             Extract the main educational content while preserving its original wording and substance completely. Your task is to:
51 | 
52 |             1. Maintain the exact language and terminology used in the main content
53 |             2. Keep all technical explanations, examples, and educational content intact
54 |             3. Preserve the original flow and structure of the core content
55 |             4. Remove only clearly irrelevant elements like:
56 |             - Navigation menus
57 |             - Advertisement sections
58 |             - Cookie notices
59 |             - Footers with site information
60 |             - Sidebars with external links
61 |             - Any UI elements that don't contribute to learning
62 | 
63 |             The goal is to create a clean markdown version that reads exactly like the original article, 
64 |             keeping all valuable content but free from distracting elements. Imagine you're creating 
65 |             a perfect reading experience where nothing valuable is lost, but all noise is removed.
66 |             """,
67 |             verbose=True
68 |         )        
69 | 
70 |         # Apply filtering
71 |         filtered_content = filter.filter_content(html)
72 |         
73 |         # Show results
74 |         print("\nFiltered Content Length:", len(filtered_content))
75 |         print("\nFirst 500 chars of filtered content:")
76 |         if filtered_content:
77 |             print(filtered_content[0][:500])
78 |         
79 |         # Save on disc the markdown version
80 |         with open("filtered_content.md", "w", encoding="utf-8") as f:
81 |             f.write("\n".join(filtered_content))
82 |         
83 |         # Show token usage
84 |         filter.show_usage()
85 | 
86 | if __name__ == "__main__":
87 |     asyncio.run(test_llm_filter())


--------------------------------------------------------------------------------
/docs/examples/rest_call.py:
--------------------------------------------------------------------------------
 1 | import requests, base64, os
 2 | 
 3 | data = {
 4 |     "urls": ["https://www.nbcnews.com/business"],
 5 |     "screenshot": True,
 6 | }
 7 | 
 8 | response = requests.post("https://crawl4ai.com/crawl", json=data)
 9 | result = response.json()["results"][0]
10 | print(result.keys())
11 | # dict_keys(['url', 'html', 'success', 'cleaned_html', 'media',
12 | # 'links', 'screenshot', 'markdown', 'extracted_content',
13 | # 'metadata', 'error_message'])
14 | with open("screenshot.png", "wb") as f:
15 |     f.write(base64.b64decode(result["screenshot"]))
16 | 
17 | # Example of filtering the content using CSS selectors
18 | data = {
19 |     "urls": ["https://www.nbcnews.com/business"],
20 |     "css_selector": "article",
21 |     "screenshot": True,
22 | }
23 | 
24 | # Example of executing a JS script on the page before extracting the content
25 | data = {
26 |     "urls": ["https://www.nbcnews.com/business"],
27 |     "screenshot": True,
28 |     "js": [
29 |         """
30 |     const loadMoreButton = Array.from(document.querySelectorAll('button')).
31 |     find(button => button.textContent.includes('Load More'));
32 |     loadMoreButton && loadMoreButton.click();
33 |     """
34 |     ],
35 | }
36 | 
37 | # Example of using a custom extraction strategy
38 | data = {
39 |     "urls": ["https://www.nbcnews.com/business"],
40 |     "extraction_strategy": "CosineStrategy",
41 |     "extraction_strategy_args": {"semantic_filter": "inflation rent prices"},
42 | }
43 | 
44 | # Example of using LLM to extract content
45 | data = {
46 |     "urls": ["https://www.nbcnews.com/business"],
47 |     "extraction_strategy": "LLMExtractionStrategy",
48 |     "extraction_strategy_args": {
49 |         "provider": "groq/llama3-8b-8192",
50 |         "api_token": os.environ.get("GROQ_API_KEY"),
51 |         "instruction": """I am interested in only financial news, 
52 |         and translate them in French.""",
53 |     },
54 | }
55 | 


--------------------------------------------------------------------------------
/docs/examples/ssl_example.py:
--------------------------------------------------------------------------------
 1 | """Example showing how to work with SSL certificates in Crawl4AI."""
 2 | 
 3 | import asyncio
 4 | import os
 5 | from crawl4ai import AsyncWebCrawler, CrawlerRunConfig, CacheMode
 6 | 
 7 | # Create tmp directory if it doesn't exist
 8 | parent_dir = os.path.dirname(
 9 |     os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
10 | )
11 | tmp_dir = os.path.join(parent_dir, "tmp")
12 | os.makedirs(tmp_dir, exist_ok=True)
13 | 
14 | 
15 | async def main():
16 |     # Configure crawler to fetch SSL certificate
17 |     config = CrawlerRunConfig(
18 |         fetch_ssl_certificate=True,
19 |         cache_mode=CacheMode.BYPASS,  # Bypass cache to always get fresh certificates
20 |     )
21 | 
22 |     async with AsyncWebCrawler() as crawler:
23 |         result = await crawler.arun(url="https://example.com", config=config)
24 | 
25 |         if result.success and result.ssl_certificate:
26 |             cert = result.ssl_certificate
27 | 
28 |             # 1. Access certificate properties directly
29 |             print("\nCertificate Information:")
30 |             print(f"Issuer: {cert.issuer.get('CN', '')}")
31 |             print(f"Valid until: {cert.valid_until}")
32 |             print(f"Fingerprint: {cert.fingerprint}")
33 | 
34 |             # 2. Export certificate in different formats
35 |             cert.to_json(os.path.join(tmp_dir, "certificate.json"))  # For analysis
36 |             print("\nCertificate exported to:")
37 |             print(f"- JSON: {os.path.join(tmp_dir, 'certificate.json')}")
38 | 
39 |             pem_data = cert.to_pem(
40 |                 os.path.join(tmp_dir, "certificate.pem")
41 |             )  # For web servers
42 |             print(f"- PEM: {os.path.join(tmp_dir, 'certificate.pem')}")
43 | 
44 |             der_data = cert.to_der(
45 |                 os.path.join(tmp_dir, "certificate.der")
46 |             )  # For Java apps
47 |             print(f"- DER: {os.path.join(tmp_dir, 'certificate.der')}")
48 | 
49 | 
50 | if __name__ == "__main__":
51 |     asyncio.run(main())
52 | 


--------------------------------------------------------------------------------
/docs/examples/summarize_page.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import json
 3 | from crawl4ai.web_crawler import WebCrawler
 4 | from crawl4ai.chunking_strategy import *
 5 | from crawl4ai.extraction_strategy import *
 6 | from crawl4ai.crawler_strategy import *
 7 | 
 8 | url = r"https://marketplace.visualstudio.com/items?itemName=Unclecode.groqopilot"
 9 | 
10 | crawler = WebCrawler()
11 | crawler.warmup()
12 | 
13 | from pydantic import BaseModel, Field
14 | 
15 | 
16 | class PageSummary(BaseModel):
17 |     title: str = Field(..., description="Title of the page.")
18 |     summary: str = Field(..., description="Summary of the page.")
19 |     brief_summary: str = Field(..., description="Brief summary of the page.")
20 |     keywords: list = Field(..., description="Keywords assigned to the page.")
21 | 
22 | 
23 | result = crawler.run(
24 |     url=url,
25 |     word_count_threshold=1,
26 |     extraction_strategy=LLMExtractionStrategy(
27 |         provider="openai/gpt-4o",
28 |         api_token=os.getenv("OPENAI_API_KEY"),
29 |         schema=PageSummary.model_json_schema(),
30 |         extraction_type="schema",
31 |         apply_chunking=False,
32 |         instruction="From the crawled content, extract the following details: "
33 |         "1. Title of the page "
34 |         "2. Summary of the page, which is a detailed summary "
35 |         "3. Brief summary of the page, which is a paragraph text "
36 |         "4. Keywords assigned to the page, which is a list of keywords. "
37 |         "The extracted JSON format should look like this: "
38 |         '{ "title": "Page Title", "summary": "Detailed summary of the page.", "brief_summary": "Brief summary in a paragraph.", "keywords": ["keyword1", "keyword2", "keyword3"] }',
39 |     ),
40 |     bypass_cache=True,
41 | )
42 | 
43 | page_summary = json.loads(result.extracted_content)
44 | 
45 | print(page_summary)
46 | 
47 | with open(".data/page_summary.json", "w", encoding="utf-8") as f:
48 |     f.write(result.extracted_content)
49 | 


--------------------------------------------------------------------------------
/docs/md_v2/advanced/crawl-dispatcher.md:
--------------------------------------------------------------------------------
 1 | # Crawl Dispatcher
 2 | 
 3 | We’re excited to announce a **Crawl Dispatcher** module that can handle **thousands** of crawling tasks simultaneously. By efficiently managing system resources (memory, CPU, network), this dispatcher ensures high-performance data extraction at scale. It also provides **real-time monitoring** of each crawler’s status, memory usage, and overall progress.
 4 | 
 5 | Stay tuned—this feature is **coming soon** in an upcoming release of Crawl4AI! For the latest news, keep an eye on our changelogs and follow [@unclecode](https://twitter.com/unclecode) on X.
 6 | 
 7 | Below is a **sample** of how the dispatcher’s performance monitor might look in action:
 8 | 
 9 | ![Crawl Dispatcher Performance Monitor](../assets/images/dispatcher.png)
10 | 
11 | 
12 | We can’t wait to bring you this streamlined, **scalable** approach to multi-URL crawling—**watch this space** for updates!


--------------------------------------------------------------------------------
/docs/md_v2/advanced/proxy-security.md:
--------------------------------------------------------------------------------
 1 | # Proxy 
 2 | 
 3 | ## Basic Proxy Setup
 4 | 
 5 | Simple proxy configuration with `BrowserConfig`:
 6 | 
 7 | ```python
 8 | from crawl4ai.async_configs import BrowserConfig
 9 | 
10 | # Using proxy URL
11 | browser_config = BrowserConfig(proxy="http://proxy.example.com:8080")
12 | async with AsyncWebCrawler(config=browser_config) as crawler:
13 |     result = await crawler.arun(url="https://example.com")
14 | 
15 | # Using SOCKS proxy
16 | browser_config = BrowserConfig(proxy="socks5://proxy.example.com:1080")
17 | async with AsyncWebCrawler(config=browser_config) as crawler:
18 |     result = await crawler.arun(url="https://example.com")
19 | ```
20 | 
21 | ## Authenticated Proxy
22 | 
23 | Use an authenticated proxy with `BrowserConfig`:
24 | 
25 | ```python
26 | from crawl4ai.async_configs import BrowserConfig
27 | 
28 | proxy_config = {
29 |     "server": "http://proxy.example.com:8080",
30 |     "username": "user",
31 |     "password": "pass"
32 | }
33 | 
34 | browser_config = BrowserConfig(proxy_config=proxy_config)
35 | async with AsyncWebCrawler(config=browser_config) as crawler:
36 |     result = await crawler.arun(url="https://example.com")
37 | ```
38 | 
39 | Here's the corrected documentation:
40 | 
41 | ## Rotating Proxies 
42 | 
43 | Example using a proxy rotation service dynamically:
44 | 
45 | ```python
46 | from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig
47 | 
48 | async def get_next_proxy():
49 |     # Your proxy rotation logic here
50 |     return {"server": "http://next.proxy.com:8080"}
51 | 
52 | async def main():
53 |     browser_config = BrowserConfig()
54 |     run_config = CrawlerRunConfig()
55 |     
56 |     async with AsyncWebCrawler(config=browser_config) as crawler:
57 |         # For each URL, create a new run config with different proxy
58 |         for url in urls:
59 |             proxy = await get_next_proxy()
60 |             # Clone the config and update proxy - this creates a new browser context
61 |             current_config = run_config.clone(proxy_config=proxy)
62 |             result = await crawler.arun(url=url, config=current_config)
63 | 
64 | if __name__ == "__main__":
65 |     import asyncio
66 |     asyncio.run(main())
67 | ```
68 | 
69 | 


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/md_v2/assets/DankMono-Bold.woff2


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/md_v2/assets/DankMono-Italic.woff2


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/md_v2/assets/DankMono-Regular.woff2


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/md_v2/assets/Monaco.woff


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/md_v2/assets/docs.zip


--------------------------------------------------------------------------------
/docs/md_v2/assets/highlight.css:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/md_v2/assets/highlight.css


--------------------------------------------------------------------------------
/docs/md_v2/assets/highlight_init.js:
--------------------------------------------------------------------------------
1 | document.addEventListener('DOMContentLoaded', (event) => {
2 |     document.querySelectorAll('pre code').forEach((block) => {
3 |       hljs.highlightBlock(block);
4 |     });
5 |   });
6 |   


--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/docs/md_v2/assets/images/dispatcher.png


--------------------------------------------------------------------------------
/docs/md_v2/basic/installation.md:
--------------------------------------------------------------------------------
  1 | # Installation 💻
  2 | 
  3 | Crawl4AI offers flexible installation options to suit various use cases. You can install it as a Python package, use it with Docker, or run it as a local server.
  4 | 
  5 | ## Option 1: Python Package Installation (Recommended)
  6 | 
  7 | Crawl4AI is now available on PyPI, making installation easier than ever. Choose the option that best fits your needs:
  8 | 
  9 | ### Basic Installation
 10 | 
 11 | For basic web crawling and scraping tasks:
 12 | 
 13 | ```bash
 14 | pip install crawl4ai
 15 | playwright install # Install Playwright dependencies
 16 | ```
 17 | 
 18 | ### Installation with PyTorch
 19 | 
 20 | For advanced text clustering (includes CosineSimilarity cluster strategy):
 21 | 
 22 | ```bash
 23 | pip install crawl4ai[torch]
 24 | ```
 25 | 
 26 | ### Installation with Transformers
 27 | 
 28 | For text summarization and Hugging Face models:
 29 | 
 30 | ```bash
 31 | pip install crawl4ai[transformer]
 32 | ```
 33 | 
 34 | ### Full Installation
 35 | 
 36 | For all features:
 37 | 
 38 | ```bash
 39 | pip install crawl4ai[all]
 40 | ```
 41 | 
 42 | ### Development Installation
 43 | 
 44 | For contributors who plan to modify the source code:
 45 | 
 46 | ```bash
 47 | git clone https://github.com/unclecode/crawl4ai.git
 48 | cd crawl4ai
 49 | pip install -e ".[all]"
 50 | playwright install # Install Playwright dependencies
 51 | ```
 52 | 
 53 | 💡 After installation with "torch", "transformer", or "all" options, it's recommended to run the following CLI command to load the required models:
 54 | 
 55 | ```bash
 56 | crawl4ai-download-models
 57 | ```
 58 | 
 59 | This is optional but will boost the performance and speed of the crawler. You only need to do this once after installation.
 60 | 
 61 | ## Playwright Installation Note for Ubuntu
 62 | 
 63 | If you encounter issues with Playwright installation on Ubuntu, you may need to install additional dependencies:
 64 | 
 65 | ```bash
 66 | sudo apt-get install -y \
 67 |     libwoff1 \
 68 |     libopus0 \
 69 |     libwebp7 \
 70 |     libwebpdemux2 \
 71 |     libenchant-2-2 \
 72 |     libgudev-1.0-0 \
 73 |     libsecret-1-0 \
 74 |     libhyphen0 \
 75 |     libgdk-pixbuf2.0-0 \
 76 |     libegl1 \
 77 |     libnotify4 \
 78 |     libxslt1.1 \
 79 |     libevent-2.1-7 \
 80 |     libgles2 \
 81 |     libxcomposite1 \
 82 |     libatk1.0-0 \
 83 |     libatk-bridge2.0-0 \
 84 |     libepoxy0 \
 85 |     libgtk-3-0 \
 86 |     libharfbuzz-icu0 \
 87 |     libgstreamer-gl1.0-0 \
 88 |     libgstreamer-plugins-bad1.0-0 \
 89 |     gstreamer1.0-plugins-good \
 90 |     gstreamer1.0-plugins-bad \
 91 |     libxt6 \
 92 |     libxaw7 \
 93 |     xvfb \
 94 |     fonts-noto-color-emoji \
 95 |     libfontconfig \
 96 |     libfreetype6 \
 97 |     xfonts-cyrillic \
 98 |     xfonts-scalable \
 99 |     fonts-liberation \
100 |     fonts-ipafont-gothic \
101 |     fonts-wqy-zenhei \
102 |     fonts-tlwg-loma-otf \
103 |     fonts-freefont-ttf
104 | ```
105 | 
106 | ## Option 2: Using Docker (Coming Soon)
107 | 
108 | Docker support for Crawl4AI is currently in progress and will be available soon. This will allow you to run Crawl4AI in a containerized environment, ensuring consistency across different systems.
109 | 
110 | ## Option 3: Local Server Installation
111 | 
112 | For those who prefer to run Crawl4AI as a local server, instructions will be provided once the Docker implementation is complete.
113 | 
114 | ## Verifying Your Installation
115 | 
116 | After installation, you can verify that Crawl4AI is working correctly by running a simple Python script:
117 | 
118 | ```python
119 | import asyncio
120 | from crawl4ai import AsyncWebCrawler
121 | 
122 | async def main():
123 |     async with AsyncWebCrawler(verbose=True) as crawler:
124 |         result = await crawler.arun(url="https://www.example.com")
125 |         print(result.markdown[:500])  # Print first 500 characters
126 | 
127 | if __name__ == "__main__":
128 |     asyncio.run(main())
129 | ```
130 | 
131 | This script should successfully crawl the example website and print the first 500 characters of the extracted content.
132 | 
133 | ## Getting Help
134 | 
135 | If you encounter any issues during installation or usage, please check the [documentation](https://docs.crawl4ai.com/) or raise an issue on the [GitHub repository](https://github.com/unclecode/crawl4ai/issues).
136 | 
137 | Happy crawling! 🕷️🤖


--------------------------------------------------------------------------------
/docs/md_v2/blog/articles/dockerize_hooks.md:
--------------------------------------------------------------------------------
 1 | ## Introducing Event Streams and Interactive Hooks in Crawl4AI
 2 | 
 3 | ![event-driven-crawl](https://res.cloudinary.com/kidocode/image/upload/t_400x400/v1734344008/15bb8bbb-83ac-43ac-962d-3feb3e0c3bbf_2_tjmr4n.webp)
 4 | 
 5 | In the near future, I’m planning to enhance Crawl4AI’s capabilities by introducing an event stream mechanism that will give clients deeper, real-time insights into the crawling process. Today, hooks are a powerful feature at the code level—they let developers define custom logic at key points in the crawl. However, when using Crawl4AI as a service (e.g., through a Dockerized API), there isn’t an easy way to interact with these hooks at runtime.
 6 | 
 7 | **What’s Changing?**
 8 | 
 9 | I’m working on a solution that will allow the crawler to emit a continuous stream of events, updating clients on the current crawling stage, encountered pages, and any decision points. This event stream could be exposed over a standardized protocol like Server-Sent Events (SSE) or WebSockets, enabling clients to “subscribe” and listen as the crawler works.
10 | 
11 | **Interactivity Through Process IDs**
12 | 
13 | A key part of this new design is the concept of a unique process ID for each crawl session. Imagine you’re listening to an event stream that informs you:
14 | - The crawler just hit a certain page  
15 | - It triggered a hook and is now pausing for instructions  
16 | 
17 | With the event stream in place, you can send a follow-up request back to the server—referencing the unique process ID—to provide extra data, instructions, or parameters. This might include selecting which links to follow next, adjusting extraction strategies, or providing authentication tokens for a protected API. Once the crawler receives these instructions, it resumes execution with the updated context.
18 | 
19 | ```mermaid
20 | sequenceDiagram
21 |     participant Client
22 |     participant Server
23 |     participant Crawler
24 | 
25 |     Client->>Server: Start crawl request
26 |     Server->>Crawler: Initiate crawl with Process ID
27 |     Crawler-->>Server: Event: Page hit
28 |     Server-->>Client: Stream: Page hit event
29 |     Client->>Server: Instruction for Process ID
30 |     Server->>Crawler: Update crawl with new instructions
31 |     Crawler-->>Server: Event: Crawl completed
32 |     Server-->>Client: Stream: Crawl completed
33 | ```
34 | 
35 | **Benefits for Developers and Users**
36 | 
37 | 1. **Fine-Grained Control**: Instead of predefining all logic upfront, you can dynamically guide the crawler in response to actual data and conditions encountered mid-crawl.
38 | 2. **Real-Time Insights**: Monitor progress, errors, or network bottlenecks as they happen, without waiting for the entire crawl to finish.
39 | 3. **Enhanced Collaboration**: Different team members or automated systems can watch the same crawl events and provide input, making the crawling process more adaptive and intelligent.
40 | 
41 | **Next Steps**
42 | 
43 | I’m currently exploring the best APIs, technologies, and patterns to make this vision a reality. My goal is to deliver a seamless developer experience—one that integrates with existing Crawl4AI workflows while offering new flexibility and power.
44 | 
45 | Stay tuned for more updates as I continue building this feature out. In the meantime, I’d love to hear any feedback or suggestions you might have to help shape this interactive, event-driven future of web crawling with Crawl4AI.
46 | 
47 | 


--------------------------------------------------------------------------------
/docs/md_v2/blog/releases/0.4.0.md:
--------------------------------------------------------------------------------
 1 | # Release Summary for Version 0.4.0 (December 1, 2024)
 2 | 
 3 | ## Overview
 4 | The 0.4.0 release introduces significant improvements to content filtering, multi-threaded environment handling, user-agent generation, and test coverage. Key highlights include the introduction of the PruningContentFilter, designed to automatically identify and extract the most valuable parts of an HTML document, as well as enhancements to the BM25ContentFilter to extend its versatility and effectiveness.
 5 | 
 6 | ## Major Features and Enhancements
 7 | 
 8 | ### 1. PruningContentFilter
 9 | - Introduced a new unsupervised content filtering strategy that scores and prunes less relevant nodes in an HTML document based on metrics like text and link density.
10 | - Focuses on retaining the most valuable parts of the content, making it highly effective for extracting relevant information from complex web pages.
11 | - Fully documented with updated README and expanded user guides.
12 | 
13 | ### 2. User-Agent Generator
14 | - Added a user-agent generator utility that resolves compatibility issues and supports customizable user-agent strings.
15 | - By default, the generator randomizes user agents for each request, adding diversity, but users can customize it for tailored scenarios.
16 | 
17 | ### 3. Enhanced Thread Safety
18 | - Improved handling of multi-threaded environments by adding better thread locks for parallel processing, ensuring consistency and stability when running multiple threads.
19 | 
20 | ### 4. Extended Content Filtering Strategies
21 | - Users now have access to both the PruningContentFilter for unsupervised extraction and the BM25ContentFilter for supervised filtering based on user queries.
22 | - Enhanced BM25ContentFilter with improved capabilities to process page titles, meta tags, and descriptions, allowing for more effective classification and clustering of text chunks.
23 | 
24 | ### 5. Documentation Updates
25 | - Updated examples and tutorials to promote the use of the PruningContentFilter alongside the BM25ContentFilter, providing clear instructions for selecting the appropriate filter for each use case.
26 | 
27 | ### 6. Unit Test Enhancements
28 | - Added unit tests for PruningContentFilter to ensure accuracy and reliability.
29 | - Enhanced BM25ContentFilter tests to cover additional edge cases and performance metrics, particularly for malformed HTML inputs.
30 | 
31 | ## Revised Change Logs for Version 0.4.0
32 | 
33 | ### PruningContentFilter (Dec 01, 2024)
34 | - Introduced the PruningContentFilter to optimize content extraction by pruning less relevant HTML nodes.
35 |   - **Affected Files:**
36 |     - **crawl4ai/content_filter_strategy.py**: Added a scoring-based pruning algorithm.
37 |     - **README.md**: Updated to include PruningContentFilter usage.
38 |     - **docs/md_v2/basic/content_filtering.md**: Expanded user documentation, detailing the use and benefits of PruningContentFilter.
39 | 
40 | ### Unit Tests for PruningContentFilter (Dec 01, 2024)
41 | - Added comprehensive unit tests for PruningContentFilter to ensure correctness and efficiency.
42 |   - **Affected Files:**
43 |     - **tests/async/test_content_filter_prune.py**: Created tests covering different pruning scenarios to ensure stability and correctness.
44 | 
45 | ### Enhanced BM25ContentFilter Tests (Dec 01, 2024)
46 | - Expanded tests to cover additional extraction scenarios and performance metrics, improving robustness.
47 |   - **Affected Files:**
48 |     - **tests/async/test_content_filter_bm25.py**: Added tests for edge cases, including malformed HTML inputs.
49 | 
50 | ### Documentation and Example Updates (Dec 01, 2024)
51 | - Revised examples to illustrate the use of PruningContentFilter alongside existing content filtering methods.
52 |   - **Affected Files:**
53 |     - **docs/examples/quickstart_async.py**: Enhanced example clarity and usability for new users.
54 | 
55 | ## Experimental Features
56 | - The PruningContentFilter is still under experimental development, and we continue to gather feedback for further refinements.
57 | 
58 | ## Conclusion
59 | This release significantly enhances the content extraction capabilities of Crawl4ai with the introduction of the PruningContentFilter, improved supervised filtering with BM25ContentFilter, and robust multi-threaded handling. Additionally, the user-agent generator provides much-needed versatility, resolving compatibility issues faced by many users.
60 | 
61 | Users are encouraged to experiment with the new content filtering methods to determine which best suits their needs.
62 | 
63 | 


--------------------------------------------------------------------------------
/docs/md_v2/blog/releases/0.4.2.md:
--------------------------------------------------------------------------------
 1 | ## 🚀 Crawl4AI 0.4.2 Update: Smarter Crawling Just Got Easier (Dec 12, 2024)
 2 | 
 3 | ### Hey Developers,
 4 | 
 5 | I’m excited to share Crawl4AI 0.4.2—a major upgrade that makes crawling smarter, faster, and a whole lot more intuitive. I’ve packed in a bunch of new features to simplify your workflows and improve your experience. Let’s cut to the chase!
 6 | 
 7 | ---
 8 | 
 9 | ### 🔧 **Configurable Browser and Crawler Behavior**
10 | 
11 | You’ve asked for better control over how browsers and crawlers are configured, and now you’ve got it. With the new `BrowserConfig` and `CrawlerRunConfig` objects, you can set up your browser and crawling behavior exactly how you want. No more cluttering `arun` with a dozen arguments—just pass in your configs and go.
12 | 
13 | **Example:**
14 | ```python
15 | from crawl4ai import BrowserConfig, CrawlerRunConfig, AsyncWebCrawler
16 | 
17 | browser_config = BrowserConfig(headless=True, viewport_width=1920, viewport_height=1080)
18 | crawler_config = CrawlerRunConfig(cache_mode="BYPASS")
19 | 
20 | async with AsyncWebCrawler(config=browser_config) as crawler:
21 |     result = await crawler.arun(url="https://example.com", config=crawler_config)
22 |     print(result.markdown[:500])
23 | ```
24 | 
25 | This setup is a game-changer for scalability, keeping your code clean and flexible as we add more parameters in the future.
26 | 
27 | Remember: If you like to use the old way, you can still pass arguments directly to `arun` as before, no worries!
28 | 
29 | ---
30 | 
31 | ### 🔐 **Streamlined Session Management**
32 | 
33 | Here’s the big one: You can now pass local storage and cookies directly. Whether it’s setting values programmatically or importing a saved JSON state, managing sessions has never been easier. This is a must-have for authenticated crawls—just export your storage state once and reuse it effortlessly across runs.
34 | 
35 | **Example:**
36 | 1. Open a browser, log in manually, and export the storage state.
37 | 2. Import the JSON file for seamless authenticated crawling:
38 | 
39 | ```python
40 | result = await crawler.arun(
41 |     url="https://example.com/protected",
42 |     storage_state="my_storage_state.json"
43 | )
44 | ```
45 | 
46 | ---
47 | 
48 | ### 🔢 **Handling Large Pages: Supercharged Screenshots and PDF Conversion**
49 | 
50 | Two big upgrades here:
51 | 
52 | - **Blazing-fast long-page screenshots**: Turn extremely long web pages into clean, high-quality screenshots—without breaking a sweat. It’s optimized to handle large content without lag.
53 | 
54 | - **Full-page PDF exports**: Now, you can also convert any page into a PDF with all the details intact. Perfect for archiving or sharing complex layouts.
55 | 
56 | ---
57 | 
58 | ### 🔧 **Other Cool Stuff**
59 | 
60 | - **Anti-bot enhancements**: Magic mode now handles overlays, user simulation, and anti-detection features like a pro.
61 | - **JavaScript execution**: Execute custom JS snippets to handle dynamic content. No more wrestling with endless page interactions.
62 | 
63 | ---
64 | 
65 | ### 📊 **Performance Boosts and Dev-friendly Updates**
66 | 
67 | - Faster rendering and viewport adjustments for better performance.
68 | - Improved cookie and local storage handling for seamless authentication.
69 | - Better debugging with detailed logs and actionable error messages.
70 | 
71 | ---
72 | 
73 | ### 🔠 **Use Cases You’ll Love**
74 | 
75 | 1. **Authenticated Crawls**: Login once, export your storage state, and reuse it across multiple requests without the headache.
76 | 2. **Long-page Screenshots**: Perfect for blogs, e-commerce pages, or any endless-scroll website.
77 | 3. **PDF Export**: Create professional-looking page PDFs in seconds.
78 | 
79 | ---
80 | 
81 | ### Let’s Get Crawling
82 | 
83 | Crawl4AI 0.4.2 is ready for you to download and try. I’m always looking for ways to improve, so don’t hold back—share your thoughts and feedback.
84 | 
85 | Happy Crawling! 🚀
86 | 
87 | 


--------------------------------------------------------------------------------
/docs/md_v2/blog/releases/v0.4.3b1.md:
--------------------------------------------------------------------------------
  1 | # Crawl4AI 0.4.3: Major Performance Boost & LLM Integration
  2 | 
  3 | We're excited to announce Crawl4AI 0.4.3, focusing on three key areas: Speed & Efficiency, LLM Integration, and Core Platform Improvements. This release significantly improves crawling performance while adding powerful new LLM-powered features.
  4 | 
  5 | ## ⚡ Speed & Efficiency Improvements
  6 | 
  7 | ### 1. Memory-Adaptive Dispatcher System
  8 | The new dispatcher system provides intelligent resource management and real-time monitoring:
  9 | 
 10 | ```python
 11 | from crawl4ai import AsyncWebCrawler, CrawlerRunConfig, DisplayMode
 12 | from crawl4ai.async_dispatcher import MemoryAdaptiveDispatcher, CrawlerMonitor
 13 | 
 14 | async def main():
 15 |     urls = ["https://example1.com", "https://example2.com"] * 50
 16 |     
 17 |     # Configure memory-aware dispatch
 18 |     dispatcher = MemoryAdaptiveDispatcher(
 19 |         memory_threshold_percent=80.0,  # Auto-throttle at 80% memory
 20 |         check_interval=0.5,             # Check every 0.5 seconds
 21 |         max_session_permit=20,          # Max concurrent sessions
 22 |         monitor=CrawlerMonitor(         # Real-time monitoring
 23 |             display_mode=DisplayMode.DETAILED
 24 |         )
 25 |     )
 26 |     
 27 |     async with AsyncWebCrawler() as crawler:
 28 |         results = await dispatcher.run_urls(
 29 |             urls=urls,
 30 |             crawler=crawler,
 31 |             config=CrawlerRunConfig()
 32 |         )
 33 | ```
 34 | 
 35 | ### 2. Streaming Support
 36 | Process crawled URLs in real-time instead of waiting for all results:
 37 | 
 38 | ```python
 39 | config = CrawlerRunConfig(stream=True)
 40 | 
 41 | async with AsyncWebCrawler() as crawler:
 42 |     async for result in await crawler.arun_many(urls, config=config):
 43 |         print(f"Got result for {result.url}")
 44 |         # Process each result immediately
 45 | ```
 46 | 
 47 | ### 3. LXML-Based Scraping
 48 | New LXML scraping strategy offering up to 20x faster parsing:
 49 | 
 50 | ```python
 51 | config = CrawlerRunConfig(
 52 |     scraping_strategy=LXMLWebScrapingStrategy(),
 53 |     cache_mode=CacheMode.ENABLED
 54 | )
 55 | ```
 56 | 
 57 | ## 🤖 LLM Integration
 58 | 
 59 | ### 1. LLM-Powered Markdown Generation
 60 | Smart content filtering and organization using LLMs:
 61 | 
 62 | ```python
 63 | config = CrawlerRunConfig(
 64 |     markdown_generator=DefaultMarkdownGenerator(
 65 |         content_filter=LLMContentFilter(
 66 |             provider="openai/gpt-4o",
 67 |             instruction="Extract technical documentation and code examples"
 68 |         )
 69 |     )
 70 | )
 71 | ```
 72 | 
 73 | ### 2. Automatic Schema Generation
 74 | Generate extraction schemas instantly using LLMs instead of manual CSS/XPath writing:
 75 | 
 76 | ```python
 77 | schema = JsonCssExtractionStrategy.generate_schema(
 78 |     html_content,
 79 |     schema_type="CSS",
 80 |     query="Extract product name, price, and description"
 81 | )
 82 | ```
 83 | 
 84 | ## 🔧 Core Improvements
 85 | 
 86 | ### 1. Proxy Support & Rotation
 87 | Integrated proxy support with automatic rotation and verification:
 88 | 
 89 | ```python
 90 | config = CrawlerRunConfig(
 91 |     proxy_config={
 92 |         "server": "http://proxy:8080",
 93 |         "username": "user",
 94 |         "password": "pass"
 95 |     }
 96 | )
 97 | ```
 98 | 
 99 | ### 2. Robots.txt Compliance
100 | Built-in robots.txt support with SQLite caching:
101 | 
102 | ```python
103 | config = CrawlerRunConfig(check_robots_txt=True)
104 | result = await crawler.arun(url, config=config)
105 | if result.status_code == 403:
106 |     print("Access blocked by robots.txt")
107 | ```
108 | 
109 | ### 3. URL Redirection Tracking
110 | Track final URLs after redirects:
111 | 
112 | ```python
113 | result = await crawler.arun(url)
114 | print(f"Initial URL: {url}")
115 | print(f"Final URL: {result.redirected_url}")
116 | ```
117 | 
118 | ## Performance Impact
119 | 
120 | - Memory usage reduced by up to 40% with adaptive dispatcher
121 | - Parsing speed increased up to 20x with LXML strategy
122 | - Streaming reduces memory footprint for large crawls by ~60%
123 | 
124 | ## Getting Started
125 | 
126 | ```bash
127 | pip install -U crawl4ai
128 | ```
129 | 
130 | For complete examples, check our [demo repository](https://github.com/unclecode/crawl4ai/examples).
131 | 
132 | ## Stay Connected
133 | 
134 | - Star us on [GitHub](https://github.com/unclecode/crawl4ai)
135 | - Follow [@unclecode](https://twitter.com/unclecode)
136 | - Join our [Discord](https://discord.gg/crawl4ai)
137 | 
138 | Happy crawling! 🕷️


--------------------------------------------------------------------------------
/docs/md_v2/core/cache-modes.md:
--------------------------------------------------------------------------------
 1 | # Crawl4AI Cache System and Migration Guide
 2 | 
 3 | ## Overview
 4 | Starting from version 0.5.0, Crawl4AI introduces a new caching system that replaces the old boolean flags with a more intuitive `CacheMode` enum. This change simplifies cache control and makes the behavior more predictable.
 5 | 
 6 | ## Old vs New Approach
 7 | 
 8 | ### Old Way (Deprecated)
 9 | The old system used multiple boolean flags:
10 | - `bypass_cache`: Skip cache entirely
11 | - `disable_cache`: Disable all caching
12 | - `no_cache_read`: Don't read from cache
13 | - `no_cache_write`: Don't write to cache
14 | 
15 | ### New Way (Recommended)
16 | The new system uses a single `CacheMode` enum:
17 | - `CacheMode.ENABLED`: Normal caching (read/write)
18 | - `CacheMode.DISABLED`: No caching at all
19 | - `CacheMode.READ_ONLY`: Only read from cache
20 | - `CacheMode.WRITE_ONLY`: Only write to cache
21 | - `CacheMode.BYPASS`: Skip cache for this operation
22 | 
23 | ## Migration Example
24 | 
25 | ### Old Code (Deprecated)
26 | ```python
27 | import asyncio
28 | from crawl4ai import AsyncWebCrawler
29 | 
30 | async def use_proxy():
31 |     async with AsyncWebCrawler(verbose=True) as crawler:
32 |         result = await crawler.arun(
33 |             url="https://www.nbcnews.com/business",
34 |             bypass_cache=True  # Old way
35 |         )
36 |         print(len(result.markdown))
37 | 
38 | async def main():
39 |     await use_proxy()
40 | 
41 | if __name__ == "__main__":
42 |     asyncio.run(main())
43 | ```
44 | 
45 | ### New Code (Recommended)
46 | ```python
47 | import asyncio
48 | from crawl4ai import AsyncWebCrawler, CacheMode
49 | from crawl4ai.async_configs import CrawlerRunConfig
50 | 
51 | async def use_proxy():
52 |     # Use CacheMode in CrawlerRunConfig
53 |     config = CrawlerRunConfig(cache_mode=CacheMode.BYPASS)  
54 |     async with AsyncWebCrawler(verbose=True) as crawler:
55 |         result = await crawler.arun(
56 |             url="https://www.nbcnews.com/business",
57 |             config=config  # Pass the configuration object
58 |         )
59 |         print(len(result.markdown))
60 | 
61 | async def main():
62 |     await use_proxy()
63 | 
64 | if __name__ == "__main__":
65 |     asyncio.run(main())
66 | ```
67 | 
68 | ## Common Migration Patterns
69 | 
70 | | Old Flag              | New Mode                       |
71 | |-----------------------|---------------------------------|
72 | | `bypass_cache=True`   | `cache_mode=CacheMode.BYPASS`  |
73 | | `disable_cache=True`  | `cache_mode=CacheMode.DISABLED`|
74 | | `no_cache_read=True`  | `cache_mode=CacheMode.WRITE_ONLY` |
75 | | `no_cache_write=True` | `cache_mode=CacheMode.READ_ONLY` |


--------------------------------------------------------------------------------
/docs/snippets/deep_crawl/1.intro.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from typing import List
 3 | 
 4 | from crawl4ai import (
 5 |     AsyncWebCrawler,
 6 |     CrawlerRunConfig,
 7 |     BFSDeepCrawlStrategy,
 8 |     CrawlResult,
 9 |     FilterChain,
10 |     DomainFilter,
11 |     URLPatternFilter,
12 | )
13 | 
14 | # Import necessary classes from crawl4ai library:
15 | # - AsyncWebCrawler: The main class for web crawling.
16 | # - CrawlerRunConfig: Configuration class for crawler behavior.
17 | # - BFSDeepCrawlStrategy: Breadth-First Search deep crawling strategy.
18 | # - CrawlResult: Data model for individual crawl results.
19 | # - FilterChain: Used to chain multiple URL filters.
20 | # - URLPatternFilter: Filter URLs based on patterns.
21 | # You had from crawl4ai.deep_crawling.filters import FilterChain, URLPatternFilter, which is also correct,
22 | # but for simplicity and consistency, we will use the direct import from crawl4ai in this example, as it is re-exported in __init__.py
23 | 
24 | async def basic_deep_crawl():
25 |     """
26 |     Performs a basic deep crawl starting from a seed URL, demonstrating:
27 |     - Breadth-First Search (BFS) deep crawling strategy.
28 |     - Filtering URLs based on URL patterns.
29 |     - Accessing crawl results and metadata.
30 |     """
31 | 
32 |     # 1. Define URL Filters:
33 |     # Create a URLPatternFilter to include only URLs containing "text".
34 |     # This filter will be used to restrict crawling to URLs that are likely to contain textual content.
35 |     url_filter = URLPatternFilter(
36 |         patterns=[
37 |             "*text*", # Include URLs that contain "text" in their path or URL
38 |         ]
39 |     )
40 | 
41 |     # Create a DomainFilter to allow only URLs from the "groq.com" domain and block URLs from the "example.com" domain.
42 |     # This filter will be used to restrict crawling to URLs within the "groq.com" domain.
43 |     domain_filter = DomainFilter(
44 |         allowed_domains=["groq.com"],
45 |         blocked_domains=["example.com"],
46 |     )
47 | 
48 |     # 2. Configure CrawlerRunConfig for Deep Crawling:
49 |     # Configure CrawlerRunConfig to use BFSDeepCrawlStrategy for deep crawling.
50 |     config = CrawlerRunConfig(
51 |         deep_crawl_strategy=BFSDeepCrawlStrategy(
52 |             max_depth=2,  # Set the maximum depth of crawling to 2 levels from the start URL
53 |             max_pages=10, # Limit the total number of pages to crawl to 10, to prevent excessive crawling
54 |             include_external=False, # Set to False to only crawl URLs within the same domain as the start URL
55 |             filter_chain=FilterChain(filters=[url_filter, domain_filter]), # Apply the URLPatternFilter and DomainFilter to filter URLs during deep crawl
56 |         ),
57 |         verbose=True, # Enable verbose logging to see detailed output during crawling
58 |     )
59 | 
60 |     # 3. Initialize and Run AsyncWebCrawler:
61 |     # Use AsyncWebCrawler as a context manager for automatic start and close.
62 |     async with AsyncWebCrawler() as crawler:
63 |         results: List[CrawlResult] = await crawler.arun(
64 |             # url="https://docs.crawl4ai.com", # Uncomment to use crawl4ai documentation as start URL
65 |             url="https://console.groq.com/docs", # Set the start URL for deep crawling to Groq documentation
66 |             config=config, # Pass the configured CrawlerRunConfig to arun method
67 |         )
68 | 
69 |         # 4. Process and Print Crawl Results:
70 |         # Iterate through the list of CrawlResult objects returned by the deep crawl.
71 |         for result in results:
72 |             # Print the URL and its crawl depth from the metadata for each crawled URL.
73 |             print(f"URL: {result.url}, Depth: {result.metadata.get('depth', 0)}")
74 | 
75 | 
76 | if __name__ == "__main__":
77 |     import asyncio
78 |     asyncio.run(basic_deep_crawl())
79 | 


--------------------------------------------------------------------------------
/mkdocs.yml:
--------------------------------------------------------------------------------
 1 | site_name: Crawl4AI Documentation (v0.5.x)
 2 | site_description:  🚀🤖 Crawl4AI, Open-source LLM-Friendly Web Crawler & Scraper
 3 | site_url: https://docs.crawl4ai.com
 4 | repo_url: https://github.com/unclecode/crawl4ai
 5 | repo_name: unclecode/crawl4ai
 6 | docs_dir: docs/md_v2
 7 | 
 8 | nav:
 9 |   - Home: 'index.md'
10 |   - Setup & Installation:
11 |     - "Installation": "core/installation.md"
12 |     - "Docker Deployment": "core/docker-deployment.md"
13 |   - "Quick Start": "core/quickstart.md"
14 |   - "Blog & Changelog":
15 |     - "Blog Home": "blog/index.md"
16 |     - "Changelog": "https://github.com/unclecode/crawl4ai/blob/main/CHANGELOG.md"
17 |   - Core:
18 |     - "Command Line Interface": "core/cli.md"
19 |     - "Simple Crawling": "core/simple-crawling.md"
20 |     - "Deep Crawling": "core/deep-crawling.md"
21 |     - "Crawler Result": "core/crawler-result.md"
22 |     - "Browser, Crawler & LLM Config": "core/browser-crawler-config.md"
23 |     - "Markdown Generation": "core/markdown-generation.md"
24 |     - "Fit Markdown": "core/fit-markdown.md"
25 |     - "Page Interaction": "core/page-interaction.md"
26 |     - "Content Selection": "core/content-selection.md"
27 |     - "Cache Modes": "core/cache-modes.md"
28 |     - "Local Files & Raw HTML": "core/local-files.md"
29 |     - "Link & Media": "core/link-media.md"
30 |   - Advanced:
31 |     - "Overview": "advanced/advanced-features.md"
32 |     - "File Downloading": "advanced/file-downloading.md"
33 |     - "Lazy Loading": "advanced/lazy-loading.md"
34 |     - "Hooks & Auth": "advanced/hooks-auth.md"
35 |     - "Proxy & Security": "advanced/proxy-security.md"
36 |     - "Session Management": "advanced/session-management.md"
37 |     - "Multi-URL Crawling": "advanced/multi-url-crawling.md"
38 |     - "Crawl Dispatcher": "advanced/crawl-dispatcher.md"
39 |     - "Identity Based Crawling": "advanced/identity-based-crawling.md"
40 |     - "SSL Certificate": "advanced/ssl-certificate.md"
41 |   - Extraction:
42 |     - "LLM-Free Strategies": "extraction/no-llm-strategies.md"
43 |     - "LLM Strategies": "extraction/llm-strategies.md"
44 |     - "Clustering Strategies": "extraction/clustring-strategies.md"
45 |     - "Chunking": "extraction/chunking.md"
46 |   - API Reference:
47 |     - "AsyncWebCrawler": "api/async-webcrawler.md"
48 |     - "arun()": "api/arun.md"
49 |     - "arun_many()": "api/arun_many.md"
50 |     - "Browser, Crawler & LLM Config": "api/parameters.md"
51 |     - "CrawlResult": "api/crawl-result.md"
52 |     - "Strategies": "api/strategies.md"
53 | 
54 | theme:
55 |   name: 'terminal'
56 |   palette: 'dark'
57 |   icon:
58 |     repo: fontawesome/brands/github
59 | 
60 | plugins:
61 |   - search
62 | 
63 | markdown_extensions:
64 |   - pymdownx.highlight:
65 |       anchor_linenums: true
66 |   - pymdownx.inlinehilite
67 |   - pymdownx.snippets
68 |   - pymdownx.superfences
69 |   - admonition
70 |   - pymdownx.details
71 |   - attr_list
72 |   - tables
73 | 
74 | extra:
75 |   version: !ENV [CRAWL4AI_VERSION, 'development']
76 | 
77 | extra_css:
78 |   - assets/styles.css
79 |   - assets/highlight.css
80 |   - assets/dmvendor.css
81 | 
82 | extra_javascript:
83 |   - assets/highlight.min.js
84 |   - assets/highlight_init.js
85 |   - https://buttons.github.io/buttons.js


--------------------------------------------------------------------------------
/pyproject.toml:
--------------------------------------------------------------------------------
 1 | [build-system]
 2 | requires = ["setuptools>=64.0.0", "wheel"]
 3 | build-backend = "setuptools.build_meta"
 4 | 
 5 | [project]
 6 | name = "Crawl4AI"
 7 | dynamic = ["version"]
 8 | description = "🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawler & scraper"
 9 | readme = "README.md"
10 | requires-python = ">=3.9"
11 | license = {text = "MIT"}
12 | authors = [
13 |     {name = "Unclecode", email = "unclecode@kidocode.com"}
14 | ]
15 | dependencies = [
16 |     "aiosqlite~=0.20",
17 |     "lxml~=5.3",
18 |     "litellm>=1.53.1",
19 |     "numpy>=1.26.0,<3",
20 |     "pillow~=10.4",
21 |     "playwright>=1.49.0",
22 |     "python-dotenv~=1.0",
23 |     "requests~=2.26",
24 |     "beautifulsoup4~=4.12",
25 |     "tf-playwright-stealth>=1.1.0",
26 |     "xxhash~=3.4",
27 |     "rank-bm25~=0.2",
28 |     "aiofiles>=24.1.0",
29 |     "colorama~=0.4",
30 |     "snowballstemmer~=2.2",
31 |     "pydantic>=2.10",
32 |     "pyOpenSSL>=24.3.0",
33 |     "psutil>=6.1.1",
34 |     "nltk>=3.9.1",
35 |     "playwright",
36 |     "aiofiles",
37 |     "rich>=13.9.4",
38 |     "cssselect>=1.2.0",
39 |     "httpx>=0.27.2",
40 |     "fake-useragent>=2.0.3",
41 |     "click>=8.1.7",
42 |     "pyperclip>=1.8.2",
43 |     "faust-cchardet>=2.1.19",
44 |     "aiohttp>=3.11.11",
45 |     "humanize>=4.10.0",
46 | ]
47 | classifiers = [
48 |     "Development Status :: 4 - Beta",
49 |     "Intended Audience :: Developers",
50 |     "License :: OSI Approved :: Apache Software License",
51 |     "Programming Language :: Python :: 3",
52 |     "Programming Language :: Python :: 3.9",
53 |     "Programming Language :: Python :: 3.10",
54 |     "Programming Language :: Python :: 3.11",
55 |     "Programming Language :: Python :: 3.12",
56 |     "Programming Language :: Python :: 3.13",
57 | ]
58 | 
59 | [project.optional-dependencies]
60 | pdf = ["PyPDF2"]  
61 | torch = ["torch", "nltk", "scikit-learn"]
62 | transformer = ["transformers", "tokenizers"]
63 | cosine = ["torch", "transformers", "nltk"]
64 | sync = ["selenium"]
65 | all = [
66 |     "PyPDF2",
67 |     "torch",
68 |     "nltk",
69 |     "scikit-learn",
70 |     "transformers",
71 |     "tokenizers",
72 |     "selenium",
73 |     "PyPDF2"  
74 | ]
75 | 
76 | [project.scripts]
77 | crawl4ai-download-models = "crawl4ai.model_loader:main"
78 | crawl4ai-migrate = "crawl4ai.migrations:main"
79 | crawl4ai-setup = "crawl4ai.install:post_install"
80 | crawl4ai-doctor = "crawl4ai.install:doctor"
81 | crwl = "crawl4ai.cli:main"
82 | 
83 | [tool.setuptools]
84 | packages = {find = {where = ["."], include = ["crawl4ai*"]}}
85 | 
86 | [tool.setuptools.package-data]
87 | crawl4ai = ["js_snippet/*.js"]
88 | 
89 | [tool.setuptools.dynamic]
90 | version = {attr = "crawl4ai.__version__.__version__"}
91 | 
92 | [tool.uv.sources]
93 | crawl4ai = { workspace = true }
94 | 
95 | [dependency-groups]
96 | dev = [
97 |     "crawl4ai",
98 | ]
99 | 


--------------------------------------------------------------------------------
/requirements.txt:
--------------------------------------------------------------------------------
 1 | # Note: These requirements are also specified in pyproject.toml
 2 | # This file is kept for development environment setup and compatibility
 3 | aiosqlite~=0.20
 4 | lxml~=5.3
 5 | litellm>=1.53.1
 6 | numpy>=1.26.0,<3
 7 | pillow~=10.4
 8 | playwright>=1.49.0
 9 | python-dotenv~=1.0
10 | requests~=2.26
11 | beautifulsoup4~=4.12
12 | tf-playwright-stealth>=1.1.0
13 | xxhash~=3.4
14 | rank-bm25~=0.2
15 | aiofiles>=24.1.0
16 | colorama~=0.4
17 | snowballstemmer~=2.2
18 | pydantic>=2.10
19 | pyOpenSSL>=24.3.0
20 | psutil>=6.1.1
21 | nltk>=3.9.1
22 | rich>=13.9.4
23 | cssselect>=1.2.0
24 | faust-cchardet>=2.1.19


--------------------------------------------------------------------------------
/setup.cfg:
--------------------------------------------------------------------------------
1 | [options]
2 | include_package_data = True


--------------------------------------------------------------------------------
/setup.py:
--------------------------------------------------------------------------------
 1 | from setuptools import setup, find_packages
 2 | import os
 3 | from pathlib import Path
 4 | import shutil
 5 | 
 6 | # Note: Most configuration is now in pyproject.toml
 7 | # This setup.py is kept for backwards compatibility
 8 | 
 9 | # Create the .crawl4ai folder in the user's home directory if it doesn't exist
10 | # If the folder already exists, remove the cache folder
11 | base_dir = os.getenv("CRAWL4_AI_BASE_DIRECTORY")
12 | crawl4ai_folder = Path(base_dir) if base_dir else Path.home()
13 | crawl4ai_folder = crawl4ai_folder / ".crawl4ai"
14 | cache_folder = crawl4ai_folder / "cache"
15 | content_folders = [
16 |     "html_content",
17 |     "cleaned_html",
18 |     "markdown_content",
19 |     "extracted_content",
20 |     "screenshots",
21 | ]
22 | 
23 | # Clean up old cache if exists
24 | if cache_folder.exists():
25 |     shutil.rmtree(cache_folder)
26 | 
27 | # Create new folder structure
28 | crawl4ai_folder.mkdir(exist_ok=True)
29 | cache_folder.mkdir(exist_ok=True)
30 | for folder in content_folders:
31 |     (crawl4ai_folder / folder).mkdir(exist_ok=True)
32 | 
33 | version = "0.0.0"  # This will be overridden by pyproject.toml's dynamic version
34 | try:
35 |     with open("crawl4ai/__version__.py") as f:
36 |         for line in f:
37 |             if line.startswith("__version__"):
38 |                 version = line.split("=")[1].strip().strip('"')
39 |                 break
40 | except Exception:
41 |     pass  # Let pyproject.toml handle version
42 | 
43 | setup(
44 |     name="Crawl4AI",
45 |     version=version,
46 |     description="🚀🤖 Crawl4AI: Open-source LLM Friendly Web Crawler & scraper",
47 |     long_description=open("README.md", encoding="utf-8").read(),
48 |     long_description_content_type="text/markdown",
49 |     url="https://github.com/unclecode/crawl4ai",
50 |     author="Unclecode",
51 |     author_email="unclecode@kidocode.com",
52 |     license="MIT",
53 |     packages=find_packages(),
54 |     package_data={"crawl4ai": ["js_snippet/*.js"]},
55 |     classifiers=[
56 |         "Development Status :: 3 - Alpha",
57 |         "Intended Audience :: Developers",
58 |         "License :: OSI Approved :: Apache Software License",
59 |         "Programming Language :: Python :: 3",
60 |         "Programming Language :: Python :: 3.9",
61 |         "Programming Language :: Python :: 3.10",
62 |         "Programming Language :: Python :: 3.11",
63 |         "Programming Language :: Python :: 3.12",
64 |         "Programming Language :: Python :: 3.13",
65 |     ],
66 |     python_requires=">=3.9",
67 | )
68 | 


--------------------------------------------------------------------------------
/tests/20241401/test_acyn_crawl_wuth_http_crawler_strategy.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from crawl4ai import (
 3 |     AsyncWebCrawler,
 4 |     CrawlerRunConfig,
 5 |     HTTPCrawlerConfig,
 6 |     CacheMode,
 7 |     DefaultMarkdownGenerator,
 8 |     PruningContentFilter
 9 | )
10 | from crawl4ai.async_crawler_strategy import AsyncHTTPCrawlerStrategy
11 | from crawl4ai.async_logger import AsyncLogger
12 | 
13 | async def main():
14 |     # Initialize HTTP crawler strategy
15 |     http_strategy = AsyncHTTPCrawlerStrategy(
16 |         browser_config=HTTPCrawlerConfig(
17 |             method="GET",
18 |             verify_ssl=True,
19 |             follow_redirects=True
20 |         ),
21 |         logger=AsyncLogger(verbose=True)
22 |     )
23 | 
24 |     # Initialize web crawler with HTTP strategy
25 |     async with AsyncWebCrawler(crawler_strategy=http_strategy) as crawler:
26 |         crawler_config = CrawlerRunConfig(
27 |             cache_mode=CacheMode.BYPASS,
28 |             markdown_generator=DefaultMarkdownGenerator(
29 |                 content_filter=PruningContentFilter(
30 |                     threshold=0.48, 
31 |                     threshold_type="fixed", 
32 |                     min_word_threshold=0
33 |                 )
34 |             )
35 |         )
36 |         
37 |         # Test different URLs
38 |         urls = [
39 |             "https://example.com",
40 |             "https://httpbin.org/get",
41 |             "raw://<html><body>Test content</body></html>"
42 |         ]
43 |         
44 |         for url in urls:
45 |             print(f"\n=== Testing {url} ===")
46 |             try:
47 |                 result = await crawler.arun(url=url, config=crawler_config)
48 |                 print(f"Status: {result.status_code}")
49 |                 print(f"Raw HTML length: {len(result.html)}")
50 |                 if hasattr(result, 'markdown'):
51 |                     print(f"Markdown length: {len(result.markdown.raw_markdown)}")
52 |             except Exception as e:
53 |                 print(f"Error: {e}")
54 | 
55 | if __name__ == "__main__":
56 |     asyncio.run(main())


--------------------------------------------------------------------------------
/tests/20241401/test_advanced_deep_crawl.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | import time
 3 | 
 4 | 
 5 | from crawl4ai import CrawlerRunConfig, AsyncWebCrawler, CacheMode
 6 | from crawl4ai.content_scraping_strategy import LXMLWebScrapingStrategy
 7 | from crawl4ai.deep_crawling import BFSDeepCrawlStrategy, BestFirstCrawlingStrategy
 8 | from crawl4ai.deep_crawling.filters import FilterChain, URLPatternFilter, DomainFilter, ContentTypeFilter, ContentRelevanceFilter
 9 | from crawl4ai.deep_crawling.scorers import KeywordRelevanceScorer
10 | # from crawl4ai.deep_crawling import BFSDeepCrawlStrategy, BestFirstCrawlingStrategy
11 | 
12 | 
13 | async def main():
14 |     """Example deep crawl of documentation site."""
15 |     filter_chain = FilterChain([
16 |         URLPatternFilter(patterns=["*2025*"]),
17 |         DomainFilter(allowed_domains=["techcrunch.com"]),
18 |         ContentRelevanceFilter(query="Use of artificial intelligence in Defence applications", threshold=1),
19 |         ContentTypeFilter(allowed_types=["text/html","application/javascript"])
20 |     ])
21 |     config = CrawlerRunConfig(
22 |         deep_crawl_strategy = BestFirstCrawlingStrategy(
23 |             max_depth=2,
24 |             include_external=False,
25 |             filter_chain=filter_chain,
26 |             url_scorer=KeywordRelevanceScorer(keywords=["anduril", "defence", "AI"]),
27 |         ),
28 |         stream=False,
29 |         verbose=True,
30 |         cache_mode=CacheMode.BYPASS,
31 |         scraping_strategy=LXMLWebScrapingStrategy()
32 |     )
33 | 
34 |     async with AsyncWebCrawler() as crawler:
35 |         print("Starting deep crawl in streaming mode:")
36 |         config.stream = True
37 |         start_time = time.perf_counter()
38 |         async for result in await crawler.arun(
39 |             url="https://techcrunch.com",
40 |             config=config
41 |         ):
42 |             print(f"→ {result.url} (Depth: {result.metadata.get('depth', 0)})")
43 |         print(f"Duration: {time.perf_counter() - start_time:.2f} seconds")
44 | 
45 | if __name__ == "__main__":
46 |     asyncio.run(main())


--------------------------------------------------------------------------------
/tests/20241401/test_cache_context.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode
 3 | from playwright.async_api import Page, BrowserContext
 4 | 
 5 | async def test_reuse_context_by_config():
 6 |     # We will store each context ID in these maps to confirm reuse
 7 |     context_ids_for_A = []
 8 |     context_ids_for_B = []
 9 | 
10 |     # Create a small hook to track context creation
11 |     async def on_page_context_created(page: Page, context: BrowserContext, config: CrawlerRunConfig, **kwargs):
12 |         c_id = id(context)
13 |         print(f"[HOOK] on_page_context_created - Context ID: {c_id}")
14 |         # Distinguish which config we used by checking a custom hook param
15 |         config_label = config.shared_data.get("config_label", "unknown")
16 |         if config_label == "A":
17 |             context_ids_for_A.append(c_id)
18 |         elif config_label == "B":
19 |             context_ids_for_B.append(c_id)
20 |         return page
21 | 
22 |     # Browser config - Headless, verbose so we see logs
23 |     browser_config = BrowserConfig(headless=True, verbose=True)
24 | 
25 |     # Two crawler run configs that differ (for example, text_mode):
26 |     configA = CrawlerRunConfig(
27 |         only_text=True,
28 |         cache_mode=CacheMode.BYPASS,
29 |         wait_until="domcontentloaded",
30 |         shared_data = {
31 |             "config_label" : "A"
32 |         }
33 |     )
34 |     configB = CrawlerRunConfig(
35 |         only_text=False,
36 |         cache_mode=CacheMode.BYPASS,
37 |         wait_until="domcontentloaded",
38 |         shared_data = {
39 |             "config_label" : "B"
40 |         }
41 |     )
42 | 
43 |     # Create the crawler
44 |     crawler = AsyncWebCrawler(config=browser_config)
45 | 
46 |     # Attach our custom hook
47 |     # Note: "on_page_context_created" will be called each time a new context+page is generated
48 |     crawler.crawler_strategy.set_hook("on_page_context_created", on_page_context_created)
49 | 
50 |     # Start the crawler (launches the browser)
51 |     await crawler.start()
52 | 
53 |     # For demonstration, we’ll crawl a benign site multiple times with each config
54 |     test_url = "https://example.com"
55 |     print("\n--- Crawling with config A (text_mode=True) ---")
56 |     for _ in range(2):
57 |         # Pass an extra kwarg to the hook so we know which config is being used
58 |         await crawler.arun(test_url, config=configA)
59 | 
60 |     print("\n--- Crawling with config B (text_mode=False) ---")
61 |     for _ in range(2):
62 |         await crawler.arun(test_url, config=configB)
63 | 
64 |     # Close the crawler (shuts down the browser, closes contexts)
65 |     await crawler.close()
66 | 
67 |     # Validate and show the results
68 |     print("\n=== RESULTS ===")
69 |     print(f"Config A context IDs: {context_ids_for_A}")
70 |     print(f"Config B context IDs: {context_ids_for_B}")
71 |     if len(set(context_ids_for_A)) == 1:
72 |         print("✅ All config A crawls used the SAME BrowserContext.")
73 |     else:
74 |         print("❌ Config A crawls created multiple contexts unexpectedly.")
75 |     if len(set(context_ids_for_B)) == 1:
76 |         print("✅ All config B crawls used the SAME BrowserContext.")
77 |     else:
78 |         print("❌ Config B crawls created multiple contexts unexpectedly.")
79 |     if set(context_ids_for_A).isdisjoint(context_ids_for_B):
80 |         print("✅ Config A context is different from Config B context.")
81 |     else:
82 |         print("❌ A and B ended up sharing the same context somehow!")
83 | 
84 | if __name__ == "__main__":
85 |     asyncio.run(test_reuse_context_by_config())
86 | 


--------------------------------------------------------------------------------
/tests/20241401/test_crawlers.py:
--------------------------------------------------------------------------------
 1 | 
 2 | # example_usageexample_usageexample_usage# example_usage.py
 3 | import asyncio
 4 | from crawl4ai.crawlers import get_crawler
 5 | 
 6 | async def main():
 7 |     # Get the registered crawler
 8 |     example_crawler = get_crawler("example_site.content")
 9 |     
10 |     # Crawl example.com
11 |     result = await example_crawler(url="https://example.com")
12 |         
13 |     print(result)
14 |             
15 | 
16 | if __name__ == "__main__":
17 |     asyncio.run(main())


--------------------------------------------------------------------------------
/tests/20241401/test_deep_crawl.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | import time
 3 | 
 4 | 
 5 | from crawl4ai import CrawlerRunConfig, AsyncWebCrawler, CacheMode
 6 | from crawl4ai.content_scraping_strategy import LXMLWebScrapingStrategy
 7 | from crawl4ai.deep_crawling import BFSDeepCrawlStrategy
 8 | # from crawl4ai.deep_crawling import BFSDeepCrawlStrategy, BestFirstCrawlingStrategy
 9 | 
10 | 
11 | async def main():
12 |     """Example deep crawl of documentation site."""
13 |     config = CrawlerRunConfig(
14 |         deep_crawl_strategy = BFSDeepCrawlStrategy(
15 |             max_depth=2,
16 |             include_external=False
17 |         ),
18 |         stream=False,
19 |         verbose=True,
20 |         cache_mode=CacheMode.BYPASS,
21 |         scraping_strategy=LXMLWebScrapingStrategy()
22 |     )
23 | 
24 |     async with AsyncWebCrawler() as crawler:
25 |         start_time = time.perf_counter()
26 |         print("\nStarting deep crawl in batch mode:")
27 |         results = await crawler.arun(
28 |             url="https://docs.crawl4ai.com",
29 |             config=config
30 |         )
31 |         print(f"Crawled {len(results)} pages")
32 |         print(f"Example page: {results[0].url}")
33 |         print(f"Duration: {time.perf_counter() - start_time:.2f} seconds\n")
34 | 
35 |         print("Starting deep crawl in streaming mode:")
36 |         config.stream = True
37 |         start_time = time.perf_counter()
38 |         async for result in await crawler.arun(
39 |             url="https://docs.crawl4ai.com",
40 |             config=config
41 |         ):
42 |             print(f"→ {result.url} (Depth: {result.metadata.get('depth', 0)})")
43 |         print(f"Duration: {time.perf_counter() - start_time:.2f} seconds")
44 | 
45 | if __name__ == "__main__":
46 |     asyncio.run(main())


--------------------------------------------------------------------------------
/tests/20241401/test_llm_filter.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import asyncio
 3 | from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode
 4 | from crawl4ai import LLMConfig
 5 | from crawl4ai.content_filter_strategy import LLMContentFilter
 6 | 
 7 | async def test_llm_filter():
 8 |     # Create an HTML source that needs intelligent filtering
 9 |     url = "https://docs.python.org/3/tutorial/classes.html"
10 |     
11 |     browser_config = BrowserConfig(
12 |         headless=True,
13 |         verbose=True
14 |     )
15 |     
16 |     # run_config = CrawlerRunConfig(cache_mode=CacheMode.BYPASS)
17 |     run_config = CrawlerRunConfig(cache_mode=CacheMode.ENABLED)
18 |     
19 |     async with AsyncWebCrawler(config=browser_config) as crawler:
20 |         # First get the raw HTML
21 |         result = await crawler.arun(url, config=run_config)
22 |         html = result.cleaned_html
23 | 
24 |         # Initialize LLM filter with focused instruction
25 |         filter = LLMContentFilter(
26 |             llm_config=LLMConfig(provider="openai/gpt-4o",api_token=os.getenv('OPENAI_API_KEY')),
27 |             instruction="""
28 |             Focus on extracting the core educational content about Python classes.
29 |             Include:
30 |             - Key concepts and their explanations
31 |             - Important code examples
32 |             - Essential technical details
33 |             Exclude:
34 |             - Navigation elements
35 |             - Sidebars
36 |             - Footer content
37 |             - Version information
38 |             - Any non-essential UI elements
39 |             
40 |             Format the output as clean markdown with proper code blocks and headers.
41 |             """,
42 |             verbose=True
43 |         )
44 |         
45 |         filter = LLMContentFilter(
46 |             llm_config = LLMConfig(provider="openai/gpt-4o",api_token=os.getenv('OPENAI_API_KEY')),
47 |             chunk_token_threshold=2 ** 12 * 2, # 2048 * 2
48 |             instruction="""
49 |             Extract the main educational content while preserving its original wording and substance completely. Your task is to:
50 | 
51 |             1. Maintain the exact language and terminology used in the main content
52 |             2. Keep all technical explanations, examples, and educational content intact
53 |             3. Preserve the original flow and structure of the core content
54 |             4. Remove only clearly irrelevant elements like:
55 |             - Navigation menus
56 |             - Advertisement sections
57 |             - Cookie notices
58 |             - Footers with site information
59 |             - Sidebars with external links
60 |             - Any UI elements that don't contribute to learning
61 | 
62 |             The goal is to create a clean markdown version that reads exactly like the original article, 
63 |             keeping all valuable content but free from distracting elements. Imagine you're creating 
64 |             a perfect reading experience where nothing valuable is lost, but all noise is removed.
65 |             """,
66 |             verbose=True
67 |         )        
68 | 
69 |         # Apply filtering
70 |         filtered_content = filter.filter_content(html, ignore_cache = True)
71 |         
72 |         # Show results
73 |         print("\nFiltered Content Length:", len(filtered_content))
74 |         print("\nFirst 500 chars of filtered content:")
75 |         if filtered_content:
76 |             print(filtered_content[0][:500])
77 |         
78 |         # Save on disc the markdown version
79 |         with open("filtered_content.md", "w", encoding="utf-8") as f:
80 |             f.write("\n".join(filtered_content))
81 |         
82 |         # Show token usage
83 |         filter.show_usage()
84 | 
85 | if __name__ == "__main__":
86 |     asyncio.run(test_llm_filter())


--------------------------------------------------------------------------------
/tests/20241401/test_stream.py:
--------------------------------------------------------------------------------
 1 | import os, sys
 2 | # append 2 parent directories to sys.path to import crawl4ai
 3 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 4 | sys.path.append(parent_dir)
 5 | parent_parent_dir = os.path.dirname(parent_dir)
 6 | sys.path.append(parent_parent_dir)
 7 | 
 8 | import asyncio
 9 | from crawl4ai import *
10 | 
11 | async def test_crawler():
12 |     # Setup configurations
13 |     browser_config = BrowserConfig(headless=True, verbose=False)
14 |     crawler_config = CrawlerRunConfig(
15 |         cache_mode=CacheMode.BYPASS,
16 |         markdown_generator=DefaultMarkdownGenerator(
17 |             content_filter=PruningContentFilter(
18 |                 threshold=0.48, 
19 |                 threshold_type="fixed", 
20 |                 min_word_threshold=0
21 |             )
22 |         ),
23 |     )
24 | 
25 |     # Test URLs - mix of different sites
26 |     urls = [
27 |         "http://example.com",
28 |         "http://example.org",
29 |         "http://example.net",
30 |     ] * 10  # 15 total URLs
31 | 
32 |     async with AsyncWebCrawler(config=browser_config) as crawler:
33 |         print("\n=== Testing Streaming Mode ===")
34 |         async for result in await crawler.arun_many(
35 |             urls=urls,
36 |             config=crawler_config.clone(stream=True),
37 |         ):
38 |             print(f"Received result for: {result.url} - Success: {result.success}")
39 |             
40 |         print("\n=== Testing Batch Mode ===")
41 |         results = await crawler.arun_many(
42 |             urls=urls,
43 |             config=crawler_config,
44 |         )
45 |         print(f"Received all {len(results)} results at once")
46 |         for result in results:
47 |             print(f"Batch result for: {result.url} - Success: {result.success}")
48 | 
49 | if __name__ == "__main__":
50 |     asyncio.run(test_crawler())


--------------------------------------------------------------------------------
/tests/20241401/test_stream_dispatch.py:
--------------------------------------------------------------------------------
 1 | import os, sys
 2 | # append 2 parent directories to sys.path to import crawl4ai
 3 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 4 | sys.path.append(parent_dir)
 5 | parent_parent_dir = os.path.dirname(parent_dir)
 6 | sys.path.append(parent_parent_dir)
 7 | 
 8 | 
 9 | import asyncio
10 | from typing import List
11 | from crawl4ai import *
12 | from crawl4ai.async_dispatcher import MemoryAdaptiveDispatcher
13 | 
14 | async def test_streaming():
15 |     browser_config = BrowserConfig(headless=True, verbose=True)
16 |     crawler_config = CrawlerRunConfig(
17 |         cache_mode=CacheMode.BYPASS,
18 |         markdown_generator=DefaultMarkdownGenerator(
19 |             # content_filter=PruningContentFilter(
20 |             #     threshold=0.48, 
21 |             #     threshold_type="fixed", 
22 |             #     min_word_threshold=0
23 |             # )
24 |         ),
25 |     )
26 | 
27 |     urls = ["http://example.com"] * 10
28 |     
29 |     async with AsyncWebCrawler(config=browser_config) as crawler:
30 |         dispatcher = MemoryAdaptiveDispatcher(
31 |             max_session_permit=5,
32 |             check_interval=0.5
33 |         )
34 |         
35 |         async for result in dispatcher.run_urls_stream(urls, crawler, crawler_config):
36 |             print(f"Got result for {result.url} - Success: {result.result.success}")
37 | 
38 | if __name__ == "__main__":
39 |     asyncio.run(test_streaming())


--------------------------------------------------------------------------------
/tests/20241401/tets_robot.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from crawl4ai import *
 3 | 
 4 | async def test_real_websites():
 5 |     print("\n=== Testing Real Website Robots.txt Compliance ===\n")
 6 |     
 7 |     browser_config = BrowserConfig(headless=True, verbose=True)
 8 |     async with AsyncWebCrawler(config=browser_config) as crawler:
 9 |         
10 |         # Test cases with URLs
11 |         test_cases = [
12 |             # Public sites that should be allowed
13 |             ("https://example.com", True),  # Simple public site
14 |             ("https://httpbin.org/get", True),  # API endpoint
15 |             
16 |             # Sites with known strict robots.txt
17 |             ("https://www.facebook.com/robots.txt", False),  # Social media
18 |             ("https://www.google.com/search", False),  # Search pages
19 |             
20 |             # Edge cases
21 |             ("https://api.github.com", True),  # API service
22 |             ("https://raw.githubusercontent.com", True),  # Content delivery
23 |             
24 |             # Non-existent/error cases
25 |             ("https://thisisnotarealwebsite.com", True),  # Non-existent domain
26 |             ("https://localhost:12345", True),  # Invalid port
27 |         ]
28 | 
29 |         for url, expected in test_cases:
30 |             print(f"\nTesting: {url}")
31 |             try:
32 |                 config = CrawlerRunConfig(
33 |                     cache_mode=CacheMode.BYPASS,
34 |                     check_robots_txt=True,  # Enable robots.txt checking
35 |                     verbose=True
36 |                 )
37 |                 
38 |                 result = await crawler.arun(url=url, config=config)
39 |                 allowed = result.success and not result.error_message
40 |                 
41 |                 print(f"Expected: {'allowed' if expected else 'denied'}")
42 |                 print(f"Actual: {'allowed' if allowed else 'denied'}")
43 |                 print(f"Status Code: {result.status_code}")
44 |                 if result.error_message:
45 |                     print(f"Error: {result.error_message}")
46 |                 
47 |                 # Optional: Print robots.txt content if available
48 |                 if result.metadata and 'robots_txt' in result.metadata:
49 |                     print(f"Robots.txt rules:\n{result.metadata['robots_txt']}")
50 |                 
51 |             except Exception as e:
52 |                 print(f"Test failed with error: {str(e)}")
53 | 
54 | async def main():
55 |     try:
56 |         await test_real_websites()
57 |     except Exception as e:
58 |         print(f"Test suite failed: {str(e)}")
59 |         raise
60 | 
61 | if __name__ == "__main__":
62 |     asyncio.run(main())


--------------------------------------------------------------------------------
/tests/__init__.py:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/unclecode/crawl4ai/e1d9e2489cd736d3af9992209268c0f601222c1a/tests/__init__.py


--------------------------------------------------------------------------------
/tests/async/test_basic_crawling.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import sys
 3 | import pytest
 4 | import time
 5 | 
 6 | # Add the parent directory to the Python path
 7 | parent_dir = os.path.dirname(
 8 |     os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 9 | )
10 | sys.path.append(parent_dir)
11 | 
12 | from crawl4ai.async_webcrawler import AsyncWebCrawler
13 | 
14 | 
15 | @pytest.mark.asyncio
16 | async def test_successful_crawl():
17 |     async with AsyncWebCrawler(verbose=True) as crawler:
18 |         url = "https://www.nbcnews.com/business"
19 |         result = await crawler.arun(url=url, bypass_cache=True)
20 |         assert result.success
21 |         assert result.url == url
22 |         assert result.html
23 |         assert result.markdown
24 |         assert result.cleaned_html
25 | 
26 | 
27 | @pytest.mark.asyncio
28 | async def test_invalid_url():
29 |     async with AsyncWebCrawler(verbose=True) as crawler:
30 |         url = "https://www.invalidurl12345.com"
31 |         result = await crawler.arun(url=url, bypass_cache=True)
32 |         assert not result.success
33 |         assert result.error_message
34 | 
35 | 
36 | @pytest.mark.asyncio
37 | async def test_multiple_urls():
38 |     async with AsyncWebCrawler(verbose=True) as crawler:
39 |         urls = [
40 |             "https://www.nbcnews.com/business",
41 |             "https://www.example.com",
42 |             "https://www.python.org",
43 |         ]
44 |         results = await crawler.arun_many(urls=urls, bypass_cache=True)
45 |         assert len(results) == len(urls)
46 |         assert all(result.success for result in results)
47 |         assert all(result.html for result in results)
48 | 
49 | 
50 | @pytest.mark.asyncio
51 | async def test_javascript_execution():
52 |     async with AsyncWebCrawler(verbose=True) as crawler:
53 |         js_code = "document.body.innerHTML = '<h1>Modified by JS</h1>';"
54 |         url = "https://www.example.com"
55 |         result = await crawler.arun(url=url, bypass_cache=True, js_code=js_code)
56 |         assert result.success
57 |         assert "<h1>Modified by JS</h1>" in result.html
58 | 
59 | 
60 | @pytest.mark.asyncio
61 | async def test_concurrent_crawling_performance():
62 |     async with AsyncWebCrawler(verbose=True) as crawler:
63 |         urls = [
64 |             "https://www.nbcnews.com/business",
65 |             "https://www.example.com",
66 |             "https://www.python.org",
67 |             "https://www.github.com",
68 |             "https://www.stackoverflow.com",
69 |         ]
70 | 
71 |         start_time = time.time()
72 |         results = await crawler.arun_many(urls=urls, bypass_cache=True)
73 |         end_time = time.time()
74 | 
75 |         total_time = end_time - start_time
76 |         print(f"Total time for concurrent crawling: {total_time:.2f} seconds")
77 | 
78 |         assert all(result.success for result in results)
79 |         assert len(results) == len(urls)
80 | 
81 |         # Assert that concurrent crawling is faster than sequential
82 |         # This multiplier may need adjustment based on the number of URLs and their complexity
83 |         assert (
84 |             total_time < len(urls) * 5
85 |         ), f"Concurrent crawling not significantly faster: {total_time:.2f} seconds"
86 | 
87 | 
88 | # Entry point for debugging
89 | if __name__ == "__main__":
90 |     pytest.main([__file__, "-v"])
91 | 


--------------------------------------------------------------------------------
/tests/async/test_caching.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import sys
 3 | import pytest
 4 | import asyncio
 5 | 
 6 | # Add the parent directory to the Python path
 7 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 8 | sys.path.append(parent_dir)
 9 | 
10 | from crawl4ai.async_webcrawler import AsyncWebCrawler
11 | 
12 | 
13 | @pytest.mark.asyncio
14 | async def test_caching():
15 |     async with AsyncWebCrawler(verbose=True) as crawler:
16 |         url = "https://www.nbcnews.com/business"
17 | 
18 |         # First crawl (should not use cache)
19 |         start_time = asyncio.get_event_loop().time()
20 |         result1 = await crawler.arun(url=url, bypass_cache=True)
21 |         end_time = asyncio.get_event_loop().time()
22 |         time_taken1 = end_time - start_time
23 | 
24 |         assert result1.success
25 | 
26 |         # Second crawl (should use cache)
27 |         start_time = asyncio.get_event_loop().time()
28 |         result2 = await crawler.arun(url=url, bypass_cache=False)
29 |         end_time = asyncio.get_event_loop().time()
30 |         time_taken2 = end_time - start_time
31 | 
32 |         assert result2.success
33 |         assert time_taken2 < time_taken1  # Cached result should be faster
34 | 
35 | 
36 | @pytest.mark.asyncio
37 | async def test_bypass_cache():
38 |     async with AsyncWebCrawler(verbose=True) as crawler:
39 |         url = "https://www.nbcnews.com/business"
40 | 
41 |         # First crawl
42 |         result1 = await crawler.arun(url=url, bypass_cache=False)
43 |         assert result1.success
44 | 
45 |         # Second crawl with bypass_cache=True
46 |         result2 = await crawler.arun(url=url, bypass_cache=True)
47 |         assert result2.success
48 | 
49 |         # Content should be different (or at least, not guaranteed to be the same)
50 |         assert result1.html != result2.html or result1.markdown != result2.markdown
51 | 
52 | 
53 | @pytest.mark.asyncio
54 | async def test_clear_cache():
55 |     async with AsyncWebCrawler(verbose=True) as crawler:
56 |         url = "https://www.nbcnews.com/business"
57 | 
58 |         # Crawl and cache
59 |         await crawler.arun(url=url, bypass_cache=False)
60 | 
61 |         # Clear cache
62 |         await crawler.aclear_cache()
63 | 
64 |         # Check cache size
65 |         cache_size = await crawler.aget_cache_size()
66 |         assert cache_size == 0
67 | 
68 | 
69 | @pytest.mark.asyncio
70 | async def test_flush_cache():
71 |     async with AsyncWebCrawler(verbose=True) as crawler:
72 |         url = "https://www.nbcnews.com/business"
73 | 
74 |         # Crawl and cache
75 |         await crawler.arun(url=url, bypass_cache=False)
76 | 
77 |         # Flush cache
78 |         await crawler.aflush_cache()
79 | 
80 |         # Check cache size
81 |         cache_size = await crawler.aget_cache_size()
82 |         assert cache_size == 0
83 | 
84 | 
85 | # Entry point for debugging
86 | if __name__ == "__main__":
87 |     pytest.main([__file__, "-v"])
88 | 


--------------------------------------------------------------------------------
/tests/async/test_chunking_and_extraction_strategies.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import sys
 3 | import pytest
 4 | import json
 5 | 
 6 | # Add the parent directory to the Python path
 7 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 8 | sys.path.append(parent_dir)
 9 | 
10 | from crawl4ai import LLMConfig
11 | from crawl4ai.async_webcrawler import AsyncWebCrawler
12 | from crawl4ai.chunking_strategy import RegexChunking
13 | from crawl4ai.extraction_strategy import LLMExtractionStrategy
14 | 
15 | 
16 | @pytest.mark.asyncio
17 | async def test_regex_chunking():
18 |     async with AsyncWebCrawler(verbose=True) as crawler:
19 |         url = "https://www.nbcnews.com/business"
20 |         chunking_strategy = RegexChunking(patterns=["\n\n"])
21 |         result = await crawler.arun(
22 |             url=url, chunking_strategy=chunking_strategy, bypass_cache=True
23 |         )
24 |         assert result.success
25 |         assert result.extracted_content
26 |         chunks = json.loads(result.extracted_content)
27 |         assert len(chunks) > 1  # Ensure multiple chunks were created
28 | 
29 | 
30 | # @pytest.mark.asyncio
31 | # async def test_cosine_strategy():
32 | #     async with AsyncWebCrawler(verbose=True) as crawler:
33 | #         url = "https://www.nbcnews.com/business"
34 | #         extraction_strategy = CosineStrategy(word_count_threshold=10, max_dist=0.2, linkage_method="ward", top_k=3, sim_threshold=0.3)
35 | #         result = await crawler.arun(
36 | #             url=url,
37 | #             extraction_strategy=extraction_strategy,
38 | #             bypass_cache=True
39 | #         )
40 | #         assert result.success
41 | #         assert result.extracted_content
42 | #         extracted_data = json.loads(result.extracted_content)
43 | #         assert len(extracted_data) > 0
44 | #         assert all('tags' in item for item in extracted_data)
45 | 
46 | 
47 | @pytest.mark.asyncio
48 | async def test_llm_extraction_strategy():
49 |     async with AsyncWebCrawler(verbose=True) as crawler:
50 |         url = "https://www.nbcnews.com/business"
51 |         extraction_strategy = LLMExtractionStrategy(
52 |             llm_config=LLMConfig(provider="openai/gpt-4o-mini",api_token=os.getenv("OPENAI_API_KEY")),
53 |             instruction="Extract only content related to technology",
54 |         )
55 |         result = await crawler.arun(
56 |             url=url, extraction_strategy=extraction_strategy, bypass_cache=True
57 |         )
58 |         assert result.success
59 |         assert result.extracted_content
60 |         extracted_data = json.loads(result.extracted_content)
61 |         assert len(extracted_data) > 0
62 |         assert all("content" in item for item in extracted_data)
63 | 
64 | 
65 | # @pytest.mark.asyncio
66 | # async def test_combined_chunking_and_extraction():
67 | #     async with AsyncWebCrawler(verbose=True) as crawler:
68 | #         url = "https://www.nbcnews.com/business"
69 | #         chunking_strategy = RegexChunking(patterns=["\n\n"])
70 | #         extraction_strategy = CosineStrategy(word_count_threshold=10, max_dist=0.2, linkage_method="ward", top_k=3, sim_threshold=0.3)
71 | #         result = await crawler.arun(
72 | #             url=url,
73 | #             chunking_strategy=chunking_strategy,
74 | #             extraction_strategy=extraction_strategy,
75 | #             bypass_cache=True
76 | #         )
77 | #         assert result.success
78 | #         assert result.extracted_content
79 | #         extracted_data = json.loads(result.extracted_content)
80 | #         assert len(extracted_data) > 0
81 | #         assert all('tags' in item for item in extracted_data)
82 | #         assert all('content' in item for item in extracted_data)
83 | 
84 | # Entry point for debugging
85 | if __name__ == "__main__":
86 |     pytest.main([__file__, "-v"])
87 | 


--------------------------------------------------------------------------------
/tests/async/test_content_extraction.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import sys
 3 | import pytest
 4 | 
 5 | # Add the parent directory to the Python path
 6 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 7 | sys.path.append(parent_dir)
 8 | 
 9 | from crawl4ai.async_webcrawler import AsyncWebCrawler
10 | 
11 | 
12 | @pytest.mark.asyncio
13 | async def test_extract_markdown():
14 |     async with AsyncWebCrawler(verbose=True) as crawler:
15 |         url = "https://www.nbcnews.com/business"
16 |         result = await crawler.arun(url=url, bypass_cache=True)
17 |         assert result.success
18 |         assert result.markdown
19 |         assert isinstance(result.markdown, str)
20 |         assert len(result.markdown) > 0
21 | 
22 | 
23 | @pytest.mark.asyncio
24 | async def test_extract_cleaned_html():
25 |     async with AsyncWebCrawler(verbose=True) as crawler:
26 |         url = "https://www.nbcnews.com/business"
27 |         result = await crawler.arun(url=url, bypass_cache=True)
28 |         assert result.success
29 |         assert result.cleaned_html
30 |         assert isinstance(result.cleaned_html, str)
31 |         assert len(result.cleaned_html) > 0
32 | 
33 | 
34 | @pytest.mark.asyncio
35 | async def test_extract_media():
36 |     async with AsyncWebCrawler(verbose=True) as crawler:
37 |         url = "https://www.nbcnews.com/business"
38 |         result = await crawler.arun(url=url, bypass_cache=True)
39 |         assert result.success
40 |         assert result.media
41 |         media = result.media
42 |         assert isinstance(media, dict)
43 |         assert "images" in media
44 |         assert isinstance(media["images"], list)
45 |         for image in media["images"]:
46 |             assert "src" in image
47 |             assert "alt" in image
48 |             assert "type" in image
49 | 
50 | 
51 | @pytest.mark.asyncio
52 | async def test_extract_links():
53 |     async with AsyncWebCrawler(verbose=True) as crawler:
54 |         url = "https://www.nbcnews.com/business"
55 |         result = await crawler.arun(url=url, bypass_cache=True)
56 |         assert result.success
57 |         assert result.links
58 |         links = result.links
59 |         assert isinstance(links, dict)
60 |         assert "internal" in links
61 |         assert "external" in links
62 |         assert isinstance(links["internal"], list)
63 |         assert isinstance(links["external"], list)
64 |         for link in links["internal"] + links["external"]:
65 |             assert "href" in link
66 |             assert "text" in link
67 | 
68 | 
69 | @pytest.mark.asyncio
70 | async def test_extract_metadata():
71 |     async with AsyncWebCrawler(verbose=True) as crawler:
72 |         url = "https://www.nbcnews.com/business"
73 |         result = await crawler.arun(url=url, bypass_cache=True)
74 |         assert result.success
75 |         assert result.metadata
76 |         metadata = result.metadata
77 |         assert isinstance(metadata, dict)
78 |         assert "title" in metadata
79 |         assert isinstance(metadata["title"], str)
80 | 
81 | 
82 | @pytest.mark.asyncio
83 | async def test_css_selector_extraction():
84 |     async with AsyncWebCrawler(verbose=True) as crawler:
85 |         url = "https://www.nbcnews.com/business"
86 |         css_selector = "h1, h2, h3"
87 |         result = await crawler.arun(
88 |             url=url, bypass_cache=True, css_selector=css_selector
89 |         )
90 |         assert result.success
91 |         assert result.markdown
92 |         assert all(heading in result.markdown for heading in ["#", "##", "###"])
93 | 
94 | 
95 | # Entry point for debugging
96 | if __name__ == "__main__":
97 |     pytest.main([__file__, "-v"])
98 | 


--------------------------------------------------------------------------------
/tests/async/test_crawler_strategy.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import sys
 3 | import pytest
 4 | 
 5 | # Add the parent directory to the Python path
 6 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 7 | sys.path.append(parent_dir)
 8 | 
 9 | from crawl4ai.async_webcrawler import AsyncWebCrawler
10 | 
11 | 
12 | @pytest.mark.asyncio
13 | async def test_custom_user_agent():
14 |     async with AsyncWebCrawler(verbose=True) as crawler:
15 |         custom_user_agent = "MyCustomUserAgent/1.0"
16 |         crawler.crawler_strategy.update_user_agent(custom_user_agent)
17 |         url = "https://httpbin.org/user-agent"
18 |         result = await crawler.arun(url=url, bypass_cache=True)
19 |         assert result.success
20 |         assert custom_user_agent in result.html
21 | 
22 | 
23 | @pytest.mark.asyncio
24 | async def test_custom_headers():
25 |     async with AsyncWebCrawler(verbose=True) as crawler:
26 |         custom_headers = {"X-Test-Header": "TestValue"}
27 |         crawler.crawler_strategy.set_custom_headers(custom_headers)
28 |         url = "https://httpbin.org/headers"
29 |         result = await crawler.arun(url=url, bypass_cache=True)
30 |         assert result.success
31 |         assert "X-Test-Header" in result.html
32 |         assert "TestValue" in result.html
33 | 
34 | 
35 | @pytest.mark.asyncio
36 | async def test_javascript_execution():
37 |     async with AsyncWebCrawler(verbose=True) as crawler:
38 |         js_code = "document.body.innerHTML = '<h1>Modified by JS</h1>';"
39 |         url = "https://www.example.com"
40 |         result = await crawler.arun(url=url, bypass_cache=True, js_code=js_code)
41 |         assert result.success
42 |         assert "<h1>Modified by JS</h1>" in result.html
43 | 
44 | 
45 | @pytest.mark.asyncio
46 | async def test_hook_execution():
47 |     async with AsyncWebCrawler(verbose=True) as crawler:
48 | 
49 |         async def test_hook(page):
50 |             await page.evaluate("document.body.style.backgroundColor = 'red';")
51 |             return page
52 | 
53 |         crawler.crawler_strategy.set_hook("after_goto", test_hook)
54 |         url = "https://www.example.com"
55 |         result = await crawler.arun(url=url, bypass_cache=True)
56 |         assert result.success
57 |         assert "background-color: red" in result.html
58 | 
59 | 
60 | @pytest.mark.asyncio
61 | async def test_screenshot():
62 |     async with AsyncWebCrawler(verbose=True) as crawler:
63 |         url = "https://www.example.com"
64 |         result = await crawler.arun(url=url, bypass_cache=True, screenshot=True)
65 |         assert result.success
66 |         assert result.screenshot
67 |         assert isinstance(result.screenshot, str)
68 |         assert len(result.screenshot) > 0
69 | 
70 | 
71 | # Entry point for debugging
72 | if __name__ == "__main__":
73 |     pytest.main([__file__, "-v"])
74 | 


--------------------------------------------------------------------------------
/tests/async/test_database_operations.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import sys
 3 | import pytest
 4 | 
 5 | # Add the parent directory to the Python path
 6 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 7 | sys.path.append(parent_dir)
 8 | 
 9 | from crawl4ai.async_webcrawler import AsyncWebCrawler
10 | 
11 | 
12 | @pytest.mark.asyncio
13 | async def test_cache_url():
14 |     async with AsyncWebCrawler(verbose=True) as crawler:
15 |         url = "https://www.example.com"
16 |         # First run to cache the URL
17 |         result1 = await crawler.arun(url=url, bypass_cache=True)
18 |         assert result1.success
19 | 
20 |         # Second run to retrieve from cache
21 |         result2 = await crawler.arun(url=url, bypass_cache=False)
22 |         assert result2.success
23 |         assert result2.html == result1.html
24 | 
25 | 
26 | @pytest.mark.asyncio
27 | async def test_bypass_cache():
28 |     async with AsyncWebCrawler(verbose=True) as crawler:
29 |         url = "https://www.python.org"
30 |         # First run to cache the URL
31 |         result1 = await crawler.arun(url=url, bypass_cache=True)
32 |         assert result1.success
33 | 
34 |         # Second run bypassing cache
35 |         result2 = await crawler.arun(url=url, bypass_cache=True)
36 |         assert result2.success
37 |         assert (
38 |             result2.html != result1.html
39 |         )  # Content might be different due to dynamic nature of websites
40 | 
41 | 
42 | @pytest.mark.asyncio
43 | async def test_cache_size():
44 |     async with AsyncWebCrawler(verbose=True) as crawler:
45 |         initial_size = await crawler.aget_cache_size()
46 | 
47 |         url = "https://www.nbcnews.com/business"
48 |         await crawler.arun(url=url, bypass_cache=True)
49 | 
50 |         new_size = await crawler.aget_cache_size()
51 |         assert new_size == initial_size + 1
52 | 
53 | 
54 | @pytest.mark.asyncio
55 | async def test_clear_cache():
56 |     async with AsyncWebCrawler(verbose=True) as crawler:
57 |         url = "https://www.example.org"
58 |         await crawler.arun(url=url, bypass_cache=True)
59 | 
60 |         initial_size = await crawler.aget_cache_size()
61 |         assert initial_size > 0
62 | 
63 |         await crawler.aclear_cache()
64 |         new_size = await crawler.aget_cache_size()
65 |         assert new_size == 0
66 | 
67 | 
68 | @pytest.mark.asyncio
69 | async def test_flush_cache():
70 |     async with AsyncWebCrawler(verbose=True) as crawler:
71 |         url = "https://www.example.net"
72 |         await crawler.arun(url=url, bypass_cache=True)
73 | 
74 |         initial_size = await crawler.aget_cache_size()
75 |         assert initial_size > 0
76 | 
77 |         await crawler.aflush_cache()
78 |         new_size = await crawler.aget_cache_size()
79 |         assert new_size == 0
80 | 
81 |         # Try to retrieve the previously cached URL
82 |         result = await crawler.arun(url=url, bypass_cache=False)
83 |         assert (
84 |             result.success
85 |         )  # The crawler should still succeed, but it will fetch the content anew
86 | 
87 | 
88 | # Entry point for debugging
89 | if __name__ == "__main__":
90 |     pytest.main([__file__, "-v"])
91 | 


--------------------------------------------------------------------------------
/tests/async/test_error_handling.py:
--------------------------------------------------------------------------------
 1 | # import os
 2 | # import sys
 3 | # import pytest
 4 | # import asyncio
 5 | 
 6 | # # Add the parent directory to the Python path
 7 | # parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 8 | # sys.path.append(parent_dir)
 9 | 
10 | # from crawl4ai.async_webcrawler import AsyncWebCrawler
11 | # from crawl4ai.utils import InvalidCSSSelectorError
12 | 
13 | # class AsyncCrawlerWrapper:
14 | #     def __init__(self):
15 | #         self.crawler = None
16 | 
17 | #     async def setup(self):
18 | #         self.crawler = AsyncWebCrawler(verbose=True)
19 | #         await self.crawler.awarmup()
20 | 
21 | #     async def cleanup(self):
22 | #         if self.crawler:
23 | #             await self.crawler.aclear_cache()
24 | 
25 | # @pytest.fixture(scope="module")
26 | # def crawler_wrapper():
27 | #     wrapper = AsyncCrawlerWrapper()
28 | #     asyncio.get_event_loop().run_until_complete(wrapper.setup())
29 | #     yield wrapper
30 | #     asyncio.get_event_loop().run_until_complete(wrapper.cleanup())
31 | 
32 | # @pytest.mark.asyncio
33 | # async def test_network_error(crawler_wrapper):
34 | #     url = "https://www.nonexistentwebsite123456789.com"
35 | #     result = await crawler_wrapper.crawler.arun(url=url, bypass_cache=True)
36 | #     assert not result.success
37 | #     assert "Failed to crawl" in result.error_message
38 | 
39 | # # @pytest.mark.asyncio
40 | # # async def test_timeout_error(crawler_wrapper):
41 | # #     # Simulating a timeout by using a very short timeout value
42 | # #     url = "https://www.nbcnews.com/business"
43 | # #     result = await crawler_wrapper.crawler.arun(url=url, bypass_cache=True, timeout=0.001)
44 | # #     assert not result.success
45 | # #     assert "timeout" in result.error_message.lower()
46 | 
47 | # # @pytest.mark.asyncio
48 | # # async def test_invalid_css_selector(crawler_wrapper):
49 | # #     url = "https://www.nbcnews.com/business"
50 | # #     with pytest.raises(InvalidCSSSelectorError):
51 | # #         await crawler_wrapper.crawler.arun(url=url, bypass_cache=True, css_selector="invalid>>selector")
52 | 
53 | # # @pytest.mark.asyncio
54 | # # async def test_js_execution_error(crawler_wrapper):
55 | # #     url = "https://www.nbcnews.com/business"
56 | # #     invalid_js = "This is not valid JavaScript code;"
57 | # #     result = await crawler_wrapper.crawler.arun(url=url, bypass_cache=True, js=invalid_js)
58 | # #     assert not result.success
59 | # #     assert "JavaScript" in result.error_message
60 | 
61 | # # @pytest.mark.asyncio
62 | # # async def test_empty_page(crawler_wrapper):
63 | # #     # Use a URL that typically returns an empty page
64 | # #     url = "http://example.com/empty"
65 | # #     result = await crawler_wrapper.crawler.arun(url=url, bypass_cache=True)
66 | # #     assert result.success  # The crawl itself should succeed
67 | # #     assert not result.markdown.strip()  # The markdown content should be empty or just whitespace
68 | 
69 | # # @pytest.mark.asyncio
70 | # # async def test_rate_limiting(crawler_wrapper):
71 | # #     # Simulate rate limiting by making multiple rapid requests
72 | # #     url = "https://www.nbcnews.com/business"
73 | # #     results = await asyncio.gather(*[crawler_wrapper.crawler.arun(url=url, bypass_cache=True) for _ in range(10)])
74 | # #     assert any(not result.success and "rate limit" in result.error_message.lower() for result in results)
75 | 
76 | # # Entry point for debugging
77 | # if __name__ == "__main__":
78 | #     pytest.main([__file__, "-v"])
79 | 


--------------------------------------------------------------------------------
/tests/async/test_parameters_and_options.py:
--------------------------------------------------------------------------------
  1 | import os
  2 | import sys
  3 | import pytest
  4 | 
  5 | # Add the parent directory to the Python path
  6 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
  7 | sys.path.append(parent_dir)
  8 | 
  9 | from crawl4ai.async_webcrawler import AsyncWebCrawler
 10 | 
 11 | 
 12 | @pytest.mark.asyncio
 13 | async def test_word_count_threshold():
 14 |     async with AsyncWebCrawler(verbose=True) as crawler:
 15 |         url = "https://www.nbcnews.com/business"
 16 |         result_no_threshold = await crawler.arun(
 17 |             url=url, word_count_threshold=0, bypass_cache=True
 18 |         )
 19 |         result_with_threshold = await crawler.arun(
 20 |             url=url, word_count_threshold=50, bypass_cache=True
 21 |         )
 22 | 
 23 |         assert len(result_no_threshold.markdown) > len(result_with_threshold.markdown)
 24 | 
 25 | 
 26 | @pytest.mark.asyncio
 27 | async def test_css_selector():
 28 |     async with AsyncWebCrawler(verbose=True) as crawler:
 29 |         url = "https://www.nbcnews.com/business"
 30 |         css_selector = "h1, h2, h3"
 31 |         result = await crawler.arun(
 32 |             url=url, css_selector=css_selector, bypass_cache=True
 33 |         )
 34 | 
 35 |         assert result.success
 36 |         assert (
 37 |             "<h1" in result.cleaned_html
 38 |             or "<h2" in result.cleaned_html
 39 |             or "<h3" in result.cleaned_html
 40 |         )
 41 | 
 42 | 
 43 | @pytest.mark.asyncio
 44 | async def test_javascript_execution():
 45 |     async with AsyncWebCrawler(verbose=True) as crawler:
 46 |         url = "https://www.nbcnews.com/business"
 47 | 
 48 |         # Crawl without JS
 49 |         result_without_more = await crawler.arun(url=url, bypass_cache=True)
 50 | 
 51 |         js_code = [
 52 |             "const loadMoreButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.includes('Load More')); loadMoreButton && loadMoreButton.click();"
 53 |         ]
 54 |         result_with_more = await crawler.arun(url=url, js=js_code, bypass_cache=True)
 55 | 
 56 |         assert result_with_more.success
 57 |         assert len(result_with_more.markdown) > len(result_without_more.markdown)
 58 | 
 59 | 
 60 | @pytest.mark.asyncio
 61 | async def test_screenshot():
 62 |     async with AsyncWebCrawler(verbose=True) as crawler:
 63 |         url = "https://www.nbcnews.com/business"
 64 |         result = await crawler.arun(url=url, screenshot=True, bypass_cache=True)
 65 | 
 66 |         assert result.success
 67 |         assert result.screenshot
 68 |         assert isinstance(result.screenshot, str)  # Should be a base64 encoded string
 69 | 
 70 | 
 71 | @pytest.mark.asyncio
 72 | async def test_custom_user_agent():
 73 |     async with AsyncWebCrawler(verbose=True) as crawler:
 74 |         url = "https://www.nbcnews.com/business"
 75 |         custom_user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Crawl4AI/1.0"
 76 |         result = await crawler.arun(
 77 |             url=url, user_agent=custom_user_agent, bypass_cache=True
 78 |         )
 79 | 
 80 |         assert result.success
 81 |         # Note: We can't directly verify the user agent in the result, but we can check if the crawl was successful
 82 | 
 83 | 
 84 | @pytest.mark.asyncio
 85 | async def test_extract_media_and_links():
 86 |     async with AsyncWebCrawler(verbose=True) as crawler:
 87 |         url = "https://www.nbcnews.com/business"
 88 |         result = await crawler.arun(url=url, bypass_cache=True)
 89 | 
 90 |         assert result.success
 91 |         assert result.media
 92 |         assert isinstance(result.media, dict)
 93 |         assert "images" in result.media
 94 |         assert result.links
 95 |         assert isinstance(result.links, dict)
 96 |         assert "internal" in result.links and "external" in result.links
 97 | 
 98 | 
 99 | @pytest.mark.asyncio
100 | async def test_metadata_extraction():
101 |     async with AsyncWebCrawler(verbose=True) as crawler:
102 |         url = "https://www.nbcnews.com/business"
103 |         result = await crawler.arun(url=url, bypass_cache=True)
104 | 
105 |         assert result.success
106 |         assert result.metadata
107 |         assert isinstance(result.metadata, dict)
108 |         # Check for common metadata fields
109 |         assert any(
110 |             key in result.metadata for key in ["title", "description", "keywords"]
111 |         )
112 | 
113 | 
114 | # Entry point for debugging
115 | if __name__ == "__main__":
116 |     pytest.main([__file__, "-v"])
117 | 


--------------------------------------------------------------------------------
/tests/async/test_performance.py:
--------------------------------------------------------------------------------
 1 | import os
 2 | import sys
 3 | import pytest
 4 | import time
 5 | 
 6 | # Add the parent directory to the Python path
 7 | parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
 8 | sys.path.append(parent_dir)
 9 | 
10 | from crawl4ai.async_webcrawler import AsyncWebCrawler
11 | 
12 | 
13 | @pytest.mark.asyncio
14 | async def test_crawl_speed():
15 |     async with AsyncWebCrawler(verbose=True) as crawler:
16 |         url = "https://www.nbcnews.com/business"
17 |         start_time = time.time()
18 |         result = await crawler.arun(url=url, bypass_cache=True)
19 |         end_time = time.time()
20 | 
21 |         assert result.success
22 |         crawl_time = end_time - start_time
23 |         print(f"Crawl time: {crawl_time:.2f} seconds")
24 | 
25 |         assert crawl_time < 10, f"Crawl took too long: {crawl_time:.2f} seconds"
26 | 
27 | 
28 | @pytest.mark.asyncio
29 | async def test_concurrent_crawling_performance():
30 |     async with AsyncWebCrawler(verbose=True) as crawler:
31 |         urls = [
32 |             "https://www.nbcnews.com/business",
33 |             "https://www.example.com",
34 |             "https://www.python.org",
35 |             "https://www.github.com",
36 |             "https://www.stackoverflow.com",
37 |         ]
38 | 
39 |         start_time = time.time()
40 |         results = await crawler.arun_many(urls=urls, bypass_cache=True)
41 |         end_time = time.time()
42 | 
43 |         total_time = end_time - start_time
44 |         print(f"Total time for concurrent crawling: {total_time:.2f} seconds")
45 | 
46 |         assert all(result.success for result in results)
47 |         assert len(results) == len(urls)
48 | 
49 |         assert (
50 |             total_time < len(urls) * 5
51 |         ), f"Concurrent crawling not significantly faster: {total_time:.2f} seconds"
52 | 
53 | 
54 | @pytest.mark.asyncio
55 | async def test_crawl_speed_with_caching():
56 |     async with AsyncWebCrawler(verbose=True) as crawler:
57 |         url = "https://www.nbcnews.com/business"
58 | 
59 |         start_time = time.time()
60 |         result1 = await crawler.arun(url=url, bypass_cache=True)
61 |         end_time = time.time()
62 |         first_crawl_time = end_time - start_time
63 | 
64 |         start_time = time.time()
65 |         result2 = await crawler.arun(url=url, bypass_cache=False)
66 |         end_time = time.time()
67 |         second_crawl_time = end_time - start_time
68 | 
69 |         assert result1.success and result2.success
70 |         print(f"First crawl time: {first_crawl_time:.2f} seconds")
71 |         print(f"Second crawl time (cached): {second_crawl_time:.2f} seconds")
72 | 
73 |         assert (
74 |             second_crawl_time < first_crawl_time / 2
75 |         ), "Cached crawl not significantly faster"
76 | 
77 | 
78 | if __name__ == "__main__":
79 |     pytest.main([__file__, "-v"])
80 | 


--------------------------------------------------------------------------------
/tests/browser/docker/__init__.py:
--------------------------------------------------------------------------------
1 | """Docker browser strategy tests.
2 | 
3 | This package contains tests for the Docker browser strategy implementation.
4 | """


--------------------------------------------------------------------------------
/tests/browser/test_combined.py:
--------------------------------------------------------------------------------
 1 | """Combined test runner for all browser module tests.
 2 | 
 3 | This script runs all the browser module tests in sequence and
 4 | provides a comprehensive summary.
 5 | """
 6 | 
 7 | import asyncio
 8 | import os
 9 | import sys
10 | import time
11 | 
12 | # Add the project root to Python path if running directly
13 | if __name__ == "__main__":
14 |     sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))
15 | 
16 | from crawl4ai.async_logger import AsyncLogger
17 | 
18 | # Create a logger for clear terminal output
19 | logger = AsyncLogger(verbose=True, log_file=None)
20 | 
21 | async def run_test_module(module_name, header):
22 |     """Run all tests in a module and return results."""
23 |     logger.info(f"\n{'-'*30}", tag="TEST")
24 |     logger.info(f"RUNNING: {header}", tag="TEST")
25 |     logger.info(f"{'-'*30}", tag="TEST")
26 |     
27 |     # Import the module dynamically
28 |     module = __import__(f"tests.browser.{module_name}", fromlist=["run_tests"])
29 |     
30 |     # Track time for performance measurement
31 |     start_time = time.time()
32 |     
33 |     # Run the tests
34 |     await module.run_tests()
35 |     
36 |     # Calculate time taken
37 |     time_taken = time.time() - start_time
38 |     logger.info(f"Time taken: {time_taken:.2f} seconds", tag="TIMING")
39 |     
40 |     return time_taken
41 | 
42 | async def main():
43 |     """Run all test modules."""
44 |     logger.info("STARTING COMPREHENSIVE BROWSER MODULE TESTS", tag="MAIN")
45 |     
46 |     # List of test modules to run
47 |     test_modules = [
48 |         ("test_browser_manager", "Browser Manager Tests"),
49 |         ("test_playwright_strategy", "Playwright Strategy Tests"),
50 |         ("test_cdp_strategy", "CDP Strategy Tests"),
51 |         ("test_builtin_strategy", "Builtin Browser Strategy Tests"),
52 |         ("test_profiles", "Profile Management Tests")
53 |     ]
54 |     
55 |     # Run each test module
56 |     timings = {}
57 |     for module_name, header in test_modules:
58 |         try:
59 |             time_taken = await run_test_module(module_name, header)
60 |             timings[module_name] = time_taken
61 |         except Exception as e:
62 |             logger.error(f"Error running {module_name}: {str(e)}", tag="ERROR")
63 |     
64 |     # Print summary
65 |     logger.info("\n\nTEST SUMMARY:", tag="SUMMARY")
66 |     logger.info(f"{'-'*50}", tag="SUMMARY")
67 |     for module_name, header in test_modules:
68 |         if module_name in timings:
69 |             logger.info(f"{header}: {timings[module_name]:.2f} seconds", tag="SUMMARY")
70 |         else:
71 |             logger.error(f"{header}: FAILED TO RUN", tag="SUMMARY")
72 |     logger.info(f"{'-'*50}", tag="SUMMARY")
73 |     total_time = sum(timings.values())
74 |     logger.info(f"Total time: {total_time:.2f} seconds", tag="SUMMARY")
75 | 
76 | if __name__ == "__main__":
77 |     asyncio.run(main())
78 | 


--------------------------------------------------------------------------------
/tests/browser/test_launch_standalone.py:
--------------------------------------------------------------------------------
 1 | from crawl4ai.browser_profiler import BrowserProfiler
 2 | import asyncio
 3 | 
 4 | 
 5 | if __name__ == "__main__":
 6 |     # Test launching a standalone browser
 7 |     async def test_standalone_browser():
 8 |         profiler = BrowserProfiler()
 9 |         cdp_url = await profiler.launch_standalone_browser(
10 |             browser_type="chromium",
11 |             user_data_dir="~/.crawl4ai/browser_profile/test-browser-data",
12 |             debugging_port=9222,
13 |             headless=False
14 |         )
15 |         print(f"CDP URL: {cdp_url}")
16 | 
17 |     asyncio.run(test_standalone_browser())


--------------------------------------------------------------------------------
/tests/docker/test_dockerclient.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from crawl4ai.docker_client import Crawl4aiDockerClient
 3 | from crawl4ai import (
 4 |     BrowserConfig,
 5 |     CrawlerRunConfig
 6 | )
 7 | 
 8 | async def main():
 9 |     async with Crawl4aiDockerClient(base_url="http://localhost:8000", verbose=True) as client:
10 |         await client.authenticate("test@example.com")
11 |         
12 |         # Non-streaming crawl
13 |         results = await client.crawl(
14 |             ["https://example.com", "https://python.org"],
15 |             browser_config=BrowserConfig(headless=True),
16 |             crawler_config=CrawlerRunConfig()
17 |         )
18 |         print(f"Non-streaming results: {results}")
19 |         
20 |         # Streaming crawl
21 |         crawler_config = CrawlerRunConfig(stream=True)
22 |         async for result in await client.crawl(
23 |             ["https://example.com", "https://python.org"],
24 |             browser_config=BrowserConfig(headless=True),
25 |             crawler_config=crawler_config
26 |         ):
27 |             print(f"Streamed result: {result}")
28 |         
29 |         # Get schema
30 |         schema = await client.get_schema()
31 |         print(f"Schema: {schema}")
32 | 
33 | if __name__ == "__main__":
34 |     asyncio.run(main())


--------------------------------------------------------------------------------
/tests/hub/test_simple.py:
--------------------------------------------------------------------------------
 1 | # test.py
 2 | from crawl4ai import CrawlerHub
 3 | import json
 4 | 
 5 | async def amazon_example():
 6 |     if (crawler_cls := CrawlerHub.get("amazon_product")) :
 7 |         crawler = crawler_cls()
 8 |         print(f"Crawler version: {crawler_cls.meta['version']}")
 9 |         print(f"Rate limits: {crawler_cls.meta.get('rate_limit', 'Unlimited')}")
10 |         print(await crawler.run("https://amazon.com/test"))
11 |     else:
12 |         print("Crawler not found!")
13 | 
14 | async def google_example():
15 |     # Get crawler dynamically
16 |     crawler_cls = CrawlerHub.get("google_search")
17 |     crawler = crawler_cls()
18 | 
19 |     # Text search
20 |     text_results = await crawler.run(
21 |         query="apple inc", 
22 |         search_type="text",  
23 |         schema_cache_path="/Users/unclecode/.crawl4ai"
24 |     )
25 |     print(json.dumps(json.loads(text_results), indent=4))
26 | 
27 |     # Image search
28 |     # image_results = await crawler.run(query="apple inc", search_type="image")
29 |     # print(image_results)
30 | 
31 | if __name__ == "__main__":
32 |     import asyncio
33 |     # asyncio.run(amazon_example())
34 |     asyncio.run(google_example())


--------------------------------------------------------------------------------
/tests/loggers/test_logger.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig, CacheMode, AsyncLoggerBase
 3 | import os
 4 | from datetime import datetime
 5 | 
 6 | class AsyncFileLogger(AsyncLoggerBase):
 7 |     """
 8 |     File-only asynchronous logger that writes logs to a specified file.
 9 |     """
10 | 
11 |     def __init__(self, log_file: str):
12 |         """
13 |         Initialize the file logger.
14 | 
15 |         Args:
16 |             log_file: File path for logging
17 |         """
18 |         self.log_file = log_file
19 |         os.makedirs(os.path.dirname(os.path.abspath(log_file)), exist_ok=True)
20 | 
21 |     def _write_to_file(self, level: str, message: str, tag: str):
22 |         """Write a message to the log file."""
23 |         timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
24 |         with open(self.log_file, "a", encoding="utf-8") as f:
25 |             f.write(f"[{timestamp}] [{level}] [{tag}] {message}\n")
26 | 
27 |     def debug(self, message: str, tag: str = "DEBUG", **kwargs):
28 |         """Log a debug message to file."""
29 |         self._write_to_file("DEBUG", message, tag)
30 | 
31 |     def info(self, message: str, tag: str = "INFO", **kwargs):
32 |         """Log an info message to file."""
33 |         self._write_to_file("INFO", message, tag)
34 | 
35 |     def success(self, message: str, tag: str = "SUCCESS", **kwargs):
36 |         """Log a success message to file."""
37 |         self._write_to_file("SUCCESS", message, tag)
38 | 
39 |     def warning(self, message: str, tag: str = "WARNING", **kwargs):
40 |         """Log a warning message to file."""
41 |         self._write_to_file("WARNING", message, tag)
42 | 
43 |     def error(self, message: str, tag: str = "ERROR", **kwargs):
44 |         """Log an error message to file."""
45 |         self._write_to_file("ERROR", message, tag)
46 | 
47 |     def url_status(self, url: str, success: bool, timing: float, tag: str = "FETCH", url_length: int = 50):
48 |         """Log URL fetch status to file."""
49 |         status = "SUCCESS" if success else "FAILED"
50 |         message = f"{url[:url_length]}... | Status: {status} | Time: {timing:.2f}s"
51 |         self._write_to_file("URL_STATUS", message, tag)
52 | 
53 |     def error_status(self, url: str, error: str, tag: str = "ERROR", url_length: int = 50):
54 |         """Log error status to file."""
55 |         message = f"{url[:url_length]}... | Error: {error}"
56 |         self._write_to_file("ERROR", message, tag)
57 | 
58 | async def main():
59 |     browser_config = BrowserConfig(headless=True, verbose=True)
60 |     crawler = AsyncWebCrawler(config=browser_config, logger=AsyncFileLogger("/Users/unclecode/devs/crawl4ai/.private/tmp/crawl.log"))
61 |     await crawler.start()
62 |     
63 |     try:
64 |         crawl_config = CrawlerRunConfig(
65 |             cache_mode=CacheMode.BYPASS,
66 |         )
67 |         # Use the crawler multiple times
68 |         result = await crawler.arun(
69 |             url='https://kidocode.com/',
70 |             config=crawl_config
71 |         )
72 |         if result.success:
73 |             print("First crawl - Raw Markdown Length:", len(result.markdown.raw_markdown))
74 |             
75 |     finally:
76 |         # Always ensure we close the crawler
77 |         await crawler.close()
78 | 
79 | if __name__ == "__main__":
80 |     asyncio.run(main())
81 | 


--------------------------------------------------------------------------------
/tests/test_cli_docs.py:
--------------------------------------------------------------------------------
 1 | import asyncio
 2 | from crawl4ai.docs_manager import DocsManager
 3 | from click.testing import CliRunner
 4 | from crawl4ai.cli import cli
 5 | 
 6 | 
 7 | def test_cli():
 8 |     """Test all CLI commands"""
 9 |     runner = CliRunner()
10 | 
11 |     print("\n1. Testing docs update...")
12 |     # Use sync version for testing
13 |     docs_manager = DocsManager()
14 |     loop = asyncio.get_event_loop()
15 |     loop.run_until_complete(docs_manager.fetch_docs())
16 | 
17 |     # print("\n2. Testing listing...")
18 |     # result = runner.invoke(cli, ['docs', 'list'])
19 |     # print(f"Status: {'✅' if result.exit_code == 0 else '❌'}")
20 |     # print(result.output)
21 | 
22 |     # print("\n2. Testing index building...")
23 |     # result = runner.invoke(cli, ['docs', 'index'])
24 |     # print(f"Status: {'✅' if result.exit_code == 0 else '❌'}")
25 |     # print(f"Output: {result.output}")
26 | 
27 |     # print("\n3. Testing search...")
28 |     # result = runner.invoke(cli, ['docs', 'search', 'how to use crawler', '--build-index'])
29 |     # print(f"Status: {'✅' if result.exit_code == 0 else '❌'}")
30 |     # print(f"First 200 chars: {result.output[:200]}...")
31 | 
32 |     # print("\n4. Testing combine with sections...")
33 |     # result = runner.invoke(cli, ['docs', 'combine', 'chunking_strategies', 'extraction_strategies', '--mode', 'extended'])
34 |     # print(f"Status: {'✅' if result.exit_code == 0 else '❌'}")
35 |     # print(f"First 200 chars: {result.output[:200]}...")
36 | 
37 |     print("\n5. Testing combine all sections...")
38 |     result = runner.invoke(cli, ["docs", "combine", "--mode", "condensed"])
39 |     print(f"Status: {'✅' if result.exit_code == 0 else '❌'}")
40 |     print(f"First 200 chars: {result.output[:200]}...")
41 | 
42 | 
43 | if __name__ == "__main__":
44 |     test_cli()
45 | 


--------------------------------------------------------------------------------
/tests/test_llmtxt.py:
--------------------------------------------------------------------------------
 1 | from crawl4ai.llmtxt import AsyncLLMTextManager  # Changed to AsyncLLMTextManager
 2 | from crawl4ai.async_logger import AsyncLogger
 3 | from pathlib import Path
 4 | import asyncio
 5 | 
 6 | 
 7 | async def main():
 8 |     current_file = Path(__file__).resolve()
 9 |     # base_dir = current_file.parent.parent / "local/_docs/llm.txt/test_docs"
10 |     base_dir = current_file.parent.parent / "local/_docs/llm.txt"
11 |     docs_dir = base_dir
12 | 
13 |     # Create directory if it doesn't exist
14 |     docs_dir.mkdir(parents=True, exist_ok=True)
15 | 
16 |     # Initialize logger
17 |     logger = AsyncLogger()
18 |     # Updated initialization with default batching params
19 |     # manager = AsyncLLMTextManager(docs_dir, logger, max_concurrent_calls=3, batch_size=2)
20 |     manager = AsyncLLMTextManager(docs_dir, logger, batch_size=2)
21 | 
22 |     # Let's first check what files we have
23 |     print("\nAvailable files:")
24 |     for f in docs_dir.glob("*.md"):
25 |         print(f"- {f.name}")
26 | 
27 |     # Generate index files
28 |     print("\nGenerating index files...")
29 |     await manager.generate_index_files(
30 |         force_generate_facts=False, clear_bm25_cache=False
31 |     )
32 | 
33 |     # Test some relevant queries about Crawl4AI
34 |     test_queries = [
35 |         "How is using the `arun_many` method?",
36 |     ]
37 | 
38 |     print("\nTesting search functionality:")
39 |     for query in test_queries:
40 |         print(f"\nQuery: {query}")
41 |         results = manager.search(query, top_k=2)
42 |         print(f"Results length: {len(results)} characters")
43 |         if results:
44 |             print(
45 |                 "First 200 chars of results:", results[:200].replace("\n", " "), "..."
46 |             )
47 |         else:
48 |             print("No results found")
49 | 
50 | 
51 | if __name__ == "__main__":
52 |     asyncio.run(main())
53 | 


--------------------------------------------------------------------------------
/tests/test_scraping_strategy.py:
--------------------------------------------------------------------------------
 1 | import nest_asyncio
 2 | 
 3 | nest_asyncio.apply()
 4 | 
 5 | import asyncio
 6 | from crawl4ai import (
 7 |     AsyncWebCrawler,
 8 |     CrawlerRunConfig,
 9 |     LXMLWebScrapingStrategy,
10 |     CacheMode,
11 | )
12 | 
13 | 
14 | async def main():
15 |     config = CrawlerRunConfig(
16 |         cache_mode=CacheMode.BYPASS,
17 |         scraping_strategy=LXMLWebScrapingStrategy(),  # Faster alternative to default BeautifulSoup
18 |     )
19 |     async with AsyncWebCrawler() as crawler:
20 |         result = await crawler.arun(url="https://example.com", config=config)
21 |         print(f"Success: {result.success}")
22 |         print(f"Markdown length: {len(result.markdown.raw_markdown)}")
23 | 
24 | 
25 | if __name__ == "__main__":
26 |     asyncio.run(main())
27 | 


---------------------------------------------------------