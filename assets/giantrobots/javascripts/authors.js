jQuery(document).ready(function() {
	authors = {
		dancroak: "Dan Croak",
		qrush: "Nick Quaranto",
		cpytel: "Chad Pytel",
		lolconomy: "Mike Burns",
		asimeoni: "Angelo Simeoni",
		emill: "Eric Mill",
		fyates: "Fred Yates",
		jankowski: "Matt Jankowski",
		jferris: "Joe Ferris",
		jyurek: "Jon Yurek",
		kevin: "Kevin Burg",
		possibilist: "Floyd Wright",
		tsaleh: "Tammer Saleh",
		thoughtbotjc: "Jared Carroll",
		thoughtbotet: "Eric Torrey",
		thoughtbotjm: "Jason Martinez",
		thoughtbotmmk: "Mike McKenna",
		thoughtbotmr: "Micah Rich",
		jasonmorrisontb: "Jason Morrison",
		jdclayton: "Josh Clayton",
		tristandunn: "Tristan Dunn",
		ubuwaits: "Chad Mazzola",
		kylehasmanypixels: "Kyle Fiedler",
		hgimenez: "Harold Giménez",
		elindsay: "Emma Lindsay",
    mmongeau: "Matt Mongeau",
    plapier: "Phil LaPier"
	};

	jQuery(".author").each(function(i) {
		author = this.innerHTML;
		this.innerHTML = this.innerHTML.replace(author, authors[author]||author);
	});
});
