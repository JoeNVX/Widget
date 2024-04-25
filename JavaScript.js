<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2022.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">let piafsVotes = 0;</p>
<p class="p1">let zoraVotes = 0;</p>
<p class="p1">let goronVotes = 0;</p>
<p class="p2"><br></p>
<p class="p1">function vote(option) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>switch(option) {</p>
<p class="p1"><span class="Apple-converted-space">        </span>case 'piafs':</p>
<p class="p1"><span class="Apple-converted-space">            </span>piafsVotes++;</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById('piafs-votes').textContent = piafsVotes;</p>
<p class="p1"><span class="Apple-converted-space">            </span>break;</p>
<p class="p1"><span class="Apple-converted-space">        </span>case 'zora':</p>
<p class="p1"><span class="Apple-converted-space">            </span>zoraVotes++;</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById('zora-votes').textContent = zoraVotes;</p>
<p class="p1"><span class="Apple-converted-space">            </span>break;</p>
<p class="p1"><span class="Apple-converted-space">        </span>case 'goron':</p>
<p class="p1"><span class="Apple-converted-space">            </span>goronVotes++;</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById('goron-votes').textContent = goronVotes;</p>
<p class="p1"><span class="Apple-converted-space">            </span>break;</p>
<p class="p1"><span class="Apple-converted-space">        </span>default:</p>
<p class="p1"><span class="Apple-converted-space">            </span>break;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">}</p>
</body>
</html>
