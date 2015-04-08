/*Initialisierung von Pundit innerhalb eines vorgegebenen DIV*/
/*
 Pundit: a novel semantic web annotation tool
 Copyright (c) 2013 Net7 SRL, <http://www.netseven.it/>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 See LICENSE.TXT or visit http://thepund.it for the full text of the license.
 */
(function () {
	var h = document.getElementsByTagName('head')[0],
			d = document.createElement('script'),
			l = document.createElement('link');

	l.rel = 'stylesheet';
	l.href = 'http://www.spatialhumanities.de/fileadmin/bookmarklet/pundit.css';
	l.type = 'text/css';
	l.media = 'screen';
	l.charset = 'utf-8';
	h.appendChild(l);

	// Important: without var !!
	punditConfig = {

		debugAllModules: true,
		vocabularies: [
			'http://www.spatialhumanities.de/fileadmin/bookmarklet/ibr_church_taxonomy.jsonp',
			'http://www.spatialhumanities.de/fileadmin/bookmarklet/ibr_church_properties.jsonp'//,
			//     'http://www.spatialhumanities.de/fileadmin/bookmarklet/ibr_church_taxonomy_hierarchical.jsonp',
			//      'http://www.spatialhumanities.de/fileadmin/bookmarklet/daphnetModern.jsonp',
			//    'http://www.spatialhumanities.de/fileadmin/bookmarklet/wittgenstein-taxonomy.jsonp',
			//  		        'http://www.spatialhumanities.de/fileadmin/bookmarklet/wittgenstein-relations.jsonp',
			//		        'http://www.spatialhumanities.de/fileadmin/bookmarklet/daphnetProperties.jsonp'
		],
		modules: {

			'pundit.Help': {
				introductionFile: 'http://metasound.dibet.univpm.it/timelinejs/pundit_conf/timeline-introduction.html',//todo: ersetzen.
				introductionWindowTitle: 'IBR | Semantische Textannotation',
				showIntroductionAtLogin: true
			},
			'pundit.NotebookManager': {
				active: true,
				notebookSharing: false,
				notebookActivation: false,
				showFilteringOptions: true,
				askBaseURL: 'http://adwserv58.adwudlit.uni-mainz.de/#/myNotebooks/'
			}/*,

			 'selectors': {
			 },
			 'annotators': {
			 }*/
		},

		enableEntitiesExtraction: false,
		enablePageBookmark: true, /*todo: Funktion unklar*/
		enableSemanticExpansion: true, /*todo: Funktion unklar*/
		showSettings: true, /*todo: Funktion unklar*/
		useBasicRelations: true /*wichtig für Prädikate des Triple Composer*/ //todo Felix: Wird das gezeigt?

	};

	djConfig = {
		isDebug: false,//edit Felix: Problem: Ist nicht kompiliert => Konsolenoutput funktioniert jedoch
		afterOnLoad: true,
		useXDomain: true,
		baseUrl: "http://www.spatialhumanities.de/fileadmin/bookmarklet/",
		require: ["dojo.Bookmarklet"]
	};
	d.type = 'text/javascript';
	d.src = 'http://www.spatialhumanities.de/fileadmin/bookmarklet/dojo.xd.js';
	h.appendChild(d);

})();
