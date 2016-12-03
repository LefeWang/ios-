<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title>Sina Visitor System</title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1504">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 25.0px; font: 18.0px 'PingFang SC'; color: #000000; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 25.0px; font: 18.0px 'PingFang SC'; color: #000000; -webkit-text-stroke: #000000; min-height: 25.0px}
    span.s1 {font-kerning: none}
    span.Apple-tab-span {white-space:pre}
  </style>
</head>
<body>
<p class="p1"><span class="s1">/*!</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* jQuery JavaScript Library v1.4.1</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* http://jquery.com/</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* Copyright 2010, John Resig</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* Includes Sizzle.js</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* http://sizzlejs.com/</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* Copyright 2010, The Dojo Foundation</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* Permission is hereby granted, free of charge, to any person obtaining</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* a copy of this software and associated documentation files (the</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* "Software"), to deal in the Software without restriction, including</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* without limitation the rights to use, copy, modify, merge, publish,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* distribute, sublicense, and/or sell copies of the Software, and to</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* permit persons to whom the Software is furnished to do so, subject to</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* the following conditions:</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* The above copyright notice and this permission notice shall be</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* included in all copies or substantial portions of the Software.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* Date: Mon Jan 25 19:43:33 2010 -0500</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*/</span></p>
<p class="p1"><span class="s1">(function( window, undefined ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Define a local copy of jQuery</span></p>
<p class="p1"><span class="s1">var jQuery = function( selector, context ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// The jQuery object is actually just the init constructor 'enhanced'</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return new jQuery.fn.init( selector, context );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Map over jQuery in case of overwrite</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>_jQuery = window.jQuery,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Map over the $ in case of overwrite</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>_$ = window.$,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Use the correct document accordingly with window argument (sandbox)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>document = window.document,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// A central reference to the root jQuery(document)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rootjQuery,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// A simple way to check for HTML strings or ID strings</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// (both of which we optimize for)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>quickExpr = /^[^&lt;]*(&lt;[\w\W]+&gt;)[^&gt;]*$|^#([\w-]+)$/,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Is it a simple selector</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>isSimple = /^.[^:#\[\.,]*$/,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Check if a string has a non-whitespace character in it</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rnotwhite = /\S/,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Used for trimming whitespace</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rtrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Match a standalone tag</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rsingleTag = /^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;)?$/,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Keep a UserAgent string for use with jQuery.browser</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>userAgent = navigator.userAgent,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// For matching the engine and version of the browser</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>browserMatch,</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Has the ready events already been bound?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>readyBound = false,</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// The functions to execute on DOM ready</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>readyList = [],</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// The ready event handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>DOMContentLoaded,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Save a reference to some core methods</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>toString = Object.prototype.toString,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>hasOwnProperty = Object.prototype.hasOwnProperty,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>push = Array.prototype.push,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>slice = Array.prototype.slice,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>indexOf = Array.prototype.indexOf;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn = jQuery.prototype = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>init: function( selector, context ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var match, elem, ret, doc;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle $(""), $(null), or $(undefined)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle $(DOMElement)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( selector.nodeType ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.context = this[0] = selector;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.length = 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle HTML strings</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof selector === "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Are we dealing with HTML string or an ID?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = quickExpr.exec( selector );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Verify a match, and that no context was specified for #id</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match &amp;&amp; (match[1] || !context) ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// HANDLE: $(html) -&gt; $(array)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match[1] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>doc = (context ? context.ownerDocument || context : document);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If a single string is passed in and it's a single tag</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// just do a createElement and skip the rest</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = rsingleTag.exec( selector );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ret ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isPlainObject( context ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector = [ document.createElement( ret[1] ) ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.fn.attr.call( selector, context, true );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector = [ doc.createElement( ret[1] ) ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = buildFragment( [ match[1] ], [ doc ] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector = (ret.cacheable ? ret.fragment.cloneNode(true) : ret.fragment).childNodes;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// HANDLE: $("#id")</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = document.getElementById( match[2] );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle the case where IE and Opera return items</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// by name instead of ID</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.id !== match[2] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return rootjQuery.find( selector );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Otherwise, we inject the element directly into the jQuery object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.length = 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this[0] = elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.context = document;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.selector = selector;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// HANDLE: $("TAG")</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( !context &amp;&amp; /^\w+$/.test( selector ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.selector = selector;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.context = document;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector = document.getElementsByTagName( selector );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// HANDLE: $(expr, $(...))</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( !context || context.jquery ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return (context || rootjQuery).find( selector );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// HANDLE: $(expr, context)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// (which is just equivalent to: $(context).find(expr)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery( context ).find( selector );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// HANDLE: $(function)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Shortcut for document ready</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( jQuery.isFunction( selector ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return rootjQuery.ready( selector );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (selector.selector !== undefined) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.selector = selector.selector;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.context = selector.context;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.isArray( selector ) ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.setArray( selector ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.makeArray( selector, this );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Start with an empty selector</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>selector: "",</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// The current version of jQuery being used</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jquery: "1.4.1",</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// The default length of a jQuery object is 0</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>length: 0,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// The number of elements contained in the matched element set</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>size: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.length;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>toArray: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return slice.call( this, 0 );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Get the Nth element in the matched element set OR</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Get the whole matched element set as a clean array</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>get: function( num ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return num == null ?</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Return a 'clean' array</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.toArray() :</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Return just the object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>( num &lt; 0 ? this.slice(num)[ 0 ] : this[ num ] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Take an array of elements and push it onto the stack</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// (returning the new matched element set)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>pushStack: function( elems, name, selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Build a new jQuery matched element set</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = jQuery( elems || null );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add the old object onto the stack (as a reference)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.prevObject = this;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.context = this.context;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name === "find" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.selector = this.selector + (this.selector ? " " : "") + selector;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( name ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.selector = this.selector + "." + name + "(" + selector + ")";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Return the newly-formed element set</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Force the current matched set of elements to become</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// the specified array of elements (destroying the stack in the process)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// You should use pushStack() in order to do this, but maintain the stack</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>setArray: function( elems ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Resetting the length to 0, then using the native Array push</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// is a super-fast way to populate an object with array-like properties</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.length = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>push.apply( this, elems );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Execute a callback for every element in the matched set.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// (You can seed the arguments with an array of args, but this is</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// only used internally.)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>each: function( callback, args ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.each( this, callback, args );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>ready: function( fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Attach the listeners</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.bindReady();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If the DOM is already ready</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isReady ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Execute the function immediately</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn.call( document, jQuery );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Otherwise, remember the function for later</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( readyList ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add the function to the wait list</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>readyList.push( fn );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>eq: function( i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return i === -1 ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.slice( i ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.slice( i, +i + 1 );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>first: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.eq( 0 );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>last: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.eq( -1 );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>slice: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.pushStack( slice.apply( this, arguments ),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"slice", slice.call(arguments).join(",") );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>map: function( callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.pushStack( jQuery.map(this, function( elem, i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return callback.call( elem, i, elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>end: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.prevObject || jQuery(null);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// For internal use only.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Behaves like an Array's method, not like a jQuery method.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>push: push,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>sort: [].sort,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>splice: [].splice</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Give the init function the jQuery prototype for later instantiation</span></p>
<p class="p1"><span class="s1">jQuery.fn.init.prototype = jQuery.fn;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend = jQuery.fn.extend = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// copy reference to target object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Handle a deep copy situation</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( typeof target === "boolean" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>deep = target;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>target = arguments[1] || {};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// skip the boolean and the target</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>i = 2;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Handle case when target is a string or something (possible in deep copy)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( typeof target !== "object" &amp;&amp; !jQuery.isFunction(target) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>target = {};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// extend jQuery itself if only one argument is passed</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( length === i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>target = this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>--i;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>for ( ; i &lt; length; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Only deal with non-null/undefined values</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (options = arguments[ i ]) != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Extend the base object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( name in options ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>src = target[ name ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>copy = options[ name ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Prevent never-ending loop</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( target === copy ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>continue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Recurse if we're merging object literal values or arrays</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( deep &amp;&amp; copy &amp;&amp; ( jQuery.isPlainObject(copy) || jQuery.isArray(copy) ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var clone = src &amp;&amp; ( jQuery.isPlainObject(src) || jQuery.isArray(src) ) ? src</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>: jQuery.isArray(copy) ? [] : {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Never move original objects, clone them</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>target[ name ] = jQuery.extend( deep, clone, copy );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Don't bring in undefined values</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( copy !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>target[ name ] = copy;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Return the modified object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return target;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>noConflict: function( deep ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.$ = _$;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( deep ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.jQuery = _jQuery;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Is the DOM ready to be used? Set to true once it occurs.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>isReady: false,</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Handle when the DOM is ready</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>ready: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that the DOM is not already loaded</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.isReady ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !document.body ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return setTimeout( jQuery.ready, 13 );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remember that the DOM is ready</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.isReady = true;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If there are functions bound, to execute</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( readyList ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Execute all of them</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var fn, i = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( (fn = readyList[ i++ ]) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn.call( document, jQuery );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Reset the list of functions</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>readyList = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Trigger any bound ready events</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.fn.triggerHandler ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( document ).triggerHandler( "ready" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>bindReady: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( readyBound ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>readyBound = true;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Catch cases where $(document).ready() is called after the</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// browser event has already occurred.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( document.readyState === "complete" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.ready();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Mozilla, Opera and webkit nightlies currently support this event</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( document.addEventListener ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Use the handy event callback</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// A fallback to window.onload, that will always work</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.addEventListener( "load", jQuery.ready, false );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If IE event model is used</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( document.attachEvent ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// ensure firing before onload,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// maybe late but safe also for iframes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>document.attachEvent("onreadystatechange", DOMContentLoaded);</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// A fallback to window.onload, that will always work</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.attachEvent( "onload", jQuery.ready );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If IE and not a frame</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// continually check to see if the document is ready</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var toplevel = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>toplevel = window.frameElement == null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) {}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( document.documentElement.doScroll &amp;&amp; toplevel ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>doScrollCheck();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// See test/unit/core.js for details concerning isFunction.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Since version 1.3, DOM methods and functions like alert</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// aren't supported. They return false on IE (#2968).</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>isFunction: function( obj ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return toString.call(obj) === "[object Function]";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>isArray: function( obj ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return toString.call(obj) === "[object Array]";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>isPlainObject: function( obj ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Must be an Object.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Because of IE, we also have to check the presence of the constructor property.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that DOM nodes and window objects don't pass through, as well</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Not own constructor property must be Object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( obj.constructor</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&amp;&amp; !hasOwnProperty.call(obj, "constructor")</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>&amp;&amp; !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Own properties are enumerated firstly, so to speed up,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// if last one is own, then all properties are own.</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var key;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( key in obj ) {}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return key === undefined || hasOwnProperty.call( obj, key );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>isEmptyObject: function( obj ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var name in obj ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>error: function( msg ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>throw msg;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>parseJSON: function( data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof data !== "string" || !data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure the incoming data is actual JSON</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Logic borrowed from http://json.org/json2.js</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( /^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>.replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Try to use the native JSON parser first</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return window.JSON &amp;&amp; window.JSON.parse ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window.JSON.parse( data ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(new Function("return " + data))();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.error( "Invalid JSON: " + data );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>noop: function() {},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Evalulates a script in a global context</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>globalEval: function( data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( data &amp;&amp; rnotwhite.test(data) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Inspired by code by Andrea Giammarchi</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var head = document.getElementsByTagName("head")[0] || document.documentElement,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script = document.createElement("script");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script.type = "text/javascript";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.support.scriptEval ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script.appendChild( document.createTextNode( data ) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script.text = data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Use insertBefore instead of appendChild to circumvent an IE6 bug.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// This arises when a base node is used (#2709).</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>head.insertBefore( script, head.firstChild );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>head.removeChild( script );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>nodeName: function( elem, name ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.nodeName &amp;&amp; elem.nodeName.toUpperCase() === name.toUpperCase();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// args is for internal usage only</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>each: function( object, callback, args ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var name, i = 0,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>length = object.length,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isObj = length === undefined || jQuery.isFunction(object);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( args ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isObj ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( name in object ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( callback.apply( object[ name ], args ) === false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( ; i &lt; length; ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( callback.apply( object[ i++ ], args ) === false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// A special, fast, case for the most common use of each</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isObj ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( name in object ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( callback.call( object[ name ], name, object[ name ] ) === false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var value = object[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>i &lt; length &amp;&amp; callback.call( value, i, value ) !== false; value = object[++i] ) {}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return object;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>trim: function( text ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return (text || "").replace( rtrim, "" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// results is for internal usage only</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>makeArray: function( array, results ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = results || [];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( array != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// The window, strings (and functions) also have 'length'</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// The extra typeof function check is to prevent crashes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// in Safari 2 (See: #3039)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( array.length == null || typeof array === "string" || jQuery.isFunction(array) || (typeof array !== "function" &amp;&amp; array.setInterval) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>push.call( ret, array );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.merge( ret, array );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>inArray: function( elem, array ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( array.indexOf ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return array.indexOf( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, length = array.length; i &lt; length; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( array[ i ] === elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return i;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return -1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>merge: function( first, second ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var i = first.length, j = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof second.length === "number" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var l = second.length; j &lt; l; j++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>first[ i++ ] = second[ j ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( second[j] !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>first[ i++ ] = second[ j++ ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>first.length = i;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return first;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>grep: function( elems, callback, inv ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = [];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Go through the array, only saving the items</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// that pass the validator function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, length = elems.length; i &lt; length; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !inv !== !callback( elems[ i ], i ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.push( elems[ i ] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// arg is for internal usage only</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>map: function( elems, callback, arg ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = [], value;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Go through the array, translating each of the items to their</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// new value (or values).</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, length = elems.length; i &lt; length; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value = callback( elems[ i ], i, arg );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( value != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret[ ret.length ] = value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret.concat.apply( [], ret );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// A global GUID counter for objects</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>guid: 1,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>proxy: function( fn, proxy, thisObject ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( arguments.length === 2 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof proxy === "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>thisObject = fn;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn = thisObject[ proxy ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>proxy = undefined;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( proxy &amp;&amp; !jQuery.isFunction( proxy ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>thisObject = proxy;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>proxy = undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !proxy &amp;&amp; fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>proxy = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return fn.apply( thisObject || this, arguments );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set the guid of unique handler to the same of original handler, so it can be removed</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// So proxy can be declared as an argument</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return proxy;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Use of jQuery.browser is frowned upon.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// More details: http://docs.jquery.com/Utilities/jQuery.browser</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>uaMatch: function( ua ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ua = ua.toLowerCase();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var match = /(webkit)[ \/]([\w.]+)/.exec( ua ) ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>/(opera)(?:.*version)?[ \/]([\w.]+)/.exec( ua ) ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>/(msie) ([\w.]+)/.exec( ua ) ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>!/compatible/.test( ua ) &amp;&amp; /(mozilla)(?:.*? rv:([\w.]+))?/.exec( ua ) ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-converted-space">  <span class="Apple-tab-span">	</span></span>[];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return { browser: match[1] || "", version: match[2] || "0" };</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>browser: {}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">browserMatch = jQuery.uaMatch( userAgent );</span></p>
<p class="p1"><span class="s1">if ( browserMatch.browser ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.browser[ browserMatch.browser ] = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.browser.version = browserMatch.version;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Deprecated, use jQuery.browser.webkit instead</span></p>
<p class="p1"><span class="s1">if ( jQuery.browser.webkit ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.browser.safari = true;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">if ( indexOf ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.inArray = function( elem, array ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return indexOf.call( array, elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// All jQuery objects should point back to these</span></p>
<p class="p1"><span class="s1">rootjQuery = jQuery(document);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Cleanup functions for the document ready method</span></p>
<p class="p1"><span class="s1">if ( document.addEventListener ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>DOMContentLoaded = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.ready();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">} else if ( document.attachEvent ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>DOMContentLoaded = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( document.readyState === "complete" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>document.detachEvent( "onreadystatechange", DOMContentLoaded );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.ready();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// The DOM ready check for Internet Explorer</span></p>
<p class="p1"><span class="s1">function doScrollCheck() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( jQuery.isReady ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If IE is used, use the trick by Diego Perini</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// http://javascript.nwbox.com/IEContentLoaded/</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>document.documentElement.doScroll("left");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} catch( error ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>setTimeout( doScrollCheck, 1 );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// and execute any waiting functions</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.ready();</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function evalScript( i, elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( elem.src ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.ajax({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>url: elem.src,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>async: false,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>dataType: "script"</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.globalEval( elem.text || elem.textContent || elem.innerHTML || "" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( elem.parentNode ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.parentNode.removeChild( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Mutifunctional method to get and set values to a collection</span></p>
<p class="p1"><span class="s1">// The value/s can be optionally by executed if its a function</span></p>
<p class="p1"><span class="s1">function access( elems, key, value, exec, fn, pass ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var length = elems.length;</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Setting many attributes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( typeof key === "object" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var k in key ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>access( elems, k, key[k], exec, fn, value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elems;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Setting one attribute</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( value !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Optionally, function values get executed if exec is true</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>exec = !pass &amp;&amp; exec &amp;&amp; jQuery.isFunction(value);</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0; i &lt; length; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elems;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Getting an attribute</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return length ? fn( elems[0], key ) : null;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function now() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return (new Date).getTime();</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">(function() {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.support = {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var root = document.documentElement,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script = document.createElement("script"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div = document.createElement("div"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>id = "script" + now();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div.style.display = "none";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div.innerHTML = " <span class="Apple-converted-space">  </span>&lt;link/&gt;&lt;table&gt;&lt;/table&gt;&lt;a href='/a' style='color:red;float:left;opacity:.55;'&gt;a&lt;/a&gt;&lt;input type='checkbox'/&gt;";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var all = div.getElementsByTagName("*"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>a = div.getElementsByTagName("a")[0];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Can't get basic test support</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( !all || !all.length || !a ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.support = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// IE strips leading whitespace when .innerHTML is used</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>leadingWhitespace: div.firstChild.nodeType === 3,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that tbody elements aren't automatically inserted</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// IE will insert them into empty tables</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>tbody: !div.getElementsByTagName("tbody").length,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that link elements get serialized correctly by innerHTML</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// This requires a wrapper element in IE</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>htmlSerialize: !!div.getElementsByTagName("link").length,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get the style information from getAttribute</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// (IE uses .cssText insted)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>style: /red/.test( a.getAttribute("style") ),</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that URLs aren't manipulated</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// (IE normalizes it by default)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hrefNormalized: a.getAttribute("href") === "/a",</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that element opacity exists</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// (IE uses filter instead)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Use a regex to work around a WebKit issue. See #5145</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>opacity: /^0.55$/.test( a.style.opacity ),</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Verify style float existence</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// (IE uses styleFloat instead of cssFloat)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cssFloat: !!a.style.cssFloat,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that if no value is specified for a checkbox</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// that it defaults to "on".</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// (WebKit defaults to "" instead)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkOn: div.getElementsByTagName("input")[0].value === "on",</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that a selected-by-default option has a working selected property.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>optSelected: document.createElement("select").appendChild( document.createElement("option") ).selected,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Will be defined later</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkClone: false,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>scriptEval: false,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>noCloneEvent: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>boxModel: null</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>script.type = "text/javascript";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script.appendChild( document.createTextNode( "window." + id + "=1;" ) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} catch(e) {}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>root.insertBefore( script, root.firstChild );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Make sure that the execution of code works by injecting a script</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// tag with appendChild/createTextNode</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// (IE doesn't support this, fails, and uses .text instead)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( window[ id ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.support.scriptEval = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete window[ id ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>root.removeChild( script );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( div.attachEvent &amp;&amp; div.fireEvent ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.attachEvent("onclick", function click() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Cloning a node shouldn't copy over any</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// bound event handlers (IE does this)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.support.noCloneEvent = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.detachEvent("onclick", click);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.cloneNode(true).fireEvent("onclick");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div = document.createElement("div");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div.innerHTML = "&lt;input type='radio' name='radiotest' checked='checked'/&gt;";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var fragment = document.createDocumentFragment();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>fragment.appendChild( div.firstChild );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// WebKit doesn't clone checked state correctly in fragments</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Figure out if the W3C box model works as expected</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// document.body must exist before we can do this</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var div = document.createElement("div");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.style.width = div.style.paddingLeft = "1px";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>document.body.appendChild( div );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.boxModel = jQuery.support.boxModel = div.offsetWidth === 2;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>document.body.removeChild( div ).style.display = 'none';</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Technique from Juriy Zaytsev</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// http://thinkweb2.com/projects/prototype/detecting-event-support-without-browser-sniffing/</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var eventSupported = function( eventName ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var el = document.createElement("div");<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>eventName = "on" + eventName;<span class="Apple-converted-space"> </span></span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var isSupported = (eventName in el);<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !isSupported ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>el.setAttribute(eventName, "return;");<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isSupported = typeof el[eventName] === "function";<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>el = null;<span class="Apple-converted-space"> </span></span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return isSupported;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.support.submitBubbles = eventSupported("submit");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.support.changeBubbles = eventSupported("change");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// release memory in IE</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>root = script = div = all = a = null;</span></p>
<p class="p1"><span class="s1">})();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.props = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>"for": "htmlFor",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>"class": "className",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>readonly: "readOnly",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>maxlength: "maxLength",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>cellspacing: "cellSpacing",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rowspan: "rowSpan",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>colspan: "colSpan",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>tabindex: "tabIndex",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>usemap: "useMap",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>frameborder: "frameBorder"</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p1"><span class="s1">var expando = "jQuery" + now(), uuid = 0, windowData = {};</span></p>
<p class="p1"><span class="s1">var emptyObject = {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>cache: {},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>expando:expando,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// The following elements throw uncatchable exceptions if you</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// attempt to add expando properties to them.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>noData: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"embed": true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"object": true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"applet": true</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>data: function( elem, name, data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeName &amp;&amp; jQuery.noData[elem.nodeName.toLowerCase()] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = elem == window ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>windowData :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var id = elem[ expando ], cache = jQuery.cache, thisCache;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle the case where there's no name immediately</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !name &amp;&amp; !id ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Compute a unique ID for the element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !id ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>id = ++uuid;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Avoid generating a new cache unless none exists and we</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// want to manipulate it.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof name === "object" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem[ expando ] = id;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>thisCache = cache[ id ] = jQuery.extend(true, {}, name);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( cache[ id ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>thisCache = cache[ id ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( typeof data === "undefined" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>thisCache = emptyObject;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>thisCache = cache[ id ] = {};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Prevent overriding the named cache with undefined values</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( data !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem[ expando ] = id;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>thisCache[ name ] = data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return typeof name === "string" ? thisCache[ name ] : thisCache;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>removeData: function( elem, name ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeName &amp;&amp; jQuery.noData[elem.nodeName.toLowerCase()] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = elem == window ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>windowData :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var id = elem[ expando ], cache = jQuery.cache, thisCache = cache[ id ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If we want to remove a specific section of the element's data</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( thisCache ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remove the section of cache data</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete thisCache[ name ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If we've removed all the data, remove the element's cache</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isEmptyObject(thisCache) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.removeData( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Otherwise, we want to remove all of the element's data</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Clean up the element expando</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete elem[ expando ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch( e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// IE has trouble directly removing the expando</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// but it's ok with using removeAttribute</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.removeAttribute ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.removeAttribute( expando );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Completely remove the data cache</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete cache[ id ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>data: function( key, value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof key === "undefined" &amp;&amp; this.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.data( this[0] );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( typeof key === "object" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.data( this, key );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var parts = key.split(".");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parts[1] = parts[1] ? "." + parts[1] : "";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( value === undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( data === undefined &amp;&amp; this.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = jQuery.data( this[0], key );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return data === undefined &amp;&amp; parts[1] ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.data( parts[0] ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.trigger("setData" + parts[1] + "!", [parts[0], value]).each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.data( this, key, value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>removeData: function( key ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.removeData( this, key );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">jQuery.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>queue: function( elem, type, data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = (type || "fx") + "queue";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var q = jQuery.data( elem, type );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Speed up dequeue by getting out quickly if this is just a lookup</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return q || [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !q || jQuery.isArray(data) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>q = jQuery.data( elem, type, jQuery.makeArray(data) );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>q.push( data );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return q;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>dequeue: function( elem, type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = type || "fx";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var queue = jQuery.queue( elem, type ), fn = queue.shift();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If the fx queue is dequeued, always remove the progress sentinel</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( fn === "inprogress" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn = queue.shift();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add a progress sentinel to prevent the fx queue from being</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// automatically dequeued</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( type === "fx" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>queue.unshift("inprogress");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn.call(elem, function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.dequeue(elem, type);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>queue: function( type, data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof type !== "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = "fx";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( data === undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.queue( this[0], type );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function( i, elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var queue = jQuery.queue( this, type, data );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( type === "fx" &amp;&amp; queue[0] !== "inprogress" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.dequeue( this, type );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>dequeue: function( type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.dequeue( this, type );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Based off of the plugin by Clint Helfers, with permission.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// http://blindsignals.com/index.php/2009/07/jquery-delay/</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>delay: function( time, type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = type || "fx";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.queue( type, function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>setTimeout(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.dequeue( elem, type );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}, time );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>clearQueue: function( type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.queue( type || "fx", [] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">var rclass = /[\n\t]/g,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rspace = /\s+/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rreturn = /\r/g,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rspecialurl = /href|src|style/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rtype = /(button|input)/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rfocusable = /(button|input|object|select|textarea)/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rclickable = /^(a|area)$/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rradiocheck = /radio|checkbox/;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>attr: function( name, value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return access( this, name, value, true, jQuery.attr );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>removeAttr: function( name, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.attr( this, name, "" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.removeAttribute( name );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>addClass: function( value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction(value) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(i) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery(this);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.addClass( value.call(this, i, self.attr("class")) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( value &amp;&amp; typeof value === "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var classNames = (value || "").split( rspace );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = this.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this[i];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem.className ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.className = value;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var className = " " + elem.className + " ";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var c = 0, cl = classNames.length; c &lt; cl; c++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( className.indexOf( " " + classNames[c] + " " ) &lt; 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.className += " " + classNames[c];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>removeClass: function( value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction(value) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(i) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery(this);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.removeClass( value.call(this, i, self.attr("class")) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (value &amp;&amp; typeof value === "string") || value === undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var classNames = (value || "").split(rspace);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = this.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this[i];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeType === 1 &amp;&amp; elem.className ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var className = (" " + elem.className + " ").replace(rclass, " ");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var c = 0, cl = classNames.length; c &lt; cl; c++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>className = className.replace(" " + classNames[c] + " ", " ");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.className = className.substring(1, className.length - 1);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.className = "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>toggleClass: function( value, stateVal ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var type = typeof value, isBool = typeof stateVal === "boolean";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( value ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(i) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery(this);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.toggleClass( value.call(this, i, self.attr("class"), stateVal), stateVal );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( type === "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// toggle individual class names</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var className, i = 0, self = jQuery(this),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state = stateVal,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>classNames = value.split( rspace );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( (className = classNames[ i++ ]) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// check each className given, space seperated list</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>state = isBool ? state : !self.hasClass( className );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self[ state ? "addClass" : "removeClass" ]( className );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( type === "undefined" || type === "boolean" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.className ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// store className if set</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.data( this, "__className__", this.className );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// toggle whole className</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.className = this.className || value === false ? "" : jQuery.data( this, "__className__" ) || "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>hasClass: function( selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var className = " " + selector + " ";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = this.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) &gt; -1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>val: function( value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( value === undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this[0];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.nodeName( elem, "option" ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return (elem.attributes.value || {}).specified ? elem.value : elem.text;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We need to handle select boxes special</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.nodeName( elem, "select" ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var index = elem.selectedIndex,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>values = [],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>options = elem.options,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>one = elem.type === "select-one";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Nothing was selected</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( index &lt; 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Loop through all the selected options</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = one ? index : 0, max = one ? index + 1 : options.length; i &lt; max; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var option = options[ i ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( option.selected ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get the specifc value for the option</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value = jQuery(option).val();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We don't need an array for one selects</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( one ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Multi-Selects return an array</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>values.push( value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return values;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( rradiocheck.test( elem.type ) &amp;&amp; !jQuery.support.checkOn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.getAttribute("value") === null ? "on" : elem.value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Everything else, we just grab the value</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return (elem.value || "").replace(rreturn, "");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var isFunction = jQuery.isFunction(value);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(i) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery(this), val = value;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.nodeType !== 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isFunction ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val = value.call(this, i, self.val());</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Typecast each time if the value is a Function and the appended</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// value is therefore different each time.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof val === "number" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val += "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isArray(val) &amp;&amp; rradiocheck.test( this.type ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.checked = jQuery.inArray( self.val(), val ) &gt;= 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( jQuery.nodeName( this, "select" ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var values = jQuery.makeArray(val);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( "option", this ).each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.selected = jQuery.inArray( jQuery(this).val(), values ) &gt;= 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !values.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.selectedIndex = -1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.value = val;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>attrFn: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>css: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>html: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>text: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>width: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>height: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>offset: true</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>attr: function( elem, name, value, pass ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// don't set attributes on text and comment nodes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( pass &amp;&amp; name in jQuery.attrFn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery(elem)[name](value);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var notxml = elem.nodeType !== 1 || !jQuery.isXMLDoc( elem ),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Whether we are setting (or getting)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>set = value !== undefined;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Try to normalize/fix the name</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>name = notxml &amp;&amp; jQuery.props[ name ] || name;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Only do all the following if this is a node (faster for style)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// These attributes require special treatment</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var special = rspecialurl.test( name );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Safari mis-reports the default selected property of an option</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Accessing the parent's selectedIndex property fixes it</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name === "selected" &amp;&amp; !jQuery.support.optSelected ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var parent = elem.parentNode;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( parent ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parent.selectedIndex;</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that it also works with optgroups, see #5701</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( parent.parentNode ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parent.parentNode.selectedIndex;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If applicable, access the attribute via the DOM 0 way</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name in elem &amp;&amp; notxml &amp;&amp; !special ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( set ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We can't allow the type property to be changed (since it causes problems in IE)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name === "type" &amp;&amp; rtype.test( elem.nodeName ) &amp;&amp; elem.parentNode ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.error( "type property can't be changed" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem[ name ] = value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// browsers index elements by id/name on forms, give priority to attributes.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.nodeName( elem, "form" ) &amp;&amp; elem.getAttributeNode(name) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.getAttributeNode( name ).nodeValue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name === "tabIndex" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var attributeNode = elem.getAttributeNode( "tabIndex" );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return attributeNode &amp;&amp; attributeNode.specified ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>attributeNode.value :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) &amp;&amp; elem.href ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>0 :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem[ name ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.support.style &amp;&amp; notxml &amp;&amp; name === "style" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( set ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.style.cssText = "" + value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.style.cssText;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( set ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// convert the value to a string (all browsers do this but IE) see #1070</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.setAttribute( name, "" + value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var attr = !jQuery.support.hrefNormalized &amp;&amp; notxml &amp;&amp; special ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Some attributes require a special call on IE</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.getAttribute( name, 2 ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.getAttribute( name );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Non-existent attributes return null, we normalize to undefined</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return attr === null ? undefined : attr;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// elem is actually elem.style ... set the style</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Using attr for specific style information is now deprecated. Use style insead.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.style( elem, name, value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">var fcleanup = function( nm ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return nm.replace(/[^\w\s\.\|`]/g, function( ch ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "\\" + ch;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">/*</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* A number of helper functions used for managing events.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* Many of the ideas behind this code originated from</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* Dean Edwards' addEvent library.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*/</span></p>
<p class="p1"><span class="s1">jQuery.event = {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Bind an event to an element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Original by Dean Edwards</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>add: function( elem, types, handler, data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeType === 3 || elem.nodeType === 8 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// For whatever reason, IE has trouble passing the window object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// around, causing it to be cloned in the process</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.setInterval &amp;&amp; ( elem !== window &amp;&amp; !elem.frameElement ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = window;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that the function being executed has a unique ID</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !handler.guid ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handler.guid = jQuery.guid++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// if data is passed, bind to handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( data !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Create temporary function pointer to original handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var fn = handler;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Create unique handler function, wrapped around original handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handler = jQuery.proxy( fn );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Store data in unique handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handler.data = data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Init the element's event structure</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var events = jQuery.data( elem, "events" ) || jQuery.data( elem, "events", {} ),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handle = jQuery.data( elem, "handle" ), eventHandle;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !handle ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>eventHandle = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle the second event of a trigger and when</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// an event is called after a page has unloaded</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return typeof jQuery !== "undefined" &amp;&amp; !jQuery.event.triggered ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.handle.apply( eventHandle.elem, arguments ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handle = jQuery.data( elem, "handle", eventHandle );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If no handle is found then we must be trying to bind to one of the</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// banned noData elements</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !handle ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add elem as a property of the handle function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// This is to prevent a memory leak with non-native</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// event in IE.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handle.elem = elem;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle multiple events separated by a space</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// jQuery(...).bind("mouseover mouseout", fn);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>types = types.split( /\s+/ );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var type, i = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( (type = types[ i++ ]) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Namespaced event handlers</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var namespaces = type.split(".");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = namespaces.shift();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( i &gt; 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handler = jQuery.proxy( handler );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( data !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handler.data = data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handler.type = namespaces.slice(0).sort().join(".");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get the current list of functions bound to this event</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var handlers = events[ type ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>special = this.special[ type ] || {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Init the event handler queue</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !handlers ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handlers = events[ type ] = {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Check for a special event handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Only use addEventListener/attachEvent if the special</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// events handler returns false</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !special.setup || special.setup.call( elem, data, namespaces, handler) === false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Bind the global event handler to the element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.addEventListener ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.addEventListener( type, handle, false );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( elem.attachEvent ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.attachEvent( "on" + type, handle );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( special.add ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var modifiedHandler = special.add.call( elem, handler, data, namespaces, handlers );<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( modifiedHandler &amp;&amp; jQuery.isFunction( modifiedHandler ) ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>modifiedHandler.guid = modifiedHandler.guid || handler.guid;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>modifiedHandler.data = modifiedHandler.data || handler.data;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>modifiedHandler.type = modifiedHandler.type || handler.type;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handler = modifiedHandler;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}<span class="Apple-converted-space"> </span></span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add the function to the element's handler list</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handlers[ handler.guid ] = handler;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Keep track of which events have been used, for global triggering</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.global[ type ] = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Nullify elem to prevent memory leaks in IE</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>global: {},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Detach an event or set of events from an element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>remove: function( elem, types, handler ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// don't do events on text and comment nodes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeType === 3 || elem.nodeType === 8 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var events = jQuery.data( elem, "events" ), ret, type, fn;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( events ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Unbind all events for the element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( types === undefined || (typeof types === "string" &amp;&amp; types.charAt(0) === ".") ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( type in events ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.remove( elem, type + (types || "") );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// types is actually an event object here</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( types.type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handler = types.handler;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>types = types.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle multiple events separated by a space</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// jQuery(...).unbind("mouseover mouseout", fn);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>types = types.split(/\s+/);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var i = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( (type = types[ i++ ]) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Namespaced event handlers</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var namespaces = type.split(".");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = namespaces.shift();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var all = !namespaces.length,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cleaned = jQuery.map( namespaces.slice(0).sort(), fcleanup ),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>namespace = new RegExp("(^|\\.)" + cleaned.join("\\.(?:.*\\.)?") + "(\\.|$)"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>special = this.special[ type ] || {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( events[ type ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// remove the given handler for the given type</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( handler ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn = events[ type ][ handler.guid ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete events[ type ][ handler.guid ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// remove all handlers for the given type</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var handle in events[ type ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle the removal of namespaced events</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( all || namespace.test( events[ type ][ handle ].type ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete events[ type ][ handle ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( special.remove ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>special.remove.call( elem, namespaces, fn);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// remove generic event handler if no more handlers exist</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( ret in events[ type ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !ret ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !special.teardown || special.teardown.call( elem, namespaces ) === false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.removeEventListener ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.removeEventListener( type, jQuery.data( elem, "handle" ), false );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( elem.detachEvent ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.detachEvent( "on" + type, jQuery.data( elem, "handle" ) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete events[ type ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remove the expando if it's no longer used</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( ret in events ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !ret ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var handle = jQuery.data( elem, "handle" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( handle ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handle.elem = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.removeData( elem, "events" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.removeData( elem, "handle" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// bubbling is internal</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>trigger: function( event, data, elem /*, bubbling */ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Event object or event type</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var type = event.type || event,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>bubbling = arguments[3];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !bubbling ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event = typeof event === "object" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// jQuery.Event object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event[expando] ? event :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Object literal</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.extend( jQuery.Event(type), event ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Just the event type (string)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.Event(type);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( type.indexOf("!") &gt;= 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.type = type = type.slice(0, -1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.exclusive = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle a global trigger</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Don't bubble custom events when global (to avoid too much overhead)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.stopPropagation();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Only trigger if we've ever bound an event for it</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.global[ type ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.each( jQuery.cache, function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.events &amp;&amp; this.events[type] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.trigger( event, data, this.handle.elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle triggering a single element</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// don't do events on text and comment nodes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Clean up in case it is reused</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.result = undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.target = elem;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Clone the incoming data, if any</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = jQuery.makeArray( data );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data.unshift( event );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.currentTarget = elem;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Trigger the event, it is assumed that "handle" is a function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var handle = jQuery.data( elem, "handle" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( handle ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handle.apply( elem, data );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var parent = elem.parentNode || elem.ownerDocument;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Trigger an inline bound script</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !(elem &amp;&amp; elem.nodeName &amp;&amp; jQuery.noData[elem.nodeName.toLowerCase()]) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem[ "on" + type ] &amp;&amp; elem[ "on" + type ].apply( elem, data ) === false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.result = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// prevent IE from throwing an error for some elements with some event types, see #3533</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch (e) {}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !event.isPropagationStopped() &amp;&amp; parent ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.trigger( event, data, parent, true );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( !event.isDefaultPrevented() ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var target = event.target, old,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isClick = jQuery.nodeName(target, "a") &amp;&amp; type === "click";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !isClick &amp;&amp; !(target &amp;&amp; target.nodeName &amp;&amp; jQuery.noData[target.nodeName.toLowerCase()]) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( target[ type ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that we don't accidentally re-trigger the onFOO events</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>old = target[ "on" + type ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( old ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>target[ "on" + type ] = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.triggered = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>target[ type ]();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// prevent IE from throwing an error for some elements with some event types, see #3533</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch (e) {}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( old ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>target[ "on" + type ] = old;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.triggered = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>handle: function( event ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// returned undefined or false</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var all, handlers;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event = arguments[0] = jQuery.event.fix( event || window.event );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.currentTarget = this;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Namespaced event handlers</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var namespaces = event.type.split(".");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.type = namespaces.shift();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Cache this now, all = true means, any handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>all = !namespaces.length &amp;&amp; !event.exclusive;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var namespace = new RegExp("(^|\\.)" + namespaces.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>handlers = ( jQuery.data(this, "events") || {} )[ event.type ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var j in handlers ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var handler = handlers[ j ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Filter the functions by class</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( all || namespace.test(handler.type) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Pass in a reference to the handler function itself</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// So that we can later remove it</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.handler = handler;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.data = handler.data;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = handler.apply( this, arguments );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ret !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.result = ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ret === false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.stopPropagation();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( event.isImmediatePropagationStopped() ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return event.result;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>fix: function( event ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( event[ expando ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return event;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// store a copy of the original event object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// and "clone" to set read-only properties</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var originalEvent = event;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event = jQuery.Event( originalEvent );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = this.props.length, prop; i; ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>prop = this.props[ --i ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event[ prop ] = originalEvent[ prop ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Fix target property, if necessary</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !event.target ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.target = event.srcElement || document; // Fixes #1925 where srcElement might not be defined either</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// check if target is a textnode (safari)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( event.target.nodeType === 3 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.target = event.target.parentNode;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add relatedTarget, if necessary</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !event.relatedTarget &amp;&amp; event.fromElement ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Calculate pageX/Y if missing and clientX/Y available</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( event.pageX == null &amp;&amp; event.clientX != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var doc = document.documentElement, body = document.body;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.pageX = event.clientX + (doc &amp;&amp; doc.scrollLeft || body &amp;&amp; body.scrollLeft || 0) - (doc &amp;&amp; doc.clientLeft || body &amp;&amp; body.clientLeft || 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.pageY = event.clientY + (doc &amp;&amp; doc.scrollTop<span class="Apple-converted-space">  </span>|| body &amp;&amp; body.scrollTop<span class="Apple-converted-space">  </span>|| 0) - (doc &amp;&amp; doc.clientTop<span class="Apple-converted-space">  </span>|| body &amp;&amp; body.clientTop<span class="Apple-converted-space">  </span>|| 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add which for key events</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !event.which &amp;&amp; ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.which = event.charCode || event.keyCode;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !event.metaKey &amp;&amp; event.ctrlKey ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.metaKey = event.ctrlKey;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add which for click: 1 === left; 2 === middle; 3 === right</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Note: button is not normalized, so don't use it</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !event.which &amp;&amp; event.button !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.which = (event.button &amp; 1 ? 1 : ( event.button &amp; 2 ? 3 : ( event.button &amp; 4 ? 2 : 0 ) ));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return event;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Deprecated, use jQuery.guid instead</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>guid: 1E8,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Deprecated, use jQuery.proxy instead</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>proxy: jQuery.proxy,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>special: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ready: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure the ready event is setup</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>setup: jQuery.bindReady,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>teardown: jQuery.noop</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>live: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>add: function( proxy, data, namespaces, live ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.extend( proxy, data || {} );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>proxy.guid += data.selector + data.live;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data.liveProxy = proxy;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.add( this, data.live, liveHandler, data );<span class="Apple-converted-space"> </span></span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>remove: function( namespaces ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( namespaces.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var remove = 0, name = new RegExp("(^|\\.)" + namespaces[0] + "(\\.|$)");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.each( (jQuery.data(this, "events").live || {}), function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name.test(this.type) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>remove++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( remove &lt; 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.remove( this, namespaces[0], liveHandler );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>special: {}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>beforeunload: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>setup: function( data, namespaces, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We only want to do this special case on windows</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.setInterval ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.onbeforeunload = fn;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>teardown: function( namespaces, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.onbeforeunload === fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.onbeforeunload = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.Event = function( src ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Allow instantiation without the 'new' keyword</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( !this.preventDefault ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return new jQuery.Event( src );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Event object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( src &amp;&amp; src.type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.originalEvent = src;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.type = src.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Event type</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.type = src;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// timeStamp is buggy for some events on Firefox(#3843)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// So we won't rely on the native value</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this.timeStamp = now();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Mark it as fixed</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>this[ expando ] = true;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function returnFalse() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">function returnTrue() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding</span></p>
<p class="p1"><span class="s1">// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html</span></p>
<p class="p1"><span class="s1">jQuery.Event.prototype = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>preventDefault: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.isDefaultPrevented = returnTrue;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var e = this.originalEvent;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// if preventDefault exists run it on the original event</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( e.preventDefault ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// otherwise set the returnValue property of the original event to false (IE)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e.returnValue = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>stopPropagation: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.isPropagationStopped = returnTrue;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var e = this.originalEvent;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// if stopPropagation exists run it on the original event</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( e.stopPropagation ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e.stopPropagation();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// otherwise set the cancelBubble property of the original event to true (IE)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e.cancelBubble = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>stopImmediatePropagation: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.isImmediatePropagationStopped = returnTrue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.stopPropagation();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>isDefaultPrevented: returnFalse,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>isPropagationStopped: returnFalse,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>isImmediatePropagationStopped: returnFalse</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Checks if an event happened on an element within another element</span></p>
<p class="p1"><span class="s1">// Used in jQuery.event.special.mouseenter and mouseleave handlers</span></p>
<p class="p1"><span class="s1">var withinElement = function( event ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Check if mouse(over|out) are still within the same parent element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var parent = event.relatedTarget;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Traverse up the tree</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>while ( parent &amp;&amp; parent !== this ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Firefox sometimes assigns relatedTarget a XUL element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// which we cannot access the parentNode property of</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parent = parent.parentNode;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// assuming we've left the element since we most likely mousedover a xul element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( parent !== this ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// set the correct event type</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.type = event.data;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// handle event if we actually just moused on to a non sub-element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.handle.apply( this, arguments );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// In case of event delegation, we only need to rename the event.type,</span></p>
<p class="p1"><span class="s1">// liveHandler will take care of the rest.</span></p>
<p class="p1"><span class="s1">delegate = function( event ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>event.type = event.data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.event.handle.apply( this, arguments );</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Create mouseenter and mouseleave events</span></p>
<p class="p1"><span class="s1">jQuery.each({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>mouseenter: "mouseover",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>mouseleave: "mouseout"</span></p>
<p class="p1"><span class="s1">}, function( orig, fix ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.event.special[ orig ] = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>setup: function( data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.add( this, fix, data &amp;&amp; data.selector ? delegate : withinElement, orig );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>teardown: function( data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.remove( this, fix, data &amp;&amp; data.selector ? delegate : withinElement );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// submit delegation</span></p>
<p class="p1"><span class="s1">if ( !jQuery.support.submitBubbles ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.event.special.submit = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>setup: function( data, namespaces, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.nodeName.toLowerCase() !== "form" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.add(this, "click.specialSubmit." + fn.guid, function( e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = e.target, type = elem.type;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (type === "submit" || type === "image") &amp;&amp; jQuery( elem ).closest("form").length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return trigger( "submit", this, arguments );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.add(this, "keypress.specialSubmit." + fn.guid, function( e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = e.target, type = elem.type;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (type === "text" || type === "password") &amp;&amp; jQuery( elem ).closest("form").length &amp;&amp; e.keyCode === 13 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return trigger( "submit", this, arguments );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>remove: function( namespaces, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.remove( this, "click.specialSubmit" + (fn ? "."+fn.guid : "") );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.remove( this, "keypress.specialSubmit" + (fn ? "."+fn.guid : "") );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// change delegation, happens here so we have bind.</span></p>
<p class="p1"><span class="s1">if ( !jQuery.support.changeBubbles ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var formElems = /textarea|input|select/i;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function getVal( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var type = elem.type, val = elem.value;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( type === "radio" || type === "checkbox" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val = elem.checked;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} else if ( type === "select-multiple" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val = elem.selectedIndex &gt; -1 ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.map( elem.options, function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.selected;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}).join("-") :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} else if ( elem.nodeName.toLowerCase() === "select" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val = elem.selectedIndex;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return val;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function testChange( e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = e.target, data, val;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !formElems.test( elem.nodeName ) || elem.readOnly ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = jQuery.data( elem, "_change_data" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val = getVal(elem);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// the current data will be also retrieved by beforeactivate</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( e.type !== "focusout" || elem.type !== "radio" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.data( elem, "_change_data", val );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( data === undefined || val === data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( data != null || val ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e.type = "change";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.event.trigger( e, arguments[1], elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.event.special.change = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>filters: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>focusout: testChange,<span class="Apple-converted-space"> </span></span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>click: function( e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = e.target, type = elem.type;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( type === "radio" || type === "checkbox" || elem.nodeName.toLowerCase() === "select" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return testChange.call( this, e );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Change has to be called before submit</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Keydown will be called before keypress, which is used in submit-event delegation</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>keydown: function( e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = e.target, type = elem.type;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (e.keyCode === 13 &amp;&amp; elem.nodeName.toLowerCase() !== "textarea") ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(e.keyCode === 32 &amp;&amp; (type === "checkbox" || type === "radio")) ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "select-multiple" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return testChange.call( this, e );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Beforeactivate happens also before the previous element is blurred</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// with this event you can't trigger a change event, but you can store</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// information/focus[in] is not needed anymore</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>beforeactivate: function( e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = e.target;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeName.toLowerCase() === "input" &amp;&amp; elem.type === "radio" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.data( elem, "_change_data", getVal(elem) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>setup: function( data, namespaces, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var type in changeFilters ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.add( this, type + ".specialChange." + fn.guid, changeFilters[type] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return formElems.test( this.nodeName );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>remove: function( namespaces, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var type in changeFilters ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.remove( this, type + ".specialChange" + (fn ? "."+fn.guid : ""), changeFilters[type] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return formElems.test( this.nodeName );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var changeFilters = jQuery.event.special.change.filters;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function trigger( type, elem, args ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>args[0].type = type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return jQuery.event.handle.apply( elem, args );</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Create "bubbling" focus and blur events</span></p>
<p class="p1"><span class="s1">if ( document.addEventListener ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.special[ fix ] = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>setup: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.addEventListener( orig, handler, true );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>teardown: function() {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.removeEventListener( orig, handler, true );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function handler( e ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e = jQuery.event.fix( e );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e.type = fix;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.event.handle.call( this, e );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.each(["bind", "one"], function( i, name ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[ name ] = function( type, data, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle object literals</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof type === "object" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var key in type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this[ name ](key, data, type[key], fn);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( data ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn = data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var handler = name === "one" ? jQuery.proxy( fn, function( event ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( this ).unbind( event, handler );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return fn.apply( this, arguments );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}) : fn;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return type === "unload" &amp;&amp; name !== "one" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.one( type, data, fn ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.add( this, type, handler, data );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>unbind: function( type, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle object literals</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof type === "object" &amp;&amp; !type.preventDefault ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var key in type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.unbind(key, type[key]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.remove( this, type, fn );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>trigger: function( type, data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.trigger( type, data, this );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>triggerHandler: function( type, data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this[0] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var event = jQuery.Event( type );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.preventDefault();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.stopPropagation();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.trigger( event, data, this[0] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return event.result;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>toggle: function( fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Save reference to arguments for access in closure</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var args = arguments, i = 1;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// link all the functions, so any of them can unbind this click handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( i &lt; args.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.proxy( fn, args[ i++ ] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.click( jQuery.proxy( fn, function( event ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Figure out which function to execute</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var lastToggle = ( jQuery.data( this, "lastToggle" + fn.guid ) || 0 ) % i;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.data( this, "lastToggle" + fn.guid, lastToggle + 1 );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that clicks stop</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.preventDefault();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// and execute the function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return args[ lastToggle ].apply( this, arguments ) || false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>hover: function( fnOver, fnOut ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.each(["live", "die"], function( i, name ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[ name ] = function( types, data, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var type, i = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( data ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn = data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>types = (types || "").split( /\s+/ );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( (type = types[ i++ ]) != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = type === "focus" ? "focusin" : // focus --&gt; focusin</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "blur" ? "focusout" : // blur --&gt; focusout</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "hover" ? types.push("mouseleave") &amp;&amp; "mouseenter" : // hover support</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type;</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name === "live" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// bind live handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( this.context ).bind( liveConvert( type, this.selector ), {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data: data, selector: this.selector, live: type</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}, fn );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// unbind live handler</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( this.context ).unbind( liveConvert( type, this.selector ), fn ? { guid: fn.guid + this.selector + type } : null );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function liveHandler( event ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var stop, elems = [], selectors = [], args = arguments,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>related, match, fn, elem, j, i, l, data,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>live = jQuery.extend({}, jQuery.data( this, "events" ).live);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Make sure we avoid non-left-click bubbling in Firefox (#3861)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( event.button &amp;&amp; event.type === "click" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>for ( j in live ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn = live[j];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( fn.live === event.type ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn.altLive &amp;&amp; jQuery.inArray(event.type, fn.altLive) &gt; -1 ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = fn.data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !(data.beforeFilter &amp;&amp; data.beforeFilter[event.type] &amp;&amp;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>!data.beforeFilter[event.type](event)) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selectors.push( fn.selector );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete live[j];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>match = jQuery( event.target ).closest( selectors, event.currentTarget );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>for ( i = 0, l = match.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( j in live ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fn = live[j];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = match[i].elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>related = null;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match[i].selector === fn.selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Those two events require additional checking</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( fn.live === "mouseenter" || fn.live === "mouseleave" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>related = jQuery( event.relatedTarget ).closest( fn.selector )[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !related || related !== elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elems.push({ elem: elem, fn: fn });</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>for ( i = 0, l = elems.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = elems[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.currentTarget = match.elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>event.data = match.fn.data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match.fn.apply( match.elem, args ) === false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>stop = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return stop;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function liveConvert( type, selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return "live." + (type ? type + "." : "") + selector.replace(/\./g, "`").replace(/ /g, "&amp;");</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>"change select submit keydown keypress keyup error").split(" "), function( i, name ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Handle event binding</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[ name ] = function( fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return fn ? this.bind( name, fn ) : this.trigger( name );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( jQuery.attrFn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.attrFn[ name ] = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Prevent memory leaks in IE</span></p>
<p class="p1"><span class="s1">// Window isn't included so as not to unbind existing unload events</span></p>
<p class="p1"><span class="s1">// More info:</span></p>
<p class="p1"><span class="s1">//<span class="Apple-converted-space">  </span>- http://isaacschlueter.com/2006/10/msie-memory-leaks/</span></p>
<p class="p1"><span class="s1">if ( window.attachEvent &amp;&amp; !window.addEventListener ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>window.attachEvent("onunload", function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var id in jQuery.cache ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.cache[ id ].handle ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Try/Catch is to handle iframes being unloaded, see #4280</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.remove( jQuery.cache[ id ].handle.elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) {}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">/*!</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* Sizzle CSS Selector Engine - v1.0</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*<span class="Apple-converted-space">  </span>Copyright 2009, The Dojo Foundation</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*<span class="Apple-converted-space">  </span>More information: http://sizzlejs.com/</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* Permission is hereby granted, free of charge, to any person obtaining</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* a copy of this software and associated documentation files (the</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* "Software"), to deal in the Software without restriction, including</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* without limitation the rights to use, copy, modify, merge, publish,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* distribute, sublicense, and/or sell copies of the Software, and to</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* permit persons to whom the Software is furnished to do so, subject to</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* the following conditions:</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* The above copyright notice and this permission notice shall be</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* included in all copies or substantial portions of the Software.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> </span>*/</span></p>
<p class="p1"><span class="s1">(function(){</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ &gt;+~,(\[\\]+)+|[&gt;+~])(\s*,\s*)?((?:.|\r|\n)*)/g,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>done = 0,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>toString = Object.prototype.toString,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>hasDuplicate = false,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>baseHasDuplicate = true;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Here we check if the JavaScript engine is using some sort of</span></p>
<p class="p1"><span class="s1">// optimization where it does not always call our comparision</span></p>
<p class="p1"><span class="s1">// function. If that is the case, discard the hasDuplicate value.</span></p>
<p class="p1"><span class="s1">// <span class="Apple-converted-space">  </span>Thus far that includes Google Chrome.</span></p>
<p class="p1"><span class="s1">[0, 0].sort(function(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>baseHasDuplicate = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return 0;</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var Sizzle = function(selector, context, results, seed) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>results = results || [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var origContext = context = context || document;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( context.nodeType !== 1 &amp;&amp; context.nodeType !== 9 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( !selector || typeof selector !== "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return results;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var parts = [], m, set, checkSet, extra, prune = true, contextXML = isXML(context),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>soFar = selector;</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Reset the position of the chunker regexp (start from head)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>while ( (chunker.exec(""), m = chunker.exec(soFar)) !== null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>soFar = m[3];</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parts.push( m[1] );</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( m[2] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>extra = m[3];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( parts.length &gt; 1 &amp;&amp; origPOS.exec( selector ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( parts.length === 2 &amp;&amp; Expr.relative[ parts[0] ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>set = posProcess( parts[0] + parts[1], context );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>set = Expr.relative[ parts[0] ] ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>[ context ] :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle( parts.shift(), context );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( parts.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector = parts.shift();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( Expr.relative[ selector ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector += parts.shift();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>set = posProcess( selector, set );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Take a shortcut and set the context if the root selector is an ID</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// (but not if it'll be faster if the inner selector is an ID)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !seed &amp;&amp; parts.length &gt; 1 &amp;&amp; context.nodeType === 9 &amp;&amp; !contextXML &amp;&amp;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Expr.match.ID.test(parts[0]) &amp;&amp; !Expr.match.ID.test(parts[parts.length - 1]) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = Sizzle.find( parts.shift(), context, contextXML );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>context = ret.expr ? Sizzle.filter( ret.expr, ret.set )[0] : ret.set[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( context ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = seed ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{ expr: parts.pop(), set: makeArray(seed) } :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle.find( parts.pop(), parts.length === 1 &amp;&amp; (parts[0] === "~" || parts[0] === "+") &amp;&amp; context.parentNode ? context.parentNode : context, contextXML );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>set = ret.expr ? Sizzle.filter( ret.expr, ret.set ) : ret.set;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( parts.length &gt; 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkSet = makeArray(set);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>prune = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( parts.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var cur = parts.pop(), pop = cur;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !Expr.relative[ cur ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cur = "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>pop = parts.pop();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( pop == null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>pop = context;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Expr.relative[ cur ]( checkSet, pop, contextXML );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkSet = parts = [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( !checkSet ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkSet = set;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( !checkSet ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle.error( cur || selector );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( toString.call(checkSet) === "[object Array]" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !prune ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results.push.apply( results, checkSet );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( context &amp;&amp; context.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0; checkSet[i] != null; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( checkSet[i] &amp;&amp; (checkSet[i] === true || checkSet[i].nodeType === 1 &amp;&amp; contains(context, checkSet[i])) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results.push( set[i] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0; checkSet[i] != null; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( checkSet[i] &amp;&amp; checkSet[i].nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results.push( set[i] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>makeArray( checkSet, results );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( extra ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle( extra, origContext, results, seed );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle.uniqueSort( results );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return results;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">Sizzle.uniqueSort = function(results){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( sortOrder ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hasDuplicate = baseHasDuplicate;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results.sort(sortOrder);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( hasDuplicate ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 1; i &lt; results.length; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( results[i] === results[i-1] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results.splice(i--, 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return results;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">Sizzle.matches = function(expr, set){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return Sizzle(expr, null, null, set);</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">Sizzle.find = function(expr, context, isXML){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var set, match;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( !expr ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>for ( var i = 0, l = Expr.order.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var type = Expr.order[i], match;</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var left = match[1];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match.splice(1,1);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( left.substr( left.length - 1 ) !== "\\" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match[1] = (match[1] || "").replace(/\\/g, "");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>set = Expr.find[ type ]( match, context, isXML );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( set != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>expr = expr.replace( Expr.match[ type ], "" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( !set ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>set = context.getElementsByTagName("*");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return {set: set, expr: expr};</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">Sizzle.filter = function(expr, set, inplace, not){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var old = expr, result = [], curLoop = set, match, anyFound,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isXMLFilter = set &amp;&amp; set[0] &amp;&amp; isXML(set[0]);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>while ( expr &amp;&amp; set.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var type in Expr.filter ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (match = Expr.leftMatch[ type ].exec( expr )) != null &amp;&amp; match[2] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var filter = Expr.filter[ type ], found, item, left = match[1];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>anyFound = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match.splice(1,1);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( left.substr( left.length - 1 ) === "\\" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>continue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( curLoop === result ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>result = [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( Expr.preFilter[ type ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !match ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>anyFound = found = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( match === true ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>continue;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0; (item = curLoop[i]) != null; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( item ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>found = filter( item, match, i, curLoop );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var pass = not ^ !!found;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( inplace &amp;&amp; found != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( pass ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>anyFound = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>curLoop[i] = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( pass ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>result.push( item );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>anyFound = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( found !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !inplace ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>curLoop = result;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>expr = expr.replace( Expr.match[ type ], "" );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !anyFound ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Improper expression</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( expr === old ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( anyFound == null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle.error( expr );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>old = expr;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return curLoop;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">Sizzle.error = function( msg ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>throw "Syntax error, unrecognized expression: " + msg;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var Expr = Sizzle.selectors = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>order: [ "ID", "NAME", "TAG" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>match: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>leftMatch: {},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>attrMap: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"class": "className",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"for": "htmlFor"</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>attrHandle: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>href: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.getAttribute("href");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>relative: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"+": function(checkSet, part){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var isPartStr = typeof part === "string",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isTag = isPartStr &amp;&amp; !/\W/.test(part),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>isPartStrNotTag = isPartStr &amp;&amp; !isTag;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isTag ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>part = part.toLowerCase();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = checkSet.length, elem; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (elem = checkSet[i]) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( (elem = elem.previousSibling) &amp;&amp; elem.nodeType !== 1 ) {}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkSet[i] = isPartStrNotTag || elem &amp;&amp; elem.nodeName.toLowerCase() === part ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem || false :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem === part;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isPartStrNotTag ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle.filter( part, checkSet, true );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"&gt;": function(checkSet, part){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var isPartStr = typeof part === "string";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isPartStr &amp;&amp; !/\W/.test(part) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>part = part.toLowerCase();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = checkSet.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = checkSet[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var parent = elem.parentNode;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = checkSet.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = checkSet[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkSet[i] = isPartStr ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.parentNode :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.parentNode === part;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isPartStr ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle.filter( part, checkSet, true );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"": function(checkSet, part, isXML){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var doneName = done++, checkFn = dirCheck;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof part === "string" &amp;&amp; !/\W/.test(part) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var nodeCheck = part = part.toLowerCase();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkFn = dirNodeCheck;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"~": function(checkSet, part, isXML){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var doneName = done++, checkFn = dirCheck;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof part === "string" &amp;&amp; !/\W/.test(part) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var nodeCheck = part = part.toLowerCase();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkFn = dirNodeCheck;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>find: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ID: function(match, context, isXML){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof context.getElementById !== "undefined" &amp;&amp; !isXML ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var m = context.getElementById(match[1]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return m ? [m] : [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>NAME: function(match, context){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof context.getElementsByName !== "undefined" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = [], results = context.getElementsByName(match[1]);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = results.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( results[i].getAttribute("name") === match[1] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.push( results[i] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret.length === 0 ? null : ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>TAG: function(match, context){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return context.getElementsByTagName(match[1]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>preFilter: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>CLASS: function(match, curLoop, inplace, result, not, isXML){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = " " + match[1].replace(/\\/g, "") + " ";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isXML ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( not ^ (elem.className &amp;&amp; (" " + elem.className + " ").replace(/[\t\n]/g, " ").indexOf(match) &gt;= 0) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !inplace ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>result.push( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( inplace ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>curLoop[i] = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ID: function(match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return match[1].replace(/\\/g, "");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>TAG: function(match, curLoop){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return match[1].toLowerCase();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>CHILD: function(match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match[1] === "nth" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match[2] === "even" &amp;&amp; "2n" || match[2] === "odd" &amp;&amp; "2n+1" ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>!/\D/.test( match[2] ) &amp;&amp; "0n+" + match[2] || match[2]);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// calculate the numbers (first)n+(last) including if they are negative</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match[2] = (test[1] + (test[2] || 1)) - 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match[3] = test[3] - 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// TODO: Move to normal caching system</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match[0] = done++;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ATTR: function(match, curLoop, inplace, result, not, isXML){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var name = match[1].replace(/\\/g, "");</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !isXML &amp;&amp; Expr.attrMap[name] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match[1] = Expr.attrMap[name];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match[2] === "~=" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match[4] = " " + match[4] + " ";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>PSEUDO: function(match, curLoop, inplace, result, not){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match[1] === "not" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If we're dealing with a complex expression, or a simple one</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ( chunker.exec(match[3]) || "" ).length &gt; 1 || /^\w/.test(match[3]) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match[3] = Sizzle(match[3], null, null, curLoop);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !inplace ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>result.push.apply( result, ret );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>POS: function(match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match.unshift( true );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>filters: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>enabled: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.disabled === false &amp;&amp; elem.type !== "hidden";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>disabled: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.disabled === true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checked: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.checked === true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selected: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Accessing this property makes selected-by-default</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// options in Safari work properly</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.parentNode.selectedIndex;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.selected === true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parent: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return !!elem.firstChild;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>empty: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return !elem.firstChild;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>has: function(elem, i, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return !!Sizzle( match[3], elem ).length;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>header: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return /h\d/i.test( elem.nodeName );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>text: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "text" === elem.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>radio: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "radio" === elem.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkbox: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "checkbox" === elem.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>file: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "file" === elem.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>password: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "password" === elem.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>submit: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "submit" === elem.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>image: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "image" === elem.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>reset: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "reset" === elem.type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>button: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "button" === elem.type || elem.nodeName.toLowerCase() === "button";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>input: function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return /input|select|textarea|button/i.test(elem.nodeName);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>setFilters: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>first: function(elem, i){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return i === 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>last: function(elem, i, match, array){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return i === array.length - 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>even: function(elem, i){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return i % 2 === 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>odd: function(elem, i){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return i % 2 === 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>lt: function(elem, i, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return i &lt; match[3] - 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>gt: function(elem, i, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return i &gt; match[3] - 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>nth: function(elem, i, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return match[3] - 0 === i;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>eq: function(elem, i, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return match[3] - 0 === i;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>filter: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>PSEUDO: function(elem, match, i, array){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var name = match[1], filter = Expr.filters[ name ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( filter ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return filter( elem, i, match, array );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( name === "contains" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return (elem.textContent || elem.innerText || getText([ elem ]) || "").indexOf(match[3]) &gt;= 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( name === "not" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var not = match[3];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = not.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( not[i] === elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle.error( "Syntax error, unrecognized expression: " + name );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>CHILD: function(elem, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var type = match[1], node = elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>switch (type) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>case 'only':</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>case 'first':</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( (node = node.previousSibling) )<span class="Apple-tab-span">	</span> {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( node.nodeType === 1 ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( type === "first" ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>node = elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>case 'last':</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( (node = node.nextSibling) )<span class="Apple-tab-span">	</span> {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( node.nodeType === 1 ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>case 'nth':</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var first = match[2], last = match[3];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( first === 1 &amp;&amp; last === 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var doneName = match[0],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parent = elem.parentNode;</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( parent &amp;&amp; (parent.sizcache !== doneName || !elem.nodeIndex) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var count = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( node = parent.firstChild; node; node = node.nextSibling ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( node.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>node.nodeIndex = ++count;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parent.sizcache = doneName;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var diff = elem.nodeIndex - last;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( first === 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return diff === 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ( diff % first === 0 &amp;&amp; diff / first &gt;= 0 );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ID: function(elem, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.nodeType === 1 &amp;&amp; elem.getAttribute("id") === match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>TAG: function(elem, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return (match === "*" &amp;&amp; elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>CLASS: function(elem, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return (" " + (elem.className || elem.getAttribute("class")) + " ")</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>.indexOf( match ) &gt; -1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ATTR: function(elem, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var name = match[1],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>result = Expr.attrHandle[ name ] ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Expr.attrHandle[ name ]( elem ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem[ name ] != null ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem[ name ] :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.getAttribute( name ),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value = result + "",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = match[2],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>check = match[4];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return result == null ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "!=" :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "=" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value === check :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "*=" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value.indexOf(check) &gt;= 0 :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "~=" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(" " + value + " ").indexOf(check) &gt;= 0 :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>!check ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value &amp;&amp; result !== false :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "!=" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value !== check :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "^=" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value.indexOf(check) === 0 :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "$=" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value.substr(value.length - check.length) === check :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type === "|=" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value === check || value.substr(0, check.length + 1) === check + "-" :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>POS: function(elem, match, i, array){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var name = match[2], filter = Expr.setFilters[ name ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( filter ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return filter( elem, i, match, array );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var origPOS = Expr.match.POS;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">for ( var type in Expr.match ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>Expr.match[ type ] = new RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, function(all, num){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return "\\" + (num - 0 + 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}));</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var makeArray = function(array, results) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>array = Array.prototype.slice.call( array, 0 );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( results ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results.push.apply( results, array );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return results;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return array;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Perform a simple check to determine if the browser is capable of</span></p>
<p class="p1"><span class="s1">// converting a NodeList to an array using builtin methods.</span></p>
<p class="p1"><span class="s1">try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>Array.prototype.slice.call( document.documentElement.childNodes, 0 );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Provide a fallback method if it does not work</span></p>
<p class="p1"><span class="s1">} catch(e){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>makeArray = function(array, results) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = results || [];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( toString.call(array) === "[object Array]" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Array.prototype.push.apply( ret, array );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof array.length === "number" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = array.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.push( array[i] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0; array[i]; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.push( array[i] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var sortOrder;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">if ( document.documentElement.compareDocumentPosition ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>sortOrder = function( a, b ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( a == b ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hasDuplicate = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return a.compareDocumentPosition ? -1 : 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = a.compareDocumentPosition(b) &amp; 4 ? -1 : a === b ? 0 : 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ret === 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hasDuplicate = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">} else if ( "sourceIndex" in document.documentElement ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>sortOrder = function( a, b ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !a.sourceIndex || !b.sourceIndex ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( a == b ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hasDuplicate = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return a.sourceIndex ? -1 : 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = a.sourceIndex - b.sourceIndex;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ret === 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hasDuplicate = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">} else if ( document.createRange ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>sortOrder = function( a, b ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !a.ownerDocument || !b.ownerDocument ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( a == b ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hasDuplicate = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return a.ownerDocument ? -1 : 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>aRange.setStart(a, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>aRange.setEnd(a, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>bRange.setStart(b, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>bRange.setEnd(b, 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ret === 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hasDuplicate = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Utility function for retreiving the text value of an array of DOM nodes</span></p>
<p class="p1"><span class="s1">function getText( elems ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var ret = "", elem;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>for ( var i = 0; elems[i]; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = elems[i];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get the text from text nodes and CDATA nodes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeType === 3 || elem.nodeType === 4 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret += elem.nodeValue;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Traverse everything else, except comment nodes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( elem.nodeType !== 8 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret += getText( elem.childNodes );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Check to see if the browser returns elements by name when</span></p>
<p class="p1"><span class="s1">// querying by getElementById (and provide a workaround)</span></p>
<p class="p1"><span class="s1">(function(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// We're going to inject a fake input element with a specified name</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var form = document.createElement("div"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>id = "script" + (new Date).getTime();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>form.innerHTML = "&lt;a name='" + id + "'/&gt;";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Inject it into the root element, check its status, and remove it quickly</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var root = document.documentElement;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>root.insertBefore( form, root.firstChild );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// The workaround has to do additional checks after a getElementById</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Which slows things down for other browsers (hence the branching)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( document.getElementById( id ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Expr.find.ID = function(match, context, isXML){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof context.getElementById !== "undefined" &amp;&amp; !isXML ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var m = context.getElementById(match[1]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" &amp;&amp; m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Expr.filter.ID = function(elem, match){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var node = typeof elem.getAttributeNode !== "undefined" &amp;&amp; elem.getAttributeNode("id");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.nodeType === 1 &amp;&amp; node &amp;&amp; node.nodeValue === match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>root.removeChild( form );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>root = form = null; // release memory in IE</span></p>
<p class="p1"><span class="s1">})();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">(function(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Check to see if the browser returns only elements</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// when doing getElementsByTagName("*")</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Create a fake element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var div = document.createElement("div");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div.appendChild( document.createComment("") );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Make sure no comments are found</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( div.getElementsByTagName("*").length &gt; 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Expr.find.TAG = function(match, context){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var results = context.getElementsByTagName(match[1]);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Filter out possible comments</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match[1] === "*" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var tmp = [];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0; results[i]; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( results[i].nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>tmp.push( results[i] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results = tmp;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return results;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Check to see if an attribute returns normalized href attributes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div.innerHTML = "&lt;a href='#'&gt;&lt;/a&gt;";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( div.firstChild &amp;&amp; typeof div.firstChild.getAttribute !== "undefined" &amp;&amp;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.firstChild.getAttribute("href") !== "#" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Expr.attrHandle.href = function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.getAttribute("href", 2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div = null; // release memory in IE</span></p>
<p class="p1"><span class="s1">})();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">if ( document.querySelectorAll ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>(function(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var oldSizzle = Sizzle, div = document.createElement("div");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.innerHTML = "&lt;p class='TEST'&gt;&lt;/p&gt;";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Safari can't handle uppercase or unicode characters when</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// in quirks mode.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( div.querySelectorAll &amp;&amp; div.querySelectorAll(".TEST").length === 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle = function(query, context, extra, seed){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>context = context || document;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Only use querySelectorAll on non-XML documents</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// (ID selectors don't work in non-HTML documents)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !seed &amp;&amp; context.nodeType === 9 &amp;&amp; !isXML(context) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return makeArray( context.querySelectorAll(query), extra );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e){}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return oldSizzle(query, context, extra, seed);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var prop in oldSizzle ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle[ prop ] = oldSizzle[ prop ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div = null; // release memory in IE</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>})();</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">(function(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var div = document.createElement("div");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div.innerHTML = "&lt;div class='test e'&gt;&lt;/div&gt;&lt;div class='test'&gt;&lt;/div&gt;";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Opera can't find a second classname (in 9.6)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Also, make sure that getElementsByClassName actually exists</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Safari caches class attributes, doesn't catch changes (in 3.2)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div.lastChild.className = "e";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( div.getElementsByClassName("e").length === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>Expr.order.splice(1, 0, "CLASS");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>Expr.find.CLASS = function(match, context, isXML) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof context.getElementsByClassName !== "undefined" &amp;&amp; !isXML ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return context.getElementsByClassName(match[1]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>div = null; // release memory in IE</span></p>
<p class="p1"><span class="s1">})();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>for ( var i = 0, l = checkSet.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = checkSet[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = elem[dir];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var match = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.sizcache === doneName ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = checkSet[elem.sizset];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeType === 1 &amp;&amp; !isXML ){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.sizcache = doneName;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.sizset = i;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeName.toLowerCase() === cur ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = elem[dir];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkSet[i] = match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>for ( var i = 0, l = checkSet.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = checkSet[i];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = elem[dir];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var match = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.sizcache === doneName ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = checkSet[elem.sizset];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !isXML ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.sizcache = doneName;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.sizset = i;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof cur !== "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem === cur ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( Sizzle.filter( cur, [elem] ).length &gt; 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = elem[dir];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkSet[i] = match;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var contains = document.compareDocumentPosition ? function(a, b){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return a.compareDocumentPosition(b) &amp; 16;</span></p>
<p class="p1"><span class="s1">} : function(a, b){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return a !== b &amp;&amp; (a.contains ? a.contains(b) : true);</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var isXML = function(elem){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// documentElement is verified for cases where it doesn't yet exist</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// (such as loading iframes in IE - #4833)<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return documentElement ? documentElement.nodeName !== "HTML" : false;</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">var posProcess = function(selector, context){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var tmpSet = [], later = "", match,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>root = context.nodeType ? [context] : context;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Position selectors must be done after the filter</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// And so must :not(positional) so we move all PSEUDOs to the end</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>while ( (match = Expr.match.PSEUDO.exec( selector )) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>later += match[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector = selector.replace( Expr.match.PSEUDO, "" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>selector = Expr.relative[selector] ? selector + "*" : selector;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>for ( var i = 0, l = root.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Sizzle( selector, root[i], tmpSet );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return Sizzle.filter( later, tmpSet );</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// EXPOSE</span></p>
<p class="p1"><span class="s1">jQuery.find = Sizzle;</span></p>
<p class="p1"><span class="s1">jQuery.expr = Sizzle.selectors;</span></p>
<p class="p1"><span class="s1">jQuery.expr[":"] = jQuery.expr.filters;</span></p>
<p class="p1"><span class="s1">jQuery.unique = Sizzle.uniqueSort;</span></p>
<p class="p1"><span class="s1">jQuery.getText = getText;</span></p>
<p class="p1"><span class="s1">jQuery.isXMLDoc = isXML;</span></p>
<p class="p1"><span class="s1">jQuery.contains = contains;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">return;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">window.Sizzle = Sizzle;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">})();</span></p>
<p class="p1"><span class="s1">var runtil = /Until$/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rparentsprev = /^(?:parents|prevUntil|prevAll)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Note: This RegExp should be improved, or likely pulled from Sizzle</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rmultiselector = /,/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>slice = Array.prototype.slice;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Implement the identical functionality for filter and not</span></p>
<p class="p1"><span class="s1">var winnow = function( elements, qualifier, keep ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( qualifier ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.grep(elements, function( elem, i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return !!qualifier.call( elem, i, elem ) === keep;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} else if ( qualifier.nodeType ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.grep(elements, function( elem, i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return (elem === qualifier) === keep;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>} else if ( typeof qualifier === "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var filtered = jQuery.grep(elements, function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem.nodeType === 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isSimple.test( qualifier ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.filter(qualifier, filtered, !keep);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>qualifier = jQuery.filter( qualifier, filtered );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return jQuery.grep(elements, function( elem, i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return (jQuery.inArray( elem, qualifier ) &gt;= 0) === keep;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>find: function( selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = this.pushStack( "", "find", selector ), length = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = this.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>length = ret.length;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.find( selector, this[i], ret );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( i &gt; 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that the results are unique</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var n = length; n &lt; ret.length; n++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var r = 0; r &lt; length; r++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ret[r] === ret[n] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.splice(n--, 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>has: function( target ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var targets = jQuery( target );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.filter(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = targets.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.contains( this, targets[i] ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>not: function( selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.pushStack( winnow(this, selector, false), "not", selector);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>filter: function( selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.pushStack( winnow(this, selector, true), "filter", selector );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>is: function( selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return !!selector &amp;&amp; jQuery.filter( selector, this ).length &gt; 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>closest: function( selectors, context ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isArray( selectors ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = [], cur = this[0], match, matches = {}, selector;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( cur &amp;&amp; selectors.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = selectors.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector = selectors[i];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !matches[selector] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>matches[selector] = jQuery.expr.match.POS.test( selector ) ?<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( selector, context || this.context ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( cur &amp;&amp; cur.ownerDocument &amp;&amp; cur !== context ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( selector in matches ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>match = matches[selector];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( match.jquery ? match.index(cur) &gt; -1 : jQuery(cur).is(match) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.push({ selector: selector, elem: cur });</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete matches[selector];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cur = cur.parentNode;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var pos = jQuery.expr.match.POS.test( selectors ) ?<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( selectors, context || this.context ) : null;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.map(function( i, cur ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( cur &amp;&amp; cur.ownerDocument &amp;&amp; cur !== context ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( pos ? pos.index(cur) &gt; -1 : jQuery(cur).is(selectors) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return cur;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cur = cur.parentNode;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Determine the position of an element within</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// the matched set of elements</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>index: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem || typeof elem === "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.inArray( this[0],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If it receives a string, the selector is used</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If it receives nothing, the siblings are used</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem ? jQuery( elem ) : this.parent().children() );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Locate the position of the desired element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.inArray(</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If it receives a jQuery object, the first element is used</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.jquery ? elem[0] : elem, this );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>add: function( selector, context ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var set = typeof selector === "string" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( selector, context || this.context ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.makeArray( selector ),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>all = jQuery.merge( this.get(), set );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>all :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.unique( all ) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>andSelf: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.add( this.prevObject );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// A painfully simple check to see if an element is disconnected</span></p>
<p class="p1"><span class="s1">// from a document (should be improved, where feasible).</span></p>
<p class="p1"><span class="s1">function isDisconnected( node ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return !node || !node.parentNode || node.parentNode.nodeType === 11;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.each({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>parent: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var parent = elem.parentNode;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return parent &amp;&amp; parent.nodeType !== 11 ? parent : null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>parents: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.dir( elem, "parentNode" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>parentsUntil: function( elem, i, until ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.dir( elem, "parentNode", until );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>next: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.nth( elem, 2, "nextSibling" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>prev: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.nth( elem, 2, "previousSibling" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>nextAll: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.dir( elem, "nextSibling" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>prevAll: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.dir( elem, "previousSibling" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>nextUntil: function( elem, i, until ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.dir( elem, "nextSibling", until );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>prevUntil: function( elem, i, until ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.dir( elem, "previousSibling", until );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>siblings: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.sibling( elem.parentNode.firstChild, elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>children: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.sibling( elem.firstChild );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>contents: function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.nodeName( elem, "iframe" ) ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.contentDocument || elem.contentWindow.document :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.makeArray( elem.childNodes );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}, function( name, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[ name ] = function( until, selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = jQuery.map( this, fn, until );</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !runtil.test( name ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>selector = until;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( selector &amp;&amp; typeof selector === "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = jQuery.filter( selector, ret );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = this.length &gt; 1 ? jQuery.unique( ret ) : ret;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (this.length &gt; 1 || rmultiselector.test( selector )) &amp;&amp; rparentsprev.test( name ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = ret.reverse();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.pushStack( ret, name, slice.call(arguments).join(",") );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>filter: function( expr, elems, not ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( not ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>expr = ":not(" + expr + ")";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.find.matches(expr, elems);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>dir: function( elem, dir, until ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var matched = [], cur = elem[dir];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( cur &amp;&amp; cur.nodeType !== 9 &amp;&amp; (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( cur.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>matched.push( cur );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cur = cur[dir];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return matched;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>nth: function( cur, result, dir, elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>result = result || 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var num = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( ; cur; cur = cur[dir] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( cur.nodeType === 1 &amp;&amp; ++num === result ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return cur;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>sibling: function( n, elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var r = [];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( ; n; n = n.nextSibling ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( n.nodeType === 1 &amp;&amp; n !== elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>r.push( n );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return r;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">var rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rleadingWhitespace = /^\s+/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rxhtmlTag = /(&lt;([\w:]+)[^&gt;]*?)\/&gt;/g,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rselfClosing = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rtagName = /&lt;([\w:]+)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rtbody = /&lt;tbody/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rhtml = /&lt;|&amp;\w+;/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,<span class="Apple-converted-space">  </span>// checked="checked" or checked (html5)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>fcloseTag = function( all, front, tag ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return rselfClosing.test( tag ) ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>all :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>front + "&gt;&lt;/" + tag + "&gt;";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>wrapMap = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>option: [ 1, "&lt;select multiple='multiple'&gt;", "&lt;/select&gt;" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>legend: [ 1, "&lt;fieldset&gt;", "&lt;/fieldset&gt;" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>thead: [ 1, "&lt;table&gt;", "&lt;/table&gt;" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>tr: [ 2, "&lt;table&gt;&lt;tbody&gt;", "&lt;/tbody&gt;&lt;/table&gt;" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>td: [ 3, "&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;", "&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>col: [ 2, "&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;", "&lt;/colgroup&gt;&lt;/table&gt;" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>area: [ 1, "&lt;map&gt;", "&lt;/map&gt;" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_default: [ 0, "", "" ]</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">wrapMap.optgroup = wrapMap.option;</span></p>
<p class="p1"><span class="s1">wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;</span></p>
<p class="p1"><span class="s1">wrapMap.th = wrapMap.td;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// IE can't serialize &lt;link&gt; and &lt;script&gt; tags normally</span></p>
<p class="p1"><span class="s1">if ( !jQuery.support.htmlSerialize ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>wrapMap._default = [ 1, "div&lt;div&gt;", "&lt;/div&gt;" ];</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>text: function( text ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction(text) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(i) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery(this);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.text( text.call(this, i, self.text()) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof text !== "object" &amp;&amp; text !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.empty().append( (this[0] &amp;&amp; this[0].ownerDocument || document).createTextNode( text ) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.getText( this );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>wrapAll: function( html ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( html ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(i) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery(this).wrapAll( html.call(this, i) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this[0] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// The elements to wrap the target around</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this[0].parentNode ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>wrap.insertBefore( this[0] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>wrap.map(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( elem.firstChild &amp;&amp; elem.firstChild.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = elem.firstChild;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}).append(this);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>wrapInner: function( html ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( html ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(i) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery(this).wrapInner( html.call(this, i) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery( this ), contents = self.contents();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( contents.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>contents.wrapAll( html );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.append( html );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>wrap: function( html ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( this ).wrapAll( html );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>unwrap: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.parent().each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.nodeName( this, "body" ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( this ).replaceWith( this.childNodes );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}).end();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>append: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.domManip(arguments, true, function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.appendChild( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>prepend: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.domManip(arguments, true, function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.insertBefore( elem, this.firstChild );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>before: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this[0] &amp;&amp; this[0].parentNode ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.domManip(arguments, false, function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.parentNode.insertBefore( elem, this );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( arguments.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var set = jQuery(arguments[0]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>set.push.apply( set, this.toArray() );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.pushStack( set, "before", arguments );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>after: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this[0] &amp;&amp; this[0].parentNode ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.domManip(arguments, false, function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.parentNode.insertBefore( elem, this.nextSibling );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( arguments.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var set = this.pushStack( this, "after", arguments );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>set.push.apply( set, jQuery(arguments[0]).toArray() );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return set;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>clone: function( events ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Do the clone</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = this.map(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.support.noCloneEvent &amp;&amp; !jQuery.isXMLDoc(this) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// IE copies events bound via attachEvent when</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// using cloneNode. Calling detachEvent on the</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// clone will also remove the events from the orignal</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// In order to get around this, we use innerHTML.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Unfortunately, this means some modifications to</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// attributes in IE that are actually only stored</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// as properties will not be copied (such as the</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// the name attribute on an input).</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var html = this.outerHTML, ownerDocument = this.ownerDocument;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !html ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var div = ownerDocument.createElement("div");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.appendChild( this.cloneNode(true) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>html = div.innerHTML;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.clean([html.replace(rinlinejQuery, "")</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>.replace(rleadingWhitespace, "")], ownerDocument)[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.cloneNode(true);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Copy the events from the original to the clone</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( events === true ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cloneCopyEvent( this, ret );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cloneCopyEvent( this.find("*"), ret.find("*") );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Return the cloned set</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>html: function( value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( value === undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this[0] &amp;&amp; this[0].nodeType === 1 ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this[0].innerHTML.replace(rinlinejQuery, "") :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>null;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// See if we can take a shortcut and just use innerHTML</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( typeof value === "string" &amp;&amp; !/&lt;script/i.test( value ) &amp;&amp;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value )) &amp;&amp;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>!wrapMap[ (rtagName.exec( value ) || ["", ""])[1].toLowerCase() ] ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value = value.replace(rxhtmlTag, fcloseTag);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = this.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remove element nodes and prevent memory leaks</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this[i].nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.cleanData( this[i].getElementsByTagName("*") );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this[i].innerHTML = value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If using innerHTML throws an exception, use the fallback method</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.empty().append( value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( jQuery.isFunction( value ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.each(function(i){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery(this), old = self.html();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.empty().append(function(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return value.call( this, i, old );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.empty().append( value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>replaceWith: function( value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this[0] &amp;&amp; this[0].parentNode ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that the elements are removed from the DOM before they are inserted</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// this can help fix replacing a parent with child elements</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.isFunction( value ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value = jQuery( value ).detach();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(i) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery(this), old = self.html();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.replaceWith( value.call( this, i, old ) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var next = this.nextSibling, parent = this.parentNode;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery(this).remove();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( next ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery(next).before( value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery(parent).append( value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>detach: function( selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.remove( selector, true );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>domManip: function( args, table, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var results, first, value = args[0], scripts = [];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We can't cloneNode fragments that contain checked, in WebKit</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.support.checkClone &amp;&amp; arguments.length === 3 &amp;&amp; typeof value === "string" &amp;&amp; rchecked.test( value ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery(this).domManip( args, table, callback, true );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction(value) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function(i) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery(this);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>args[0] = value.call(this, i, table ? self.html() : undefined);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.domManip( args, table, callback );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this[0] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If we're in a fragment, just use that instead of building a new one</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( args[0] &amp;&amp; args[0].parentNode &amp;&amp; args[0].parentNode.nodeType === 11 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results = { fragment: args[0].parentNode };</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results = buildFragment( args, this, scripts );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>first = results.fragment.firstChild;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( first ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>table = table &amp;&amp; jQuery.nodeName( first, "tr" );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = this.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>callback.call(</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>table ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>root(this[i], first) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this[i],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results.cacheable || this.length &gt; 1 || i &gt; 0 ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results.fragment.cloneNode(true) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>results.fragment</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( scripts ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.each( scripts, evalScript );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function root( elem, cur ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.nodeName(elem, "table") ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(elem.getElementsByTagName("tbody")[0] ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.appendChild(elem.ownerDocument.createElement("tbody"))) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function cloneCopyEvent(orig, ret) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var i = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>ret.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.nodeName !== (orig[i] &amp;&amp; orig[i].nodeName) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var oldData = jQuery.data( orig[i++] ), curData = jQuery.data( this, oldData ), events = oldData &amp;&amp; oldData.events;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( events ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete curData.handle;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>curData.events = {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var type in events ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var handler in events[ type ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.add( this, type, events[ type ][ handler ], events[ type ][ handler ].data );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function buildFragment( args, nodes, scripts ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var fragment, cacheable, cacheresults, doc;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// webkit does not clone 'checked' attribute of radio inputs on cloneNode, so don't cache if string has a checked</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( args.length === 1 &amp;&amp; typeof args[0] === "string" &amp;&amp; args[0].length &lt; 512 &amp;&amp; args[0].indexOf("&lt;option") &lt; 0 &amp;&amp; (jQuery.support.checkClone || !rchecked.test( args[0] )) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cacheable = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>cacheresults = jQuery.fragments[ args[0] ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( cacheresults ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( cacheresults !== 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fragment = cacheresults;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( !fragment ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>doc = (nodes &amp;&amp; nodes[0] ? nodes[0].ownerDocument || nodes[0] : document);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fragment = doc.createDocumentFragment();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.clean( args, doc, fragment, scripts );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>if ( cacheable ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.fragments[ args[0] ] = cacheresults ? fragment : 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return { fragment: fragment, cacheable: cacheable };</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fragments = {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.each({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>appendTo: "append",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>prependTo: "prepend",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>insertBefore: "before",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>insertAfter: "after",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>replaceAll: "replaceWith"</span></p>
<p class="p1"><span class="s1">}, function( name, original ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[ name ] = function( selector ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = [], insert = jQuery( selector );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = insert.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elems = (i &gt; 0 ? this.clone(true) : this).get();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.fn[ original ].apply( jQuery(insert[i]), elems );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = ret.concat( elems );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.pushStack( ret, name, insert.selector );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.each({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// keepData is for internal use only--do not document</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>remove: function( selector, keepData ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !selector || jQuery.filter( selector, [ this ] ).length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !keepData &amp;&amp; this.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.cleanData( this.getElementsByTagName("*") );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.cleanData( [ this ] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.parentNode ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span> this.parentNode.removeChild( this );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>empty: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remove element nodes and prevent memory leaks</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.cleanData( this.getElementsByTagName("*") );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remove any remaining nodes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( this.firstChild ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.removeChild( this.firstChild );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">}, function( name, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[ name ] = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each( fn, arguments );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>clean: function( elems, context, fragment, scripts ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>context = context || document;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// !context.createElement fails in IE with an error but returns typeof 'object'</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof context.createElement === "undefined" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>context = context.ownerDocument || context[0] &amp;&amp; context[0].ownerDocument || document;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = [];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.each(elems, function( i, elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof elem === "number" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem += "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Convert html string into DOM nodes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof elem === "string" &amp;&amp; !rhtml.test( elem ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = context.createTextNode( elem );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( typeof elem === "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Fix "XHTML"-style tags in all browsers</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = elem.replace(rxhtmlTag, fcloseTag);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Trim whitespace, otherwise indexOf won't work as expected</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var tag = (rtagName.exec( elem ) || ["", ""])[1].toLowerCase(),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>wrap = wrapMap[ tag ] || wrapMap._default,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>depth = wrap[0],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div = context.createElement("div");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Go to html and back, then peel off extra wrappers</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.innerHTML = wrap[1] + elem + wrap[2];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Move to the right depth</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( depth-- ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div = div.lastChild;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remove IE's autoinserted &lt;tbody&gt; from table fragments</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.support.tbody ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// String was a &lt;table&gt;, *may* have spurious &lt;tbody&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var hasBody = rtbody.test(elem),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>tbody = tag === "table" &amp;&amp; !hasBody ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.firstChild &amp;&amp; div.firstChild.childNodes :</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// String was a bare &lt;thead&gt; or &lt;tfoot&gt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>wrap[1] === "&lt;table&gt;" &amp;&amp; !hasBody ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.childNodes :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>[];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var j = tbody.length - 1; j &gt;= 0 ; --j ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.nodeName( tbody[ j ], "tbody" ) &amp;&amp; !tbody[ j ].childNodes.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>tbody[ j ].parentNode.removeChild( tbody[ j ] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// IE completely kills leading whitespace when innerHTML is used</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.support.leadingWhitespace &amp;&amp; rleadingWhitespace.test( elem ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem = jQuery.makeArray( div.childNodes );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.nodeType ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.push( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = jQuery.merge( ret, elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( fragment ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0; ret[i]; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( scripts &amp;&amp; jQuery.nodeName( ret[i], "script" ) &amp;&amp; (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ret[i].nodeType === 1 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret.splice.apply( ret, [i + 1, 0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fragment.appendChild( ret[i] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>cleanData: function( elems ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, elem, id; (elem = elems[i]) != null; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.remove( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.removeData( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">// exclude the following css properties to add px</span></p>
<p class="p1"><span class="s1">var rexclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>ralpha = /alpha\([^)]*\)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>ropacity = /opacity=([^)]*)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rfloat = /float/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rdashAlpha = /-([a-z])/ig,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rupper = /([A-Z])/g,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rnumpx = /^-?\d+(?:px)?$/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rnum = /^-?\d/,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>cssShow = { position: "absolute", visibility: "hidden", display:"block" },</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>cssWidth = [ "Left", "Right" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>cssHeight = [ "Top", "Bottom" ],</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// cache check for defaultView.getComputedStyle</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>getComputedStyle = document.defaultView &amp;&amp; document.defaultView.getComputedStyle,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// normalize float css property</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>styleFloat = jQuery.support.cssFloat ? "cssFloat" : "styleFloat",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>fcamelCase = function( all, letter ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return letter.toUpperCase();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.css = function( name, value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return access( this, name, value, true, function( elem, name, value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( value === undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.curCSS( elem, name );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof value === "number" &amp;&amp; !rexclude.test(name) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value += "px";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.style( elem, name, value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>style: function( elem, name, value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// don't set styles on text and comment nodes</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// ignore negative width and height values #1599</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( (name === "width" || name === "height") &amp;&amp; parseFloat(value) &lt; 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value = undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var style = elem.style || elem, set = value !== undefined;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// IE uses filters for opacity</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.support.opacity &amp;&amp; name === "opacity" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( set ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// IE has trouble with opacity if it does not have layout</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Force it by setting the zoom level</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>style.zoom = 1;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set the alpha filter to set the opacity</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var opacity = parseInt( value, 10 ) + "" === "NaN" ? "" : "alpha(opacity=" + value * 100 + ")";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var filter = style.filter || jQuery.curCSS( elem, "filter" ) || "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : opacity;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return style.filter &amp;&amp; style.filter.indexOf("opacity=") &gt;= 0 ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(parseFloat( ropacity.exec(style.filter)[1] ) / 100) + "":</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure we're using the right name for getting the float value</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( rfloat.test( name ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>name = styleFloat;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>name = name.replace(rdashAlpha, fcamelCase);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( set ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>style[ name ] = value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return style[ name ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>css: function( elem, name, force, extra ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name === "width" || name === "height" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var val, props = cssShow, which = name === "width" ? cssWidth : cssHeight;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function getWH() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val = name === "width" ? elem.offsetWidth : elem.offsetHeight;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( extra === "border" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.each( which, function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !extra ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val -= parseFloat(jQuery.curCSS( elem, "padding" + this, true)) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( extra === "margin" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val += parseFloat(jQuery.curCSS( elem, "margin" + this, true)) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>val -= parseFloat(jQuery.curCSS( elem, "border" + this + "Width", true)) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem.offsetWidth !== 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>getWH();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.swap( elem, props, getWH );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return Math.max(0, Math.round(val));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.curCSS( elem, name, force );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>curCSS: function( elem, name, force ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret, style = elem.style, filter;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// IE uses filters for opacity</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jQuery.support.opacity &amp;&amp; name === "opacity" &amp;&amp; elem.currentStyle ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = ropacity.test(elem.currentStyle.filter || "") ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(parseFloat(RegExp.$1) / 100) + "" :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret === "" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"1" :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure we're using the right name for getting the float value</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( rfloat.test( name ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>name = styleFloat;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !force &amp;&amp; style &amp;&amp; style[ name ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = style[ name ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( getComputedStyle ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Only "float" is needed here</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( rfloat.test( name ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>name = "float";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>name = name.replace( rupper, "-$1" ).toLowerCase();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var defaultView = elem.ownerDocument.defaultView;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !defaultView ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var computedStyle = defaultView.getComputedStyle( elem, null );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( computedStyle ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = computedStyle.getPropertyValue( name );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We should always get a number back from opacity</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( name === "opacity" &amp;&amp; ret === "" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = "1";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( elem.currentStyle ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var camelCase = name.replace(rdashAlpha, fcamelCase);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = elem.currentStyle[ name ] || elem.currentStyle[ camelCase ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// From the awesome hack by Dean Edwards</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If we're not dealing with a regular pixel number</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// but a number that has a weird ending, we need to convert it to pixels</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !rnumpx.test( ret ) &amp;&amp; rnum.test( ret ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remember the original values</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var left = style.left, rsLeft = elem.runtimeStyle.left;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Put in the new values to get a computed value out</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.runtimeStyle.left = elem.currentStyle.left;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>style.left = camelCase === "fontSize" ? "1em" : (ret || 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>ret = style.pixelLeft + "px";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Revert the changed values</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>style.left = left;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.runtimeStyle.left = rsLeft;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ret;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// A method for quickly swapping in/out CSS properties to get correct calculations</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>swap: function( elem, options, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var old = {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remember the old values, and insert the new ones</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var name in options ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>old[ name ] = elem.style[ name ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.style[ name ] = options[ name ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>callback.call( elem );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Revert the old values</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var name in options ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.style[ name ] = old[ name ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">if ( jQuery.expr &amp;&amp; jQuery.expr.filters ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.expr.filters.hidden = function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var width = elem.offsetWidth, height = elem.offsetHeight,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>skip = elem.nodeName.toLowerCase() === "tr";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return width === 0 &amp;&amp; height === 0 &amp;&amp; !skip ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>true :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>width &gt; 0 &amp;&amp; height &gt; 0 &amp;&amp; !skip ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>false :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.curCSS(elem, "display") === "none";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.expr.filters.visible = function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return !jQuery.expr.filters.hidden( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">var jsc = now(),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rscript = /&lt;script(.|\s)*?\/script&gt;/gi,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rselectTextarea = /select|textarea/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rinput = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jsre = /=\?(&amp;|$)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rquery = /\?/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rts = /(\?|&amp;)_=.*?(&amp;|$)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rurl = /^(\w+:)?\/\/([^\/?#]+)/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>r20 = /%20/g;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Keep a copy of the old load</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>_load: jQuery.fn.load,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>load: function( url, params, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof url !== "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this._load( url );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Don't do a request if no elements are being requested</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( !this.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var off = url.indexOf(" ");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( off &gt;= 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var selector = url.slice(off, url.length);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>url = url.slice(0, off);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Default to a GET request</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var type = "GET";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If the second parameter was provided</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( params ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If it's a function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( params ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We assume that it's the callback</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>callback = params;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>params = null;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Otherwise, build a param string</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( typeof params === "object" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>params = jQuery.param( params, jQuery.ajaxSettings.traditional );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = "POST";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = this;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Request the remote document</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.ajax({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>url: url,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type: type,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>dataType: "html",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data: params,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>complete: function( res, status ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If successful, inject the HTML into all the matched elements</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( status === "success" || status === "notmodified" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// See if a selector was specified</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.html( selector ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Create a dummy div to hold the results</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery("&lt;div /&gt;")</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// inject the contents of the document in, removing the scripts</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// to avoid any 'Permission Denied' errors in IE</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>.append(res.responseText.replace(rscript, ""))</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Locate the specified elements</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>.find(selector) :</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If not, just inject the full result</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>res.responseText );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.each( callback, [res.responseText, status, res] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>serialize: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.param(this.serializeArray());</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>serializeArray: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.map(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.elements ? jQuery.makeArray(this.elements) : this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>.filter(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.name &amp;&amp; !this.disabled &amp;&amp;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(this.checked || rselectTextarea.test(this.nodeName) ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>rinput.test(this.type));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>.map(function( i, elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var val = jQuery(this).val();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return val == null ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>null :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.isArray(val) ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.map( val, function( val, i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return { name: elem.name, value: val };</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>{ name: elem.name, value: val };</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}).get();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Attach a bunch of functions for handling common AJAX events</span></p>
<p class="p1"><span class="s1">jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function( i, o ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[o] = function( f ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.bind(o, f);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend({</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>get: function( url, data, callback, type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// shift arguments if data argument was omited</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( data ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = type || callback;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>callback = data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.ajax({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type: "GET",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>url: url,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data: data,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>success: callback,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>dataType: type</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>getScript: function( url, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.get(url, null, callback, "script");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>getJSON: function( url, data, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.get(url, data, callback, "json");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>post: function( url, data, callback, type ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// shift arguments if data argument was omited</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( data ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = type || callback;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>callback = data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = {};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.ajax({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type: "POST",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>url: url,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data: data,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>success: callback,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>dataType: type</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>ajaxSetup: function( settings ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.extend( jQuery.ajaxSettings, settings );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>ajaxSettings: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>url: location.href,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>global: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type: "GET",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>contentType: "application/x-www-form-urlencoded",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>processData: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>async: true,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>/*</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>timeout: 0,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data: null,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>username: null,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>password: null,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>traditional: false,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>*/</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Create the request object; Microsoft failed to properly</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// implement the XMLHttpRequest in IE7 (can't request local files),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// so we use the ActiveXObject when it is available</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// This function can be overriden by calling jQuery.ajaxSetup</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr: window.XMLHttpRequest &amp;&amp; (window.location.protocol !== "file:" || !window.ActiveXObject) ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return new window.XMLHttpRequest();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return new window.ActiveXObject("Microsoft.XMLHTTP");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) {}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>accepts: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xml: "application/xml, text/xml",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>html: "text/html",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script: "text/javascript, application/javascript",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>json: "application/json, text/javascript",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>text: "text/plain",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_default: "*/*"</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Last-Modified header cache for next request</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>lastModified: {},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>etag: {},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>ajax: function( origSettings ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var s = jQuery.extend(true, {}, jQuery.ajaxSettings, origSettings);</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var jsonp, status, data,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>callbackContext = origSettings &amp;&amp; origSettings.context || s,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>type = s.type.toUpperCase();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// convert data if not already a string</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.data &amp;&amp; s.processData &amp;&amp; typeof s.data !== "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.data = jQuery.param( s.data, s.traditional );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle JSONP Parameter Callbacks</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.dataType === "jsonp" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( type === "GET" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jsre.test( s.url ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.url += (rquery.test( s.url ) ? "&amp;" : "?") + (s.jsonp || "callback") + "=?";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( !s.data || !jsre.test(s.data) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.data = (s.data ? s.data + "&amp;" : "") + (s.jsonp || "callback") + "=?";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.dataType = "json";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Build temporary JSONP function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.dataType === "json" &amp;&amp; (s.data &amp;&amp; jsre.test(s.data) || jsre.test(s.url)) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jsonp = s.jsonpCallback || ("jsonp" + jsc++);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Replace the =? sequence both in the query string and the data</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.data ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.data = (s.data + "").replace(jsre, "=" + jsonp + "$1");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.url = s.url.replace(jsre, "=" + jsonp + "$1");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We need to make sure</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// that a JSONP style response is executed properly</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.dataType = "script";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle JSONP-style loading</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window[ jsonp ] = window[ jsonp ] || function( tmp ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = tmp;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>success();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>complete();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Garbage collect</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>window[ jsonp ] = undefined;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete window[ jsonp ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) {}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( head ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>head.removeChild( script );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.dataType === "script" &amp;&amp; s.cache === null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.cache = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.cache === false &amp;&amp; type === "GET" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ts = now();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// try replacing _= if it is there</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ret = s.url.replace(rts, "$1_=" + ts + "$2");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// if nothing was replaced, add timestamp to the end</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.url = ret + ((ret === s.url) ? (rquery.test(s.url) ? "&amp;" : "?") + "_=" + ts : "");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If data is available, append data to url for get requests</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.data &amp;&amp; type === "GET" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.url += (rquery.test(s.url) ? "&amp;" : "?") + s.data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Watch for a new set of requests</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.global &amp;&amp; ! jQuery.active++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.trigger( "ajaxStart" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Matches an absolute URL, and saves the domain</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var parts = rurl.exec( s.url ),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>remote = parts &amp;&amp; (parts[1] &amp;&amp; parts[1] !== location.protocol || parts[2] !== location.host);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If we're requesting a remote document</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// and trying to load JSON or Script with a GET</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.dataType === "script" &amp;&amp; type === "GET" &amp;&amp; remote ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var head = document.getElementsByTagName("head")[0] || document.documentElement;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var script = document.createElement("script");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script.src = s.url;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.scriptCharset ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script.charset = s.scriptCharset;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle Script loading</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jsonp ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var done = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Attach handlers for all browsers</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script.onload = script.onreadystatechange = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !done &amp;&amp; (!this.readyState ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.readyState === "loaded" || this.readyState === "complete") ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>done = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>success();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>complete();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle memory leak in IE</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>script.onload = script.onreadystatechange = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( head &amp;&amp; script.parentNode ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>head.removeChild( script );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Use insertBefore instead of appendChild<span class="Apple-converted-space">  </span>to circumvent an IE6 bug.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// This arises when a base node is used (#2709 and #4378).</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>head.insertBefore( script, head.firstChild );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We handle everything using the script element injection</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return undefined;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var requestDone = false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Create the request object</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var xhr = s.xhr();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !xhr ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Open the socket</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Passing null username, generates a login popup on Opera (#2865)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.username ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.open(type, s.url, s.async, s.username, s.password);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.open(type, s.url, s.async);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Need an extra try/catch for cross domain requests in Firefox 3</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set the correct header, if data is being sent</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.data || origSettings &amp;&amp; origSettings.contentType ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.setRequestHeader("Content-Type", s.contentType);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.ifModified ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.lastModified[s.url] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.setRequestHeader("If-Modified-Since", jQuery.lastModified[s.url]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.etag[s.url] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.setRequestHeader("If-None-Match", jQuery.etag[s.url]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set header so the called script knows that it's an XMLHttpRequest</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Only send the header if it's not a remote XHR</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !remote ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set the Accepts header for the server, depending on the dataType</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.setRequestHeader("Accept", s.dataType &amp;&amp; s.accepts[ s.dataType ] ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.accepts[ s.dataType ] + ", */*" :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.accepts._default );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) {}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Allow custom headers/mimetypes and early abort</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.beforeSend &amp;&amp; s.beforeSend.call(callbackContext, xhr, s) === false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle the global AJAX counter</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.global &amp;&amp; ! --jQuery.active ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.trigger( "ajaxStop" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// close opended socket</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.abort();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.global ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>trigger("ajaxSend", [xhr, s]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Wait for a response to come back</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var onreadystatechange = xhr.onreadystatechange = function( isTimeout ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// The request was aborted</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !xhr || xhr.readyState === 0 || isTimeout === "abort" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Opera doesn't call onreadystatechange before this point</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// so we simulate the call</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !requestDone ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>complete();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>requestDone = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( xhr ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.onreadystatechange = jQuery.noop;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// The transfer is complete and the data is available, or the request timed out</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( !requestDone &amp;&amp; xhr &amp;&amp; (xhr.readyState === 4 || isTimeout === "timeout") ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>requestDone = true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.onreadystatechange = jQuery.noop;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>status = isTimeout === "timeout" ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"timeout" :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>!jQuery.httpSuccess( xhr ) ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"error" :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.ifModified &amp;&amp; jQuery.httpNotModified( xhr, s.url ) ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"notmodified" :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>"success";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var errMsg;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( status === "success" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Watch for, and catch, XML document parse errors</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// process the data (runs the xml through httpData regardless of callback)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = jQuery.httpData( xhr, s.dataType, s );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(err) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>status = "parsererror";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>errMsg = err;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that the request was successful or notmodified</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( status === "success" || status === "notmodified" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// JSONP handles its own success callback</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !jsonp ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>success();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.handleError(s, xhr, status, errMsg);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Fire the complete handlers</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>complete();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( isTimeout === "timeout" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.abort();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Stop memory leaks</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.async ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Override the abort handler, if we can (IE doesn't allow it, but that's OK)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Opera doesn't fire onreadystatechange at all on abort</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var oldAbort = xhr.abort;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.abort = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( xhr ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>oldAbort.call( xhr );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>onreadystatechange( "abort" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) { }</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Timeout checker</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.async &amp;&amp; s.timeout &gt; 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>setTimeout(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Check to see if the request is still happening</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( xhr &amp;&amp; !requestDone ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>onreadystatechange( "timeout" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}, s.timeout);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Send the data</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.send( type === "POST" || type === "PUT" || type === "DELETE" ? s.data : null );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.handleError(s, xhr, null, e);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Fire the complete handlers</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>complete();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// firefox 1.5 doesn't fire statechange for sync requests</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !s.async ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>onreadystatechange();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function success() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If a local callback was specified, fire it and pass it the data</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.success ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.success.call( callbackContext, data, status, xhr );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Fire the global callback</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.global ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>trigger( "ajaxSuccess", [xhr, s] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function complete() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Process result</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.complete ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.complete.call( callbackContext, xhr, status);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// The request was completed</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.global ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>trigger( "ajaxComplete", [xhr, s] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Handle the global AJAX counter</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.global &amp;&amp; ! --jQuery.active ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.event.trigger( "ajaxStop" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function trigger(type, args) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(s.context ? jQuery(s.context) : jQuery.event).trigger(type, args);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// return XMLHttpRequest to allow aborting the request etc.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return xhr;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>handleError: function( s, xhr, status, e ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If a local callback was specified, fire it</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.error ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s.error.call( s.context || s, xhr, status, e );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Fire the global callback</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s.global ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(s.context ? jQuery(s.context) : jQuery.event).trigger( "ajaxError", [xhr, s, e] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Counter for holding the number of active queries</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>active: 0,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Determines if an XMLHttpRequest was successful or not</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>httpSuccess: function( xhr ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// IE error sometimes returns 1223 when it should be 204 so treat it as success, see #1450</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return !xhr.status &amp;&amp; location.protocol === "file:" ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Opera returns 0 when status is 304</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>( xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300 ) ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xhr.status === 304 || xhr.status === 1223 || xhr.status === 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} catch(e) {}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Determines if an XMLHttpRequest returns NotModified</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>httpNotModified: function( xhr, url ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var lastModified = xhr.getResponseHeader("Last-Modified"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>etag = xhr.getResponseHeader("Etag");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( lastModified ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.lastModified[url] = lastModified;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( etag ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.etag[url] = etag;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Opera returns 0 when status is 304</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return xhr.status === 304 || xhr.status === 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>httpData: function( xhr, type, s ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var ct = xhr.getResponseHeader("content-type") || "",</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>xml = type === "xml" || !type &amp;&amp; ct.indexOf("xml") &gt;= 0,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = xml ? xhr.responseXML : xhr.responseText;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( xml &amp;&amp; data.documentElement.nodeName === "parsererror" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.error( "parsererror" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Allow a pre-filtering function to sanitize the response</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// s is checked to keep backwards compatibility</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( s &amp;&amp; s.dataFilter ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = s.dataFilter( data, type );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// The filter can actually parse the response</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( typeof data === "string" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get the JavaScript object, if JSON is used.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( type === "json" || !type &amp;&amp; ct.indexOf("json") &gt;= 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>data = jQuery.parseJSON( data );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If the type is "script", eval it in global context</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( type === "script" || !type &amp;&amp; ct.indexOf("javascript") &gt;= 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.globalEval( data );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return data;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Serialize an array of form elements or a set of</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// key/values into a query string</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>param: function( a, traditional ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var s = [];</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set traditional to true for jQuery &lt;= 1.3.2 behavior.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( traditional === undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>traditional = jQuery.ajaxSettings.traditional;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If an array was passed in, assume that it is an array of form elements.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isArray(a) || a.jquery ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Serialize the form elements</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.each( a, function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>add( this.name, this.value );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If traditional, encode the "old" way (the way 1.3.2 or older</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// did it), otherwise encode params recursively.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var prefix in a ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>buildParams( prefix, a[prefix] );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Return the resulting serialization</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return s.join("&amp;").replace(r20, "+");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function buildParams( prefix, obj ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isArray(obj) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Serialize array item.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.each( obj, function( i, v ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( traditional ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Treat each array item as a scalar.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>add( prefix, v );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If array item is non-scalar (array or object), encode its</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// numeric index to resolve deserialization ambiguity issues.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Note that rack (as of 1.0.0) can't currently deserialize</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// nested arrays properly, and attempting to do so may cause</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// a server error. Possible fixes are to modify rack's</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// deserialization algorithm or to provide an option or flag</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// to force array serialization to be shallow.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>buildParams( prefix + "[" + ( typeof v === "object" || jQuery.isArray(v) ? i : "" ) + "]", v );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( !traditional &amp;&amp; obj != null &amp;&amp; typeof obj === "object" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Serialize object item.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.each( obj, function( k, v ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>buildParams( prefix + "[" + k + "]", v );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Serialize scalar item.</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>add( prefix, obj );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function add( key, value ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If value is a function, invoke it and return its value</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>value = jQuery.isFunction(value) ? value() : value;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>s[ s.length ] = encodeURIComponent(key) + "=" + encodeURIComponent(value);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">var elemdisplay = {},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rfxtypes = /toggle|show|hide/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>rfxnum = /^([+-]=)?([\d+-.]+)(.*)$/,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>timerId,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>fxAttrs = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// height animations</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// width animations</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// opacity animations</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>[ "opacity" ]</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>show: function( speed, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( speed || speed === 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.animate( genFx("show", 3), speed, callback);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = this.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var old = jQuery.data(this[i], "olddisplay");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this[i].style.display = old || "";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.css(this[i], "display") === "none" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var nodeName = this[i].nodeName, display;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elemdisplay[ nodeName ] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>display = elemdisplay[ nodeName ];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = jQuery("&lt;" + nodeName + " /&gt;").appendTo("body");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>display = elem.css("display");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( display === "none" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>display = "block";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.remove();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elemdisplay[ nodeName ] = display;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.data(this[i], "olddisplay", display);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set the display of the elements in a second loop</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// to avoid the constant reflow</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var j = 0, k = this.length; j &lt; k; j++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this[j].style.display = jQuery.data(this[j], "olddisplay") || "";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>hide: function( speed, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( speed || speed === 0 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.animate( genFx("hide", 3), speed, callback);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0, l = this.length; i &lt; l; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var old = jQuery.data(this[i], "olddisplay");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !old &amp;&amp; old !== "none" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.data(this[i], "olddisplay", jQuery.css(this[i], "display"));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set the display of the elements in a second loop</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// to avoid the constant reflow</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var j = 0, k = this.length; j &lt; k; j++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this[j].style.display = "none";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Save the old toggle function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>_toggle: jQuery.fn.toggle,</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>toggle: function( fn, fn2 ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var bool = typeof fn === "boolean";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction(fn) &amp;&amp; jQuery.isFunction(fn2) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this._toggle.apply( this, arguments );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else if ( fn == null || bool ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var state = bool ? fn : jQuery(this).is(":hidden");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery(this)[ state ? "show" : "hide" ]();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.animate(genFx("toggle", 3), fn, fn2);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>fadeTo: function( speed, to, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.filter(":hidden").css("opacity", 0).show().end()</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>.animate({opacity: to}, speed, callback);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>animate: function( prop, speed, easing, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var optall = jQuery.speed(speed, easing, callback);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isEmptyObject( prop ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each( optall.complete );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this[ optall.queue === false ? "each" : "queue" ](function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var opt = jQuery.extend({}, optall), p,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>hidden = this.nodeType === 1 &amp;&amp; jQuery(this).is(":hidden"),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self = this;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( p in prop ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var name = p.replace(rdashAlpha, fcamelCase);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( p !== name ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>prop[ name ] = prop[ p ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>delete prop[ p ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>p = name;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( prop[p] === "hide" &amp;&amp; hidden || prop[p] === "show" &amp;&amp; !hidden ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return opt.complete.call(this);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ( p === "height" || p === "width" ) &amp;&amp; this.style ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Store display property</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>opt.display = jQuery.css(this, "display");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that nothing sneaks out</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>opt.overflow = this.style.overflow;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isArray( prop[p] ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Create (if needed) and add to specialEasing</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(opt.specialEasing = opt.specialEasing || {})[p] = prop[p][1];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>prop[p] = prop[p][0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( opt.overflow != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.style.overflow = "hidden";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>opt.curAnim = jQuery.extend({}, prop);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.each( prop, function( name, val ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var e = new jQuery.fx( self, opt, name );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( rfxtypes.test(val) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e[ val === "toggle" ? hidden ? "show" : "hide" : val ]( prop );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var parts = rfxnum.exec(val),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>start = e.cur(true) || 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( parts ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var end = parseFloat( parts[2] ),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>unit = parts[3] || "px";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// We need to compute starting value</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( unit !== "px" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.style[ name ] = (end || 1) + unit;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>start = ((end || 1) / e.cur(true)) * start;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self.style[ name ] = start + unit;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// If a +=/-= token was provided, we're doing a relative animation</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( parts[1] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>end = ((parts[1] === "-=" ? -1 : 1) * end) + start;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e.custom( start, end, unit );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>e.custom( start, val, "" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// For JS strict compliance</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>stop: function( clearQueue, gotoEnd ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var timers = jQuery.timers;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( clearQueue ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.queue([]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// go in reverse order so anything added to the queue during the loop is ignored</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = timers.length - 1; i &gt;= 0; i-- ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( timers[i].elem === this ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if (gotoEnd) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// force the next step to be the last</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>timers[i](true);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>timers.splice(i, 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// start the next in the queue if the last step wasn't forced</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !gotoEnd ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.dequeue();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Generate shortcuts for custom animations</span></p>
<p class="p1"><span class="s1">jQuery.each({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>slideDown: genFx("show", 1),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>slideUp: genFx("hide", 1),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>slideToggle: genFx("toggle", 1),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>fadeIn: { opacity: "show" },</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>fadeOut: { opacity: "hide" }</span></p>
<p class="p1"><span class="s1">}, function( name, props ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[ name ] = function( speed, callback ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.animate( props, speed, callback );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>speed: function( speed, easing, fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var opt = speed &amp;&amp; typeof speed === "object" ? speed : {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>complete: fn || !fn &amp;&amp; easing ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.isFunction( speed ) &amp;&amp; speed,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>duration: speed,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>easing: fn &amp;&amp; easing || easing &amp;&amp; !jQuery.isFunction(easing) &amp;&amp; easing</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.fx.speeds[opt.duration] || jQuery.fx.speeds._default;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Queueing</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>opt.old = opt.complete;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>opt.complete = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( opt.queue !== false ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery(this).dequeue();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( opt.old ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>opt.old.call( this );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return opt;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>easing: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>linear: function( p, n, firstNum, diff ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return firstNum + diff * p;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>swing: function( p, n, firstNum, diff ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ((-Math.cos(p*Math.PI)/2) + 0.5) * diff + firstNum;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>timers: [],</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>fx: function( elem, options, prop ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.options = options;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.elem = elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.prop = prop;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !options.orig ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>options.orig = {};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fx.prototype = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Simple function for setting a style value</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>update: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.options.step ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.options.step.call( this.elem, this.now, this );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(jQuery.fx.step[this.prop] || jQuery.fx.step._default)( this );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set display property to block for height/width animations</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( ( this.prop === "height" || this.prop === "width" ) &amp;&amp; this.elem.style ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.elem.style.display = "block";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Get the current size</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>cur: function( force ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.elem[this.prop] != null &amp;&amp; (!this.elem.style || this.elem.style[this.prop] == null) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.elem[ this.prop ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var r = parseFloat(jQuery.css(this.elem, this.prop, force));</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return r &amp;&amp; r &gt; -10000 ? r : parseFloat(jQuery.curCSS(this.elem, this.prop)) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Start an animation from one number to another</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>custom: function( from, to, unit ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.startTime = now();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.start = from;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.end = to;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.unit = unit || this.unit || "px";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.now = this.start;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.pos = this.state = 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>function t( gotoEnd ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return self.step(gotoEnd);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>t.elem = this.elem;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( t() &amp;&amp; jQuery.timers.push(t) &amp;&amp; !timerId ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>timerId = setInterval(jQuery.fx.tick, 13);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Simple 'show' function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>show: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remember where we started, so that we can go back to it later</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.options.orig[this.prop] = jQuery.style( this.elem, this.prop );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.options.show = true;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Begin the animation</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Make sure that we start at a small width/height to avoid any</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// flash of content</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Start by showing the element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery( this.elem ).show();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Simple 'hide' function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>hide: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Remember where we started, so that we can go back to it later</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.options.orig[this.prop] = jQuery.style( this.elem, this.prop );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.options.hide = true;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Begin the animation</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.custom(this.cur(), 0);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// Each step of an animation</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>step: function( gotoEnd ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var t = now(), done = true;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( gotoEnd || t &gt;= this.options.duration + this.startTime ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.now = this.end;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.pos = this.state = 1;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.update();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.options.curAnim[ this.prop ] = true;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i in this.options.curAnim ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.options.curAnim[i] !== true ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>done = false;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( done ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.options.display != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Reset the overflow</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.elem.style.overflow = this.options.overflow;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Reset the display</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var old = jQuery.data(this.elem, "olddisplay");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.elem.style.display = old ? old : this.options.display;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.css(this.elem, "display") === "none" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.elem.style.display = "block";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Hide the element if the "hide" operation was done</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.options.hide ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery(this.elem).hide();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Reset the properties, if the item has been hidden or shown</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( this.options.hide || this.options.show ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var p in this.options.curAnim ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.style(this.elem, p, this.options.orig[p]);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Execute the complete function</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.options.complete.call( this.elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return false;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var n = t - this.startTime;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.state = n / this.options.duration;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Perform the easing function, defaults to swing</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var specialEasing = this.options.specialEasing &amp;&amp; this.options.specialEasing[this.prop];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var defaultEasing = this.options.easing || (jQuery.easing.swing ? "swing" : "linear");</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.pos = jQuery.easing[specialEasing || defaultEasing](this.state, n, 0, 1, this.options.duration);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.now = this.start + ((this.end - this.start) * this.pos);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Perform the next step of the animation</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.update();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return true;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.extend( jQuery.fx, {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>tick: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var timers = jQuery.timers;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>for ( var i = 0; i &lt; timers.length; i++ ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !timers[i]() ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>timers.splice(i--, 1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !timers.length ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.fx.stop();</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>stop: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>clearInterval( timerId );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>timerId = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>speeds: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>slow: 600,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> <span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span>fast: 200,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> <span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span>// Default speed</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space"> <span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span>_default: 400</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>step: {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>opacity: function( fx ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.style(fx.elem, "opacity", fx.now);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>_default: function( fx ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( fx.elem.style &amp;&amp; fx.elem.style[ fx.prop ] != null ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fx.elem.style[ fx.prop ] = (fx.prop === "width" || fx.prop === "height" ? Math.max(0, fx.now) : fx.now) + fx.unit;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>fx.elem[ fx.prop ] = fx.now;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">if ( jQuery.expr &amp;&amp; jQuery.expr.filters ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.expr.filters.animated = function( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.grep(jQuery.timers, function( fn ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return elem === fn.elem;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}).length;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function genFx( type, num ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var obj = {};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice(0,num)), function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>obj[ this ] = type;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return obj;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">if ( "getBoundingClientRect" in document.documentElement ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn.offset = function( options ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this[0];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( options ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function( i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.offset.setOffset( this, options, i );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem || !elem.ownerDocument ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem === elem.ownerDocument.body ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.offset.bodyOffset( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top<span class="Apple-converted-space">  </span>= box.top<span class="Apple-converted-space">  </span>+ (self.pageYOffset || jQuery.support.boxModel &amp;&amp; docElem.scrollTop<span class="Apple-converted-space">  </span>|| body.scrollTop ) - clientTop,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left = box.left + (self.pageXOffset || jQuery.support.boxModel &amp;&amp; docElem.scrollLeft || body.scrollLeft) - clientLeft;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return { top: top, left: left };</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn.offset = function( options ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this[0];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( options ) {<span class="Apple-converted-space"> </span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function( i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.offset.setOffset( this, options, i );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem || !elem.ownerDocument ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem === elem.ownerDocument.body ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return jQuery.offset.bodyOffset( elem );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.offset.initialize();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var offsetParent = elem.offsetParent, prevOffsetParent = elem,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>doc = elem.ownerDocument, computedStyle, docElem = doc.documentElement,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>body = doc.body, defaultView = doc.defaultView,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>prevComputedStyle = defaultView ? defaultView.getComputedStyle( elem, null ) : elem.currentStyle,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top = elem.offsetTop, left = elem.offsetLeft;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( (elem = elem.parentNode) &amp;&amp; elem !== body &amp;&amp; elem !== docElem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.offset.supportsFixedPosition &amp;&amp; prevComputedStyle.position === "fixed" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>break;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top<span class="Apple-converted-space">  </span>-= elem.scrollTop;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left -= elem.scrollLeft;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( elem === offsetParent ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top<span class="Apple-converted-space">  </span>+= elem.offsetTop;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left += elem.offsetLeft;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.offset.doesNotAddBorder &amp;&amp; !(jQuery.offset.doesAddBorderForTableAndCells &amp;&amp; /^t(able|d|h)$/i.test(elem.nodeName)) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top<span class="Apple-converted-space">  </span>+= parseFloat( computedStyle.borderTopWidth<span class="Apple-converted-space">  </span>) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left += parseFloat( computedStyle.borderLeftWidth ) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.offset.subtractsBorderForOverflowNotVisible &amp;&amp; computedStyle.overflow !== "visible" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top<span class="Apple-converted-space">  </span>+= parseFloat( computedStyle.borderTopWidth<span class="Apple-converted-space">  </span>) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left += parseFloat( computedStyle.borderLeftWidth ) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>prevComputedStyle = computedStyle;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top<span class="Apple-converted-space">  </span>+= body.offsetTop;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left += body.offsetLeft;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.offset.supportsFixedPosition &amp;&amp; prevComputedStyle.position === "fixed" ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top<span class="Apple-converted-space">  </span>+= Math.max( docElem.scrollTop, body.scrollTop );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left += Math.max( docElem.scrollLeft, body.scrollLeft );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return { top: top, left: left };</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.offset = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>initialize: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var body = document.body, container = document.createElement("div"), innerDiv, checkDiv, table, td, bodyMarginTop = parseFloat( jQuery.curCSS(body, "marginTop", true) ) || 0,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>html = "&lt;div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&lt;table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'&gt;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.extend( container.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" } );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>container.innerHTML = html;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>body.insertBefore( container, body.firstChild );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>innerDiv = container.firstChild;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkDiv = innerDiv.firstChild;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>td = innerDiv.nextSibling.firstChild.firstChild;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.doesNotAddBorder = (checkDiv.offsetTop !== 5);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.doesAddBorderForTableAndCells = (td.offsetTop === 5);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkDiv.style.position = "fixed", checkDiv.style.top = "20px";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// safari subtracts parent border width here which is 5px</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.supportsFixedPosition = (checkDiv.offsetTop === 20 || checkDiv.offsetTop === 15);</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>checkDiv.style.position = checkDiv.style.top = "";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>innerDiv.style.overflow = "hidden", innerDiv.style.position = "relative";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.doesNotIncludeMarginInBodyOffset = (body.offsetTop !== bodyMarginTop);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>body.removeChild( container );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>body = container = innerDiv = checkDiv = table = td = null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.offset.initialize = jQuery.noop;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>bodyOffset: function( body ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var top = body.offsetTop, left = body.offsetLeft;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.offset.initialize();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.offset.doesNotIncludeMarginInBodyOffset ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top<span class="Apple-converted-space">  </span>+= parseFloat( jQuery.curCSS(body, "marginTop",<span class="Apple-converted-space">  </span>true) ) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left += parseFloat( jQuery.curCSS(body, "marginLeft", true) ) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return { top: top, left: left };</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>setOffset: function( elem, options, i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// set position first, in-case top/left are set even on static elem</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( /static/.test( jQuery.curCSS( elem, "position" ) ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.style.position = "relative";</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var curElem <span class="Apple-converted-space">  </span>= jQuery( elem ),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>curOffset = curElem.offset(),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>curTop<span class="Apple-converted-space">    </span>= parseInt( jQuery.curCSS( elem, "top",<span class="Apple-converted-space">  </span>true ), 10 ) || 0,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>curLeft <span class="Apple-converted-space">  </span>= parseInt( jQuery.curCSS( elem, "left", true ), 10 ) || 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( options ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>options = options.call( elem, i, curOffset );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var props = {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top:<span class="Apple-converted-space">  </span>(options.top<span class="Apple-converted-space">  </span>- curOffset.top)<span class="Apple-converted-space">  </span>+ curTop,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left: (options.left - curOffset.left) + curLeft</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( "using" in options ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>options.using.call( elem, props );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>curElem.css( props );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">jQuery.fn.extend({</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>position: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !this[0] ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this[0],</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get *real* offsetParent</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>offsetParent = this.offsetParent(),</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get correct offsets</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>offset <span class="Apple-converted-space">      </span>= this.offset(),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parentOffset = /^body|html$/i.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Subtract element margins</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// note: when an element has margin: auto the offsetLeft and marginLeft</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// are the same in Safari causing offset.left to incorrectly be 0</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>offset.top<span class="Apple-converted-space">  </span>-= parseFloat( jQuery.curCSS(elem, "marginTop",<span class="Apple-converted-space">  </span>true) ) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>offset.left -= parseFloat( jQuery.curCSS(elem, "marginLeft", true) ) || 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Add offsetParent borders</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parentOffset.top<span class="Apple-converted-space">  </span>+= parseFloat( jQuery.curCSS(offsetParent[0], "borderTopWidth",<span class="Apple-converted-space">  </span>true) ) || 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>parentOffset.left += parseFloat( jQuery.curCSS(offsetParent[0], "borderLeftWidth", true) ) || 0;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Subtract the two offsets</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>top:<span class="Apple-converted-space">  </span>offset.top<span class="Apple-converted-space">  </span>- parentOffset.top,</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>left: offset.left - parentOffset.left</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>},</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>offsetParent: function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.map(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var offsetParent = this.offsetParent || document.body;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>while ( offsetParent &amp;&amp; (!/^body|html$/i.test(offsetParent.nodeName) &amp;&amp; jQuery.css(offsetParent, "position") === "static") ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>offsetParent = offsetParent.offsetParent;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return offsetParent;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Create scrollLeft and scrollTop methods</span></p>
<p class="p1"><span class="s1">jQuery.each( ["Left", "Top"], function( i, name ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var method = "scroll" + name;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[ method ] = function(val) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this[0], win;</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( val !== undefined ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set the scroll offset</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>win = getWindow( this );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( win ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>win.scrollTo(</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>!i ? val : jQuery(win).scrollLeft(),</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span> i ? val : jQuery(win).scrollTop()</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this[ method ] = val;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>win = getWindow( elem );</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Return the scroll offset</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return win ? ("pageXOffset" in win) ? win[ i ? "pageYOffset" : "pageXOffset" ] :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.support.boxModel &amp;&amp; win.document.documentElement[ method ] ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>win.document.body[ method ] :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem[ method ];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function getWindow( elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>return ("scrollTo" in elem &amp;&amp; elem.document) ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.nodeType === 9 ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.defaultView || elem.parentWindow :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>false;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">// Create innerHeight, innerWidth, outerHeight and outerWidth methods</span></p>
<p class="p1"><span class="s1">jQuery.each([ "Height", "Width" ], function( i, name ) {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>var type = name.toLowerCase();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// innerHeight and innerWidth</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn["inner" + name] = function() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this[0] ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.css( this[0], type, false, "padding" ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>// outerHeight and outerWidth</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn["outer" + name] = function( margin ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this[0] ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.css( this[0], type, false, margin ? "margin" : "border" ) :</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>null;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>jQuery.fn[ type ] = function( size ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get window width or height</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var elem = this[0];</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( !elem ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return size == null ? null : this;</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span></span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>if ( jQuery.isFunction( size ) ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return this.each(function( i ) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>var self = jQuery( this );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>self[ type ]( size.call( this, i, self[ type ]() ) );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>return ("scrollTo" in elem &amp;&amp; elem.document) ? // does it walk and quack like a window?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.document.compatMode === "CSS1Compat" &amp;&amp; elem.document.documentElement[ "client" + name ] ||</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.document.body[ "client" + name ] :</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get document width or height</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>(elem.nodeType === 9) ? // is it a document</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Either scroll[Width/Height] or offset[Width/Height], whichever is greater</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>Math.max(</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.documentElement["client" + name],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.body["scroll" + name], elem.documentElement["scroll" + name],</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>elem.body["offset" + name], elem.documentElement["offset" + name]</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>) :</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get or set width or height on the element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>size === undefined ?</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Get width or height on the element</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>jQuery.css( elem, type ) :</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>// Set the width or height on the element (default to pixels if value is unitless)</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span><span class="Apple-tab-span">	</span>this.css( type, typeof size === "string" ? size : size + "px" );</span></p>
<p class="p1"><span class="s1"><span class="Apple-tab-span">	</span>};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p1"><span class="s1">// Expose jQuery to the global object</span></p>
<p class="p1"><span class="s1">window.jQuery = window.$ = jQuery;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">})(window);</span></p>
</body>
</html>
