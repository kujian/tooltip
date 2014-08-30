tooltip
=======

jQuery tooltip plugin

- author      : Jack Cai(蔡宝坚）
- plugin url  : http://caibaojian.com/tooltip
- plugin demo : http://caibaojian.com/demo/tooltip
- license     : MIT

## How it work

html

<pre><code>&lt;a href="http://caibaojian.com" title="about frontend website"&gt;caibaojian&lt;/a&gt;</code></pre>

jQuery
<pre><code>&lt;script&gt;$(function(){ $("a").tooltip();}); &lt;/script&gt;</code></pre>

config

| config name   | default value | config description                                |
|---------------|---------------|---------------------------------------------------|
| positionPro   | "position"    | position property                                 |
| positionValue | null          | position value ,you can set it as 'top' or 'left' |
| positionX     | 10            | position  X distance                              |
| positionY     | 20            | position Y distance                               |
| tipEle        | "tooltip"     | set the tooltip ID                                |
| tipText       | 'title'       | set the tooltip property                          |
| tipFlag       | true          | set it see or not                                 |


