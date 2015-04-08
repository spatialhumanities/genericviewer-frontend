// TODO: nice comment explaining where to find info on this file

var punditConfig = {

	debugAllModules: false,

	annotationServerBaseURL: 'http://localhost/annotationserver/',

	vocabularies: ['http://www.spatialhumanities.de/fileadmin/bookmarklet/ibr_church_taxonomy.jsonp'],

	enableEntitiesExtraction: false,
	enablePageBookmark: true, /*TODO: Funktion unklar*/
	enableSemanticExpansion: true, /*TODO: Funktion unklar*/
	showSettings: false, /*TODO: Funktion unklar*/
	useBasicRelations: true, /*wichtig für Prädikate des Triple Composer*/ //TODO Felix: Wird das gezeigt?

	modules: {

		'pundit.TooltipAnnotationViewer': {
			debug: false
		},

		'pundit.ng.ImageAnnotatorHelper': {
			active: true,
			debug: true
		},

		'pundit.Help': {
			active: true
		},
		'pundit.NamedContentHandler': {
			active: false
		}/*,

		 'selectors': {},
		 'annotators': {}*/
	}

};
