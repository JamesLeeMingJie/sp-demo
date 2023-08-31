'use strict';
const axios = require('axios');

/**
 * crm controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::crm.crm');
module.exports = createCoreController('api::crm.crm', ({ strapi }) => ({
  async getCRM(ctx) {
    try {
      // fetch data from external API
      const response = await axios.get(
        'https://api.hubapi.com/crm/v3/objects/contacts',
        {
          headers: {
            Authorization:
              'Bearer pat-na1-2655dbaa-62ef-4aab-ad90-a547de6076f4',
          },
        }
      );

      // Check the status code to determine success or failure
      if (response.status >= 200 && response.status < 300) {
        // Success: Status code is in the 2xx range
        const data = response.data;
        ctx.body = data;

        await strapi.entityService.deleteMany('api::crm.crm', {});

        for (const result of data.results) {
          await strapi.entityService.create('api::crm.crm', {
            data: {
              email: result.properties.email,
              firstname: result.properties.firstname,
              lastname: result.properties.lastname,
              createdate: result.properties.createdate,
            },
          });
        }

        return ctx.body;
      } else {
        // Handle the error case here
        console.error(`API request failed with status code ${response.status}`);
        ctx.status = response.status;
        ctx.body = { error: 'API request failed' };
      }
    } catch (error) {
      console.error(error);
      ctx.status = 500; // Internal server error
      ctx.body = { error: 'Internal server error' };
    }
  },
}));
