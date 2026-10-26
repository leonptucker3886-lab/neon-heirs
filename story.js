// [speaker, text, opts]  opts: bg, ch, choice:[[label,{aff},goto]], fade, fork, end
const IMG={roof:"rooftop.jpg",kai:"kai.jpg",selene:"selene.jpg",kiss:"kiss.jpg"};
const SC={
prologue:[
 ["","Midnight at the Halcyon Tower. Ninety floors above a city that never stops glowing.",{bg:"roof",ch:null}],
 ["","You own the rooftop bar everyone wants, and you're the last piece in a war between two dynasties."],
 ["","The Vance family wants your lease. The Aurelios want your loyalty. Tonight, both heirs came in person."],
 ["KAI VANCE","Relax. I'm not here to buy you out. Not tonight, anyway.",{ch:"kai"}],
 ["KAI VANCE","I'm here because you're the only person in this city who doesn't flinch when I walk in. I like that."],
 ["SELENE AURELIO","He says that to everyone with a liquor license, darling.",{ch:"selene"}],
 ["SELENE AURELIO","I'll be honest, which is more than a Vance ever is. I want this bar. But I'd rather have you on my side.",{choice:[
  ["Pour Kai a whiskey. On the house.",{kai:2},"p2"],
  ["Mix Selene's martini. Extra dirty.",{selene:2},"p2"],
  ["\"Neither of you owns me. Sit down and behave.\"",{kai:1,selene:1},"p2"]]}]],
p2:[
 ["","Rain starts to fall. The bar empties until it's just you, two heirs and the hum of the city.",{ch:null}],
 ["KAI VANCE","Our fathers built this skyline by burning each other down. I'm tired of fire.",{ch:"kai"}],
 ["SELENE AURELIO","Kai's tired of losing. There's a difference.",{ch:"selene"}],
 ["SELENE AURELIO","A secret, free of charge: the Vance board votes tomorrow. If you sign with him tonight, he becomes CEO.",{choice:[
  ["Ask Kai if it's true.",{kai:1},"p3k"],
  ["Ask Selene what she gets out of telling you.",{selene:1},"p3s"]]}]],
p3k:[
 ["KAI VANCE","It's true. I didn't tell you because I didn't want you thinking that's why I came.",{ch:"kai"}],
 ["KAI VANCE","Three weeks ago you threw my lawyer out into the rain. I haven't stopped thinking about you since.",{choice:[
  ["\"Prove it. Stay after close.\"",{kai:3},"p4"],
  ["\"Nice speech. Selene, your turn.\"",{selene:2},"p4"]]}]],
p3s:[
 ["SELENE AURELIO","Honestly? I get to watch him squirm. And I get you to myself for a while.",{ch:"selene"}],
 ["SELENE AURELIO","Everyone in my family sees people as assets. You're the first person I've wanted to see as something else.",{choice:[
  ["\"Then stay after close and show me.\"",{selene:3},"p4"],
  ["\"Kai, are you going to let her win?\"",{kai:2},"p4"]]}]],
p4:[
 ["","A slow song comes on. Somebody has to ask somebody to dance.",{ch:null}],
 ["","Kai offers his hand. Selene raises an eyebrow, daring you.",{choice:[
  ["Dance with Kai, close and slow.",{kai:2},"p5"],
  ["Let Selene lead.",{selene:2},"p5"],
  ["Stay behind the bar and watch them both burn.",{},"p5"]]}]],
p5:[
 ["","Between songs you find an envelope under the register. Inside: proof that someone bribed the city to shut you down.",{ch:null}],
 ["KAI VANCE","That's my father's signature. I swear I didn't know.",{ch:"kai"}],
 ["SELENE AURELIO","And that's my uncle's bank. So we're both guilty by blood.",{ch:"selene"}],
 ["","Who do you trust with it?",{ch:null,choice:[
  ["Give it to Kai. Let him choose you over his father.",{kai:3},"fork"],
  ["Give it to Selene. Let her burn her family's secrets.",{selene:3},"fork"],
  ["Keep it. Leverage is leverage.",{},"fork"]]}]],
fork:[["","Last call. One of them lingers by the railing, waiting to see who you'll walk toward.",{ch:null,fork:1}]],
kai:[
 ["KAI VANCE","Everyone else left. Good.",{ch:"kai"}],
 ["KAI VANCE","Tomorrow I can be CEO, or I can be the man who skipped the vote to stand in the rain with you.",{choice:[
  ["\"Go win. I'll be here after.\"",{kai:1},"kai2"],
  ["\"Stay. Just tonight, forget the empire.\"",{kai:2},"kai2"]]}]],
kai2:[
 ["","He steps close enough that you feel the heat of him through the cold rain.",{ch:null}],
 ["KAI VANCE","Tell me to stop and I will."],
 ["","You don't.",{bg:"kiss"}],
 ["","The city blurs into gold. His hand finds your cheek, and the war between two dynasties stops mattering at all."],
 ["","Inside, the door clicks shut behind you both...",{fade:1}],
 ["","Morning. Coffee for two. A text from the board: \"Where are you?\" He turns his phone face down and pulls you back in.",{bg:"roof",end:"kai"}]],
selene:[
 ["SELENE AURELIO","He left. I knew he would. Vances never stay when it rains.",{ch:"selene"}],
 ["SELENE AURELIO","My family wants me to take this bar from you. I'd rather take you to dinner. Then breakfast.",{choice:[
  ["\"Skip dinner.\"",{selene:2},"sel2"],
  ["\"Dinner first. Make me wait.\"",{selene:1},"sel2"]]}]],
sel2:[
 ["","She sets the martini down and closes the distance in two slow steps, heels clicking on the wet tile."],
 ["SELENE AURELIO","Secrets for secrets, darling. Mine: I never wanted the empire. I wanted someone who didn't want it either."],
 ["","Her lips taste like gin and lightning. The skyline flickers like it's holding its breath."],
 ["","She takes your hand and leads you past the velvet rope...",{fade:1}],
 ["","Sunrise over the Halcyon. Her red hair across your pillow, her family's lawyers calling unanswered. Some deals are worth breaking.",{ch:null,bg:"roof",end:"selene"}]],
solo:[["","You lock up alone. Both heirs watch you go: intrigued, unsatisfied, and absolutely coming back tomorrow.",{ch:null,end:"solo"}]]
};
const ENDS={kai:["THE HEIR WHO STAYED","Kai Vance ending"],selene:["SECRETS FOR SECRETS","Selene Aurelio ending"],solo:["LAST CALL","Solo ending: raise one heir's heart higher to unlock their route."]};
