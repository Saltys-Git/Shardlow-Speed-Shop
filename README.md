# Shardlow-Speed-Shop
A Wheel &amp; Rim Repair Service in Shardlow, Derby DE72 2HL, United Kingdom


**Table of Contents**

|No.|Content|
|---|-------|
|1|[`Tech Stack`](https://github.com/TechysIT/Shardlow-Speed-Shop/blob/main/README.md#tech-stack)|
|2|[`Initial Folder Structure`](https://github.com/TechysIT/Shardlow-Speed-Shop/blob/main/README.md#initial-folder-structure)|
|3|[`Menu Structure`](https://github.com/TechysIT/Shardlow-Speed-Shop/blob/main/README.md#menu-structure)|
|4|[`Referenses`](https://github.com/TechysIT/Shardlow-Speed-Shop/blob/main/README.md#referenses)|
|5|[`Branch Details`](https://github.com/TechysIT/Shardlow-Speed-Shop/blob/main/README.md#branch-details)|
|6|[`Database Model`](https://github.com/TechysIT/Shardlow-Speed-Shop/blob/main/README.md#database-model)|


# Tech Stack

* Language - Typescript
* Frontend - Nextjs, Tailwind, Shadcn, NextUI.
* Backend - Nextjs Api Routes. (Currently Not Required)
* Database - Postgresql. (Currently Not Required)
* Authentication - Clerk. (Currently Not Required)
* JS Libraries - 
	* React hook form with shadcn, 
	* Image Slider 
		>[React Compare Slider Library](https://www.npmjs.com/package/react-compare-slider)  with item label as before and after, changePositionOnHover
	* Nodemailer. (Currently Not Required)

## Initial Folder Structure
* Root
	* public
		* images
			* All images will go here
	* src
		* app
			* api
				* send-mail
					* route.tsx
  				* upload-image
					* route.tsx
			* (image-upload-panel)
				* upload
					* page.tsx
					* ...comps
				* signin
					* page.tsx
					* ...comps
				* layout.tsx
			* (client-panel)
				* wheel-repair-services
					* [...service]
						* page.tsx
					* page.tsx
				* wheel-custom-coloring
					* [...service]
						* page.tsx
					* page.tsx
				* about-us
					* page.tsx
				* contact-us
					* page.tsx
				* careers
					* page.tsx
				* reviews
					* page.tsx
				* gallery
					* page.tsx
				* terms-and-conditions
					* page.tsx
				* privacy-policy
					* page.tsx
				* favicon.ico
				* globals.css
				* Navbar.tsx
     				* Footer.tsx
				* layout.tsx
				* page.tsx
		* components 
			* GetQuoteComp.tsx
   			* ImageSlider.tsx 
		* lib
	* ...Root folder files


## Menu Structure
* Home 
	>Pressable with "/" href
* Wheel Repair Services
	>Pressable with "/wheel-repair-services" href & sub-menu list
	* Sand Blasting 
		>Pressable with "/wheel-repair-services/sand-blasting" href
	* Diamond Cutting
		>Pressable with "/wheel-repair-services/diamond-cutting" href
	* Crack Repair
		>Pressable with "/wheel-repair-services/crack-repair" href
	* Alloy Welding
		>Pressable with "/wheel-repair-services/alloy-welding" href
	* Wheel Straightning
		>Pressable with "/wheel-repair-services/wheel-straightning" href
	* Curve Repair
		>Pressable with "/wheel-repair-services/curve-repair" href
	* Custom or Bespoke Request
		>Pressable with "/wheel-repair-services/custom-or-bespoke-request" href
* Wheel Custom Coloring
	>Pressable with "/wheel-custom-coloring" href & sub-menu list
	* Chemical Dip or Strip ("acid dipping" for reference)
		>Pressable with "/wheel-custom-coloring/chemical-dip" href
	* Powder Coating
		>Pressable with "/wheel-custom-coloring/powder-coating" href
* Our Company
	>Pressable with sub-menu list
	* About Us
		>Pressable with "/about-us" href
	* Contact Us
		>Pressable with "/contact-us" href
	* Careers
		>Pressable with "/careers" href
	* Reviews
		>Pressable with "/reviews" href
* Gallery
	>Pressable with "/gallery" href
* Get a Quote
	>Popup modal with form & same as MoodBoard Site 2

## Database Model
[View on Eraser![](https://app.eraser.io/workspace/ZAdR7ulUFaEI6B3VouxN/preview?elements=51ODcCGx5yA0Wz5CxbvjNA&type=embed)](https://app.eraser.io/workspace/ZAdR7ulUFaEI6B3VouxN?elements=51ODcCGx5yA0Wz5CxbvjNA)


## Referenses
* [TypeScript Style Guide from Google](https://google.github.io/styleguide/tsguide.html)
* [MoodBoard Site 1](https://www.awrswheelrepair.com)
* [MoodBoard Site 2](https://wheelsonsite.com/)
* [UI Design](https://www.figma.com/file/2LezHcfKE9OfcJkR2Ol1n9/Shardlow-Speed-Shop?type=design&mode=design&t=Oj1jXRYdBC3CcLS1-1) 

## Branch Details
* main
  >Only for deployment
* opupal
  >To commit on personal branch
* siam
  >To commit on personal branch
