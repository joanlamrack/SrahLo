"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return queryInterface.bulkInsert("Movies", [{
			title : "Mamma Mia!",
			year : 2009,
			description : "Comedy",
			pictureDir : "/images/movies/mamamia.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "The Equalizer 2",
			year : 2018,
			description : "A man believes he has put his mysterious past behind him and has dedicated himself to beginning a new, quiet life.",
			genre : "Action",
			pictureDir : "/images/movies/equalizer2.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},
		{
			title : "Hotel Transylvania 2",
			year : 2015,
			description : "Dracula and his friends try to bring out the monster in his half human, half vampire grandson in order to keep Mavis from leaving the hotel.",
			genre : "Animation",
			pictureDir : "/images/movies/hoetel.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},
		{
			title : "Ant-Man and the Wasp",
			year : 2018,
			description : "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength",
			genre : "Animation",
			pictureDir  : "/images/movies/Ant-Man.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},
		{
			title : "Incredibles 2",
			year : 2018,
			description : "A Chinese-Canadian woman suffering from empty nest syndrome gets a second shot at motherhood when one of her handmade dumplings comes alive.",
			genre : "Animation",
			pictureDir : "/images/movies/Incredibles.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},
		{
			title : "Jurassic World: Fallen Kingdom",
			year : 2018,
			description : "When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
			genre : "Adventure",
			pictureDir : "/images/movies/jurasic.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},
		{
			title : "Skyscraper",
			year : 2018,
			description : "A security expert must infiltrate a burning skyscraper, 225 stories above ground, when his family are trapped inside by criminals.",
			genre : "Action",
			pictureDir : "/images/movies/Skyscraper.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},
		{
			title : "Coco",
			year : 2017,
			description : "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
			genre : "Animation",
			pictureDir : "/images/movies/Coco.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},
		{
			title : "Blade Runner 2049",
			year : 2017,
			description : "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
			genre : "Sci-Fi",
			pictureDir : "/images/movies/Blade.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},
		{
			title : "Isle of Dogs",
			year : 2018,
			description : "Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog.",
			genre : "Comedy",
			pictureDir : "/images/movies/isle.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},
		{
			title : "Thor: Ragnarok",
			year : 2017,
			description : "Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
			genre : "Action",
			pictureDir : "/images/movies/Ragnarok.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Baby Driver",
			year : 2017,
			description : "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
			genre : "Action",
			pictureDir : "/images/movies/Baby.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "The Greatest Showman",
			year : 2017,
			description : "Celebrates the birth of show business, and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
			genre : "Musical",
			pictureDir : "/images/movies/Greatest.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Upgrade",
			year : 2018,
			description : "Set in the near-future, technology controls nearly all aspects of life. But when Grey, a self-identified technophobe, has his world turned upside down",
			genre : "Action",
			pictureDir : "/images/movies/Upgrade.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Harry Potter and the Sorcerer's Stone",
			year : 2001,
			description : "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.",
			genre : "Fantasy",
			pictureDir : "/images/movies/Potter.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Hereditary",
			year : 2018,
			description : "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets.",
			genre : "",
			pictureDir : "/images/movies/Hereditary.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Sorry to Bother You",
			year : 2018,
			description : "In an alternate present-day version of Oakland, telemarketer Cassius Green discovers a magical key to professional success, propelling him into a universe of greed.",
			genre : "Fantasy",
			pictureDir : "/images/movies/Bother.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "The Shape of Water",
			year : 2017,
			description : "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
			genre : "Fantasy",
			pictureDir : "/images/movies/Shape.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Star Wars: Episode VIII - The Last Jedi",
			year : 2017,
			description : "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
			genre : "Fantasy",
			pictureDir : "/images/movies/Jedi.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Split",
			year : 2016,
			description : "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.",
			genre : "Thriller",
			pictureDir : "/images/movies/Split.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Unbreakable",
			year : 2000,
			description : "A man learns something extraordinary about himself after a devastating accident",
			genre : "Mystery",
			pictureDir : "/images/movies/Unbreakable.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Tully",
			year : 2018,
			description : "A mother of three hires a night nanny to help with her newborn.",
			genre : "Drama",
			pictureDir : "/images/movies/Tully.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "A Prayer Before Dawn",
			year : 2017,
			description : "The true story of an English boxer incarcerated in one of Thailand's most notorious prisons as he fights in Muay Thai tournaments to earn his freedom",
			genre : "Biography",
			pictureDir : "/images/movies/Prayer.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Jumanji: Welcome to the Jungle",
			year : 2017,
			description : "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
			genre : "Adventure",
			pictureDir : "/images/movies/Jumanji.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "The Shawshank Redemption",
			year : 1994,
			description : "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
			genre : "Drama",
			pictureDir : "/images/movies/Shawshank .jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "The Godfather",
			year : 1972,
			description : "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
			genre : "Drama",
			pictureDir : "/images/movies/Godfather.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "The Dark Knight",
			year : 2018,
			description : "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham",
			genre : "Action",
			pictureDir : "/images/movies/Knight.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "12 Angry Men",
			year : 1957,
			description : "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
			genre : "Drama",
			pictureDir : "/images/movies/Angry.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Schindler's List",
			year : 1993,
			description : "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
			genre : "Biography",
			pictureDir : "/images/movies/List.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "The Lord of the Rings: The Return of the King",
			year : 2003,
			description : "Fantasy",
			genre : "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring",
			pictureDir : "/images/movies/Rings.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Fight Club",
			year : 1999,
			description : "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more",
			genre : "Drama",
			pictureDir : "/images/movies/Fight.jpg",
			createdAt : new Date,
			updatedAt : new Date
		},{
			title : "Forrest Gump",
			year : 1994,
			description : "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 7",
			genre : "Drama,",
			pictureDir : "/images/movies/Drama,.jpg",
			createdAt : new Date,
			updatedAt : new Date
		}]

			, {});
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
		return queryInterface.bulkDelete("Movies", null, {});
	}
};
