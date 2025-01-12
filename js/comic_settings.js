//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 39; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = ""; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = 1;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "Cover", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2021, 3, 16), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: `
            <p>If you want to write an author notes section, this'd be the place to do it.</p>
            <p>You can even use whatever html tags you want in here to format it, the script called on your html page should spit out anything you type between these backticks.</p>
            `,
    },
    {
        pgNum: 2,
        title: "1",
        date: writeDate(2021, 3, 17),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>You can have different author notes for every page.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, orci sit amet dignissim eleifend, magna felis malesuada nunc, ut sagittis purus mi ac urna. Fusce ligula urna, varius vel sapien sit amet, vulputate tempor felis. In hac habitasse platea dictumst. Aliquam laoreet volutpat interdum. Vestibulum non libero sit amet leo accumsan porttitor. Vivamus nec porttitor neque. Sed eget mauris quam.</p>
            `,
    },
    {
        pgNum: 3,
        title: "2",
        date: writeDate(2021, 3, 18),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
    {
        pgNum: 4,
        title: "3",
        date: writeDate(2021, 3, 19),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
    {
        pgNum: 5,
        title: "4",
        date: writeDate(2021, 3, 20),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
    {
        pgNum: 6,
        title: `5`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
    {
        pgNum: 7,
        title: `6`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
	    {
        pgNum: 8,
        title: `7`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 9,
        title: `8-9`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 10,
        title: `10`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 11,
        title: `11`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 12,
        title: `12`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 13,
        title: `13`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 14,
        title: `14`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 15,
        title: `15`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 16,
        title: `16`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 17,
        title: `17`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 18,
        title: `18`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 19,
        title: `19`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 20,
        title: `20`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 21,
        title: `21`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 22,
        title: `22`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 23,
        title: `23`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
		    {
        pgNum: 24,
        title: `24`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 25,
        title: `25`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 26,
        title: `26`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 27,
        title: `27`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 28,
        title: `28-29`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 29,
        title: `30`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 30,
        title: `31`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 31,
        title: `32`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 32,
        title: `33`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 33,
        title: `34`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 34,
        title: `35`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 35,
        title: `36`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 36,
        title: `37`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 37,
        title: `38`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 38,
        title: `Thanks!`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
			    {
        pgNum: 39,
        title: `Back Cover`,
        date: writeDate(2021, 3, 21),
        altText: "",
        imageFiles: 1,
        authorNotes: `
            <p>Sed lectus magna, dignissim eu sapien quis, euismod pulvinar diam. In odio massa, auctor blandit dolor id, varius ultricies lacus. Suspendisse sed libero vel leo dictum consectetur. In fringilla elit sit amet placerat varius. Duis vel lacus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin eleifend metus eu ex elementum venenatis. Curabitur sodales, ipsum placerat ornare convallis, sem eros convallis felis, vel efficitur erat ante id diam.</p>
            `,
    },
	
	
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
