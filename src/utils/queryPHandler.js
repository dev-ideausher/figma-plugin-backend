const getPaginateConfig = queryParams => {
  const {page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', ...otherFilters} = queryParams;

  const filters = {...otherFilters};

  if (queryParams.hasOwnProperty('title') && queryParams.title !== '') {
    filters.title = {$regex: queryParams.title, $options: 'i'};
  }

  if (queryParams.hasOwnProperty('keywords') && queryParams.keywords !== '') {
    filters.keywords = {$in: queryParams.keywords.split(',')};
  }

  const options = {page, limit, sortBy, sortOrder};

  return {filters, options};
};

module.exports = {
  getPaginateConfig,
};
