
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { PlainText, useBlockProps,InspectorControls } from "@wordpress/block-editor";
import './style.scss';


import Edit from './edit';
import save from './save';
import metadata from './block.json';

import {
	PanelBody,
	PanelRow,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    __experimentalText as Text,
	__experimentalHeading as Heading,
	
} from "@wordpress/components";

registerBlockType(metadata.name, {
	
	attributes: {

		cardInformation: {
			type: "object",
			default: {
				img_url:"https://images.unsplash.com/photo-1566307636719-d64033c70066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80",
				title: "Title Here",
				description: "Description Here",
				buttonText: "Read More",
				buttonUrl:"https://google.com"
			}
		},
		
		cardStyle: {
			type: "object",
			default: {
				borderWidth: "2px",
				borderStyle: "",
				borderColor: "",
				borderRadius: "",
			}
		},

		imageStyle: {
			type: "object",
			default: {
				width: "100%",
				objectFit: "",
				borderRadius:""
			}
		},
		titleStyle: {
			type: "object",
			default: {
				fontSize: "",
				color: "",
				fontWeight: "",
				marginTopBottom: "0px",
				textAlign:"left"
			}
		},
		descriptionStyle: {
			type: "object",
			default: {
				fontSize: "",
				color: "",
				fontWeight: "",
				marginTopBottom: "",
				lineHeight: "",
				textAlign: "left"
			}
		},
		buttonStyle: {
			type: "object",
			default: {
				fontSize: "",
				color: "",
				background: "",
				fontWeight: "",
				paddingTopBottom: "0px",
				paddingLeftRight: "0px",
				marginTopBottom: "0px",
				marginLeftRight: "0px",
				borderRadius: "0px",
				align:""
			}
		},
		numberOfCard: {
			type: "string",
			default:"1"
		}
	},
	
	title: __("Card"),
	icon: {
		src: "admin-home",
		background: "red",
		foreground: "white"
	},
	keywords: [
		__("card"),
		__("post")
	],
	category: "common",
	supports: {
		html:false
	},

	edit: Edit,
	save,

} );
