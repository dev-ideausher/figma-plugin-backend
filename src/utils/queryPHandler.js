const getPaginateConfig = queryParams => {
  const {page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc', searchKeyword, ...otherFilters} = queryParams;

  const filters = {...otherFilters};

  if (searchKeyword && searchKeyword !== '') {
    const regex = new RegExp(searchKeyword, 'i');
    filters.$or = [{title: {$regex: regex}}, {keywords: {$in: [regex]}}];
  }

  const options = {page, limit, sortBy, sortOrder};

  return {filters, options};
};

module.exports = {
  getPaginateConfig,
};
