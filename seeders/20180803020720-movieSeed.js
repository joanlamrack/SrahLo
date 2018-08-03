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
		return queryInterface.bulkInsert("Movies", [
			{
				title:"Ketika Programming bersemi kembali",
				year:2018,
				description:"Seorang programmer akhirnya bertemu dengan laptop lamanya. itu ajah",
				genre:"Comedy",
				pictureDir: "/images/movies/3.jpg",
				createdAt:new Date,
				updatedAt:new Date
			},
			{
				title:"Aquaman",
				year:2018,
				description:"Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.",
				genre:"Action Fantasy",
				pictureDir: "/images/movies/1.jpg",
				createdAt:new Date,
				updatedAt:new Date
			},
			{
				title:"Mission Impossible: Fallout",
				year:2018,
				description:"Two years after Ethan Hunt had successfully captured Solomon Lane, the remnants of the Syndicate have reformed into another organization called the Apostles. ",
				genre:"Comedy",
				pictureDir: "/images/movies/2.jpg",
				createdAt:new Date,
				updatedAt:new Date
			}
		], {});
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
