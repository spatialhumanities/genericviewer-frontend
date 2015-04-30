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
/**
 * @class pundit.Configuration
 * @extends pundit.baseComponent
 * @description This component deals with the various layers of Pundit
 * configuration.<br>
 * These layers are: <br>
 * 1. component defaults <br>
 * 2. global Configuration defaults <br>
 * 3. user supplied configuration file <br>
 * 4. parameters passed to the component constructor <br>
 * When initialized, the Configuration module will merge the levels 2 and
 * 3, creating the .config field in the global pundit live object (_PUNDIT).<br>
 * When a component is initialized its final .opts field will be a merge
 * of all of those levels: 4 being the higher priority.<br>
 */
//  var vocabServerBase=
dojo.provide("pundit.Configuration");
dojo.declare("pundit.Configuration", pundit.BaseComponent, {

	defaults: {

		/**
		 * @property punditConfig.annotationServerBaseURL
		 * @type string
		 * @description Absolute base URL of the Pundit server side APIs, ending
		 * with /
		 * @default http://demo.as.thepund.it:8088/annotationserver/
		 */
		annotationServerBaseURL: 'http://localhost:8095/annotationserver/',//EXTERNAL_SERVER_ADDRESS

		/**
		 * @property punditConfig.debugAllModules
		 * @type boolean
		 * @description Activates/deactivates debug mode for every component
		 * @default false
		 */
		debugAllModules: true,//Felix true

		/**
		 * @property punditConfig.enableSemanticExpansion
		 * @type boolean
		 * @description Enables/disables the link to LodLive for exploring Linked Data around items
		 * @default false
		 */
		enableSemanticExpansion: false,

		/**
		 * @property punditConfig.enableEntitiesExtraction
		 * @type boolean
		 * @description Enables/disables the automatic entitities extraction from text in the page
		 * @default false
		 */
		enableEntitiesExtraction: false,
		entityExtractor: "data-txt", // possible values "dbpedia-spotlight" | "data-txt" | "civet"

		/**
		 * @property punditConfig.vocabularies
		 * @type array or URLs
		 * @description Specifies vocaularies that will be available to Pundit users.
		 * Vocabularies have a unique name and a description. They can be of different
		 * types: taxonomy (defines a hierarchy of terms), relations (defines a list
		 * of relations with domain and ranges). Each vocabulary definition is a JSONP
		 * file available on the Web and is loaded by resolving an absolute URL.
		 */

		/**
		 * @property punditConfig.enableEntitiesExtraction
		 * @type boolean
		 * @description Enables/disables the automatic entitities extraction from text in the page
		 * @default false
		 */
		enableEntitiesExtraction: false,
		entityExtractor: "data-txt", // possible values "dbpedia-spotlight" | "data-txt" | "civet"

		vocabularies: ['http://localhost:8095/viewer/punditclient/pundit/build/examples/vocabs/ibr_church_taxonomy.jsonp'],//EXTERNAL_SERVER_ADDRESS
		/**
		 * @property punditConfig.useBasicRelations
		 * @type boolean
		 * @description Loads Pundit's basic relations
		 * @default true
		 */
		useBasicRelations: true,

						basicRelations: {
							"name": "basic_relations",
							"description": "An IBR-specific selection of RDF properties",
							"type": "relations",
							"label": "label",
							"identifier": "value",
							"items": [
								{
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P53_has_former_or_current_location","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Has Former Or Current Location",
									"description": "This property allows an instance of a Place to be associated as the former or current location of an instance of a Physical Thing",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/hasFormerOrCurrentLocation"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P62i_is_depicted_by","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Is Depicted By",
									"description": "This property identifies something that is depicted by an instance of a Physical Man-Made Thing",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isDepictedBy"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P87_is_identified_by","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Is Identified By",
									"description": "This property identifies a Place using a Place Appellation. Examples of Place Appellations used to identify Places include instances of Place Names, addresses, Spatial Coordinates etc.",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isIdentifiedBy"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P67_refers_to","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Refers To",
									"description": "This property documents that an propositional object makes a statement about an instance of an entity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/refersTo"
								},
							  {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P59i_is_located_on_or_within","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Is Located On Or Within",
									"description": "This property links an area to the instance of a Physical Thing upon which it is found",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isLocatedOnOrWithin"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Was Located On Or Within",
									"description": "This property links an earlier position to the instance of a Physical Thing (NOT from CIDOC-CRM)",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/wasLocatedOnOrWithin"
								},
                {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P45_consists_of","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Consists Of",
									"description": "This property identifies the instances of materials of which an instance of Physical Thing is composed. All physical things consist of physical materials. Consists of (is incorporated in) allows the different materials to be recorded. Consists of (is incorporated in) refers here to observed material as opposed to the consumed raw material",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/consistsOf"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P27i_was_origin_of","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Was Origin Of",
									"description": "This property identifies the starting Place of an movement",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/wasOriginOf"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P26i_was_destination_of","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Was Destination Of",
									"description": "This property identifies the destination of a movement",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/wasDestinationOf"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P25_moved","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Moved",
									"description": "This property identifies the Physical Object that is moved during a move event. The property implies the object?s passive participation. For example, Monet?s painting ?Impression sunrise? was moved for the first Impressionist exhibition in 1874. In reality, a move must concern at least one object",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/moved"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P20_had_specific_purpose","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Had Specific Purpose",
									"description": "This property identifies the relationship between a preparatory activity and the event it is intended to be preparation for. This includes activities, orders and other organisational actions, taken in preparation for other activities or events",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/hadSpecificPurpose"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P16i_was_used_for","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Was Used For",
									"description": "This property describes the use of material or immaterial things in a way essential to the performance or the outcome of an Activity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/wasUsedFor"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P16_used_specific_object","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Used Specific Object",
									"description": "This property describes the use of material or immaterial things in a way essential to the performance or the outcome of an Activity. This property typically applies to tools, instruments, moulds, raw materials and items embedded in a product. It implies that the presence of the object in question was a necessary condition for the action.",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/usedSpecificObject"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P14_carried_out_by","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Carried Out By",
									"description": "This property describes the active participation of an Actor in an Activity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/carriedOutBy"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P8_took_place_on_or_within","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Took Place On Or Within",
									"description": "This property describes the spatial location of an instance of an event on our within a physical object or place",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/TookPlaceOnOrWithin"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://www.cidoc-crm.org/cidoc-crm/P7_took_place_at","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Took Place At",
									"description": "This property describes the spatial location of an instance of an event",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/TookPlaceAt"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://purl.org/dc/terms/references","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "References",
									"description": "A related resource that is referenced, cited, or otherwise pointed to by the described resource",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/References"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://purl.org/dc/terms/isPartOf","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Is Part Of",
									"description": "A related resource in which the described resource is physically or logically included",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isPartOf"
								},
              {
									"type": ["predicate"],
									"rdftype": ["http://www.europeana.eu/schemas/edm/occurredAt","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Occurred At",
									"description": "This property associates an event to the smallest known time span that overlaps with the occurrence of that event",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/OccurredAt"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://purl.org/dc/terms/isReplacedBy","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Is Replaced By",
									"description": "A related resource that supplants, displaces, or supersedes the described resource",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isReplacedBy"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://purl.org/dc/terms/isReferencedBy","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Is Referenced By",
									"description": "A related resource that references, cites, or otherwise points to the described resource",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isReferencedBy"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://purl.org/dc/terms/hasPart","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Has Part",
									"description": "A related resource that is included either physically or logically in the described resource",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/hasPart"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://www.europeana.eu/schemas/edm/wasPresentAt","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Was Present At",
									"description": "This property associates the people, things or information resources with an event at which they were present",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/wasPresentAt"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://voc.spatialhumanities.de/ibr/properties/isSpatiallyRelatedTo","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Is Spatially Related to",
									"description": "The object has a spatial connection with another object",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isSpatiallyRelatedTo"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://voc.spatialhumanities.de/ibr/properties/isHeraldicallyRelatedTo","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Is Heraldically Related to",
									"description": "Two objects carry the same heraldic signs",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isHeraldicallyRelatedTo"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://voc.spatialhumanities.de/ibr/properties/isHeraldicallyRelatedTo","http://www.w3.org/1999/02/22-rdf-syntax-ns#Property"],
									"label": "Is Family-Related to",
									"description": "The object referring to a historical family has a connection with another object which is related to the same family",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isFamily-RelatedTo"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/isReminiscentOf"],
									"label": "Is Reminiscent Of",
									"description": "The Object is reminiscent of a historical person",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isReminiscentOf"
								},
               {
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/isRituallyRelatedTo"],
									"label": "Is Ritually Related To",
									"description": "The object is part of a ritual act or concept",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isRituallyRelatedTo"
								},
                {
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/isFunctionallyRelatedTo"],
									"label": "Is Functionally Related to",
									"description": "The Object has a special conceptual or referential function in relation to another object or event",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isFunctionallyRelatedTo"
								},
                {
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/isActiveOn"],
									"label": "Is Active On",
									"description": "The function of the object comes into effect on a specific date",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isActiveOn"
								},
                {
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/PersonIdenticalTo"],
									"label": "Is Personnel Identical To",
									"description": "identity between persons",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/PersonIdenticalTo"
								},
                {
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://purl.org/dc/terms/isPartOf"],
									"label": "Is Part Of",
									"description": "A related resource in which the described resource is physically or logically included",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isPartOf"
								},
                {
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://www.europeana.eu/schemas/edm/isRepresentationOf"],
									"label": "Is Representation Of",
									"description": "This property associates a resource to another resource that it represents",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isRepresentationOf"
								},
                {
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://www.europeana.eu/schemas/edm/incorporates"],
									"label": "Incorporates",
									"description": "This property captures the use of some resource to add value to another resource. Such resources may be nested, such as performing a theater play text, and then recording the performance, or creating an artful edition of a collection of poems or just aggregating various poems in an anthology. There may be no single part that contains ultimately the incorporated object, which may be dispersed in the presentation. Therefore, incorporated resources do in general not form proper parts. Incorporated resources are not part of the same resource, but are taken from other resources, and have an independent history. Therefore edm:incorporates is not a sub-property of dcterm:hasPart.",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/incorporates"
								},
                {
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://www.europeana.eu/schemas/edm/happenedAt"],
									"label": "Happened At",
									"description": "This property associates an event with the place at which the event happened",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/happenedAt"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/isDepictedIn"],
									"label": "is depicted in",
									"description": "The selected fragment or artefact (text or image) is depicted in another fragment or artefact (of the same or of different types)",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/isDepictedIn"
								},
				{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/same_as"],
									"label": "is identical to",
									"description": "referential and conceptual identity (cf. OWL sameA)s",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/same_as"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/descriptive_category"],
									"label": "is a",
									"description": "a description/categorization of this physical object",
									"domain": ["http://voc.spatialhumanities.de/ibr/classes#geometric_object"],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/descriptive_category"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/dateOfCreationEntity"],
									"label": "dates to",
									"description": "creation date of the entitiy represented by the specified digital document",
									"domain": ["http://voc.spatialhumanities.de/ibr/classes#geometric_object"],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/dateOfCreationEntity"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/dateOfCreationDigitalDoc"],
									"label": "is digitally born at",
									"description": "creation date of the specified digital document representing certain entity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/dateOfCreationDigitalDoc"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/commentsOn"],
									"label": "comments on",
									"description": "specified text (fragment) comments on specified entity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/commentsOn"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/hasComment"],
									"label": "has comment",
									"description": "text comment on specified entity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/hasComment"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/similarity"],
									"label": "is similar to",
									"description": "The selected fragment or artefact (text or image) is similar to another fragment or artefact (of the same or of different types)",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/similarity"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/differentFrom"],
									"label": "is different from",
									"description": "The selected entity is not identical to the other specified entity (qua type or reference)",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/ibr/properties/differentFrom"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/ibr/properties/author"],
									"label": "has author",
									"description": "The selected text (fragment) has been created by a specific Person",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://purl.org/pundit/ont/ao#fragment-image", "http://xmlns.com/foaf/0.1/Image", "http://schema.org/WebPage"],
									"range": ["http://xmlns.com/foaf/0.1/Person", "http://dbpedia.org/ontology/Person"],
									"value": "http://voc.spatialhumanities.de/ibr/properties/author"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/properties/talksAbout"],
									"label": "talks about",
									"description": "The selected text (fragment) talks about some text, Entity, Person or any other kind of concept",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/properties/talksAbout"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/properties/describedIn"],
									"label": "is described in",
									"description": "The specified entity is described in a text (fragment)",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/properties/describedIn"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/properties/isRelatedTo"],
									"label": "is related to",
									"description": "The selected entity is someway related to another entity",
									"domain": [],
									"range": [],
									"value": "http://voc.spatialhumanities.de/properties/isRelatedTo"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://purl.org/pundit/ont/oa#identifies"],
									"label": "identifies",
									"description": "The selected text (fragment) or geometric object represents this entity",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage", "http://voc.spatialhumanities.de/ibr/classes#geometric_object"],
									"range": [],
									"value": "http://purl.org/pundit/ont/oa#identifies"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/properties/translatesTo"],
									"label": "translates to",
									"description": "The selected text (fragment) translation is given as free text",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage"],
									"range": ["http://www.w3.org/2000/01/rdf-schema#Literal"],
									"value": "http://voc.spatialhumanities.de/properties/translatesTo"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/properties/isTranslationOf"],
									"label": "is translation of",
									"description": "The selected text (fragment) is the translation of another text fragment",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage"],
									"range": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage"],
									"value": "http://voc.spatialhumanities.de/properties/isTranslationOf"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/properties/isWrittenIn"],
									"label": "is written in",
									"description": "The selected text (fragment) is written in the specified language (french, german, english etc)",
									"domain": ["http://purl.org/pundit/ont/ao#fragment-text", "http://schema.org/WebPage"],
									"range": ["http://dbpedia.org/ontology/language"],
									"value": "http://voc.spatialhumanities.de/properties/isWrittenIn"
								},
								{
									"type": ["predicate"],
									"rdftype": ["http://www.w3.org/1999/02/22-rdf-syntax-ns#Property","http://voc.spatialhumanities.de/properties/sameTextAs"],
									"label": "has same text-basis as",
									"description": "The selected document shows the same text as this document, but maybe in a different format.",
									"domain": ["http://schema.org/WebPage"],
									"range": ["http://schema.org/WebPage"],
									"value": "http://voc.spatialhumanities.de/properties/sameTextAs"
								}
							]
						},

		/**
		 * @property punditConfig.modules
		 * @type object
		 * @description Configuration for various Pundit optional modules
		 */
		modules: {


			/**
			 * TODO
			 */
			'pundit.ng.ImageAnnotatorHelper': {
				active: false
			},

			/**
			 * @property punditConfig.modules.annotators
			 * @type object
			 * @description Configuration for Pundit annotators: components who
			 * deal (read, write, visualize etc) with various type of items used
			 * into annotations, for example text fragments, image fragments etc.
			 */
			'annotators': {
				'TextFragmentAnnotator': {
					active: false,
					debug: false
				}
			},

			/**
			 * @property punditConfig.modules.selectors
			 * @type object
			 * @description Configuration for Pundit selectors: components who
			 * retrieve items from remote sources like Freebase, Wordnet, Europeana
			 * etc. Each children should be named after a Selector found in src/selectors
			 * omitting the ending part "Selector". Each object must contain the
			 * properties name (string), label (string) and active (boolean). Moreover
			 * it can contain selector-specific configuration options, like europeanaKey
			 * or limit or keyInputTimerLength. See each selector docs for more info.
			 */
			'selectors': {

//edit IBR: Queries over remote repositories (e.g. europeana) deactivated
			},

			/* Active modules by default: */
			/* TODO: comments about it? */

			'pundit.Help': {
				introductionFile: undefined,
				introductionWindowTitle: '',
				showIntroductionAtLogin: false,
				active: false
			},

			'pundit.ContactHelper': {
				active: false
			},

			'pundit.fasttexthandler': {
				active: false
			},

			'pundit.PageHandler': {
				active: false
			},

			'pundit.ImageFragmentHandler': {
				active: false
			},

			'pundit.ImageAnnotationPanel': {
				active: false
			},

			'pundit.NamedContentHandler': {
				active: false
			},

			'pundit.AnalyticsHelper': {
				active: true
			},

			// Used :-)
			// WARNING: cannot deactivate at the moment!
			'pundit.Recognizer': {
				active: false,
				debug: false,//Felix. s.a. andere
				showAction: false
			},

			// edit IBR: not used
			'pundit.NotebookManager': {
				active: false,
				notebookSharing: true,
				notebookActivation: true,
				showFilteringOptions: false,
				defaultFilteringOption: 'all', // valid options: 'all' | 'active'
				activateFromAnnotations: false,
				askBaseURL: 'http://localhost:8095/ask/', //EXTERNAL_SERVER_ADDRESS
				debug: false//Felix
			}//,

/*			'pundit.XpointersHelper': {
				// Node name and class used to wrap our annotated content
				wrapNodeName: 'span',
				wrapNodeClass: 'cons',

				// Class used on a container to indicate it's a named content: xpointers
				// will start from that node
				contentClasses: ['pundit-content'],

				// Nodes with these classes will be ignored when building xpointers
				// and consolidating annotations
				ignoreClasses: ['cons', 'pundit-icon-annotation']
			}*/

		}

	},

	constructor: function (options) {
		var self = this;

		_PUNDIT.defaults = self.defaults;
		_PUNDIT.config = {};
		self.extend(_PUNDIT.config, _PUNDIT.defaults, self.configMethods);

		if (typeof(punditConfig) !== 'undefined') {
			self.log('Reading user supplied configuration file');
			self.extend(_PUNDIT.config, punditConfig, self.configMethods);
		}

		// TODO: user configuration? from the server? .. after login?
		// TODO: callbacks?

		self.log('Configuration up and running!');
	},

	configMethods: {
		/**
		 * @method isModuleActive
		 * @description Returns true if the given module name is active
		 * @param name {string} a module name
		 * @return {boolean}
		 */
		isModuleActive: function (name) {
			return typeof(this.modules[name]) !== 'undefined' && this.modules[name].active === true;
		}
	},

	/*
	 Functions adapted from :
	 Underscore.js 1.4.2 - http://underscorejs.org
	 (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
	 */
	_isArray: function (obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	},
	_isObject: function (obj) {
		return Object.prototype.toString.call(obj) === '[object Object]';
	},
	_reject: function (obj, iterator, context) {
		var results = [];
		if (obj === null) return results;
		dojo.forEach(obj, function (value, index, list) {
			if (!iterator.call(context, value, index, list))
				results[results.length] = value;
		});
		return results;
	},

	// Extends an object (first parameter) with all of the supplied
	// objects (2nd, 3rd parameters and so on), going deeply into them.
	extend: function (obj) {
		var self = this,
				parentRE = /#{\s*?_\s*?}/,
				slice = Array.prototype.slice,
				hasOwnProperty = Object.prototype.hasOwnProperty;

		dojo.forEach(slice.call(arguments, 1), function (source) {
			for (var prop in source) {
				if (hasOwnProperty.call(source, prop)) {

					// prop undefined: just add it
					if (typeof(obj[prop]) === 'undefined') {
						obj[prop] = source[prop];

						// prop is an array: merge them
					} else if (self._isArray(obj[prop]) || self._isArray(source[prop])) {
						if (!self._isArray(obj[prop]) || !self._isArray(source[prop]))
							self.log('CONF ERROR: array or not? ' + prop);
						else
							obj[prop] = self._reject(self.extend(obj[prop], source[prop]), function (item) {
								return item === null;
							});

						// prop is an object: recurse and extend it
					} else if (self._isObject(obj[prop]) || self._isObject(source[prop])) {
						if (!self._isObject(obj[prop]) || !self._isObject(source[prop]))
							self.log('CONF ERROR: object or not? ' + prop);
						else
							obj[prop] = self.extend(obj[prop], source[prop]);

						// else just overwrite
					} else {
						obj[prop] = source[prop];
					}

				} // if hasOwnProperty.call()
			} // for
		}); // dojo.forEach
		return obj;
	}

});
