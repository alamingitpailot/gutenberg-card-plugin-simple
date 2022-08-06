
import { __ } from '@wordpress/i18n';
import {  PlainText, useBlockProps,InspectorControls ,
	MediaUpload,
	MediaUploadCheck,
	AlignmentToolbar
} from '@wordpress/block-editor';

import './editor.scss';

import {
	Panel,
	PanelBody,
	PanelRow,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
	TextareaControl,
	__experimentalInputControl as InputControl,
	FormFileUpload,
	Button,
	TabPanel,
	FontSizePicker,
	SelectControl,
	RangeControl,
	TextControl,
	__experimentalUnitControl as UnitControl,
	  
	 
} from "@wordpress/components";



export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { cards, cardInformation, cardStyle, imageStyle, titleStyle, descriptionStyle, buttonStyle, numberOfCard } = attributes;

	return (
		<div { ...useBlockProps() }>
			<InspectorControls style={{ marginBottom: "40px" }}>
				<PanelBody>

					<TabPanel
						className="my-tab-panel"
						activeClass="active-tab"
						onSelect=""
						tabs={ [
							{
								name: 'General',
								title: 'General',
								className: 'tab-one',
							},
							{
								name: 'style',
								title: 'Style',
								className: 'tab-two',
							},
						] }
					>
						{(tab) => <>
							{'General' == tab.name && <>
							
							<Card>
								<CardHeader className='components_button_main' >

									<SelectControl
										label="Card Show"
										value={numberOfCard}
										options={ [
											{ label: '1 column', value: '1' },
											{ label: '2 column', value: '2' },
											{ label: '3 column', value: '3' },
										] }
										onChange={(value) => {
											setAttributes({numberOfCard:value})
										}}
										__nextHasNoMarginBottom
        							/>

								<MediaUploadCheck>
									<img src={cardInformation.img_url.url} alt="" />
										<MediaUpload
											onSelect={(media) => {
												const newImage = { ...cardInformation }
												newImage.img_url = media;
												setAttributes({cardInformation:newImage})
											}
											}
											allowedTypes={ [ 'audio' ] }
											value={cardInformation.img_url}
											render={({ open }) => (
												
												<Button className='image_upload_btn' onClick={ open }>Image Upload</Button>
											) }
										/>
								</MediaUploadCheck>
							</CardHeader>

							<CardBody>

								
								{/* 
								*
								*	InputControl Component
								*	Title Field
							    *
								 */}
								
								<InputControl
									className='card_title_label'
									label="Title"
									labelPosition="top"
									value={cardInformation.title}
									type="text"
									onChange={(value) => {
										const newTitle = { ...cardInformation }
										newTitle.title = value;
										setAttributes({cardInformation:newTitle})
									} }
								/>

								{/* 
								*
								*	Textarea Component
								*	Textarea Field
							    *
								 */}

								<TextareaControl
									className='card_description_label'
									label="Description"
									rows={8}
									value={ cardInformation.description }
										onChange={(value) => {
											const newDesValue = { ...cardInformation }
											newDesValue.description = value;
											setAttributes({cardInformation:newDesValue})
								} }
								/>
								
							</CardBody>

							<CardFooter className='card_footer'>
								
								{/* 
								*
								*	Button Text
								*	
							    *
								 */} 
								<div className='c_f_title'>
								 	<h1>Button</h1>
								</div>
								<InputControl
									className='card_title_label'
									label="Button Text"
									labelPosition="top"
									value={cardInformation.buttonText}
									type="text"
									onChange={(value) => {
										const newButtonText = { ...cardInformation }
										newButtonText.buttonText = value;
										setAttributes({cardInformation:newButtonText})
									} }
								/>
								<InputControl
									className='card_title_label'
									label="Button Url"
									labelPosition="top"
									value={cardInformation.buttonUrl}
									type="text"
									onChange={(value) => {
										const newButtonUrl = { ...cardInformation }
										newButtonUrl.buttonUrl = value;
										setAttributes({cardInformation:newButtonUrl})
									} }
								/>

								
								
							</CardFooter>
								</Card>
							</>}
							


							{'style' == tab.name && <Card>
								<Panel header="Card Style Settings" className='main_accrodion_header'>

									{/* Card Style Panel  */}
									<PanelBody title="Card Border" className="accrodion_header"  icon="" initialOpen={true}>
										<PanelRow className='card_panel_style'>
											{/* 
											*card border width   
											*/}
											 

											<RangeControl
												className='card_title_label'
												label="Width"
												value={ cardStyle.borderWidth }
												onChange={(value) => {
													const newBWidth = { ...cardStyle }
													newBWidth.borderWidth = value;
													setAttributes({cardStyle:newBWidth})
												} }
												min={0}
												max={20}
												step={1}
												allowReset={true}
												resetFallbackValue={cardStyle.borderWidth}
												initialPosition={ cardStyle.borderWidth }
											/>

											{/* Card border style  */}
											<SelectControl
												className='card_panel_space card_title_label'
												label="Style"
												value={ cardStyle.borderStyle }
												options={ [
													{ label: 'solid', value: 'solid' },
													{ label: 'dashed', value: 'dashed' },
													{ label: 'double', value: 'double' },
													{ label: 'dotted', value: 'dotted' },
												] }
												onChange={(value) => {
													const newBStyle = { ...cardStyle }
													newBStyle.borderStyle = value;
													setAttributes({cardStyle:newBStyle})
												} }
												__nextHasNoMarginBottom
											/>
											{/* Card border color  */}
											 
											<InputControl
												className='card_panel_space_color_code card_title_label'
												label="Color"
												labelPosition="top"
												value={cardStyle.borderColor}
												type="text"
												onChange={(value) => {
													const newBColor = { ...cardStyle }
													newBColor.borderColor = value;
													setAttributes({cardStyle:newBColor})
												} }
											/>

											{/* border radius  */}
											

											<UnitControl
												className='card_title_label'
												label = "Border Radius"
												onChange={(value) => {
													const newBRadius = { ...cardStyle, borderRadius:value}
													setAttributes({ cardStyle: newBRadius })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ cardStyle.borderRadius }
											/>

											
										</PanelRow>
									</PanelBody>

									{/* Image Accrodion Start  */}
									<PanelBody title="Image Style" className="accrodion_header" icon="" initialOpen={ false }>
										<PanelRow className='card_image_style'>
											
											{/*
											*
											*Image width style
										    *  
											*/}

											<UnitControl
												className='card_title_label'
												label = "Image Width"
												onChange={(value) => {
													const newImageWidth = { ...imageStyle }
													newImageWidth.width = value;
													setAttributes({ imageStyle: newImageWidth })
													
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ imageStyle.width }
											/>

											{/*
											*
											*Image Border Radius style
										    *  
											*/}
											<UnitControl
												className='card_title_label'
												label = "Image Border Radius"
												onChange={(value) => {
													const newBRadius = { ...imageStyle, borderRadius:value }
													setAttributes({ imageStyle: newBRadius })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ imageStyle.borderRadius }
											/>


											{/*
											*
											*Image object fit propertise style
										    *  
											*/}

											<SelectControl
												className='card_title_label'
												label="Style"
												value={ imageStyle.objectFit }
												options={ [
													{ label: 'Cover', value: 'cover' },
													{ label: 'Fill', value: 'fill' },
													{ label: 'Contain', value: 'contain' },
													{ label: 'None', value: 'none' },
												] }
												onChange={(value) => {
													const newImageOfit = { ...imageStyle, objectFit:value }
													setAttributes({ imageStyle:newImageOfit })
												} }
												__nextHasNoMarginBottom
											/>


											
										</PanelRow>
									</PanelBody>

									{/* Card Title Style Panel  */}			
									<PanelBody title="Title" className="accrodion_header"  icon="" initialOpen={false}>
										
										<PanelRow className='card_panel_style'>
											{/* 
											* Title Font size
											*/}

											<FontSizePicker
												fontSizes={[
													{
														name: 'Small',
														size: 12,
														slug: 'small'
													},
													{
														name: 'Normal',
														size: 16,
														slug: 'normal'
													},
													{
														name: 'Big',
														size: 17,
														slug: 'big'
													},
													{
														name: 'Big',
														size: 18,
														slug: 'big'
													},
													{
														name: 'Big',
														size: 19,
														slug: 'big'
													},
													{
														name: 'Big',
														size: 20,
														slug: 'big'
													}
												]}
												onChange={(value) => {
													const newFontSize = { ...titleStyle }
													newFontSize.fontSize = value;
													setAttributes({ titleStyle: newFontSize })
													
												} }
											value={16}
											/>
											
											{/* 
											*
											*Card Title Color  
										    *
											*/}

											<InputControl
												className='card_title_label'
												label="Title Color"
												labelPosition="top"
												value={titleStyle.color}
												type="text"
												onChange={(value) => {
													const newColor = { ...titleStyle }
													newColor.color = value;
													setAttributes({titleStyle:newColor})
												} }
											/>
											{/* 
											*
											* Title Font Weight 
										    *
											*/}
											<SelectControl
												className='card_title_label'
												label="Title Weight"
												value={ titleStyle.fontWeight }
												options={ [
													{ label: '500', value: '500' },
													{ label: '600', value: '600' },
													{ label: '700', value: '700' },
													{ label: '800', value: '800' },
													{ label: '900', value: '900' },

												] }
												onChange={(value) => {
													const newTWeight = { ...titleStyle, fontWeight:value }
													setAttributes({ titleStyle:newTWeight })
												} }
												__nextHasNoMarginBottom
											/>
											{/* 
											*
											* Title Font Margin Top Bottom
										    *
											*/}

											<UnitControl
												className='card_title_label card_panel_space_color_code'
												label = "Title Margin Top Bottom"
												onChange={(value) => {
													const newMTopBottom = { ...titleStyle, marginTopBottom:value }
													setAttributes({ titleStyle: newMTopBottom })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ titleStyle.marginTopBottom }
											/>

											{/* 
											*
											* Title text align
										    *
											*/}
											 
											<div className="textalign_are">
												<h1 className='textAlign_style'>Text Align</h1>
												<AlignmentToolbar
													className="textalign_input"
													value={ titleStyle.textAlign }
													onChange={(value) => {
														const newTextAlign = { ...titleStyle, textAlign:value }
														setAttributes({ titleStyle:newTextAlign })
													} }
												/>
											</div>
											
											

										</PanelRow>
									</PanelBody>

									{/* Card Description Style Panel  */}			
									<PanelBody title="Description" className="accrodion_header"  icon="" initialOpen={false}>
										
										<PanelRow className='card_panel_style'>
											{/* 
											* Description Font size
											*/}

											<FontSizePicker
												fontSizes={[
													{
														name: 'Normal',
														size: 14,
														slug: 'normal'
													},
													{
														name: 'Normal',
														size: 15,
														slug: 'normal'
													},
													{
														name: 'Normal',
														size: 16,
														slug: 'normal'
													},
													{
														name: 'Big',
														size: 17,
														slug: 'big'
													},
													{
														name: 'Big',
														size: 18,
														slug: 'big'
													},
													 
												]}
												onChange={(value) => {
													const newFontSize = { ...descriptionStyle }
													newFontSize.fontSize = value;
													setAttributes({ descriptionStyle: newFontSize })
													
												} }
											value={16}
											/>
											
											{/* 
											*
											* Description Color  
										    *
											*/}

											<InputControl
												className='card_title_label'
												label="Color"
												labelPosition="top"
												value={descriptionStyle.color}
												type="text"
												onChange={(value) => {
													const newColor = { ...descriptionStyle }
													newColor.color = value;
													setAttributes({descriptionStyle:newColor})
												} }
											/>
											{/* 
											*
											* Description Weight 
										    *
											*/}
											<SelectControl
												className='card_title_label'
												label="Weight"
												value={ descriptionStyle.fontWeight }
												options={[
													{ label: '400', value: '400' },
													{ label: '500', value: '500' },
													{ label: '600', value: '600' },
													{ label: '700', value: '700' },
													{ label: '800', value: '800' },
													{ label: '900', value: '900' },

												] }
												onChange={(value) => {
													const newTWeight = { ...descriptionStyle, fontWeight:value }
													setAttributes({ descriptionStyle:newTWeight })
												} }
												__nextHasNoMarginBottom
											/>
											{/* 
											*
											* Description Font Margin Top Bottom
										    *
											*/}

											<UnitControl
												className='card_title_label des_margin_top'
												label = "Margin Top Bottom"
												onChange={(value) => {
													const newMTopBottom = { ...descriptionStyle, marginTopBottom:value }
													setAttributes({ descriptionStyle: newMTopBottom })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ descriptionStyle.marginTopBottom }
											/>

											{/* 
											*
											* Description text align
										    *
											*/}
											<SelectControl
												className='card_title_label'
												label="Text Align"
												value={ descriptionStyle.textAlign }
												options={[
													{ label: 'Center', value: 'center' },
													{ label: 'Justify', value: 'justify' },
													{ label: 'Left', value: 'left' },
													{ label: 'Right', value: 'right' },

												] }
												onChange={(value) => {
													const newTextAlign = { ...descriptionStyle, textAlign:value }
													setAttributes({ descriptionStyle:newTextAlign })
												} }
												__nextHasNoMarginBottom
											/>
											
											{/* 
											*
											* Description line height
										    *
											*/}
											<UnitControl
												className='card_title_label des_margin_top'
												label = "Line Height"
												onChange={(value) => {
													const newLineHeight = { ...descriptionStyle, lineHeight:value }
													setAttributes({ descriptionStyle: newLineHeight })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ descriptionStyle.lineHeight }
											/>

										</PanelRow>
									</PanelBody>

									{/* Card Button Style Panel  */}			
									<PanelBody title="Button Style" className="accrodion_header"  icon="" initialOpen={false}>
										
										<PanelRow className='card_panel_style'>
											{/* 
											* button Font size
											*/}

											<FontSizePicker
												fontSizes={[
													{
														name: 'Normal',
														size: 14,
														slug: 'normal'
													},
													{
														name: 'Normal',
														size: 15,
														slug: 'normal'
													},
													{
														name: 'Normal',
														size: 16,
														slug: 'normal'
													},
													{
														name: 'Medium',
														size: 17,
														slug: 'big'
													},
													{
														name: 'Medium',
														size: 18,
														slug: 'big'
													},
													 
												]}
												onChange={(value) => {
													const newFontSize = { ...buttonStyle }
													newFontSize.fontSize = value;
													setAttributes({ buttonStyle: newFontSize })
													
												} }
											value={buttonStyle.fontSize}
											/>
											
											{/* 
											*
											* Button text Color  
										    *
											*/}

											<InputControl
												className='card_title_label'
												label="Color"
												labelPosition="top"
												value={buttonStyle.color}
												type="text"
												onChange={(value) => {
													const newColor = { ...buttonStyle }
													newColor.color = value;
													setAttributes({buttonStyle:newColor})
												} }
											/>

											{/* 
											*
											* Button BackgroundColor  
										    *
											*/}

											<InputControl
												className='card_title_label'
												label="Background"
												labelPosition="top"
												value={buttonStyle.background}
												type="text"
												onChange={(value) => {
													const newBColor = { ...buttonStyle }
													newBColor.background = value;
													setAttributes({buttonStyle:newBColor})
												} }
											/>


											{/* 
											*
											* button text Weight 
										    *
											*/}
											<SelectControl
												className='card_title_label'
												label="Weight"
												value={ buttonStyle.fontWeight }
												options={[
													{ label: '400', value: '400' },
													{ label: '500', value: '500' },
													{ label: '600', value: '600' },
													{ label: '700', value: '700' },
													{ label: '800', value: '800' },
													{ label: '900', value: '900' },

												] }
												onChange={(value) => {
													const newTWeight = { ...buttonStyle, fontWeight:value }
													setAttributes({ buttonStyle:newTWeight })
												} }
												__nextHasNoMarginBottom
											/>
											
											{/* 
											*
											* Padding Top Bottom
										    *
											*/}
											<span className='button_space'> Padding </span>
											<UnitControl
												className='card_title_label'
												label = "Padding Top Bottom"
												onChange={(value) => {
													const newPTopBottom = { ...buttonStyle, paddingTopBottom:value }
													setAttributes({ buttonStyle: newPTopBottom })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ buttonStyle.paddingTopBottom }
											/>


											{/*
											* Padding Left Right
										    *
											*/}

											<UnitControl
												className='card_title_label'
												label = "Padding Left Right"
												onChange={(value) => {
													const newPLiftRight = { ...buttonStyle, paddingLeftRight:value }
													setAttributes({ buttonStyle: newPLiftRight })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ buttonStyle.paddingLeftRight }
											/>

											{/*
											* Button Radius
										    *
											*/}

											<UnitControl
												className='card_title_label'
												label = "Border Radius"
												onChange={(value) => {
													const newBRadius = { ...buttonStyle, borderRadius:value }
													setAttributes({ buttonStyle: newBRadius })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ buttonStyle.borderRadius }
											/>


											
											{/* 
											*
											* button align
										    *
											*/}
											<SelectControl
												className='card_title_label'
												label="Align"
												value={ buttonStyle.align }
												options={[
													{ label: 'Left', value: 'left' },
													{ label: 'Center', value: 'center' },
													{ label: 'Right', value: 'right' },

												] }
												onChange={(value) => {
													const newAlign = { ...buttonStyle, align:value }
													setAttributes({ buttonStyle:newAlign })
												} }
												__nextHasNoMarginBottom
											/>


											{/* 
											*
											* Button Margin Top Bottom
										    *
											*/}
											<span className='button_space'>Padding</span>
											<UnitControl
												className='card_title_label '
												label = "Margin Top Bottom"
												onChange={(value) => {
													const newMTopBottom = { ...buttonStyle, marginTopBottom:value }
													setAttributes({ buttonStyle: newMTopBottom })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ buttonStyle.marginTopBottom }
											/>

											{/*
											* Button Margin Left Right
										    *
											*/}

											<UnitControl
												className='card_title_label '
												label = "Margin Left Right"
												onChange={(value) => {
													const newMLiftRight = { ...buttonStyle, marginLeftRight:value }
													setAttributes({ buttonStyle: newMLiftRight })
												} }
												onUnitChange=""
												isUnitSelectTabbable
												value={ buttonStyle.marginLeftRight }
											/>

										</PanelRow>
									</PanelBody>
									 
									
								</Panel>
							</Card>}
						</>}
					</TabPanel>

					 
				</PanelBody>
			</InspectorControls>
			
			{/* 
			*-------------------------------------------------
			*Edit FrontEnd 
		  	* 
			*/}
			<div className="main_card_section" style={{ display: 'grid', gridTemplateColumns: `repeat(${numberOfCard}, 1fr)` }}>


				<div className='card_main' style={{borderWidth:cardStyle.borderWidth,borderRadius:cardStyle.borderRadius,borderStyle:cardStyle.borderStyle,borderColor:cardStyle.borderColor}}>
				
					<div className="card_img_area">
						<div className="card_img">
							<img src={cardInformation.img_url.url} alt={cardInformation.img_url.url} style={{ width: imageStyle.width,borderRadius:imageStyle.borderRadius,objectFit:imageStyle.objectFit }} />
						</div>
					</div>
					
					<div className="card_title">
						<h1 style={{
							fontSize: titleStyle.fontSize,
							marginTop: titleStyle.marginTopBottom,
							marginBottom: titleStyle.marginTopBottom, 
							marginLeft: "0px",
							marginRight: "0px",
							color: titleStyle.color,
							fontWeight: titleStyle.fontWeight,
							textAlign:titleStyle.textAlign
						}}>{cardInformation.title}</h1>
					</div>

					<div className="card_description">
						<p style={{
							margin: "0px",
							fontSize: descriptionStyle.fontSize,
							color: descriptionStyle.color,
							fontWeight: descriptionStyle.fontWeight,
							marginLeft: "0px",
							marginRight: "0px",
							marginTop: descriptionStyle.marginTopBottom,
							marginBottom: descriptionStyle.marginTopBottom,
							textAlign: descriptionStyle.textAlign,
							lineHeight:descriptionStyle.lineHeight
						}}>{cardInformation.description}</p>
					</div>
					<div className="card_button" style={{
						textAlign: buttonStyle.align,
						marginTop: buttonStyle.marginTopBottom,
						marginBottom: buttonStyle.marginTopBottom,
						marginRight: buttonStyle.marginLeftRight,
						marginLeft:buttonStyle.marginLeftRight
						
					}}>
						<a href={cardInformation.buttonUrl}
							style={{
								fontSize: buttonStyle.fontSize,
								color: buttonStyle.color,
								background:buttonStyle.background,
								fontWeight: buttonStyle.fontWeight,
								paddingTop: buttonStyle.paddingTopBottom,
								paddingBottom: buttonStyle.paddingTopBottom,
								paddingLeft: buttonStyle.paddingLeftRight,
								paddingRight: buttonStyle.paddingLeftRight,
								borderRadius:buttonStyle.borderRadius,
								
							}}>
							{cardInformation.buttonText}</a>
					</div>
				</div>
			</div>		

		</div>
	);
}
