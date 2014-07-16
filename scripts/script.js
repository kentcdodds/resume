'use strict';
(function() {
  var app = angular.module('resume', ['ga']);

  app.value('resumeValues', (function() {
    return {
      contact: {
        name: 'Kent C. Dodds',
        email: 'kent@doddsfamily.us',
        phone: '801-810-5373',
        website: 'kent.doddsfamily.us',
        url: 'http://kent.doddsfamily.us'
      },
      education: {
        degree: 'Master of Information Systems Management',
        graduationDate: 'April 2014',
        school: 'Brigham Young University, Provo, UT',
        schoolUrl: 'http://www.byu.edu',
        college: 'Marriott School of Management',
        collegeUrl: 'http://marriottschool.byu.edu',
        imgSrc: '../resume/images/byu.png',
        items: [
          'J. Owen Cherrington Scholarship service to classmates and academic performance',
          'Leadership: AIS Co-President and former BYU Men’s Chorus Vice President'
        ]
      },
      experience: [
        {
          company: 'Domo Technologies Inc.',
          companyUrl: 'http://www.domo.com',
          imgSrc: './images/domo.png',
          jobTitle: 'Software Engineer',
          timeRange: 'December 2012 - Present',
          achievements: [
            'Identified a bottleneck in our frontend build and implemented a fix to make it over 2.5x faster',
            'Worked with a team to implement many key features to be used in a major future unveiling',
            'Working to improve performance of the entire AngularJS application by preparing for update'
          ]
        },
        {
          company: 'United Services Automobile Association (USAA)',
          companyUrl: 'http://www.usaa.com',
          imgSrc: './images/USAA.png',
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
          imgSrc: './images/lds.png',
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
          content: 'JavaScript, HTML5, CSS3, AngularJS, NodeJS, jQuery, MongoDB, Git'
        },
        {
          title: 'Open Source Contributions',
          content: [
            '<a href="http://kent.doddsfamily.us/kcd-angular">kcd-angular</a>',
            '<a href="http://nimbly.github.io/angular-formly">angular-formly</a>',
            '<a href="http://angular-data.pseudobry.com/">angular-data</a>',
            '<a href="http://kent.doddsfamily.us/watchOnce/">watchOnce</a> (AngularJS)',
            '<a href="http://kent.doddsfamily.us/genie/">genie</a> (JavaScript and AngularJS)',
            '<a href="http://issuetemplate.com/">issue-template</a> (GitHub Tool)',
            '<a href="https://github.com/Unitech/angular-bridge">angular-bridge</a> (NodeJS & AngularJS)',
            '<a href="https://github.com/expressjs">express org</a> member (NodeJS)',
            '<a href="https://github.com/firebase">Firebase org</a> member (JavaScript)',
            'See <a href="https://github.com/kentcdodds">GitHub</a>...'
          ].join(', ')
        },
        {
          title: 'Community Activity',
          content: [
            '<a href="http://www.gdgut.com/">Google Developer Group Utah</a> Organizer',
            '<a href="http://www.gdgut.com/io-extended/">Google I/O Extended Utah</a> Organizer',
            'Speaker at: <a href="https://plus.google.com/events/csi6shd32p2i1ctnlh7gkrtd768?authkey=CK2NzLL7vM7HAw">GDG Utah</a>',
            '<a href="http://www.meetup.com/AngularJS-Utah/events/173788512/">AngularJS Utah Meetup</a>',
            'UtahJS <a href="http://conf.utahjs.com/schedule"Conference</a> & <a href="http://www.meetup.com/UtahJS-Orem-Meetup/events/156148202/">Meetup</a>'
          ].join(', ')
        },
        {
          title: 'Volunteer',
          content: 'Two year church mission, Eagle Scout, and currently 11 year old scout leader'
        },
        {
          title: 'Hobbies',
          content: 'Family, faith, friends, making music, ASL, mud running, swimming, biking'
        }
      ]
    };
  })());

  app.controller('MainCtrl', function($scope, resumeValues) {
    angular.extend($scope, resumeValues);
  });
})();
