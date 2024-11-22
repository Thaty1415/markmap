const e={title:"markmap-autoloader"},t=`<p><img src="https://img.shields.io/npm/v/markmap-autoloader.svg" alt="NPM">
<img src="https://img.shields.io/npm/l/markmap-autoloader.svg" alt="License">
<img src="https://img.shields.io/npm/dt/markmap-autoloader.svg" alt="Downloads"></p>
<p>Load markmaps automatically in HTML.</p>
<h2 id="usage">Usage</h2>
<p>HTML:</p>
<pre><code class="language-html">&lt;style&gt;
    .markmap {
        position: relative;
    }
    .markmap &gt; svg {
        width: 100%;
        height: 300px;
    }
&lt;/style&gt;

&lt;div class=&quot;markmap&quot;&gt;
    &lt;script type=&quot;text/template&quot;&gt;
        - markmap
          - autoloader
          - transformer
          - view
    &lt;/script&gt;
&lt;/div&gt;
</code></pre>
<p>Note that <code>&lt;script type=&quot;text/template&quot;&gt;</code> is optional. You may need it for two reasons:</p>
<ul>
<li>For the content inside to be invisible before the markmap is rendered.</li>
<li>Prevent the HTML contents from being parsed by the browser. This is critical when you have raw HTML (e.g. <code>&lt;br&gt;</code>) in your Markdown code.</li>
</ul>
<p>Autoload all elements matching <code>.markmap</code>, using latest autoloader version:</p>
<pre><code class="language-html">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-autoloader@latest&quot;&gt;&lt;/script&gt;
</code></pre>
<p>To use a specific version (here: <code>0.14.3</code>) of <code>mark-autoloader</code>:</p>
<pre><code class="language-html">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-autoloader@0.14.3&quot;&gt;&lt;/script&gt;
</code></pre>
<p>Load manually:</p>
<pre><code class="language-html">&lt;script&gt;
    window.markmap = {
        autoLoader: { manual: true },
    };
&lt;/script&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-autoloader&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    // Render in 5s
    setTimeout(() =&gt; {
        markmap.autoLoader.renderAll();
    }, 5000);
&lt;/script&gt;
</code></pre>
<p>Disable built-in plugins:</p>
<pre><code class="language-html">&lt;script&gt;
    window.markmap = {
        autoLoader: {
            transformPlugins: [],
        },
    };
&lt;/script&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-autoloader&quot;&gt;&lt;/script&gt;
</code></pre>
<h2 id="api">API</h2>
<h3 id="options">Options</h3>
<p>If <code>window.markmap.autoLoader</code> is defined before this package is loaded, it will be regarded as autoLoader options.</p>
<ul>
<li><p><code>autoLoader.manual</code> <em>boolean</em> default as <code>false</code></p>
<p>Whether to render markmaps manually. If false, all elements matching <code>.markmap</code> will be rendered once this package loads or DOMContentLoaded is emitted, whichever later.</p>
</li>
<li><p><code>autoLoader.transformPlugins</code> <em>ITransformPlugin[]</em></p>
<p>Override built-in plugins if provided. Set to <code>[]</code> to disable all built-in plugins for auto-loader.</p>
</li>
<li><p><code>autoLoader.onReady</code> <em>function</em></p>
<p>Callback when markmap-lib/markmap-view and their dependencies are loaded. We can tweak global options in this callback.</p>
</li>
</ul>
<h3 id="markmapautoloaderrenderall">markmap.autoLoader.renderAll()</h3>
<p>Render all elements matching <code>.markmap</code>.</p>
<h3 id="markmapautoloaderrenderallunderel">markmap.autoLoader.renderAllUnder(el)</h3>
<p>Render all elements matching <code>.markmap</code> under container <code>el</code>.</p>
<h3 id="markmapautoloaderrenderel">markmap.autoLoader.render(el)</h3>
<p>Render markmap in <code>el</code>, which is supposed to have the class name <code>markmap</code>.</p>
`;export{e as frontmatter,t as html};
