(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[325],{2627:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>i});const i={key:"v-67d16688",path:"/plugins/",title:"Installing Plugins",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Example",slug:"example",children:[]},{level:2,title:"Plugin Quickstart",slug:"plugin-quickstart",children:[]},{level:2,title:"Navigation",slug:"navigation",children:[{level:3,title:"hop",slug:"hop",children:[]},{level:3,title:"rnvimr",slug:"rnvimr",children:[]},{level:3,title:"snap",slug:"snap",children:[]}]},{level:2,title:"Git",slug:"git",children:[{level:3,title:"gitlinker.nvim",slug:"gitlinker-nvim",children:[]},{level:3,title:"octo.nvim",slug:"octo-nvim",children:[]},{level:3,title:"vim-gist",slug:"vim-gist",children:[]},{level:3,title:"git-blame.nvim",slug:"git-blame-nvim",children:[]},{level:3,title:"diffview.nvim",slug:"diffview-nvim",children:[]},{level:3,title:"vim-fugitive",slug:"vim-fugitive",children:[]}]},{level:2,title:"Treesitter",slug:"treesitter",children:[{level:3,title:"playground",slug:"playground",children:[]},{level:3,title:"nvim-ts-autotag",slug:"nvim-ts-autotag",children:[]},{level:3,title:"nvim-ts-rainbow",slug:"nvim-ts-rainbow",children:[]},{level:3,title:"nvim-ts-context-commentstring",slug:"nvim-ts-context-commentstring",children:[]}]},{level:2,title:"Telescope Extensions",slug:"telescope-extensions",children:[{level:3,title:"telescope-fzy-native.nvim",slug:"telescope-fzy-native-nvim",children:[]}]},{level:2,title:"Colorschemes",slug:"colorschemes",children:[{level:3,title:"lush.nvim",slug:"lush-nvim",children:[]}]},{level:2,title:"LSP enhancement",slug:"lsp-enhancement",children:[{level:3,title:"lsp_signature.nvim",slug:"lsp-signature-nvim",children:[]},{level:3,title:"vim-bundler",slug:"vim-bundler",children:[]}]},{level:2,title:"General",slug:"general",children:[{level:3,title:"indent-blankline.nvim",slug:"indent-blankline-nvim",children:[]},{level:3,title:"nvim-colorizer",slug:"nvim-colorizer",children:[]},{level:3,title:"dial.nvim",slug:"dial-nvim",children:[]},{level:3,title:"vim-matchup",slug:"vim-matchup",children:[]},{level:3,title:"numb.nvim",slug:"numb-nvim",children:[]},{level:3,title:"nvim-spectre",slug:"nvim-spectre",children:[]},{level:3,title:"nvim-bqf",slug:"nvim-bqf",children:[]},{level:3,title:"markdown-preview.nvim",slug:"markdown-preview-nvim",children:[]},{level:3,title:"glow.nvim",slug:"glow-nvim",children:[]},{level:3,title:"neoscroll.nvim",slug:"neoscroll-nvim",children:[]},{level:3,title:"lsp-rooter",slug:"lsp-rooter",children:[]},{level:3,title:"todo-comments.nvim",slug:"todo-comments-nvim",children:[]},{level:3,title:"symbols-outline.nvim",slug:"symbols-outline-nvim",children:[]},{level:3,title:"trouble.nvim",slug:"trouble-nvim",children:[]},{level:3,title:"vim-sanegx",slug:"vim-sanegx",children:[]},{level:3,title:"vim-cursorword",slug:"vim-cursorword",children:[]},{level:3,title:"vim-surround",slug:"vim-surround",children:[]},{level:3,title:"vim-repeat",slug:"vim-repeat",children:[]},{level:3,title:"codi.vim",slug:"codi-vim",children:[]},{level:3,title:"compe-tabnine",slug:"compe-tabnine",children:[]}]}],filePathRelative:"plugins/README.md",git:{updatedTime:1627361043e3,contributors:[]}}},4274:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>t});const i=(0,a(6252).uE)('<h1 id="installing-plugins" tabindex="-1"><a class="header-anchor" href="#installing-plugins" aria-hidden="true">#</a> Installing Plugins</h1><p>You can easily install plugins using the options provided by packer.</p><p>Just add your plugin to the <code>lvim.plugins</code> table in your <code>lv-config.lua</code> file and save the file (don&#39;t quit or the operation will not run).</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>plugins <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;lunarvim/colorschemes&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;folke/tokyonight.nvim&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n    <span class="token punctuation">{</span>\n        <span class="token string">&quot;ray-x/lsp_signature.nvim&quot;</span><span class="token punctuation">,</span>\n        config <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n          require<span class="token string">&quot;lsp_signature&quot;</span><span class="token punctuation">.</span><span class="token function">on_attach</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n        <span class="token keyword">end</span><span class="token punctuation">,</span>\n        event <span class="token operator">=</span> <span class="token string">&quot;InsertEnter&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>After adding the following to your <code>lv-config.lua</code> just <code>:w</code> and the plugins will automatically install.</p><h2 id="plugin-quickstart" tabindex="-1"><a class="header-anchor" href="#plugin-quickstart" aria-hidden="true">#</a> Plugin Quickstart</h2><p>Just paste any of these snippets into <code>lvim.plugins</code>, save (<code>:w</code>), and it will autoinstall.</p><h2 id="navigation" tabindex="-1"><a class="header-anchor" href="#navigation" aria-hidden="true">#</a> Navigation</h2><h3 id="hop" tabindex="-1"><a class="header-anchor" href="#hop" aria-hidden="true">#</a> hop</h3><h3 id="rnvimr" tabindex="-1"><a class="header-anchor" href="#rnvimr" aria-hidden="true">#</a> rnvimr</h3><h3 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> snap</h3><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h2><h3 id="gitlinker-nvim" tabindex="-1"><a class="header-anchor" href="#gitlinker-nvim" aria-hidden="true">#</a> gitlinker.nvim</h3><h3 id="octo-nvim" tabindex="-1"><a class="header-anchor" href="#octo-nvim" aria-hidden="true">#</a> octo.nvim</h3><h3 id="vim-gist" tabindex="-1"><a class="header-anchor" href="#vim-gist" aria-hidden="true">#</a> vim-gist</h3><h3 id="git-blame-nvim" tabindex="-1"><a class="header-anchor" href="#git-blame-nvim" aria-hidden="true">#</a> git-blame.nvim</h3><h3 id="diffview-nvim" tabindex="-1"><a class="header-anchor" href="#diffview-nvim" aria-hidden="true">#</a> diffview.nvim</h3><h3 id="vim-fugitive" tabindex="-1"><a class="header-anchor" href="#vim-fugitive" aria-hidden="true">#</a> vim-fugitive</h3><h2 id="treesitter" tabindex="-1"><a class="header-anchor" href="#treesitter" aria-hidden="true">#</a> Treesitter</h2><h3 id="playground" tabindex="-1"><a class="header-anchor" href="#playground" aria-hidden="true">#</a> playground</h3><h3 id="nvim-ts-autotag" tabindex="-1"><a class="header-anchor" href="#nvim-ts-autotag" aria-hidden="true">#</a> nvim-ts-autotag</h3><h3 id="nvim-ts-rainbow" tabindex="-1"><a class="header-anchor" href="#nvim-ts-rainbow" aria-hidden="true">#</a> nvim-ts-rainbow</h3><h3 id="nvim-ts-context-commentstring" tabindex="-1"><a class="header-anchor" href="#nvim-ts-context-commentstring" aria-hidden="true">#</a> nvim-ts-context-commentstring</h3><h2 id="telescope-extensions" tabindex="-1"><a class="header-anchor" href="#telescope-extensions" aria-hidden="true">#</a> Telescope Extensions</h2><h3 id="telescope-fzy-native-nvim" tabindex="-1"><a class="header-anchor" href="#telescope-fzy-native-nvim" aria-hidden="true">#</a> telescope-fzy-native.nvim</h3><h2 id="colorschemes" tabindex="-1"><a class="header-anchor" href="#colorschemes" aria-hidden="true">#</a> Colorschemes</h2><h3 id="lush-nvim" tabindex="-1"><a class="header-anchor" href="#lush-nvim" aria-hidden="true">#</a> lush.nvim</h3><h2 id="lsp-enhancement" tabindex="-1"><a class="header-anchor" href="#lsp-enhancement" aria-hidden="true">#</a> LSP enhancement</h2><h3 id="lsp-signature-nvim" tabindex="-1"><a class="header-anchor" href="#lsp-signature-nvim" aria-hidden="true">#</a> lsp_signature.nvim</h3><h3 id="vim-bundler" tabindex="-1"><a class="header-anchor" href="#vim-bundler" aria-hidden="true">#</a> vim-bundler</h3><h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h2><h3 id="indent-blankline-nvim" tabindex="-1"><a class="header-anchor" href="#indent-blankline-nvim" aria-hidden="true">#</a> indent-blankline.nvim</h3><h3 id="nvim-colorizer" tabindex="-1"><a class="header-anchor" href="#nvim-colorizer" aria-hidden="true">#</a> nvim-colorizer</h3><h3 id="dial-nvim" tabindex="-1"><a class="header-anchor" href="#dial-nvim" aria-hidden="true">#</a> dial.nvim</h3><h3 id="vim-matchup" tabindex="-1"><a class="header-anchor" href="#vim-matchup" aria-hidden="true">#</a> vim-matchup</h3><h3 id="numb-nvim" tabindex="-1"><a class="header-anchor" href="#numb-nvim" aria-hidden="true">#</a> numb.nvim</h3><h3 id="nvim-spectre" tabindex="-1"><a class="header-anchor" href="#nvim-spectre" aria-hidden="true">#</a> nvim-spectre</h3><h3 id="nvim-bqf" tabindex="-1"><a class="header-anchor" href="#nvim-bqf" aria-hidden="true">#</a> nvim-bqf</h3><h3 id="markdown-preview-nvim" tabindex="-1"><a class="header-anchor" href="#markdown-preview-nvim" aria-hidden="true">#</a> markdown-preview.nvim</h3><h3 id="glow-nvim" tabindex="-1"><a class="header-anchor" href="#glow-nvim" aria-hidden="true">#</a> glow.nvim</h3><h3 id="neoscroll-nvim" tabindex="-1"><a class="header-anchor" href="#neoscroll-nvim" aria-hidden="true">#</a> neoscroll.nvim</h3><h3 id="lsp-rooter" tabindex="-1"><a class="header-anchor" href="#lsp-rooter" aria-hidden="true">#</a> lsp-rooter</h3><h3 id="todo-comments-nvim" tabindex="-1"><a class="header-anchor" href="#todo-comments-nvim" aria-hidden="true">#</a> todo-comments.nvim</h3><h3 id="symbols-outline-nvim" tabindex="-1"><a class="header-anchor" href="#symbols-outline-nvim" aria-hidden="true">#</a> symbols-outline.nvim</h3><h3 id="trouble-nvim" tabindex="-1"><a class="header-anchor" href="#trouble-nvim" aria-hidden="true">#</a> trouble.nvim</h3><h3 id="vim-sanegx" tabindex="-1"><a class="header-anchor" href="#vim-sanegx" aria-hidden="true">#</a> vim-sanegx</h3><h3 id="vim-cursorword" tabindex="-1"><a class="header-anchor" href="#vim-cursorword" aria-hidden="true">#</a> vim-cursorword</h3><h3 id="vim-surround" tabindex="-1"><a class="header-anchor" href="#vim-surround" aria-hidden="true">#</a> vim-surround</h3><h3 id="vim-repeat" tabindex="-1"><a class="header-anchor" href="#vim-repeat" aria-hidden="true">#</a> vim-repeat</h3><h3 id="codi-vim" tabindex="-1"><a class="header-anchor" href="#codi-vim" aria-hidden="true">#</a> codi.vim</h3><h3 id="compe-tabnine" tabindex="-1"><a class="header-anchor" href="#compe-tabnine" aria-hidden="true">#</a> compe-tabnine</h3>',52),t={render:function(e,n){return i}}}}]);