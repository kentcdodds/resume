'use strict';
/*
 If you're looking at this resume to judge my abilities, then please don't.
 I take my craft seriously, but this is one thing that I didn't spend a crazy
 amount of time on. If you're curious how I actually code, please see my
 github profile :-) https://github.com/kentcdodds
 */
(function() {
  var app = angular.module('resume', ['ga']);

  app.value('resumeValues', (function() {
    return {
      contact: {
        name: 'Kent C. Dodds',
        email: 'kent@doddsfamily.us',
        phone: '801-810-5373',
        website: 'kentcdodds.com',
        url: 'http://kentcdodds.com'
      },
      education: {
        degree: 'Master of Information Systems Management',
        graduationDate: 'April 2014',
        school: 'Brigham Young University, Provo, UT',
        schoolUrl: 'http://www.byu.edu',
        college: 'Marriott School of Management',
        collegeUrl: 'http://marriottschool.byu.edu',
        gpa: '3.44',
        items: [
          'J. Owen Cherrington Scholarship for service to classmates and academic performance',
          'Leadership: AIS Co-President and former BYU Men’s Chorus Vice President'
        ]
      },
      experience: [
        {
          company: 'Alianza Inc.',
          companyUrl: 'http://www.alianza.com/',
          jobTitle: 'Software Engineer',
          timeRange: 'October 2014 - Present',
          achievements: [
            'Re-architected frontend application using the latest frontend tools technologies (enabling lazy-loading, ES6, etc.)',
            'Researched technologies and implemented unit testing builds and pull requests, code coverage and quality reporting and tracking, and continuous delivery',
            'Implemented business critical features complete with unit tests',
            'Created a open source presence for the company'
          ]
        },
        {
          company: 'AtTask Inc.',
          companyUrl: 'http://www.workfront.com/',
          jobTitle: 'Software Engineer',
          timeRange: 'August 2014 - October 2014',
          achievements: [
            'Created proposal (which is being implemented) to re-architect and standardize the monolithic frontend application into smaller pieces',
            'Significantly improved performance of a long list of documents by implementing virtual scrolling and pagination'
          ]
        },
        {
          company: 'Domo Technologies Inc.',
          companyUrl: 'http://www.domo.com',
          jobTitle: 'Software Engineer',
          timeRange: 'December 2012 - August 2014',
          achievements: [
            'Identified a bottleneck in our frontend build and implemented a fix to make it over 2.5x faster',
            'Worked with a team to implement many key features to be used in a major future unveiling',
            'Worked to improve performance of the entire AngularJS application by preparing for Angular update'
          ]
        }
      ],
      extraExperience: [
        {
          company: 'United Services Automobile Association (USAA)',
          companyUrl: 'http://www.usaa.com',
          jobTitle: 'Software Engineer',
          timeRange: 'May 2013 - August 2013',
          achievements: [
            'Instructed of over 30 Web Engineers by giving an introductory presentation on AngularJS',
            'Utilized <a href="http://jmpressjs.github.io/jmpress.js">jmpress.js</a> to create and present results of internship experience to executives and received praise as “the best intern presentation ever” from the IT Intern director'
          ]
        },
        {
          company: 'The Church of Jesus Christ of Latter-Day Saints',
          companyUrl: 'http://www.mormon.org',
          jobTitle: 'Business Intelligence Database Engineer',
          timeRange: 'April 2012 - December 2012',
          achievements: [
            'Took initiative to automate emailing of recurring reports to over 20,000 people worldwide',
            'Improved communication and relationships between engineers and customers by coordinating the training of over 50 Database Engineers on a BI specific implementation of Jira',
            'Improved engineer responsiveness to ETL job failures from hours to minutes by writing custom Data Services functions and the Java application mentioned above'
          ]
        }
      ],
      skillsAndAchievements: [
        {
          title: 'Primary Technologies',
          content: 'JavaScript, HTML5, CSS3, AngularJS, ReactJS, Webpack, NodeJS, git'
        },
        {
          title: 'Open Source Contributions',
          content: [
            '<a href="https://github.com/angular/angular.js">AngularJS</a>',
            '<a href="https://github.com/formly-js/angular-formly">angular-formly</a>',
            '<a href="https://github.com/kentcdodds/api-check">api-check</a>',
            '<a href="https://github.com/kentcdodds/ng-stats">ng-stats</a> (AngularJS)',
            '<a href="https://github.com/kentcdodds/genie">genie</a> (JavaScript)',
            '<a href="https://www.npmjs.com/~kentcdodds">various JS libraries</a>',
            '<a href="http://issuetemplate.com/">issue-template</a> (GitHub Tool)'
          ].join(', ')
        },
        {
          title: 'Community Activity',
          content: [
            '<a href="https://github.com/kentcdodds/talks#meetup-talks">Meet-up speaker</a>',
            '<a href="https://github.com/kentcdodds/talks#conference-talks">conference speaker</a>',
            '<a href="https://github.com/kentcdodds/talks#workshops">workshop giver</a>',
            '<a href="https://egghead.io/instructors/kentcdodds">Egghead.io instructor</a>',
            '<a href="http://angular-air.com">Angular Air</a> host',
            '<a href="https://github.com/kentcdodds">coder</a>',
            '<a href="https://medium.com/@kentcdodds">thought</a>-<a href="https://twitter.com/kentcdodds">haver</a>'
          ].join(', ')
        },
        {
          title: 'Volunteer',
          content: 'Two year church mission and Eagle Scout'
        },
        {
          title: 'Hobbies',
          content: 'Family, faith, friends, making music, ASL, aggressive roller blading, snowboarding'
        }
      ]
    };
  })());

  app.controller('MainCtrl', function($scope, resumeValues, $sce) {
    angular.forEach(resumeValues.skillsAndAchievements, function(item, index) {
      resumeValues.skillsAndAchievements[index].content = $sce.trustAsHtml(item.content);
    });
    angular.forEach(resumeValues.experience, fixupExperience);
    angular.forEach(resumeValues.extraExperience, fixupExperience);
    angular.forEach(resumeValues.education.items, function(item, index) {
      resumeValues.education.items[index] = $sce.trustAsHtml(item);
    });
    angular.extend($scope, resumeValues);

    function fixupExperience(item) {
      var achievements = item.achievements;
      angular.forEach(achievements, function(item, index) {
        achievements[index] = $sce.trustAsHtml(item);
      });
    }
  });
})();
