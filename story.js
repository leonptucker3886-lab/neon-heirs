// [speaker, text, opts]  opts: bg, ch, choice:[[label,{aff},goto]], fade, fork, end
const IMG={roof:"rooftop.jpg",kai:"kai.jpg",selene:"selene.jpg",kiss:"kiss.jpg",rio:"rio.jpg",vip:"vip.jpg",masq:"masq.jpg",tub:"tub.jpg",yacht:"yacht.jpg",pent:"pent.jpg",cgSm:"cg_selene_masq.jpg",cgSt:"cg_selene_tub.jpg",cgKm:"cg_kai_morning.jpg",cgRy:"cg_rio_yacht.jpg"};
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
  ["Give it to Kai. Let him choose you over his father.",{kai:3},"a2"],
  ["Give it to Selene. Let her burn her family's secrets.",{selene:3},"a2"],
  ["Keep it. Leverage is leverage.",{},"a2"]]}]],
a2:[
 ["","ACT II · THE VIP LOUNGE. Two a.m. Neither heir has left. Someone unlocks the velvet door behind the bar.",{bg:"vip",ch:null}],
 ["RIO NAVARRO","Relax, I have a key. Who do you think fills your top shelf with bottles that don't officially exist?",{ch:"rio"}],
 ["","Rio Navarro: DJ, smuggler, and the only man both dynasties owe money to. His shirt has given up on buttons entirely."],
 ["RIO NAVARRO","A Vance and an Aurelio, sharing oxygen. And you in the middle. Lucky you. Lucky me."],
 ["KAI VANCE","Navarro. Of course it's you.",{ch:"kai"}],
 ["SELENE AURELIO","Don't look so jealous, Kai. It wrinkles the suit.",{ch:"selene"}],
 ["RIO NAVARRO","Masquerade at the Gilded Penthouse in an hour. Masks on, rules off. You're coming, bartender.",{ch:"rio",choice:[
  ["\"Only if you're my date.\"",{rio:3},"a2b"],
  ["Pull Kai closer by his tie. \"He's my date.\"",{kai:3},"a2b"],
  ["Sip Selene's martini from her side of the glass.",{selene:3},"a2b"]]}]],
a2b:[
 ["","The air goes hot and tight. Three people watching you, all pretending not to watch each other.",{ch:null}],
 ["RIO NAVARRO","Truth or dare, lounge rules. Loser buys the bottle. Winner picks a kiss.",{ch:"rio",choice:[
  ["Dare Kai to unbutton that perfect shirt.",{kai:2,rio:1},"a2c"],
  ["Dare Selene to sit in your lap for the next round.",{selene:2,rio:1},"a2c"],
  ["Dare Rio to tell the truth for once.",{rio:2},"a2c"]]}]],
a2c:[
 ["","The dare lands. Laughter, a slow burn, eye contact that lasts far too long.",{ch:null}],
 ["SELENE AURELIO","Careful, darling. Games like this are how empires fall.",{ch:"selene"}],
 ["KAI VANCE","Then let them fall. I'm done playing fair.",{ch:"kai"}],
 ["","Masks are handed out at the door. Gold, black, crimson. The night is only getting started.",{ch:null,go:"a3m"}]],
a3m:[
 ["","ACT III · THE MASQUERADE. Chandeliers, gold confetti, strangers in silk. Behind a mask, everyone is braver.",{bg:"masq",ch:null}],
 ["","A woman in a gold lace mask leans on a pillar, one finger to her lips. You'd know that red hair anywhere.",{bg:"cgSm"}],
 ["SELENE AURELIO","Shh. Tonight I'm nobody's heiress. Dance with me before someone remembers my name."],
 ["","Kai watches from across the ballroom, jaw tight. On the balcony, Rio raises a glass toward the stairs.",{bg:"masq",choice:[
  ["Dance with Selene, slow and much too close.",{selene:3},"a3s"],
  ["Cross the room and take Kai's hand.",{kai:3},"a3k"],
  ["Follow Rio up the stairs.",{rio:3},"a3r"]]}]],
a3s:[
 ["SELENE AURELIO","You lead like you've thought about this. A lot.",{ch:"selene"}],
 ["","Her hand slides to the small of your back. The song ends. Neither of you lets go.",{ch:null}],
 ["SELENE AURELIO","There's a hot tub on the roof. Bring the champagne.",{ch:"selene",go:"a4"}]],
a3k:[
 ["KAI VANCE","You danced with her. You laughed at his jokes. I've never been jealous in my life.",{ch:"kai"}],
 ["","He pulls you behind a crimson curtain. His mask comes off first. Then his jacket.",{ch:null}],
 ["KAI VANCE","Tell me I'm not imagining this.",{ch:"kai",go:"a4"}]],
a3r:[
 ["RIO NAVARRO","Penthouse parties are boring. My boat isn't. But first, the roof. Everyone's heading up.",{ch:"rio"}],
 ["","He grins like a man who has never once been told no.",{ch:null,go:"a4"}]],
a4:[
 ["","ACT IV · THE ROOFTOP. Steam rises into neon rain. Candles along the hot tub, robes on the lounger, an open bottle.",{bg:"tub",ch:null}],
 ["","Selene is already in the water, red hair dark with rain, champagne in hand.",{bg:"cgSt"}],
 ["SELENE AURELIO","Took you long enough. Get in. The water's warm and I'm feeling generous."],
 ["","Footsteps. Kai, sleeves rolled, tie gone. Rio, still masked, laughing as he kicks off his shoes.",{bg:"tub"}],
 ["RIO NAVARRO","Private party, or can anyone confess their sins?",{ch:"rio"}],
 ["","Four people. One hot tub. A lot of rain and very little self-control.",{ch:null,choice:[
  ["Slide in beside Selene. Let her pour for you.",{selene:3},"a4b"],
  ["Sit on the edge with Kai, his hand on your knee.",{kai:3},"a4b"],
  ["Let Rio pull you in, clothes and all.",{rio:3},"a4b"],
  ["\"Everyone in. No secrets tonight.\"",{kai:2,selene:2,rio:2},"a4b"]]}]],
a4b:[
 ["","Truths come out in the steam. Selene's family is broke. Kai's father has a second family. Rio has wanted this bar for years, and maybe its owner.",{ch:null}],
 ["KAI VANCE","Whatever happens tonight, I don't want to be a Vance tomorrow.",{ch:"kai"}],
 ["SELENE AURELIO","Then don't. Be someone's instead.",{ch:"selene"}],
 ["RIO NAVARRO","The boat leaves at four. The penthouse bedroom is empty. This tub isn't going anywhere. Your call, boss.",{ch:"rio"}],
 ["","Somebody's going to wake up with you. Maybe more than somebody.",{ch:null,choice:[
  ["Take the penthouse key.",{kai:2},"a4c"],
  ["Take Rio's hand and run for the docks.",{rio:2},"a4c"],
  ["Stay in the water until sunrise.",{selene:2},"a4c"],
  ["Keep everyone exactly where they are.",{kai:1,selene:1,rio:1},"a4c"]]}]],
a4c:[["","Last call, for real this time.",{ch:null,fork:1}]],
kai:[
 ["","THE PENTHOUSE. Satin sheets, discarded heels, his tie on the floor where you threw it.",{bg:"pent",ch:null}],
 ["KAI VANCE","Tomorrow I can be CEO, or the man who skipped the vote to stay here with you.",{ch:"kai",choice:[
  ["\"Go win. I'll be here after.\"",{kai:1},"kai2"],
  ["\"Stay. Forget the empire.\"",{kai:2},"kai2"]]}]],
kai2:[
 ["","He crosses the room slowly, unbuttoning his cuffs one at a time, watching you the whole way.",{ch:null}],
 ["KAI VANCE","Tell me to stop and I will."],
 ["","You don't.",{bg:"kiss"}],
 ["","His mouth on yours, the city blurred to gold. Your hands find his shirt buttons and stop being patient."],
 ["","The lamp clicks off...",{fade:1}],
 ["","Sunrise. He sits on the edge of the bed in last night's shirt, two coffees in hand, like the board meeting doesn't exist.",{bg:"cgKm"}],
 ["KAI VANCE","Forty-one missed calls. I've never been happier.",{end:"kai"}]],
selene:[
 ["","Dawn turns the steam pink. The others are gone. Selene drifts closer, her glass abandoned on the tile.",{bg:"cgSt",ch:null}],
 ["SELENE AURELIO","Secrets for secrets, darling. I never wanted the empire. I wanted someone who didn't want it either.",{choice:[
  ["\"Then stop talking.\"",{selene:2},"sel2"],
  ["\"Tell me another secret first.\"",{selene:1},"sel2"]]}]],
sel2:[
 ["","Her lips taste like gin and lightning. Wet hands slide up your back, slow and deliberate.",{bg:"kiss"}],
 ["SELENE AURELIO","Inside. Now. Before I forget I'm a lady."],
 ["","Robes left on the lounger, wet footprints to the penthouse door...",{fade:1}],
 ["","Noon. Her red hair across your pillow, her family's lawyers calling unanswered. Some deals are worth breaking.",{bg:"pent",end:"selene"}]],
rio:[
 ["","THE YACHT. Moonlight on black water, the city glittering across the bay.",{bg:"yacht",ch:null}],
 ["","Rio climbs aboard from a midnight swim, dripping, towel on one shoulder, grinning like he stole the moon.",{bg:"cgRy"}],
 ["RIO NAVARRO","Everyone in this city wants something from you. I just want the next six hours.",{choice:[
  ["\"Make them count.\"",{rio:2},"rio2"],
  ["Pull him down onto the lounger by his chain.",{rio:3},"rio2"]]}]],
rio2:[
 ["","He tastes like salt and rum. His laugh against your neck turns into something lower.",{bg:"yacht",ch:null}],
 ["RIO NAVARRO","Captain's cabin is downstairs. Better view from the bed.",{ch:"rio"}],
 ["","The cabin door swings shut with the tide...",{ch:null,fade:1}],
 ["","Dawn at sea. No signal, no dynasties. Just him in a towel, humming off-key, making terrible coffee.",{end:"rio"}]],
trio:[
 ["","Nobody leaves. Not Kai, not Selene, not Rio. Four people in the steam, the city falling asleep below.",{bg:"tub",ch:null}],
 ["SELENE AURELIO","We could fight over you. Or we could stop pretending we want to.",{ch:"selene"}],
 ["KAI VANCE","For once, I don't want to win. I just want in.",{ch:"kai"}],
 ["RIO NAVARRO","Penthouse has a very large bed. I checked.",{ch:"rio"}],
 ["","Three hands reach for yours at once...",{ch:null,fade:1}],
 ["","Morning. A tangle of satin sheets, three heartbeats, two dynasties in ruins and one bar that answers to no one.",{bg:"pent",end:"trio"}]],
solo:[["","You lock up alone. All three watch you go: intrigued, unsatisfied, and absolutely coming back tomorrow.",{bg:"roof",ch:null,end:"solo"}]]
};
const ENDS={kai:["THE HEIR WHO STAYED","Kai Vance ending"],selene:["SECRETS FOR SECRETS","Selene Aurelio ending"],rio:["LOST AT SEA","Rio Navarro ending"],trio:["KINGDOM OF THREE","Secret ending: win over all three."],solo:["LAST CALL","Solo ending: raise someone's heart higher to unlock their route."]};
