'use strict';

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
 * get data for each listing
 * create promises for cb
 * run async tasks
 * @param links
 */
const getData = function getData(links) {
  const urls = [];
  links.forEach(item => urls.push(item));

  const careersData = [];

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

  const requests = urls.map(item => {
    return new Promise(resolve => extractData(item, resolve));
  });

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

    for (let i = 0, l = items.length; i < l; i++) {
      const link = $(items[i]).attr('href');
      links.push(link);
    }

    return getData(links);
  });
};

module.exports = getListings();
