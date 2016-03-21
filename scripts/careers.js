'use strict';

// run node scripts/careers.js

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

/**
 * save data to file
 * @param careersData
 */
const saveCareersData = function saveCareersData(careersData) {
  fs.writeFile('./scripts/careers.json', careersData, err => {
    if (err) throw err;
  });
};

/**
 * get data from each listing
 * @param links
 */
const getData = function getData(links) {
  const urls = [];
  const careersData = [];

  /**
   * create job object
   * @param item
   * @param cb
   */
  function extractData(item, cb) {
    request(`http://www.allregionaljobs.com/${item}`, (err, response, document) => {
      if (err) throw err;

      const $ = cheerio.load(document);
      const data = {};

      data.title = $('.job h1').text();
      data.location = $('.job-info-right h3:nth-child(1)').text();
      data.contract = $('.job-info-right h3:nth-child(3)').text();
      data.salary = $('.job-info-right h3:nth-child(4)').text();
      data.description = $('.job_description').html();

      careersData.push(data);

      cb();
    });
  }

  links.forEach(item => {
    urls.push(item);
  });

  /**
   * create promise for each url
   * return fn with cb
   * @type {Array}
   */
  const requests = urls.map(item => {
    return new Promise(resolve => {
      extractData(item, resolve);
    });
  });

  /**
   * all async requests without
   * synchronous execution
   */
  Promise.all(requests).then(() => saveCareersData(JSON.stringify(careersData)));
};

/**
 * get href's from listings page
 * return array
 */
const getListings = function getJobData() {
  const url = 'http://www.allregionaljobs.com/search-results.cfm?type=byrecruiter&recruiter=2405&' +
    'name=My-Choice-Children%27s-Homes-jobs';

  request(url, (err, response, document) => {
    if (err) throw err;

    const $ = cheerio.load(document);
    const links = [];
    const items = $('.calltoactionlink');

    for (let i = 1, l = items.length; i < l; i++) {
      const link = $(items[i]).attr('href');
      links.push(link);
    }

    return getData(links);
  });
};

module.exports = getListings();
